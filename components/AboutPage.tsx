import React, { useEffect, useState, useRef } from 'react';
import { Clock, Users, Award, CheckCircle2, ArrowRight, Target, Shield, Landmark, BookOpen, History } from 'lucide-react';

// Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">

      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-primary-950 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1455384475541-61424a4d7038?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 fixed-bg-effect"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/40 to-primary-950"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up [animation-delay:200ms] leading-tight">
            A Legacy of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-200">Unwavering Trust</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            At Vintage Tax, we believe that modern financial success requires more than just compliance. We fuse cutting-edge financial architecture with a client-first vision, empowering you to build legacy offering clarity, strategy, and unwavering support for your financial future.
          </p>
        </div>
      </div>

      {/* --- MISSION & STORY --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-serif font-bold text-primary-900 mb-6">Strategic Financial Architecture</h2>
            <div className="w-20 h-1 bg-accent-500 mb-8"></div>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We don't just file taxes; we engineer financial roadmaps. Our philosophy is rooted in the belief that your financial data is the most powerful tool you have for strategic positioning. Every number tells a story about your past performance and your future potential.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              In a complex economic landscape, you need more than an accountant—you need a strategic partner. We leverage modern BPO solutions and advanced analytics to transform your compliance obligations into opportunities for growth, capital efficiency, and market leadership.
            </p>

            <div className="flex flex-col gap-4 border-l-2 border-primary-100 pl-6">
              <blockquote className="text-xl font-serif italic text-primary-800">
                "Integrity is doing the right thing, even when no one is watching. Accuracy is doing the right thing, down to the last cent."
              </blockquote>
              <cite className="text-sm font-bold text-accent-600 uppercase tracking-wide not-italic">— Eleanor Vance, Founder</cite>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-accent-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
              alt="Team Meeting"
              className="relative rounded-2xl shadow-2xl border border-white w-full object-cover h-[500px] z-10"
            />
          </div>
        </div>
      </div>

      {/* --- STATS STRIP --- */}
      <div className="bg-primary-950 py-16 border-y border-primary-900 relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-primary-800">
            <div className="pt-8 md:pt-0">
              <div className="text-5xl font-serif font-bold text-white mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-accent-400 font-bold uppercase tracking-widest text-xs">Client Dedication</p>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl font-serif font-bold text-white mb-2">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <p className="text-accent-400 font-bold uppercase tracking-widest text-xs">Support Availability</p>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl font-serif font-bold text-white mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-accent-400 font-bold uppercase tracking-widest text-xs">Partner Integrations</p>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-5xl font-serif font-bold text-white mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <p className="text-accent-400 font-bold uppercase tracking-widest text-xs">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- TIMELINE --- */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">The Vintage Advantage</h2>
            <p className="text-slate-600">Why leading businesses choose us as their growth partner.</p>
          </div>

          <div className="relative border-l-2 border-primary-200 ml-4 md:ml-1/2 space-y-12 pl-8 md:pl-0">
            {[
              { year: 'Quality', title: 'Quality of Services', desc: 'We adhere to the highest industry standards, ensuring that every financial report and tax filing is accurate, reliable, and audit-ready.' },
              { year: 'Timely', title: 'Timely Delivery', desc: 'Deadlines are non-negotiable. Our proactive workflows ensure your documents are prepared and filed well ahead of schedule.' },
              { year: 'Efficient', title: 'Efficiency', desc: 'We utilize advanced BPO strategies to streamline your financial operations, reducing overhead while increasing output speed.' },
              { year: 'Effective', title: 'Effectiveness', desc: 'Our solutions are designed for impact—turning complex data into clear, actionable strategies that drive business growth.' },
              { year: 'Compliant', title: 'Ensure All Compliances', desc: 'Navigating the regulatory maze so you don\'t have to. We ensure full adherence to local, state, and federal laws.' }
            ].map((item, idx) => (
              <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
                {/* Dot */}
                <div className="absolute -left-[41px] md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full border-4 border-white bg-accent-500 shadow-md z-10"></div>

                {/* Date (Left or Right based on index) */}
                <div className={`mb-2 md:mb-0 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                  <span className="text-4xl font-serif font-bold text-primary-200">{item.year}</span>
                </div>

                {/* Content (Opposite side) */}
                <div className={`${idx % 2 === 0 ? 'md:col-start-2 md:pl-12' : 'md:row-start-1 md:text-right md:pr-12'}`}>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- VALUES & LEADERSHIP --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Values */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-primary-900 mb-8">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Integrity", desc: "Uncompromising ethical standards in every filing." },
                { icon: Target, title: "Precision", desc: "Accuracy down to the decimal. No errors, no excuses." },
                { icon: Users, title: "Stewardship", desc: "Treating your wealth with the care of a guardian." },
                { icon: Landmark, title: "Vision", desc: "Looking beyond today to secure your tomorrow." }
              ].map((val, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                    <val.icon size={20} />
                  </div>
                  <h4 className="font-bold text-primary-900 mb-2">{val.title}</h4>
                  <p className="text-sm text-slate-500">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative rounded-3xl overflow-hidden min-h-[400px]">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" alt="Office Detail" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary-900/60 flex items-center justify-center p-12 text-center">
              <div className="border border-white/30 p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                <BookOpen size={48} className="text-accent-400 mx-auto mb-6" />
                <p className="text-white text-xl font-serif italic">
                  "The hardest thing in the world to understand is the income tax."
                </p>
                <p className="text-accent-300 mt-4 font-bold text-sm uppercase tracking-widest">— Albert Einstein</p>
                <p className="text-white/60 text-xs mt-2">(Don't worry, we understand it for you.)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">Leadership Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">The partners dedicated to your financial success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Kevin", role: "CEO & Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" }, // Professional Man
            { name: "Muhibullah", role: "CTO & Managing Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" }, // Professional Man (Tech/Modern)
            { name: "Noor Ul Huda", role: "COO & Managing Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" } // Professional Woman
          ].map((member, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg cursor-pointer">
              <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent opacity-90"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-1 bg-accent-500 mb-4 w-0 group-hover:w-12 transition-all duration-500"></div>
                <h3 className="text-2xl font-bold font-serif mb-1">{member.name}</h3>
                <p className="text-primary-200 font-medium tracking-wide text-sm mb-4">{member.role}</p>
              </div>
            </div>
          ))}
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
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div >
  );
};

export default AboutPage;