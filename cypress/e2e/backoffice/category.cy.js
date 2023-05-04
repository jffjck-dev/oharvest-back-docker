describe('Testing scenario for category', () => {
    beforeEach(() => {
        cy.visit('/logout');

        cy.login('kevin.hesse@oharvest.io', 'oharvest');

        cy.get('.menu').find('a[href*="/admin/categories"]').click();

        cy.get('a[href="/admin/categories/create"]').click();

        cy.url().should('match', /(?:admin\/categories\/create)/);
    });

    it('should handle empty form', () => {
        cy.get('#formCategory').as('form');

        cy.get('@form').find('input').should('have.value', '');

        cy.get('@form').submit();

        cy.url().should('match', /(?:admin\/categories\/create)/);

        cy.get('@form')
            .find('.message-body')
            .should((text)=> {
                expect(text).to.have.text('Le champ doit être rempli.');
                expect(text).to.have.class('message-body');
            });
        // .should('have.text', 'Le champ doit être rempli.')
        // .should('have.class', 'message-body');
    });

    it('should create a new category', () => {
        cy.get('#formCategory').as('form');

        cy.get('@form').find('input').type('arbre');

        cy.get('@form').submit();

        cy.url().should('match', /(?:admin\/categories)/);

        cy.get('table').as('table');
        cy.get('@table').should('have.class', 'table');

        cy.get('@table')
            .find('td')
            .should((text)=> {
                expect(text).to.have.text('arbre');
            });
    });
});