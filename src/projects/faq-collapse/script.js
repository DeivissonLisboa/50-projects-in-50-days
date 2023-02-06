const buttons = document.querySelectorAll(".faq-toggle")

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.part.classList.toggle("active")
  })
})
