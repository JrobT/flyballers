import { ClubRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const Club: ClubRelationResolvers = {
  contact: (_obj, { root }) =>
    db.club.findUnique({ where: { id: root?.id } }).contact(),
}
