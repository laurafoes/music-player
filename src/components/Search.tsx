import axios from 'axios'
import { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import Button from './Button'

function Search() {
  return (
    <form 
        className='flex items-center w-[85%] h-auto max-w-[930px] mb-8 lg:w-[65%] bg-cardColor px-6 py-4 rounded-xl hover:bg-active'
    >
        <BiSearchAlt className='opacity-50 hover:opacity-100' size={28}/>
        <input 
            className='text-secondary pl-6 bg-transparent border-none hover:bg-transparent focus:bg-transparent hover:text-white focus:text-white focus:outline-none w-3/4' 
            placeholder='O que você quer ouvir?'
        />
        <Button type='submit' search={true}>Buscar</Button>
    </form>
  )
}

export default Search
