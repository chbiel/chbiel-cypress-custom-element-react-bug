/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('http://localhost:3000/')
  })
  
  it("clicks button and shows div", () => {
    cy.get("button").click();
    cy.contains('div', "Initial content").should('be.visible');

    cy.get("button").click();
    cy.contains('div', "Initial content").should('not.exist');
  })
})
