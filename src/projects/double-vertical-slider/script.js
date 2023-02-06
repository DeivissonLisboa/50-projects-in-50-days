const sliderContainer = document.querySelector(".slider-container")
const leftSlide = document.querySelector(".left-slide")
const rightSlide = document.querySelector(".right-slide")
const downBtn = document.querySelector(".down-button")
const upBtn = document.querySelector(".up-button")
const slidersLenght = rightSlide.querySelectorAll("div").length

let activeSlideIndex = 0

leftSlide.style.top = `-${(slidersLenght - 1) * 100}vh`

function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight

  switch (direction) {
    case "down":
      activeSlideIndex--
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidersLenght - 1
      }
      break
    case "up":
      activeSlideIndex++
      if (activeSlideIndex > slidersLenght - 1) {
        activeSlideIndex = 0
      }
      break
    default:
      break
  }

  leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`
}

downBtn.addEventListener("click", () => changeSlide("down"))
upBtn.addEventListener("click", () => changeSlide("up"))
