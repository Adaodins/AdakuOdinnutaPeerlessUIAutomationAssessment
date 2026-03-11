describe('Login', () => {
  beforeEach(() => {
    cy.log("Visit the Swag Labs login page")
    cy.visit('https://www.saucedemo.com/')
  })
  
  it('Validate Url Launches the accurate dashboard', () => {
   //Verify it's the accurate login page by checking for login logo
   cy.get(".login_logo").should("be.visible")

  })

  it('Validate that user can successfully login with valid credentials', () => {
    cy.log("Positive Login Test")
    cy.get('#user-name').should('be.visible').clear().type('standard_user')
    cy.get('#password').should('be.visible').clear().type('secret_sauce')
    cy.get('#login-button').click()

    //verify successful login and the new page URL contains the expected string
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html')
    cy.get('[data-test="inventory-list"]').should('be.visible')
  })


    it('Validate that user is unable to login with invalid credentials', () => {
      cy.log("Negative Login Test with Invalid Password")
      cy.get('#user-name').clear().type('standard_user')
      cy.get('#password').clear().type('hot_sauce')
      cy.get('#login-button').click()
  
      //verify error message
      cy.get('[data-test="error"]').should("be.visible").and("contain.text", "Epic sadface: Username and password do not match any user in this service")
   
      })


    it('Validate the system response when login with locked out user credentials', () => {
      cy.log("Negative Login Test with locked out user")
      cy.get('#user-name').clear().type('locked_out_user')
      cy.get('#password').clear().type('secret_sauce')
      cy.get('#login-button').click()
  
      //verify error message
      cy.get('[data-test="error"]').should("be.visible").and("contain.text", "Epic sadface: Sorry, this user has been locked out.")
      })


    it('Validate the system response when login with empty fields', () => {
      cy.log("Negative Login Test with empty fields")
      cy.get('#login-button').click()
  
      //verify error message
      cy.get('[data-test="error"]').should("be.visible").and("contain.text", "Epic sadface: Username is required")
      
      cy.log("Test Ends")
  })
})