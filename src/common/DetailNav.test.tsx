import React from 'react'
import { render, screen } from "@testing-library/react"
import DetailNav from "./DetailNav"
import userEvent from "@testing-library/user-event"

describe('DetailNav', () => {

  it('should have default buttons', () => {
    render(<DetailNav backAction={jest.fn}/>)

    expect(screen.getByText('Back')).toBeEnabled()
  })

  it('uses provided callback for back action', () => {
    const backFunction = jest.fn()
    render(<DetailNav backAction={backFunction} />)

    const backElement = screen.getByText('Back')
    userEvent.click(backElement)

    expect(backFunction).toHaveBeenCalled()
  })

})