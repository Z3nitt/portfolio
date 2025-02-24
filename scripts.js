let lastScrollTop = 0; // Variable para almacenar la última posición de scroll
const header = document.querySelector('header'); // Seleccionamos el header

// Detectar cuando se hace scroll
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Solo ejecutar el código si la página tiene suficiente contenido para hacer scroll
    if (document.body.scrollHeight > window.innerHeight) {
        if (currentScroll > lastScrollTop) {
            // Si estamos desplazándonos hacia abajo, ocultar el header
            header.style.top = '-60px'; // Cambiar este valor si el height del header es diferente
        } else {
            // Si estamos desplazándonos hacia arriba, mostrar el header
            header.style.top = '0';
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // No permitir scroll hacia arriba cuando se llega al tope
    } else {
        // Si no hay suficiente contenido (no hay scroll), aseguramos que el header siempre esté visible
        header.style.top = '0';
    }
});
// Ocultar el .html en la barra de direcciones
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith(".html")) {
        let newPath = window.location.pathname.replace(".html", "");
        window.history.replaceState({}, "", newPath);
    }
});
