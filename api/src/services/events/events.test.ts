import type { Event } from '@prisma/client'

import { events, event, createEvent, updateEvent, deleteEvent } from './events'
import type { StandardType } from './events.scenarios'

describe('events', () => {
  scenario('returns all events', async (scenario: StandardType) => {
    const expected = Object.keys(scenario.event)
    const actual = await events()

    expect(actual.length).toEqual(expected.length)
  })

  scenario('returns a single event', async (scenario: StandardType) => {
    const expected = scenario.event.one
    const actual = await event({ id: expected.id })

    expect(actual).toEqual(expected)
  })

  scenario('creates a event', async (scenario: StandardType) => {
    const actual = await createEvent({
      input: { clubId: scenario.event.two.clubId, name: 'Event 4' },
    })

    expect(actual.clubId).toEqual(scenario.event.two.clubId)
    expect(actual.name).toEqual('Event 4')
  })

  scenario('updates a event', async (scenario: StandardType) => {
    const original = (await event({ id: scenario.event.one.id })) as Event
    const expected = { name: 'Updated' }
    const actual = await updateEvent({
      id: original.id,
      input: expected,
    })

    expect(actual.name).toEqual(expected.name)
  })

  scenario('deletes a event', async (scenario: StandardType) => {
    const original = (await deleteEvent({
      id: scenario.event.one.id,
    })) as Event
    const expected = null
    const actual = await event({ id: original.id })

    expect(actual).toEqual(expected)
  })
})
