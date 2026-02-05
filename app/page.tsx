import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vintage Tax & Accounting | Professional Tax Planning & Accounting Services',
    description: 'Premier tax and accounting firm serving Kansas, Missouri, Illinois, and Mississippi. Specialize in proactive tax planning, bookkeeping, and payroll for businesses.',
    alternates: {
        canonical: '/',
    },
};

export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Partners />
            <Testimonials />
            <CallToAction />
        </main>
    );
}
