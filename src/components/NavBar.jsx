import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ProfileCard } from './ProfileCard'
import facultyData from "../data/facultyOnFront.json"


export const NavBar = () => {

  const [faculties,setFaculties]=useState([])

  useEffect(()=>{
    setFaculties(facultyData.slice(0,4))
  },[])
  return (
    <div className='h-auto w-screen bg-[#B0BEC5 ]'>
      {/* hero section  */}
      <div className='h-auto w-full p-4 sm:p-6 sm:-mt-14 border-black flex flex-col sm:flex-row '>
        <div className='sm:w-3/5  h-auto mt-4 p-3 mx-auto content-center '>
                <div className='flex flex-col sm:flex content-center text-center sm:text-start font-bold text-[10vw] sm:text-[4vw]'>
                      <p className=''>
                        THE CHANAKAYA 
                      </p>
                      <p className=''>
                      GURU ACADEMY
                      </p>
                </div>
        <p className='text-[#B0BEC5] text-[9vw] sm:text-[3vw]'>
          Knowledge is Priority
        </p>
        </div>
            <div className='sm:w-2/5 mt-4 sm:p-4 sm:mr-12 content-center p-12'>
             <img src="cga_logo.png" alt="" />
        </div>
      </div>
      {/* about us  */}
      <div className='flex flex-col gap-4 p-4  sm:p-7 ' >
       <h1 className='font-bold text-[4vw]  '>
        About Us
       </h1>
        <p>
        The Chanakya Guru Academy, established in 2009 in Delhi, offers tuition for classes I-X and XI-XII in various streams, along with coaching for college students in accounting, law, and taxation. It also provides competitive exam preparation, crash courses, and personality development, operating in a hybrid teaching mode with dedicated teachers.
        </p>
      </div>
      {/* faculties */}
      <div className='flex flex-col gap-4 p-4  sm:p-7 ' >
       <h1 className='font-bold text-[4vw]  '>
       Faculties
       </h1>
       <div className='flex sm:flex-row flex-col gap-5  flex-wrap '>
        {
          facultyData.map((faculty,index)=>(
            <div key={index}  >
                <ProfileCard faculty={faculty}/>
            </div>
          ))
        }
       </div>
       <div className='text-end'>
       <NavLink to='/faculties'>
          <button className=''  >
              See All
          </button>
        </NavLink>
       </div>
      </div>

    </div>
  )
}

// export default NavBar