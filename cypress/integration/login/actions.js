/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad: (win) => {
        win.localStorage.clear();
      }
    });
    cy.location('pathname').should('eq', '/login');
  });

  it('Should interact with email field', () => {
    cy.get('[name=email]')
      .type('hello-mockito', { delay: 100 });

    cy.get('div')
      .contains('Digite um e-mail válido;')
      .should('contain', 'Digite um e-mail válido;');

    cy.get('[type=button]')
      .first()
      .click();

    cy.get('[name=email]')
      .type('mockito.algusto@oak.com', { delay: 100 });
  });

  it('Should interact with password field', () => {
    cy.get('[name=password]')
      .type('hello-mockito', { delay: 100 });

    cy.get('[name=password]')
      .last()
      .clear();

    cy.get('div')
      .contains('Informe uma senha;')
      .should('contain', 'Informe uma senha;');

    cy.get('[name=password]')
      .type('senhaforte123', { delay: 100 });
  });

  it('Should log in succesfuly', () => {
    cy.intercept('POST', 'https://6032abeaa223790017acf5a8.mockapi.io/login')
      .as('login');

    cy.get('[name=email]')
      .type('mockito.algusto@oak.com', { delay: 100 });

    cy.get('[name=password]')
      .type('senhaforte123', { delay: 100 });

    cy.get('[type=submit]').click();
    cy.wait('@login');
    cy.location('pathname').should('eq', '/');
  });
});