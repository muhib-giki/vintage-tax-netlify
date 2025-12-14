import React, { useEffect } from 'react';
import { ArrowLeft, Check, Sparkles, ArrowRight, ShieldCheck, TrendingUp, Users, Scale, AlertCircle } from 'lucide-react';
import { PageState } from '../types';

interface ServiceDetailProps {
    setPage: (page: PageState) => void;
    serviceId: string;
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    process: { step: string; title: string; desc: string }[];
    image: string;
    icon?: React.ElementType;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
    setPage,
    title,
    subtitle,
    description,
    benefits,
    process,
    image,
    icon: Icon = Sparkles
}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen animate-fade-in pb-20">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-primary-950 text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 fixed-bg-effect"
                    style={{ backgroundImage: `url('${image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/60 to-transparent"></div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent-300 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
                        <Icon size={14} />
                        Vintage Services
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 animate-fade-in-up [animation-delay:200ms]">{title}</h1>
                    <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms]">{subtitle}</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* Description Side */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">
                                <div className="w-8 h-0.5 bg-accent-500"></div>
                                Overview
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 leading-tight">
                                Comprehensive Solutions for Your Growth
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {description}
                            </p>

                            <div className="pt-6">
                                <button
                                    onClick={() => setPage(PageState.CONTACT)}
                                    className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full shadow-lg hover:shadow-primary-600/30 transition-all flex items-center gap-2"
                                >
                                    Get Free Consultation <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Benefits Side */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                            <h3 className="text-2xl font-bold text-primary-900 mb-6 font-serif">Key Benefits</h3>
                            <div className="space-y-4">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex gap-4 items-start group">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <p className="text-slate-700 group-hover:text-primary-900 transition-colors font-medium">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">Our Methodology</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">A structured approach ensuring accuracy and strategic advantage.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {process.map((step, i) => (
                        <div key={i} className="relative group">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-6xl font-black text-slate-100 absolute top-4 right-4 z-0 group-hover:text-accent-50 transition-colors">{step.step}</div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-primary-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Strip */}
            <div className="bg-primary-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to optimize your financial strategy?</h2>
                        <p className="text-primary-200">Schedule a discovery call with our senior partners today.</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setPage(PageState.CONTACT)}
                            className="px-8 py-3 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-accent-500/30 whitespace-nowrap"
                        >
                            Book Now
                        </button>
                        <button
                            onClick={() => setPage(PageState.SERVICES)}
                            className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold rounded-full transition-all whitespace-nowrap"
                        >
                            View All Services
                        </button>
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
      `}</style>
        </div>
    );
};

export default ServiceDetail;
