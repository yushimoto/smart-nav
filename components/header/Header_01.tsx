'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import LogoLight from '../logo/LogoLight';
import useSmoothScroll from '../hooks/useSmoothScroll';

const Header_01 = (): React.JSX.Element => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`site-header transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'site-header--sticky mobile-sticky-enable reveal-header' 
          : 'site-header--absolute'
      } is--white py-3`}
      id='sticky-menu'
    >
      <div className='global-container'>
        <div className='flex items-center justify-between gap-x-8'>
          <LogoLight />
          <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          <div className='flex items-center gap-6'>
            <button 
            onClick={() => scrollToSection('#how-it-works')}
            className='hidden text-white font-semibold text-[16px] lg:inline-block transition-all duration-300 ease-in-out hover:text-gray-300 hover:scale-105 relative group'
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
            onClick={() => scrollToSection('#missions-section')}
            className='hidden text-white font-semibold text-[16px] lg:inline-block transition-all duration-300 ease-in-out hover:text-gray-300 hover:scale-105 relative group'
            >
              Applications
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
            onClick={() => scrollToSection('#inside-smartnav-ai-labs-section')}
            className='hidden text-white font-semibold text-[16px] lg:inline-block transition-all duration-300 ease-in-out hover:text-gray-300 hover:scale-105 relative group'
            >
              AI Labs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
            onClick={() => scrollToSection('#contact-section')}
            className='hidden text-white font-semibold text-[16px] lg:inline-block transition-all duration-300 ease-in-out hover:text-gray-300 hover:scale-105 relative group'
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a 
              href="https://app.smartnav.ai"
              className='hidden lg:inline-block text-orange-500 font-semibold text-[16px] transition-all duration-300 ease-in-out hover:text-orange-400 hover:scale-105 relative group'
            >
              Sign In
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className='block lg:hidden'>
              <button
                onClick={() => setMobileMenu(true)}
                className='flex flex-col justify-center items-center w-8 h-8 text-white hover:text-gray-300 transition-all duration-300 ease-in-out hover:scale-110 active:scale-95'
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header_01;
