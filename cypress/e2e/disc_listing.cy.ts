import {
  discListingForProgramIdData1,
  discListingForProgramIdData2,
  discListingForProgramIdJson,
  PROGRAM_ID_FOR_DISC_LISTING_FILTER
} from '../../src/testhelpers/DiscSearchJson'
import { discWithNameAndSeriesData, discWithNameAndSeriesJSON } from '../../src/testhelpers/DiscJson'

describe('Listing Discs', () => {

  it('loads discs filtered by programs', () => {
    cy.intercept('GET',
        `http://localhost:3000/discs/with_program/${PROGRAM_ID_FOR_DISC_LISTING_FILTER}.json`,
        JSON.parse(discListingForProgramIdJson))
    cy.intercept('GET',
        'http://localhost:3000/discs/*.json',
        JSON.parse(discWithNameAndSeriesJSON))

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