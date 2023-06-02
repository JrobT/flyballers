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

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
