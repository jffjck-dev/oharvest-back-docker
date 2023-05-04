describe('Testing scenario for plot', () => {
    beforeEach(() => {
        cy.visit('/logout');

        cy.login(Cypress.env('email'), Cypress.env('password'));

        cy.get('.menu').find('a[href="/admin/plots"]').click();
    });

    it('should handle empty form', () => {
        cy.get('a[href="/admin/plots/create"]').click();

        cy.url().should('match', /(?:admin\/plots\/create)/);

        cy.get('form').as('form');

        cy.get('@form').find('input').should('have.value', '');

        cy.get('@form').submit();

        cy.url().should('match', /(?:admin\/plots\/create)/);

        cy.get('@form')
            .find('.message-body')
            .should((text)=> {
                expect(text).to.have.text('Le champ doit être rempli.');
                expect(text).to.have.class('message-body');
            });
    });

    it('should create a new plot', () => {
        cy.get('a[href="/admin/plots/create"]').click();

        cy.url().should('match', /(?:admin\/plots\/create)/);

        cy.get('form').as('form');

        cy.get('@form').find('input').type('test');

        cy.get('@form').submit();

        cy.url().should('match', /(?:admin\/plots)/);

        cy.get('table').as('table');
        cy.get('@table').should('have.class', 'table');

        cy.get('@table')
            .find('td[data-entity-name="test"]')
            .should((text)=> {
                expect(text).to.have.text('test');
            });
    });

    it('should edit a plot', () => {
        cy.get('table').as('table');

        cy.get('@table').should('have.class', 'table');
        
        cy.get('@table')
            .find('td[data-entity-name="test"]').parent().as('raw');

        cy.get('@raw').find('a[href*="edit"]').click();

        cy.get('form').as('form');

        cy.get('@form').find('input').clear().type('test2');

        cy.get('@form').submit();

        cy.url().should('match', /(?:admin\/plots)/);
    });

    it('should delete a plot', () => {
        cy.get('table').as('table');

        cy.get('@table').should('have.class', 'table');
        
        cy.get('@table')
            .find('td[data-entity-name="test2"]').parent().as('raw');

        cy.get('@raw').find('button.button.is-danger').click();

        cy.get('div.modal').as('modal');

        cy.get('@modal').should('have.class', 'is-active');

        cy.get('@modal').find('a[href*=delete]').click();

        cy.get('.message')
            .find('.message-body')
            .should((text)=> {
                expect(text).to.have.text('test2 a été supprimé avec succès!!');
                expect(text).to.have.class('message-body');
            });
    });
});