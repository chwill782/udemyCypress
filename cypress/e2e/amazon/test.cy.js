
describe('Amazon tablet viewport test', () => {
  beforeEach(() => {
    cy.viewport('ipad-mini')
    cy.visit('www.amazon.com')
    cy.pause()
  })
it('should search for a bluetooth toaster on amazon ipad mini', () => {
  cy.get('#twotabsearchtextbox').type('Bluetooth Toaster{enter}')
  cy.get('span.a-color-state').should('contain', 'Bluetooth Toaster')
  })

it('should search for a bluetooth toaster on amazon iphone 14', () => {
  cy.get('#twotabsearchtextbox').type('Iphone 14{enter}')
  cy.get('span.a-color-state').should('contain', 'Iphone 14')
  })
})