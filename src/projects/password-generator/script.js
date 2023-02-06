const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const generateEl = document.getElementById("generate")
const clipboardEl = document.getElementById("clipboard")

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol,
}

clipboardEl.addEventListener("click", (e) => {
  const textarea = document.createElement("textarea")
  const password = resultEl.innerText

  if (!password) return

  navigator.clipboard.writeText(password)

  const popup = document.createElement("span")
  popup.innerHTML = "Copied"
  popup.classList.add("clipboard-popup")

  document.body.appendChild(popup)
  popup.style.left = `${e.clientX}px`
  popup.style.top = `${e.clientY}px`
  setTimeout(() => popup.remove(), 1000)
})

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value
  const hasUpper = uppercaseEl.checked
  const hasLower = lowercaseEl.checked
  const hasNumber = numbersEl.checked
  const hasSymbols = symbolsEl.checked

  resultEl.innerText = generatePassword(
    length,
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbols
  )
})

function generatePassword(length, lower, upper, number, symbols) {
  let generatedPassword = ""
  const typesCount = lower + upper + number + symbols
  let typeArr = [{ lower }, { upper }, { number }, { symbols }].filter(
    (item) => Object.values(item)[0]
  )

  if (typesCount === 0) {
    return
  }

  for (let i = 0; i < length; i += typesCount) {
    typeArr = shuffleArray(typeArr)
    typeArr.forEach((type) => {
      const functionName = Object.keys(type)[0]
      generatedPassword += randomFunction[functionName]()
    })
  }

  return generatedPassword.slice(0, length)
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = "!@#$%&*()={}[]^~<>,./"
  return symbols[Math.floor(Math.random() * symbols.length)]
}
