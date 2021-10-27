describe('Non-functional - Successful Login Attempt and Back Button', function() {
    beforeEach(function () {
        cy.fixture('data').then(function (data) {
          this.data = data
        })
    })

    it('Navigate to application URL', function() {
        cy.visit(this.data.loginURL)
    })
    
    it('Login with valid username and password and press the Back button in the browser', function() {
        cy.get('[id=username]').type(this.data.username)
        cy.get('[id=password]').should('have.attr', 'type', 'password')
        cy.get('[id=password]').type(`${this.data.password}{enter}`)
        cy.contains(this.data.loginsuccess).should('be.visible')
        cy.contains(this.data.landingpagetitle).should('be.visible')
        cy.contains(this.data.landingpagewelcome).should('be.visible')
        cy.get('a[href*="/logout"]').click()
        cy.go('back')
        cy.contains(this.data.loginback).should('be.visible')
    })
})