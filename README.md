Projeto de Automação de Testes - Cypress + Cucumber + JavaScript

Tecnologias Utilizadas
- JavaScript – linguagem principal do projeto
- Cypress – framework de automação de testes
- Cucumber – escrita de cenários em Gherkin
- Node.js – ambiente de execução

Requisitos de Instalação
Antes de começar, instale:
• Node.js (v18+)
• Git

# 1. Clone o repositório
git clone https://github.com/seu-usuario/nome-do-projeto.git

# 2. Acesse a pasta do projeto
cd nome-do-projeto

# 3. Instale as dependências
npm install

Configuração do Cypress + Cucumber
Certifique-se de que os seguintes arquivos estão configurados:
package.json:
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true,
  "stepDefinitions": "cypress/e2e"
}

cypress.config.js:
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "**/*.feature"
  }
});

Execução dos Testes
Interface Visual (Cypress GUI):
npx cypress open

Escolha o cenário .feature desejado para executar o teste.
Linha de comando (headless):
npx cypress run

Cenários de Teste Web
  Scenario: 01 - Validar login
    Given que acessei a tela de login
    When informei os dados de acesso EMAIL "teste2026@teste.com.br" e senha "teste"
    Then devo ver a mensagem "Logged in as"

 Scenario: 02 - Pesquisar produtos 
    Given que acessei a tela de login
    When informei os dados de acesso EMAIL "teste2026@teste.com.br" e senha "teste"
    And que realizei a pesquisa de um produto
    Then que validei o produto na tela de pagamento 

Scenario: 03 - Validar status e exibir nome da lista da consulta à API
    Given que envio uma requisição GET para a API
    Then o status da resposta deve ser 200
    And devo exibir o campo "name" da estrutura "list"