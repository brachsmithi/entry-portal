import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { personData, personJson } from '../testhelpers/PersonJson'

describe('Person Integrations', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('loads person from link', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(personJson)
    window.history.pushState({}, '', `/persons/${personData.id}`)
    render(
        <App />
    )

    expect(await screen.findByText(personData.name)).toBeInTheDocument()
    expect(await screen.findByText(personData.programs[0].title)).toBeInTheDocument()
  })
})
