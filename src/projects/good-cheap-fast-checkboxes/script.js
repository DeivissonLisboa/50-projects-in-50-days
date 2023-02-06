const toggles = document.querySelectorAll(".toggle")
const good = document.getElementById("good")
const cheap = document.getElementById("cheap")
const fast = document.getElementById("fast")

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => notAllThree(e.target))
)

function notAllThree(clicked) {
  if (good.checked && cheap.checked && fast.checked) {
    if (clicked === good) {
      fast.checked = false
    } else if (clicked === cheap) {
      good.checked = false
    } else if (clicked === fast) {
      good.checked = false
    }
  }
}
