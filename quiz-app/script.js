const QUIZ_HEADER = document.querySelector(".quiz-header")
const API_URL = "https://the-trivia-api.com/api/questions"
let selectAnswer

function createQuestion(questionTitle, questionAnswers) {
  QUIZ_HEADER.innerHTML = `<h2 id="question">${questionTitle}</h2>`

  let questionsUl = document.createElement("ul")
  questionAnswers.forEach((answer, index) => {
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
