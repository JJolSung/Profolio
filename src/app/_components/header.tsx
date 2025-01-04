'use client';

import { useAtom } from 'jotai';
import { darkModeAtom } from '../atoms/darkModeAtom';
import { useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';

interface HeaderProps {
  navItems: string[];
}

export default function Header({ navItems }: HeaderProps) {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
    document.documentElement.classList.toggle('dark', storedDarkMode);
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <header className='bg-gray-800 text-white py-6 fixed top-0 w-full z-10 shadow-md'>
      <nav className='relative container mx-auto flex flex-col items-center'>
        {/* Dark Mode Toggle Button */}
        {/* Centered Title */}
        <h1 className='text-2xl font-bold text-center sm:text-4xl'>
          Myeongsub Kim
        </h1>
        <button
          onClick={toggleDarkMode}
          aria-label='Toggle Dark Mode'
          className='absolute  right-4 -translate-y-1/2 text-2xl  rounded-full  transition-all duration-300 focus:outline-none'
        >
          {darkMode ? <BsMoon /> : <BsSun />}
        </button>

        {/* Navigation Menu */}
        <ul className='flex sm:space-x-16 space-x-10 mt-4'>
          {navItems.map((item) => (
            <li key={item}>
              <ScrollLink
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-100} // 헤더 높이만큼 보정
                className='hover:text-gray-500 font-bold cursor-pointer transition-colors duration-300'
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
