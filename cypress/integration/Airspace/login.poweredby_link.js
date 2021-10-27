describe('Non-functional - Validate powered by link', function() {
    beforeEach(function () {
        cy.fixture('data').then(function (data) {
          this.data = data
        })
    })

    it('Navigate to application URL', function() {
        cy.visit(this.data.loginURL)
    })

    it('Powered by link has blank target attribute', function() {
        cy.get('a[href="http://elementalselenium.com/"]').should('have.attr', 'target', '_blank')
    })
})