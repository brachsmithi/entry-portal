import {
  returnSearchListingJson,
  searchListing1,
  searchListing2,
  searchListing3,
  totalSearchPages
} from '../../src/testhelpers/ProgramSearchJson'

describe('Search Programs', () => {

  it('loads program search from the server', () => {
    const searchTerm = 'title'
    cy.intercept('GET', 'http://localhost:3000/programs.json?search=title&page=1', JSON.parse(returnSearchListingJson(searchTerm, 1, 2, 1)))
    cy.intercept('GET', 'http://localhost:3000/programs.json?search=title&page=2', JSON.parse(returnSearchListingJson(searchTerm, 2, 3, 1)))

    cy.visit('http://localhost:3001/programs?search=title')

    cy.contains(searchListing1.primary)
    cy.contains(searchListing2.primary)
    cy.contains(searchListing3.primary)
    cy.contains(`Page 1 of ${totalSearchPages}`)

    cy.contains('Next').click()
    cy.contains(`Page 2 of ${totalSearchPages}`)

    cy.contains('Prev').click()
    cy.contains(`Page 1 of ${totalSearchPages}`)
  });

});