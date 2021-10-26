describe('Functional - Unsuccessful Login Attempt', function() {
    beforeEach(function () {
        cy.fixture('data').then(function (data) {
          this.data = data
        })
    })
    
    it('Navigate to application URL', function() {
        cy.visit(this.data.loginURL)
    })

    it('No values for username and password', function() {
        cy.get('[id=username]').type("Badusername")
        cy.get('[id=password]').type("Badpassword")
        cy.get('[type=submit]').click()
        cy.contains("Your username is invalid!").should('be.visible')
    })

    it('Enter invalid username and invalid password', function() {
        cy.get('[id=username]').type("Badusername")
        cy.get('[id=password]').type("Badpassword")
        cy.get('[type=submit]').click()
        cy.contains("Your username is invalid!").should('be.visible')
    })

    it('Enter valid username and invalid password', function() {
        cy.get('[id=username]').type(this.data.username)
        cy.get('[id=password]').type("Badpassword")
        cy.get('[type=submit]').click()
        cy.contains("Your password is invalid!").should('be.visible')
    })
})