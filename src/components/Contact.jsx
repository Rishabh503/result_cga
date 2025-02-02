import React, { useState } from 'react'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";

import emailjs from 'emailjs-com';


export const Contact = () => {
    // const contact="9654596700"
    const [formData,setFormData]=useState({
        name:"",contact:"",email:"",subject:"",message:""
    })

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.send(
            "service_dt0wm0g",
            "template_pwg94dg",
            formData,
            'nx8l8Db3kmBQLw3R7'
          ).then(
            (response) => {
              alert('Email sent successfully!');
            },
            (error) => {
              alert('Failed to send email.');
            }
          );

          console.log("kuch to hua")

    }
  return (
    <section className='w-full  h-auto min-h-screen bg-red-50'>
        {/* top portion  */}
        <div className=' bg-red-600 p-12 sm:p-20 flex flex-col items-center justify-center'>
            <h1 className='font-[poppins] text-white text-[32px] sm:text-[48px]'>
                Get in Touch
            </h1>
            <h3 className='text-gray-300 text-[18px] sm:text[16px]'>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </h3>
        </div>
        {/* form section  */}
        <div className=' flex flex-col  px-6 py-6 sm:px-24 sm:py-20 '>
           <div className='bg-white shadow-md rounded-lg p-6 sm:p-10 border-red-100'>
            
                    <p className='text-lg text-red-700 sm:text-xl font-semibold'>Send us a Message</p>
               
                <form className='text-red-500 mt-4 gap-3 flex flex-col' onSubmit={handleSubmit}>
                    <label  className='text-[14px] font-semibold ' htmlFor="">Your Name</label>
                    <input className='h-12 rounded-md border text-black border-[#fecaca]' type="text" name="name" required onChange={handleChange} />
                    <label  className='text-[14px] font-semibold ' htmlFor="">Your Contact</label>
                    <input className='h-12 rounded-md border text-black border-[#fecaca]' type="text" name="contact" required onChange={handleChange} />


                    <label className='text-[14px] font-semibold ' htmlFor="">Email Address</label>
                    <input className='h-12 rounded-md border text-black border-[#fecaca]' type="email" name="email" required onChange={handleChange}/>

                    <label className='text-[14px] font-semibold ' htmlFor="">Subject</label>
                    <input  className='h-12 rounded-md border text-black border-[#fecaca]' type="text" name="subject" required onChange={handleChange} />
                    <label className='text-[14px] font-semibold ' htmlFor="">Message</label>
                    <textarea className='h-48 rounded-md border text-black border-[#fecaca]' type="text" name="message" required onChange={handleChange}/>

                    <button type="submit"  className='sm:p-4 px-4 flex justify-center items-center gap-2 bg-[#dc2626] text-white rounded-lg sm:w-2/5 w-3/4'>
                    <p className='text-3xl'> <IoIosSend/> </p>
                    <p className='text-lg'>Send Message</p>
                    </button>
                </form>
           </div>
        </div>

        {/* contact cards  */}

        <div className='flex flex-col sm:flex-row gap-5 px-6 py-6 sm:px-24 sm:py-6 -mb-16'>
            {/* Contact Information  */}
            <div className='bg-white sm:w-1/2 flex flex-col gap-4 shadow-md rounded-lg p-6 sm:p-10 border-red-100'>
                <h1 className='text-red-700 text-lg sm:text-xl font-semibold'>
                    Contact Information
                </h1>
                
               <div className='flex items-center gap-2 '>
               <p className='text-3xl  text-[#dc2626] '>
               <AiOutlineMail/>
               </p>
                     <div>
                        <h1 className='font-semibold text-[#7f1d1d]'>Email</h1>
                        <p className='text-[#b91c1c] overflow'>thechanakyaguruacademy@gmail
                            .com</p>
                    </div>
               </div>

               <div className='flex items-center gap-2 justify-between'>
               <p className='text-3xl text-[#dc2626] '>
               <CiLocationOn />
               </p>
                     <div>
                        <h1 className='font-semibold text-[#7f1d1d]'>Address</h1>
                        <p className='text-[#b91c1c]'>ADDRESS : A-444 Main Road West Vinod Nagar Shanti Marg Delhi-110092</p>
                    </div>
               </div>

                <div className='flex gap-2 items-center'>
                    <p className='text-3xl text-[#dc2626] '>
                    <AiOutlinePhone/>
                    </p>
                    <div>
                        <h1 className='font-semibold text-[#7f1d1d]'>
                            Contact

                        </h1>
                        <p className='text-[#b91c1c]'>
                            9654596700
                        </p>
                    </div>
                </div>
            </div>
            {/* busiiness hours  */}
            <div className='bg-white sm:w-1/2 flex flex-col shadow-md rounded-lg p-6 sm:p-10 border-red-100 gap-8'>
                <h1 className='text-red-700 text-lg sm:text-xl font-semibold'>
                    Busiiness Hours
                </h1>

                <div className='flex flex-wrap text-lg'>
                    <p className='w-1/2 font-semibold text-[#7f1d1d]'>
                        Monday-Friday
                    </p>
                    <p className='w-1/2 font-semibold text-[#b91c1c]'>
                        9.00 AM-9.00 PM
                    </p>
                </div> <div className='flex flex-wrap text-lg'>
                    <p className='w-1/2 font-semibold text-[#7f1d1d]'>
                        Saturday
                    </p>
                    <p className='w-1/2 font-semibold text-[#b91c1c]'>
                        9.00 AM-6.00 PM
                    </p>
                </div> <div className='flex flex-wrap text-lg'>
                    <p className='w-1/2 font-semibold text-[#7f1d1d]'>
                        Sunday
                    </p>
                    <p className='w-1/2 font-semibold text-[#b91c1c]'>
                        9.00 AM-4.00 PM
                    </p>
                </div>

            </div>
        </div>

    </section>
  )
}

// export default Contact