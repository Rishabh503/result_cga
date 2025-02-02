import React, { useEffect, useState } from 'react'
import topperData from "../../data/topper.json"
import { TopperCard } from './TopperCard'
export const Topper = () => {
    const [topper,setTopper]=useState([])
    useEffect(()=>{
        setTopper(topperData)
    },[])
    return (
        <div className='sm:px-16 px-4  flex flex-col '>
            <div className='text-center'>
                <h1 className='text-[7vw] font-semibold font-mono text-[#de4444]'>
                    TOPPERS
                </h1>
            </div>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 item-center justify-center '>
            {
              topperData.map((topper,index)=>(
                <div key={index}>
                    <TopperCard topper={topper}/>
                </div>
              ))
            }
           </div>
           </div>
      )
}

