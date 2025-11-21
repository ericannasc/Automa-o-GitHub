# Automação GitHub com Cypress e Jest

## Descrição

Este projeto realiza testes automatizados de fluxo de autenticação, navegação e criação de repositórios na plataforma **GitHub**, garantindo a qualidade da aplicação por meio de **Cypress** e **Jest**.

Os testes cobrem:

-   Login com credenciais válidas\
-   Validação do perfil do usuário\
-   Navegação entre abas (Repositories, Pull Requests)\
-   Criação de repositórios com nomes únicos (via XPath)\
-   Logout e validação da sessão encerrada

------------------------------------------------------------------------

## Tecnologias utilizadas

-   [Node.js](https://nodejs.org/)
-   [Cypress](https://www.cypress.io/)
-   [Jest](https://jestjs.io/)
-   [dotenv](https://www.npmjs.com/package/dotenv)
-   [cypress-xpath](https://www.npmjs.com/package/cypress-xpath)
-   [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)

------------------------------------------------------------------------

## Configuração do ambiente

### 1. **Clone o repositório**

``` bash
git clone https://github.com/seu-usuario/automacaogithub.git
cd automacaogithub
```

### 2. **Instale as dependências**

``` bash
npm install
```

### 3. **Crie o arquivo `.env` na raiz do projeto**

``` env
EMAIL=seu_email_no_github
PASSWORD=sua_senha_no_github
USUARIO=seu_usuario_no_github
```

------------------------------------------------------------------------

## Executando os testes

### Testes unitários (Jest)

``` bash
npm run test:unit
```

### Testes end-to-end (Cypress em modo headless)

``` bash
npm run test:e2e
```

### Abrir Cypress em modo interativo

``` bash
npm run cypress:open
```

### Rodar todos os testes (unitários + e2e)

``` bash
npm run test:all
```

------------------------------------------------------------------------

## Estrutura dos testes

-   **Autenticação** → `cypress/e2e/autenticacao.cy.js`\
-   **Logout** → `cypress/e2e/logout.cy.js`\
-   **Interação com repositórios** → `cypress/e2e/repositorios.cy.js`\
-   **Page Objects** → `cypress/pageObjects/`\
-   **Utils** → `utils/utils.js` (gera nomes únicos para repositórios)\
-   **Testes unitários** → `__teste__/utils.test.js`

------------------------------------------------------------------------

## Fluxos validados

### **Login**

-   Acessa página de login\
-   Preenche email e senha\
-   Valida autenticação e nome do usuário

**Exemplo de comando customizado (`cypress/support/commands.js`):**

``` js
Cypress.Commands.add("loginGitHub", () => {
  cy.visit("https://github.com/login");
  cy.get('input[name="login"]').type(Cypress.env("EMAIL"));
  cy.get('input[name="password"]').type(Cypress.env("PASSWORD"), { log: false });
  cy.get('input[name="commit"]').click();
  cy.url().should("include", "github.com");
});
```

------------------------------------------------------------------------

### **Navegação**

-   Acessa aba de repositórios\
-   Abre repositório aleatório\
-   Navega até aba Pull Requests

------------------------------------------------------------------------

### **Criação de repositório**

-   Gera nome único\
-   Preenche campo obrigatório\
-   Submete formulário\
-   Valida URL e nome do repositório criado

**Exemplo de geração de nome (`utils/utils.js`):**

``` js
function gerarNomeRepositorio(base) {
  const random = Math.floor(Math.random() * 1000);
  return `${base}-${Date.now()}-${random}`;
}

module.exports = { gerarNomeRepositorio };
```

------------------------------------------------------------------------

### **Logout**

-   Acessa menu do usuário\
-   Realiza logout\
-   Valida que sessão foi encerrada

------------------------------------------------------------------------

## Captura de falhas (screenshots e vídeos)

O Cypress gera evidências automáticas sempre que um teste falha em modo headless (`cypress run`):

-   **Screenshots:** imagens do estado da tela no momento da falha\
-   **Vídeos:** gravação completa da execução do teste

### Onde encontrar:

-   `cypress/screenshots/` → screenshots das falhas\
-   `cypress/videos/` → vídeos da execução dos testes

⚠️ Em modo **interativo** (`npm run cypress:open`), vídeos **não são
gravados**, apenas screenshots podem ser gerados.

------------------------------------------------------------------------

## Relatórios HTML (Mochawesome)

Além dos screenshots e vídeos, este projeto gera relatórios HTML detalhados com o **cypress-mochawesome-reporter**.

Após rodar:

``` bash
npm run test:e2e
```

O relatório estará disponível em:

    cypress/reports/mochawesome.html

Abra esse arquivo no navegador para visualizar:

-   Status de cada teste (passou/falhou)\
-   Logs detalhados\
-   Links para screenshots e vídeos das falhas

------------------------------------------------------------------------

## 📌 Observações

-   Os testes exigem uma **conta GitHub válida**.\
-   O campo **nome do repositório é obrigatório** e precisa ser único.\
-   Timeouts foram configurados para evitar falhas intermitentes.\
-   Falhas são capturadas automaticamente pelo Cypress (screenshots,
    vídeos e relatório HTML).
