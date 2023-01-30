const NAVS = document.querySelectorAll(".nav")
const OPEN_BUTTON = document.querySelector(".open-btn")
const CLOSE_BUTTON = document.querySelector(".close-btn")

OPEN_BUTTON.addEventListener("click", () => {
  NAVS.forEach((nav) => nav.classList.add("visible"))
})

CLOSE_BUTTON.addEventListener("click", () => {
  NAVS.forEach((nav) => nav.classList.remove("visible"))
})
