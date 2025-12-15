import React, { useEffect, useState, useRef } from 'react';
import { PageState } from '../types';
import { ArrowRight, Sparkles, CheckCircle2, PenTool, Shield, FileText, TrendingUp, MousePointer2, Phone, Calendar, Mail } from 'lucide-react';

interface HeroProps {
   setPage: (page: PageState) => void;
}

const SigningAnimation = () => {
   return (
      <div className="relative w-full max-w-md aspect-square perspective-1000">
         {/* Floating Container */}
         <div className="relative w-full h-full transform rotate-y-12 rotate-x-6 transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-3 preserve-3d">

            {/* Background Paper Stack Layers */}
            <div className="absolute top-8 left-8 w-3/4 h-[90%] bg-white/10 backdrop-blur-[2px] rounded-xl border border-white/10 shadow-xl transform translate-z-[-20px]"></div>
            <div className="absolute top-4 left-4 w-3/4 h-[90%] bg-white/20 backdrop-blur-[4px] rounded-xl border border-white/20 shadow-xl transform translate-z-[-10px]"></div>

            {/* Main Document */}
            <div className="absolute top-0 left-0 w-3/4 h-[90%] bg-gradient-to-b from-white to-slate-50 rounded-xl shadow-[20px_30px_60px_rgba(0,0,0,0.3)] border border-slate-100 overflow-hidden flex flex-col transform translate-z-0">

               {/* Document Header */}
               <div className="h-16 border-b border-slate-100 bg-slate-50/50 p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary-600/20">
                     <FileText size={16} />
                  </div>
                  <div className="flex flex-col">
                     <div className="h-2 w-24 bg-slate-800 rounded-full opacity-20 mb-1"></div>
                     <div className="h-1.5 w-16 bg-slate-800 rounded-full opacity-10"></div>
                  </div>
                  <div className="ml-auto px-2 py-0.5 bg-amber-100 text-amber-700 text-[0.5rem] font-bold uppercase rounded tracking-wider">Pending</div>
               </div>

               {/* Document Body */}
               <div className="p-6 space-y-4 flex-1 relative">
                  {/* Skeleton Lines */}
                  <div className="space-y-2 opacity-30">
                     <div className="h-2 bg-slate-800 rounded-full w-full"></div>
                     <div className="h-2 bg-slate-800 rounded-full w-5/6"></div>
                     <div className="h-2 bg-slate-800 rounded-full w-4/6"></div>
                  </div>

                  <div className="pt-4 opacity-30">
                     <div className="h-2 bg-slate-800 rounded-full w-full"></div>
                     <div className="h-2 bg-slate-800 rounded-full w-1/2"></div>
                  </div>

                  {/* Financial Data Visualization */}
                  <div className="mt-4 p-3 bg-slate-50 rounded border border-slate-100 flex items-end gap-2 h-24 relative overflow-hidden">
                     {[30, 50, 40, 70, 55].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary-100 rounded-t-sm relative overflow-hidden" style={{ height: '100%' }}>
                           <div
                              className="absolute bottom-0 left-0 w-full bg-primary-500 transition-all duration-1000 ease-in-out"
                              style={{
                                 height: `${h}%`,
                                 animation: `chartGrow 2s infinite alternate ${i * 0.2}s`
                              }}
                           ></div>
                        </div>
                     ))}
                  </div>

                  {/* Signature Section */}
                  <div className="absolute bottom-8 left-6 right-6">
                     <div className="flex justify-between items-end">
                        <div className="relative z-10">
                           <div className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-wider mb-1">Sign Here</div>
                           <div className="w-32 h-12 border-b-2 border-slate-200 relative">
                              {/* The SVG Signature Line */}
                              <svg className="absolute -bottom-2 left-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 140 50">
                                 <path
                                    d="M 5 30 Q 25 10 40 30 T 70 30 T 100 20 T 130 35"
                                    fill="none"
                                    stroke="#0284c7"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className="animate-signature"
                                 />
                              </svg>
                           </div>
                        </div>

                        {/* Stamp Mark */}
                        <div className="absolute right-0 bottom-2 w-20 h-20 border-[3px] border-accent-600 rounded-full flex items-center justify-center opacity-0 animate-stamp-appear z-0">
                           <div className="w-[90%] h-[90%] border border-accent-600 rounded-full flex items-center justify-center">
                              <span className="text-accent-600 font-black text-[0.6rem] uppercase -rotate-12 tracking-widest">Verified</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* The Floating Pen */}
               <div className="absolute z-50 animate-pen-writing pointer-events-none" style={{ top: '65%', left: '20%' }}>
                  <div className="relative">
                     {/* Pen Body */}
                     <div className="w-3 h-24 bg-slate-800 rounded-b-full rounded-t-md shadow-2xl origin-bottom-left transform rotate-[30deg] relative z-10">
                        <div className="absolute bottom-0 w-full h-4 bg-accent-500 rounded-b-full"></div>
                        <div className="absolute top-0 w-full h-8 bg-slate-700 rounded-t-md"></div>
                     </div>
                     {/* Pen Shadow */}
                     <div className="absolute bottom-0 left-2 w-3 h-12 bg-black/20 blur-sm transform skew-x-12 rotate-[30deg] -z-10"></div>
                  </div>
               </div>

            </div>

            {/* Floating Status Badges */}
            <div className="absolute -right-2 top-12 bg-white p-2 rounded-lg shadow-lg animate-float border border-slate-100 flex items-center gap-2 z-20">
               <div className="bg-green-100 p-1 rounded text-green-600"><CheckCircle2 size={16} /></div>
               <div className="text-[0.6rem] font-bold text-slate-700">IRS Approved</div>
            </div>

            <div className="absolute -left-6 bottom-24 bg-white p-2 rounded-lg shadow-lg animate-float-delayed border border-slate-100 flex items-center gap-2 z-20">
               <div className="bg-blue-100 p-1 rounded text-blue-600"><Shield size={16} /></div>
               <div className="text-[0.6rem] font-bold text-slate-700">Secure</div>
            </div>

         </div>

         <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        
        @keyframes signatureWrite {
           0% { stroke-dashoffset: 300; opacity: 0; }
           10% { opacity: 1; }
           45% { stroke-dashoffset: 0; }
           100% { stroke-dashoffset: 0; opacity: 1; }
        }
        
        .animate-signature {
           stroke-dasharray: 300;
           stroke-dashoffset: 300;
           animation: signatureWrite 4s ease-in-out infinite;
        }

        @keyframes penMove {
           0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
           5% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
           /* Writing motion */
           10% { transform: translate(10px, -10px) rotate(-5deg); }
           15% { transform: translate(20px, 0px) rotate(5deg); }
           20% { transform: translate(30px, -15px) rotate(-5deg); }
           25% { transform: translate(40px, 0px) rotate(5deg); }
           30% { transform: translate(50px, -10px) rotate(-5deg); }
           35% { transform: translate(60px, 0px) rotate(5deg); }
           40% { transform: translate(70px, -5px) rotate(-5deg); }
           45% { transform: translate(80px, 0px) rotate(0deg); } /* Finished writing */
           
           /* Move away */
           55% { transform: translate(100px, -50px) rotate(-20deg); opacity: 0; }
           100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
        }

        .animate-pen-writing {
           animation: penMove 4s ease-in-out infinite;
        }

        @keyframes stampScale {
           0%, 45% { opacity: 0; transform: scale(2) rotate(20deg); }
           50% { opacity: 1; transform: scale(1) rotate(-12deg); } /* Slam */
           55% { transform: scale(1.1) rotate(-12deg); } /* Bounce */
           60% { transform: scale(1) rotate(-12deg); }
           90% { opacity: 1; }
           100% { opacity: 0; }
        }

        .animate-stamp-appear {
           animation: stampScale 4s ease-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-float-delayed { animation: float 5s ease-in-out 2.5s infinite; }
        
        @keyframes chartGrow {
           0% { height: 20%; }
           100% { height: 90%; }
        }
      `}</style>
      </div>
   );
};

const Hero: React.FC<HeroProps> = ({ setPage }) => {
   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         // Calculate mouse position relative to the center of the screen (-1 to 1)
         setMousePos({
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: (e.clientY / window.innerHeight) * 2 - 1
         });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
   }, []);

   return (
      <div className="relative bg-primary-950 text-white overflow-hidden min-h-[700px] flex items-center">

         {/* --- Interactive Background Layers --- */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Moving Grid */}
            <div
               className="absolute inset-[-50%] w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04]"
               style={{
                  transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) rotate(-2deg)`,
                  transition: 'transform 0.1s ease-out'
               }}
            ></div>

            {/* Gradient Orbs - Parallax Effect */}
            <div
               className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary-700/30 rounded-full blur-[100px] mix-blend-screen"
               style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
            ></div>
            <div
               className="absolute bottom-[-20%] left-[-20%] w-[700px] h-[700px] bg-accent-800/20 rounded-full blur-[80px] mix-blend-screen"
               style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}
            ></div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
               <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-400 rounded-full animate-pulse opacity-40"></div>
               <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-300 rounded-full animate-pulse opacity-20 delay-700"></div>
               <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-60 delay-300"></div>
            </div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

               {/* Left Content */}
               <div className="max-w-3xl relative z-20 pt-4 lg:pt-0">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-400 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm animate-fade-in-up">
                     <Sparkles size={14} className="text-accent-400" />
                     <span>VIRTUAL & OUTSOURCED ACCOUNTING SOLUTIONS</span>
                  </div>

                  {/* SEO OPTIMIZED H1 */}
                  <h1 className="text-3xl md:text-5xl font-serif font-bold leading-[1.1] mb-4 md:mb-6 animate-fade-in-up [animation-delay:200ms] opacity-0 text-white">
                     Maximize Your Bottom Line<br />
                     <span>by outsourcing your </span> <br />
                     <span>books to Vintage.</span>
                  </h1>

                  {/* Subtext */}
                  <p className="text-base md:text-xl text-slate-300 mb-4 md:mb-6 leading-relaxed max-w-lg animate-fade-in-up [animation-delay:400ms] opacity-0">
                     Gain total peace of mind with a financial partner you can trust. We deliver monthly bookkeeping, seamless payroll, and proactive tax preparation—giving you efficiency and guaranteed compliance without the high cost.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:600ms] opacity-0 mb-8">
                     <button
                        onClick={() => setPage(PageState.CONTACT)}
                        className="group px-6 py-3 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-accent-500/30 hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
                     >
                        <Mail size={20} />
                        <span>Get Your Free Consultation</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </button>

                     <a
                        href="tel:+15551234567"
                        className="group relative px-6 py-3 bg-white text-slate-900 font-bold rounded-full transition-all hover:bg-slate-100 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2 justify-center whitespace-nowrap"
                     >
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                           <Phone size={16} />
                        </div>
                        <span>Free Consultation Call</span>
                     </a>
                  </div>

                  {/* Social Proof */}
                  <div className="flex items-center gap-4 animate-fade-in-up [animation-delay:1000ms] opacity-0">
                     <div className="flex -space-x-4">
                        {[1, 2, 3].map(i => (
                           <div key={i} className="w-12 h-12 rounded-full border-2 border-primary-950 bg-slate-800 overflow-hidden relative z-0 hover:z-10 hover:scale-110 transition-transform">
                              <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Client" className="w-full h-full object-cover" />
                           </div>
                        ))}
                        <div className="w-12 h-12 rounded-full border-2 border-primary-950 bg-primary-800 flex items-center justify-center text-xs font-bold relative z-0">
                           +2k
                        </div>
                     </div>
                     <div className="text-sm text-primary-200">
                        <div className="flex text-accent-400 mb-1">★★★★★</div>
                        <span className="opacity-80">Trusted by leaders</span>
                     </div>
                  </div>
               </div>

               {/* Right Content - Animation Container */}
               <div className="flex items-center justify-center animate-slide-in-right [animation-delay:400ms] opacity-0 h-full relative">
                  {/* Background Glow behind animation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[100px]"></div>

                  <SigningAnimation />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;