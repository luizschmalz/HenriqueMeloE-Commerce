const { Given, When, Then } = require("cypress-cucumber-preprocessor");

Given("o usuário está na página de adicionar cupom", () => {
  // Navega para a página de adicionar cupom (substitua pela URL correta)
  cy.visit("/admparcerias");
});

When("o usuário preenche o campo {string} com {string}", (campo, valor) => {
  // Preenche o campo com o valor fornecido (substitua pelos seletores corretos)
  cy.get(`#${campo}`).type(valor);
});

And("clica no botão {string}", (botao) => {
  // Clica no botão "Add Coupon" (substitua pelo seletor correto)
  cy.get(".submit-button").click();
});

Then("uma mensagem de sucesso é exibida", () => {
  // Verifica se a mensagem de sucesso está presente na página (substitua pelo seletor correto)
  cy.get(".success-message").should("be.visible");
});

And("o usuário é redirecionado para a página de parcerias", () => {
  // Verifica se o redirecionamento ocorreu corretamente (substitua pela URL correta)
  cy.url().should("include", "/parcerias");
});
