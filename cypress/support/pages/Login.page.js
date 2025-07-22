/// <reference types="cypress" />

import { should } from "chai";
import {
  loginElements
} from "../elements/Login.elements";

import {
  context
} from './../../fixtures/login';

const dados = context.database

class LoginPage {

  /**
   * abrir o sistema.
   *
   */
  acessarAplicacao() {
    cy.visit(loginElements.abrirSistema(), {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear();
      },
    });
  }

   /**
   * preencher o campo de email.
   * @param {string} email
   */
  preecherUserNameEmail(email) {
      cy.get(loginElements.usuarioEmail()).type(email)
      .should('be.visible')
  }

  /**
   * preencher o campo de senha.
   * @param {string} senha
   */
  preecherPassWord(senha) {
    cy.get(loginElements.usuarioSenha()).type(senha)
      .should('be.visible')
  }

  /**
   * botão entrar da tela de login.
   */
  botaoEntrar() {
    //cy.intercept('GET', '**/tarefas-adv/api/**').as('getEntrar')
    cy.get(loginElements.botao())
      .should('be.visible')
      .click()
  }
  
  mensagemLoginEfetuado(){ 
  cy.get(loginElements.conectadoComo())
      .should('be.visible')
      .type(`${dados.mensagemValidacaoLogin}`)
  }

  pesquisarProdutos(){
  cy.get(loginElements.menuProdutos())
    .should('be.visible')
    .click()
  }

  pesquisaDeProdutos(){
  cy.get(loginElements.pesquisaDeProdutos())
    .should('be.visible')
    .click()
  }

  pesquisarProdutoPolo() {
  cy.get(loginElements.pesquisaDeProdutos())
    .should('be.visible')
    //click()
    .type('polo{enter}', {force: true});
  }

  clicarBotaoSubmit(){
  cy.get(loginElements.botaoSubmit())
    .should('be.visible')
    .click()
  }

  clicarNoBotaoVerProdutos(){
  cy.get(loginElements.botaoVerProduto())
  .click()
  }

  clicarNoBotaoAdCarrinho(){ 
  cy.get(loginElements.botaoAdcionarAoCarrinho())
  .click()
  }

  clicarNolinkVerCarinho(){
  cy.contains('View Cart')
  .click()
  }

  clicarNoBotaoCheckout(){
  cy.get(loginElements.botaoCheckout())
  .should('be.visible')
  .click()

  }

}

export const loginPage = new LoginPage()
