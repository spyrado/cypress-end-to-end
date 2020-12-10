describe('My First Test', () => {
  it('Finds an element', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url()
      .should('include', '/commands/actions');
  });
});