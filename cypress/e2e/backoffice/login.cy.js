describe('Testing scenario for logging', () => {
    it('should handle empty email', () => {
        cy.visit('/login');

        cy.get('form').as('form');

        cy.get('@form').get('input[name=mail]').should('have.value', '');
        cy.get('@form').get('input[name=password]').should('have.value', '');

        cy.get('@form').find('button').contains('se connecter', { matchCase: false }).click();

        cy.url().should('match', /login/);

        cy.get('@form')
            .find('.message-body')
            .contains('L\'email doit être renseigné');
    });

    it('should handle empty password', () => {
        cy.visit('/login');

        cy.get('input[name=mail]').type('test@example.io');
        
        cy.get('input[name=password]').should('have.value', '');

        cy.get('button').contains('se connecter', { matchCase: false }).click();

        cy.url().should('match', /login/);

        cy.get('.message-body')
            .contains('Le mot de passe doit être renseigné');
    });

    it('should handle bad format of password', () => {
        cy.visit('/login');

        cy.get('input[name=mail]').type('test@example.io');
        
        cy.get('input[name=password]').type('@(cqjsbcf<hue@&"-ç_è&');

        cy.get('button').contains('se connecter', { matchCase: false }).click();

        cy.url().should('match', /login/);

        cy.get('.message-body')
            .contains('Le mot de passe doit contenir les caractères suivants : A-Z, a-z, 0-9, .!#$%&’*+/=?^_`@~- ');
    });

    it('should handle not existing user', () => {
        cy.visit('/login');

        cy.get('input[name=mail]').type('test@example.io');
        
        cy.get('input[name=password]').type('oharvest');

        cy.get('button').contains('se connecter', { matchCase: false }).click();

        cy.url().should('match', /login/);

        cy.get('.message-body')
            .contains('Utilisateur/mot de passe invalide');
    });

    it('should handle existing user with bad password', () => {
        cy.visit('/login');

        cy.get('input[name=mail]').type('kevin.hesse@oharvest.io');
        
        cy.get('input[name=password]').type('notoharvest');

        cy.get('button').contains('se connecter', { matchCase: false }).click();

        cy.url().should('match', /login/);

        cy.get('.message-body')
            .contains('Utilisateur/mot de passe invalide');
    });

    it('should handle existing user with good password', () => {
        cy.visit('/login');

        cy.get('input[name=mail]').type('kevin.hesse@oharvest.io');
        
        cy.get('input[name=password]').type('oharvest');

        cy.get('button').contains('se connecter', { matchCase: false }).click();

        cy.url().should('match', /admin/);
    });
});
