$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault(); // previene el envío del formulario

    var email = $('#typeEmailX').val();
    var password = $('#typePasswordX').val();

    // expresión regular para validar el correo electrónico
    var emailRegex = /\S+@\S+\.\S+/;

    // validación del correo electrónico y la contraseña
    if (!emailRegex.test(email)) {
      alert('Por favor ingrese un correo electrónico válido');
      return;
    }
    if (password.length < 8) {
      alert('Por favor ingrese una contraseña de al menos 8 caracteres');
      return;
    }
    
    // muestra un mensaje de bienvenida
    alert('Bienvenido, ' + email + '!');

    // redirecciona a la página de inicio
    window.location.href = "../index.html";
  });
});
