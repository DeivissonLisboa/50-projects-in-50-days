const CONTAINER = document.querySelector(".container")
const COLORS = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1",
]
const SQUARES = 500

function setColor(element) {
  const COLOR = COLORS[Math.floor(Math.random() * COLORS.length)]
  element.style.backgroundColor = COLOR
  element.style.boxShadow = `0 0 2px ${COLOR}, 0 0 10px ${COLOR}`
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d"
  element.style.boxShadow = "0 0 2px #000"
}

for (let i = 0; i < SQUARES; i++) {
  const SQUARE = document.createElement("div")
  SQUARE.classList.add("square")

  SQUARE.addEventListener("mouseover", () => setColor(SQUARE))
  SQUARE.addEventListener("mouseout", () => removeColor(SQUARE))

  CONTAINER.appendChild(SQUARE)
}
