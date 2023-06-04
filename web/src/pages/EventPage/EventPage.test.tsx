import { render } from '@redwoodjs/testing/web'

import EventPage from './EventPage'

describe('EventPage', () => {
  it('renders successfully', () =>
    expect(() => {
      render(<EventPage />)
    }).not.toThrow())
})
