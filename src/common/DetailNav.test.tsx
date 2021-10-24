import React from 'react'
import { render, screen } from "@testing-library/react"
import DetailNav from "./DetailNav"

describe('DetailNav', () => {

  it('should have default buttons', () => {
    render(<DetailNav backPath=''/>)

    expect(screen.getByText('Back')).toBeEnabled()
  })

  it('uses provided callback for back action', () => {
    const path = '/foobar'
    render(<DetailNav backPath={path} />)

    const backElement = screen.getByText('Back')
    expect(backElement.closest('a')).toHaveAttribute('href', path)
  })

})