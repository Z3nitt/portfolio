// Inicializar EmailJS con tu User ID
(function() {
    emailjs.init("6oQF5j-kfx8MGiZTL");  // Tu USER ID de EmailJS
})();

// Función para enviar el formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que el formulario se envíe de forma tradicional

    // Captura los datos del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Enviar el formulario utilizando EmailJS
    emailjs.sendForm('service_4j5k1kc', 'template_mx1i05e', this)  //SERVICE ID y TEMPLATE ID
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Mostrar modal de éxito
            showModal("success");
        }, function(error) {
            console.log('FAILED...', error);
            
            // Mostrar modal de error
            showModal("error");
        });
});

// Función para mostrar el modal con la imagen y el mensaje
function showModal(status) {
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modal-message");
    const modalImage = document.getElementById("modal-image");
    
    if (status === "success") {
        modalMessage.textContent = "Message sent successfully!";
        modalImage.src = "resources/check.png"; // Ruta de la imagen de éxito
    } else {
        modalMessage.textContent = "Something went wrong. Please try again.";
        modalImage.src = "resources/error.png"; // Ruta de la imagen de error
    }
    
    // Mostrar el modal
    modal.style.display = "block";
}

// Cerrar el modal cuando se haga clic en el botón de cerrar
document.getElementById("close-modal-btn").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("contact-form").reset(); // Limpiar el formulario después de cerrar el modal
});
