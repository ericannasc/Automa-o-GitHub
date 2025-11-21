function gerarNomeRepositorio(base) {
  const random = Math.floor(Math.random() * 1000);
  return `${base}-${Date.now()}-${random}`;
}

module.exports = { gerarNomeRepositorio };
