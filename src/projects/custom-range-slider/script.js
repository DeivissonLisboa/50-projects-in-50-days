const RANGE = document.getElementById("range")

RANGE.addEventListener("input", ({ target }) => {
  let rangeLabel = RANGE.nextElementSibling
  rangeLabel.innerText = target.value

  let rangeWidth = parseFloat(
    getComputedStyle(target).getPropertyValue("width")
  )
  let rangeLabelWidth = parseFloat(
    getComputedStyle(rangeLabel).getPropertyValue("width")
  )
  let rangeMin = +target.min
  let rangeMax = +target.max

  rangeLabel.style.left = `${
    target.value * (rangeWidth / rangeMax) +
    rangeLabelWidth / 30 +
    mapRange(target.value, rangeMin, rangeMax, 10, -20)
  }px`
})

function mapRange(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
