const strategy_link = document.getElementById("strategy_link");
const strategy_box = document.getElementById("strategy");
const hide = document.getElementById("strategy-hide");

strategy_link.addEventListener("click", (e) => {
  strategy_box.classList.add("expand");
})

hide.addEventListener("click", (e) => {
  strategy_box.classList.remove("expand");
})