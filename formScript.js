// Inicializar EmailJS con tu User ID
(function() {
    emailjs.init("6oQF5j-kfx8MGiZTL");  //USER ID de EmailJS
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
            alert("Message sent successfully!");  // Alerta de éxito
        }, function(error) {
            console.log('FAILED...', error);
            alert("Something went wrong. Please try again later.");  // Alerta de error
        });
});
