describe('SauceDemo Login', () => {
    it('logs in with valid credentials', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.url().should('include', '/inventory.html')
    })
  
    it('shows error on invalid login', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type('wrong_user')
      cy.get('[data-test="password"]').type('wrong_pass')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('be.visible')
    })
  })
  