const titles = ["Fullstack Developer", "Frontend Developer", "Programmer"]
const typingElement = document.getElementById("typing");
let i = 0;
let j = 0;
let currentTitle = "";
let isDeleting = false;

let currentSlide = 0;
const slide = document.querySelectorAll('.slide');


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
type();