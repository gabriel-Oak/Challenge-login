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
      .type('hello-flavio', { delay: 100 });

    cy.get('div')
      .contains('Digite um e-mail válido;')
      .should('contain', 'Digite um e-mail válido;');

    cy.get('[type=button]')
      .first()
      .click();

    cy.get('[name=email]')
      .type('flavio.algusto@wiser.com', { delay: 100 });
  });

  it('Should interact with password field', () => {
    cy.get('[name=password]')
      .type('hello-flavio', { delay: 100 });

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
    cy.get('[name=email]')
      .type('flavio.algusto@wiser.com', { delay: 100 });

    cy.get('[name=password]')
      .type('senhaforte123', { delay: 100 });

    cy.get('[type=submit]').click();
    cy.location('pathname').should('eq', '/');
  });
});