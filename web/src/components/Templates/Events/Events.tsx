import { useState, KeyboardEvent } from 'react'

import { Event } from 'types/graphql'

import { useQuery } from '@redwoodjs/web'

import Header from 'src/components/Atoms/Typography/Header'

import EventTable from '../../Molecules/Events/EventTable'

type EventsResponse = {
  inFuture: Event[]
  inPast: Event[]
  inProgress: Event[]
}

const GET_EVENTS = gql`
  fragment GetEventsEventFields on Event {
    id
    name
    club {
      id
      name
    }
    eventDays {
      date
    }
  }

  query GetEvents {
    events {
      inFuture {
        ...GetEventsEventFields
      }
      inPast {
        ...GetEventsEventFields
      }
      inProgress {
        ...GetEventsEventFields
      }
    }
  }
`

const Events: React.FC = () => {
  const [showInFuture, setShowInFuture] = useState<boolean>(true)
  const [showInPast, setShowInPast] = useState<boolean>(true)
  const [showInProgress, setShowInProgress] = useState<boolean>(true)

  const handleShowInFutureClick = () => setShowInFuture(!showInFuture)

  const handleShowInPastClick = () => setShowInPast(!showInPast)

  const handleShowInProgressClick = () => setShowInProgress(!showInProgress)

  const isEnterKey = (event: KeyboardEvent<HTMLSpanElement>) =>
    event.key === 'Enter' || event.key === ' '

  const handleShowInFutureKeyPress = (
    event: KeyboardEvent<HTMLSpanElement>
  ) => {
    if (isEnterKey(event)) setShowInFuture(!showInFuture)
  }

  const handleShowInPastKeyPress = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (isEnterKey(event)) setShowInPast(!showInPast)
  }

  const handleShowInProgressKeyPress = (
    event: KeyboardEvent<HTMLSpanElement>
  ) => {
    if (isEnterKey(event)) setShowInProgress(!showInProgress)
  }

  const [take, _setTake] = useState<number>(20)
  const { data } = useQuery(GET_EVENTS, {
    variables: {
      take,
    },
  })

  if (!data) {
    return <div>Loading...</div>
  }

  const { events }: { events: EventsResponse } = data

  return (
    <>
      {events.inPast.length > 0 && (
        <div className="md:py-2 lg:py-4">
          <Header category="secondary">
            Finished Events{' '}
            <button
              className="ml-auto font-sans text-base text-primary-900 hover:text-primary-600 focus:outline-none"
              onClick={() => setShowInPast(!showInPast)}
            >
              <span
                onClick={handleShowInPastClick}
                onKeyDown={handleShowInPastKeyPress}
                role="button"
                tabIndex={0}
              >
                {showInPast ? <>&#9660;</> : <>&#9658;</>}
              </span>
              <span className="ml-2">{showInPast ? 'Hide' : 'Show'}</span>
            </button>
          </Header>
          <div className={showInPast ? '' : 'hidden'}>
            <EventTable events={events.inPast} />
          </div>
        </div>
      )}

      {events.inProgress.length > 0 && (
        <div className="md:py-2 lg:py-4">
          <Header category="secondary">
            In Progress{' '}
            <button
              className="ml-auto font-sans text-base text-primary-900 hover:text-primary-600 focus:outline-none"
              onClick={() => setShowInProgress(!showInProgress)}
            >
              <span
                onClick={handleShowInProgressClick}
                onKeyDown={handleShowInProgressKeyPress}
                role="button"
                tabIndex={0}
              >
                {showInProgress ? <>&#9660;</> : <>&#9658;</>}
              </span>
              <span className="ml-2">{showInProgress ? 'Hide' : 'Show'}</span>
            </button>
          </Header>
          <div className={showInProgress ? '' : 'hidden'}>
            <EventTable events={events.inProgress} />
          </div>
        </div>
      )}

      {events.inFuture.length > 0 && (
        <div className="md:py-2 lg:py-4">
          <Header category="secondary">
            Upcoming Events{' '}
            <button
              className="ml-auto font-sans text-base text-primary-900 hover:text-primary-600 focus:outline-none"
              onClick={() => setShowInFuture(!showInFuture)}
            >
              <span
                onClick={handleShowInFutureClick}
                onKeyDown={handleShowInFutureKeyPress}
                role="button"
                tabIndex={0}
              >
                {showInFuture ? <>&#9660;</> : <>&#9658;</>}
              </span>
              <span className="ml-2">{showInFuture ? 'Hide' : 'Show'}</span>
            </button>
          </Header>
          <div className={showInFuture ? '' : 'hidden'}>
            <EventTable events={events.inFuture} />
          </div>
        </div>
      )}
    </>
  )
}

export default Events
