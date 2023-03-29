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

const getBicicletas = () => {
  fetch('./database/bicicletas.json')
        .then(res => res.json())
        .then(data => {
          for (const bici of data) {
            if (bici.id == 1) {
              divCarruselBtnsBicis.innerHTML += `
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${bici.id -1}" class="active" aria-current="true" aria-label="Slide ${bici.id}"></button>                 
              `;
              divCarouselInnerBicis.innerHTML += `
                <div class="carousel-item active">
                  <img src="${bici.imagen}" class="d-block w-100" alt="${bici.modelo}">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>${bici.marca} ${bici.modelo}</h5>
                    <p>Precio por dia: ${bici.precio}</p>
                  </div>
                </div>
              `;
            } else {
              divCarruselBtnsBicis.innerHTML += `
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${bici.id -1}" aria-label="Slide ${bici.id}"></button>                 
              `;
              divCarouselInnerBicis.innerHTML += `
                <div class="carousel-item active">
                  <img src="${bici.imagen}" class="d-block w-100" alt="${bici.modelo}"">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>${bici.marca} ${bici.modelo}</h5>
                    <p>Precio por dia: ${bici.precio}</p>
                  </div>
                </div>
              `;
            }
          }
        });
}
getBicicletas()