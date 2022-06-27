import { personWithAliasesData, personWithAliasesJson } from '../../src/testhelpers/PersonJson'

describe('Person Details', () => {

  it('loads person details from the server', () => {
    cy.intercept('GET',
        `http://localhost:3000/persons/${personWithAliasesData.id}.json`,
        JSON.parse(personWithAliasesJson))

    cy.visit(`/persons/${personWithAliasesData.id}`)

    cy.contains(personWithAliasesData.name)
    cy.contains(personWithAliasesData.aliases[0])
    cy.contains(personWithAliasesData.programs[0].title)
  })

})