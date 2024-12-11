// Muestra el popup cuando se hace clic en el botón "Enviar" del formulario de contacto
const contactForm = document.querySelector('form');
const popup = document.createElement('div');
popup.classList.add('popup');
popup.innerHTML = 
  <div class="popup-content">
    <span class="close">&times;</span>
    <h2>¡Gracias por contactarnos!</h2>
    <p>Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.</p>
  </div>
;

document.body.appendChild(popup);

// Función para cerrar el popup
const closePopup = () => {
    popup.style.display = 'none';
};

// Muestra el popup al enviar el formulario de contacto
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Previene el envío del formulario para mostrar el popup

    // Simulamos un pequeño retraso para el envío del formulario
    setTimeout(() => {
        popup.style.display = 'block'; // Muestra el popup
    }, 300);

    // Resetear el formulario
    contactForm.reset();
});

// Cierra el popup al hacer clic en la "X"
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closePopup);

// Cierra el popup si el usuario hace clic fuera del contenido
window.addEventListener('click', function (e) {
    if (e.target === popup) {
        closePopup();
    }
});

// Scroll suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



