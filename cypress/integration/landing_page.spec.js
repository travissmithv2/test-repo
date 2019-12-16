context('Actions', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'));
  });

  it('Create a Business Account .click()', () => {
    cy.get('.custom-container h3').should('have.text', 'Shipping & Mailing Solutions for Businesses');

    cy.get('.primary-btn').click();

    cy.get('h1').should('have.text', 'Tell Us About Your Business');
  })
});
