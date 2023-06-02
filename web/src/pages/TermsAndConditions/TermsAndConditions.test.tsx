import { render } from '@redwoodjs/testing/web'

import TermsAndConditions from './TermsAndConditions'

describe('TermsAndConditions', () => {
  it('renders successfully', () =>
    expect(() => {
      render(<TermsAndConditions />)
    }).not.toThrow())
})
