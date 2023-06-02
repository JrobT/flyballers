import { Club, User } from 'types/graphql'

import type { ScenarioData } from '@redwoodjs/testing/api'

type StandardType = {
  club: Record<number, Club>
  user: Record<number, User>
}

export const standard = defineScenario({
  club: {
    1: { data: { id: 1, name: 'Club 1' } },
    2: { data: { id: 2, name: 'Club 2' } },
    3: { data: { id: 3, name: 'Club 3' } },
  },
  user: {
    1: {
      data: {
        club: { connect: { id: 1 } },
        email: 'user1@test.com',
      },
    },
    2: {
      data: {
        club: { connect: { id: 1 } },
        email: 'user2@test.com',
      },
    },
    3: {
      data: {
        club: { connect: { id: 1 } },
        email: 'user3@test.com',
      },
    },
  },
})

export type StandardScenario = ScenarioData<StandardType, 'club', 'user'>
