describe('Load all plots', () => {

    it('should retrieve all plots deserved by the api', () => {
        cy.request('/api/plots')
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

describe('GET /api/plots/1', () => {
    it('should retrieve one plot deserved by the api', () => {
        cy.request('/api/plots/1')
            .should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('object');

                const data = response.body;

                expect(data).to.have.property('id');
                expect(data).to.have.property('name');
            });
    });
});

describe('POST /api/plots', () => {
    it('should create a new plot', () => {
        cy.request({
            method: 'POST',
            url: '/api/plots',
            body: {name: 'test'}
        })
            .should(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('object');

                const data = response.body;

                expect(data).to.have.property('id');
                expect(data).to.have.property('name');
            });
    });

    it('should handle empty body', () => {
        cy.request({
            method: 'POST',
            url: '/api/plots',
            body: {},
            failOnStatusCode: false
        })
            .should(response => {
                expect(response.status).to.eq(400);
                expect(response.body).to.be.an('string');
            });
    });
});