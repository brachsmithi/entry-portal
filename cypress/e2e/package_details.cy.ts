import {
  fullyLoadedPackageData,
  fullyLoadedPackageJson,
  packageWithProgramsData,
  packageWithProgramsJson
} from '../../src/testhelpers/PackageJson'
import { discWithNameAndSeriesData, discWithNameAndSeriesJSON } from '../../src/testhelpers/DiscJson'
import { programJson3, programData3 } from '../../src/testhelpers/ProgramJson'

describe('Package Details', () => {

  it('should display filled package details', () => {
    cy.intercept('GET',
        'http://localhost:3000/programs/*.json',
        programJson3)
    cy.intercept('GET',
        'http://localhost:3000/discs/*.json',
        discWithNameAndSeriesJSON)
    cy.intercept('GET',
        `http://localhost:3000/packages/${fullyLoadedPackageData.containedPackages[0].id}.json`,
        packageWithProgramsJson)
    cy.intercept('GET',
        `http://localhost:3000/packages/1.json`,
        fullyLoadedPackageJson)

    cy.visit(`/packages/1`)

    cy.contains(fullyLoadedPackageData.name)
    cy.contains(fullyLoadedPackageData.containedPackages[0].name)
    cy.contains(fullyLoadedPackageData.containedPackages[1].name)
    cy.contains(fullyLoadedPackageData.discs[0].name)
    cy.contains(fullyLoadedPackageData.discs[0].format)
    cy.contains(fullyLoadedPackageData.discs[0].programs[0].name)
    cy.contains(fullyLoadedPackageData.discs[0].programs[0].version)
    cy.contains(fullyLoadedPackageData.discs[0].programs[1].name)
    cy.contains(fullyLoadedPackageData.discs[0].programs[1].version)
    cy.contains(fullyLoadedPackageData.discs[1].name)
    cy.contains(fullyLoadedPackageData.discs[1].format)
    cy.contains(fullyLoadedPackageData.discs[1].programs[0].name)
    cy.contains(fullyLoadedPackageData.discs[1].programs[0].version)
    cy.contains(fullyLoadedPackageData.discs[1].programs[1].name)
    cy.contains(fullyLoadedPackageData.discs[1].programs[1].version)

    // contained package link
    cy.contains(fullyLoadedPackageData.containedPackages[0].name).click()
    cy.contains(packageWithProgramsData.name)
    cy.contains(packageWithProgramsData.discs[0].programs[0].name)

    cy.contains('Back').click()
    cy.contains(fullyLoadedPackageData.name)

    // disc link
    cy.contains(fullyLoadedPackageData.discs[1].name).click()
    cy.contains(discWithNameAndSeriesData.name)
    cy.contains(discWithNameAndSeriesData.series[0].name)

    cy.contains('Back').click()
    cy.contains(fullyLoadedPackageData.name)

    // program link
    cy.contains(fullyLoadedPackageData.discs[0].programs[0].name).click()
    cy.contains(programData3.title)
    cy.contains(programData3.year)

    cy.contains('Back').click()
    cy.contains(fullyLoadedPackageData.name)
  })

})