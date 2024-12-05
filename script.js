// Dark Mode / Light Mode Toggle
const toggleButton = document.getElementById('modeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<i class="ri-sun-line"></i>';
    } else {
        toggleButton.innerHTML = '<i class="ri-moon-line"></i>';
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

