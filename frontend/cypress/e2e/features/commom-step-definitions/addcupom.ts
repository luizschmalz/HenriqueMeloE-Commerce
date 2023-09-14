import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('o usuário está na página de admparcerias', () => {
  // You can set up your application's initial state here if needed
  cy.visit('/admparcerias');
});

When('o usuário preenche o campo {string} com {string}', (field, value) => {
  cy.get(`[data-cy=${field}]`).type(value);
});

When('o usuário preenche o campo {string} com {int}', (field, value) => {
  cy.get(`[data-cy=${field}]`).type(value);
});

When('clica no botão {string}', (button) => {
  cy.get(`[data-cy=${button}]`).click();
});

Then('o usuário é redirecionado para a página de parcerias', () => {
  // Use Cypress commands to assert the redirection
  cy.url().should('include', '/parcerias');
});
