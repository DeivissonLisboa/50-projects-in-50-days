const SCREENS = document.querySelectorAll(".screen")
const INSECTS_BUTTONS = document.querySelectorAll(".choose-insect-btn")
const START_BUTTON = document.getElementById("start-btn")
const GAME_CONTAINER = document.querySelector(".game-container")
const TIME = document.getElementById("time")
const SCORE = document.getElementById("score")
const MESSAGE = document.getElementById("message")

let timerSeconds = 0
let score = 0
let selected_insect

START_BUTTON.addEventListener("click", () => {
  SCREENS[0].classList.add("up")
})

function getRandomCoords() {
  let windowWidth = window.innerWidth
  let windowHeight = window.innerHeight

  let x = Math.random() * (windowWidth - 200) + 100
  let y = Math.random() * (windowHeight - 200) + 100

  console.log(x, y)
  return { x, y }
}

function increaseScore() {
  score++

  if (score > 50) {
    MESSAGE.classList.add("visible")
  }

  SCORE.innerHTML = `Score: ${score}`
}

function addInsects() {
  setTimeout(createInsect, 1000)
  setTimeout(createInsect, 1500)
}

function catchInsect(insect) {
  insect.remove()
  increaseScore()
  addInsects()
}

function createInsect() {
  let insect = selected_insect.cloneNode(true)

  let { x, y } = getRandomCoords()
  insect.style.left = `${x}px`
  insect.style.top = `${y}px`
  insect.style.transform = `rotate(${Math.random() * 360}deg)`

  insect.addEventListener("click", () => catchInsect(insect))

  GAME_CONTAINER.append(insect)
}

function increaseTime() {
  let minutes = Math.floor(timerSeconds / 60)
  let seconds = timerSeconds % 60

  minutes = minutes.toString().padStart(2, "0")
  seconds = seconds.toString().padStart(2, "0")

  TIME.innerHTML = `Time: ${minutes}:${seconds}`
  timerSeconds++
}

function startGame() {
  setInterval(increaseTime, 1000)
}

INSECTS_BUTTONS.forEach((insect) => {
  insect.addEventListener("click", ({ target }) => {
    selected_insect = target

    SCREENS[1].classList.add("up")

    setTimeout(createInsect, 1000)
    startGame()
  })
})

MESSAGE.addEventListener("click", () => MESSAGE.remove())
