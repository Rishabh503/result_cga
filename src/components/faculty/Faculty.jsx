import React, { useEffect, useState } from 'react'
import facultyData from "../../data/faculty.json"
import { ProfileCard } from './FacultyCard'

export const Faculty = () => {
    const [faculties,setFaculties]=useState([])
    useEffect(()=>{
        setFaculties(facultyData)
      },[])
  return (
    <div className='flex flex-col items-center gap-6 justify-center'>
      <div>
        <img src="allFaculty.jpg" className='rounded-2xl' alt="" />
      </div>


    <div className='flex sm:flex-row flex-col  gap-8 item-center justify-center flex-wrap col-span-2'>
        {
          facultyData.map((faculty,index)=>(
            <div key={index}>
                <ProfileCard faculty={faculty}/>
            </div>
          ))
        }
       </div>
       </div>
  )
}
