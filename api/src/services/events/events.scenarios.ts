import { Club, Event, EventDay } from 'types/graphql'

export type StandardType = {
  club: Record<string, Club>
  event: Record<string, Event>
  eventDay: Record<string, EventDay>
}

export const standard = defineScenario({
  club: {
    one: { data: { id: 1, name: 'Club 1' } },
    two: { data: { id: 2, name: 'Club 2' } },
    three: { data: { id: 3, name: 'Club 3' } },
    four: { data: { id: 4, name: 'Club 4' } },
    five: { data: { id: 5, name: 'Club 5' } },
    six: { data: { id: 6, name: 'Club 6' } },
  },
  event: {
    one: {
      data: {
        clubId: 1,
        name: 'Event 1',
      },
    },
    two: {
      data: {
        clubId: 1,
        name: 'Event 2',
      },
    },
    three: {
      data: {
        clubId: 2,
        name: 'Event 3',
      },
    },
    four: {
      data: {
        clubId: 2,
        name: 'Event 4',
      },
    },
    five: {
      data: {
        clubId: 2,
        name: 'Event 5',
      },
    },
    six: {
      data: {
        clubId: 2,
        name: 'Event 6',
      },
    },
  },
})
