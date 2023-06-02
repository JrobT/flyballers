import { db } from 'src/lib/db'

interface SetIdSequenceParams {
  resetValue: number
  typeName: string
}

/**
 * Redwood scenarios don't seem to autoincrement the id sequence when the
 * data is created, therefore, if we want to use 'create', we need to reset
 * the sequence.
 *
 * @param param.resetValue Where the Id autoincrement should start from.
 * @param param.typeName The name of the type which has an autoincrement
 * value within the table.
 */
export const setIdSequence = async ({
  resetValue,
  typeName,
}: SetIdSequenceParams): Promise<void> => {
  let idToReset = ''
  switch (typeName) {
    case 'user':
      idToReset = 'User_id_seq'
      break
    default:
      throw new Error('No id sequence defined for this type name')
  }

  const sequencePromise = db.$queryRawUnsafe(
    `SELECT SETVAL('"${idToReset}"', ${resetValue}, false);`
  )

  await db.$transaction([sequencePromise])
}
