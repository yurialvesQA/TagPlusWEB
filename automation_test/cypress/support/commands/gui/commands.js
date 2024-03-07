Cypress.Commands.add('getTempKeyValue', (key) => {
  cy.task('getTempKeyValue', key);
});

Cypress.Commands.add('setTempKeyValue', (object) => {
  cy.task('setTempKeyValue', object);
});

Cypress.Commands.add('allowCookies', () => {
  cy.step('Clicking on the allow cookies button.');
  cy.get('span').contains('cookies').parent().find('button').click({ force: true });
});
