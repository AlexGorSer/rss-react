/// <reference types="cypress" />

describe('Main pages', () => {
  it('Main test', () => {
    cy.visit('/');
    cy.get('input[type=text]').type('test');
    cy.get('form').submit();
    cy.get('.card__container').contains('Giant Testicle Monster');

    cy.get('input[type=text]').clear();
    cy.get('form').submit();
    cy.get('.card__container').contains('Rick Sanchez');
  });

  it('NotFound page', () => {
    cy.visit('/test');
    cy.get('.path_name').contains('Page Not Found');
    cy.get('h1').contains('Page Not Found');
  });
  it('Click in card', () => {
    cy.visit('/');
    cy.get('.card__container').contains('Rick Sanchez').click();

    cy.get('.sgv__modal').click();

    cy.get('.card__container').contains('Rick Sanchez').click();

    cy.get('.modal__container').click();
  });

  it('Form render', () => {
    cy.visit('/form');
    cy.get('.path_name').contains('Form');
  });

  it('Form submit errors', () => {
    cy.visit('/form');
    cy.get('button[type=submit]').click();

    cy.get('input[type=text]').type('test');
    cy.get('input[type=date]').type('2222-11-11');
    cy.get('button[type=submit]').click();

    cy.get('input[type=text]').clear();
    cy.get('input[type=text]').type('Tt');
    cy.get('button[type=submit]').click();

    cy.get('input[type=text]').type('T@$#%t');
    cy.get('button[type=submit]').click();

    cy.get('input[type=file]').selectFile('cypress/fixtures/example.json');
    cy.get('button[type=submit]').click();
  });

  it('About render', () => {
    cy.visit('/about');
    cy.get('.container').contains('About');
  });

  it('contacts render', () => {
    cy.visit('/contacts');
    cy.get('.container').contains('Contacts');
  });

  it('Form submit', () => {
    cy.visit('/form');

    cy.get('input[type=text]').type('Test');
    cy.get('input[type=date]').type('1111-11-11');
    cy.get('select[name=select]').select('Belarus');
    cy.get('input[value=Female]').click();
    cy.get('input[type=checkbox]').click();

    cy.get('input[type=file]').selectFile('cypress/fixtures/images.jpg');
    cy.get('button[type=submit]').click();
  });
});
