import {
  programListing1,
  programListing2,
  programListing3, programListing4,
  returnProgramListingJson, totalProgramPages
} from '../../src/testhelpers/ProgramSearchJson'

describe('Listing Programs', () => {

  it('loads paginated programs from the server', () => {
    cy.intercept('GET', 'http://localhost:3000/programs.json?page=1', JSON.parse(returnProgramListingJson(1)));
    cy.intercept('GET', 'http://localhost:3000/programs.json?page=2', JSON.parse(returnProgramListingJson(2)));

    cy.visit('/');
    cy.contains(programListing1.primary);
    cy.contains(programListing2.primary);
    cy.contains(programListing3.primary);
    cy.contains(programListing4.primary);
    cy.contains(`Page 1 of ${totalProgramPages}`)

    cy.contains('Next').click()
    cy.contains(`Page 2 of ${totalProgramPages}`)

    cy.contains('Prev').click()
    cy.contains(`Page 1 of ${totalProgramPages}`)
  });

});