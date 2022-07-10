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
import { seriesWithWrapperAndDiscsData, seriesWithWrapperAndDiscsJson } from '../../src/testhelpers/SeriesJson'
import { packageWithProgramsData, packageWithProgramsJson } from '../../src/testhelpers/PackageJson'

describe('Location Details', () => {

  it('should display filled location details', () => {
    cy.intercept('GET',
        `http://localhost:3000/series/*.json`,
        seriesWithWrapperAndDiscsJson)
    cy.intercept('GET',
        `http://localhost:3000/discs/${fullyLoadedSortableDiscData.id}.json`,
        discWithProgramsPackageAndNameData)
    cy.intercept('GET',
        `http://localhost:3000/packages/${sortableDiscWithNameAndPackageData.package.id}.json`,
        packageWithProgramsJson)
    cy.intercept('GET',
        `http://localhost:3000/discs/sortable/${locationFilledData.discs[2].id}.json`,
        fullyLoadedSortableDiscJson).as('sortable3')
    cy.intercept('GET',
        `http://localhost:3000/discs/sortable/${locationFilledData.discs[1].id}.json`,
        sortableDiscWithNameAndPackageJson).as('sortable2')
    cy.intercept('GET',
        `http://localhost:3000/discs/sortable/${locationFilledData.discs[0].id}.json`,
        sortableDiscWithNoNameJson).as('sortable1')
    cy.intercept('GET',
        'http://localhost:3000/locations/*.json',
        locationFilledJson)

    cy.visit(`/locations/${locationFilledData.id}`)

    cy.contains(locationFilledData.name)
    cy.contains('FILLED')
    cy.contains('loading...')

    cy.wait(['@sortable1', '@sortable2', '@sortable3'])

    cy.get('div[data-index="0"] > a', {timeout: 3000}).contains(sortableDiscWithNoNameData.displayTitle)
    cy.get('div[data-index="1"] > a', {timeout: 3000}).contains(sortableDiscWithNameAndPackageData.displayTitle)
    cy.contains(sortableDiscWithNameAndPackageData.package.name)
    cy.get('div[data-index="2"] > a', {timeout: 3000}).contains(fullyLoadedSortableDiscData.displayTitle)
    cy.contains(fullyLoadedSortableDiscData.displayTitle).click()

    cy.contains(discWithProgramsPackageAndNameData.name)
    cy.contains(discWithProgramsPackageAndNameData.package.name)

    cy.contains('Back').click()
    cy.contains(locationFilledData.name)

    cy.get('div[data-index="2"] > a', {timeout: 3000}).contains(fullyLoadedSortableDiscData.series.name).click()
    cy.contains(seriesWithWrapperAndDiscsData.name)
    cy.contains(seriesWithWrapperAndDiscsData.wrapperSeries[0].name)

    cy.contains('Back').click()
    cy.contains(locationFilledData.name)

    cy.contains(sortableDiscWithNameAndPackageData.package.name).click()

    cy.contains(packageWithProgramsData.name)
    cy.contains(packageWithProgramsData.discs[0].name)
    cy.contains(packageWithProgramsData.discs[1].name)

    cy.contains('Back').click()
    cy.contains(locationFilledData.name)
  })

})