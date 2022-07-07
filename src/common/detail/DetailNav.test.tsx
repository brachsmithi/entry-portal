import React from 'react'
import { render, screen } from "@testing-library/react"
import DetailNav from "./DetailNav"
import userEvent from "@testing-library/user-event"
import { Router } from "react-router-dom"
import { createMemoryHistory } from 'history'

describe('DetailNav', () => {

  it('uses history for back action', async () => {
    const history = createMemoryHistory()
    history.push('/search/programs')
    history.push('/programs/123')
    render(
        <Router history={history}>
          <DetailNav />
        </Router>
    )

    const backElement = screen.getByRole('button')
    await userEvent.click(backElement)
    expect(history.location.pathname).toEqual('/search/programs')
  })

})