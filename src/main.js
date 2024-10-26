const img = document.getElementById("img");
let puntuacion = document.getElementById("puntuacion");
let puntos = 0;
let multiplicador = 1;
document.addEventListener("DOMContentLoaded", function () {
  const btn2 = document.getElementById("btn-2");
  const btn5 = document.getElementById("btn-5");
  const btn10 = document.getElementById("btn-10");
  const btn50 = document.getElementById("btn-50");
  const btn100 = document.getElementById("btn-100");
  btnAutoClick = document.getElementById("btn-AutoClick");
  img.addEventListener("click", function () {
    puntos += multiplicador;
    actualizarPuntuacion();
    activarBotones();
  });

  function activarBotones() {
    if (puntos >= 20) {
      puntos -= 20;
      btn2.classList.remove("btn-desactivados");
      btn2.classList.add("btn-activados");
      actualizarPuntuacion();
    }
    if (puntos >= 50) {
      puntos -= 50;
      btn5.classList.remove("btn-desactivados");
      btn5.classList.add("btn-activados");
      actualizarPuntuacion();
    }
    if (puntos >= 100) {
      puntos -= 100;
      btn10.classList.remove("btn-desactivados");
      btn10.classList.add("btn-activados");
      actualizarPuntuacion();
    }
    if (puntos >= 500) {
      puntos -= 500;
      btn50.classList.remove("btn-desactivados");
      btn50.classList.add("btn-activados");
      actualizarPuntuacion();
    }
    if (puntos >= 1000) {
      puntos -= 1000;
      btn100.classList.remove("btn-desactivados");
      btn100.classList.add("btn-activados");
      actualizarPuntuacion();
    }
    if (puntos >= 2000) {
      puntos -= 2000;
      btnAutoClick.classList.remove("btn-desactivados");
      btnAutoClick.classList.add("btn-activados");
      actualizarPuntuacion();
    }
  }
});

function cambiarMultiplicador(num) {
  multiplicador = num;
}

function activarAutoClick() {
  setInterval(autoClick, 300);
}

function autoClick() {
  puntos++;
  actualizarPuntuacion();
}

function actualizarPuntuacion() {
  puntuacion.textContent = puntos;
}
