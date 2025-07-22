class LoginElements {
  //url
  abrirSistema = () => '/login'

  //login
  usuarioEmail = () => '[data-qa="login-email"]'
  usuarioSenha = () => '[data-qa="login-password"]'

  //link 
  menuProdutos = () => '.shop-menu > .nav > :nth-child(2) > a'

  //botão
   botao = () =>'[data-qa="login-button"]'
   botaoSubmit = () => '[id="submit_search"]'
   botaoVerProduto = () => '.choose > .nav > li > a'
   botaoAdcionarAoCarrinho = () => '.btn.btn-default.cart'
   botaoCheckout = () => '.btn.btn-default.check_out'

  //input
  pesquisaDeProdutos = () => '[id="search_product"]'
 
  //msg
  conectadoComo = () => '.fa fa-user'
 
}

export const loginElements = new LoginElements();
