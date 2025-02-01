import React from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-black mt-16 w-full h-auto p-4 text-white'>
       <div className='flex flex-col gap-4'>
        <h1>THE CHANAKYA GURU ACADEMY</h1>
        <p>ADDRESS : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, eius?</p>
        <p>Contact : 9654596700</p>
       </div>

       <div className='flex mt-4 gap-8 justify-between text-4xl'>
       <FaYoutube />
       <FaInstagram/>
       <FaWhatsapp />
       <FaTelegram/>
       <FaFacebook />
       </div>
     </div>
  )
}

export default Footer