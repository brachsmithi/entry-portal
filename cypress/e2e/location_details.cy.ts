import { locationFilledData, locationFilledJson } from '../../src/testhelpers/LocationJson'
import { discWithProgramsPackageAndNameData } from '../../src/testhelpers/DiscJson'

describe('Location Details', () => {

  it('should display filled location details', () => {
    cy.intercept('GET',
        'http://localhost:3000/locations/*.json',
        locationFilledJson)
    cy.intercept('GET',
        `http://localhost:3000/discs/*.json`,
        discWithProgramsPackageAndNameData)

    cy.visit(`/locations/${locationFilledData.id}`)

    cy.contains(locationFilledData.name)
    cy.contains('FILLED')
    cy.contains(locationFilledData.discs[0].displayName)
    cy.contains(locationFilledData.discs[1].displayName)
    cy.contains(locationFilledData.discs[2].displayName).click()

    cy.contains(discWithProgramsPackageAndNameData.name)
    cy.contains(discWithProgramsPackageAndNameData.package.name)

    cy.contains('Back').click()
    cy.contains(locationFilledData.name)
  })

})