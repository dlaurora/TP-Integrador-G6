const divEmpleados = document.getElementById('empleados');

fetch('./database/personal.json')
    .then(res => res.json())
    .then(data => {
        for(element of data){
            divEmpleados.innerHTML += `
            <div class="card">
                <p>Nombre: ${element.nombre}</p>
                <a href="${element.github}">GitHub</a>
            </div>
            `
        }
    })
    .catch(error => console.log(error))