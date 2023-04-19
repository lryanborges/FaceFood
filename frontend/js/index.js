function loginFast() {
    const email = document.getElementById("user-email-input").value;
    const senha = document.getElementById("user-senha-input").value;

    if (email === "no-value") {
        alert("Informe o email ou usuário")
    }

    if(senha === "no-value") {
        alert("Informe a senha")
    }
}
