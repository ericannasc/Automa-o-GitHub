Cypress.Commands.add("loginGitHub", () => {
  cy.visit("https://github.com/login");
  cy.get('input[name="login"]').type(Cypress.env("EMAIL"));
  cy.get('input[name="password"]').type(Cypress.env("PASSWORD"), { log: false });
  cy.get('input[name="commit"]').click();
  cy.url().should("include", "github.com");
});
