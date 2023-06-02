import { db } from 'api/src/lib/db'
import dayjs from 'dayjs'

export default async () => {
  try {
    const today = dayjs().startOf('day')
    const yesterday = today.subtract(1, 'day')
    const theDayBeforeYesterday = yesterday.subtract(1, 'day')
    const twoDaysBack = theDayBeforeYesterday.subtract(1, 'day')
    const tomorrow = today.add(1, 'day')
    const theDayAfterTomorrow = tomorrow.add(1, 'day')
    const theDayAfterTheDayAfterTomorrow = theDayAfterTomorrow.add(1, 'day')

    await db.club.createMany({
      data: [{ name: 'Bassetts' }, { name: 'TVR' }],
    })
    await db.contact.createMany({
      data: [
        { clubId: 1, email: 'test@test.com', name: 'User 1' },
        { clubId: 2, email: 'test@test.com', name: 'User 2' },
      ],
    })
    await db.event.createMany({
      data: [
        { clubId: 1, name: 'A super fun event' },
        { clubId: 1, name: 'Event' },
        { clubId: 1, name: 'An event with a really really long name' },
        { clubId: 2, name: "A different club's event" },
      ],
    })
    await db.eventDay.createMany({
      data: [
        // A past event.
        { eventId: 1, date: twoDaysBack.toDate() },
        { eventId: 1, date: theDayBeforeYesterday.toDate() },
        { eventId: 1, date: yesterday.toDate() },
        // An event in progress.
        { eventId: 2, date: today.toDate() },
        { eventId: 2, date: tomorrow.toDate() },
        { eventId: 2, date: theDayAfterTomorrow.toDate() },
        // eventId: 3 has no eventDays.
        // A future event.
        { eventId: 4, date: tomorrow.toDate() },
        { eventId: 4, date: theDayAfterTomorrow.toDate() },
        { eventId: 4, date: theDayAfterTheDayAfterTomorrow.toDate() },
      ],
    })
    await db.schedule.createMany({
      data: [
        { eventDayId: 1 },
        { eventDayId: 2 },
        { eventDayId: 3 },
        { eventDayId: 4 },
        { eventDayId: 5 },
        { eventDayId: 6 },
        // No 7-9 as the schedules haven't be created yet.
      ],
    })
    await db.race.createMany({
      data: [
        {
          class: 'FOUNDATION',
          division: 1,
          scheduleId: 1,
          team1: 'Team 1',
          team2: 'Team 2',
          type: 'SINGLES',
        },
        {
          class: 'OPEN',
          division: 1,
          scheduleId: 1,
          team1: 'Team 1',
          team2: 'Team 2',
          type: 'TEAMS',
        },
        {
          class: 'FOUNDATION',
          division: 2,
          scheduleId: 1,
          team1: 'Team 3',
          team2: 'Team 4',
          type: 'SINGLES',
        },
        {
          class: 'OPEN',
          division: 1,
          scheduleId: 1,
          team1: 'Team 3',
          team2: 'Team 4',
          type: 'TEAMS',
        },
      ],
    })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
