import React from 'react';
import { Hexagon, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';
import { PageState } from '../types';

interface FooterProps {
  setPage: (page: PageState) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-primary-950 text-primary-100 py-16 border-t border-primary-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <Hexagon className="text-accent-500 mr-2" size={28} strokeWidth={2} />
              <span className="font-serif text-2xl text-white font-bold">Vintage Tax</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-300 mb-6">
              Authentic, reliable, and precise accounting services for the modern era. Establishing trust since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-900 p-2 rounded-lg hover:bg-accent-600 text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="bg-primary-900 p-2 rounded-lg hover:bg-accent-600 text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="bg-primary-900 p-2 rounded-lg hover:bg-accent-600 text-white transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm text-primary-300">
              <li className="hover:text-accent-400 cursor-pointer transition-colors">Personal Tax</li>
              <li className="hover:text-accent-400 cursor-pointer transition-colors">Corporate Accounting</li>
              <li className="hover:text-accent-400 cursor-pointer transition-colors">Estate Planning</li>
              <li className="hover:text-accent-400 cursor-pointer transition-colors">Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-primary-300">
              <li onClick={() => setPage(PageState.ABOUT)} className="hover:text-accent-400 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-accent-400 cursor-pointer transition-colors">Careers</li>
              <li onClick={() => setPage(PageState.CONTACT)} className="hover:text-accent-400 cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-accent-400 cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-sm text-primary-300 mb-4">Subscribe for tax tips and regulatory updates.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-primary-900 border border-primary-800 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 placeholder-primary-600 text-sm"
              />
              <button className="bg-accent-600 hover:bg-accent-500 text-white py-2.5 rounded-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-500">
          <div>&copy; {new Date().getFullYear()} Vintage Tax & Accounting. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;