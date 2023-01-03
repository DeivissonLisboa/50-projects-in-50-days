const body = document.body
const slides = document.querySelectorAll(".slide")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

let activeSlide = 0

function setBgtoBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

setBgtoBody()

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active")
  })

  slides[activeSlide].classList.add("active")
}

leftBtn.addEventListener("click", () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setActiveSlide()
  setBgtoBody()
})
rightBtn.addEventListener("click", () => {
  activeSlide = (activeSlide + 1) % slides.length
  setActiveSlide()
  setBgtoBody()
})
