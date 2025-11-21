const { gerarNomeRepositorio } = require('../utils/utils');

describe('Função gerarNomeRepositorio', () => {
  it('gera nomes diferentes em chamadas distintas', () => {
    const nome1 = gerarNomeRepositorio('repo');
    const nome2 = gerarNomeRepositorio('repo');
    expect(nome1).not.toBe(nome2);
  });

  it('inclui o prefixo base no nome', () => {
    const nome = gerarNomeRepositorio('repo');
    expect(nome.startsWith('repo-')).toBe(true);
  });

  it('gera nome com sufixo numérico aleatório', () => {
    const nome = gerarNomeRepositorio('repo');
    expect(nome).toMatch(/^repo-\d+-\d+$/);
  });
});
