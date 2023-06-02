import { render } from '@redwoodjs/testing/web'

import AuthPage from './AuthPage'

describe('AuthPage', () => {
  it('renders successfully', () =>
    expect(() => {
      render(<AuthPage />)
    }).not.toThrow())
})
