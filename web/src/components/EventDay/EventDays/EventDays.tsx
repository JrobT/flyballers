import type {
  DeleteEventDayMutationVariables,
  FindEventDays,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/EventDay/EventDaysCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_EVENT_DAY_MUTATION = gql`
  mutation DeleteEventDayMutation($id: Int!) {
    deleteEventDay(id: $id) {
      id
    }
  }
`

const EventDaysList = ({ eventDays }: FindEventDays) => {
  const [deleteEventDay] = useMutation(DELETE_EVENT_DAY_MUTATION, {
    onCompleted: () => {
      toast.success('EventDay deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteEventDayMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete eventDay ' + id + '?')) {
      deleteEventDay({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Event id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {eventDays.map((eventDay) => (
            <tr key={eventDay.id}>
              <td>{truncate(eventDay.id)}</td>
              <td>{timeTag(eventDay.date)}</td>
              <td>{truncate(eventDay.eventId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.eventDay({ id: eventDay.id })}
                    title={'Show eventDay ' + eventDay.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEventDay({ id: eventDay.id })}
                    title={'Edit eventDay ' + eventDay.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete eventDay ' + eventDay.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(eventDay.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventDaysList
