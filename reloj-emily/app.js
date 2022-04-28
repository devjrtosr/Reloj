const mostrarHora=()=>{
    const fechaActual= new Date();
    const hora = fechaActual.getHours()-12;
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();
    const meridianos= hora+12;
    
    if(segundos<10){
        document.querySelector('#hora').innerHTML='0'+ hora;
    } else{
        document.querySelector('#hora').innerHTML=hora;
    }    
    document.querySelector('#minutos').innerHTML=minutos;
    if(segundos<10){
        document.querySelector('#segundos').innerHTML='0'+ segundos;
    } else{
        document.querySelector('#segundos').innerHTML=segundos;
    }
    if(hora>11){
        document.querySelector('#meridianos').innerHTML='PM';
    }
    else{
        document.querySelector('#meridianos').innerHTML='PM';
    }
};

setInterval(mostrarHora,10);