// Obtener los elementos del DOM
const formWizard = document.getElementById('form-wizard');
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const submitButton = document.querySelector(".submit-button");
const formSteps = formWizard.querySelectorAll(".form-step");
const bicicletaSelect = document.getElementById("bicicleta");
const precioSpan = document.getElementById("precio");

let bicicletasData = 0;
let currentStep = 0;
// Función para avanzar al siguiente paso
function nextStep() {
  const currentStepFields = formSteps[currentStep].querySelectorAll('[required]');
  let valid = true;

  // Verificar si los campos requeridos del paso actual están completos
  currentStepFields.forEach(field => {
    if (!field.value) {
      valid = false;
    }
  });

  // Mostrar alerta si los campos requeridos no están completos
  if (!valid) {
    swal('Por favor complete los campos requeridos', '', 'error');
    return;
  }

  formSteps[currentStep].style.display = "none";
  currentStep += 1;
  formSteps[currentStep].style.display = "block";

  // Mostrar o ocultar botones de acuerdo al paso actual
  if (currentStep === 0) {
    prevButton.style.display = "none";
    nextButton.style.display = "block";
    submitButton.style.display = "none";
  } else if (currentStep === formSteps.length - 1) {
    prevButton.style.display = "block";
    nextButton.style.display = "none";
    submitButton.style.display = "block";
  } else {
    prevButton.style.display = "block";
    nextButton.style.display = "block";
    submitButton.style.display = "none";
  }
}

// Función para retroceder al paso anterior
function prevStep() {
  formSteps[currentStep].style.display = "none";
  currentStep -= 1;
  formSteps[currentStep].style.display = "block";

  // Mostrar u ocultar botones de acuerdo al paso actual
  if (currentStep === 0) {
    prevButton.style.display = "none";
    nextButton.style.display = "block";
    submitButton.style.display = "none";
  } else if (currentStep === formSteps.length - 1) {
    prevButton.style.display = "block";
    nextButton.style.display = "none";
    submitButton.style.display = "block";
  } else {
    prevButton.style.display = "block";
    nextButton.style.display = "block";
    submitButton.style.display = "none";
  }
}

// Función para avanzar al siguiente paso
function nextStep() {
  const currentStepFields = formSteps[currentStep].querySelectorAll('[required]');
  let valid = true;

// Verificar si los campos requeridos del paso actual están completos
  currentStepFields.forEach(field => {
    if (!field.value) {
      valid = false;
    }
  });

   // Mostrar alerta si los campos requeridos no están completos
   if (!valid) {
    swal('Por favor complete los campos requeridos', '', 'warning');
    return;
  }

  formSteps[currentStep].style.display = "none";
  currentStep += 1;
  formSteps[currentStep].style.display = "block";

// Mostrar o ocultar botones de acuerdo al paso actual
if (currentStep === 1) {
  prevButton.style.display = "block";
  nextButton.style.display = "block";
  submitButton.style.display = "none";
} else if (currentStep === formSteps.length - 1) {
  prevButton.style.display = "block";
  nextButton.style.display = "none";
  submitButton.style.display = "block";
}
}

// Event listeners para los botones
nextButton.addEventListener("click", () => {
  if (currentStep === formSteps.length - 1) {
    submitButton.disabled = false;
  }
  nextStep();
});

prevButton.addEventListener("click", () => {
  if (currentStep === formSteps.length - 2) {
    submitButton.disabled = true;
  }
  prevStep();
});


// Agregar evento al botón de finalizar
/*  submitButton.addEventListener('click', (event) => {
  const confirmMsg = confirm('¿Está seguro que desea enviar la solicitud?');
  if (confirmMsg) {
    swal('Gracias por su solicitud, lo esperamos pronto!', 'success');
    formSteps.reset();
  }
}); */

// Agregar evento al botón de finalizar
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // prevenir que la página se recargue al hacer clic en el botón
  swal({
    title: "¿Está seguro que desea enviar la solicitud?",
    text: "",
    icon: "warning",
    buttons: ["Cancelar", "Aceptar"],
    dangerMode: true,
  }).then((confirm) => {
    if (confirm) {
      swal({
        title: "Gracias por su solicitud",
        text: "Lo esperamos pronto!",
        icon: "success",
        button: "Aceptar"
      }).then(() => {
        /* formSteps.reset(); // reiniciar el formulario después de que el usuario haga clic en "Aceptar" en la alerta de SweetAlert */
        var formElements = document.getElementById("form-wizard").elements;
        for (var i = 0; i < formElements.length; i++) {
          if (formElements[i].type !== "submit") {
            formElements[i].value = "";
          }
        }
      });
    }
  });
});


// Mostrar o ocultar botones de acuerdo al paso inicial
prevButton.style.display = "none";
submitButton.style.display = "none";
nextButton.style.display = "block";


 // Realizar la petición fetch para obtener los datos del archivo valores.json
 fetch('./database/valores.json')
 .then(response => response.json())
 .then(data => {
   bicicletasData = data;
   /* console.log("Datos de bicicletas obtenidos:", bicicletasData); */
 })
 .catch(error => console.log(error));

// Escuchar el evento "change" del select de bicicleta
bicicletaSelect.addEventListener('change', (event) => {
 // Obtener el valor seleccionado del select de bicicleta
 const selectedValue = event.target.value;
/*  console.log("Valor seleccionado:", selectedValue); */

 // Encontrar la bicicleta seleccionada en los datos obtenidos del archivo json
 const selectedBicicleta = bicicletasData.find(bicicleta => bicicleta.modelo === selectedValue);
 /* console.log("Bicicleta seleccionada:", selectedBicicleta); */

 // Mostrar el precio en el span correspondiente
 if (selectedBicicleta) {
   precioSpan.textContent = selectedBicicleta.precio;
 } else {
   precioSpan.textContent = "";
 }
});