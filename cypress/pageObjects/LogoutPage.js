class LogoutPage {
  elementos = {
    menuUsuario: 'button[aria-label="Open user navigation menu"]',
    botaoLogout: 'a[href="/logout"]',
    confirmaLogout: 'input[name="commit"][value="Sign out"]',
    linkLogin: 'a[href="/login"]'
  };

  realizarLogout() {
    cy.get(this.elementos.menuUsuario).click();
    cy.get(this.elementos.botaoLogout).click();
    cy.get(this.elementos.confirmaLogout).click();
  }

  validarLogout() {
    cy.url().should("include", "github.com");
    cy.get(this.elementos.linkLogin).should("be.visible");
  }
}

export default new LogoutPage();
