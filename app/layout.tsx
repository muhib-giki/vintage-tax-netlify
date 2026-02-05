import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SchemaOrg, { organizationSchema, localBusinessSchema } from '../components/SchemaOrg';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://vintagetaxes.com'),
    title: {
        default: 'Vintage Tax & Accounting | Expert Tax Planning & Accounting Services',
        template: '%s | Vintage Tax & Accounting'
    },
    description: 'Professional tax planning, accounting, bookkeeping, and payroll services across Kansas, Missouri, Illinois, and Mississippi. Trust our experts for proactive wealth preservation and financial clarity.',
    keywords: ['tax planning', 'accounting services', 'bookkeeping', 'payroll services', 'business tax', 'tax experts KS', 'tax services MO', 'IRS audit support', 'corporate tax planning'],
    authors: [{ name: 'Vintage Tax & Accounting' }],
    creator: 'Vintage Tax & Accounting',
    publisher: 'Vintage Tax & Accounting',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Vintage Tax & Accounting | Professional Tax & Accounting Services',
        description: 'Expert tax planning and operational accounting for businesses and individuals across multiple states.',
        url: 'https://vintagetaxes.com',
        siteName: 'Vintage Tax & Accounting',
        images: [
            {
                url: '/og-image.jpg', // Placeholder, using default if not exists
                width: 1200,
                height: 630,
                alt: 'Vintage Tax & Accounting Logo and Team',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vintage Tax & Accounting | Expert Tax Solutions',
        description: 'Proactive tax planning and accounting services designed to help you keep more of what you earn.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <SchemaOrg data={organizationSchema} />
                <SchemaOrg data={localBusinessSchema} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
            </head>
            <body className="min-h-screen flex flex-col bg-white font-sans selection:bg-accent-200 selection:text-primary-900" suppressHydrationWarning>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
