const QUIZ_HEADER = document.querySelector(".quiz-header")
const SUBMIT_BUTTON = document.getElementById("submit")
const API_URL = "https://the-trivia-api.com/api/questions"
let questions
let currentQuention = 0
let selectAnswer
let score = 0

function createQuestion(question, category, answers) {
  QUIZ_HEADER.innerHTML = ""

  QUIZ_HEADER.innerHTML = `
    <h2 id="question">${question} <small>${category}</small></h2>    
  `

  let questionsUl = document.createElement("ul")
  answers.forEach((answer, index) => {
    questionsUl.innerHTML += `
      <li>
        <input class="answer" type="radio" name="answer" id="answer${index}" />
        <label for="answer${index}"
          >${answer}</label
        >
      </li>
    `
  })

  QUIZ_HEADER.append(questionsUl)
  QUIZ_HEADER.innerHTML += `<small class="questions-counter">${
    currentQuention + 1
  }/${questions.length}</small>`
}

function scrambleAnswers(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array
}

function nextQuestion() {
  let { question, category, correctAnswer, incorrectAnswers } =
    questions[currentQuention]

  incorrectAnswers.push(correctAnswer)

  let answers = scrambleAnswers(incorrectAnswers)

  createQuestion(question, category, answers)

  let answersLi = document.querySelectorAll(".answer")
  answersLi.forEach((li) => {
    li.addEventListener("click", () => {
      selectAnswer = li.nextElementSibling.innerText
    })
  })
}

async function getQuestions() {
  let response = await fetch(API_URL)
  let data = await response.json()
  questions = data
  nextQuestion()
}

getQuestions()

SUBMIT_BUTTON.addEventListener("click", () => {
  if (score > questions.length) {
    window.location.reload()
  }

  if (selectAnswer === questions[currentQuention].correctAnswer) {
    score++
  }

  currentQuention++

  if (currentQuention > questions.length - 1) {
    QUIZ_HEADER.innerHTML = `<h2>You answered ${score} of ${questions.length} questions correctly!</h2>`
    SUBMIT_BUTTON.innerText = "Play again"
    score = 1000
  } else {
    selectAnswer = undefined
    nextQuestion()
  }
})
