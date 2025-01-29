// Inicializar EmailJS con tu User ID
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("6oQF5j-kfx8MGiZTL");  // Reemplaza con tu USER ID real
});

// Función para enviar el formulario
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita el envío tradicional del formulario

    // Enviar el formulario utilizando EmailJS
    emailjs.sendForm("service_4j5k1kc", "template_mx1i05e", this)  // Reemplaza con tu SERVICE ID y TEMPLATE ID
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");  // Alerta de éxito
            document.getElementById("contact-form").reset(); // Limpia el formulario después de enviarlo
        }, function(error) {
            console.log("FAILED...", error);
            alert("Something went wrong. Please try again later.");  // Alerta de error
        });
});
