const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const decrease = document.getElementById("decrease")
const sizeDisplay = document.getElementById("size")
const increase = document.getElementById("increase")
const colorPicker = document.getElementById("color")
const clear = document.getElementById("clear")

let size = 20
let isPressed = false
let color = colorPicker.value
let x, y

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2, true)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x_1, y_1, x_2, y_2) {
  ctx.beginPath()
  ctx.moveTo(x_1, y_1)
  ctx.lineTo(x_2, y_2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

canvas.addEventListener("mousedown", (e) => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener("mouseup", (e) => {
  isPressed = false
  x = undefined
  y = undefined
})

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x_2 = e.offsetX
    const y_2 = e.offsetY

    drawCircle(x_2, y_2)
    drawLine(x, y, x_2, y_2)

    x = x_2
    y = y_2
  }
})

decrease.addEventListener("click", () => {
  if (size > 5) {
    size -= 5
  }

  sizeDisplay.innerText = size
})

increase.addEventListener("click", () => {
  if (size < 20) {
    size += 5
  }

  sizeDisplay.innerText = size
})

colorPicker.addEventListener("change", () => {
  color = colorPicker.value
})

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})
