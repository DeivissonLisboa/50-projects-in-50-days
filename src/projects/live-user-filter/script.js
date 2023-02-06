const USER_LIST_CONTAINER = document.getElementById("result")
const FILTER_INPUT = document.getElementById("filter")
const USERS = []
const API_URL = "https://randomuser.me/api/?results="

async function getUsers(numberOfUsers = 50) {
  let response = await fetch(API_URL + numberOfUsers)
  let { results } = await response.json()

  USER_LIST_CONTAINER.innerHTML = ""

  results.forEach(({ name, location, picture }) => {
    let userCard = document.createElement("li")
    userCard.innerHTML = `
      <img
        src="${picture.large}"
        alt="${name.first}"
      />
      <div class="user-info">
        <h4>${name.first} ${name.last}</h4>
        <p>${location.city}, ${location.country}</p>
      </div>
    `
    USERS.push(userCard)
    USER_LIST_CONTAINER.append(userCard)
  })
}

getUsers()

function filterUsers(search) {
  USERS.forEach((user) => {
    if (user.innerText.toLowerCase().includes(search.toLowerCase())) {
      user.classList.remove("hide")
    } else {
      user.classList.add("hide")
    }
  })
}

FILTER_INPUT.value = ""
FILTER_INPUT.addEventListener("input", (e) => filterUsers(e.target.value))
