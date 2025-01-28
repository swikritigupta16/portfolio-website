import React from 'react'
import Frontend from '../../assets/Frontend.png'
import Frontend_1 from '../../assets/Frontend_1.png'
import Frontend_2 from '../../assets/Frontend_2.png'

const ProjectCard = ({image, title,description}) =>(
    <div className='p-4 md:w-1/3 mb-6'>
        <div className='rounded-lg h-52 overflow-hidden'>
            <img src={image} alt="content" className='object-cover object-center h-full w-full' />
        </div>
        <h2 className='text-xl font-medium title-font text-white mt-5'>{title}</h2>
        <p className="text-gray-700 mt-1">{description}</p>
        
    </div>
);

export default function Projects() {
    const projects = [
        {title:'Cov-Aid',image: Frontend, description: 'Built using HTML,CSS, JS, Boostrap, PHP, MySql. The Purpose of this website is to connect people who can help the ones in need in there own area or locality by sharing the resources during crisis.'},
        {title:'Tasty fusion',image: Frontend_1, description:'Built using MEAN Stack tech. It is an online food ordering platform. It provides an easy and user-friendly way to add the favoutite dishses to the cart and then order at the ease.'},
        {title:'Movie Recommendation System',image: Frontend_2, description:'This system was built using Machine Learning technology, provides top 5 similar movie recommendations to users based on their search.'},
    ];
  return (
    <section id='projects' className='text-gray-400 bg-blue-500 body-font'>
        <div className='container px-3 py-11 mx-auto'>
            <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col'>
                <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
                    <h1 className='sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0'>My projects</h1>
                    
                    
                </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4'>
                {
                    projects.map((project, index)=>(
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}
