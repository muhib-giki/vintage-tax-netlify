import React from 'react';
import { TrendingUp, ShieldCheck, Briefcase, Scale, Search, DollarSign, Check, ArrowRight, PieChart, FileBarChart, Building2, Lock } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'planning',
      title: 'Strategic Tax Planning',
      subtitle: 'Proactive Wealth Preservation',
      icon: TrendingUp,
      description: 'Tax planning is not about what you make, but what you keep. We move beyond standard compliance to architect a multi-year strategy that aligns with your personal and business goals. By analyzing current laws and anticipating future legislation, we position you to minimize liability legally and effectively.',
      approach: 'We do not wait for April 15th. Our team conducts quarterly reviews of your financial picture—investments, business structure, and real estate holdings—to identify opportunities for reduction and deferral before the year closes.',
      deliverables: [
        'Multi-Year Tax Projections',
        'Entity Structure Optimization',
        'Tax-Loss Harvesting Strategies',
        'Retirement Distribution Planning',
        'Alternative Minimum Tax (AMT) Mitigation'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
      accent: 'bg-primary-600'
    },
    {
      id: 'irs',
      title: 'IRS Representation',
      subtitle: 'Steadfast Audit Defense',
      icon: ShieldCheck,
      description: 'Facing the IRS can be intimidating. Whether it is a correspondence audit or a field examination, you need a representative who understands the nuances of tax procedure. We serve as your shield, handling all communication and negotiation to protect your rights.',
      approach: 'We speak the language of the IRS. We meticulously organize your records, reconstruct missing data if necessary, and present your case based on the Internal Revenue Manual guidelines used by the auditors themselves.',
      deliverables: [
        'Audit Reconsideration',
        'Offer in Compromise (OIC)',
        'Penalty Abatement Requests',
        'Innocent Spouse Relief Petitions',
        'Installment Agreement Negotiation'
      ],
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
      accent: 'bg-accent-600'
    },
    {
      id: 'accounting',
      title: 'Corporate Accounting',
      subtitle: 'Financial Clarity for Business',
      icon: Briefcase,
      description: 'Modern business demands real-time financial intelligence. Our corporate accounting services go beyond bookkeeping to provide a clear operational picture of your company. We handle the numbers so you can focus on strategy and growth.',
      approach: 'We integrate cloud-based accounting systems with your operations for seamless data flow. Our month-end close process is rigorous, ensuring your financial statements are audit-ready at any moment.',
      deliverables: [
        'General Ledger Maintenance',
        'Payroll Processing & Compliance',
        'Cash Flow Budgeting',
        'KPI Dashboards',
        'Outsourced CFO Services'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      accent: 'bg-blue-600'
    },
    {
      id: 'estate',
      title: 'Estate & Trust Planning',
      subtitle: 'Generational Legacy Design',
      icon: Scale,
      description: 'Preserving wealth for future generations requires delicate balancing of tax efficiency and family dynamics. We work alongside your legal team to structure trusts and estates that minimize estate taxes and ensure your wishes are executed precisely.',
      approach: 'We take a human-centric approach to the technicalities of Form 706 and 1041. We model various scenarios to show the long-term impact of gifting strategies, charitable remainder trusts, and family limited partnerships.',
      deliverables: [
        'Estate Tax Return Preparation',
        'Fiduciary Income Tax Returns',
        'Gift Tax Compliance',
        'Charitable Trust Advisory',
        'Succession Planning'
      ],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
      accent: 'bg-indigo-600'
    }
  ];

  return (
    <div className="bg-white animate-fade-in">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-primary-950 text-white">
        {/* Background Image with Parallax feel */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 fixed-bg-effect"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent-300 text-xs font-bold tracking-widest uppercase mb-6">
              <Building2 size={14} />
              Premier Financial Services
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Architecting Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-white">Financial Future</span>
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl leading-relaxed border-l-4 border-accent-500 pl-6">
              Comprehensive tax and accounting solutions tailored for high-net-worth individuals and forward-thinking enterprises.
            </p>
          </div>
        </div>
      </div>

      {/* --- VALUE PROPOSITION STRIP --- */}
      <div className="bg-white border-b border-slate-100 relative z-20 -mt-16 mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="flex gap-4 items-start md:pr-8 pt-8 md:pt-0">
             <div className="p-3 bg-primary-50 rounded-xl text-primary-600 shrink-0">
               <PieChart size={24} />
             </div>
             <div>
               <h3 className="font-bold text-primary-900 mb-2">Precision Analytics</h3>
               <p className="text-sm text-slate-600 leading-relaxed">Data-driven insights that go beyond simple reporting to uncover hidden value.</p>
             </div>
          </div>
          <div className="flex gap-4 items-start md:px-8 pt-8 md:pt-0">
             <div className="p-3 bg-accent-50 rounded-xl text-accent-600 shrink-0">
               <Lock size={24} />
             </div>
             <div>
               <h3 className="font-bold text-primary-900 mb-2">Fiduciary Standard</h3>
               <p className="text-sm text-slate-600 leading-relaxed">We act strictly in your best interest with uncompromising ethical standards.</p>
             </div>
          </div>
          <div className="flex gap-4 items-start md:pl-8 pt-8 md:pt-0">
             <div className="p-3 bg-slate-50 rounded-xl text-slate-600 shrink-0">
               <FileBarChart size={24} />
             </div>
             <div>
               <h3 className="font-bold text-primary-900 mb-2">Regulatory Agility</h3>
               <p className="text-sm text-slate-600 leading-relaxed">Adapting strategies in real-time as tax codes and financial landscapes shift.</p>
             </div>
          </div>
        </div>
      </div>

      {/* --- DETAILED SERVICE SECTIONS --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-32">
        {services.map((service, idx) => (
          <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Text Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl ${service.accent} text-white shadow-lg`}>
                    <service.icon size={24} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-400">{service.subtitle}</span>
                </div>
                <h2 className="text-4xl font-serif font-bold text-primary-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className={`absolute top-0 left-0 w-1 h-full ${service.accent}`}></div>
                <h4 className="font-bold text-primary-900 mb-3">Our Approach</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.approach}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-primary-900 mb-6 border-b border-slate-100 pb-2">Key Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-700 group hover:text-primary-700 transition-colors cursor-default">
                      <Check size={16} className={`mt-0.5 shrink-0 ${service.accent.replace('bg-', 'text-')}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Content */}
            <div className="flex-1 w-full relative perspective-1000">
               {/* Background Decoration */}
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${service.accent} opacity-5 rounded-full blur-3xl`}></div>
               
               <div className="relative group">
                 {/* Main Image Frame */}
                 <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:-rotate-1">
                    <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full aspect-[4/3] object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[1.5s]" 
                    />
                 </div>

                 {/* Floating Card Element - Simulating Motion */}
                 <div className={`absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[260px] animate-float z-20 ${idx % 2 === 1 ? 'md:left-auto md:-right-12' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                       <div className={`w-10 h-10 rounded-full ${service.accent} flex items-center justify-center text-white`}>
                          <Check size={18} />
                       </div>
                       <div>
                         <div className="text-xs text-slate-500 uppercase font-bold">Status</div>
                         <div className="text-sm font-bold text-primary-900">Optimized</div>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full w-3/4 ${service.accent} rounded-full animate-loading`}></div>
                       </div>
                       <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                          <span>Compliance</span>
                          <span>100%</span>
                       </div>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        ))}
      </div>

      {/* --- PROCESS SECTION --- */}
      <div className="bg-primary-50 py-24 border-y border-primary-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">Our Engagement Process</h2>
               <p className="text-slate-600 max-w-2xl mx-auto">A transparent, structured journey from discovery to delivery.</p>
            </div>

            <div className="relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
               
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                  {[
                    { step: '01', title: 'Discovery', desc: 'We analyze your past returns and current financial standing.' },
                    { step: '02', title: 'Strategy', desc: 'Our team architects a custom plan tailored to your goals.' },
                    { step: '03', title: 'Execution', desc: 'Implementation of tax positions and filing of documents.' },
                    { step: '04', title: 'Review', desc: 'Post-filing analysis and forward-looking adjustments.' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
                       <div className="w-12 h-12 bg-primary-900 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary-900/20 group-hover:scale-110 transition-transform">
                         {item.step}
                       </div>
                       <h3 className="font-bold text-lg text-primary-900 mb-3">{item.title}</h3>
                       <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* --- TECHNOLOGY & CTA --- */}
      <div className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-primary-950 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
               <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
               <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Modernize Your Finances?</h2>
               <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto">
                  Leverage our secure client portal, AI-driven insights, and human expertise.
                  Schedule your complimentary discovery call today.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-accent-500/40 hover:-translate-y-1 flex items-center justify-center gap-2">
                     Book Consultation <ArrowRight size={18} />
                  </button>
                  <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full transition-all border border-white/10 flex items-center justify-center gap-2">
                     Explore Client Portal
                  </button>
               </div>
            </div>
         </div>
      </div>

      <style>{`
        .fixed-bg-effect {
          background-attachment: fixed;
        }
        @media (max-width: 768px) {
          .fixed-bg-effect {
            background-attachment: scroll;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes loading {
           0% { width: 0%; }
           100% { width: 75%; }
        }
        .animate-loading {
           animation: loading 2s ease-out forwards;
        }
        .perspective-1000 {
           perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;