import { Address, Club, Event, EventDay, Surface } from 'types/graphql'

import { getStartOfDate } from '../utils/date'

export type StandardType = {
  address: Record<string, Address>
  club: Record<string, Club>
  event: Record<string, Event>
  eventDay: Record<string, EventDay>
  surface: Record<string, Surface>
}

export const standard = defineScenario({
  address: {
    one: {
      data: {
        id: 1,
        city: 'Hullavington',
        postalCode: 'SN14 6QP',
        street: 'Court Farm',
        what3words: 'explained.leaps.cute',
      },
    },
    two: {
      data: {
        id: 2,
        city: 'Hullavington',
        postalCode: 'SN14 6QP',
        street: 'Court Farm',
        what3words: 'explained.leaps.cute',
      },
    },
    three: {
      data: {
        id: 3,
        city: 'Hullavington',
        postalCode: 'SN14 6QP',
        street: 'Court Farm',
        what3words: 'explained.leaps.cute',
      },
    },
    four: {
      data: {
        id: 4,
        city: 'Hullavington',
        postalCode: 'SN14 6QP',
        street: 'Court Farm',
        what3words: 'explained.leaps.cute',
      },
    },
    five: {
      data: {
        id: 5,
        city: 'Hullavington',
        postalCode: 'SN14 6QP',
        street: 'Court Farm',
        what3words: 'explained.leaps.cute',
      },
    },
    six: {
      data: {
        id: 6,
        city: 'Hullavington',
        postalCode: 'SN14 6QP',
        street: 'Court Farm',
        what3words: 'explained.leaps.cute',
      },
    },
  },
  club: {
    one: { data: { id: 1, name: 'Club 1' } },
    two: { data: { id: 2, name: 'Club 2' } },
    three: { data: { id: 3, name: 'Club 3' } },
    four: { data: { id: 4, name: 'Club 4' } },
    five: { data: { id: 5, name: 'Club 5' } },
    six: { data: { id: 6, name: 'Club 6' } },
  },
  surface: {
    one: { data: { id: 1, name: 'Grass' } },
    two: { data: { id: 2, name: 'Grass' } },
    three: { data: { id: 3, name: 'Grass' } },
    four: { data: { id: 4, name: 'Grass' } },
    five: { data: { id: 5, name: 'Grass' } },
    six: { data: { id: 6, name: 'Grass' } },
  },
  event: {
    one: {
      data: {
        address: { connect: { id: 1 } },
        club: { connect: { id: 1 } },
        entryFee: 80,
        name: 'Event 1',
        notes: '',
        openDate: getStartOfDate().toDate(),
        surface: { connect: { id: 1 } },
      },
    },
    two: {
      data: {
        address: { connect: { id: 1 } },
        club: { connect: { id: 1 } },
        entryFee: 80,
        name: 'Event 2',
        notes: '',
        openDate: getStartOfDate().toDate(),
        surface: { connect: { id: 1 } },
      },
    },
    three: {
      data: {
        address: { connect: { id: 1 } },
        club: { connect: { id: 2 } },
        entryFee: 80,
        name: 'Event 3',
        notes: '',
        openDate: getStartOfDate().toDate(),
        surface: { connect: { id: 1 } },
      },
    },
    four: {
      data: {
        address: { connect: { id: 1 } },
        club: { connect: { id: 4 } },
        entryFee: 80,
        name: 'Event 4',
        notes: '',
        openDate: getStartOfDate().toDate(),
        surface: { connect: { id: 1 } },
      },
    },
    five: {
      data: {
        address: { connect: { id: 1 } },
        club: { connect: { id: 2 } },
        entryFee: 80,
        name: 'Event 5',
        notes: '',
        openDate: getStartOfDate().toDate(),
        surface: { connect: { id: 1 } },
      },
    },
    six: {
      data: {
        address: { connect: { id: 1 } },
        club: { connect: { id: 2 } },
        entryFee: 80,
        name: 'Event 6',
        notes: '',
        openDate: getStartOfDate().toDate(),
        surface: { connect: { id: 1 } },
      },
    },
  },
})
