import React from 'react'
import { NavLink } from 'react-router-dom';

export const Result = () => {
  const Data = [
    { Name: "Class 6", link: "/result/linkClass6"  , value:"Result" },
    { Name: "Class 7", link: "/result/linkClass7" , value:"Result" },
    { Name: "Class 8", link: "/result/linkClass8" , value:"Result" },
    { Name: "Class 9", link: "/result/linkClass9" , value:"Result" },
    { Name: "Class 10", link: "/result/linkClass10" , value:"Result" },
    { Name: "Class 11", link: "/result/linkClass11" , value:"Result" },
    { Name: "Class 12", link: "/result/linkClass12" , value:"Result" },
   
  ];
  
  

  return (
    <div className='w-screen h-auto flex flex-col gap-2 m items-center'>
     <p className='font-extrabold text-center sm:-mt-24  md:-mt-2 text-[#fa2b2b] text-4xl  p-2 font-mono'>
        🏆 <span className='underline'>Results</span> 🏆
     </p>
        <div className='h-auto flex w-screen p-1  flex-col gap-4'>
          {
            Data.map((data)=>(
              <div className='flex text-[#000000] text-lg font-semibold justify-between  px-8 p-3 rounded-2xl bg-[#938a86]  '>
                  <p>
                    {data.Name}
                  </p>
                  <p>
                    <NavLink to={data.link}>
                    {data.value}
                    </NavLink>
                  </p>
              </div>
            ))
          }
        </div>
    </div>
  )
}
