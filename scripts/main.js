const divCarruselIndicatorsBicis = document.getElementById('carouselExampleCaptions');
const divCarruselBtnsBicis = document.getElementById('carousel-indicators');
const divCarouselInnerBicis = document.getElementById('carousel-inner');
const form = document.getElementById("formulario");

function enviarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const bicicleta = document.getElementById("bicicleta").value;
  const costo = document.getElementById("costo").value;

  function limpiarFormulario() {
    document.getElementById("nombre").value = '';
    document.getElementById("apellido").value = '';
    document.getElementById("telefono").value = '';
    document.getElementById("email").value = '';
    document.getElementById("bicicleta").value = '';
    document.getElementById("costo").value = '';
  }

  if (nombre === "" || apellido === "" || telefono === "" || email === "" || bicicleta === "" || costo === "") {
    alert("Formulario Incompleto");
  } else {
    alert("Pedido enviado");
    limpiarFormulario();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  enviarFormulario();
});