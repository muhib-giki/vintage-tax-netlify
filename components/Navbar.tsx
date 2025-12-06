import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { PageState } from '../types';

interface NavbarProps {
  currentPage: PageState;
  setPage: (page: PageState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', value: PageState.HOME },
    { label: 'Services', value: PageState.SERVICES },
    { label: 'About Us', value: PageState.ABOUT },
    { label: 'Contact', value: PageState.CONTACT },
    { label: 'AI Assistant', value: PageState.AI_ASSISTANT, special: true },
  ];

  const handleNavClick = (page: PageState) => {
    setPage(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav shadow-lg border-b border-white/20 h-16' : 'bg-white/90 backdrop-blur-sm h-20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick(PageState.HOME)}
          >
            <div className="relative mr-3">
              <Hexagon className="text-primary-600 fill-primary-100 group-hover:scale-110 transition-transform duration-300" size={32} strokeWidth={1.5} />
              <div className="absolute inset-0 flex items-center justify-center text-primary-700 font-bold text-xs">V</div>
            </div>
            <div>
              <span className="block font-serif text-2xl font-bold text-primary-900 leading-none tracking-tight">Vintage</span>
              <span className="block font-sans text-[0.65rem] font-bold tracking-[0.2em] text-accent-600 uppercase mt-0.5">Tax & Accounting</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  item.special 
                    ? 'ml-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
                    : currentPage === item.value 
                      ? 'text-primary-700 bg-primary-50' 
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-900 hover:text-primary-600 p-2 rounded-md hover:bg-primary-50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full animate-fade-in shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.value)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                   item.special
                    ? 'bg-primary-600 text-white shadow-md mt-4 text-center'
                    : currentPage === item.value
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;