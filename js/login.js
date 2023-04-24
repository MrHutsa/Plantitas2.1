// JQUERY


// Obtener los elementos del formulario
const email = document.getElementById('typePasswordX');
const password = document.getElementById('typePasswordX');


// Agregar el evento 'submit' al formulario
formulario.addEventListener('submit', function(event) {
  // Evitar que el formulario se envíe automáticamente
  event.preventDefault();

  // Validar los campos del formulario

  if (email.value === '') {
    alert('Por favor, ingrese su dirección de correo electrónico.');
    email.focus();
    return;
  }

  if (password.value === '') {
    alert('Por favor, ingrese una contraseña.');
    password.focus();
    return;
  }

  if (password.value.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres.');
    password.focus();
    return;
  }


  // Si todos los campos son válidos, enviar el formulario
  formulario.submit();
  window.location.href = "../index.html";
});



$(document).ready(function() {
  $('button[type="submit"]').click(function() {
    var email = $('#typeEmailX').val();
    var password = $('#typePasswordX').val();
    if (email && password) {
      alert('Bienvenido, ' + email + '!');

    }

  });

});

