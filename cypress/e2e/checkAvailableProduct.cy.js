describe('template spec', () => {
    it('able to login', () => {
        cy.visit('/login');

        cy.get('input[name=mail]').type('kevin.hesse@oharvest.io');

        cy.get('input[name=password]').type('oharvest');

        cy.get('button').contains('se connecter', {matchCase: false}).click();

        cy.get('aside')
            .find('a')
            .contains('produits', {matchCase: false})
            .click();

        cy.get('main')
            .get('table')
            .get('#is-available-1')
            .check();

        cy.intercept('POST', '/admin/products/available').as('updateProductOn');

        cy.get('main')
            .get('table')
            .find('label').should('have.attr', 'for', 'is-available-1')
            .contains('disponible', {matchCase: false});

        cy.get('aside')
            .get('a')
            .contains('Plan de la cueillette', {matchCase: false})
            .click();

        cy.intercept('/api/products/available').as('getAllProductsAvailable');
        cy.wait('@getAllProductsAvailable');

        cy.get('main')
            .get('table')
            .get('[data-row-plot=1]').as('row');

        cy.get('@row')
            .get('[data-plot-id=1]')
            .should('have.class', 'control').as('button');

        cy.get('@button').click();

        cy.get('#modal').as('modal');

        cy.get('@modal').should('have.class', 'is-active');

        cy.get('@modal').get('#form-modal').as('form');

        cy.get('@form').get('select').select('1').should('have.value', '1');

        cy.get('@form').submit();

        cy.intercept('/admin/plots/products/add');

        cy.get('@row').find('span').contains('pomme de terre', {matchCase: false});

        cy.get('aside')
            .find('a')
            .contains('produits', {matchCase: false})
            .click();

        cy.get('main')
            .get('table')
            .get('#is-available-1')
            .uncheck();

        cy.intercept('POST', '/admin/products/available').as('updateProductOff');

        cy.get('aside')
            .get('a')
            .contains('Plan de la cueillette', { matchCase: false})
            .click();

        cy.intercept('/api/products/available').as('getAllProductsAvailable');
        cy.wait('@getAllProductsAvailable');

        cy.get('@row').find('span').contains('pomme de terre').should('not.exist');
    });
});