const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function() {
  const userEmail = document.getElementById('user-email-input').value;
  const userSenha = document.getElementById('user-senha-input').value;
  alert(`Email ou usuário: ${userEmail}\nSenha: ${userSenha}`);
  window.location.href = "dashboard.html";
});