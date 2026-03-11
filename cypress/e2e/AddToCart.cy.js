describe('Cart Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').should('be.visible').clear().type('standard_user')
    cy.get('#password').should('be.visible').clear().type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('Add product to cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge').should('contain', '1')
  })

  it('Add multiple products', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    cy.get('.shopping_cart_badge').should('contain', '2')
  })

  it('Remove product from cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge').should('not.exist')
  })

})