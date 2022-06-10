import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import {
  seriesWithWrapperAndDiscsData,
  seriesWithWrapperAndDiscsJson
} from '../testhelpers/SeriesJson'

describe('Series Integrations', () => {

  beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
  })

  it('loads series from link', async () => {
    // @ts-ignore
    fetch.mockResponseOnce(seriesWithWrapperAndDiscsJson)
    window.history.pushState({}, '', `/series/${seriesWithWrapperAndDiscsData.id}`)
    render(
        <App />
    )

    expect(await screen.findByText(seriesWithWrapperAndDiscsData.name)).toBeInTheDocument()
    expect(await screen.findByText(seriesWithWrapperAndDiscsData.discs[0].name)).toBeInTheDocument()
    expect(await screen.findByText(seriesWithWrapperAndDiscsData.wrapperSeries[0].name)).toBeInTheDocument()
  })
})
