import {
  programListing1,
  programListing2,
  programListing3,
  programListing4,
  returnProgramListingJson
} from '../../src/testhelpers/ProgramSearchJson'
import { discListing1, discListing2, discListing3, returnDiscListingJson } from '../../src/testhelpers/DiscSearchJson'

describe('Listing Type Menu', () => {

  it('loads listings of the selected types', () => {
    cy.intercept('GET',
        'http://localhost:3000/programs.json?page=1',
        JSON.parse(returnProgramListingJson(1)))
    cy.intercept('GET',
        'http://localhost:3000/discs.json?page=1',
        returnDiscListingJson(1))

    cy.visit('/')

    cy.contains('.listing-type-button', 'P').click()
    cy.contains('Discs').click()
    cy.contains(discListing1.primary)
    cy.contains(discListing2.primary)
    cy.contains(discListing3.primary)

    cy.contains('.listing-type-button', 'D').click()
    cy.contains('Programs').click()
    cy.contains(programListing1.primary)
    cy.contains(programListing2.primary)
    cy.contains(programListing3.primary)
    cy.contains(programListing4.primary)
  })

})