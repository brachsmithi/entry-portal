import { discWithProgramsPackageAndNameData, discWithProgramsPackageAndNameJson } from '../../src/testhelpers/DiscJson'
import { programData3, programJson3 } from '../../src/testhelpers/ProgramJson'

describe('Disc Details', () => {

  it('loads disc details from the server', () => {
    cy.intercept('GET',
        `http://localhost:3000/discs/*.json`,
        discWithProgramsPackageAndNameJson
    )
    cy.intercept('GET',
        'http://localhost:3000/programs/*.json',
        programJson3
    )

    cy.visit(`/discs/${discWithProgramsPackageAndNameData.id}`)

    cy.contains(discWithProgramsPackageAndNameData.name)
    cy.contains(discWithProgramsPackageAndNameData.package.name)
    cy.contains(discWithProgramsPackageAndNameData.format)
    cy.contains(discWithProgramsPackageAndNameData.location.name)
    cy.contains(discWithProgramsPackageAndNameData.state)

    cy.contains(discWithProgramsPackageAndNameData.programs[0].title).click()

    cy.contains(programData3.title)
    cy.contains(programData3.people[0].name)

    cy.contains('Back').click()

    cy.contains(discWithProgramsPackageAndNameData.name)
  })

})