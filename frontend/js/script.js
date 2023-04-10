/*
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function() {
  const userEmail = document.getElementById('user-email-input').value;
  const userSenha = document.getElementById('user-senha-input').value;
  alert(`Email ou usuário: ${userEmail}\nSenha: ${userSenha}`);
  window.location.href = "dashboard.html";
});
*/

//O id só pode ser 1 já o name pode existir varios elementos (exemplo: formulario de resposta com 5 opções)
// let escola = document.getElementsByName('escola');
/*  if(escola[i].checked){
  escola = escola
}
 */
function salvarUsuario(){
  let nadaFalta = true;
  let email = document.getElementById('user-email-input').value;
  let senha = document.forms(0).senha.value;

  if(!email){
    alert('boco! lembre de colocar o email');
    nadaFalta = false;
  }

  if(senha === ""){
    alert('digite a sua senha, boco!!!!');
  }
 
}