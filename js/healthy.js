document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentyear');
    const lastModifiedSpan = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = `Last Modified: ${lastModified}`;
});
