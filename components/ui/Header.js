// components/ui/Header.jsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative mr-2 flex h-8 w-8 items-center justify-center bg-[#2DD4BF]">
              <ShieldIcon className="h-5 w-5 text-white" />
              <div className="absolute -top-0.5 -left-0.5 h-2 w-2 border-t border-l border-white"></div>
              <div className="absolute -top-0.5 -right-0.5 h-2 w-2 border-t border-r border-white"></div>
              <div className="absolute -bottom-0.5 -left-0.5 h-2 w-2 border-b border-l border-white"></div>
              <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 border-b border-r border-white"></div>
            </div>
            <span className="text-lg font-bold">VibeSafe</span>
          </Link>

          <nav className="hidden space-x-6 md:flex">
            <NavLink href="/" isActive={false}>Home</NavLink>
            <NavLink href="/scan/xss" isActive={false}>XSS Scanner</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#support">Support</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/scan/xss"
              className="relative hidden rounded-none bg-[#2DD4BF] px-5 py-2 text-sm font-medium text-white transition-all hover:bg-[#2DD4BF]/90 md:block"
            >
              Security Scan
              <div className="absolute -top-0.5 -left-0.5 h-1.5 w-1.5 border-t border-l border-white"></div>
              <div className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 border-t border-r border-white"></div>
              <div className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border-b border-l border-white"></div>
              <div className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border-b border-r border-white"></div>
            </Link>

            {/* Mobile menu button */}
            <button className="flex h-10 w-10 items-center justify-center rounded-none border border-gray-200 hover:border-[#2DD4BF] md:hidden">
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Header Subcomponents
function NavLink({ href, children, isActive }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-all hover:text-[#2DD4BF] ${
        isActive ? 'text-[#2DD4BF]' : 'text-[#6B7280]'
      }`}
    >
      {children}
    </Link>
  );
}

function ShieldIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.674 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

function MenuIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
  );
}