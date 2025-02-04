import gallery2 from '../public/img/gallery-2.webp'
import gallery3 from '../public/img/gallery-3.webp'
import Contact from './Contact'






function LatestUpdates() {
  return (
    <>
      <div className='lg:flex lg:justify-between '>
        <div className='m-24'>
          <h1 className='--zentryFont text-[3em] lg:text-[6em] w-24 leading-20'>Latest Updates</h1>
          <p className='text-xs w-58 py-4'>Stay updated with the lastest news,events,
            and updates in our ecosystem. Be private of our universe
            growth and evolution.
          </p>
          <button className='bg-black text-white rounded-3xl text-xs w-34 h-6'>Read all news</button>
        </div>

        <div className='lg:w-96 w-11/12 lg:m-24 m-auto'>
          <div
            className='w-11/12 ml-10 lg:ml-0'>
            <img  className='rounded-lg border-2 cursor-pointer perspective-near' src={gallery2} alt="galleryImg2" />
            <div className='flex items-start gap-10 my-4 p-2 lg:p-0'>
              <p className='generalFont text-xs'>09.05.2024</p>
              <p className='robertFont text-sm capitalize '>Nexus: Zentry's social portal Bridging human & AI in the Global play Economy </p>
            </div>
          </div>
          <div className='card w-11/12 mr-10 lg:mr-0'>
            <img className='.card-content rounded-lg border-2' src={gallery3} alt="galleryImg2" />
            <div className='flex items-start gap-10 my-4 p-2 lg:p-0'>
              <p className='generalFont text-xs'>22.11.2024</p>
              <p className='robertFont text-sm '>Zentry Whitepaper: The blueprint. The blueprint to the metagame</p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  )
}

export default LatestUpdates