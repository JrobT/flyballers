import type { EditEventDayById, UpdateEventDayInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EventDayForm from 'src/components/EventDay/EventDayForm'

export const QUERY = gql`
  query EditEventDayById($id: Int!) {
    eventDay: eventDay(id: $id) {
      id
      date
      eventId
    }
  }
`
const UPDATE_EVENT_DAY_MUTATION = gql`
  mutation UpdateEventDayMutation($id: Int!, $input: UpdateEventDayInput!) {
    updateEventDay(id: $id, input: $input) {
      id
      date
      eventId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ eventDay }: CellSuccessProps<EditEventDayById>) => {
  const [updateEventDay, { loading, error }] = useMutation(
    UPDATE_EVENT_DAY_MUTATION,
    {
      onCompleted: () => {
        toast.success('EventDay updated')
        navigate(routes.eventDays())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateEventDayInput,
    id: EditEventDayById['eventDay']['id']
  ) => {
    updateEventDay({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit EventDay {eventDay?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EventDayForm
          eventDay={eventDay}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
