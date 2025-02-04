import React from 'react'
import { NavLink } from 'react-router-dom';

export const Result = () => {
  const Data = [
    { Name: "Class 6", link: "/result/linkClass6"  , value:"Result" },
    { Name: "Class 7", link: "/result/linkClass7" , value:"Result" },
    { Name: "Class 8", link: "/result/academic" , value:"Result" },
    { Name: "Class 9", link: "/result/linkClass9" , value:"Result" },
    { Name: "Class 10", link: "/result/linkClass10" , value:"Result" },
    { Name: "Class 11", link: "/result/linkClass11" , value:"Result" },
    { Name: "Class 12 Commerce", link: "/result/linkClass12" , value:"Result" },
    { Name: "Class 12 Science", link: "/result/linkClass12chem" , value:"Result" }
   
  ];
  
  ///jab me academic ke bd kuch add kruga to ye upar ke link update hoge make them /result/academic
  return (
    <div className='w-screen h-auto flex flex-col gap-2 m items-center'>
     <p className='font-extrabold text-center sm:-mt-24  md:-mt-2 text-rose-700 text-4xl  p-2 font-mono'>
         <span className='underline'>Results</span> 
     </p>
        <div className='h-auto flex w-screen p-1 px-10 sm:px-32 flex-col gap-4'>
          {
            Data.map((data)=>(
              <div className=' text-[#000000] shadow-lg text-lg font-semibold  px-8 p-4 rounded-2xl bg-[#ffffff] border border-t-black  '>
                  <p className='font-bold'>
                    {data.Name}
                  </p>
                  <div className='flex justify-between items-center'>
                    <p >
                      Check Now
                    </p>
                  <p className='px-4 p-2 rounded-lg bg-rose-600'>
                    <NavLink to={data.link}>
                    {data.value}
                    </NavLink>
                  </p>
                  </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}
