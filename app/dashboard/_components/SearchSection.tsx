import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-400 via-purple-700 to-blue-600 text-white flex flex-col justify-center items-center'>
      <h2 className='text-3xl font-bold'>Browse all templates</h2>
      <h2>What would you like to create today?</h2>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center w-[50%] p-2 border rounded bg-white my-5'>
            <Search className='text-primary' />
            <input type="text" placeholder='Search...' className='bg-transparent w-full outline-none text-black' onChange={(event)=>onSearchInput(event.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default SearchSection
