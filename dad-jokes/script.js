const jokeEl = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

function getJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  }
  fetch("https://icanhazdadjoke.com", config)
    .then((response) => response.json())
    .then((data) => {
      jokeEl.innerText = data.joke
    })
}

getJoke()

jokeBtn.addEventListener("click", getJoke)
