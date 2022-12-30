const smallCups = document.querySelectorAll(".cup-small")
const liters = document.getElementById("liters")
const remained = document.getElementById("remained")
const percentage = document.getElementById("percentage")

smallCups.forEach((cup, i) => {
  cup.addEventListener("click", () => fillCup(i))
})

function fillCup(index) {
  smallCups.forEach((cup, i) => {
    if (i <= index) {
      cup.classList.add("full")
    } else {
      cup.classList.remove("full")
    }
  })
}
