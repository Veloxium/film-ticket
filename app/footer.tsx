import Image from 'next/image'
import React from 'react'
import LogoPutih from "./images/logo3.png";

export default function Footer() {
  return (
    <div className='px-[70px] bg p-10 text-white'>
        <div className="logo w-40 pb-4">
          <Image src={LogoPutih} alt='logo' className='w-full h-full'/>
        </div>
        <div className="text-md poppins">
            <p>Best App For Movie Lovers In Indonesia!</p>
            <p>Movie Entertainment Platform From</p>
            <p>Cinema To Online Movie Streaming</p>
            <p>Selection.</p>
        </div>
    </div>
  )
}
