const items = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function showNextItem() {
    items[currentItem].classList.remove('active');
    currentItem = (currentItem + 1) % items.length;
    items[currentItem].classList.add('active');
}

setInterval(showNextItem, 3000);

const sections = document.querySelectorAll('section');

function revealSection() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSection);
