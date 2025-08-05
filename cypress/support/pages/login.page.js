/// <reference types="cypress" />

import { loginElements } from "../elements/login.elements";
import context from "../../fixtures/login.json"; // Certifique-se de que o arquivo seja .json

const dados = context.database;

class LoginPage {
  acessarAplicacao() {
    cy.visit(loginElements.abrirSite());
  }
}

export const loginPage = new LoginPage()