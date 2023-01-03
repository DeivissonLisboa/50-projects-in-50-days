const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c"
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
const form = document.getElementById("form")
const search = document.getElementById("search")

function getMovies(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.results))
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
