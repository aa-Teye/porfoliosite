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
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        // Darken navbar on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top visibility
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Active nav link based on current section
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // Back to Top click
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinksContainer.classList.toggle('open');
    });

    // Close mobile menu on nav link click
    navLinksContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinksContainer.classList.remove('open');
        });
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
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
            this.color = 'rgba(77, 144, 254, 0.4)';
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

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
        const numParticles = Math.min(Math.floor((width * height) / 10000), 120);
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Draw connecting lines
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(77, 144, 254, ${0.15 - distance/800})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    // Chatbot Logic
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotBody = document.getElementById('chatbot-body');
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');

    function getBotResponse(input) {
        if (typeof botKnowledge === 'undefined') {
            return "I'm having trouble connecting to my reference engine right now!";
        }

        const text = input.toLowerCase();
        const inputWords = text.split(/[\s,?.!]+/).filter(w => w.length > 0);

        // 1. Check knowledge base topics first
        let bestMatch = null;
        let maxMatches = 0;

        for (const topic of botKnowledge.topics) {
            let matchCount = 0;
            
            for (const keyword of topic.keywords) {
                if (keyword.includes(' ')) {
                    // For multi-word keywords (like "cpg collect"), check full text
                    if (text.includes(keyword)) matchCount += 2;
                } else {
                    // For single words, check if any word matches or starts with the keyword 
                    // (this handles plurals like "skill" -> "skills" without substring bugs)
                    if (inputWords.some(word => word === keyword || word.startsWith(keyword))) {
                        matchCount++;
                    }
                }
            }
            if (matchCount > maxMatches) {
                maxMatches = matchCount;
                bestMatch = topic.response;
            }
        }

        // If we found a topic match, return it
        if (bestMatch) return bestMatch;

        // 2. Check greetings ONLY if no topic was matched
        // We use inputWords.includes to avoid matching "his" as "hi"
        if (botKnowledge.greetings.some(g => inputWords.includes(g))) {
            return botKnowledge.greetings_response;
        }

        // 3. Return default fallback
        return botKnowledge.default_response;
    }

    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            chatbotBody.classList.toggle('open');
            if (chatbotBody.classList.contains('open')) {
                chatbotIcon.classList.remove('fa-chevron-up');
                chatbotIcon.classList.add('fa-chevron-down');
            } else {
                chatbotIcon.classList.remove('fa-chevron-down');
                chatbotIcon.classList.add('fa-chevron-up');
            }
        });

        function appendMessage(text, isUser = false) {
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('message');
            msgDiv.classList.add(isUser ? 'user-message' : 'bot-message');
            
            // Format links if present
            if (!isUser && text.includes('http')) {
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                msgDiv.innerHTML = text.replace(urlRegex, '<a href="$1" target="_blank" style="color: var(--accent-blue); text-decoration: underline;">$1</a>');
            } else {
                msgDiv.textContent = text;
            }
            
            chatMessages.appendChild(msgDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function handleChat() {
            const text = chatInput.value.trim();
            if (text) {
                appendMessage(text, true);
                chatInput.value = '';
                
                // Bot reply
                setTimeout(() => {
                    const response = getBotResponse(text);
                    appendMessage(response);
                }, 600);
            }
        }

        chatSend.addEventListener('click', handleChat);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChat();
        });
    }
});
