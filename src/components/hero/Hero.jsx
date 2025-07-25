import React from 'react' 
import Navbar from '../navbar/Navbar'
import me from '../../assets/me.jpg'

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center'>
        <div className='md:h-[720px] h-[990px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute bg-blue-500 rounded-full transform rotate-6 -top-40 z-0'></div>
        <Navbar />

        <section id='home' className='flex flex-col md:flex-row items-center justify-center w-full pt-32 px-4 sm:px-6 lg:px-8">
'>
         <div data-aos='fade-up' className='flex-1 text-center md:text-left mt-10 md:mt-0'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg'>
            SWIKRITI GUPTA
          </h1>
          <p data-aos='fade-up' data-aos-delay='300' className='text-base sm:text-lg md:text-lg mb-6 text-yellow-200'>
              DEVELOPER | ANALYST | TECH ENTHUSIASTIC
            </p>
            <p data-aos='fade-up' data-aos-delay='300' className='text-base sm:text-lg md:text-lg text-gray-300 mb-6'>
              I hold an MCA from the Institute of Information Technology & Management and a BCA degree from Jagan Institute of Management Studies, Delhi. With a strong foundation in tech and a hands-on approach, I aim to contribute to impactful projects that drive innovation and real-world change.
            </p>
            
            
          </div>
           <div data-aos='fade-up' className='flex-1 flex justify-center md:justify-end mt-8 md:mt-0 '>
          <img src={me} alt="Hero" className='h-[300px] sm:h-[400px] md:h-[440px] w-[250px] sm:w-[360px] object-cover rounded-3xl shadow-2xl border-4 border-white' />
        </div>

        </section>

    </div>
  )
}