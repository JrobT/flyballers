import EditEventDayCell from 'src/components/EventDay/EditEventDayCell'

type EventDayPageProps = {
  id: number
}

const EditEventDayPage = ({ id }: EventDayPageProps) => {
  return <EditEventDayCell id={id} />
}

export default EditEventDayPage
