document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
    
    // Immediately reveal hero section
    setTimeout(() => {
        const hero = document.querySelector('.hero.scroll-reveal');
        if(hero) hero.classList.add('visible');
    }, 100);

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-sm)';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    });

    // Background Particle Animation (Antigravity Theme)
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 3 + 1; // 1px to 4px
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            
            // Antigravity colors: blue, light grey, white with opacity
            const colors = [
                'rgba(26, 115, 232, 0.3)', // Google Blue
                'rgba(66, 133, 244, 0.2)', // Light Blue
                'rgba(0, 0, 0, 0.05)',     // Subtle Dark
                'rgba(95, 99, 104, 0.1)'   // Grey
            ];
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Wrap around screen
            if (this.x > width) this.x = 0;
            else if (this.x < 0) this.x = width;
            
            if (this.y > height) this.y = 0;
            else if (this.y < 0) this.y = height;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        // Number of particles depends on screen size
        const numParticles = Math.min(Math.floor((width * height) / 15000), 100);
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
});
