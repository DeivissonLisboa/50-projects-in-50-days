const QUIZ_HEADER = document.querySelector(".quiz-header")
const SUBMIT_BUTTON = document.getElementById("submit")
const API_URL = "https://the-trivia-api.com/api/questions"
let questions
let currentQuention = 0
let selectAnswer

function createQuestion(question, category, answers) {
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
}

async function getQuestions() {
  let response = await fetch(API_URL)
  let data = await response.json()
  questions = data
  nextQuestion()
}

getQuestions()
