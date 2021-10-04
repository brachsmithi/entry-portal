import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {

  it('renders pagination nav', () => {
    render(<App />)
    const element = screen.getByText(/Page 1 of 1/i)
    expect(element).toBeInTheDocument()
  })

})
