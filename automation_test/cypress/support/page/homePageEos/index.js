/// <reference types ="cypress"/>
import { EL_HOME_PAGE } from './elements';

class HomePage {
  clickEnterButton() {
    cy.step('Click on "Enter" button".');
    cy.get(EL_HOME_PAGE.buttonEnter).click();
  }

  clickRegisterButton() {
    cy.step('Click on "Register" button.');
    cy.get(EL_HOME_PAGE.buttonRegister).eq(0).click();
  }
}

export default new HomePage();
