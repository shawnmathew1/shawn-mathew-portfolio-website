const titles = ["Fullstack Developer", "Frontend Developer", "Programmer"]
const typingElement = document.getElementById("typing");
let i = 0;
let j = 0;
let currentTitle = "";
let isDeleting = false;

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');


function type() {
    currentTitle = titles[i];

    if (!isDeleting) {
        typingElement.textContent = currentTitle.substring(0, j + 1);
        j++;
        
        if (j === currentTitle.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        typingElement.textContent = currentTitle.substring(0, j - 1);
        j--;

        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % titles.length;
        }
    }

    setTimeout(type, isDeleting ? 80 : 120);

}

function showSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide+1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

type();