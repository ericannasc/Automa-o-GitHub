import PerfilPage from "../pageObjects/PerfilPage";

describe("Fluxo de Autenticação", () => {
  beforeEach(() => {
    cy.loginGitHub();
  });

  it("Deve autenticar e validar nome abaixo da foto do perfil", () => {
    PerfilPage.visitarPerfil();
    PerfilPage.validarUsuario();
  });
});
