let minutos = 0;
let segundos = 0;
let intervalo;
let enMarcha = false;

document.getElementById("iniciar").addEventListener("click", function () {
    if (!enMarcha) {
        minutos = parseInt(document.getElementById("entrada-minutos").value);
        segundos = parseInt(document.getElementById("entrada-segundos").value);
        actualizarPantalla();
        intervalo = setInterval(actualizarTemporizador, 1000);
        enMarcha = true;
    }
});

document.getElementById("pausar").addEventListener("click", function () {
    clearInterval(intervalo);
    enMarcha = false;
});

document.getElementById("reiniciar").addEventListener("click", function () {
    clearInterval(intervalo);
    minutos = 0;
    segundos = 0;
    enMarcha = false;
    actualizarPantalla();
});

function actualizarTemporizador() {
    if (segundos === 0 && minutos === 0) {
        clearInterval(intervalo);
        enMarcha = false;
        alert("¡Tiempo completado!");
    } else {
        if (segundos === 0) {
            segundos = 59;
            minutos--;
        } else {
            segundos--;
        }
        actualizarPantalla();
    }
}

function actualizarPantalla() {
    document.getElementById("minutos").textContent = minutos
        .toString()
        .padStart(2, "0");
    document.getElementById("segundos").textContent = segundos
        .toString()
        .padStart(2, "0");
}
