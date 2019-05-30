const dots = document.getElementsByClassName("pagination__dot");
const dots2 = document.getElementsByClassName("pagination__dot2");
const title = document.getElementById("slide_title");
const details_title = document.getElementById("details-title");
const images = document.getElementsByClassName("portfolio__slide");
const show_details = document.getElementById("project-details-btn");
const project_details = document.getElementById("project-details");
const hide_details = document.getElementById("project-details-hide");
const details_images = document.getElementsByClassName("details__image");
const show_slideshow = document.getElementById("project-slideshow-btn");
const slideshow_container = document.getElementById("slideshow");
const hide_slideshow = document.getElementById("hide-slideshow");
const details_slideshow = document.getElementById("hide-details-show-slideshow");
const slideshow_images = document.getElementsByClassName("slideshow__image");
const btn_prev = document.getElementById("slideshow__btn--previous");
const btn_next = document.getElementById("slideshow__btn--next");

const titles_array = ["Project One", "Project Two", "Project Three", "Project Four", "Project Five"];
let current_slide = 0;
let current_in_slideshow = 0;
for (const dot of dots) {
  dot.addEventListener("click", (e) => {
    dots[current_slide].classList.remove("active");
    images[current_slide].classList.remove("slide__active");
    details_images[current_slide].classList.remove("details__image--active");
    e.target.classList.add("active");
    current_slide = e.target.dataset.number;
    images[current_slide].classList.add("slide__active");
    details_images[current_slide].classList.add("details__image--active");
    title.textContent = titles_array[current_slide];
    details_title.textContent = titles_array[current_slide];
  })
}

for (const dot of dots2) {
  dot.addEventListener("click", (e) => {
    dots2[current_in_slideshow].classList.remove("active");
    slideshow_images[current_in_slideshow].classList.remove("slideshow__image--active");
    current_in_slideshow = e.target.dataset.number;
    slideshow_images[current_in_slideshow].classList.add("slideshow__image--active");
    e.target.classList.add("active");
  });
}

show_details.addEventListener("click", () => {
  project_details.classList.add("expand");
})

hide_details.addEventListener("click", () => {
  project_details.classList.remove("expand");
})

show_slideshow.addEventListener("click", () => {
  slideshow_container.classList.add("expand");
})

hide_slideshow.addEventListener("click", () => {
  slideshow_container.classList.remove("expand");
})

details_slideshow.addEventListener("click", () => {
  project_details.classList.remove("expand");
  slideshow_container.classList.add("expand");
})

btn_prev.addEventListener("click", () => {
  if(current_in_slideshow > 0) {
    dots2[current_in_slideshow].classList.remove("active");
    slideshow_images[current_in_slideshow].classList.remove("slideshow__image--active");
    current_in_slideshow--;
    slideshow_images[current_in_slideshow].classList.add("slideshow__image--active");
    dots2[current_in_slideshow].classList.add("active");
  }
})

btn_next.addEventListener("click", () => {
  if(current_in_slideshow < 4) {
    dots2[current_in_slideshow].classList.remove("active");
    slideshow_images[current_in_slideshow].classList.remove("slideshow__image--active");
    current_in_slideshow++;
    slideshow_images[current_in_slideshow].classList.add("slideshow__image--active");
    dots2[current_in_slideshow].classList.add("active");
  }
})