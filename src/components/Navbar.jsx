import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight text-white text-lg">
          CE Portfolio
        </a>
        <ul className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
          <li><a className="hover:text-white transition" href="#about">About</a></li>
          <li><a className="hover:text-white transition" href="#projects">Projects</a></li>
          <li><a className="hover:text-white transition" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
