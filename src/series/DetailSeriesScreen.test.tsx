import React from 'react'
import { render, screen } from '@testing-library/react'
import { seriesWithPackagesData, seriesWithPackagesJson } from '../testhelpers/SeriesJson'
import DetailSeriesScreen from './DetailSeriesScreen'

describe('DetailSeriesScreen', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('contains nav and display', async () => {
    const seriesId = seriesWithPackagesData.id
    // @ts-ignore
    fetch.mockResponseOnce(seriesWithPackagesJson)
    render(<DetailSeriesScreen seriesId={seriesId}/>)

    // @ts-ignore
    expect(fetch.mock.calls[0][0]).toEqual(`http://localhost:3000/series/${seriesId}.json`)
    expect((await screen.findByText('Back'))).toBeInTheDocument()
    expect(await screen.findByText(seriesWithPackagesData.name)).toBeInTheDocument()
  })
})