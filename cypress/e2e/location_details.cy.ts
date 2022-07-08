import { locationFilledData, locationFilledJson } from '../../src/testhelpers/LocationJson'
import { discWithProgramsPackageAndNameData } from '../../src/testhelpers/DiscJson'
import {
  fullyLoadedSortableDiscData,
  fullyLoadedSortableDiscJson,
  sortableDiscWithNameAndPackageData,
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
        `http://localhost:3000/discs/${fullyLoadedSortableDiscData.id}.json`,
        discWithProgramsPackageAndNameData)
    cy.intercept('GET',
        `http://localhost:3000/discs/sortable/${locationFilledData.discs[0].id}.json`,
        sortableDiscWithNoNameJson)
    cy.intercept('GET',
        `http://localhost:3000/discs/sortable/${locationFilledData.discs[1].id}.json`,
        sortableDiscWithNameAndPackageJson)
    cy.intercept('GET',
        `http://localhost:3000/discs/sortable/${locationFilledData.discs[2].id}.json`,
        fullyLoadedSortableDiscJson)

    cy.visit(`/locations/${locationFilledData.id}`)

    cy.contains(locationFilledData.name)
    cy.contains('FILLED')
    cy.contains('loading...')

    cy.get('div[data-index="0"] > a', {timeout: 6000}).contains(sortableDiscWithNoNameData.displayTitle)
    cy.get('div[data-index="1"] > a', {timeout: 6000}).contains(sortableDiscWithNameAndPackageData.displayTitle)
    cy.contains(sortableDiscWithNameAndPackageData.package)
    cy.get('div[data-index="2"] > a', {timeout: 6000}).contains(fullyLoadedSortableDiscData.displayTitle)
    cy.contains(fullyLoadedSortableDiscData.series)
    cy.contains(fullyLoadedSortableDiscData.displayTitle).click()

    cy.contains(discWithProgramsPackageAndNameData.name)
    cy.contains(discWithProgramsPackageAndNameData.package.name)

    cy.contains('Back').click()
    cy.contains(locationFilledData.name)
  })

})