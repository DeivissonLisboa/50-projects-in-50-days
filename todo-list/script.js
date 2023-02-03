const FORM = document.getElementById("form")
const FORM_INPUT = document.getElementById("input")
const TODOS_CONTAINER = document.getElementById("todos")
const TODOS = JSON.parse(localStorage.getItem("todos"))

function updateLocalStorage() {
  let todosLi = TODOS_CONTAINER.querySelectorAll("li")
  let todos = []

  todosLi.forEach((todo) => {
    todos.push({
      text: todo.innerText,
      completed: todo.classList.contains("completed"),
    })
  })

  localStorage.setItem("todos", JSON.stringify(todos))
}

function createTodo(todo) {
  let todoText = FORM_INPUT.value

  if (todo) {
    todoText = todo.text
  }

  if (todoText) {
    let todoLi = document.createElement("li")

    if (todo && todo.completed) {
      todoLi.classList.add("completed")
    }

    todoLi.innerText = todoText

    todoLi.addEventListener("click", () => {
      todoLi.classList.toggle("completed")
      updateLocalStorage()
    })
    todoLi.addEventListener("contextmenu", (e) => {
      e.preventDefault()
      todoLi.remove()
      updateLocalStorage()
    })

    TODOS_CONTAINER.append(todoLi)
    FORM_INPUT.value = ""
    updateLocalStorage()
  }
}

FORM.addEventListener("submit", (e) => {
  e.preventDefault()
  createTodo()
  updateLocalStorage()
})

if (TODOS) {
  TODOS.forEach((todo) => createTodo(todo))
}
