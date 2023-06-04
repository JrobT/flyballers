import { AddressRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const Address: AddressRelationResolvers = {
  coordinates: (_obj, { root }) =>
    db.address.findUnique({ where: { id: root?.id } }).coordinates(),
}
