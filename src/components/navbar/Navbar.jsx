import React from 'react';

export default function Navbar() {
  const NavbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'Skills', link: '#skills' },
    { id: 3, name: 'My projects', link: '#projects' },
    { id: 4, name: 'Contact', link: '#contact' },
  ];

  return (
    <header
      data-aos="fade-down"
      className="fixed top-0 left-0 w-full bg-blue-600 shadow-md z-50 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto w-full px-4 py-3 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <a className="flex title-font font-medium items-center text-white mb-2 md:mb-0">
          <span className="font-bold text-2xl">Portfolio</span>
        </a>
        <nav className="flex flex-wrap justify-center items-center gap-x-4 text-base text-white">
          {NavbarLinks.map((e) => (
            <a
              key={e.id}
              href={e.link}
              className="hover:text-yellow-300 whitespace-nowrap"
            >
              {e.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
