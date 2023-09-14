import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("o usuário está na página de {string}", (page:string) => {
    cy.visit(page)
});   