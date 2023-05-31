import type {
  QueryResolvers,
  MutationResolvers,
  EventRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const events: QueryResolvers['events'] = () => db.event.findMany()

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
  club: (_obj, { root }) => db.event.findUnique({ where: { id: root?.id } }).club(),
  eventDays: (_obj, { root }) => db.event.findUnique({ where: { id: root?.id } }).eventDays(),
}
