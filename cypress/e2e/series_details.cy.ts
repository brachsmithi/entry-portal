import { seriesWithWrapperAndDiscsData, seriesWithWrapperAndDiscsJson } from '../../src/testhelpers/SeriesJson'

describe('Series Details', () => {

  it('loads series details from the server', () => {
    cy.intercept('GET',
        `http://localhost:3000/series/${seriesWithWrapperAndDiscsData.id}.json`,
        seriesWithWrapperAndDiscsJson)

    cy.visit(`/series/${seriesWithWrapperAndDiscsData.id}`)

    cy.contains(seriesWithWrapperAndDiscsData.name)
    cy.contains(seriesWithWrapperAndDiscsData.wrapperSeries[0].name)
    cy.contains(seriesWithWrapperAndDiscsData.discs[0].name)
    cy.contains(seriesWithWrapperAndDiscsData.discs[0].sequence)
  })

})