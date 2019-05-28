const strategy_links = document.getElementsByClassName("box__link");
const strategy_box = document.getElementById("strategy");
const hide = document.getElementById("strategy-hide");

for (const link of strategy_links) {
  link.addEventListener("click", (e) => {
    strategy_box.classList.add("expand");
  });
}

hide.addEventListener("click", (e) => {
  strategy_box.classList.remove("expand");
});