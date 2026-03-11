describe('Checkout Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').should('be.visible').clear().type('standard_user')
    cy.get('#password').should('be.visible').clear().type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('Complete checkout successfully', () => {

    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="lastName"]').type('Doe')
    cy.get('[data-test="postalCode"]').type('12345')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="finish"]').click()

    cy.contains('Thank you for your order').should('be.visible')
  })

  it('Checkout with missing first name', () => {

    cy.get('[data-test="lastName"]').type('Doe')
    cy.get('[data-test="postalCode"]').type('12345')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Checkout with missing last name', () => {

    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="postalCode"]').type('12345')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]').should('be.visible')
  })

  
  it('Checkout with missing postal code', () => {

    cy.get('[data-test="firstName"]').type('John')
    cy.get('[data-test="lastName"]').type('Doe')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Checkout with empty fields', () => {

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]').should('be.visible')
  })

})