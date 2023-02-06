const imgContainer = document.getElementById("imgs")
const imgCounter = document.querySelectorAll("img").length
const prevBtn = document.getElementById("left")
const nextBtn = document.getElementById("right")

let idx = 0

function nextImage() {
  if (idx === imgCounter) {
    idx = 0
  }

  imgContainer.style.transform = `translateX(${idx * -500}px)`

  idx++
}

function prevImage() {
  if (idx < 0) {
    idx = imgCounter - 1
  }

  imgContainer.style.transform = `translateX(${idx * -500}px)`

  idx--
}

let interval = setInterval(nextImage, 2500)

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(nextImage, 2500)
}

prevBtn.addEventListener("click", () => {
  prevImage()
  resetInterval()
})
nextBtn.addEventListener("click", () => {
  nextImage()
  resetInterval()
})
