describe('Stubbing with cy.intercept', () => {
    it('should stub the response', () => {
        const mockPosts = [
            { userId: 1, id: 1, title: 'Mock Post 1', body: 'This is a mock post.' },
        ];

        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
            statusCode: 200,
            body: mockPosts,
        }).as('getMockPosts')

        cy.visit('https://jsonplaceholder.typicode.com')

        cy.contains('posts').click()

        cy.get('pre').should('have.length', 1);
        cy.get('pre').first().should('contain', 'Mock Post 1')
    });
});
