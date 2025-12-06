import React, { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO, TechFlow Inc.",
    content: "Vintage Tax transformed how I handle my business finances. Their modern approach combined with deep expertise gave me peace of mind during our acquisition.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Real Estate Investor",
    content: "Vincent (the AI) is helpful for quick checks, but the human team saved me thousands in capital gains taxes. A perfect blend of tech and touch.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Principal Architect",
    content: "Authenticity isn't just a buzzword for them. They treat my modest portfolio with the same care as their corporate clients. Highly recommended.",
    rating: 5
  },
  {
    id: 4,
    name: "Dr. James Chen",
    role: "Medical Practice Owner",
    content: "Complex payroll for my clinic was a nightmare until Vintage took over. Now I focus on patients, not paperwork. The transparency is refreshing.",
    rating: 5
  },
  {
    id: 5,
    name: "Olivia Banks",
    role: "Director, Hope Foundation",
    content: "Their understanding of 501(c)(3) regulations is unmatched. They keep us compliant so we can keep serving our community without fear.",
    rating: 5
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonialData.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-100 relative">
       {/* Decorative elements */}
       <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-transparent"></div>
       <div className="absolute -left-20 top-40 w-64 h-64 bg-accent-50 rounded-full blur-3xl opacity-60"></div>
       <div className="absolute -right-20 bottom-20 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold tracking-wider uppercase mb-4">
              <Star size={12} fill="currentColor" />
              Client Success Stories
            </div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">Trusted Voices</h3>
            <p className="text-slate-500 text-lg max-w-xl">See how we've helped businesses and individuals navigate their financial journey.</p>
          </div>

          <div className="flex items-center gap-3 bg-white p-1 rounded-full border border-slate-200 shadow-sm">
             <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-4 rounded-full bg-white hover:bg-slate-50 text-slate-600 hover:text-primary-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm border border-transparent hover:border-slate-200"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="h-6 w-[1px] bg-slate-200"></div>
            <button 
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="p-4 rounded-full bg-white hover:bg-slate-50 text-slate-600 hover:text-primary-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm border border-transparent hover:border-slate-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden py-4 -mx-4 px-4">
          <div 
            className="flex transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {testimonialData.map((item) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="h-full bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(14,165,233,0.15)] transition-all duration-500 group flex flex-col relative">
                  {/* Top decorative bar */}
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-4">
                       <div className="text-accent-500 opacity-80">
                         <Quote size={40} className="fill-accent-100 stroke-accent-500" strokeWidth={1.5} />
                       </div>
                       <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg italic">
                      "{item.content}"
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-700 font-bold text-lg border-2 border-white shadow-md">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-primary-900">{item.name}</h4>
                        <CheckCircle2 size={14} className="text-accent-500" fill="currentColor" stroke="white" />
                      </div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;