const nav = document.querySelector(".nav")

function activeNav() {
  if (window.scrollY - 200 > nav.offsetHeight) {
    nav.classList.add("active")
  } else {
    nav.classList.remove("active")
  }
}

window.addEventListener("scroll", activeNav)
