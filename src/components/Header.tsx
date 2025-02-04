// This is the header component
import { useEffect, useState } from 'react'
import gamePad from '../public/icons/gamepad.png'


function Header() {
    const [isOpen, setOpen] = useState(false)

    useEffect(()=>{
        isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    },[isOpen])

    return (
        <>
            <header className='flex w-full items-center  justify-between text-white lg:px-[10px] py-[40px] h-14 bg-[#4b4b4b5b] absolute z-50'>
                <div className='flex items-center  lg:gap- gap-2 lg:ml-4 p-2 lg:p-0'>
                    <img className='w-10' src={gamePad} alt="gamePadIcon" />
                    <button style={{backgroundColor: isOpen ? "black" : "", color: isOpen ? "#dbeafe" : ""}} className="--cursor w-30 h-5 lg:h-8 bg-gray-400 text-black uppercase text-xs font-bold rounded-3xl">products</button>
                    <button style={{backgroundColor: isOpen ? "black" : "", color: isOpen ? "#dbeafe" : ""}} className="--cursor w-30 h-5 bg-gray-400 text-black lg:h-8 uppercase text-xs font-bold rounded-3xl">whitepaper</button>
                </div>

                <div className='flex items-center'>
                    <ul className='lg:flex gap-4 uppercase text-xs hidden '>
                        <li className='--cursor'>nexus</li>
                        <li className='--cursor'>vault</li>
                        <li className='--cursor'>prologue</li>
                        <li className='--cursor'>about</li>
                        <li className='--cursor'>contact</li>
                    </ul>
                    <div style={{color: isOpen ? "black" : "white"}} onClick={()=>setOpen(!isOpen)} className='cursor-pointer  w-10 lg:hidden mr-2 lg:mr-0'>
                        <span className='w-11/12 h-2 border-t-2 block'></span>
                        <span className='w-11/12 h-2 border-t-2  block'></span>
                    </div>
                </div>
                <div style={{height: isOpen ? "100vh" : "0px", backgroundColor: isOpen ? "#fff085" : "transparent"}} className='navbar lg:hidden absolute pt-20 text-[3em] top-0 bg-yellow-200 text-black overflow-hidden transition-all duration-700 w-full h-[100vh] -z-1 '>
                    <ul className=' gap-4 uppercase text-xs p-4  '>
                        <li className='navbar --cursor --zentryFont text-[5em] before:content-["01"] before:text-sm before:relative before:bottom-10 before:pr-4'>nexus <span className='text-[.7em]'>↗</span></li>
                        <li className='navbar --cursor --zentryFont text-[5em] before:content-["02"] before:text-sm before:relative before:bottom-10 before:pr-4  '>vault <span className='text-[.7em]'>↗</span></li>
                        <li className='navbar --cursor --zentryFont text-[5em] before:content-["03"] before:text-sm before:relative before:bottom-10 before:pr-4'>prologue</li>
                        <li className='navbar --cursor --zentryFont text-[5em] before:content-["04"] before:text-sm before:relative before:bottom-10 before:pr-4'>about</li>
                        <li className='navbar --cursor --zentryFont text-[5em] before:content-["05"] before:text-sm before:relative before:bottom-10 before:pr-4'>contact</li>
                    </ul>
                </div>

            </header>
        </>
    )
}


export default Header