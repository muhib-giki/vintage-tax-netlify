import AiAssistant from '@/components/AiAssistant';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Tax Assistant | Vintage Tax - Get Instant Tax Answers',
    description: 'Chat with Vincent, our AI tax assistant, for instant answers to your tax questions. Get professional guidance on tax planning, deductions, and accounting topics 24/7.',
    keywords: ['ai tax assistant', 'tax chatbot', 'tax questions', 'tax help online', 'virtual tax advisor'],
    openGraph: {
        title: 'AI Tax Assistant - Vintage Tax',
        description: 'Get instant answers to your tax questions with our AI-powered tax assistant.',
        type: 'website',
    },
};

export default function AiPage() {
    return <AiAssistant />;
}
