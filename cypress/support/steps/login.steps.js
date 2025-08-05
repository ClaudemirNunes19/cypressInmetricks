import { loginPage
} from "../pages/login.page";

import { Given, When, Then
} from "cypress-cucumber-preprocessor/steps";


//seção: login
Given(/^que estou na página de login$/, () => {
  loginPage.acessarAplicacao()
});

