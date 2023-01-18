const addBtn = document.getElementById("add")
const notes = JSON.parse(localStorage.getItem("notes"))

if (notes) {
  notes.forEach((note) => addNote(note))
}

addBtn.addEventListener("click", () => addNote())

function addNote(text = "") {
  const note = document.createElement("div")
  note.classList.add("note")

  note.innerHTML = `
  <div class="tools">
    <button class="edit">
      <i class="fas fa-edit"></i>
    </button>
    <button class="delete">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>

  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>
  `
  const editBtn = note.querySelector(".edit")
  const deleteBtn = note.querySelector(".delete")
  const main = note.querySelector(".main")
  const textArea = note.querySelector("textarea")

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden")
    textArea.classList.toggle("hidden")
  })

  deleteBtn.addEventListener("click", () => {
    note.remove()
    saveNotes()
  })

  main.innerHTML = DOMPurify.sanitize(marked.parse(text))
  textArea.value = text

  textArea.addEventListener("input", (e) => {
    const { value } = e.target
    main.innerHTML = DOMPurify.sanitize(marked.parse(value))
    saveNotes()
  })

  document.body.appendChild(note)
}

function saveNotes() {
  const notesText = document.querySelectorAll("textarea")
  const notes = []

  notesText.forEach((note) => notes.push(note.value))

  localStorage.setItem("notes", JSON.stringify(notes))
}
