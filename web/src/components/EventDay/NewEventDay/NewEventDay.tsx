import type { CreateEventDayInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EventDayForm from 'src/components/EventDay/EventDayForm'

const CREATE_EVENT_DAY_MUTATION = gql`
  mutation CreateEventDayMutation($input: CreateEventDayInput!) {
    createEventDay(input: $input) {
      id
    }
  }
`

const NewEventDay = () => {
  const [createEventDay, { loading, error }] = useMutation(
    CREATE_EVENT_DAY_MUTATION,
    {
      onCompleted: () => {
        toast.success('EventDay created')
        navigate(routes.eventDays())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateEventDayInput) => {
    createEventDay({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New EventDay</h2>
      </header>
      <div className="rw-segment-main">
        <EventDayForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEventDay
