'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Scissors, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Desktop navigation links
  const desktopLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/Gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Mobile navigation links
  const mobileLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
              <Scissors className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">Gentleman's</span>
              <span className="text-2xl font-bold text-amber-600">Grooming</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* Home Link */}
            <Link
              href="/"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Services Link */}
            <Link
              href="/services"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Gallery Link */}
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* About Link */}
            <Link
              href="/about"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Book Now Button */}
            <Link
              href="/booking"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              
              {/* Mobile Home Link */}
              <Link
                href="/"
                className="block text-gray-700 hover:text-amber-600 font-medium py-3 border-b border-gray-100 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Link */}
              <Link
                href="/services"
                className="block text-gray-700 hover:text-amber-600 font-medium py-3 border-b border-gray-100 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>

              {/* Mobile Gallery Link */}
              <Link
                href="/gallery"
                className="block text-gray-700 hover:text-amber-600 font-medium py-3 border-b border-gray-100 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>

              {/* Mobile About Link */}
              <Link
                href="/about"
                className="block text-gray-700 hover:text-amber-600 font-medium py-3 border-b border-gray-100 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              {/* Mobile Contact Link */}
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-amber-600 font-medium py-3 border-b border-gray-100 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Book Appointment Button */}
              <Link
                href="/booking"
                className="block bg-amber-600 text-white text-center py-4 rounded-xl font-semibold hover:bg-amber-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}