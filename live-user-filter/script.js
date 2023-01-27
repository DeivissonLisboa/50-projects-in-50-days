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
