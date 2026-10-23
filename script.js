const botones = document.querySelectorAll(".boton");
const contenidos = document.querySelectorAll(".contenido");

botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    // Quitar lo activo de todo
    botones.forEach(function (b) { b.classList.remove("activo"); });
    contenidos.forEach(function (c) { c.classList.remove("activo"); });

    // Activar el boton y el contenido seleccionado
    boton.classList.add("activo");
    document.getElementById(boton.dataset.tab).classList.add("activo");
  });
});
