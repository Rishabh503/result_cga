import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const [active ,setActive]=useState(true)
  return (
    <div className='h-[54vw] w-screen bg-[#B0BEC5 ]'>
      <div className='h-[50vw] w-full -mt-2 p-4  border-black flex justify-between  '>
        <div className='w-3/5 h-full mt-4 p-3 content-center '>
        <p className='font-bold  text-[5vw]'>
          THE <br /> 
          CHANAKAYA GURU ACADEMY
        </p>
        <p className='text-[#B0BEC5] text-[4vw] font-bold'>
          Knowledge is Priority
        </p>
        {/* <button  className='bg-red-300 p-2 my-4 rounded-lg font-sm' onClick={()=>{setActive(!active)}} >
            <NavLink to='/result'>
              RESULTS
            </NavLink>
        </button> */}
        </div>
            <div className='w-2/5 h-full mt-4 m:p-10 content-center p-2'>
             <img src="cga_logo.png" alt="" />
        </div>
      </div>
    </div>
  )
}

// export default NavBar