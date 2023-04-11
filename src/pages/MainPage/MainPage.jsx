  import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { fetchPokemons } from "../../api/fetchPokemons";

const MainPage = () =>{

    const [pokemonList, setPokemonList] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const [offset, setOffset] = useState(0);
    const [gen, setGen] = useState(0);
    const [limit, setLimit] = useState(50);

    useEffect(() => {
      fetchPokemons(limit, offset, gen)
      .then((pokeList) => {
        setPokemonList(pokeList.results)
        if(gen){
          setPage(1);
          setLimit(pokeList.count);
          setOffset(0);
        }
        const count = Math.ceil(pokeList.count / limit);
        setPageCount(count);
      });
    }, [offset, gen, limit]);

    const handleGenChange = (event) => {
      setGen(event.target.value);
    }
    
    pokemonList.map(pokemon => console.log(pokemon.url)) 

    const handleNext = () => {
      if (page === pageCount) return;
      setPage(prevState => prevState+=1);
      setOffset(prev => prev+= limit);
    }
  
    const handlePrev = () => {
      if (page === 1 ) return;
      setPage(prevState => prevState-=1);
      setOffset(prev => prev-= limit);
    }

    return(
        <div>
          <select value={gen} onChange={handleGenChange} defaultValue={"Select Generation"}>
            <option value=''>Select Generation</option>
            <option value={1}>Generation 1</option>
            <option value={2}>Generation 2</option>
            <option value={3}>Generation 3</option>
            <option value={4}>Generation 4</option>
            <option value={5}>Generation 5</option>
            <option value={6}>Generation 6</option>
            <option value={7}>Generation 7</option>
            <option value={8}>Generation 8</option>
          </select>
            <Pagination
            pageCount={pageCount}
            page={page}
            handleNext={handleNext}
            handlePrev={handlePrev}
            />        
            <div className="pokemonList">
            {pokemonList.map((pokemon) => (
                <Link to={`/info/${pokemon.name}`} className="link" key={pokemon.name}>
                    <PokemonCard pokemon={pokemon} gen={gen}/>    
                </Link>
            ))}
            </div>
        </div>
    )
}

export default MainPage;