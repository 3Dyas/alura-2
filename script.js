// Yasmin Batista - 3D - 19/09/2024

const avanca = document.querySelectorAll(".btn-proximo");

avanca.forEach((button) => {
  button.addEventListener("click", function () {
    const atual = document.querySelector(".ativo");
    const proximoPasso = "passo-" + this.getAttribute("data-proximo");

    atual.classList.remove("ativo");
    document.getElementById(proximoPasso).classList.add("ativo");
  });
});
