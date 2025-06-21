// Si tienes scripts adicionales, colócalos aquí.
// Por ejemplo, animaciones al hacer scroll, validaciones de formularios, etc.

// Ejemplo de un script para agregar una clase 'fade-in' cuando una sección es visible
/*
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Se activa cuando el 10% del elemento es visible

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-start'); // Clase inicial para ocultar
        observer.observe(section);
    });
});
*/