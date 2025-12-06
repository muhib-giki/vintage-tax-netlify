import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

// NOTE: This component is now a "Quick Contact" widget. 
// For the full page experience, see ContactPage.tsx

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="bg-primary-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full mix-blend-screen filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div>
            <h3 className="text-3xl font-serif font-bold mb-4">Ready to optimize your taxes?</h3>
            <p className="text-primary-200 mb-8 leading-relaxed">
               Drop us a quick line and our intake team will schedule a 15-minute discovery call at your convenience.
            </p>
            <div className="flex gap-4 text-sm font-medium text-primary-300">
               <span>• Free initial consultation</span>
               <span>• 24h Response time</span>
            </div>
         </div>

         <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl">
            {formStatus === 'success' ? (
               <div className="text-center py-8">
                  <CheckCircle2 size={48} className="text-accent-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Received!</h4>
                  <p className="text-slate-600 text-sm">We'll be in touch shortly.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-4 text-primary-600 text-sm font-bold">Reset</button>
               </div>
            ) : (
               <form onSubmit={handleSubmit} className="space-y-4">
                  <input required placeholder="Your Email" type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                  <textarea required placeholder="How can we help?" rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"></textarea>
                  <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-accent-600 hover:bg-accent-500 text-white font-bold py-3 rounded-lg transition-colors flex justify-center items-center gap-2">
                     {formStatus === 'submitting' ? 'Sending...' : 'Send Request'} <Send size={16} />
                  </button>
               </form>
            )}
         </div>
      </div>
    </div>
  );
};

export default Contact;