document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btnMostrar");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", () => {
    mensaje.textContent = "✅ Este sitio ha sido publicado con GitHub Pages";
  });
});
