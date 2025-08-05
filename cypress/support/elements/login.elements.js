class LoginElements {
  // URL
  abrirSite() {
    return '/login';
  }

  // Login
  inserirEmail() {
    return '[data-qa="login-email"]';
  }

  inserirSenha() {
    return '[data-qa="login-password"]';
  }

  // Botão
  clicarBotao() {
    return '[data-qa="login-button"]'; // Corrigido: separação de classes com ponto
  }
}

export const loginElements = new LoginElements()
