import { locationFilledData, locationFilledJson } from '../../src/testhelpers/LocationJson'
import { discWithProgramsPackageAndNameData } from '../../src/testhelpers/DiscJson'
import {
  fullyLoadedSortableDiscJson,
  sortableDiscWithNameAndPackageJson,
  sortableDiscWithNoNameData,
  sortableDiscWithNoNameJson
} from '../../src/testhelpers/DiscSortableJson'

describe('Location Details', () => {

  it('should display filled location details', () => {
    cy.intercept('GET',
        'http://localhost:3000/locations/*.json',
        locationFilledJson)
    cy.intercept('GET',
        `http://localhost:3000/discs/sortable/${locationFilledData.discs[0]}.json`,
        sortableDiscWithNoNameJson)
    cy.intercept('GET',
        `http://localhost:3000/discs/sortable/${locationFilledData.discs[1]}.json`,
        sortableDiscWithNameAndPackageJson)
    cy.intercept('GET',
        `http://localhost:3000/discs/sortable/${locationFilledData.discs[2]}.json`,
        fullyLoadedSortableDiscJson)
    cy.intercept('GET',
        `http://localhost:3000/discs/*.json`,
        discWithProgramsPackageAndNameData)

    cy.visit(`/locations/${locationFilledData.id}`)

    cy.contains(locationFilledData.name)
    cy.contains('FILLED')
    cy.contains('loading...')

    cy.get('div > a').contains(sortableDiscWithNoNameData.displayTitle).click()

    cy.contains(discWithProgramsPackageAndNameData.name)
    cy.contains(discWithProgramsPackageAndNameData.package.name)

    cy.contains('Back').click()
    cy.contains(locationFilledData.name)
  })

})