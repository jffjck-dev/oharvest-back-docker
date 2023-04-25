describe('My first test', () => {
    it('should land on the login page', () => {
        cy.visit('/login');

        cy.get('input[name=mail]').type('kevin.hesse@oharvest.io');

        cy.get('input[name=password]').type('oharvest');

        cy.get('button').contains('se connecter', { matchCase: false }).click();

        cy.url().should('include', '/admin');

        cy.get('p')
            .contains('compte', { matchCase: false})
            .next()
            .contains('se déconnecter', { matchCase: false })
            .click();

        cy.url().should('include', '/login');
    });
});