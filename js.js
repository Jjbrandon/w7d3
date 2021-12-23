
const search_term = document.getElementById('search_poke')
const search_button = document.getElementById('search-button')

const getPokemon = async (query) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
    const res = await fetch(url);
    if(res.status == 404){
        return
    }


    const pokemon = await res.json();

    console.log(pokemon)


    document.getElementById('update_img').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
    document.getElementById('update_name').innerHTML = pokemon.name
    document.getElementById('pokeweight').innerHTML = `${pokemon.weight} KG`
    document.getElementById('pokeheight').innerHTML = `${pokemon.height} M`
    document.getElementById('type1').innerHTML = pokemon.types[0].type.name
    document.getElementById('type2').innerHTML = pokemon.types[1].type.name
    document.getElementById('base_hp').innerHTML = pokemon.stats[0].base_stat
    document.getElementById('base_atk').innerHTML = pokemon.stats[1].base_stat
    document.getElementById('base_def').innerHTML = pokemon.stats[2].base_stat
    document.getElementById('base_spd').innerHTML = pokemon.stats[5].base_stat
    
}





search_button.addEventListener("click", () => getPokemon(search_term.value));

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
  
  function setRandomColor() {
    $("update_img").css("background-color", getRandomColor());
  }


