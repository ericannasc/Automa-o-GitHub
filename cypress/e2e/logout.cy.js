import LogoutPage from "../pageObjects/LogoutPage";

describe("Logout", () => {
  beforeEach(() => {
    cy.loginGitHub();
  });

  it("Deve realizar logout com sucesso", () => {
    LogoutPage.realizarLogout();
    LogoutPage.validarLogout();
  });
});
