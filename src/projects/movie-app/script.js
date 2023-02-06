const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c"
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")

function getMovies(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showMovies(data.results)
    })
}

function getClassByRate(avg) {
  if (avg >= 8) {
    return "green"
  } else if (avg >= 5) {
    return "yellow"
  } else {
    return "red"
  }
}

function showMovies(movies) {
  main.innerHTML = ""
  movies.forEach((movie) => {
    console.log(movie)
    const { title, poster_path, vote_average, overview, release_date } = movie

    const card = document.createElement("div")
    card.classList.add("movie")
    card.innerHTML = `<img src="${IMG_PATH + poster_path}" alt="${title}"/>
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>${title}</h3>
      ${overview}<br>
      <h4>${release_date}</h4>
    </div>`

    main.appendChild(card)
  })
}

getMovies(API_URL)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const query = search.value
  if (query && query !== "") {
    getMovies(`${SEARCH_API}"${query}"`)
    search.value = ""
  } else {
    window.location.reload()
  }
})
