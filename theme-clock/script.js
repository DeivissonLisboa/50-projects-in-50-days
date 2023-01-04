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

function map(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function setTime() {
  const time = new Date()
  const hour = time.getHours()
  const clockHour = hour % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  hourDiv.style.transform = `translate(-50%, -100%) rotate(${map(
    clockHour,
    0,
    11,
    0,
    360
  )}deg)`
  minuteDiv.style.transform = `translate(-50%, -100%) rotate(${map(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`
  secondDiv.style.transform = `translate(-50%, -100%) rotate(${map(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`

  timeDiv.innerHTML = `${hour}:${minutes < 10 ? "0" + minutes : minutes}`

  const date = time.toLocaleDateString([], {
    weekday: "long",
    month: "long",
  })
  dateDiv.innerText = date.split(" ").join(", ") + " "

  dateDiv.innerHTML += `<span class="circle">${time.getDay() + 1}</span>`
}

setTime()

setInterval(setTime, 1000)
