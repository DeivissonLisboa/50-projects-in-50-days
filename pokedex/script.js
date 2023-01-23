const CONTAINER = document.getElementById("container")
const NUMBER_OF_POKEMON = 150
const COLORS = {
  fire: "#d14f2c",
  grass: "#46a257",
  electric: "#f9e170",
  water: "#5779ba",
  ground: "#aa7146",
  rock: "#a8a8a8",
  fairy: "#f1b2c2",
  poison: "#81719a",
  bug: "#a8e058",
  dragon: "#f9a24f",
  psychic: "#aa79ba",
  flying: "#a0d0f8",
  fighting: "#c24c2c",
  normal: "#eeebe8",
}
const API_URL = "https://pokeapi.co/api/v2/pokemon/"

function createPokemonCard({ id, name, sprites: { front_default }, types }) {
  const pokemonTypes = types.map((pokemon) => pokemon.type.name)

  const card = document.createElement("div")
  card.classList.add("pokemon")
  card.style.backgroundColor = COLORS[pokemonTypes[0]]
  card.innerHTML = `
    <div class="img-container" style="image-rendering: pixelated">
      <img
        src="${front_default}"
        alt=""
      />
    </div>
    <div class="info">
      <span class="number">#${id.toString().padStart(3, "0")}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${pokemonTypes.join(", ")}</span></small>
    </div>
  `

  CONTAINER.appendChild(card)
}

async function getPokemon(id) {
  const response = await fetch(API_URL + id)
  const data = await response.json()
  createPokemonCard(data)
}

async function getPokemonList() {
  for (let i = 1; i <= NUMBER_OF_POKEMON; i++) {
    try {
      await getPokemon(i)
    } catch (error) {
      console.log(i, error.message)
    }
  }
}

getPokemonList()
