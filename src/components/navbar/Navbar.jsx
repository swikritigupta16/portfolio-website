import React from 'react';

export default function Navbar() {
  const NavbarLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'Skills', link: '#skills' },
    { id: 3, name: 'My projects', link: '#projects' },
    { id: 4, name: 'Contact', link: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <a className="text-white font-bold text-2xl">Portfolio</a>
        
        <nav className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-2 md:space-y-0 mt-2 md:mt-0 text-white text-base">
          {NavbarLinks.map((e) => (
            <a
              key={e.id}
              href={e.link}
              className="hover:text-yellow-300"
            >
              {e.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
