const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll(".button");

let imageIndex = 1;
let interval = setInterval(autoSlide, 2000);

function autoSlide() {
    imageIndex++;
    if (imageIndex > images.length) imageIndex = 1;
    slideImage(imageIndex);
};

function slideImage(imageIndex) {
    console.log(imageIndex);
    carousel.style.transform = `translate(-${(imageIndex - 1) * 100}%)`;
};

wrapper.onmouseover = () => clearInterval(interval);
wrapper.onmouseleave = () => interval = setInterval(autoSlide, 2000);

buttons.forEach((button) => {
    button.onclick = (e) => {
        clearInterval(interval);
        imageIndex += e.target.id === "next" ? 1 : -1;
        if (imageIndex > images.length) imageIndex = 1;
        if (imageIndex < 1) imageIndex = images.length;
        slideImage(imageIndex);
    }
});
