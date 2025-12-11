import React from 'react';
import { Calculator, Briefcase, ShieldCheck, ArrowUpRight, FileText, DollarSign, TrendingUp, PieChart, Users, FileCheck } from 'lucide-react';

interface GridServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

const services: GridServiceItem[] = [
  {
    title: 'Strategic Tax Planning',
    description: 'Proactive multi-year forecasting utilizing Form 1040 and 1065 strategies to minimize liabilities.',
    icon: TrendingUp,
    // Image: Tax Forms / 1040
    image: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Full Cycle Accounting',
    description: 'End-to-end management from general ledgers to C-suite financial reporting.',
    icon: PieChart,
    // Image: Calculator, Ledger, Financial Papers (Fixed broken link)
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Bookkeeping',
    description: 'Meticulous record-keeping ensuring every penny is accurately tracked via modern software.',
    icon: Calculator,
    // Image: Laptop with software
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Payroll Processing',
    description: 'Seamless, compliant W2 & 1099 management ensuring your team is paid on time.',
    icon: Users,
    // Image: Stacks of Money / Financial Distribution
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Legal Compliances',
    description: 'Navigating complex regulatory frameworks so your business never misses a deadline.',
    icon: ShieldCheck,
    // Image: Scale of Justice and Legal Documents/Books
    image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=800'
  },
];

const Services: React.FC = () => {
  return (
    <div className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Noise/Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-bold tracking-wider uppercase mb-4 border border-accent-200">
              <Briefcase size={12} />
              Our Expertise
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-primary-950 font-bold leading-tight">
              Comprehensive Financial <br/>
              <span className="text-primary-600 relative">
                Architecture
                <svg className="absolute w-full h-2 -bottom-0 left-0 text-accent-300/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h3>
          </div>
          <p className="text-slate-600 max-w-md text-lg leading-relaxed pb-2">
             We move beyond simple compliance to provide holistic financial structures that withstand scrutiny and foster growth.
          </p>
        </div>

        {/* Uniform Grid Layout: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative rounded-[2rem] overflow-hidden h-[420px] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200/50"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Gradient - Darkens bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95"></div>
              </div>

              {/* Content */}
              <div className="relative z-20 flex flex-col h-full justify-between p-8">
                {/* Top: Icon */}
                <div className="flex justify-between items-start">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-inner group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                    <service.icon size={28} />
                  </div>
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                     <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Bottom: Text */}
                <div>
                  <h4 className="text-2xl font-bold mb-3 text-white font-serif tracking-wide">{service.title}</h4>
                  <p className="leading-relaxed text-sm font-medium text-primary-100 opacity-90 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Call to Action Tile - Fills the 6th slot */}
          <div className="group relative rounded-[2rem] overflow-hidden h-[420px] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200/50 bg-accent-600 flex flex-col justify-between p-8">
             {/* Decorative Background */}
             <div className="absolute inset-0 bg-accent-600">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent-500 rounded-full blur-3xl group-hover:bg-accent-400 transition-colors"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-accent-500 rounded-full blur-3xl group-hover:bg-accent-400 transition-colors"></div>
             </div>
             
             <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm border border-white/10">
                   <DollarSign size={28} />
                </div>
                <h4 className="text-white font-bold text-3xl mb-3 font-serif">Custom Consultation</h4>
                <p className="text-accent-100 font-medium leading-relaxed">Have a unique situation? Book a free discovery call with our senior partners to discuss your specific needs.</p>
             </div>
             
             <div className="self-end bg-white text-accent-600 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform relative z-10 mt-auto">
               <ArrowUpRight size={24} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;