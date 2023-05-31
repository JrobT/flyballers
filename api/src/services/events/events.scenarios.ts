import type { Prisma, Event } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: { data: { name: 'Event 1', club: { create: { name: 'Club 1' } } } },
    two: { data: { name: 'Event 2', club: { create: { name: 'Club 2' } } } },
    three: { data: { name: 'Event 3', club: { create: { name: 'Club 2' } } } },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
