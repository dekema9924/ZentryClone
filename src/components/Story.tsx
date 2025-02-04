
import entrance from '../public/img/entrance.webp'
import { useRef} from 'react';
import gsap from 'gsap';

function Story() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !imageRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    // Calculate rotation values based on mouse position
    const rotateX = ((y - centerY) / centerY) * -20; // Max tilt of 20 degrees
    const rotateY = ((x - centerX) / centerX) * -20; // Max tilt of -20 degrees

    // Apply rotation animation using GSAP
    gsap.to(imageRef.current, {
      rotationX: rotateX,
      rotationY: rotateY,
      ease: 'power1.out',
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        rotationX: 0,
        rotationY: 0,
        ease: 'power1.out',
        duration: 0.5,
      });
    }
  };
  return (
    <>
      <div className=' bg-black text-white'>
        <div
         ref={containerRef}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
          className=' flex flex-col justify-center items-center'>
          <p className='generalFont text-xl uppercase my-10 '>The open IP universe</p>
          <h1 className='--zentryFont text-[4em] lg:w-120 leading-14 text-center my-2 text-blue-100 '>The story of a hidden realm</h1>
          <img
          style={{
            objectFit: 'cover',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s',
          }} ref={imageRef}
           className='transformDiv w-[400px] lg:w-[700px] lg:my-2' src={entrance} alt="storyImg" />

        </div>
      </div>

    </>
  )
}

export default Story