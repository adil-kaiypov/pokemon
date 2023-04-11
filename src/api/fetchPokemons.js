import axios from "axios";

export const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async(limit, offset, gen) => {
    if(gen){
      try{
        return axios.get(BASE_URL + '/generation/' + gen)
        .then(response => {
          const pokemonList = response.data.pokemon_species.slice(offset, offset + limit);
          return {
            results: pokemonList,
            count: response.data.pokemon_species.length,
          };
        })
      }catch(e){
        console.log(e);
      }
    }
    try {
        const { data } = await axios.get(BASE_URL + `/pokemon?limit=${limit}&offset=${offset}`);
        return data;
    }catch(e) {
        console.log(e);
    };
};  

export const fetchPokemonId = async (url) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

export const fetchPokemonByName = async (name) => {
  try {
    const {data} = await axios.get(BASE_URL + "/pokemon/" + name)
    return data
  } catch(e){
    console.log(e);
  }
}