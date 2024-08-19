// Select menu icon and navbar
let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');

// Toggle the 'bx-x' class on menu icon and 'active' class on navbar
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Select all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Handle scroll event to update active navigation link and sticky header
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });

    // Select the header element
    let header = document.querySelector('header');

    // Toggle the 'sticky' class based on scroll position
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close the navbar when scrolling
    if (window.scrollY > 100) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

    menuIcon.classList.remove('bx-x');
    navbar.classList.toggle('active');
};

ScrollReveal({ 
    // reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-img', { origin: 'lright' });

const typed = new Typed ('.multiple-text', {
    strings: ['Frontend Developer!', 'Programmer', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});