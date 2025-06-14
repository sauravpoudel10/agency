import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-900">GrowthSpire</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-emerald-600 transition-colors ${
                isActive('/') ? 'text-emerald-600 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              About
            </button>
            <Link
              to="/blog"
              className={`text-gray-700 hover:text-emerald-600 transition-colors ${
                isActive('/blog') ? 'text-emerald-600 font-semibold' : ''
              }`}
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className={`block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors ${
                  isActive('/') ? 'text-emerald-600 font-semibold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors w-full text-left"
              >
                About
              </button>
              <Link
                to="/blog"
                className={`block px-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors ${
                  isActive('/blog') ? 'text-emerald-600 font-semibold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;