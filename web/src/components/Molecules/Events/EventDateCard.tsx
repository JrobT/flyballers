import dayjs from 'dayjs'

import Card from 'src/components/Atoms/Card'
import Body from 'src/components/Atoms/Typography/Body'
import Header from 'src/components/Atoms/Typography/Header'

interface EventDateCardProps {
  closeDate?: Date
  openDate: Date
  styles?: string
}

const EventDateCard = ({ closeDate, openDate, styles }: EventDateCardProps) => {
  const today = dayjs().startOf('day')
  const isTodayBeforeOpenDate = today.isBefore(dayjs(openDate).startOf('day'))
  const isEventOpen =
    (closeDate === undefined || today.isBefore(closeDate)) &&
    today.isAfter(openDate)
  return (
    <Card contrast styles={styles}>
      <Header category="tertiary" icon="&#x270E;" styles="mb-3">
        Sign us up
      </Header>

      {isEventOpen ? (
        closeDate ? (
          <Body styles="text-primary-100">
            You have until{' '}
            <span className="font-bold text-white">
              {dayjs(closeDate).format('MMM DD, YYYY')}
            </span>{' '}
            to apply
          </Body>
        ) : (
          <Body styles="text-primary-100">
            The host hasn&apos;t told us when they&apos;ll stop checking for
            sign ups yet
          </Body>
        )
      ) : isTodayBeforeOpenDate ? (
        <Body styles="text-primary-100">
          Sign up will open on{' '}
          <span className="font-bold text-white">
            {dayjs(openDate).format('MMM DD, YYYY')}
          </span>
        </Body>
      ) : (
        <Body styles="text-primary-100">
          Sign up has <span className="font-bold text-white">closed</span>
        </Body>
      )}
    </Card>
  )
}

export default EventDateCard
