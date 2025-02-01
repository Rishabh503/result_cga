import React from 'react'

export const NavBar = () => {
  return (
    <div className='h-[52vw] w-screen bg-[#B0BEC5 ]'>
      <div className='h-[50vw] w-full -mt-2 p-4  border-black flex justify-between  '>
        <div className='w-3/5 h-full mt-4 p-3 content-center '>
        <p className='font-bold font-mono text-2xl'>
          THE <br /> 
          <p className='text-3xl'>CHANAKAYA GURU ACADEMY</p>
        </p>
        <p className='text-[#B0BEC5] font-bold'>
          Knowledge is Priority
        </p>
        </div>
        <div className='w-2/5 h-full mt-4 content-center p-2'>
        <img src="cga_logo.png" alt="" />
        </div>
      </div>
    </div>
  )
}

// export default NavBar