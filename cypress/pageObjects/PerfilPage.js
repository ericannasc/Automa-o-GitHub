class PerfilPage {
  elementos = {
    fotoPerfil: 'img.avatar-user',
    nomeUsuario: 'span.p-nickname',
    abaRepositorios: '#repositories-tab'
  };

  visitarPerfil() {
    cy.visit(`https://github.com/${Cypress.env("USUARIO")}`);
  }

  validarUsuario() {
    cy.get(this.elementos.fotoPerfil, { timeout: 10000 }).should("be.visible");
    cy.get(this.elementos.nomeUsuario, { timeout: 10000 }).should("contain.text", Cypress.env("USUARIO"));
  }

  acessarRepositorios() {
    cy.get(this.elementos.abaRepositorios).click();
  }
}

export default new PerfilPage();
