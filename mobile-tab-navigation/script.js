const CONTENTS = document.querySelectorAll(".content")
const NAV_BUTTONS = document.querySelectorAll("nav ul li")

NAV_BUTTONS.forEach((button, index) => {
  button.addEventListener("click", () => {
    CONTENTS.forEach((content) => content.classList.remove("show"))
    NAV_BUTTONS.forEach((button) => button.classList.remove("active"))

    CONTENTS[index].classList.add("show")
    button.classList.add("active")
  })
})
