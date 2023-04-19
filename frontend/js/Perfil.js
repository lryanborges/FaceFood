// Objeto que armazena os usuários e suas informações (Simular o banco de dados)
const users = [
  {
    email: "joao.sales@alunos.ufersa.edu.br",
    password: "joao1234",
    usuario: "joaosales"
  },
  {
      email:"joaosales911@gmail.com",
      password: "joao1234",
      usuario: "jovitif"
  },
  {
    email: "caio.costa@alunos.ufersa.edu.br",
    password: "caio1234",
    usuario: "caiovinicius123321"
  },
  {
      email: "luiz.costa28062@alunos.ufersa.edu.br",
      password: "luiz1234",
      usuario: "luizryanb"
  },
];


// Função para realizar o login, buscando um usúario na aplicação
function realizarLogin() {
  const email = document.getElementById("user-email-input").value;
  const password = document.getElementById("user-senha-input").value;

  // Busca o usuário correspondente ao email informado
  const user = users.find(u => u.email === email);

  if (user && user.password === password) {
    // Login bem-sucedido
    alert(`Bem-vindo(a), ${user.usuario}!`);
    window.location.href = "../dist/dashboard.html";

    // Realize as ações necessárias para permitir o login na aplicação
  } else {
    // Login mal-sucedido
    alert("Email ou senha inválidos. Tente novamente.");
  }
}
/*
const form = document.querySelector('#form');
form.addEventListener("submit", (event) => {
const nome = document.querySelector("#user-nome-input").value;
const email = document.querySelector("#user-email-input").value;
const senha = document.querySelector("#user-senha-input").value;
const confirmarsenha = document.querySelector("#user-senhaconfirmar-input").value;
const usuario = document.querySelector("#user-usuario-input").value;
    // Valida os dados
  if (!nome || !email || !senha || !confirmarsenha || !usuario ) {
    alert('Por favor, preencha todos os campos.');
    return;
  }else if(senha !== confirmarsenha){
  alert("Senha diferente!");
  return;
}else{
  window.alert("usuario cadastrado")
}
form.submit();
});*/

function salvarUsuario(){
const nome = document.querySelector("#user-nome-input").value;
const email = document.querySelector("#user-email-input").value;
const senha = document.querySelector("#user-senha-input").value;
const confirmarsenha = document.querySelector("#user-senhaconfirmar-input").value;
const usuario = document.querySelector("#user-usuario-input").value;
    // Valida os dados
  if (!nome || !email || !senha || !confirmarsenha || !usuario ) {
    alert('Por favor, preencha todos os campos.');
    return;
  }else if(senha !== confirmarsenha){
  alert("Senha diferente!");
  return;
}else{
  window.alert("usuario cadastrado")
  window.location.href = "../dist/dashboard.html";
}
form.submit();
}

function abrirPopup() {
  document.getElementById("popup").classList.remove("hidden");
}


function fecharPopup() {
  document.getElementById("popup").classList.add("hidden");
}

function enviarFormulario() {
  fecharPopup();
}

function abrirPopup2() {
  document.getElementById("popup2").classList.remove("hidden");
}

function fecharPopup2() {
  document.getElementById("popup2").classList.add("hidden");
}

function enviarFormulario2() {
  fecharPopup2();
}

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