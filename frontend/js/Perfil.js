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
      windows().location.href = "/dist/dashboard.html";
      // Realize as ações necessárias para permitir o login na aplicação
    } else {
      // Login mal-sucedido
      alert("Email ou senha inválidos. Tente novamente.");
    }
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