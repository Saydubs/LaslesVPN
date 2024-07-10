const slides = document.querySelectorAll(".feedbacksSlider .slide");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length >0){
        slides[slideIndex].classList.add("displaySlide");
        //intervalId = setInterval(nextSlide, 5000);
    }

}
/* für zukunftige Updates
function handleResize() {
    if (window.innerWidth <= 768) {
        initializeMobileSlider();
    } else {
        initializeDesktopSlider();
    }
}

function initializeDesktopSlider() {
    clearInterval(intervalId);
    showSlides(slideIndex, 3); // Показываем 3 слайда на десктопе
}

function initializeMobileSlider() {
    clearInterval(intervalId);
    showSlides(slideIndex, 1); // Показываем 1 слайд на мобильном
}

*/
function showSlide(index){
    
    if(index >= slides.length){
        slides[0].classList.remove("displayNone");
        slides[0].classList.add("slide");
        slideIndex = 0;
    }
    else if(index == slides.length-1){
        slides[0].classList.add("displayNone");
        slideIndex = slides.length -1;
    }

    else if(index <0){
        slides[0].classList.add("displayNone");
        slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);

}