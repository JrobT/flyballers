import type { FindEventDayById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import EventDay from 'src/components/EventDay/EventDay'

export const QUERY = gql`
  query FindEventDayById($id: Int!) {
    eventDay: eventDay(id: $id) {
      id
      date
      eventId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>EventDay not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ eventDay }: CellSuccessProps<FindEventDayById>) => {
  return <EventDay eventDay={eventDay} />
}
