import React from 'react';

export default function Navbar() {
  const NavbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'Skills', link: '#skills' },
    { id: 3, name: 'My projects', link: '#projects' },
    { id: 4, name: 'Contact', link: '#contact' },
  ];

  return (
    <header data-aos="fade-down" className="fixed top-0 left-0 w-full bg-blue-600 shadow-md z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 mr-11 font-bold text-2xl">Portfolio</span>
        </a>
        <nav className="md:ml-auto md:mr-auto font-medium flex flex-wrap items-center text-base text-white justify-center">
          {NavbarLinks.map((e) => (
            <a key={e.id} href={e.link} className="mr-7 hover:text-yellow-300">
              {e.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
