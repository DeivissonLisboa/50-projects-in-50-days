const hourDiv = document.querySelector(".hour")
const minuteDiv = document.querySelector(".minute")
const secondDiv = document.querySelector(".second")
const timeDiv = document.querySelector(".time")
const dateDiv = document.querySelector(".date")
const toggleBtn = document.querySelector(".toggle")

toggleBtn.addEventListener("click", (e) => {
  const btn = e.target

  if (btn.innerHTML === "Dark mode") {
    btn.innerHTML = "Light mode"
  } else {
    btn.innerHTML = "Dark mode"
  }

  document.querySelector("html").classList.toggle("dark")
})
