describe('Login flow test', () => {
  beforeEach(() => { cy.visit('http://localhost:3000') })
  it('01. User redirect to home page after successfull login', () => {
    cy.get(':nth-child(1) > .text-black > .border').type('user1');
    cy.get(':nth-child(2) > .text-black > .border').type('password1');
    cy.get('button').click();
    cy.location('pathname').should('eq', '/home');
  })

  it('02. User get "Login failed as Invalid credentials" message when provided password was incorect', () => {
    cy.get(':nth-child(1) > .text-black > .border').type('user');
    cy.get(':nth-child(2) > .text-black > .border').type('pass');
    cy.get('button').click();
    cy.get('.Toastify__toast-body').should('contain', 'Login failed as Invalid credentials');
  })

  it('03. User gets error when username and password not provided', () => {
    cy.get('button').click();
    cy.get(':nth-child(1) > .text-black > .text-red-500').should('contain', 'Username is required');
    cy.get(':nth-child(2) > .text-black > .text-red-500').should('contain', 'Password is required');
  })
})