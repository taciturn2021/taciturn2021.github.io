// Intersection Observers for animations
const observers = [];

function createObserver(element, callback, options = { threshold: 0.1 }) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);
    observer.observe(element);
    observers.push(observer);
}

// Animate portfolio items
document.querySelectorAll('.portfolio-item').forEach((item, index) => {
    createObserver(item, (target) => {
        target.style.animationDelay = `${index * 0.1}s`;
        target.classList.add('animate');
    });
});

// Animate tech list items
document.querySelectorAll('.tech-list li').forEach((item, index) => {
    createObserver(item, (target) => {
        setTimeout(() => {
            target.classList.add('in-view');
        }, index * 100);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.classList.add('navbar-shrink');
    } else {
        nav.classList.remove('navbar-shrink');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Portfolio Animation
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

portfolioItems.forEach(item => {
    portfolioObserver.observe(item);
});