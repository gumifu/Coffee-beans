'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Coffee, Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Our Story', path: '/' },
  { label: 'Brew Guide', path: '/brew' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-coffee-50/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-coffee-800 p-2 rounded-lg text-white group-hover:bg-coffee-700 transition-colors">
            <Coffee size={24} />
          </div>
          <span className="font-serif text-2xl font-bold text-coffee-900 tracking-tight">Velvet Bean</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-semibold tracking-wide uppercase hover:text-coffee-600 transition-colors ${
                pathname === item.path ? 'text-coffee-800 border-b-2 border-coffee-800' : 'text-coffee-900/70'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-coffee-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-coffee-900 transition-colors shadow-lg shadow-coffee-800/20">
            Shop Beans
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-coffee-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-coffee-50 border-t border-coffee-200 shadow-xl p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-serif font-medium text-coffee-900 py-2 border-b border-coffee-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
