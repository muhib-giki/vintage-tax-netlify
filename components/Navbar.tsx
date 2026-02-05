"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, ChevronDown, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  }

  const navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Services',
      path: '/services',
      subItems: [
        { label: 'Strategic Tax Planning', path: '/services/tax-planning' },
        { label: 'Full Cycle Accounting', path: '/services/accounting' },
        { label: 'Bookkeeping', path: '/services/bookkeeping' },
        { label: 'Payroll Processing', path: '/services/payroll' },
        { label: 'Legal Compliances', path: '/services/legal' },
      ]
    },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'AI Assistant', path: '/ai', special: true },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  // We can keep scroll detection for shadow, but colors are static
  const textColor = 'text-slate-900';
  const logoColor = 'text-primary-700';
  const logoFill = 'fill-primary-50';

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white border-b border-slate-100 ${scrolled ? 'shadow-md h-20' : 'h-24'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center cursor-pointer group"
            onClick={closeMenu}
          >
            <div className="relative mr-3">
              <Hexagon className={`${logoColor} ${logoFill} group-hover:scale-110 transition-transform duration-300`} size={40} strokeWidth={1.5} />
              <div className="absolute inset-0 flex items-center justify-center text-primary-700 font-bold text-sm font-serif">V</div>
            </div>
            <div>
              <span className={`block font-serif text-2xl font-bold ${logoColor} leading-none tracking-tight`}>Vintage</span>
              <span className="block font-sans text-[0.65rem] font-bold tracking-[0.2em] text-accent-600 uppercase mt-1">Tax & Accounting</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.path}
                    className={`px-5 py-2.5 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-1 ${isActive(item.path)
                      ? 'text-primary-700 bg-primary-50 font-semibold'
                      : 'text-slate-600 hover:text-primary-700 hover:bg-slate-50'
                      }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </Link>
                  {/* Desktop Dropdown */}
                  <div className="absolute top-full left-0 w-64 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden ring-1 ring-slate-900/5">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.path}
                          className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`px-5 py-2.5 rounded-full text-base font-medium transition-all duration-300 ${item.special
                    ? 'ml-6 bg-primary-600 text-white shadow-md hover:shadow-primary-600/30 hover:-translate-y-0.5 px-6 rounded-full'
                    : isActive(item.path)
                      ? 'text-primary-700 bg-primary-50 font-semibold'
                      : 'text-slate-600 hover:text-primary-700 hover:bg-slate-50'
                    }`}
                >
                  {item.label}
                </Link>
              )
            ))}

            {/* Call Button - Green Pill */}
            <a
              href="tel:+15551234567"
              className="ml-4 flex items-center gap-2 px-6 py-2.5 bg-accent-600 hover:bg-accent-700 text-white rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone size={18} className="fill-current" />
              <span>(316) 773-4127</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-900 hover:text-primary-600 p-2 rounded-md hover:bg-slate-50 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
                <Link
                  href={item.path}
                  onClick={closeMenu}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-colors flex justify-between items-center ${item.special
                    ? 'bg-primary-600 text-white shadow-md mt-6 text-center justify-center p-4'
                    : isActive(item.path)
                      ? 'bg-primary-50 text-primary-900 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-primary-700'
                    }`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown size={16} />}
                </Link>
                {/* Mobile Submenu */}
                {item.subItems && (
                  <div className="pl-4 space-y-1 mt-1 border-l-2 border-slate-100 ml-4">
                    {item.subItems.map(subItem => (
                      <Link
                        key={subItem.label}
                        href={subItem.path}
                        onClick={closeMenu}
                        className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-500 hover:bg-slate-50 hover:text-primary-700"
                      >
                        {subItem.label}
                      </Link>
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