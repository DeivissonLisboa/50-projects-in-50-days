const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let size = 20
let isPressed = false
let color = "#000"
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
