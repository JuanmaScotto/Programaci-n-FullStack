document.getElementById("fichaForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const password = document.getElementById("password").value.trim();
  const repitePassword = document.getElementById("repite_password").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const fecha = document.getElementById("fecha").value;
  const ciudad = document.getElementById("ciudad").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const tel = document.getElementById("tel").value.trim();

  if (!nombre || !apellido || !email || !fecha || !ciudad || !direccion || !tel || !password || !repitePassword) {
    alert("Todos los campos deben estar completos.");
    return;
  }

  if (nombre.length < 3 || nombre.length > 30) {
    alert("El nombre debe tener entre 3 y 30 caracteres.");
    return;
  }

  if (apellido.length < 3 || apellido.length > 30) {
    alert("El apellido debe tener entre 3 y 30 caracteres.");
    return;
  }

  const telRegex = /^[0-9+\-()\s]+$/;
  if (!telRegex.test(tel)) {
    alert("El teléfono solo puede contener números y caracteres como +, -, (, ) y espacios.");
    return;
  }

  // Validar formato de la contraseña
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*().,;:\-_=+{}[\]|\\/?<>]).{8,20}$/;
if (!passwordRegex.test(password)) {
  alert("La contraseña debe tener al menos una mayúscula, un número y un carácter especial.");
  return;
}

// Verificar que las contraseñas coincidan
if (password !== repitePassword) {
  alert("Las contraseñas no coinciden.");
  return;
}


  // Mostrar ficha debajo del formulario
  const fichaHTML = `
    <h2>Ficha del Alumno</h2>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Apellido:</strong> ${apellido}</p>
    <p><strong>Correo Electrónico:</strong> ${email}</p>
    <p><strong>Fecha de Nacimiento:</strong> ${fecha}</p>
    <p><strong>Ciudad:</strong> ${ciudad}</p>
    <p><strong>Dirección:</strong> ${direccion}</p>
    <p><strong>Teléfono:</strong> ${tel}</p>
  `;

  document.getElementById("fichaMostrada").innerHTML = fichaHTML;
});
