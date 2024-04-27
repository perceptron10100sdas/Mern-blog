import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
export default function Signin() {
  return (
    <div>
       <div className=' bg-black  h-screen  space-x-8  flex justify-center  '>

<div className='   ' >
<form  className=' flex justify-center space-x-8' >
 

<div>
  <div className=' flex'>
  <FaUser className=' text-amber-700 mt-20 text-2xl mx-3'/><input type='text' placeholder='Enter your name ' className=' text-amber-600 bg-gray-700 mt-16 p-4 rounded-3xl ' id='username' />
</div>
 <div className=' flex'>
 <MdAlternateEmail className=' text-amber-700 mt-20 text-2xl mx-3'/><input type='email' placeholder='Enter your email' className=' text-amber-600 bg-gray-700 mt-16 p-4 rounded-3xl ' id='email' />
  
  </div>
  <div className=' flex'>
  <MdOutlinePassword className=' text-amber-700 mt-20 text-2xl mx-3'/><input type='password' placeholder='Enter your Password' className=' text-amber-600 bg-gray-700 mt-16 p-4 rounded-3xl ' id='password' />
  </div></div>
  <div className='  mt-12 flex'><button className=' text-slate-100 text-8xl font-semibold mt-36  bottom-2  rotate-90'>Sign-in<FaArrowRight className=' text-white mt-14 text-5xl text-left '/></button> </div>
</form></div>



</div>
    </div>
  )
}
