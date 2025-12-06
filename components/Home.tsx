import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import { PageState } from '../types';

interface HomeProps {
  setPage: (page: PageState) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <>
      <Hero setPage={setPage} />
      <Services />
      <Testimonials />
      <div className="bg-gradient-to-r from-primary-50 to-slate-50 py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h3 className="font-serif text-3xl font-bold text-primary-900 mb-6">Experience the Modern Difference</h3>
          <p className="text-slate-600 mb-8">Join thousands of satisfied clients who have modernized their financial strategy with Vintage Tax.</p>
          <button 
            onClick={() => setPage(PageState.ABOUT)}
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-700 font-medium rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300"
          >
            Learn more about our history
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;