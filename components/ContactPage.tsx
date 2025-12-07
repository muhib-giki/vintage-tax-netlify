import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare, ChevronDown, ChevronUp, Send, CheckCircle2, Building2, Globe, AlertCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // Cast to any to satisfy TS for URLSearchParams constructor with FormData
        body: new URLSearchParams(formData as any).toString(),
      });
      setFormStatus('success');
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
    }
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      q: "What documents do I need for my first consultation?",
      a: "For the most productive session, please bring your previous year's tax return, current year financial statements (P&L/Balance Sheet), and any notices received from the IRS. Digital copies uploaded to our portal beforehand are preferred."
    },
    {
      q: "Do you offer remote services for out-of-state clients?",
      a: "Absolutely. While we are based in Boston, 60% of our clientele operates remotely. We utilize a secure, encrypted client portal for document exchange and hold meetings via Zoom or Teams."
    },
    {
      q: "How is your pricing structured?",
      a: "We believe in transparency. For tax compliance, we offer flat-fee pricing based on complexity. For advisory and fractional CFO services, we operate on a monthly retainer model tailored to your business needs."
    },
    {
      q: "Can you help with back-taxes or IRS disputes?",
      a: "Yes. Our IRS Representation team specializes in negotiation, Offer in Compromise (OIC), and penalty abatement. We act as your power of attorney so you never have to speak to an agent directly."
    }
  ];

  return (
    <div className="animate-fade-in bg-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-primary-950 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 fixed-bg-effect"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/60 to-primary-900/40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent-300 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
              <MessageSquare size={14} />
              We are here to help
            </div>
           <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up [animation-delay:200ms]">
             Let's Start a <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-white">Conversation</span>
           </h1>
           <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms]">
             Whether you need urgent audit defense or long-term wealth structuring, our team is ready to provide the clarity you deserve.
           </p>
        </div>
      </div>

      {/* --- CONTACT CHANNELS --- */}
      <div className="relative z-20 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: Building2, 
              title: "New Client Inquiries", 
              email: "advisory@vintagetax.com", 
              phone: "+1 (555) 123-4567",
              desc: "For consultations and proposals." 
            },
            { 
              icon: Globe, 
              title: "General Support", 
              email: "support@vintagetax.com", 
              phone: "+1 (555) 987-6543",
              desc: "For existing clients and billing." 
            },
            { 
              icon: Mail, 
              title: "Media & Careers", 
              email: "press@vintagetax.com", 
              phone: "+1 (555) 456-7890",
              desc: "For press kits and job openings." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl shadow-primary-900/5 border border-slate-100 group hover:-translate-y-1 transition-all duration-300">
               <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                 <item.icon size={24} />
               </div>
               <h3 className="text-xl font-bold text-primary-900 mb-2">{item.title}</h3>
               <p className="text-slate-500 text-sm mb-4">{item.desc}</p>
               <div className="space-y-1">
                 <a href={`mailto:${item.email}`} className="block text-primary-600 font-medium hover:text-accent-600 transition-colors">{item.email}</a>
                 <a href={`tel:${item.phone}`} className="block text-slate-600 hover:text-primary-600 transition-colors">{item.phone}</a>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MAIN FORM & LOCATION SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-2">Send us a Message</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and an associate will get back to you within 24 hours.</p>

              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-lg">
                {formStatus === 'success' ? (
                  <div className="text-center py-16 animate-fade-in">
                    <div className="w-20 h-20 bg-accent-50 text-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-2">Message Sent</h3>
                    <p className="text-slate-600">Thank you for reaching out. We will be in touch shortly.</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-8 text-primary-600 font-medium underline hover:text-primary-800"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                     {/* Hidden Input for Netlify Forms */}
                     <input type="hidden" name="form-name" value="contact" />
                     <input type="hidden" name="bot-field" />
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-primary-900">First Name</label>
                           <input 
                             name="firstName"
                             required 
                             type="text" 
                             className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" 
                             placeholder="Jane" 
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-bold text-primary-900">Last Name</label>
                           <input 
                             name="lastName"
                             required 
                             type="text" 
                             className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" 
                             placeholder="Doe" 
                           />
                        </div>
                     </div>
                     
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-primary-900">Email Address</label>
                        <input 
                          name="email"
                          required 
                          type="email" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" 
                          placeholder="jane@company.com" 
                        />
                     </div>

                     <div className="space-y-2">
                        <label className="text-sm font-bold text-primary-900">Topic</label>
                        <select 
                          name="topic"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        >
                           <option value="Individual Tax Planning">Individual Tax Planning</option>
                           <option value="Corporate Accounting">Corporate Accounting</option>
                           <option value="Audit Defense">Audit Defense</option>
                           <option value="Estate Planning">Estate Planning</option>
                           <option value="Other">Other</option>
                        </select>
                     </div>

                     <div className="space-y-2">
                        <label className="text-sm font-bold text-primary-900">Message</label>
                        <textarea 
                          name="message"
                          required 
                          rows={4} 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none" 
                          placeholder="Tell us about your financial situation..."
                        ></textarea>
                     </div>

                     {formStatus === 'error' && (
                       <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                         <AlertCircle size={16} />
                         <span>Something went wrong. Please try again later.</span>
                       </div>
                     )}

                     <button 
                       type="submit" 
                       disabled={formStatus === 'submitting'}
                       className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                     >
                       {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                       {!formStatus && <Send size={18} />}
                     </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Office Info & Map */}
            <div className="lg:col-span-5 space-y-8">
               
               {/* Map Card */}
               <div className="bg-slate-900 rounded-3xl overflow-hidden relative min-h-[300px] group shadow-2xl">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                     <div className="flex items-center gap-2 text-accent-400 mb-2 font-bold uppercase tracking-wider text-xs">
                        <MapPin size={14} />
                        Headquarters
                     </div>
                     <h3 className="text-2xl font-serif font-bold text-white mb-1">Boston Office</h3>
                     <p className="text-slate-300 text-sm">420 Heritage Lane, Suite 100<br/>Boston, MA 02108</p>
                     
                     <a href="#" className="inline-flex items-center gap-2 mt-4 text-white font-bold text-sm hover:text-accent-400 transition-colors">
                        Get Directions <ArrowRight size={14} />
                     </a>
                  </div>
               </div>

               {/* Hours Card */}
               <div className="bg-primary-50 rounded-3xl p-8 border border-primary-100">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2 bg-white rounded-lg text-primary-600 shadow-sm">
                        <Clock size={20} />
                     </div>
                     <h3 className="font-bold text-lg text-primary-900">Office Hours</h3>
                  </div>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center text-sm border-b border-primary-100 pb-2">
                        <span className="text-slate-600 font-medium">Monday - Friday</span>
                        <span className="text-primary-900 font-bold">9:00 AM - 6:00 PM</span>
                     </div>
                     <div className="flex justify-between items-center text-sm border-b border-primary-100 pb-2">
                        <span className="text-slate-600 font-medium">Saturday</span>
                        <span className="text-primary-900 font-bold">10:00 AM - 2:00 PM</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600 font-medium">Sunday</span>
                        <span className="text-red-500 font-bold">Closed</span>
                     </div>
                  </div>
               </div>

               {/* Parking Info */}
               <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-4">
                  <div className="shrink-0 p-3 bg-accent-50 text-accent-600 rounded-full h-fit">
                     <CheckCircle2 size={20} />
                  </div>
                  <div>
                     <h4 className="font-bold text-primary-900 text-sm mb-1">Valet Parking Available</h4>
                     <p className="text-xs text-slate-500 leading-relaxed">
                        Complimentary valet parking is available for all clients at the main entrance on Heritage Lane.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="bg-slate-50 py-24 border-t border-slate-200">
         <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">Frequently Asked Questions</h2>
               <p className="text-slate-600">Common inquiries about our process and services.</p>
            </div>

            <div className="space-y-4">
               {faqs.map((faq, index) => (
                  <div 
                     key={index} 
                     className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${activeAccordion === index ? 'border-primary-200 shadow-lg ring-1 ring-primary-100' : 'border-slate-200 hover:border-primary-200'}`}
                  >
                     <button 
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center p-6 text-left"
                     >
                        <span className={`font-bold text-lg ${activeAccordion === index ? 'text-primary-700' : 'text-primary-900'}`}>{faq.q}</span>
                        {activeAccordion === index ? <ChevronUp size={20} className="text-primary-600" /> : <ChevronDown size={20} className="text-slate-400" />}
                     </button>
                     <div className={`px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {faq.a}
                     </div>
                  </div>
               ))}
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

export default ContactPage;