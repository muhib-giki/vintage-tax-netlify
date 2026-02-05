import { TrendingUp, PieChart, Briefcase, Users, ShieldCheck } from 'lucide-react';

export const servicesData = [
    {
        id: 'tax-planning',
        title: 'Tax Planning',
        slug: 'tax-planning',
        subtitle: 'Proactive Wealth Preservation',
        icon: TrendingUp,
        description: 'Tax codes are complex, but your strategy shouldn\'t be. We move beyond simple compliance to architect a multi-year tax plan that aligns with your business goals. By analyzing current laws and anticipating future legislation, we position you to keep more of what you earn.',
        approach: 'We do not wait for April 15th. Our team conducts quarterly reviews of your financial picture—investments, business structure, and real estate holdings—to identify opportunities for reduction and deferral before the year closes.',
        deliverables: [
            'Multi-Year Liability Forecasting',
            'Entity Structure Optimization',
            'Tax Credit & Deduction Discovery',
            'Retirement Planning Integration',
            'Quarterly Reviews & Adjustments'
        ],
        benefits: [
            'Multi-Year Liability Forecasting',
            'Entity Structure Optimization',
            'Tax Credit & Deduction Discovery',
            'Retirement Planning Integration',
            'Quarterly Reviews & Adjustments'
        ],
        process: [
            { step: '01', title: 'Discovery', desc: 'We analyze your past returns and current financial standing.' },
            { step: '02', title: 'Strategy', desc: 'Our team architects a custom plan tailored to your goals.' },
            { step: '03', title: 'Execution', desc: 'Implementation of tax positions and filing of documents.' },
            { step: '04', title: 'Review', desc: 'Post-filing analysis and forward-looking adjustments.' }
        ],
        image: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80',
        accent: 'bg-primary-600',
        widget: { title: 'Tax Saved', subtitle: 'Guaranteed' }
    },
    {
        id: 'accounting',
        title: 'Accounting Services',
        slug: 'accounting',
        subtitle: 'Financial Clarity for Business',
        icon: PieChart,
        description: 'Modern business demands real-time financial intelligence. Our corporate accounting services go beyond bookkeeping to provide a clear operational picture of your company. We handle the numbers so you can focus on strategy and growth.',
        approach: 'We integrate cloud-based accounting systems with your operations for seamless data flow. Our month-end close process is rigorous, ensuring your financial statements are audit-ready at any moment.',
        deliverables: [
            'Month-End & Year-End Close',
            'Financial Statement Preparation',
            'KPI Tracking & Reporting',
            'Budgeting & Forecasting',
            'Virtual CFO Services'
        ],
        benefits: [
            'Month-End & Year-End Close',
            'Financial Statement Preparation',
            'KPI Tracking & Reporting',
            'Budgeting & Forecasting',
            'Virtual CFO Services'
        ],
        process: [
            { step: '01', title: 'Discovery', desc: 'We analyze your past returns and current financial standing.' },
            { step: '02', title: 'Strategy', desc: 'Our team architects a custom plan tailored to your goals.' },
            { step: '03', title: 'Execution', desc: 'Implementation of tax positions and filing of documents.' },
            { step: '04', title: 'Review', desc: 'Post-filing analysis and forward-looking adjustments.' }
        ],
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
        accent: 'bg-blue-600',
        widget: { title: 'Audit Ready', subtitle: 'Always' }
    },
    {
        id: 'bookkeeping',
        title: 'Bookkeeping',
        slug: 'bookkeeping',
        subtitle: 'Meticulous Record-Keeping',
        icon: Briefcase,
        description: 'Accurate books are the foundation of a healthy business. We ensure every penny is accounted for, categorized correctly, and reconcilable. Say goodbye to receipt shoeboxes and spreadsheet headaches—we keep your financial house in perfect order.',
        approach: 'We utilize automated data capture tools and bank feeds to maintain real-time ledgers. Our team reconciles accounts weekly to catch discrepancies early and ensure your data is always tax-ready.',
        deliverables: [
            'Daily Transaction Categorization',
            'Bank & Credit Card Reconciliation',
            'Accounts Payable & Receivable',
            'Expense Tracking',
            'Clean Audit Trails'
        ],
        benefits: [
            'Daily Transaction Categorization',
            'Bank & Credit Card Reconciliation',
            'Accounts Payable & Receivable',
            'Expense Tracking',
            'Clean Audit Trails'
        ],
        process: [
            { step: '01', title: 'Discovery', desc: 'We analyze your past returns and current financial standing.' },
            { step: '02', title: 'Strategy', desc: 'Our team architects a custom plan tailored to your goals.' },
            { step: '03', title: 'Execution', desc: 'Implementation of tax positions and filing of documents.' },
            { step: '04', title: 'Review', desc: 'Post-filing analysis and forward-looking adjustments.' }
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
        accent: 'bg-emerald-600',
        widget: { title: 'Books Clean', subtitle: 'Real-time' }
    },
    {
        id: 'payroll',
        title: 'Payroll Processing',
        slug: 'payroll',
        subtitle: 'Seamless Team Payment',
        icon: Users,
        description: 'Your people are your greatest asset, and paying them shouldn\'t be a struggle. We handle calculation, distribution, and tax withholding with precision. From W2s to 1099s, we ensure full compliance with federal and state labor laws.',
        approach: 'We set up tailored payroll schedules and automated direct deposits. Our system automatically calculates and files all necessary payroll taxes, so you never have to worry about missing a deadline or miscalculating a deduction.',
        deliverables: [
            'Direct Deposit Management',
            'Federal & State Tax Filings',
            'Benefits Administration',
            'PTO & Leave Tracking',
            'Compliance Monitoring'
        ],
        benefits: [
            'Direct Deposit Management',
            'Federal & State Tax Filings',
            'Benefits Administration',
            'PTO & Leave Tracking',
            'Compliance Monitoring'
        ],
        process: [
            { step: '01', title: 'Discovery', desc: 'We analyze your past returns and current financial standing.' },
            { step: '02', title: 'Strategy', desc: 'Our team architects a custom plan tailored to your goals.' },
            { step: '03', title: 'Execution', desc: 'Implementation of tax positions and filing of documents.' },
            { step: '04', title: 'Review', desc: 'Post-filing analysis and forward-looking adjustments.' }
        ],
        image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80',
        accent: 'bg-indigo-600',
        widget: { title: 'Paid On Time', subtitle: 'Every Cycle' }
    },
    {
        id: 'legal',
        title: 'Legal Compliance',
        slug: 'legal',
        subtitle: 'Risk Mitigation & Governance',
        icon: ShieldCheck,
        description: 'Staying compliant effectively protects your business from costly penalties and legal exposure. We guide you through the maze of local, state, and federal regulations, handling everything from annual reports to license renewals.',
        approach: 'We perform an initial compliance audit to identify any gaps. Then, we establish a compliance calendar and take over the filing of all recurring reports, acting as your registered agent to ensure no document goes unnoticed.',
        deliverables: [
            'Annual Report Filings',
            'Business License Renewals',
            'Registered Agent Services',
            'Corporate Minutes & Resolutions',
            'Regulatory Alerts'
        ],
        benefits: [
            'Annual Report Filings',
            'Business License Renewals',
            'Registered Agent Services',
            'Corporate Minutes & Resolutions',
            'Regulatory Alerts'
        ],
        process: [
            { step: '01', title: 'Discovery', desc: 'We analyze your past returns and current financial standing.' },
            { step: '02', title: 'Strategy', desc: 'Our team architects a custom plan tailored to your goals.' },
            { step: '03', title: 'Execution', desc: 'Implementation of tax positions and filing of documents.' },
            { step: '04', title: 'Review', desc: 'Post-filing analysis and forward-looking adjustments.' }
        ],
        image: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80',
        accent: 'bg-rose-600',
        widget: { title: 'Risk Averted', subtitle: 'Compliant' }
    }
];
