import AboutPage from '@/components/AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Vintage Tax & Accounting - Expert Tax Solutions',
    description: 'Learn about Vintage Tax & Accounting, your trusted partner for professional tax planning, accounting, and financial services across Kansas, Missouri, Illinois, and Mississippi.',
    keywords: ['about vintage tax', 'tax accounting firm', 'professional tax services', 'accounting company', 'tax experts'],
    openGraph: {
        title: 'About Vintage Tax & Accounting',
        description: 'Professional tax and accounting services with over 20 years of experience serving businesses and individuals.',
        type: 'website',
    },
};

export default function About() {
    return <AboutPage />;
}
