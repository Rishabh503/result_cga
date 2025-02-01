import React from 'react'
import { FaFacebook, FaGooglePlay, FaInstagram, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-black mt-16 w-full    p-4 text-white'>
       <div className='flex flex-col gap-4 bottom-0  '>
        <h1>THE CHANAKYA GURU ACADEMY</h1>
        <p>ADDRESS : A-444 Main Road West Vinod Nagar Shanti Marg Delhi-110092</p>
        <p>Contact : 9654596700 , 9868882363</p>
        <p>
            The Chanakaya Guru Academy is a premier coaching institute dedicated to providing quality education across all classes and domains. 
        </p>
       </div>

       <div className='flex mt-4 gap-8 justify-between text-4xl'>
       <a href="https://youtube.com/@thechanakyaguruacademy?si=OjyvtoEGpEoVKs1A ">
       <FaYoutube/>
       </a>
       <a href="https://www.instagram.com/thechanakyaguruacademy?igsh=MXhpYjVkYmt1M2kxbA==">
       <FaInstagram/>

       </a>
      <a href="https://chat.whatsapp.com/EPpbxjExqGK5DfbnlmMNKA ">
      <FaWhatsapp />
      </a>
      <a href="https://play.google.com/store/apps/details?id=co.lynde.iyxal ">
      <FaGooglePlay/>
      </a>
       <FaFacebook />
       </div>
     </footer>
  )
}

export default Footer