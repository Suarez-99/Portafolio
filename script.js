// Animación de aparición al hacer scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Brillo dinámico del header
const title = document.querySelector('header h1');
setInterval(() => {
    title.style.textShadow = '0 0 15px #00ffff, 0 0 35px #00ffff';
    setTimeout(() => {
        title.style.textShadow = '0 0 10px #00ffff, 0 0 20px #00ffff';
    }, 1000);
}, 3000);
