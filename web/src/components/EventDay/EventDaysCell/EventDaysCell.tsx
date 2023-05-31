import type { FindEventDays } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import EventDays from 'src/components/EventDay/EventDays'

export const QUERY = gql`
  query FindEventDays {
    eventDays {
      id
      date
      eventId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No eventDays yet. '}
      <Link to={routes.newEventDay()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ eventDays }: CellSuccessProps<FindEventDays>) => {
  return <EventDays eventDays={eventDays} />
}
