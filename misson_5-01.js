async function getRandomPokemon() {
  
  const randomId = Math.floor(Math.random() * 1000) + 1;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const data = await response.json();

  const nameElement = document.getElementById('name');
  const typeElement = document.getElementById('type');
  const imageElement = document.getElementById('image');
  
  nameElement.textContent = data.name;
  typeElement.textContent = data.types[0].type.name;
  imageElement.src = data.sprites.front_default;
}

getRandomPokemon();
