/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad: (win) => {
        win.localStorage.setItem('challenge-login/user', JSON.stringify({
          name: 'Mockito da Silva',
          email: 'mockito@gmail.io'
        }));
      }
    });
    cy.location('pathname').should('eq', '/');
  });

  it('Should log out and redirect to login', () => {
    cy.get('button').contains('SAIR').click();
    cy.wait(1000);
    cy.location('pathname').should('eq', '/login');
  });
});