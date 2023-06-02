import dayjs from 'dayjs'

import { getStartOfDate } from './date'

describe('date', () => {
  it('returns the start of the given date when a valid date is provided', () => {
    // Arrange
    const inputDate = new Date('2023-06-01T12:34:56.789Z')
    const expectedStartOfDate = dayjs(inputDate).startOf('day')

    // Act
    const result = getStartOfDate(inputDate)

    // Assert
    expect(result).toEqual(expectedStartOfDate)
  })

  it('returns the start of the current date when no date is provided', () => {
    // Arrange
    const expectedStartOfDate = dayjs().startOf('day')

    // Act
    const result = getStartOfDate()

    // Assert
    expect(result).toEqual(expectedStartOfDate)
  })
})
