import ContactPage from '@/components/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Vintage Tax & Accounting - Get Expert Tax Help',
    description: 'Contact Vintage Tax & Accounting for professional tax planning, accounting, bookkeeping, and payroll services. Call (316) 773-4127 or schedule a free consultation today.',
    keywords: ['contact vintage tax', 'tax consultation', 'accounting services contact', 'tax help', 'free consultation'],
    openGraph: {
        title: 'Contact Vintage Tax & Accounting',
        description: 'Get in touch with our expert tax professionals. Free consultation available.',
        type: 'website',
    },
};

export default function Contact() {
    return <ContactPage />;
}
