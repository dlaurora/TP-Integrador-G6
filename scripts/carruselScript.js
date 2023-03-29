const indicador = document.getElementById('carousel-indicators');
const inner = document.getElementById('carousel-inner');

let indice = 0;

fetch('./database/bicicletas.json')
    .then(res => res.json())
    .then(data => {
        for(product of data){
            console.log(product.marca);
            if(indice == 0){
                indicador.innerHTML += `
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${indice}" class="active" aria-current="true" aria-label="Slide ${indice + 1}"></button>
                `
                inner.innerHTML += `      
                    <div class="carousel-item active">
                        <img src="${product.imagen}" class="d-block w-100" alt="${product.marca}">
                        <br>
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="text-dark">${product.marca} ${product.modelo}</h5>
                            <p class="text-dark">Precio por dia: $${product.precio}</p>
                        </div>
                    </div>
                `            
            }else{
                indicador.innerHTML += `
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${indice}" aria-label="Slide ${indice + 1}"></button>
                `
                inner.innerHTML += `      
                    <div class="carousel-item">
                        <img src="${product.imagen}" class="d-block w-100" alt="${product.marca}">
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="text-dark">${product.marca} ${product.modelo}</h5>
                            <p class="text-dark">Precio por dia: $${product.precio}</p>
                        </div>
                    </div>
                ` 
            }
            indice++ 
            
        }
    })