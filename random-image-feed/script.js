const IMAGES_SECTION = document.querySelector("section")
const UNSPLASH_URL = "https://source.unsplash.com/random/"

function getRandomThreeDigits() {
  return Math.floor(Math.random() * 100)
}

function getImage() {
  let image = document.createElement("img")
  image.classList.add("shadow-400")
  image.src = UNSPLASH_URL + getRandomThreeDigits()
  IMAGES_SECTION.append(image)
}

for (let i = 0; i < 10; i++) {
  getImage()
}
