import React from 'react'

export const TopperCard = ({topper}) => {

  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-[#e2dfdf] shadow-lg rounded-2xl overflow-hidden p-4 mx-auto mt-6">
      
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={topper.image}
          alt={topper.name}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-gray-300"
        />
      </div>

      {/* Details Section */}
      <div className="text-center mt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{topper.name}</h2>
        <h2>{topper.school}</h2>
       <div className='flex flex-col'>
            <div className='flex content-center justify-between align-middle text-center
            text-gray-800 font-semibold text-sm sm:text-base mt-1 '>
            <p >
                {topper.subject1}
                </p>
                <p>
                {topper.marks1}
                </p>
            </div> 
            <div className='flex content-center justify-between align-middle text-center
            text-gray-800 font-semibold text-sm sm:text-base mt-1 '>
            <p >
                {topper.subject2}
                </p>
                <p>
                {topper.marks2}
                </p>
            </div> 
            <div className='flex content-center justify-between align-middle text-center
            text-gray-800 font-semibold text-sm sm:text-base mt-1 '>
            <p >
                {topper.subject3}
                </p>
                <p>
                {topper.marks3}
                </p>
            </div> 
            
       </div>
      </div>
    </div>
  )
}

