describe('Functional - Successful Login Attempt', function() {
    beforeEach(function () {
        cy.fixture('data').then(function (data) {
          this.data = data
        })
    })

    it('Navigate to application URL', function() {
        cy.visit(this.data.loginURL)
    })
    
    it('Login with valid username and password using Login button', function() {
        cy.get('[id=username]').type(this.data.username)
        cy.get('[id=password]').should('have.attr', 'type', 'password')
        cy.get('[id=password]').type(this.data.password)
        cy.get('[type=submit]').click()
        cy.contains(this.data.loginsuccess).should('be.visible')
        cy.contains(this.data.landingpagetitle).should('be.visible')
        cy.contains(this.data.landingpagewelcome).should('be.visible')
        cy.get('a[href*="/logout"]').click()
        cy.contains(this.data.logoutsuccess).should('be.visible')
    })

    it('Login with valid username and password using Enter key', function() {
        cy.get('[id=username]').type(this.data.username)
        cy.get('[id=password]').should('have.attr', 'type', 'password')
        cy.get('[id=password]').type(`${this.data.password}{enter}`)
        cy.contains(this.data.loginsuccess).should('be.visible')
        cy.contains(this.data.landingpagetitle).should('be.visible')
        cy.contains(this.data.landingpagewelcome).should('be.visible')
        cy.get('a[href*="/logout"]').click()
        cy.contains(this.data.logoutsuccess).should('be.visible')
    })
})