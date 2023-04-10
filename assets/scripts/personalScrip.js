const divEmpleados = document.getElementById('empleados');

fetch('./database/personal.json')
    .then(res => res.json())
    .then(data => {
        for(personal of data){
            divEmpleados.innerHTML += `
            <div class="card-row">
                <div class="card">
                    <p>Nombre: ${personal.nombre}</p>
                    <p>Apellido: ${personal.apellido}</p>
                    <p>Puesto: ${personal.puesto}</p>
                    <p>Github: <a href="${personal.github}" target="_blank">Link</a></p>
                </div>
            </div>
            `
        }
    })
    .catch(error => console.log(error))