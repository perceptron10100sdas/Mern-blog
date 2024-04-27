
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";

export default function Signup() {
  const[formData,setFormData]=useState({})
  const handleChange=async(e)=>{
    e.preventDefault()

    setFormData({...formData,[e.target.id]:e.target.value})
  
{/* try {
    const res=await fetch('api/auth/signup',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(formData)
    })
   
  } catch (error) {
    
  } */} 
  }
  const handleSubmit=async(e)=>{

    try {
      const res=await fetch('api/auth/signup',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(formData)
      })
     
    } catch (error) {
      
    }
  }
  console.log(formData)
  return (
    <div className=' bg-black  h-screen  space-x-8  flex justify-center  '>

      <div className='   ' >
      <form  className=' flex justify-center space-x-8' onSubmit={handleSubmit}>
       
      <div className='  mt-12 flex'><button className=' text-slate-100 text-8xl font-semibold mt-36  bottom-2  -rotate-90'>Sign-up<FaArrowRight className=' text-white mt-14 text-5xl text-left '/></button> </div>
      <div>
        <div className=' flex'>
        <input type='text' placeholder='Enter your name ' className=' text-amber-600 bg-gray-700 mt-16 p-4 rounded-3xl ' id='username' onChange={handleChange}/>
       <FaUser className=' text-amber-700 mt-20 text-2xl mx-3'/></div>
       <div className=' flex'>
        <input type='email' placeholder='Enter your email' className=' text-amber-600 bg-gray-700 mt-16 p-4 rounded-3xl ' id='email' onChange={handleChange}/>
        <MdAlternateEmail className=' text-amber-700 mt-20 text-2xl mx-3'/>
        </div>
        <div className=' flex'>
        <input type='password' placeholder='Enter your Password' className=' text-amber-600 bg-gray-700 mt-16 p-4 rounded-3xl ' id='password' onChange={handleChange}/>
        <MdOutlinePassword className=' text-amber-700 mt-20 text-2xl mx-3'/></div></div>
      </form></div>
     
      
      
    </div>
  )
}
