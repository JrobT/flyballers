import { onlyOne } from './arrays'

describe('arrays', () => {
  it('should return true when only one boolean is true', () => {
    expect(onlyOne(true, false, false)).toBe(true)
    expect(onlyOne(false, true, false)).toBe(true)
    expect(onlyOne(false, false, true)).toBe(true)
    expect(onlyOne(true)).toBe(true)
  })

  it('should return false when no boolean is true', () => {
    expect(onlyOne(false, false, false)).toBe(false)
  })

  it('should return false when more than one boolean is true', () => {
    expect(onlyOne(true, true, false)).toBe(false)
    expect(onlyOne(true, false, true)).toBe(false)
    expect(onlyOne(false, true, true)).toBe(false)
    expect(onlyOne(true, true, true)).toBe(false)
  })
})
