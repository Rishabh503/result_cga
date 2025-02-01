import React, { useEffect, useState } from 'react'
import { ProfileCard } from './ProfileCard'
import facultyData from "../data/faculty.json"

export const Faculty = () => {
    const [faculties,setFaculties]=useState([])
    useEffect(()=>{
        setFaculties(facultyData)
      },[])
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
        <img src="allFaculty.jpg" className='rounded-2xl' alt="" />
      </div>


    <div className='flex sm:flex-row flex-col item-center justify-between flex-wrap col-span-2'>
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
