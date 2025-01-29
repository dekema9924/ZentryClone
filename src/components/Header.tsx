// This is the header component
import gamePad from '../public/icons/gamepad.png'

function Header() {
    return (
        <>
            <header className='flex items-center justify-between text-white px-[10px] py-[40px] h-14 bg-[#4b4b4b5b] absolute w-full z-50'>
                <div className='flex items-center  gap-7 ml-4'>
                    <img className='w-10' src={gamePad} alt="gamePadIcon" />
                    <button className="--cursor w-30 h-5 lg:h-8 bg-gray-400 text-black uppercase text-xs font-bold rounded-3xl">products</button>
                    <button className="--cursor w-30 h-5 bg-gray-400 text-black lg:h-8 uppercase text-xs font-bold rounded-3xl">whitepaper</button>
                </div>

              <div className='flex items-center'>
              <ul className='lg:flex gap-4 uppercase text-xs hidden '>
                    <li className='--cursor'>nexus</li>
                    <li className='--cursor'>vault</li>
                    <li className='--cursor'>prologue</li>
                    <li className='--cursor'>about</li>
                    <li className='--cursor'>contact</li>
                </ul>
                <div className='cursor-pointer  w-10 lg:hidden'>
                    <span className='w-11/12 h-2 border-t-2 block'></span>
                    <span className='w-11/12 h-2 border-t-2  block'></span>
                </div>
              </div>
               
            </header>
        </>
    )
}


export default Header