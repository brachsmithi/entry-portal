import {
  fullyLoadedDiscData,
  fullyLoadedDiscJson
} from '../../src/testhelpers/DiscJson'
import { programData3, programJson3 } from '../../src/testhelpers/ProgramJson'
import {
  seriesWithProgramsData,
  seriesWithProgramsJson
} from '../../src/testhelpers/SeriesJson'

describe('Disc Details', () => {

  it('loads disc details from the server', () => {
    cy.intercept('GET',
        `http://localhost:3000/discs/*.json`,
        fullyLoadedDiscJson
    )
    cy.intercept('GET',
        'http://localhost:3000/programs/*.json',
        programJson3
    )
    cy.intercept('GET',
        'http://localhost:3000/series/*.json',
        seriesWithProgramsJson
    )

    cy.visit(`/discs/${fullyLoadedDiscData.id}`)

    cy.contains(fullyLoadedDiscData.name)
    cy.contains(fullyLoadedDiscData.package.name)
    cy.contains(fullyLoadedDiscData.format)
    cy.contains(fullyLoadedDiscData.location.name)
    cy.contains(fullyLoadedDiscData.state)

    cy.contains(fullyLoadedDiscData.series[0].name)
    cy.contains(fullyLoadedDiscData.series[1].name).click()

    cy.contains(seriesWithProgramsData.name)
    cy.contains(seriesWithProgramsData.programs[0].title)

    cy.contains('Back').click()
    cy.contains(fullyLoadedDiscData.name)

    cy.contains(fullyLoadedDiscData.programs[0].title)
    cy.contains(fullyLoadedDiscData.programs[1].title).click()

    cy.contains(programData3.title)
    cy.contains(programData3.people[0].name)

    cy.contains('Back').click()
    cy.contains(fullyLoadedDiscData.name)
  })

})