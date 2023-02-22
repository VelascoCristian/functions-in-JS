const d = document;

export default function slider() {
    const $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $slides = d.querySelectorAll(".slider-slide");

    let count = 0;
    d.addEventListener("click", (e) => {
        if(e.target === $prevBtn) {
            e.preventDefault();
            $slides[count].classList.remove("active");
            count--;

            if (count < 0) count = $slides.length - 1;

            $slides[count].classList.add("active");
        }

        if(e.target === $nextBtn) {
            e.preventDefault();
            $slides[count].classList.remove("active");
            count++;

            if (count >= $slides.length) count = 0;

            $slides[count].classList.add("active");
        }
    });

    let sliderInterval;

function nextSlide() {
    $slides[count].classList.remove("active");
    count++;

    if (count >= $slides.length) count = 0;

    $slides[count].classList.add("active");
}

sliderInterval = setInterval(nextSlide, 4500);

$nextBtn.addEventListener("click", () => {
    clearInterval(sliderInterval);
    nextSlide();
});
}

