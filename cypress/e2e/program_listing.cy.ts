import {
  programListing1,
  programListing2,
  programListing3, programListing4,
  returnProgramListingJson, returnSearchListingJson, searchListing1, totalProgramPages
} from '../../src/testhelpers/ProgramSearchJson'
import { programData1, programJson1 } from '../../src/testhelpers/ProgramJson'

describe('Listing Programs', () => {

  it('loads paginated programs from the server', () => {
    cy.intercept('GET', 'http://localhost:3000/programs.json?page=1', JSON.parse(returnProgramListingJson(1)))
    cy.intercept('GET', 'http://localhost:3000/programs.json?page=2', JSON.parse(returnProgramListingJson(2)))

    cy.visit('/')
    cy.contains(programListing1.primary)
    cy.contains(programListing2.primary)
    cy.contains(programListing3.primary)
    cy.contains(programListing4.primary)
    cy.contains(`Page 1 of ${totalProgramPages}`)

    cy.contains('Next').click()
    cy.contains(`Page 2 of ${totalProgramPages}`)

    cy.contains('Prev').click()
    cy.contains(`Page 1 of ${totalProgramPages}`)
  })

  it('makes links to program details', () => {
    cy.intercept('GET', 'http://localhost:3000/programs.json?page=1', JSON.parse(returnProgramListingJson(1)))
    cy.intercept('GET', 'http://localhost:3000/programs/*.json', JSON.parse(programJson1))

    cy.visit('/')
    cy.contains(programListing1.primary).click()

    cy.contains(programData1.title)

    cy.contains('Back').click()

    cy.contains(programListing1.primary)
    cy.contains(programListing2.primary)
  })

  it('allows search', () => {
    const searchTerm = searchListing1.primary.substr(0, 4)
    cy.intercept('GET', 'http://localhost:3000/programs.json?page=1', JSON.parse(returnProgramListingJson(1)))
    cy.intercept('GET', 'http://localhost:3000/programs.json?search=*&page=1', JSON.parse(returnSearchListingJson(searchTerm, 1, 2, 1)))

    cy.get('[placeholder="Enter search text"]').type(searchTerm)
    cy.contains('Search').click()

    cy.contains(searchListing1.primary)
  })

});