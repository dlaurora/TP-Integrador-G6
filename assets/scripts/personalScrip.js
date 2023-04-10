const divEmpleados = document.getElementById('empleados');

fetch('./database/personal.json')
    .then(res => res.json())
    .then(data => {
        for(element of data){
            divEmpleados.innerHTML += `
            <div class="card">
                <img class="imgCard" src="${element.imagen}" alt="Imgen de perfil de ${element.nombre}">
                <span class="name">${element.nombre}</span>
                <span class="job">${element.titulo}</span>
                <p class="description">${element.descripcion}</p>
            </div>             
            `           
        }        
    })
    .catch(error => console.log(error))