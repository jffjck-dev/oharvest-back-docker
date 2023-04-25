describe('Load all categories', () => {

    it('should retrieve all categories deserved by the api', () => {
        cy.request('/api/categories')
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');

                const data = response.body[0];
                expect(data).to.be.an('object');
                expect(data).to.have.property('id');
                expect(data).to.have.property('name');
            });
    });
});

describe('GET /api/categories/1', () => {
    it('should retrieve all categories deserved by the api', () => {
        cy.request('/api/categories/1')
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('object');

                const data = response.body;

                expect(data).to.have.property('id');
                expect(data).to.have.property('name');
            });
    });
});