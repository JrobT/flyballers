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
        { clubId: 1, email: 'test1@test.com', name: 'User 1' },
        { clubId: 2, email: 'test2@test.com', name: 'User 2' },
      ],
    })

    await db.address.createMany({
      data: [
        {
          city: 'Hullavington',
          postalCode: 'SN14 6QP',
          street: 'Court Farm',
          what3words: 'explained.leaps.cute',
        },
      ],
    })
    await db.coordinate.createMany({
      data: [{ addressId: 1, latitude: 51.542846, longitude: -2.145374 }],
    })

    await db.surface.createMany({
      data: [{ name: 'Grass' }],
    })

    await db.event.createMany({
      data: [
        {
          addressId: 1,
          clubId: 1,
          entryFee: 80,
          name: 'A super fun event',
          notes: '',
          openDate: twoDaysBack.toDate(),
          surfaceId: 1,
        },
        {
          addressId: 1,
          closeDate: yesterday.toDate(),
          clubId: 1,
          entryFee: 80.5,
          name: 'Event',
          notes: '',
          openDate: twoDaysBack.toDate(),
          surfaceId: 1,
        },
        {
          addressId: 1,
          closeDate: theDayAfterTomorrow.toDate(),
          clubId: 1,
          entryFee: 8.5,
          name: 'An event with a really really long name',
          notes: '',
          openDate: twoDaysBack.toDate(),
          surfaceId: 1,
        },
        {
          addressId: 1,
          clubId: 2,
          entryFee: 0.5,
          name: "A different club's event",
          notes: '',
          openDate: tomorrow.toDate(),
          surfaceId: 1,
        },
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
