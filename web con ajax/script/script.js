const d = document,
  $main = d.querySelector("main");
let count = 0;

const getHTML = (options) => {
  let { url, cbSucces, error } = options;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
    })
    .then((html) => {
      cbSucces(html);
    })
    .catch((err) => {
      error(`Error: ${err.message}`);
    });
};

document.addEventListener("DOMContentLoaded", (e) => {
  getHTML({
    url: "assets/home.html",
    cbSucces: (html) => ($main.innerHTML = html),
    error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
  });

  // For page with sliders
  d.addEventListener("click", (e) => {
    if (e.target.matches(".nav a")) {
      e.preventDefault();
      getHTML({
        url: e.target.href,
        cbSucces: (html) => ($main.innerHTML = html),
        error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
      });
    }

    if (
      e.target.matches(".slider-btns .prev") ||
      e.target.matches(".slider-btns .next")
    ) {
      const $nextBtn = d.querySelector(".slider-btns .next"),
        $prevBtn = d.querySelector(".slider-btns .prev"),
        $slides = d.querySelectorAll(".slider-slide");

      d.addEventListener("click", (e) => {
        if (e.target === $prevBtn) {
          e.preventDefault();
          $slides[count].classList.remove("active");
          count--;

          if (count < 0) count = $slides.length - 1;

          $slides[count].classList.add("active");
        }

        if (e.target === $nextBtn) {
          e.preventDefault();
          $slides[count].classList.remove("active");
          count++;

          if (count >= $slides.length) count = 0;

          $slides[count].classList.add("active");
        }
      });

      //As long as there is no interaction, the slider will continue to move forward
      let sliderInterval;
      function nextSlide() {
        $slides[count].classList.remove("active");
        count++;

        if (count >= $slides.length) count = 0;

        $slides[count].classList.add("active");
      }

      sliderInterval = setInterval(nextSlide, 5500);

      $nextBtn.addEventListener("click", () => {
        clearInterval(sliderInterval);
        nextSlide();
      });
    }
  });
});
