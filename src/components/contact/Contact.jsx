import React from 'react'

export default function Contact() {
  return (
    <section id='contact' className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
            <div data-aos='fade-up' data-aos-delay='300' className='text-center lg:w-2/3 w-full'>
             <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>Contact Info</h1>
              
                <div data-aos='fade-up' data-aos-delay='500' className='flex flex-col items-center text-xl font-bold'>
                  
                 
                  <div className='flex items-center space-x-2'>
                  <svg class="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                  </svg>
                        <span >swikritigupta16@gmail.com</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                  <svg class="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                  </svg>
                        <span ><a href="https://www.linkedin.com/in/swikriti-gupta-895329207/"target="_blank" rel="noopener noreferrer">LinkedIn ID</a></span>
                  </div> 
                   {/* GitHub */}
            <div className='flex items-center space-x-2'>
              <svg className="h-8 w-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.21 11.44c.6.113.82-.258.82-.577v-2.02c-3.34.726-4.04-1.61-4.04-1.61-.546-1.387-1.33-1.757-1.33-1.757-1.09-.744.082-.729.082-.729 1.204.086 1.84 1.244 1.84 1.244 1.07 1.832 2.807 1.303 3.49.996.108-.776.42-1.303.763-1.602-2.66-.305-5.46-1.33-5.46-5.931 0-1.31.47-2.382 1.235-3.221-.124-.303-.535-1.523.118-3.176 0 0 1.008-.323 3.3 1.23A11.5 11.5 0 0112 6.845c1.02.005 2.047.14 3.006.41 2.29-1.554 3.296-1.23 3.296-1.23.656 1.653.246 2.873.122 3.176.77.84 1.232 1.911 1.232 3.221 0 4.61-2.803 5.624-5.47 5.922.431.372.816 1.102.816 2.222v3.293c0 .322.216.694.825.576A12 12 0 0024 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span><a href="https://github.com/swikritigupta16" target="_blank" rel="noopener noreferrer">GitHub Profile</a></span>
            </div>


                </div>
            </div>
        </div>
    </section>
  )
}
