import PerfilPage from "../pageObjects/PerfilPage";
import RepositoriosPage from "../pageObjects/RepositoriosPage";
const { gerarNomeRepositorio } = require("../../utils/utils");

describe("Interação com Repositórios", () => {
  beforeEach(() => {
    cy.loginGitHub();
  });

  it("Deve acessar repositório e criar novo", () => {
    PerfilPage.visitarPerfil();
    PerfilPage.acessarRepositorios();
    RepositoriosPage.acessarRepositorioAleatorio();
    RepositoriosPage.acessarPullRequests();

    const nomeRepo = gerarNomeRepositorio("repo-teste");
    RepositoriosPage.criarRepositorio(nomeRepo);
  });
});
