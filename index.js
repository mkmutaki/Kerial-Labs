const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const closed = document.querySelector("#closed");

burger.addEventListener("click", function () {
  menu.classList.remove("hidden");
});

closed.addEventListener("click", function () {
  menu.classList.add("hidden");
});
