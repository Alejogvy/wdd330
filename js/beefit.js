document.addEventListener('DOMContentLoaded', () => {
    // Update current year and last modified date
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Última modificación: ${document.lastModified}`;

    // Hamburger Menu Functionality
    const hamburger = document.getElementById('hamburger');
    const navlinks = document.getElementById('navlinks'); // Ensure the ID matches the HTML

    if (hamburger && navlinks) {
        hamburger.addEventListener('click', () => {
            console.log("Botón de hamburguesa clickeado");
            navlinks.classList.toggle('show');
            console.log("Clases actuales del menú:", navlinks.classList);
        });
    } else {
        console.error("Error: No se encontraron elementos #hamburger o #navlinks");
    }
});
