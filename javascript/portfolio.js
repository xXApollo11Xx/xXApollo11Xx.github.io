'usestrict';

// Hamburger Nav
function openNav() {
    document.querySelector('#mySidenav').style.width = "250px";
    document.querySelector('.all-over-bkg').classList.add('is-visible');
}

function closeNav() {
    document.querySelector('#mySidenav').style.width = "0";
    document.querySelector('.all-over-bkg').classList.remove('is-visible');
}

document.querySelector('.openbtn').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);
console.log("hello");


// Galleries
const carouselButtons = document.querySelectorAll("[data-carousel-button]");

console.log(carouselButtons);

carouselButtons.forEach(button => {

    button.addEventListener('click', () => {

        const offset = button.dataset.carouselButton === "next" ? 1 : -1;

        console.log(button.closest("[data-carousel]").querySelector('[data-slides]'));


        const slides = button.closest("[data-carousel]")
            .querySelector('[data-slides]');


        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
}
)

// YOUTUBE
// const letter = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
// document.querySelector("h3").onmouseover = event => {
//     event.target.innerText = event.target.innerText.split("")
//         .map(letter => letters[Math.floor(Math.random() * 26)])
//         .join("");
// }