import React from 'react';

export default function Skills() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 min-h-screen">
      <main id="skills" className="py-10 px-6 sm:p-10 md:py-16 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Heading */}
          <div 
            data-aos="fade-up" 
            data-aos-delay="400" 
            className="col-span-full text-center lg:text-left"
          >
            <h2 className="text-3xl font-bold text-blue-950">Skills</h2>
            <p className="text-sm text-blue-800 mt-2">
              A snapshot of my technical and personal strengths.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3" data-aos="fade-right" data-aos-delay="500">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Technical</h3>
            <ul className="space-y-2">
              {['Front-End Development', 'Core JAVA', 'Python', 'AI & ML (basics)', 'SQL', 'MongoDB'].map(skill => (
                <li 
                  key={skill} 
                  className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="space-y-3" data-aos="fade-left" data-aos-delay="600">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Soft Skills</h3>
            <ul className="space-y-2">
              {['Team Player', 'Hard Working', 'Problem Solver','Time Management'].map(skill => (
                <li 
                  key={skill} 
                  className="bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-600 transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Resume Button */}
          <div className="col-span-full text-center mt-8" data-aos="fade-up" data-aos-delay="700">
            <a 
              href="https://drive.google.com/file/d/1rc2BJr-WVCgFQltqobFYvDQq8Urajbsr/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button 
                type="button" 
                className="text-white bg-blue-950 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 font-semibold rounded-full text-sm px-6 py-3 shadow-lg transition"
              >
                View Resume
              </button>
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
