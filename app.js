const mostrarHora = () => {
  const fechaActual = new Date();
  const hora = fechaActual.getHours() - 12;
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();
  const ampm = hora + 12;

  document.querySelector("#horas").innerHTML = hora;
  if (hora < 10) {
    document.querySelector("#horas").innerHTML = "0" + hora;
  } else {
    document.querySelector("#horas").innerHTML = hora;
  }

  document.querySelector("#minutos").innerHTML = minutos;

  if (segundos < 10) {
    document.querySelector("#segundos").innerHTML = "0" + segundos;
  } else {
    document.querySelector("#segundos").innerHTML = segundos;
  }

  if (ampm > 11) {
    document.querySelector("#am-pm").innerHTML = "PM";
  } else {
    document.querySelector("#am-pm").innerHTML = "AM";
  }
};

setInterval(mostrarHora, 10);
