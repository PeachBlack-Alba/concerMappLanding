function validation() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var soy = document.getElementById("soy").value;
  var mensaje = document.getElementById("mensaje").value;
  var error_message = document.getElementById("error_message");
  var text;

  error_message.style.padding = "10px";

  if (nombre.lenght < 2) {
    text = "Por favor, introduzca un nombre válido";
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.lenght < 6) {
    text = "Por favor, introduzca un email válido";
    error_message.innerHTML = text;
    return false;
  }

  if (soy.lenght < 2) {
    text = "Por favor, introduzca una descripción válida";
    error_message.innerHTML = text;
    return false;
  }
  if (mensaje.lenght < 14) {
    text = "Por favor, introduzca su mensaje ";
    error_message.innerHTML = text;
    return false;
  }
  alert("Su petición ha sido correctamente enviada!");

  return true;
}
