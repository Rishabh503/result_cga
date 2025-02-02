import React from 'react'

export const ProfileCard = ({faculty}) => {

  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-[#e2dfdf] shadow-lg rounded-2xl overflow-hidden p-4 mx-auto mt-6">
      
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-gray-300"
        />
      </div>

      {/* Details Section */}
      <div className="text-center mt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{faculty.name}</h2>
        <p className="text-gray-800 font-semibold text-sm sm:text-base mt-1">
          {faculty.degree}
        </p>
        <p className="text-gray-700 text-sm sm:text-base ">
          {faculty.detail}
        </p>
      </div>
    </div>
  )
}

