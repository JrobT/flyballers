import type {
  DeleteEventDayMutationVariables,
  FindEventDayById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_EVENT_DAY_MUTATION = gql`
  mutation DeleteEventDayMutation($id: Int!) {
    deleteEventDay(id: $id) {
      id
    }
  }
`

interface Props {
  eventDay: NonNullable<FindEventDayById['eventDay']>
}

const EventDay = ({ eventDay }: Props) => {
  const [deleteEventDay] = useMutation(DELETE_EVENT_DAY_MUTATION, {
    onCompleted: () => {
      toast.success('EventDay deleted')
      navigate(routes.eventDays())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteEventDayMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete eventDay ' + id + '?')) {
      deleteEventDay({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            EventDay {eventDay.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{eventDay.id}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(eventDay.date)}</td>
            </tr>
            <tr>
              <th>Event id</th>
              <td>{eventDay.eventId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEventDay({ id: eventDay.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(eventDay.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default EventDay
