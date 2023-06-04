import { Surface } from 'types/graphql'

import Card from 'src/components/Atoms/Card'
import Body from 'src/components/Atoms/Typography/Body'
import Header from 'src/components/Atoms/Typography/Header'

interface EventInfoCardProps {
  entryFee: number
  styles?: string
  surface: Surface
}

const EventInfoCard = ({
  entryFee,
  styles = '',
  surface,
}: EventInfoCardProps) => (
  <Card contrast styles={styles}>
    <Header category="tertiary" icon="&#x261F;" styles="mb-3">
      About this event
    </Header>
    <Body styles="text-primary-100">
      Entry will cost{' '}
      <span className="font-bold text-white">
        <span className="text-sm">£</span>
        {entryFee}
      </span>
    </Body>
    <Body styles="text-primary-100">
      We&apos;ll run on{' '}
      <span className="font-bold text-white">{surface.name}</span>
    </Body>
  </Card>
)

export default EventInfoCard
