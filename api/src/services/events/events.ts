import dayjs from 'dayjs'
import type {
  QueryResolvers,
  MutationResolvers,
  EventRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { getStartOfDate } from '../utils/date'
import { PaginationParams, SKIP_DEFAULT } from '../utils/pagination'

type EventsQueryParams = PaginationParams

type EventsResponse = {
  inFuture: unknown[]
  inPast: unknown[]
  inProgress: unknown[]
}

export const events = async (params: EventsQueryParams = {}) => {
  const { skip = SKIP_DEFAULT } = params

  const EVENTS_PER_PAGE = 20
  const take = skip > 0 && (skip - 1) * EVENTS_PER_PAGE
  const events = await db.event.findMany({
    include: {
      club: true,
      eventDays: {
        orderBy: { date: 'desc' },
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

  const today = dayjs().startOf('day')
  const eventsResponse: EventsResponse = {
    inFuture: [],
    inPast: [],
    inProgress: [],
  }

  // An event is upcoming if today is before the first day.
  eventsResponse.inFuture = orderedEvents.filter(
    (event) =>
      !event.eventDays[0]?.date ||
      today.isBefore(getStartOfDate(event.eventDays[0].date))
  )

  // An event is finished if today is after the last day.
  eventsResponse.inPast = orderedEvents.filter((event) => {
    return (
      event.eventDays.length > 0 &&
      today.isAfter(
        getStartOfDate(event.eventDays[event.eventDays.length - 1].date)
      )
    )
  })

  // An event is in progress if today is after the first day,
  // but before the last day.
  eventsResponse.inProgress = orderedEvents.filter(
    (event) =>
      event.eventDays.length > 0 &&
      today.isAfter(getStartOfDate(event.eventDays[0].date)) &&
      today.isBefore(
        getStartOfDate(event.eventDays[event.eventDays.length - 1].date)
      )
  )

  return eventsResponse
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
