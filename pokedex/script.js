const CONTAINER = document.getElementById("container")
const NUMBER_OF_POKEMON = 150
const COLORS = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
}
const API_URL = "https://pokeapi.co/api/v2/pokemon/"

function createPokemonCard({ id, name, sprites: { front_default }, types }) {
  const type = types[0].type.name

  const card = document.createElement("div")
  card.classList.add("pokemon")
  card.style.backgroundColor = COLORS[type]
  card.innerHTML = `
  <div class="img-container" style="image-rendering: pixelated">
    <img
      src="${front_default}"
      alt=""
    />
  </div>
  <div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>`

  CONTAINER.appendChild(card)
}

async function getPokemon(id) {
  const response = await fetch(API_URL + id)
  const data = await response.json()
  createPokemonCard(data)
}

async function getPokemonList() {
  for (let i = 1; i <= NUMBER_OF_POKEMON; i++) {
    await getPokemon(i)
  }
}

getPokemonList()
