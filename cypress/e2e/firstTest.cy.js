cy.intercept('GET', '/api/users', { fixture: 'users.json' }).as('getUsers');
cy.wait('@getUsers');
