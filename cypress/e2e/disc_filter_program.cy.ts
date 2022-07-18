import {
  discListing1,
  discListingForProgramIdData1,
  discListingForProgramIdJson,
  returnDiscListingJson
} from '../../src/testhelpers/DiscSearchJson'
import { discWithNameAndSeriesData, discWithNameAndSeriesJSON } from '../../src/testhelpers/DiscJson'
import { returnSearchListingJson, searchListing1 } from '../../src/testhelpers/ProgramSearchJson'

describe('Filtering Discs', () => {

  it('allows filtering by programs', () => {
    const filterTerm = discListing1.primary.substring(0, 3)
    cy.intercept('GET',
        `http://localhost:3000/discs/with_program/${searchListing1.id}.json`,
        JSON.parse(discListingForProgramIdJson)
    )
    cy.intercept('GET',
        `http://localhost:3000/discs/${discListingForProgramIdData1.id}.json`,
        JSON.parse(discWithNameAndSeriesJSON)
    )
    cy.intercept('GET',
        'http://localhost:3000/discs.json?page=1',
        returnDiscListingJson(1)
    )
    cy.intercept('GET',
        `http://localhost:3000/programs.json?search=${filterTerm}`,
        JSON.parse(returnSearchListingJson(filterTerm, 1, 2, 1))
    )

    // start on disc listing page
    cy.visit('/discs')
    cy.contains(discListing1.primary)

    // apply filter
    cy.get('[placeholder="Enter text"]').type(filterTerm)
    cy.get('ul li').contains(searchListing1.primary).click()

    cy.contains('Page 1 of 1')
    cy.contains(discListingForProgramIdData1.primary).click()

    cy.contains(discWithNameAndSeriesData.name)

    cy.contains('Back').click()

    cy.contains('Page 1 of 1')
    cy.contains(discListingForProgramIdData1.primary)

    // clear filter
    cy.get('a').contains('Clear').click()
    cy.contains(discListing1.primary)
  })

})