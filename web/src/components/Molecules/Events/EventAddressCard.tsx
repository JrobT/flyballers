import { Address } from 'types/graphql'

import Card from 'src/components/Atoms/Card'
import Body from 'src/components/Atoms/Typography/Body'
import Header from 'src/components/Atoms/Typography/Header'
import Link from 'src/components/Atoms/Typography/Link'

interface EventAddressCardProps {
  address: Address
}

const EventAddressCard = ({ address }: EventAddressCardProps) => (
  <Card contrast>
    <Header category="tertiary" icon="&#9873;" styles="mb-3">
      How to get here
    </Header>
    <Body styles="text-primary-100">Find us at</Body>
    <Body>
      <span className="font-bold text-white">{address.street}</span>,{' '}
      <span className="font-bold text-white">{address.city}</span>,{' '}
      <span className="font-bold text-white">{address.postalCode}</span>
    </Body>
    {address.what3words && (
      <>
        <Body styles="text-primary-100">
          Or, via{' '}
          <Link
            to={`https://what3words.com/${address.what3words}`}
            external={true}
            styles="font-bold text-white"
          >
            what3words
          </Link>{' '}
          at{' '}
          <Link
            to={`https://what3words.com/${address.what3words}`}
            external={true}
            styles="font-bold text-white"
          >
            &#47;&#47;&#47;{address.what3words}
          </Link>
        </Body>
      </>
    )}
  </Card>
)

export default EventAddressCard
