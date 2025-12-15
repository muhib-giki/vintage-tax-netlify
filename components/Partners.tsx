import React from 'react';

const partners = [
    { name: 'QuickBooks', color: 'text-[#2CA01C]' },
    { name: 'Xero', color: 'text-[#13B5EA]' },
    { name: 'Gusto', color: 'text-[#C4362F]' },
    { name: 'ProConnect', color: 'text-[#0077C5]' },
    { name: 'H&R Block', color: 'text-[#72BE44]' },
    { name: 'TurboTax', color: 'text-[#365EB1]' },
    { name: 'NetSuite', color: 'text-[#005786]' },
    { name: 'Sage', color: 'text-[#00D600]' },
];

const Partners: React.FC = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
                    Trusted Partners & Integrations
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We work with industry-leading software to ensure your financial data is accurate, secure, and always up to date.
                </p>
            </div>

            <div className="relative w-full max-w-7xl mx-auto">
                {/* Gradient Masks for smooth fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white z-10"></div>

                <div className="flex overflow-hidden">
                    {/* Double the list to create seamless loop */}
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="mx-12 flex items-center justify-center min-w-[200px]"
                            >
                                {/* 
                  NOTE: In a production environment, these would be <img> tags with SVG logos.
                  For now, we use styled text as professional placeholders.
                */}
                                <span className={`text-4xl font-extrabold ${partner.color} opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-default`}>
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
