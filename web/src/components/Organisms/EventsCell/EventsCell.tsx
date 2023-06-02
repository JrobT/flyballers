import type { EventsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query EventsQuery {
    events {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export interface SessionsCellProps {
  inProgressOnly?: boolean
  pastOnly?: boolean
  upcomingOnly?: boolean
  skip?: number
  take?: number
}

export const Success = ({ events }: CellSuccessProps<EventsQuery>) => {
  return (
    <ul>
      {events.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
