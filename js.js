const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

document.getElementById('leer-mas-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Evita que el enlace haga un salto brusco
    document.getElementById('info').scrollIntoView({
        behavior: 'smooth'
    });
});

function updateCarousel() {
    const width = images[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);

// ✅ AutoPlay: cambia de imagen cada 5 segundos
setInterval(() => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}, 5000); // 5000 milisegundos = 5 segundos