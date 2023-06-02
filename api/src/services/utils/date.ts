import dayjs from 'dayjs'

export const getStartOfDate = (date?: Date): dayjs.Dayjs =>
  date ? dayjs(date).startOf('day') : dayjs().startOf('day')
