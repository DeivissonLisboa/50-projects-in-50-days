const RATINGS = document.querySelectorAll(".rating")
const SEND_BUTTON = document.getElementById("send")
const PANEL_CONTAINER = document.getElementById("panel")
const RATINGS_CONTAINER = document.querySelector(".ratings-container")
let selectedRating = "Satisfied"

RATINGS_CONTAINER.addEventListener("click", ({ target }) => {
  if (target.parentNode.classList.contains("rating")) {
    RATINGS.forEach((rating) => rating.classList.remove("active"))
    target.parentNode.classList.add("active")
    selectedRating = target.nextElementSibling.innerText
    console.log(selectedRating)
  }
})

SEND_BUTTON.addEventListener("click", (e) => {
  PANEL_CONTAINER.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <strong><br>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our costumer support</p>
  `
})
