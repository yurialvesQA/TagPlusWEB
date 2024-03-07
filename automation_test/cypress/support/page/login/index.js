/// <reference types ="cypress"/>
import { EL_LOGIN } from './elements';

class LoginEos {
  login(email, password) {
    cy.step(`Logging in with user '${email}' on the platform.`);
    cy.get(EL_LOGIN.inputEmail).type(email, { log: false });
    cy.get(EL_LOGIN.inputPassword).type(password, { log: false });
    cy.get(EL_LOGIN.buttonLogin).click();
  }
}

export default new LoginEos();
