import React from 'react'
const Navbar=()=> {
  return (
    <div className='w-full h-14 bg-white flex justify-between items-center px-12 '>
        {/* right items */}
      <div className='w-52 h-10 rounded-full flex justify-center  gap-4 items-center bg-slate-100'>
        <input type="search" className='inpt-search bg-slate-100 w-36 border-none outline-none' placeholder='جستجو'/>
        <i className='fa fa-search text-zinc-400'></i>
      </div>
      {/* left items */}
      <div className='flex gap-6'>
        <i className='fa fa-bell-o text-zinc-500 font-bold text-2xl'></i>
        <i className='fa fa-user-circle text-zinc-500 font-bold text-2xl'></i>
        <i class='bx bx-customize text-zinc-500 text-2xl font-bold'></i>

      </div>
    </div>
  )
}

export default Navbar;
