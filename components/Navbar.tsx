'use client'

import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#classes', label: 'Classes' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md shadow-sm py-4 px-8 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-800">Surabhi Classes</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left px-8 py-4 text-gray-700 hover:bg-gray-50"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};