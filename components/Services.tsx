import React from 'react';
import { Calculator, Briefcase, ShieldCheck, Search, ArrowUpRight, FileText, DollarSign, TrendingUp, Landmark, Scale } from 'lucide-react';
import { ServiceItem } from '../types';

// --- Micro-Visual Components ---

// 1. Dynamic Bar Chart for Tax Planning
const ChartVisual = () => (
  <div className="absolute right-0 bottom-0 w-full h-40 px-6 flex items-end gap-3 opacity-30 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
    {[30, 45, 60, 40, 75, 90].map((height, i) => (
      <div 
        key={i}
        className="flex-1 bg-white/20 rounded-t-md backdrop-blur-sm relative overflow-hidden group-hover:bg-white/30 transition-all duration-500"
        style={{ height: `${height}%` }}
      >
         <div className={`absolute bottom-0 left-0 w-full bg-accent-400/80 transition-all duration-1000 delay-[${i * 100}ms]`} 
              style={{ height: '0%', animation: `fillUp 1s ease-out ${i * 0.1}s forwards` }} 
         />
      </div>
    ))}
    <style>{`
      @keyframes fillUp { to { height: 100%; } }
    `}</style>
  </div>
);

// 2. IRS 1040 Form Mockup
const IrsFormVisual = () => (
  <div className="absolute -right-8 -bottom-12 w-64 h-72 bg-white border border-slate-200 rounded-lg shadow-xl transform rotate-12 group-hover:rotate-6 group-hover:translate-y-[-10px] transition-all duration-500 p-4 opacity-80 group-hover:opacity-100">
    <div className="border-b-2 border-slate-800 pb-2 mb-2 flex justify-between items-center">
      <div className="font-serif font-bold text-2xl text-slate-900">1040</div>
      <div className="text-[0.5rem] text-slate-500">Department of the Treasury</div>
    </div>
    <div className="space-y-2">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="flex gap-2">
          <div className="w-4 h-3 bg-slate-100 rounded"></div>
          <div className="flex-1 h-3 bg-slate-100 rounded"></div>
        </div>
      ))}
    </div>
    {/* Magnifying glass overlay on hover */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
       <div className="w-16 h-16 border-4 border-primary-600 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/50 shadow-lg">
          <ShieldCheck size={32} className="text-primary-600" />
       </div>
    </div>
  </div>
);

// 3. Ledger/Spreadsheet Grid
const LedgerVisual = () => (
  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none overflow-hidden">
    <div className="grid grid-cols-6 gap-[1px] bg-slate-300 h-full w-full transform -skew-x-12 scale-125">
      {[...Array(48)].map((_, i) => (
         <div key={i} className="bg-white flex items-center justify-center text-[0.5rem] font-mono text-slate-400 group-hover:text-primary-600 transition-colors duration-300">
            {Math.floor(Math.random() * 10000)}
         </div>
      ))}
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
  </div>
);

// 4. Binary/Code Search Visual
const DataVisual = () => (
    <div className="absolute top-4 right-4 w-32 h-32 opacity-30 group-hover:opacity-80 transition-all duration-500">
        <div className="absolute inset-0 animate-[spin_10s_linear_infinite] border border-dashed border-primary-400 rounded-full"></div>
        <div className="absolute inset-4 animate-[spin_8s_linear_infinite_reverse] border border-dotted border-accent-500 rounded-full"></div>
        <Search className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-800" size={24} />
    </div>
)

// 5. Estate Tree Visual
const EstateVisual = () => (
  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 opacity-40 group-hover:opacity-100 transition-all duration-500">
     <div className="w-10 h-10 rounded-full bg-primary-100 border-2 border-primary-300 flex items-center justify-center"><Landmark size={16} className="text-primary-700"/></div>
     <div className="h-8 w-0.5 bg-primary-300"></div>
     <div className="flex gap-8">
        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform delay-100"></div>
        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform delay-200"></div>
     </div>
  </div>
)


interface BentoServiceItem extends ServiceItem {
  colSpan: string;
  rowSpan: string;
  bgClass: string;
  textClass: string;
  iconBgClass: string;
  visual: React.ReactNode;
}

const services: BentoServiceItem[] = [
  {
    title: 'Strategic Tax Planning',
    description: 'We forecast your financial future to minimize liabilities. Our proactive multi-year approach ensures you keep more of what you earn.',
    icon: TrendingUp,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    bgClass: 'bg-gradient-to-br from-primary-900 to-primary-800',
    textClass: 'text-white',
    iconBgClass: 'bg-primary-700/50 text-accent-300',
    visual: <ChartVisual />
  },
  {
    title: 'IRS Representation',
    description: 'Steadfast defense during audits. We speak the language of the IRS so you do not have to.',
    icon: ShieldCheck,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    bgClass: 'bg-slate-100',
    textClass: 'text-slate-900',
    iconBgClass: 'bg-white text-primary-600 shadow-sm',
    visual: <IrsFormVisual />
  },
  {
    title: 'Corporate Accounting',
    description: 'Precision bookkeeping and payroll management.',
    icon: Briefcase,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    bgClass: 'bg-white',
    textClass: 'text-slate-900',
    iconBgClass: 'bg-slate-50 text-primary-600',
    visual: <LedgerVisual />
  },
  {
    title: 'Estate & Trusts',
    description: 'Generational wealth preservation strategies.',
    icon: Scale,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    bgClass: 'bg-white',
    textClass: 'text-slate-900',
    iconBgClass: 'bg-slate-50 text-primary-600',
    visual: <EstateVisual />
  },
  {
    title: 'Forensic Analysis',
    description: 'Deep-dive financial investigations.',
    icon: Search,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    bgClass: 'bg-primary-50',
    textClass: 'text-primary-900',
    iconBgClass: 'bg-white text-primary-600 shadow-sm',
    visual: <DataVisual />
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
            <h3 className="text-5xl font-serif text-primary-950 font-bold leading-tight">
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

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(240px,auto)] gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`
                group relative rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden
                ${service.colSpan} 
                ${service.rowSpan}
                ${service.bgClass}
                border border-slate-200/50
              `}
            >
              {/* Background Visual Component */}
              {service.visual}

              <div className="relative z-20 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <div className={`
                    p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 shadow-inner
                    ${service.iconBgClass}
                  `}>
                    <service.icon size={28} />
                  </div>
                  <div className={`p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 ${service.textClass === 'text-white' ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-600'}`}>
                     <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="mt-8 max-w-[90%]">
                  <h4 className={`text-2xl font-bold mb-3 ${service.textClass}`}>{service.title}</h4>
                  <p className={`leading-relaxed text-sm md:text-base font-medium ${service.textClass === 'text-white' ? 'text-primary-100' : 'text-slate-500'}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Call to Action Tile */}
          <div className="md:col-span-1 md:row-span-1 bg-accent-500 rounded-[2rem] p-8 flex flex-col justify-between group cursor-pointer hover:bg-accent-600 transition-colors shadow-xl shadow-accent-500/20 relative overflow-hidden">
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent-400/50 rounded-full blur-2xl group-hover:bg-accent-400 transition-colors"></div>
             
             <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white mb-4 backdrop-blur-sm">
                   <DollarSign size={24} />
                </div>
                <h4 className="text-white font-bold text-2xl mb-2">Custom Consultation</h4>
                <p className="text-accent-100 text-sm">Book a free discovery call.</p>
             </div>
             
             <div className="self-end bg-white text-accent-600 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform relative z-10">
               <ArrowUpRight size={24} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;