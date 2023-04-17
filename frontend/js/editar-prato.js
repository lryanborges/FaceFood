function editarPrato() {
  const nomeDoPrato = document.getElementById("nome-prato").value;
  const tipoDeComida = document.getElementById("tipo-de-comida").value;
  const ingredientes = document.getElementById("ingredientes").value;
  const modoDePreparo = document.getElementById("modo-de-preparo").value;
  const tempoDePreparo = document.getElementById("tempo-de-preparo").value;
  const infoNutricionais = document.getElementById("nutri-info").value;
  const desc = document.getElementById("descricao").value;

  if (tipoDeComida === "no-value") {
    alert("O tipo de comida tem que ser selecionado!");
  }

  if (ingredientes === "no-value") {
    alert("Os ingredientes devem ser selecionados!");
  }

  if (modoDePreparo.length < 10) {
    alert("O modo de preparo não pode ser menor do que 10 caracteres!");
  }

  if (infoNutricionais.length < 10) {
    alert("As informações nutricionais devem ser válidas!");
  }

  if (desc.length < 10) {
    alert("A descrição não pode ser menor do que 10 caracteres!");
  }
}
