import EventDayCell from 'src/components/EventDay/EventDayCell'

type EventDayPageProps = {
  id: number
}

const EventDayPage = ({ id }: EventDayPageProps) => {
  return <EventDayCell id={id} />
}

export default EventDayPage
