const mostrarHora = () => {
  const fecha_actual = new Date();
  const horas = fecha_actual.getHours() - 12;
  const minutos = fecha_actual.getMinutes();
  const segundos = fecha_actual.getSeconds();
  const meridianos = horas + 12;

  if (horas > 11) {
  }
  document.querySelector("#horas").innerHTML = horas;
  document.querySelector("#minutos").innerHTML = minutos;
  if (segundos < 10) {
    document.querySelector("#segundos").innerHTML = "0" + segundos;
  } else {
    document.querySelector("#segundos").innerHTML = segundos;
  }
};

setInterval(mostrarHora, 1);
