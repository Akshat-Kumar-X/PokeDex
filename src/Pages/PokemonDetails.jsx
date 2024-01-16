import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaHeartbeat } from "react-icons/fa";
import { IoShieldHalf } from "react-icons/io5";
import { GiPointySword } from "react-icons/gi";
import { FaFistRaised } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { GiCheckedShield } from "react-icons/gi";

export default function PokemonDetails() {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        setLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemonDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
        setLoading(false);
      }
    }

    fetchPokemonDetails();
  }, [name]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!pokemonDetails) {
    return <p>Pokémon details not found.</p>;
  }

  return (
    <div className='flex flex-col gap-5 px-6 md:px-20 py-14 items-center'>
    <div className="flex flex-col gap-16 flex-wrap px-6 md:px-16 py-24 max-w-7xl">

      <div className="flex gap-28 lg:flex-row flex-col">
        <div className="flex-grow xl:max-w-[50%] max-w-full py-16  border bg-white shadow-lg rounded-[17px]">
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
            className="mx-auto h-[200px] w-[200px] lg:mx-24"
          />
        </div>

        <div className="flex flex-col  items-center ">
          <div className="flex justify-between items-start gap-5 flex-wrap ">
            <div className="flex flex-col gap-5 ">
              <div className='flex flex-col gap-2 '>
              <p className="text-4xl font-semibold mb-3">
                {pokemonDetails.name}
              </p>
              <div className='flex flex-row justify-center items-center'>
                {/* Display Pokemon stats if available */}
                {pokemonDetails.stats && pokemonDetails.stats.length > 0 ? (
                <div className='flex flex-col justify-center items-start'>
                    {pokemonDetails.stats.map((stat, index) => (
                    <div key={index} className='flex flex-row gap-1 justify-center items-center text-xl font-mono font-bold my-1'>
                        {stat.stat.name === 'hp' ? (<div className='flex gap-3 items-center justify-center mr-3'>
                            <FaHeartbeat className='text-red-500' /> Health⇢ 
                            </div>) : stat.stat.name === 'defense' ? (<div className='flex gap-3 items-center justify-center mr-3'>
                            <IoShieldHalf className=' text-yellow-600' /> Defense⇢
                            </div>) : stat.stat.name === 'attack' ? (<div className='flex gap-3 items-center justify-center mr-3'>
                            <GiPointySword className=' text-blue-600' /> Attack⇢
                            </div>) : stat.stat.name === 'special-attack' ? (<div className='flex gap-3 items-center justify-center mr-3 text-red-500'>
                            <FaFistRaised className=' text-emerald-500'  /> Special Attack⇢
                            </div>) : stat.stat.name === 'special-defense' ? (<div className='flex gap-3 items-center justify-center mr-3  text-red-500'>
                            <GiCheckedShield  className=' text-yellow-600'  /> Special Defense⇢
                            </div>) : stat.stat.name === 'speed' ? (<div className='flex gap-3 items-center justify-center mr-3'>
                            <MdSpeed className=' text-blue-600'  /> Speed⇢
                            </div>): <>{stat.stat.name}</>}   
                          {stat.base_stat}
                    </div>
                    ))}
                </div>
                ) : (
                <p>No stats available</p>
                )}
              </div>
              </div>
              <a href={`https://www.pokemon.com/us/pokedex/${pokemonDetails.name}`} target="_blank">
                <button className='py-2 px-6 rounded-lg bg-zinc-800 text-white font-semibold hover:bg-zinc-600 duration-200 '>
                    More Details →
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
