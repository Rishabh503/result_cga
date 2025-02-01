import React from 'react'

export const Result = () => {
  const Data = [
    { className: "Class 6", link: "link of class 6" },
    { className: "Class 7", link: "link of class 7" },
    { className: "Class 8", link: "link of class 8" },
    { className: "Class 9", link: "link of class 9" },
    { className: "Class 10", link: "link of class 10" },
    { className: "Class 11", link: "link of class 11" },
    { className: "Class 12", link: "link of class 12" },
    { className: "Class 12", link: "link of class 12" },
    { className: "Class 12", link: "link of class 12" },
  ];
  
  

  return (
    <div className='w-screen h-auto flex flex-col gap-2 m items-center'>
     <p className='font-extrabold text-center sm:-mt-24  md:-mt-2 text-[#fa2b2b] text-4xl underline p-2 font-mono'>
        🏆 RESULTS 🏆
     </p>
        <div className='h-auto flex w-screen p-1  flex-col gap-4'>
          {
            Data.map((data)=>(
              <div className='flex text-[#000000] text-lg font-semibold justify-between  px-8 p-3 rounded-2xl bg-[#bd4c13]  '>
                  <p>
                    {data.className}
                  </p>
                  <p>
                    {data.link}
                  </p>
              </div>
            ))
          }
        </div>
    </div>
  )
}
