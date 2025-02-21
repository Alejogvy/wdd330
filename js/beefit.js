document.addEventListener('DOMContentLoaded', () => {
    // Update current year and last modified date
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

    // Hamburger Menu Functionality
    const hamburger = document.getElementById('hamburger');
    const navlinks = document.querySelector('nav ul'); // Use querySelector to select the 'ul' inside 'nav'

    if (hamburger && navlinks) {
        hamburger.addEventListener('click', () => {
            console.log("Hamburger button clicked");
            navlinks.classList.toggle('show');
            console.log("Current menu classes:", navlinks.classList);
        });
    } else {
        console.error("Error: No #hamburger or <ul> elements found inside <nav>");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("signup-form").addEventListener("submit", function (event) {
        event.preventDefault(); 

        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const gender = document.getElementById("gender").value;
        const address = document.getElementById("address").value;
        const age = document.getElementById("age").value;
        const plan = document.getElementById("plan").value;
        const message = document.getElementById("message").value;

        
        const userData = { name, email, phone, gender, address, age, plan, message };
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        
        alert("Thank you for signing up!");
        window.location.href = "thank-you.html"; 
    });
});
