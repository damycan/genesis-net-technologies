// Genesis Net Technologies - Interactivity Script

/*document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navMenu = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');*/


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle'); // Change this if your button uses a different class or ID (e.g., '#hamburger')
    const navLinks = document.querySelector('.nav-links');       // Change this to match your navigation links container class/ID

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
});



    

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Dynamic Active Link Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-link');
        }
    });
});
