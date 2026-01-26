document.addEventListener('DOMContentLoaded', () => {
    initializeInteractions();
    setupContactScroll();
});

function setupContactScroll() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('a[href="#contact"]')) {
            e.preventDefault();
            const footer = document.getElementById('contact');
            if (footer) {
                footer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

function initializeInteractions() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const projectCards = document.querySelectorAll('.project-card');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    projectCards.forEach(card => observer.observe(card));
    skillCategories.forEach(category => observer.observe(category));
}

console.log('Portfolio loaded! 🎮');
