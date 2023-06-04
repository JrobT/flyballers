import { Event } from 'types/graphql'

import { useParams } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

import Card from 'src/components/Atoms/Card'
import Body from 'src/components/Atoms/Typography/Body'
import Header from 'src/components/Atoms/Typography/Header'
import EventAddressCard from 'src/components/Molecules/Events/EventAddressCard'
import EventClubCard from 'src/components/Molecules/Events/EventClubCard'
import EventDateCard from 'src/components/Molecules/Events/EventDateCard'
import EventInfoCard from 'src/components/Molecules/Events/EventInfoCard'
import EventMap from 'src/components/Molecules/Events/EventMap'

const GET_EVENT_QUERY = gql`
  fragment GetEventEventFields on Event {
    id
    address {
      coordinates {
        latitude
        longitude
      }
      city
      postalCode
      street
      what3words
    }
    closeDate
    club {
      id
      contact {
        email
        name
      }
      name
    }
    entryFee
    eventDays {
      date
    }
    name
    notes
    openDate
    surface {
      name
    }
  }

  query EventDetail($id: Int!) {
    event(id: $id) {
      ...GetEventEventFields
    }
  }
`

const EventDetail = () => {
  const { id } = useParams()
  const { data, loading, error } = useQuery(GET_EVENT_QUERY, {
    variables: { id },
  })

  if (loading) return <div>Loading...</div>

  if (error) return <div>Error: {error.message}</div>

  if (!data || !data.event) return <div>Event not found</div>

  const event: Event = data.event

  return (
    <div className="flex w-full flex-col items-center">
      <Header category="secondary" styles="mb-3">
        {event.name}
      </Header>

      <div className="flex w-full flex-col text-center md:flex-row">
        <Card styles="md:w-1/3">
          <EventInfoCard
            entryFee={event.entryFee}
            styles="h-1/3"
            surface={event.surface}
          />
          <EventDateCard
            closeDate={new Date(event.closeDate)}
            openDate={new Date(event.openDate)}
            styles="h-1/3"
          />
          <EventClubCard
            contact={event.club.contact}
            name={event.club.name}
            styles="h-1/3"
          />
        </Card>

        <Card styles="md:w-2/3 flex-shrink-0">
          {event.notes && <Body>{event.notes}</Body>}
          <EventAddressCard address={event.address} />

          {event.address.coordinates && (
            <EventMap
              coordinates={event.address.coordinates}
              markerText={event.name}
            />
          )}
        </Card>
      </div>
    </div>
  )
}

export default EventDetail
