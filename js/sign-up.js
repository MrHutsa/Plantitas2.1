// Obtener los elementos del formulario
// Obtener referencia al formulario de registro
const registroForm = document.getElementById("registro-form");

// Agregar un controlador de eventos al formulario de registro
registroForm.addEventListener("submit", (event) => {
  // Prevenir el comportamiento por defecto del formulario
  event.preventDefault(); // Evita que el formulario se envíe

// Obtener los valores de los campos de entrada
const nombreInput = document.getElementById('nombre');
const usuarioInput = document.getElementById('usuario');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const contraseñaInput = document.getElementById('contraseña');
const confirmeContraseñaInput = document.getElementById('confirmeContraseña');

const nombre = nombreInput.value.trim();
const usuario = usuarioInput.value.trim();
const email = emailInput.value.trim();
const telefono = telefonoInput.value.trim();
const contraseña = contraseñaInput.value.trim();
const confirmeContraseña = confirmeContraseñaInput.value.trim();

// NOMBRE
if (nombre === '') {
  if (!nombreInput.classList.contains('error')) {
    nombreInput.classList.add('error');
    nombreInput.insertAdjacentHTML('afterend', '<p class="mensaje-intrusivo">Debe ingresar su nombre completo.</p>');
  }
} else {
  nombreInput.classList.remove('error');
  const mensajeIntrusivo = document.querySelector('#nombre + .mensaje-intrusivo');
  if (mensajeIntrusivo) {
    mensajeIntrusivo.remove();
  }
}

// USUARIO
if (usuario === '') {
  if (!usuarioInput.classList.contains('error')) {
    usuarioInput.classList.add('error');
    usuarioInput.insertAdjacentHTML('afterend', '<p class="mensaje-intrusivo">Debe ingresar su nombre de usuario.</p>');
  }
} else {
  usuarioInput.classList.remove('error');
  const mensajeIntrusivo = document.querySelector('#usuario + .mensaje-intrusivo');
  if (mensajeIntrusivo) {
    mensajeIntrusivo.remove();
  }
}

// EMAIL
if (email === '') {
  if (!emailInput.classList.contains('error')) {
    emailInput.classList.add('error');
    emailInput.insertAdjacentHTML('afterend', '<p class="mensaje-intrusivo">Debe ingresar su correo electrónico.</p>');
  }
} else if (!validarEmail(email)) {
  if (!emailInput.classList.contains('error')) {
    emailInput.classList.add('error');
    emailInput.insertAdjacentHTML('afterend', '<p class="mensaje-intrusivo">Debe ingresar un correo electrónico válido.</p>');
  }
} else {
  emailInput.classList.remove('error');
  const mensajeIntrusivo = document.querySelector('#email + .mensaje-intrusivo');
  if (mensajeIntrusivo) {
    mensajeIntrusivo.remove();
  }
}

// TELEFONO
if (telefono === '') {
  if (!telefonoInput.classList.contains('error')) {
    telefonoInput.classList.add('error');
    telefonoInput.insertAdjacentHTML('afterend', '<p class="mensaje-intrusivo">Debe ingresar su número de teléfono.</p>');
  }
} else if (!validarTelefono(telefono)) {
  if (!telefonoInput.classList.contains('error')) {
    telefonoInput.classList.add('error');
    telefonoInput.insertAdjacentHTML('afterend', '<p class="mensaje-intrusivo">Debe ingresar un número de teléfono válido (Ej: 111-222-333).</p>');
  }
} else {
  telefonoInput.classList.remove('error');
  const mensajeIntrusivo = document.querySelector('#telefono + .mensaje-intrusivo');
  if (mensajeIntrusivo) {
    mensajeIntrusivo.remove();
  }
}

// CONTRASEÑA
if (contraseña === '') {
  if (!contraseñaInput.classList.contains('error')) {
    contraseñaInput.classList.add('error');
    contraseñaInput.insertAdjacentHTML('afterend', '<p class="mensaje-intrusivo">Debe ingresar su contraseña.</p>');
  }
} else if (!validarTelefono(contraseña)) {
  if (!contraseñaInput.classList.contains('error')) {
    contraseñaInput.classList.add('error');
    contraseñaInput.insertAdjacentHTML('afterend', '<p class="mensaje-intrusivo">Debe ingresar una contraseña válida.</p>');
  }
} else {
  contraseñaInput.classList.remove('error');
  const mensajeIntrusivo = document.querySelector('#contraseña + .mensaje-intrusivo');
  if (mensajeIntrusivo) {
    mensajeIntrusivo.remove();
  }
}

// CONFIRME CONTRASEÑA
if (confirmeContraseña === '') {
  if (!confirmeContraseñaInput.classList.contains('error')) {
    confirmeContraseñaInput.classList.add('error');
    confirmeContraseñaInput.insertAdjacentHTML('afterend', '<p class="mensaje-intrusivo">Repita la contraseña.</p>');
  }
} else if (!validarTelefono(confirmeContraseña)) {
  if (!confirmeContraseñaInput.classList.contains('error')) {
    confirmeContraseñaInput.classList.add('error');
    confirmeContraseñaInput.insertAdjacentHTML('afterend', '<p class="mensaje-intrusivo">La contraseña debe ser igual a la anterior.</p>');
  }
} else {
  confirmeContraseñaInput.classList.remove('error');
  const mensajeIntrusivo = document.querySelector('#confirmeContraseña + .mensaje-intrusivo');
  if (mensajeIntrusivo) {
    mensajeIntrusivo.remove();
  }
}
  // Si todos los campos son válidos, enviar el formulario
  formulario.submit();
  window.location.href = "../index.html";
});
