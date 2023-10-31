import './style.css'

const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const nav2 = document.querySelector("#nav2");


abrir.addEventListener("click", () => {
  nav2.classList.add("visible")
});


cerrar.addEventListener("click", () => {
  nav2.classList.remove("visible")
})