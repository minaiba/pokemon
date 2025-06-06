import React from 'react'
import './index.css'


export default function Home({pro}) {
    const id = pro.url.split("/")[6]; 
  
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className='flex flex-1/2'>
            <div className='flex w-[200px] bg-blue-400 my-7 rounded-2xl'>
                <img className='pr-2' src={imgUrl} alt={pro.name}/>
                <h1 className='flex items-center'>{pro.name}</h1>
            </div>
    </div>
  )
}