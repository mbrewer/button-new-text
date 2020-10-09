describe('Verify text on click', () => {
  it('Click button, get text', () => {
    cy.visit('http://localhost:8080')
    cy.contains('Click Me').click()
    cy.get('h1').should('contain', 'Hello World')
  })
})