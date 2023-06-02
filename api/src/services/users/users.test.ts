import { setIdSequence } from 'src/services/utils/tests'

import { createUser } from './users'
import type { StandardScenario } from './users.scenarios'

describe('users', () => {
  scenario('creates a user', async (scenario: StandardScenario) => {
    // Reset the user Id autoincrement to 4, as 3 users have been
    // made by the scenario.
    await setIdSequence({
      resetValue: Object.keys(scenario['user']).length + 1,
      typeName: 'user',
    })

    const expectedEmail = 'user4@test.com'
    const actual = await createUser({
      input: {
        clubId: scenario.club[1].id,
        email: expectedEmail,
      },
    })

    expect(actual.email).toEqual(expectedEmail)
  })
})
