// Funcionalidad del menú responsive
document.addEventListener('DOMContentLoaded', () => {
    // Añadir clase active al link del menú actual
    const currentLocation = window.location.hash;
    if (currentLocation) {
        const activeLink = document.querySelector(`a[href="${currentLocation}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Smooth scroll para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});