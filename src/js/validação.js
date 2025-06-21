const inputs = document.querySelectorAll(
  ".formulario input, .formulario textarea"
);
const botaoEnviar = document.querySelector('.formulario button[type="submit"]');

document
  .querySelectorAll(".aviso")
  .forEach((aviso) => aviso.classList.remove("visivel"));

inputs.forEach((input) => {
  const aviso = input.nextElementSibling;

  input.addEventListener("input", () => {
    validarCampo(input, aviso);
  });

  input.addEventListener("focus", () => {
    aviso.classList.remove("visivel");
    input.classList.remove("errado");
    input.classList.remove("certo");
  });
});

botaoEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  let formularioValido = true;

  inputs.forEach((input) => {
    const aviso = input.nextElementSibling;
    if (!validarCampo(input, aviso)) {
      formularioValido = false;
    }
  });

  if (formularioValido) {
    alert("Formulário enviado com sucesso!");
  }
});

function validarCampo(input, aviso) {
  if (input.value.trim() === "") {
    input.classList.add("errado");
    input.classList.remove("certo");
    aviso.classList.add("visivel");
    return false;
  } else {
    input.classList.remove("errado");
    input.classList.add("certo");
    aviso.classList.remove("visivel");
    return true;
  }
}
