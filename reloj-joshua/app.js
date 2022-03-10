const fomatearTiempo = (tiempo) => {
  if (tiempo < 10) {
    return "0" + tiempo;
  }

  return tiempo;
};

const mostrarHora = () => {
  const fechaActual = new Date();
  const hora = fechaActual.getHours() - 12;
  const minutos = fechaActual.getMinutes();
  const segundos = fechaActual.getSeconds();
  const am_pm = hora + 12 > 11 ? "PM" : "AM";

  document.querySelector("#horas").innerHTML = fomatearTiempo(hora);
  document.querySelector("#minutos").innerHTML = fomatearTiempo(minutos);
  document.querySelector("#segundos").innerHTML = fomatearTiempo(segundos);
  document.querySelector("#AMPM").innerHTML = am_pm;
};

setInterval(mostrarHora, 10);
