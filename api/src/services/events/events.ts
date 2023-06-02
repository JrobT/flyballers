import dayjs from 'dayjs'
import type {
  QueryResolvers,
  MutationResolvers,
  EventRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { onlyOne } from '../utils/arrays'
import { getStartOfDate } from '../utils/date'
import { PaginationParams, SKIP_DEFAULT } from '../utils/pagination'

type EventsQueryParams = PaginationParams & {
  inProgressOnly?: boolean
  pastOnly?: boolean
  upcomingOnly?: boolean
}

export const events: QueryResolvers['events'] = async (
  params: EventsQueryParams = {}
) => {
  const {
    inProgressOnly = false,
    pastOnly = false,
    skip = SKIP_DEFAULT,
    upcomingOnly = false,
  } = params

  const isQueryForAllEvents = [inProgressOnly, pastOnly, upcomingOnly].every(
    (queryParam) => !queryParam
  )
  const hasValidQueryParams =
    onlyOne(inProgressOnly, pastOnly, upcomingOnly) || isQueryForAllEvents
  if (!hasValidQueryParams) throw new Error('Invalid query parameters')

  const EVENTS_PER_PAGE = 10
  const take = skip > 0 && (skip - 1) * EVENTS_PER_PAGE
  const events = await db.event.findMany({
    include: {
      club: true,
      eventDays: {
        orderBy: { date: 'asc' },
      },
    },
    ...(skip && skip > 0 && { skip }),
    ...(take && { take }),
  })

  // Events will be in Date order from the first day of the event.
  const orderedEvents = events.sort((a, b) => {
    const dateA = a.eventDays[0]?.date || ''
    const dateB = b.eventDays[0]?.date || ''
    return dateA.toString().localeCompare(dateB.toString())
  })

  if (isQueryForAllEvents) return orderedEvents

  const today = dayjs().startOf('day')

  // An event is in progress if today is after the first day,
  // but before the last day.
  if (inProgressOnly)
    return orderedEvents.filter(
      (event) =>
        today.isAfter(getStartOfDate(event.eventDays[0].date)) &&
        today.isBefore(
          getStartOfDate(event.eventDays[event.eventDays.length - 1].date)
        )
    )

  // An event is finished if today is after the last day.
  if (pastOnly)
    return orderedEvents.filter((event) =>
      today.isAfter(
        getStartOfDate(event.eventDays[event.eventDays.length - 1].date)
      )
    )

  // An event is upcoming if today is before the first day.
  if (upcomingOnly)
    return orderedEvents.filter((event) =>
      today.isBefore(getStartOfDate(event.eventDays[0].date))
    )
}

export const event: QueryResolvers['event'] = ({ id }) =>
  db.event.findUnique({
    where: { id },
  })

export const createEvent: MutationResolvers['createEvent'] = ({ input }) =>
  db.event.create({
    data: input,
  })

export const updateEvent: MutationResolvers['updateEvent'] = ({ id, input }) =>
  db.event.update({
    data: input,
    where: { id },
  })

export const deleteEvent: MutationResolvers['deleteEvent'] = ({ id }) =>
  db.event.delete({
    where: { id },
  })

export const Event: EventRelationResolvers = {
  club: (_obj, { root }) =>
    db.event.findUnique({ where: { id: root?.id } }).club(),
  eventDays: (_obj, { root }) =>
    db.event.findUnique({ where: { id: root?.id } }).eventDays(),
}
