import stoneImg from '../public/img/stones.webp'
import aboutImg from '../public/img/about.webp'
import radiantVideo from '../public/videos/feature-1.mp4'
import zimaVideo from '../public/videos/feature-2.mp4'
import nexus from '../public/videos/feature-3.mp4'
import azulVidep from '../public/videos/feature-4.mp4'
import Feature5 from '../public/videos/feature-5.mp4'
import React, { useRef } from 'react';



function CardWorld() {
  const nexusRef = useRef<HTMLVideoElement>(null);
  const azulRef = useRef<HTMLVideoElement>(null);
  const radiantRef = useRef<HTMLVideoElement>(null);
  const zimaRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };




  return (
    <>
      <section id='about-section' className=' mt-42 b border-r-green-400order-2 '>
        <p className='robertFont text-xs text-center uppercase mb-14'>Welcome <span className='typewritter-Animation'>to Zentry</span></p>
        <div id='easeIn-Animation' className='easeIn-Animation m-auto w-full lg:w-[800px]'>
          <h1 className=' --zentryFont  lg:text-[4em] text-4xl  text-center   '>Discover the worlds Largest Shared Adventure</h1>
        </div>
        <div className=' flex justify-center relative h-[709px] lg:h-full'>
          <img className=' relative z-30' src={stoneImg} alt="stoneImg" />
          <div className='fullScreen-worldAnimation w-[300px] h-[400px]  z-10 absolute top-7 rounded-2xl '>
            <img className=' w-full h-full object-cover rounded-2xl  m-auto' src={aboutImg} alt="worldImg" />
          </div>
          <div className='absolute w-full '>
            <p className='text-2xl mt-[430px] text-center lg:w-[500px] m-auto'>The metagame begins-your life, now an epic <span>MMORPG</span></p>
            <p className='text-lg lg:w-96 text-gray-400 m-auto text-center'>Zentry is the unified play layer that bridges players, agentic AI, and blockchains, creating a new economic paradigm</p>
          </div>
        </div>

      </section>

      <div className='bg-black text-white pt-20 pl-2 lg:p-14 '>
        <div className='lg:pl-20 p-4'>
          <h1 className='text-[1.6em] text-blue-100'>Explore the Zentry Universe</h1>
          <p className='text-[1em] text-gray-400 lg:w-96 w-64'>Immerse yourself in an IP-rich product universe where AI-deriven gameification and hyper-
            personalization lead humans & AI into a global play economy
          </p>
        </div>

        <div className='w-11/12 m-auto mt-34 '>
          {/* radiant */}
          <div onMouseEnter={() => handleMouseEnter(radiantRef)} onMouseLeave={() => handleMouseLeave(radiantRef)} className="pop-animation my-10 hover:scale-95 transition-all duration-500 w-11/12 col-span-2 border-[.1px] m-auto border-gray-400  cursor-grab rounded-2xl h-96 relative z-40 p-4 overflow-hidden ">
            <video
              ref={radiantRef}
              className='w-11/12 h-11/12 absolute -z-1 scale-150'
              loop
              muted
              src={radiantVideo} />
            <h1 className='--zentryFont text-[3em]'>Radiant</h1>
            <p className='text-[.8em] w-48'>The game of games transforming you in-game actions across Web2 & Web3 titles into rewarding adventures</p>
            <button className='border-2 bg-black text-gray-500 rounded-2xl w-42 h-8 absolute bottom-10 '>Coming soon</button>
          </div>


          <div className='pop-animation flex gap-10 flex-wrap lg:flex-nowrap lg:w-11/12 m-auto w-full '>
            {/* zigma */}
            <div onMouseEnter={() => handleMouseEnter(zimaRef)} onMouseLeave={() => handleMouseLeave(zimaRef)} className="pop-animation delay-75 hover:scale-95 transition-all duration-500 border-[.1px] cursor-grab overflow-hidden w-11/12 h-[600px]  border-gray-400 rounded-2xl relative z-40 p-4  shadow-2xl ">
              <video
                ref={zimaRef}
                className=' absolute -z-1 w-11/12 rounded-4xl h-[600px] scale-150 '
                loop
                muted src={zimaVideo} />
              <h1 className='--zentryFont text-[3em]'>Zigma</h1>
              <p className='text-[.8em] w-48'>The NFT collection merging Zentry's IP, AI and
                gaming- pushing the boundaries of NFT innovation
              </p>
              <button className='border-2 bg-black text-gray-500 absolute bottom-10 rounded-2xl w-42 h-8  '>Coming soon</button>
            </div>


            <div className='flex flex-col gap-10'>
              {/* nexus */}
              <div onMouseEnter={() => handleMouseEnter(nexusRef)} onMouseLeave={() => handleMouseLeave(nexusRef)} className="pop-animation hover:scale-95 transition-all duration-500 cursor-grab border-[.1px] lg:w-[520px]  h-[280px] overflow-hidden  border-gray-400 rounded-2xl relative z-40 p-4  shadow-2xl ">
                <video
                  ref={nexusRef}
                  className='w-11/12 h-11/12 absolute -z-1 scale-150 '
                  loop
                  muted src={nexus} />
                <h1 className='--zentryFont text-[3em]'>Nexus</h1>
                <p className='text-[.8em] w-48'>The player portal uniting humans & AI to play, compete, earn and showcase
                  --gamifying social & Web3 experiences
                </p>
                <div className=' flex gap-4 absolute bottom-6'>
                  <button className='border-2 bg-black text-gray-500 rounded-2xl lg:w-42 w-34 h-8  '>Coming soon</button>
                  <button className='border-2 border-yellow-100 hover:rounded-sm hover:rotate-y-40 transition-all duration-300 text-xs bg-black text-yellow-100 rounded-2xl w-36 h-8  '>Launch Site</button>
                </div>
              </div>

              {/* azul */}
              <div onMouseEnter={() => handleMouseEnter(azulRef)} onMouseLeave={() => handleMouseLeave(azulRef)} className="pop-animation hover:scale-95 transition-all duration-500 cursor-grab border-[.1px] w-80 lg:w-[520px] h-[280px] overflow-hidden  border-gray-400 rounded-2xl relative z-40 p-4  shadow-2xl ">
                <video
                  ref={azulRef}
                  className='w-11/12 h-11/12 absolute -z-1 scale-150  '
                  loop
                  muted
                  src={azulVidep} />
                <h1 className='--zentryFont text-[3em]'>Azul</h1>
                <p className='text-[.8em] w-48'>The agent of agents elevating agentic AI
                  experience to be more fun and productive
                </p>
                <button className='absolute bottom-6 border-2 bg-black text-gray-500 rounded-2xl w-42 h-8  '>Coming soon</button>
              </div>
            </div>

          </div>
          <div className=' flex flex-wrap-reverse lg:flex-nowrap gap-10 lg:my-10 m-auto w-11/12 pb-10'>
            {/* comingSoon card */}
            <div className=" pop-animation cursor-grab bg-[#3d27c8]  w-11/12 h-[295px]  rounded-2xl p-4 ">
              <p className='--zentryFont text-[3em] lg:w-80 text-black'>More Coming Soon.</p>
            </div>

            {/* feauture5 cardVideo */}
            <div className="pop-animation w-11/12 cursor-grab lg:h-[295px] rounded-2xl overflow-hidden ">
              <video
                autoPlay
                loop
                muted
                className='h-full'
                src={Feature5} />
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default CardWorld