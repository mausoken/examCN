document.addEventListener('DOMContentLoaded', function() {
    function initializeSlider(sliderElement) {
        const slides = sliderElement.querySelector('.slides');
        const slide = sliderElement.querySelectorAll('.slide');
        const prev = document.querySelectorAll('.prev');
        const next = document.querySelectorAll('.next');

        console.log('Initializing slider:', sliderElement);
        console.log('Slides element:', slides);
        console.log('Slide elements:', slide);
        console.log('Prev button:', prev);
        console.log('Next button:', next);
        
        if (!slides || slide.length === 0 || !prev || !next) {
            console.error('Some elements are missing in the slider.');
            return;
        }

        let currentIndex = 0;
        const slidesToShow = 3;
        const totalSlides = slide.length;
        const totalScrollableSlides = totalSlides - slidesToShow;

        function updateSlidePosition() {
            const width = (slide[0].clientWidth + 10); // Добавляем отступ к ширине слайда
            slides.style.transform = `translateX(-${currentIndex * width}px)`;
        }

        prev.forEach((el) => {
            el.addEventListener('click', () => {
                currentIndex = (currentIndex === 0) ? totalScrollableSlides : currentIndex - 1;
                updateSlidePosition();
            });
        })

        next.forEach((el) => {
            el.addEventListener('click', () => {
                currentIndex = (currentIndex === totalScrollableSlides) ? 0 : currentIndex + 1;
                updateSlidePosition();
            });
        })

        window.addEventListener('resize', updateSlidePosition);
    }

    // Инициализируем каждый слайдер
    document.querySelectorAll('.slider').forEach(initializeSlider);
});


let bg_menu = document.querySelector(".bg_menu")
let close_btn = document.querySelector(".close_btn")
let popyp_menu = document.querySelector(".popyp_menu")
let body = document.body

bg_menu.addEventListener("click", () => {
    popyp_menu.style.display = "block";
    body.style.height = "100vh"
    body.style.overflow = "hidden"
});

close_btn.addEventListener("click", () => {
    popyp_menu.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == popyp_menu) {
        popyp_menu.style.display = "none";
    }
});