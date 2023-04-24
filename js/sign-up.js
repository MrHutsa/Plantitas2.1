
// Obtener los elementos del formulario
const formulario = document.getElementById('registro-form');
const nombre = document.getElementById('nombre');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const contraseña = document.getElementById('contraseña');
const confirmeContraseña = document.getElementById('confirmeContraseña');

// Agregar el evento 'submit' al formulario
formulario.addEventListener('submit', function(event) {
  // Evitar que el formulario se envíe automáticamente
  event.preventDefault();

  // Validar los campos del formulario
  if (nombre.value === '') {
    alert('Por favor, ingrese su nombre completo.');
    nombre.focus();
    return;
  }

  if (usuario.value === '') {
    alert('Por favor, ingrese un nombre de usuario.');
    usuario.focus();
    return;
  }

  if (!usuario.checkValidity()) {
    alert('El nombre de usuario debe tener al menos 4 caracteres y contener solo letras y números.');
    usuario.focus();
    return;
  }

  if (email.value === '') {
    alert('Por favor, ingrese su dirección de correo electrónico.');
    email.focus();
    return;
  }

  if (!email.checkValidity()) {
    alert('Por favor, ingrese una dirección de correo electrónico válida.');
    email.focus();
    return;
  }

  if (telefono.value === '') {
    alert('Por favor, ingrese su número telefónico.');
    telefono.focus();
    return;
  }

  if (!telefono.checkValidity()) {
    alert('Por favor, ingrese un número telefónico válido (ejemplo: 111-222-333).');
    telefono.focus();
    return;
  }

  if (contraseña.value === '') {
    alert('Por favor, ingrese una contraseña.');
    contraseña.focus();
    return;
  }

  if (contraseña.value.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres.');
    contraseña.focus();
    return;
  }

  if (confirmeContraseña.value === '') {
    alert('Por favor, confirme su contraseña.');
    confirmeContraseña.focus();
    return;
  }

  if (confirmeContraseña.value !== contraseña.value) {
    alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
    confirmeContraseña.focus();
    return;
  }

  // Si todos los campos son válidos, enviar el formulario
  formulario.submit();
  window.location.href = "../index.html";
});






/*
document.getElementById("registro-form").addEventListener("submit", function(event) {
    // Detener el envío del formulario para validación manual
    event.preventDefault();
  
    // Obtener valores de los campos de entrada
    var nombre = document.getElementById("nombre").value;
    var usuario = document.getElementById("usuario").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var contraseña = document.getElementById("contraseña").value;
    var confirmeContraseña = document.getElementById("confirmeContraseña").value;
    var genero = document.querySelector('input[name="genero"]:checked');
  
    // Validar campos
    var errores = [];
    if (nombre.trim() === "") {
      errores.push("Debe ingresar su nombre completo.");
    }
    if (nombreUsuario.trim() === "") {
      errores.push("Debe ingresar un nombre de usuario.");
    } else if (!/^[a-zA-Z0-9]{4,}$/.test(usuario)) {
      errores.push("El nombre de usuario debe contener al menos 4 caracteres alfanuméricos.");
    }
    if (email.trim() === "") {
      errores.push("Debe ingresar su correo electrónico.");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errores.push("El correo electrónico ingresado no es válido.");
    }
    if (telefono.trim() === "") {
      errores.push("Debe ingresar su número de teléfono.");
    } else if (!/^[0-9]{3}[0-9]{3}[0-9]{3}$/.test(telefono)) {
      errores.push("El número de teléfono ingresado no es válido. Use el formato 111-222-333.");
    }
    if (contraseña.trim() === "") {
      errores.push("Debe ingresar una contraseña.");
    }
    if (confirmeContraseña.trim() === "") {
      errores.push("Debe confirmar su contraseña.");
    } else if (confirmeContraseña !== contraseña) {
      errores.push("Las contraseñas no coinciden.");
    }
  
    // Mostrar errores o enviar formulario
    var erroresContainer = document.getElementById("errores");
    if (errores.length > 0) {
      erroresContainer.innerHTML = "";
      for (var i = 0; i < errores.length; i++) {
        var errorDiv = document.createElement("div");
        errorDiv.className = "error";
        errorDiv.textContent = errores[i];
        erroresContainer.appendChild(errorDiv);
      }
    } else {
      erroresContainer.innerHTML = "";
      document.getElementById("registro-form").submit();
    }
    
    // Obtener el botón de registro
    const botonRegistro = document.querySelector('.button-box button');

    // Agregar evento click al botón de registro
    botonRegistro.addEventListener('click', function() {
    // Redirigir al usuario al index.html
    window.location.href = 'index.html';
    });
  });
  */



/*
<font-awesome-icon ico:icon="['fab', 'instagram']" bounce />
*/
/*

console.log("hola")
// Nombre Completo

const miInput = document.getElementById('nombre');

// Quita la validación mientras escribes
miInput.addEventListener('input', () => {
    // Quita el mensaje según escribes
    miInput.setCustomValidity('');
    // Comprueba si debe validarlo
    miInput.checkValidity();
});

// Muestra el mensaje de validación
miInput.addEventListener('invalid', () => {
    miInput.setCustomValidity('Si no es molestia... ¿me dices tu nombre?');
});

// Nombre Usuario

// Variables
const inputUsuario = document.getElementById('usuario');
const mensajeErrorUsuarioCorto = "Muy corta. Dame un nombre con 4 o mas caracteres.";

// Eventos
inputUsuario.addEventListener('input', () => {
    // Quita el mensaje según escribes
    inputUsuario.setCustomValidity('');
    // Comprueba si debe validarlo
    inputUsuario.checkValidity();
});

inputUsuario.addEventListener('invalid', () => {
    inputUsuario.setCustomValidity(mensajeErrorUsuarioCorto);
});

// Email

const miEmail = document.getElementById('email');

// Quita la validación mientras escribes
miEmail.addEventListener('input', () => {
    // Quita el mensaje según escribes
    miEmail.setCustomValidity('');
    // Comprueba si debe validarlo
    miEmail.checkValidity();
});

// Muestra el mensaje de validación
miEmail.addEventListener('invalid', () => {
    miEmail.setCustomValidity('Me parece que esto no es un E-mail');
});

// Telefono

const miTelefono = document.getElementById('telefono');

// Quita la validación mientras escribes
miTelefono.addEventListener('input', () => {
    // Quita el mensaje según escribes
    miTelefono.setCustomValidity('');
    // Comprueba si debe validarlo
    miTelefono.checkValidity();
});

// Muestra el mensaje de validación
miTelefono.addEventListener('invalid', () => {
    miTelefono.setCustomValidity('No es un número');
});
*/
