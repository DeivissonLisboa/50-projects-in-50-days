const smallCups = document.querySelectorAll(".cup-small")
const liters = document.getElementById("liters")
const remained = document.getElementById("remained")
const percentage = document.getElementById("percentage")

smallCups.forEach((cup, i) => {
  cup.addEventListener("click", () => fillCup(i))
})

function fillCup(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--
  }

  smallCups.forEach((cup, i) => {
    if (i <= index) {
      cup.classList.add("full")
    } else {
      cup.classList.remove("full")
    }
  })

  updateCup()
}

function updateCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length
  const cups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = "hidden"
    percentage.style.height = 0
  } else {
    percentage.style.visibility = "visible"
    const cupsPercentage = `${(fullCups * 100) / cups}%`
    percentage.style.height = cupsPercentage
    percentage.innerText = cupsPercentage
  }

  if (fullCups === cups) {
    remained.style.visibility = "hidden"
    remained.style.height = 0
  } else {
    remained.style.visibility = "visible"
    liters.innerText = `${2 - fullCups * 0.25}L`
  }
}

updateCup()
