const mostrarHora = () => {
  const fechaActual = new Date();
  const horas = fechaActual.getHours() - 12;
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();

  if (horas < 10) {
    document.querySelector("#horas").innerHTML = "0" + horas;
  } else {
    document.querySelector("#horas").innerHTML = horas;
  }

  if (minutos < 10) {
    document.querySelector("#minutos").innerHTML = "0" + minutos;
  } else {
    document.querySelector("#minutos").innerHTML = minutos;
  }

  if (segundos < 10) {
    document.querySelector("#segundos").innerHTML = "0" + segundos;
  } else {
    document.querySelector("#segundos").innerHTML = segundos;
  }

  if (horas + 12 > 11) {
    document.querySelector("#meridianos").innerHTML = "PM";
  } else {
    document.querySelector("#meridianos").innerHTML = "AM";
  }
};

setInterval(mostrarHora, 10);
