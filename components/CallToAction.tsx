import React from 'react';
import { Phone, ArrowRight, Calendar, Mail } from 'lucide-react';
import Link from 'next/link';

interface CallToActionProps { }

const CallToAction: React.FC<CallToActionProps> = () => {
    return (
        <div className="relative bg-slate-900 py-24 overflow-hidden isolate">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

            {/* Glowing orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-700/30 rounded-full blur-[100px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-[100px] translate-y-1/2"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-400 text-xs font-bold tracking-wider uppercase mb-8 backdrop-blur-sm">
                    <Calendar size={14} />
                    Start Your Journey
                </div>

                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                    Ready to Elevate Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-white">Financial Strategy?</span>
                </h2>

                <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Stop settling for generic advice. Connect with our senior advisors today for a personalized roadmap to tax efficiency and wealth preservation.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {/* Direct Call Button */}
                    <a
                        href="tel:+15551234567"
                        className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-full transition-all hover:bg-slate-100 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-3 min-w-[240px] justify-center"
                    >
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                            <Phone size={16} />
                        </div>
                        <span>Free Consultation Call</span>
                    </a>

                    {/* Direct Form Button */}
                    <Link
                        href="/contact"
                        className="group px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-accent-500/30 hover:scale-105 flex items-center gap-3 min-w-[240px] justify-center"
                    >
                        <Mail size={20} />
                        <span>Get Your Free Consultation</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <p className="mt-8 text-sm text-slate-400 font-medium">
                    No commitment required. 15-minute free initial assessment.
                </p>
            </div>
        </div>
    );
};

export default CallToAction;
