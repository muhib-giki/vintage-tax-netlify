import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { serviceLocations, getCitiesByState } from '../data/locations';

const ServiceAreas: React.FC = () => {
  const states = ['Kansas', 'Missouri', 'Illinois', 'Mississippi'];
  
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-xs font-bold tracking-wider uppercase mb-6">
            <MapPin size={14} />
            <span>Service Areas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
            Tax & Accounting Services Across Multiple States
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Vintage Tax provides professional tax planning, accounting, bookkeeping, and payroll services to businesses and individuals across Kansas, Missouri, Illinois, and Mississippi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {states.map((state) => {
            const cities = getCitiesByState(state);
            const stateAbbr = cities[0]?.stateAbbr || '';
            
            return (
              <div key={state} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900">{state}</h3>
                    <p className="text-sm text-slate-500">{stateAbbr}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {cities.map((location, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 size={16} className="text-accent-500 flex-shrink-0" />
                      <span className="text-sm">
                        {location.city}
                        {location.isCapital && (
                          <span className="ml-2 px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-bold rounded">
                            Capital
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-sm border border-slate-100 max-w-2xl">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Don't See Your City?
            </h3>
            <p className="text-slate-600 mb-6">
              We offer virtual and remote accounting services nationwide. Contact us to see how we can help your business, regardless of location.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact Us
              <MapPin size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;

