Feature: Acessar o sistema e validar o login 

  Background: 

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

 
