import React from 'react';
import { DollarSign } from 'lucide-react';
interface GridServiceItem {
  title: string;
  description: string;
  image: string;
  path: string;
}

const services: GridServiceItem[] = [
  {
    title: 'Strategic Tax Planning',
    description: 'Proactive multi-year forecasting utilizing Form 1040 and 1065 strategies to minimize liabilities.',
    // Image: Tax Forms / 1040
    image: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=800',
    path: '/services/tax-planning'
  },
  {
    title: 'Full Cycle Accounting',
    description: 'End-to-end management from general ledgers to C-suite financial reporting.',
    // Image: Calculator, Ledger, Financial Papers (Fixed broken link)
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    path: '/services/accounting'
  },
  {
    title: 'Bookkeeping',
    description: 'Meticulous record-keeping ensuring every penny is accurately tracked via modern software.',
    // Image: Laptop with software
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    path: '/services/bookkeeping'
  },
  {
    title: 'Payroll Processing',
    description: 'Seamless, compliant W2 & 1099 management ensuring your team is paid on time.',
    // Image: Stacks of Money / Financial Distribution
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800',
    path: '/services/payroll'
  },
  {
    title: 'Legal Compliances',
    description: 'Navigating complex regulatory frameworks so your business never misses a deadline.',
    // Image: Scale of Justice and Legal Documents/Books
    image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=800',
    path: '/services/legal'
  },
];

import Link from 'next/link';

interface ServicesProps { }

const Services: React.FC<ServicesProps> = () => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
            Vintage Services Tailored to Your Business
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We move beyond simple compliance to provide holistic financial structures that withstand scrutiny and foster growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
              <div className="h-56 relative">
                <img
                  src={service.image}
                  alt={`${service.title} - ${service.description.substring(0, 50)}...`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div>
                  <Link
                    href={service.path}
                    className="bg-primary-600 text-white font-bold py-2 px-6 rounded hover:bg-primary-700 transition-colors text-sm inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Custom Consultation Card - Styled to match grid but slightly highlighted or standard */}
          <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col relative group">
            <div className="h-56 bg-accent-600 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-accent-600">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent-500 rounded-full blur-3xl group-hover:bg-accent-400 transition-colors"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-accent-500 rounded-full blur-3xl group-hover:bg-accent-400 transition-colors"></div>
              </div>
              <DollarSign size={48} className="text-white relative z-10" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                Custom Consultation
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                Have a unique situation? Book a free discovery call with our senior partners to discuss your specific needs.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="bg-accent-600 text-white font-bold py-2 px-6 rounded hover:bg-accent-700 transition-colors text-sm inline-block"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;