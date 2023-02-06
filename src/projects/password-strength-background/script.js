const PASSWORD_INPUT = document.getElementById("password")
const BACKGROUND = document.getElementById("background")

PASSWORD_INPUT.addEventListener("input", ({ target }) => {
  BACKGROUND.style.filter = `blur(${20 - target.value.length * 2}px)`
})
