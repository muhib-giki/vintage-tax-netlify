import ServicesPage from '@/components/ServicesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | Vintage Tax & Accounting - Tax Planning, Accounting & More',
    description: 'Explore our comprehensive tax and accounting services including tax planning, bookkeeping, payroll management, business accounting, and legal entity formation across multiple states.',
    keywords: ['tax services', 'accounting services', 'bookkeeping', 'payroll', 'tax planning', 'business accounting'],
    openGraph: {
        title: 'Professional Tax & Accounting Services - Vintage Tax',
        description: 'Comprehensive tax planning, accounting, bookkeeping, and payroll services for businesses and individuals.',
        type: 'website',
    },
};

export default function Services() {
    return <ServicesPage />;
}
