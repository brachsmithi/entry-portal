import React from 'react'
import { render, screen } from "@testing-library/react"
import DetailNav from "./DetailNav"

describe('DetailNav', () => {

  it('should have back button', () => {
    render(<DetailNav/>)

    expect(screen.getByText('Back')).toBeEnabled()
  })

})