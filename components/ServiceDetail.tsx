"use client";
import React, { useEffect } from 'react';
import { ArrowLeft, Check, Sparkles, ArrowRight, ShieldCheck, TrendingUp, Users, Scale, AlertCircle } from 'lucide-react';
import Link from 'next/link';

import { servicesData } from '@/utils/servicesData';

interface ServiceDetailProps {
    serviceId: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId }) => {
    const service = servicesData.find(s => s.id === serviceId);

    // Fallback if service not found (shouldn't happen if slug is validated)
    if (!service) return null;

    const {
        title,
        subtitle,
        description,
        benefits,
        process,
        image,
        icon: Icon,
        approach,
        widget,
        accent
    } = service;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Extract color for badges based on the accent class string or default to primary
    // This is a rough extraction, in a real app we might store hex or generic color names
    const accentColorRaw = accent ? accent.replace('bg-', '').replace('-600', '') : 'primary';

    return (
        <div className="bg-white min-h-screen animate-fade-in">

            {/* Main Split Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -z-10 rounded-bl-[100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Text Content (Left) */}
                        <div className="space-y-8 animate-fade-in-up">
                            {/* Icon Badge */}
                            <div className={`w-14 h-14 rounded-2xl ${accent.replace('bg-', 'bg-').replace('600', '100')} ${accent.replace('bg-', 'text-').replace('600', '700')} flex items-center justify-center mb-6`}>
                                <Icon size={28} strokeWidth={1.5} />
                            </div>

                            <div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-4 leading-tight">{title}</h1>
                                <p className="text-xl text-slate-500 font-medium">{subtitle}</p>
                            </div>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                {description}
                            </p>

                            {/* Our Approach Box */}
                            <div className="pl-6 border-l-4 border-primary-500 py-2 bg-slate-50 rounded-r-lg">
                                <h3 className="text-sm font-bold text-primary-700 uppercase tracking-widest mb-2">Our Approach</h3>
                                <p className="text-slate-700 italic">"{approach}"</p>
                            </div>

                            {/* Key Benefits */}
                            <div className="pt-4">
                                <h3 className="text-lg font-bold text-slate-900 mb-4 font-serif">Key Benefits</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {benefits.map((benefit, i) => (
                                        <div key={i} className="flex gap-3 items-center">
                                            <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-slate-600 text-sm font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="pt-6 flex gap-4">
                                <Link
                                    href="/contact"
                                    className={`px-8 py-4 ${accent} hover:opacity-90 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2`}
                                >
                                    Book Discovery Call <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        {/* Image & Widget (Right) */}
                        <div className="relative animate-fade-in-up [animation-delay:200ms]">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={image}
                                    alt={`${title} - Service Illustration | Vintage Tax & Accounting`}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Floating Widget */}
                                {widget && (
                                    <div className="absolute bottom-6 left-6 right-auto bg-white p-4 pr-8 rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] flex items-center gap-4 animate-float z-20 border border-slate-100 max-w-xs">
                                        <div className={`w-12 h-12 rounded-full ${accent} flex items-center justify-center text-white shadow-lg shrink-0`}>
                                            <Check size={24} strokeWidth={3} />
                                        </div>
                                        <div>
                                            <div className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-widest leading-tight">{widget.subtitle}</div>
                                            <div className="text-lg font-bold text-slate-900 leading-none mt-0.5">{widget.title}</div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Decorative Elements */}
                            <div className={`absolute -top-10 -right-10 w-40 h-40 ${accent.replace('bg-', 'bg-').replace('600', '100')} rounded-full blur-3xl -z-10 opacity-60`}></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-slate-100">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">Our Methodology</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">A structured approach ensuring accuracy and strategic advantage.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {process.map((step, i) => (
                        <div key={i} className="relative group">
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg hover:bg-white">
                                <div className="text-6xl font-black text-slate-200 absolute top-4 right-4 z-0 group-hover:text-primary-50 transition-colors">{step.step}</div>
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
            <div className="bg-slate-900 py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800 skew-x-12 translate-x-12 opacity-50"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2 font-serif">Ready to optimize your financial strategy?</h2>
                        <p className="text-slate-400 text-lg">Schedule a discovery call with our senior partners today.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-full transition-all shadow-lg whitespace-nowrap"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default ServiceDetail;
