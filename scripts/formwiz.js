// Obtener los elementos del DOM
const formWizard = document.getElementById("form-wizard");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const submitButton = document.querySelector(".submit-button");
const formSteps = formWizard.querySelectorAll(".form-step");
const bicicletaSelect = document.getElementById("bicicleta");
const precioSpan = document.getElementById("precio");

let bicicletasData = 0;
let currentStep = 0;

  // Función para limpiar el formulario y volver al primer paso
function resetForm() {
  form.reset();
  showStep(0);
}


// Función para retroceder al paso anterior
function prevStep() {
  formSteps[currentStep].style.display = "none";
  currentStep -= 1;
  formSteps[currentStep].style.display = "block";



// Ocultar todos los pasos excepto el primero
formSteps.forEach((step, index) => {
  if (index !== 0) {
    step.style.display = "none";
  }
});

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
    alert('Por favor complete todos los campos requeridos');
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
submitButton.addEventListener('click', () => {
  // Mostrar mensaje de confirmación en un pop-up
  const confirmMsg = confirm('¿Está seguro que desea enviar la solicitud?');
  if (confirmMsg) {
    // Mostrar mensaje de agradecimiento en un pop-up
    alert('Gracias por su solicitud, lo esperamos pronto!');
    resetForm();
  }
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