const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messagens = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
]

function createNotification() {
  const toast = document.createElement("div")
  toast.classList.add("toast")

  toast.innerText = messagens[parseInt(Math.random() * messagens.length)]

  toasts.appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, 3000)
}

button.addEventListener("click", () => createNotification())
