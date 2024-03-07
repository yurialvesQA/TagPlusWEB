/// <reference types ="cypress"/>
import Utils from '@helper/utils';
import { EL_REGISTRATION } from './elements';

class RegisterUser {
  register(partnerData) {
    cy.step('Registering a new user.');
  }
}

export default new RegisterUser();
