const dots = document.getElementsByClassName("pagination__dot");
const container = document.getElementById("portfolio");
const title = document.getElementById("slide_title");

const titles_array = ["Project One", "Project Two", "Project Three", "Project Four", "Project Five"];

for (const dot of dots) {
  dot.addEventListener("click", (e) => {
    for(const el of dots) {
      el.classList.remove("active");
    }
    e.target.classList.add("active");
    container.dataset.number = e.target.dataset.number;
    title.textContent = titles_array[e.target.dataset.number-1];
  })
}