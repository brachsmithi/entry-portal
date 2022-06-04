import React from 'react'
import { render, screen } from '@testing-library/react'
import { personData, personJson } from '../testhelpers/PersonJson'
import DetailPersonScreen from './DetailPersonScreen'

describe('DetailPersonScreen', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('contains nav and display', async () => {
    const personId = personData.id
    // @ts-ignore
    fetch.mockResponseOnce(personJson)
    render(<DetailPersonScreen personId={personId}/>)

    // @ts-ignore
    expect(fetch.mock.calls[0][0]).toEqual(`http://localhost:3000/persons/${personId}.json`)
    expect((await screen.findByText('Back'))).toBeInTheDocument()
    expect(await screen.findByText(personData.name)).toBeInTheDocument()
  })
})