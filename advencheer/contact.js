// Contact Page JavaScript with GSAP Parallax Animation

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Parallax Animation Timeline
gsap.timeline({
    scrollTrigger: {
        trigger: '.scrollDist',
        start: '0 0',
        end: '100% 100%',
        scrub: 1
    }
})
.fromTo('.sky', {y: 0}, {y: -200}, 0)
.fromTo('.cloud1', {y: 100}, {y: -800}, 0)
.fromTo('.cloud2', {y: -150}, {y: -500}, 0)
.fromTo('.cloud3', {y: -50}, {y: -650}, 0)
.fromTo('.mountBg', {y: -10}, {y: -100}, 0)
.fromTo('.mountMg', {y: -30}, {y: -250}, 0)
.fromTo('.mountFg', {y: -50}, {y: -600}, 0);

// Arrow Button Interactions
const arrowBtn = document.querySelector('#arrow-btn');

if (arrowBtn) {
    arrowBtn.addEventListener('mouseenter', () => {
        gsap.to('.arrow', {y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto'});
    });

    arrowBtn.addEventListener('mouseleave', () => {
        gsap.to('.arrow', {y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto'});
    });

    arrowBtn.addEventListener('click', () => {
        const contactSection = document.querySelector('.contact-section');
        if (contactSection) {
            gsap.to(window, {
                scrollTo: contactSection.offsetTop,
                duration: 1.5,
                ease: 'power1.inOut'
            });
        }
    });
}

// Header scroll behavior (reuse from main.js)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const parallaxHero = document.querySelector('.parallax-hero');
    
    if (header && parallaxHero) {
        const heroHeight = parallaxHero.offsetHeight;
        
        if (window.scrollY >= heroHeight - 100) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.contact-method, .info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});