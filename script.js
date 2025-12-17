//para el menu principal del inciop
function toggleMenu() {
  const menu = document.getElementById('mainMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}



//para el menu de caapitlos 
document.addEventListener("DOMContentLoaded", () => {
  const capituloToggle = document.getElementById("capituloToggle");
  const menuCapitulos = document.getElementById("menuCapitulos");

  if (capituloToggle && menuCapitulos) {
    capituloToggle.addEventListener("click", () => {
      menuCapitulos.classList.toggle("open");
      document.body.classList.toggle("menu-abierto");

      if (menuCapitulos.classList.contains("open")) {
        capituloToggle.innerHTML = "&times;"; 
      } else {
        capituloToggle.innerHTML = "&lt;";
      }
    });
  }
});



//para que se envien los dattos
document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formularioDatos');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault(); 
    alert('¡Datos enviados!');
  });
});
