export const schema = gql`
  type User {
    id: Int!
    club: Club!
    clubId: Int!
    createdAt: DateTime!
    email: String!
    name: String
    photoUrl: String
  }

  type Club {
    id: Int!
    contact: Contact
    events: [Event]!
    name: String!
  }

  type Contact {
    id: Int!
    club: Club!
    clubId: Int!
    email: String!
    name: String!
  }

  type Event {
    id: Int!
    address: Address!
    addressId: Int!
    closeDate: DateTime
    club: Club!
    clubId: Int!
    entryFee: Float!
    eventDays: [EventDay]!
    name: String!
    notes: String!
    openDate: DateTime!
    surface: Surface!
    surfaceId: Int!
  }

  type Address {
    id: Int!
    city: String!
    coordinates: Coordinate
    postalCode: String!
    street: String!
    what3words: String
  }

  type Coordinate {
    id: Int!
    address: Address!
    addressId: Int!
    latitude: Float!
    longitude: Float!
  }

  type Surface {
    id: Int!
    events: [Event]!
    name: String!
  }

  type EventDay {
    id: Int!
    date: DateTime!
    eventId: Int!
    event: Event!
    schedule: Schedule
  }

  type Schedule {
    id: Int!
    eventDay: EventDay!
    eventDayId: Int!
    races: [Race]!
  }

  enum Class {
    FOUNDATION
    OPEN
  }

  enum Type {
    SINGLES
    TEAMS
  }

  type Race {
    id: Int!
    class: Class!
    division: Int!
    schedule: Schedule!
    scheduleId: Int!
    team1: String!
    team2: String!
    type: Type!
  }

  type EventsResponse {
    inFuture: [Event!]!
    inPast: [Event!]!
    inProgress: [Event!]!
  }

  type Query {
    events: EventsResponse @skipAuth
    event(id: Int!): Event @skipAuth
  }

  input CreateUserInput {
    clubId: Int!
    email: String!
  }

  input CreateClubInput {
    contactId: Int
    name: String!
  }

  input UpdateClubInput {
    contactId: Int
    name: String
  }

  input CreateContactInput {
    clubId: Int!
    email: String!
    name: String!
  }

  input UpdateContactInput {
    clubId: Int
    email: String
    name: String
  }

  input CreateAddressInput {
    city: String!
    postalCode: String!
    street: String!
    what3words: String
  }

  input UpdateAddressInput {
    city: String
    postalCode: String
    street: String
    what3words: String
  }

  input CreateSurfaceInput {
    name: String!
  }

  input UpdateSurfaceInput {
    name: String
  }

  input CreateEventInput {
    addressId: Int!
    closeDate: DateTime
    clubId: Int!
    entryFee: Float!
    name: String!
    notes: String!
    openDate: DateTime!
    surfaceId: Int!
  }

  input UpdateEventInput {
    addressId: Int
    closeDate: DateTime
    clubId: Int
    entryFee: Float
    name: String
    notes: String
    openDate: DateTime
    surfaceId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: Int!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: Int!): Event! @requireAuth
  }
`
