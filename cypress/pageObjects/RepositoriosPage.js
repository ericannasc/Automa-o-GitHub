class RepositoriosPage {
  elementos = {
    listaRepositorios: '#user-repositories-list ul li', 
    abaPullRequests: '#pull-requests-tab',
    campoNomeRepositorio: '//*[@id="repository-name-input"]',
    botaoCriarRepositorio: '//div[@data-justify="end"]//button[@type="submit"]'
  };

  acessarRepositorioAleatorio() {
    cy.get(this.elementos.listaRepositorios).then($repos => {
      const randomIndex = Math.floor(Math.random() * $repos.length);
      cy.wrap($repos[randomIndex]).find('a').first().click();
    });
  }

  acessarPullRequests() {
    cy.get(this.elementos.abaPullRequests).click();
  }

  criarRepositorio(nome) {
    cy.visit('https://github.com/new');
    cy.xpath(this.elementos.campoNomeRepositorio).should('exist').and('be.visible').clear().type(nome);

    cy.contains(/is available|está disponível/, { timeout: 20000 });
    cy.intercept('POST', '**/repositories').as('criarRepo');
    cy.xpath(this.elementos.botaoCriarRepositorio, { timeout: 20000 }).should('exist').should('be.visible').and('be.enabled').click();
    cy.wait('@criarRepo', { timeout: 50000 });
    
    cy.url({ timeout: 20000 }).should('include', `/${nome}`);
    cy.xpath(`//strong[contains(., "${nome}")]`, { timeout: 10000 }).should('be.visible');
  }
}

export default new RepositoriosPage(); 



