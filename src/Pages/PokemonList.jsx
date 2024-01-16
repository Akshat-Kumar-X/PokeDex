import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokeCard from '../components/PokeCard';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        const { results } = response.data;

        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const detailsResponse = await axios.get(pokemon.url);
            return detailsResponse.data;
          })
        );

        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    }

    fetchPokemon();
  }, []);

  // Filter the list based on the search query
  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
    <div className='flex flex-col gap-5 px-6 md:px-20 py-14'>
      <div className='bg-white p-10 rounded-2xl shadow-sm '>
        <h2 className="text-[32px] font-semibold mb-0 mt-3">Search Pokémon</h2>
        <p className="text-sm mt-1 pt-0 mb-6">
          Search for Pokémon by name:
        </p>
        <form>
          <input
            type="text"
            className="block w-full p-4 text-sm text-gray-900 border focus:outline-none rounded-lg bg-zinc-50 shadow"
            placeholder="Search Pokémon..."
            value={searchQuery}
            onChange={handleSearchChange}
            required
          />
        </form>
      </div>
      <div className='flex flex-wrap gap-10 mt-7 gap-x-8 gap-y-16 w-full min-[600px]:justify-center'>
        {filteredPokemonList.map((pokemon, index) => (
          <PokeCard  
            key={index}
            name={pokemon.name}
            url={pokemon.sprites.front_default}
            stats={pokemon.stats}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default PokemonList;
