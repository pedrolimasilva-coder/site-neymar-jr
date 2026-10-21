console.log("Site do Neymar carregado com sucesso.");
console.log("Site do Neymar carregado com sucesso.");

async function buscarCEP(cep) {
  const mensagem = document.getElementById('mensagem');
  mensagem.textContent = '';

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!resposta.ok) throw new Error('CEP não encontrado');

    const dados = await resposta.json();
    if (dados.erro) throw new Error('CEP não encontrado');

    document.getElementById('rua').textContent = dados.logradouro;
    document.getElementById('bairro').textContent = dados.bairro;
    document.getElementById('cidade').textContent = dados.localidade;
    document.getElementById('estado').textContent = dados.uf;
  } catch (erro) {
    document.getElementById('rua').textContent = '';
    document.getElementById('bairro').textContent = '';
    document.getElementById('cidade').textContent = '';
    document.getElementById('estado').textContent = '';
    mensagem.textContent = 'Não foi possível buscar o CEP.';
  }
}

const botaoBuscar = document.getElementById('botaoBuscar');
if (botaoBuscar) {
  botaoBuscar.addEventListener('click', () => {
    const cep = document.getElementById('cep').value;
    buscarCEP(cep);
  });
}