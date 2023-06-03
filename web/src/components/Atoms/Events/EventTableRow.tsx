import dayjs from 'dayjs'
import { Event } from 'types/graphql'

interface EventTableRowProps {
  event: Event
}

const EventTableRow: React.FC<EventTableRowProps> = ({ event }) => {
  const eventStartDate = event.eventDays[0]?.date
    ? dayjs(event.eventDays[0]?.date).format('MMM DD, YYYY')
    : ''

  return (
    <tr key={event.id}>
      <td className="w-1/3 px-4 py-2">{event.name}</td>
      <td className="w-1/3 px-4 py-2">{event.club.name}</td>
      <td className="w-1/3 px-4 py-2">{eventStartDate}</td>
    </tr>
  )
}

export default EventTableRow
