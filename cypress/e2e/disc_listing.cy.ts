import {
  discListing1,
  discListing2,
  discListing3,
  returnDiscListingJson,
  totalDiscPages
} from '../../src/testhelpers/DiscSearchJson'

describe('Listing Discs', () => {

  it('loads paginated discs from the server', () => {
    cy.intercept('GET',
        'http://localhost:3000/discs.json?page=1',
        returnDiscListingJson(1)
    )
    cy.intercept('GET',
        'http://localhost:3000/discs.json?page=2',
        returnDiscListingJson(2)
    )

    cy.visit('/discs')
    cy.contains(discListing1.primary)
    cy.contains(discListing2.primary)
    cy.contains(discListing3.primary)
    cy.contains(`Page 1 of ${totalDiscPages}`)

    cy.contains('Next').click()
    cy.contains(`Page 2 of ${totalDiscPages}`)

    cy.contains('Prev').click()
    cy.contains(`Page 1 of ${totalDiscPages}`)
  })

})