// Johannes Kifendi - Reality Architecture Research
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 2. Update current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // 3. Add typing effect to hero subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                subtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 30);
            }
        }
        
        // Start typing after 1 second
        setTimeout(typeWriter, 1000);
    }

    // 4. Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements to animate
    document.querySelectorAll('.pillar, .update-card, .about-content, .synthesis').forEach(el => {
        observer.observe(el);
    });

    // 5. Console greeting
    console.log('%c🔬 Johannes Kifendi - Reality Architecture Research 🔬', 
        'color: #2563eb; font-size: 18px; font-weight: bold; padding: 10px 0;');
    console.log('%cConstraint-based research bridging physics and governance', 
        'color: #64748b; font-size: 14px;');
    console.log('%c→ johanneskifendi.com', 
        'color: #dc2626; font-size: 12px;');

    // 6. Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .pillar, .update-card, .about-content, .synthesis {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
           
