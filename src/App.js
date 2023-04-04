import { useEffect, useState } from "react";
import { fetchPokemon, fetchPokemons } from "./api/fetchPokemons";
import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {
  const [theme, setTheme] = useState("light");
  const [pokemonList, setPokemonList] = useState([]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    fetchPokemons().then((pokeList) => {
      Promise.all(
        pokeList.results.map(async (pokemon) => {
          const data = await fetchPokemon(pokemon.url);
          return { ...pokemon, spriteUrl: data.sprites.front_default };
        })
      ).then((updatedList) => setPokemonList(updatedList));
    });
  }, []);

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <button onClick={toggleTheme}>Change Theme</button>
        <div className="pokemonList">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

