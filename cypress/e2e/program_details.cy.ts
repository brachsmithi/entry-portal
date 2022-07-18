import {
  programData1,
  programData3,
  programJson1,
  programJson3
} from '../../src/testhelpers/ProgramJson'
import { personData, personJson } from '../../src/testhelpers/PersonJson'
import { seriesWithProgramsData, seriesWithProgramsJson } from '../../src/testhelpers/SeriesJson'
import {
  discListingForProgramIdData1,
  discListingForProgramIdData2,
  discListingForProgramIdJson
} from '../../src/testhelpers/DiscSearchJson'

describe('Program Details', () => {

  it('loads program details from the server', () => {
    cy.intercept('GET', 'http://localhost:3000/programs/*.json', JSON.parse(programJson1))

    cy.visit(`/programs/${programData1.id}`)

    cy.contains(programData1.title)
    cy.contains(programData1.year)
    cy.contains(programData1.version)
    cy.contains(programData1.alternateTitles[0].name)
  });

  it('links to people and series details', () => {
    cy.intercept('GET', 'http://localhost:3000/programs/*.json', JSON.parse(programJson3))
    cy.intercept('GET', 'http://localhost:3000/persons/*.json', JSON.parse(personJson))
    cy.intercept('GET', 'http://localhost:3000/series/*.json', JSON.parse(seriesWithProgramsJson))

    cy.visit(`/programs/${programData3.id}`)

    cy.contains(programData3.people[0].name).click()

    cy.contains(personData.name)
    cy.contains(personData.programs[0].title)
    cy.contains(personData.programs[1].title)

    cy.contains('Back').click()

    cy.contains(programData3.series[0].name).click()

    cy.contains(seriesWithProgramsData.name)
    cy.contains(seriesWithProgramsData.programs[0].title)
    cy.contains(seriesWithProgramsData.programs[1].title)

    cy.contains('Back').click()

    cy.contains(programData3.title)
  })

  it('links to disc listings', () => {
    cy.intercept('GET', 'http://localhost:3000/programs/*.json', JSON.parse(programJson1))
    cy.intercept('GET', 'http://localhost:3000/discs/with_program/*.json', JSON.parse(discListingForProgramIdJson))

    cy.visit(`/programs/${programData1.id}`)
    cy.contains(programData1.title)

    cy.get('a').contains('Discs').click()

    cy.contains('Page 1 of 1')
    cy.contains(discListingForProgramIdData1.primary)
    cy.contains(discListingForProgramIdData2.primary)
  })

});