// Obtener el formulario y el botón de enviar
var formulario = document.getElementById('formulario');
var btnEnviar = formulario.querySelector('input[type="submit"]');

// Agregar evento de clic al botón de enviar
btnEnviar.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir el envío del formulario por defecto

            // Verificar los campos requeridos
            var nombre = formulario.querySelector('input[name="nombre"]');
            var mensaje = formulario.querySelector('textarea[name="mensaje"]');
      if (!nombre.value || !mensaje.value) {
            swal('Por favor complete los campos requeridos', '', 'warning');
            return;
      }

      // Mostrar ventana emergente con el mensaje de éxito
      swal('¡Consulta enviada!', 'Su consulta fue enviada correctamente. Un representante se pondrá en contacto a la brevedad.', 'success');

      // Limpiar los campos del formulario
      formulario.reset();

      // Mostrar el popup durante 3 segundos y luego ocultarlo
      setTimeout(function() {
      popup.style.display = 'none';
      },  3000);
});