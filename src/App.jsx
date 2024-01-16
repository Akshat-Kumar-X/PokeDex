import React from 'react';
import PokemonList from './Pages/PokemonList';
import PokemonDetails from './Pages/PokemonDetails'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<PokemonList />} />
        <Route path='pokemon/:name' element={<PokemonDetails />} /> 
      </Routes>
    </BrowserRouter>
  );
}
