const MAGIC_BUTTON = document.getElementById("btn")
const BOXES_CONTAINER = document.getElementById("boxes")

MAGIC_BUTTON.addEventListener("click", () => {
  BOXES_CONTAINER.classList.toggle("big")
})

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    let box = `<div class="box" style="background-position:${-j * 125}px ${
      -i * 125
    }px"></div>`
    BOXES_CONTAINER.innerHTML += box
  }
}
