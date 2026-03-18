// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        localStorage.setItem('theme', '');
    } else {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
});

// Reveal on Scroll logic
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

reveals.forEach(reveal => {
    observer.observe(reveal);
});

// Cursor Glow Effect logic
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed nav
                behavior: 'smooth'
            });
        }
    });
});

// Certification Carousel Auto-Scroll (Simple version)
const certCarousel = document.querySelector('.cert-carousel');
let scrollAmount = 0;
const scrollSpeed = 0.5;

function autoScroll() {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= certCarousel.scrollWidth - certCarousel.clientWidth) {
        scrollAmount = 0;
    }
    certCarousel.scrollLeft = scrollAmount;
    requestAnimationFrame(autoScroll);
}

// Optional: Enable auto-scroll for certification logos
// autoScroll();

// Parallax effect on hero headshot
const headshot = document.querySelector('.headshot-wrapper');
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;
    
    if (headshot) {
        headshot.style.transform = `rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
    }
});
