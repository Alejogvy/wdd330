document.addEventListener('DOMContentLoaded', () => {
    // Current year update and last modification date
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

    // Navigation menu functionality
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
