import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './Home'
const API = "https://pokeapi.co/api/v2/pokemon?limit=20" 

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]) 

  async function Pro() {
    try {
      const res = await axios.get(API)
      setPokemon(res.data.results) 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Pro()
  }, [])

  return (
    <div className='w-[600px] m-auto flex flex-wrap'>
      {
        pokemon.map((item, index) => (
          <Home key={index} pro={item} />
        ))
      }
    </div>
  )
}

