import { Button } from 'flowbite-react'
import React from 'react'
import { Link, Router } from 'react-router-dom'

export default function Header() {
  return (
    <div className=' flex justify-between  bg-black p-3  space-x-28'>
      <div className='flex justify-start space-x-24'>
      <h1 className='text-3xl font-sans text-white'>Shutter</h1>
      <button     className='text-xl font-thin text-slate-300'>Home </button>
      <button   className='text-xl font-thin text-slate-300'>Blog</button>
      <button    className='text-xl font-thin text-slate-300'>About</button></div>
      <div className='flex justify-end space-x-20'>
      
      
      <button className='text-xl font-thin text-amber-600'>Sign in </button>
      <button className='text-xl font-thin text-amber-600 ring-1 ring-amber-600 p-1 rounded-3xl w-40 '>Sign up  </button>
      <p className='text-slate-400 font-thin p-1 flex'>UA | <p className='text-slate-100 mx-1'>EN</p></p></div>
   
    </div>

  )
}
