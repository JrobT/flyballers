import type { MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  const user = db.user.findUnique({
    where: { email: input.email },
  })

  if (user) return user

  return db.user.create({
    data: { club: { connect: { id: input.clubId } }, email: input.email },
  })
}
