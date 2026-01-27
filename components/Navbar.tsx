import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, ChevronDown, Phone } from 'lucide-react';
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
    {
      label: 'Services',
      value: PageState.SERVICES,
      subItems: [
        { label: 'Strategic Tax Planning', value: PageState.SERVICE_TAX_PLANNING },
        { label: 'Full Cycle Accounting', value: PageState.SERVICE_ACCOUNTING },
        { label: 'Bookkeeping', value: PageState.SERVICE_BOOKKEEPING },
        { label: 'Payroll Processing', value: PageState.SERVICE_PAYROLL },
        { label: 'Legal Compliances', value: PageState.SERVICE_LEGAL },
      ]
    },
    { label: 'About Us', value: PageState.ABOUT },
    { label: 'Contact', value: PageState.CONTACT },
    { label: 'AI Assistant', value: PageState.AI_ASSISTANT, special: true },
  ];

  const handleNavClick = (page: PageState) => {
    setPage(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-lg border-b border-white/20 h-16' : 'bg-white/90 backdrop-blur-sm h-20'
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
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.label} className="relative group">
                  <button
                    onClick={() => handleNavClick(item.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 ${currentPage === item.value
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                      }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  {/* Desktop Dropdown */}
                  <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavClick(subItem.value);
                          }}
                          className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${item.special
                    ? 'ml-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
                    : currentPage === item.value
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                    }`}
                >
                  {item.label}
                </button>
              )
            ))}

            {/* Call Button */}
            <a
              href="tel:+15551234567"
              className="ml-4 flex items-center gap-2 px-4 py-2 bg-accent-600 hover:bg-accent-500 text-white rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone size={16} />
              <span>(316) 773-4127</span>
            </a>
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
              <div key={item.label}>
                <button
                  onClick={() => handleNavClick(item.value)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors flex justify-between items-center ${item.special
                    ? 'bg-primary-600 text-white shadow-md mt-4 text-center justify-center'
                    : currentPage === item.value
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
                    }`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown size={16} />}
                </button>
                {/* Mobile Submenu (Always visible if parent is present, or simple list) - keeping it simple mostly */}
                {item.subItems && (
                  <div className="pl-4 space-y-1 mt-1">
                    {item.subItems.map(subItem => (
                      <button
                        key={subItem.label}
                        onClick={() => handleNavClick(subItem.value)}
                        className="block w-full text-left px-4 py-2 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-primary-600"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;