import React from 'react';
import Frontend from '../../assets/Frontend.png';
import Frontend_1 from '../../assets/Frontend_1.png';
import Frontend_2 from '../../assets/Frontend_2.png';

const ProjectCard = ({ image, title, description, github, live }) => (
  <div className="p-4 md:w-1/3 w-full">
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col items-center h-full text-center">
      <div className="rounded-xl overflow-hidden mb-4 w-full h-48">
        <img src={image} alt="project" className="object-cover w-full h-full" />
      </div>
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-gray-200 text-sm mb-4 px-2">{description}</p>
      <div className="flex gap-4 mt-auto">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
        >
          GitHub
        </a>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
);


export default function Projects() {
  const projects = [
    {
      title: 'Cov-Aid',
      image: Frontend,
      description: 'Built using HTML, CSS, JS, Bootstrap, PHP, MySql. It connects people during crisis to share resources locally.',
      github: 'https://github.com/swikritigupta16/cov-aid',
      live: 'https://covaid.infinityfreeapp.com/index.php?i=2'
    },
    {
      title: 'Tasty Fusion',
      image: Frontend_1,
      description: 'Built using MEAN Stack tech. It’s an online food ordering platform with cart and order features.',
      github: 'https://github.com/swikritigupta16/tastyFusion',
      live: 'https://tasty-fusion.vercel.app/'
    },
    {
      title: 'Movie Recommendation System',
      image: Frontend_2,
      description: 'Built using Machine Learning. It provides top 5 similar movie recommendations to users.',
      github: 'https://github.com/swikritigupta16/movie-recommendation-system',
      live: 'https://swikritigupta16-movie-recommendation-system-app-zo3bcy.streamlit.app/'
    }
  ];

  return (
    <section id='projects' className='text-gray-400 bg-blue-500 body-font'>
      <div className='container px-3 py-11 mx-auto'>
        <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col'>
          <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
            <h1 className='sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0'>My Projects</h1>
          </div>
        </div>

        {/* Projects List */}
        <div data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* GitHub Link Section */}
        <div className='mt-10 text-center'>
          <a
            href='https://github.com/swikritigupta16'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-6 py-3 text-white font-semibold bg-black rounded-full hover:bg-gray-800 transition duration-300'
          >
            <svg className='w-6 h-6 mr-2' fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.21 11.44c.6.113.82-.258.82-.577v-2.02c-3.34.726-4.04-1.61-4.04-1.61-.546-1.387-1.33-1.757-1.33-1.757-1.09-.744.082-.729.082-.729 1.204.086 1.84 1.244 1.84 1.244 1.07 1.832 2.807 1.303 3.49.996.108-.776.42-1.303.763-1.602-2.66-.305-5.46-1.33-5.46-5.931 0-1.31.47-2.382 1.235-3.221-.124-.303-.535-1.523.118-3.176 0 0 1.008-.323 3.3 1.23A11.5 11.5 0 0112 6.845c1.02.005 2.047.14 3.006.41 2.29-1.554 3.296-1.23 3.296-1.23.656 1.653.246 2.873.122 3.176.77.84 1.232 1.911 1.232 3.221 0 4.61-2.803 5.624-5.47 5.922.431.372.816 1.102.816 2.222v3.293c0 .322.216.694.825.576A12 12 0 0024 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View More
          </a>
        </div>
      </div>
    </section>
  );
}
