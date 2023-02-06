const APIURL = "https://api.github.com/users/"
const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")

function createUserCard(user) {
  const { avatar_url, name, bio, followers, following, public_repos } = user

  const cardHTML = `
  <div class="card">
    <div>
      <img
        src="${avatar_url}"
        alt=""
        class="avatar"
      />
    </div>
    <div class="user-info">
      <h2>${name}</h2>
      <p>${bio}</p>

      <ul>
        <li>${followers} <strong>Followers</strong></li>
        <li>${following} <strong>Following</strong></li>
        <li>${public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>`

  main.innerHTML = cardHTML
}

function createErrorCard(msg) {
  const cardHTML = `
  <div class="card">
    <h1>${msg}</h1>
  </div>`

  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos")

  repos.slice(0, 5).forEach(({ html_url, name }) => {
    const repoEl = document.createElement("a")
    repoEl.classList.add("repo")
    repoEl.href = html_url
    repoEl.target = "_blank"
    repoEl.innerText = name

    reposEl.appendChild(repoEl)
  })
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + "/repos?sort=created")

    addReposToCard(data)
  } catch (error) {
    createErrorCard(error.message)
  }
}

async function getUser(username) {
  try {
    const { data } = await axios.get(APIURL + username)

    createUserCard(data)
    getRepos(username)
  } catch (error) {
    createErrorCard("No profile for this user")
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const user = search.value

  if (user) {
    getUser(user)
    search.value = ""
  }
})
