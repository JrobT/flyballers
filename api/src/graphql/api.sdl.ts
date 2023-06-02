export const schema = gql`
  enum Class {
    FOUNDATION
    OPEN
  }

  enum Type {
    SINGLES
    TEAMS
  }

  type User {
    id: Int!
    club: Club!
    createdAt: DateTime!
    email: String!
    name: String
    photoUrl: String
    role: String
    updatedAt: DateTime!
  }

  type Contact {
    id: Int!
    club: Club!
    clubId: Int!
    email: String!
    name: String!
  }

  type Club {
    id: Int!
    contact: Contact
    events: [Event]!
    name: String!
  }

  type Event {
    id: Int!
    club: Club!
    clubId: Int!
    eventDays: [EventDay]!
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

  type Query {
    events: [Event!]! @skipAuth
    event(id: Int!): Event @skipAuth
  }

  input CreateUserInput {
    clubId: Int!
    email: String!
  }

  input CreateEventInput {
    clubId: Int!
    name: String!
  }

  input UpdateEventInput {
    clubId: Int
    name: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: Int!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: Int!): Event! @requireAuth
  }
`
