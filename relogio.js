let horario = document.getElementById('horario');

function atualizarHora() {
    let agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    if (horas < 10) horas = '0' + horas; 
    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;
    
    horario.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarHora, 1000);

atualizarHora();