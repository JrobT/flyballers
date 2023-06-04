import { Contact } from 'types/graphql'

import Card from 'src/components/Atoms/Card'
import Body from 'src/components/Atoms/Typography/Body'
import Header from 'src/components/Atoms/Typography/Header'

interface EventClubCardProps {
  contact?: Contact
  name: string
  styles?: string
}

const EventClubCard = ({ contact, name, styles }: EventClubCardProps) => (
  <Card contrast styles={styles}>
    <Header category="tertiary" icon="?" styles="mb-3">
      Who can I talk to
    </Header>
    <Body styles="text-primary-100">
      Your host will be <span className="font-bold text-white">{name}</span>
    </Body>
    {contact && (
      <Body styles="text-primary-100">
        Contact <span className="font-bold text-white">{contact.name}</span> at{' '}
        <span className="font-bold text-white">{contact.email}</span> if you
        need a hand
      </Body>
    )}
  </Card>
)

export default EventClubCard
