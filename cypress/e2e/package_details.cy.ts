import {
  fullyLoadedPackageData,
  fullyLoadedPackageJson
} from '../../src/testhelpers/PackageJson'

describe('Package Details', () => {

  it('should display filled package details', () => {
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
  })

})