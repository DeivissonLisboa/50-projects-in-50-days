const textarea = document.querySelector(".textarea")
const tagContainer = document.querySelector(".tags")

textarea.focus()

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value)

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = ""
    }, 10)
    randomSelect()
  }
})

function createTags(input) {
  const tags = input
    .split(",")
    .filter((input) => input.trim() !== "")
    .map((tag) => tag.trim())
  tagContainer.innerHTML = ""
  tags.forEach((tag) => {
    const tagE = document.createElement("span")
    tagE.classList.add("tag")
    tagE.innerText = tag
    tagContainer.appendChild(tagE)
  })
}

function randomSelect() {
  const times = 30
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)
    setTimeout(() => {
      removeHighlightTag(randomTag)
    }, 100)
  }, 100)
  setTimeout(() => {
    clearInterval(interval)
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag")
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add("highlight")
}

function removeHighlightTag(tag) {
  tag.classList.remove("highlight")
}
