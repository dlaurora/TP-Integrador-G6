const divCarruselIndicatorsBicis = document.getElementById('carouselExampleCaptions');
const divCarruselBtnsBicis = document.getElementById('carousel-indicators');
const divCarouselInnerBicis = document.getElementById('carousel-inner');
const form = document.getElementById("formulario");



    fetch('./database/bicicletas.json')
  .then(response => response.json())
  .then(data => {
    // Iterar sobre los datos y crear los elementos del carrusel
    data.forEach((element, index) => {
      const isActive = index === 0 ? 'active' : '';
      carouselIndicators.innerHTML += `
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="${isActive}" aria-current="true"></button>
      `;
      carouselInner.innerHTML += `
        <div class="carousel-item ${isActive}">
          <img src="${element.imagen}" class="d-block w-100" alt="${element.titulo}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${element.marca}</h5>
            <p>${element.modelo}</p>
            <p>${element.precio} USD el dia</p>
          </div>
        </div>
      `;
    });

    // Inicializar el carrusel de Bootstrap
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'), {
      interval: 5000, // tiempo de transición entre imágenes en ms
      pause: 'hover', // pausa la transición cuando el usuario coloca el mouse sobre el carrusel
    });
  })
  .catch(error => console.error(error));