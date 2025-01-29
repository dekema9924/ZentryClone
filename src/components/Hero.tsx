
import hero_1 from '../public/videos/hero-1.mp4'
import hero_2 from '../public/videos/hero-2.mp4'
import hero_3 from '../public/videos/hero-3.mp4'
import hero_4 from '../public/videos/hero-4.mp4'
import NearMeIcon from '@mui/icons-material/NearMe';
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function Hero() {
    const videos = [hero_1, hero_2, hero_3, hero_4]
    const [text, setText] = useState('GAMING')
    const nextVideoRef = useRef<HTMLVideoElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideo, setLoadedVideo] = useState(0)
    const totalVideos = videos.length
    const getVideoSrc = (index: number) => videos[index % totalVideos]
    const upcomingIndex = (currentIndex % totalVideos) + 1


    const HandlesmallVideoClick = () => {
        setIsClicked(true)
        setCurrentIndex(upcomingIndex)
        if(currentIndex == 0){
            setText('GAMING')
        }
        else if(currentIndex === 1){
            setText("IDENTITY")
        }
        else if(currentIndex === 2){
            setText("REALITY")
        }
        else if(currentIndex === 4){
            setText("AGENTIC AI")
        }
        
    }
    const HandleVideoLoad = () => {
        setLoadedVideo((prev) => prev + 1)
    }





    // gasp animation

    useGSAP(() => {
        if (isClicked) {
            gsap.set('#nextVideo', { visibility: 'visible' })
            gsap.to('#nextVideo', {
                transformOrigin: 'center center',
                scale: 1,
           
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => {
                    if (nextVideoRef.current) {
                        nextVideoRef.current.play()  // Call play on the video element
                    }
                }
            })
            gsap.to('#nextVideo', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true })

    useGSAP(()=>{
        if(isClicked){
            gsap.to("#easeIn-Text", {
                duration:1.5,
                ease: "power1.out",
                x: -700,
                y: 100,
                });
        }
        
    },{dependencies: [text], revertOnUpdate: true})

    return (
        <>

            <section className=' h-[100vh] capitalize overflow-hidden relative'>
                <div className='absolute top-14 text-white ml-10 flex lg:block flex-col gap-20 lg:gap-0 z-24 h-80 '>
                    <h1 className='--zentryFont text-[8em] text-blue-100'>Redifine</h1>
                    <div className='flex lg:block justify-between mt-64 lg:mt-0 w-[450px] lg:w-full'>
                        <p className='robertFont w-[180px] text-sm'>Enter the metagame unleash the play economy</p>
                        <button className='capitalize cursor-pointer my-4 flex items-center justify-center w-42 rounded-2xl bg-yellow-200 text-black text-xs h-8 font-bold'> <NearMeIcon className='p-1' /> watch trailer</button>
                    </div>
                </div>
                <div className='absolute w-44 h-44 top-1/3 left-1/3 lg:left-1/2 cursor-pointer overflow-hidden rounded-lg z-50 '>
                    <div onLoadedData={HandleVideoLoad}
                        onClick={HandlesmallVideoClick} className=' scale-50 opacity-0 transition-all ease-in duration-500 hover:scale-100 hover:opacity-100' >
                        <video
                            loop
                            muted
                            id='currentVideo'
                            className=' absolute size-64  scale-150 object-cover object-center '
                            onLoadedData={HandleVideoLoad}
                            ref={nextVideoRef}
                            src={getVideoSrc(currentIndex + 1)} />


                    </div>


                </div>
                <div className=''>
                    <video
                        loop
                        id='nextVideo'
                        autoPlay
                        muted
                        className='absolute z-20 w-[100vw] h-[100vh] object-center object-cover invisible '
                        ref-={nextVideoRef}
                        src={getVideoSrc(currentIndex)} />


                </div>
                <video
                    loop
                    muted
                    autoPlay
                    onLoadedData={HandleVideoLoad}
                    className='absolute left-0 top-0 w-[100vw] h-[100vh] object-cover object-center'
                    src={getVideoSrc(currentIndex === totalVideos + 1 ? 1 : currentIndex)}>
                </video>

                <div id='easeIn-Text' className='absolute lg:bottom-20 lg:right-[-600px] bottom-80 right-10  '>
                    <h1 className='--zentryFont text-[8em] text-blue-100'>{text}</h1>
                </div>



            </section>

        </>
    )
}

export default Hero