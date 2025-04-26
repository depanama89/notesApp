import { AlignJustify, Bell, List, Plus, Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='h-16 px-4 max-lg:px-2 flex items-center w-full justify-between border border-border-color-4 bg-white '>
        <div className='flex items-center gap-2'>
           <AlignJustify className="cursor-pointer w-4 h-4 md:w-6 md:h-6 "/> 
           <h1 className='font-bold text-md md:text-xl '>NoteMaster</h1>
        </div>
        <div className='hidden md:block'>
          <form className='relative'>
          <Search className='absolute top-2.5 left-5  w-5 h-5 text-text-regular '/>
            <input type="text" placeholder='Search...' className='border-2 border-border-color-4 rounded-3xl px-6 py-2 mx-3 focus:outline-none focus:border-blue-500 text-text-regular w-full md:w-80 pl-8' /> 
          </form>
        </div>
        <div className='flex items-center gap-12 py-2 px-3 cursor-pointer max-lg:gap-4'>
        <Plus className='w-4 h-4 md:w-6 md:h-6' />
        <List className='w-4 h-4 md:w-6 md:h-6'/>
        <Bell className='w-4 h-4 md:w-6 md:h-6'/>
        <img src="/profil.png" alt="profil" />
          
        </div>
    </div>
  )
}

export default Header