import React from 'react'
import { NavLink } from 'react-router-dom'

export const TopBar = () => {
  return (
    <div className=' w-full h-[15vw] '>
       <div className=' flex justify-between p-4 sm:p-8 '>
       <div className='h-full sm:w-[8vw] w-[12vw]'>
            <img src="cga_logo.png"  alt="" />
        </div>
        <div className='p-2 flex gap-4 sm:text-[2vw]'>
        <NavLink to='/'>
                Home
            </NavLink>
            
            <NavLink to='/toppers'>
                Toppers
            </NavLink>
            
            <NavLink to='/faculties'>
                Faculty
            </NavLink>
            <NavLink to='/result'>
                Results
            </NavLink>
        </div>
       </div>
    </div>
  )
}
