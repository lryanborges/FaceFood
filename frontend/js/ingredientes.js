/*
public enum TipoIngrediente {
    	CARNES, PEIXES, FRUTOS_DO_MAR, VEGETAIS, GRÃOS, CEREAIS, FRUTAS, LATICÍNIOS, TEMPEROS, ERVAS, ÓLEOS_E_GORDURAS, NOZES_E_SEMENTES, MASSAS, DOCES_E_SOBREMESAS, BEBIDAS
    }
*/

const TipoIngrediente = [
"Carnes","Peixes","Frutos do Mar","Vegetais","Grãos","Cereais","Frutas","Laticínios","Temperos","Ervas","Óleos e Gorduras", "Nozes e Sementes","Massas","Doces e Sobremesas", "Bebidas"
];

const ingredientes = [
    { nome: 'Tomate', tipo: 'VEGETAIS', calorias: 20 },
    { nome: 'Arroz', tipo: 'CEREAIS', calorias: 130 },
    { nome: 'Cebola', tipo: 'VEGETAIS', calorias: 40 },
    { nome: 'Carne de frango', tipo: 'CARNES', calorias: 200 },
    { nome: 'Feijão', tipo: 'CEREAIS', calorias: 120 },
    { nome: 'Salmão', tipo: 'PEIXES', calorias: 180 },
    { nome: 'Espinafre', tipo: 'VEGETAIS', calorias: 20 },
    { nome: 'Queijo cheddar', tipo: 'LATICÍNIOS', calorias: 110 },
    { nome: 'Azeite de oliva', tipo: 'ÓLEOS_E_GORDURAS', calorias: 120 },
    { nome: 'Amêndoas', tipo: 'NOZES_E_SEMENTES', calorias: 160 },
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