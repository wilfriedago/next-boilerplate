describe('Navigation', () => {
  describe('Static pages', () => {
    it('should navigate to the portfolio page', () => {
      // Start from the index page
      cy.visit('/')

      // The index page should contain an h1
      cy.findByRole('heading', {
        name: 'Nextjs Starter'
      })

      // Find a link containing "Portfolio" text and click it
      cy.findByRole('link', { name: 'Portfolio' }).click()

      // The new url should include "/portfolio"
      cy.url().should('include', '/portfolio')
    })

    it('should take screenshot of the homepage', () => {
      cy.visit('/')

      // Wait until the page is displayed
      cy.findByRole('heading', {
        name: 'Nextjs Starter'
      })

      cy.percySnapshot('Homepage')
    })

    it('should take screenshot of the portfolio page', () => {
      cy.visit('/portfolio')

      // Wait until the page is displayed
      cy.findByRole('link', { name: 'Portfolio' })

      cy.percySnapshot('portfolio')
    })
  })
})
