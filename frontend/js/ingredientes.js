// Tipo de ingrediente enum
const TipoIngrediente = [  "Carnes", "Peixes", "Frutos do Mar", "Vegetais", "Grãos", "Cereais", "Frutas", "Laticínios", "Temperos", "Ervas", "Óleos e Gorduras", "Nozes e Sementes", "Massas", "Doces e Sobremesas", "Bebidas"];

const tipoSelect = document.getElementById("tipo");
tipoSelect.innerHTML = TipoIngrediente.map(tipo => `<option value="${tipo}">${tipo}</option>`).join("");

const ingredientes = [  { nome: 'Tomate', tipo: TipoIngrediente[3], calorias: 20 },
  { nome: 'Arroz', tipo: TipoIngrediente[5], calorias: 130 },
  { nome: 'Cebola', tipo: TipoIngrediente[3], calorias: 40 },
  { nome: 'Carne de frango', tipo: TipoIngrediente[0], calorias: 200 },
  { nome: 'Feijão', tipo: TipoIngrediente[5], calorias: 120 },
  { nome: 'Salmão', tipo: TipoIngrediente[1], calorias: 180 },
  { nome: 'Espinafre', tipo: TipoIngrediente[3], calorias: 20 },
  { nome: 'Queijo cheddar', tipo: TipoIngrediente[7], calorias: 110 },
  { nome: 'Azeite de oliva', tipo: TipoIngrediente[10], calorias: 120 },
  { nome: 'Amêndoas', tipo: TipoIngrediente[11], calorias: 160 },
];
 
const tabelaIngredientes = document.getElementById('tabela-ingredientes');
const modeloIngrediente = document.getElementById('modelo-ingrediente').content;

document.addEventListener('DOMContentLoaded', () => {
  const tabelaIngredientes = document.getElementById('tabela-ingredientes');
  const modeloIngrediente = document.getElementById('modelo-ingrediente').content;

  ingredientes.forEach(ingrediente => {
    const novaLinha = modeloIngrediente.cloneNode(true);
    novaLinha.querySelector('td:nth-child(1)').textContent = ingrediente.nome;
    novaLinha.querySelector('td:nth-child(2)').textContent = ingrediente.tipo;
    novaLinha.querySelector('td:nth-child(3)').textContent = ingrediente.calorias;
    tabelaIngredientes.appendChild(novaLinha);
  });
});

function openPopup() {
  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("popup-background").addEventListener("click", closePopup);
  
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
  document.getElementById("popup-background").removeEventListener("click", closePopup);
}

function pesquisarIngrediente() {
  const termo = inputPesquisa.value.toLowerCase(); // obter o termo de pesquisa em letras minúsculas
  const tabela = document.getElementById("tabela-ingredientes"); // obter a tabela de ingredientes
  const modelo = document.getElementById("modelo-ingrediente"); // obter o modelo de linha da tabela

  // remover todas as linhas existentes da tabela, exceto o modelo
  while (tabela.rows.length > 1) {
    tabela.deleteRow(1);
  }

  // filtrar os ingredientes pelo termo de pesquisa e adicionar uma nova linha na tabela para cada ingrediente correspondente
  ingredientes.filter(ingrediente => ingrediente.nome.toLowerCase().includes(termo)).forEach(ingrediente => {
    const novaLinha = modelo.content.cloneNode(true); // clonar o modelo de linha da tabela
    novaLinha.querySelector("td:nth-child(1)").textContent = ingrediente.nome; // preencher a coluna "Nome" com o nome do ingrediente
    novaLinha.querySelector("td:nth-child(2)").textContent = ingrediente.tipo; // preencher a coluna "Tipo" com o tipo do ingrediente
    novaLinha.querySelector("td:nth-child(3)").textContent = ingrediente.calorias; // preencher a coluna "Calorias" com o número de calorias do ingrediente
    tabela.appendChild(novaLinha); // adicionar a nova linha à tabela
  });
}

// adicionar um ouvinte de eventos ao campo de pesquisa para atualizar a tabela quando o usuário digitar um termo de pesquisa
const inputPesquisa = document.querySelector(".border-red");
inputPesquisa.addEventListener("input", pesquisarIngrediente);