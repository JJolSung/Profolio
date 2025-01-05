'use client';

import { useAtom } from 'jotai';
import { darkModeAtom } from '../atoms/darkModeAtom';
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SunIcon, MoonIcon } from '@heroicons/react/16/solid';

interface HeaderProps {
  navItems: string[];
}

export default function Header({ navItems }: HeaderProps) {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Call Dark Mode from Local Storage and apply it
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
    document.documentElement.classList.toggle('dark', storedDarkMode);
  }, [setDarkMode]);

  //Toggle Dark Mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  //Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  //Hide Menu on Desktop
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1280) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  return (
    <header
      className='bg-white/80 backdrop-blur-sm  text-gray-800  
      py-4 fixed top-0 w-full z-10 shadow-md dark:shadow-lg dark:bg-gray-900/80 dark:text-white transition-all duration-300 '
    >
      <nav className='container mx-auto relative px-8'>
        <h1 className='text-2xl font-bold'>Myeongsub Kim</h1>

        {/* Desktop Navigation */}
        <ul className='hidden xl:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8'>
          {navItems.map((item) => (
            <li key={item}>
              <ScrollLink
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className='hover:text-blue-500 cursor-pointer transition-colors duration-300'
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className='absolute top-1/2 right-8 p-2 rounded-full -translate-x-1/2 -translate-y-1/2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
        >
          {darkMode ? (
            <MoonIcon className='h-6 w-6' />
          ) : (
            <SunIcon className='h-6 w-6' />
          )}
        </button>

        {/* Hamburger Navigation */}
        <button
          className='absolute top-1/2 right-1 -translate-y-1/2 xl:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
          onClick={toggleMenu} // When clicked, toggle menu open/close
        >
          {isMenuOpen ? (
            <XMarkIcon className='h-6 w-6' />
          ) : (
            <Bars3Icon className='h-6 w-6' />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && ( // Display only when isMenuOpen is true
          <div className='absolute top-10 left-0 w-full bg-white dark:bg-gray-900 shadow-lg rounded-md xl:hidden '>
            <ul className='flex flex-col items-center gap-4 py-4'>
              {navItems.map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsMenuOpen(false)} // When clicked, close the menu
                    className='hover:text-blue-500 cursor-pointer transition-colors duration-300'
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
