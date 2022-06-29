import {
  discListing1,
  discListing2,
  discListing3,
  discListingForProgramIdData1,
  discListingForProgramIdData2,
  discListingForProgramIdJson,
  PROGRAM_ID_FOR_DISC_LISTING_FILTER,
  returnDiscListingJson,
  totalDiscPages
} from '../../src/testhelpers/DiscSearchJson'
import { discWithNameAndSeriesData, discWithNameAndSeriesJSON } from '../../src/testhelpers/DiscJson'

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

  it('loads discs filtered by programs', () => {
    cy.intercept('GET',
        `http://localhost:3000/discs/with_program/${PROGRAM_ID_FOR_DISC_LISTING_FILTER}.json`,
        JSON.parse(discListingForProgramIdJson)
    )
    cy.intercept('GET',
        'http://localhost:3000/discs/*.json',
        JSON.parse(discWithNameAndSeriesJSON)
    )

    cy.visit(`/discs/program?programId=${PROGRAM_ID_FOR_DISC_LISTING_FILTER}`)
    cy.contains('Page 1 of 1')
    cy.contains(discListingForProgramIdData1.primary)
    cy.contains(discListingForProgramIdData2.primary).click()

    cy.contains(discWithNameAndSeriesData.name)

    cy.contains('Back').click()

    cy.contains('Page 1 of 1')
    cy.contains(discListingForProgramIdData1.primary)
  })

})