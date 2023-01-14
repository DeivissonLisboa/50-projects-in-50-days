const loveContainer = document.querySelector(".love-container")
const likeCounter = document.getElementById("like_counter")

let counter = 0

loveContainer.addEventListener(
  "dblclick",
  ({ clientX, clientY, target: { offsetLeft, offsetTop } }) => {
    const heart = document.createElement("i")
    heart.classList.add("fas")
    heart.classList.add("fa-heart")
    heart.style.left = `${clientX - offsetLeft}px`
    heart.style.top = `${clientY - offsetTop}px`

    loveContainer.appendChild(heart)

    setTimeout(() => heart.remove(), 1000)

    counter++
    likeCounter.innerText = counter
  }
)
