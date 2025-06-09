import React from 'react'
import Resume from './Resume.pdf'


export default function Skills() {
  return (
    <div>
        <main id='skills' className='py-6 px-4 sm:p-6 md:py-10 md:px-8'>
            <div className='max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2'>
                <div data-aos='fade-up' data-aos-delay='400' className='relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1'>
                <p className='text-lg leading-4 font-medium text-white md:text-slate-500 md:text-blue-950'>Skills</p>
                </div>
                <p data-aos='fade-up' data-aos-delay='700' className='mt-4 text-sm leading-5 col-start-2 sm:col-span-4 lg:mt-6 lg:row-start-2 text-blue-950 lg:col-span-2'>
                  
                <ul className="flex flex-wrap gap-4">
  <div className="w-1/2">
    <li className="p-2 bg-blue-500 text-white rounded">HTML5</li>
    <li className="p-2 bg-blue-500 text-white rounded">CSS</li>
    <li className="p-2 bg-blue-500 text-white rounded">JavaScript</li>
    <li className="p-2 bg-blue-500 text-white rounded">React.js</li>
    <li className="p-2 bg-blue-500 text-white rounded">Core JAVA</li>
    <li className="p-2 bg-blue-500 text-white rounded">Python</li>
  </div>
  <div className="w-1/2">
    
    <li className="p-2 bg-green-500 text-white rounded">Team Player</li>
    <li className="p-2 bg-green-500 text-white rounded">Hard Working</li>
    <li className="p-2 bg-green-500 text-white rounded">Problem Solver</li>
    
  </div>
</ul>

                
                 </p>
                
                


                
                <div className='mt-4 md:col-start-5 md:row-start-5 self-center lg:mt-2 lg:col-start-5 lg:row-start-5 lg:row-end-7'>
                    <a href={Resume} download>
                        <button data-aos='fade-up' data-aos-delay='600' type='button' className='text-white bg-blue-950 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 font-semibold rounded-full text-xs sm:text-sm px-4 py-2 text-center'>
                            Download Resume
                        </button>
                    </a>
                </div>
                
            </div>
        </main>
    </div>
  )
}
