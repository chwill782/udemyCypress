describe('Homepage Test', () => {
    it('should load the homepage and display the header', () => {
      // Visit the website
      cy.visit('https://example.cypress.io');
  
      // Verify the header is visible
      cy.get('h1').should('be.visible');
  
      // Assert the header text (optional)
      cy.get('h1').should('contain.text', 'Kitchen Sink');
    });
  });