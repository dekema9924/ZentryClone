import React from 'react'
import contact1 from '../public/img/contact-1.webp'
import contact2 from '../public/img/contact-2.webp'
import swordsman from '../public/img/swordman.webp'


function Contact() {
  return (
    <>
        <div className='bg-black text-white w-11/12 m-auto lg:h-[400px] h-[500px] rounded-2xl flex flex-col lg:flex-row items-center justify-around relative' >
            <div className='lg:w-42 w-24 flex flex-col lg:gap-24'>
                <img className='rotate-x-15 -rotate-y-30 lg:block hidden' src={contact1} alt="contact1Img" />
                <img className='rotate-x-[60deg] rotate-z-20 rounded-2xl h-42' src={contact2} alt="contact2Img" />
            </div>
            <div className=' text-center'>
                <p className='text-[.3em]'>Join Zentry</p>
                <h1 className='--zentryFont text-[2em] lg:text-[3em] text-blue-100 w-80 text-center'>Let's build the new era of gaming together</h1>
                <button className='robertFont uppercase text-[.4em] cursor-pointer bg-blue-100 w-24 h-9 rounded-2xl text-black '>Contact Us</button>
            </div>
            <div className='lg:w-80 w-42 '>
                <img className=' oject-cover -rotate-x-15 -rotate-y-40 relative  lg:scale-105 ' src={swordsman} alt="swordsmanImg" />
            </div>

        </div>
    </>
  )
}

export default Contact