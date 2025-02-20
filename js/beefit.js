document.addEventListener('DOMContentLoaded', () => {
    // Actualización del año actual y última fecha de modificación
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

    // Funcionalidad del menú de navegación
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
