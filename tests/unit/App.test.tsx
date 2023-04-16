import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../../src/App'

describe('App', () => {
  it('renders h1 element with correct text', () => {
    const { getByRole } = render(<App />)
    const headingElement = getByRole('heading', { level: 1 })
    expect(headingElement).toHaveTextContent('Hello, App!')
  })
})
