const CODES = document.querySelectorAll(".code")

CODES[0].focus()

CODES.forEach((code, index) => {
  code.value = ""
  code.addEventListener("keydown", ({ key }) => {
    if (key >= 0 && key <= 9) {
      code.value = ""
      setTimeout(() => CODES[index + 1].focus(), 10)
    } else if (key === "Backspace") {
      setTimeout(() => CODES[index - 1].focus(), 10)
    }
  })
})
