import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async(limit, offset) => {
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