import React from 'react';

export default function Navbar() {
  const NavbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'Skills', link: '#skills' },
    { id: 3, name: 'My projects', link: '#projects' },
    { id: 4, name: 'Contact', link: '#contact' },
  ];

  return (
    <header data-aos="fade-up" className="absolute top-0 flex justify-center items-center body-font z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 mr-11 font-bold text-white text-3xl">Portfolio </span>
        </a>
        <nav className="md:ml-auto md:mr-auto font-medium flex flex-wrap items-center text-base text-gray-300 justify-center">
          {NavbarLinks.map((e) => (
            <a key={e.id} href={e.link} className="mr-7 hover:text-white">
              {e.name}
            </a>
          ))}
        </nav>
        
      </div>
    </header>
  );
}
