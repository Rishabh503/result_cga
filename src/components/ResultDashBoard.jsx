import React from 'react'
import { NavLink } from 'react-router-dom'

export const ResultDashBoard = ({value}) => {
  console.log(value)
  return (
    <div className='w-screen h-auto flex flex-col gap-2 m items-center'>
    <p className='font-extrabold text-center sm:-mt-24  md:-mt-2 text-rose-700 text-4xl  p-2 font-mono'>
        <span className='underline'>Scores</span> 
    </p>
       <div className='h-auto flex w-screen p-1 px-10 sm:px-32 flex-col gap-4'>
         {
           value.map((data)=>(
             <div className=' text-[#000000] shadow-lg text-lg font-semibold  px-8 p-4 rounded-2xl bg-[#ffffff] border border-t-black  '>
                 <p className='font-bold'>
                   {data.name}
                 </p>
                <div className='flex justify-between'>
                    <div className=' flex flex-col justify-between items-start'>
                      <p >
                        {data.subject1}
                      </p>
                    <p>
                      {data.marks1}
                    </p>
                    </div>
                    <div className=' flex flex-col justify-between items-start'>
                      <p >
                        {data.subject1}
                      </p>
                    <p>
                      {data.marks1}
                    </p>
                    </div>
                    <div className=' flex flex-col justify-between items-start'>
                      <p >
                        {data.subject1}
                      </p>
                    <p>
                      {data.marks1}
                    </p>
                    </div>
                    <div className=' flex flex-col justify-between items-start'>
                      <p >
                        {data.subject1}
                      </p>
                    <p>
                      {data.marks1}
                    </p>
                    </div>
                    <div className=' flex flex-col justify-between items-start'>
                      <p >
                        {data.subject1}
                      </p>
                    <p>
                      {data.marks1}
                    </p>
                    </div>
                </div>
             </div>
           ))
         }
       </div>
   </div>
  )
}
