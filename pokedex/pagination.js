const PAGINATION = document.querySelector(".pagination")
const PREVIOUS_BUTTON = document.querySelector(".previous-page")
const NEXT_BUTTON = document.querySelector(".next-page")
let currentPage = localStorage.getItem("currentPage") || 1

const TOTAL_PAGES = Math.ceil(1279 / POKEMON_PER_PAGE)

function updatePagination() {
  if (currentPage <= 0) {
    currentPage = 1
  } else if (currentPage > TOTAL_PAGES) {
    currentPage = TOTAL_PAGES
  }

  let pageElements = document.querySelectorAll(".page")

  pageElements.forEach((page) => {
    page.classList.remove("active")
  })

  pageElements[currentPage - 1].classList.add("active")
  localStorage.setItem("currentPage", currentPage)
}

function createPagination() {
  for (let i = 1; i <= TOTAL_PAGES; i++) {
    let pageElement = document.createElement("li")
    pageElement.classList.add("page")
    pageElement.innerHTML = i

    if (currentPage == i) pageElement.classList.add("active")

    pageElement.addEventListener("click", () => {
      currentPage = i
      updatePagination()
    })

    PAGINATION.appendChild(pageElement)
  }
}

createPagination()

PREVIOUS_BUTTON.addEventListener("click", () => {
  currentPage--
  updatePagination()
})

NEXT_BUTTON.addEventListener("click", () => {
  currentPage++
  updatePagination()
})
