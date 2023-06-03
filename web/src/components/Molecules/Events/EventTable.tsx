import { Event } from 'types/graphql'

import EventTableHeader from '../../Atoms/Events/EventTableHeader'
import EventTableRow from '../../Atoms/Events/EventTableRow'

interface EventTableProps {
  events: Event[]
}

const EventTable: React.FC<EventTableProps> = ({ events }) => (
  <table className="my-2 min-w-full table-fixed divide-y divide-primary-300">
    <EventTableHeader />
    <tbody className="divide-y divide-primary-300 bg-white">
      {events.map((event) => (
        <EventTableRow event={event} key={event.id} />
      ))}
    </tbody>
  </table>
)

export default EventTable
