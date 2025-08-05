import {
  loginPage
} from "../pages/Login.page";

import { 
  Given, When, Then 
} from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

//seção: login
Given(/^que acessei a tela de login$/, () => {
	loginPage.acessarAplicacao()
});

When(/^informei os dados de acesso EMAIL "([^"]*)" e senha "([^"]*)"$/, (email, senha) => {
	loginPage.preecherUserNameEmail(email)
  loginPage.preecherPassWord(senha)
  loginPage.botaoEntrar()
});

Then(/^devo ver a mensagem "([^"]*)"$/, (mensagemLoginEfetuado) => {
	console.log(mensagemLoginEfetuado);
});

// Pesquisar produtos 
And(/^que realizei a pesquisa de um produto$/, () => {
   loginPage.pesquisarProdutos()
   loginPage.pesquisarProdutoPolo()
   loginPage.clicarBotaoSubmit()
   });

Then(/^que validei o produto na tela de pagamento$/, () => {
  loginPage.clicarNoBotaoVerProdutos()
  loginPage.clicarNoBotaoAdCarrinho()
  loginPage.clicarNolinkVerCarinho()
  loginPage.clicarNoBotaoCheckout()
  });

Given("que envio uma requisição GET para a API", function () {
  cy.request("https://api.trello.com/1/actions/592f11060f95a3d3d46a987a").then((res) => {
    cy.wrap(res).as("response");
  });
});

Then("o status da resposta deve ser 200", function () {
  expect(this.response.status).to.eq(200);
});

Then('devo exibir o campo "name" da estrutura "list"', function () {
  cy.log("Nome da lista:", this.response.body.data.list.name);
});
