import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import ServiceDetail from './components/ServiceDetail';
import { PageState } from './types';
import { TrendingUp, PieChart, Calculator, Users, ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageState>(PageState.HOME);

  // Handle simple hash-based routing for direct linking capability
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'services') setCurrentPage(PageState.SERVICES);
      else if (hash === 'about') setCurrentPage(PageState.ABOUT);
      else if (hash === 'contact') setCurrentPage(PageState.CONTACT);
      else if (hash === 'ai') setCurrentPage(PageState.AI_ASSISTANT);
      else if (hash === 'tax-planning') setCurrentPage(PageState.SERVICE_TAX_PLANNING);
      else if (hash === 'accounting') setCurrentPage(PageState.SERVICE_ACCOUNTING);
      else if (hash === 'bookkeeping') setCurrentPage(PageState.SERVICE_BOOKKEEPING);
      else if (hash === 'payroll') setCurrentPage(PageState.SERVICE_PAYROLL);
      else if (hash === 'legal') setCurrentPage(PageState.SERVICE_LEGAL);
      else setCurrentPage(PageState.HOME);

      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check initial hash
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setPage = (page: PageState) => {
    setCurrentPage(page);
    let hash = '';
    if (page === PageState.SERVICES) hash = 'services';
    else if (page === PageState.ABOUT) hash = 'about';
    else if (page === PageState.CONTACT) hash = 'contact';
    else if (page === PageState.AI_ASSISTANT) hash = 'ai';
    else if (page === PageState.SERVICE_TAX_PLANNING) hash = 'tax-planning';
    else if (page === PageState.SERVICE_ACCOUNTING) hash = 'accounting';
    else if (page === PageState.SERVICE_BOOKKEEPING) hash = 'bookkeeping';
    else if (page === PageState.SERVICE_PAYROLL) hash = 'payroll';
    else if (page === PageState.SERVICE_LEGAL) hash = 'legal';
    window.location.hash = hash;
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-accent-200 selection:text-primary-900">
      <Navbar currentPage={currentPage} setPage={setPage} />

      <main className="flex-grow">
        {currentPage === PageState.HOME && <Home setPage={setPage} />}
        {currentPage === PageState.SERVICES && <ServicesPage />}
        {currentPage === PageState.ABOUT && <AboutPage />}
        {currentPage === PageState.CONTACT && <ContactPage />}
        {currentPage === PageState.AI_ASSISTANT && <AiAssistant />}

        {currentPage === PageState.SERVICE_TAX_PLANNING && (
          <ServiceDetail
            setPage={setPage}
            serviceId="tax-planning"
            title="Strategic Tax Planning"
            subtitle="Proactive strategies to minimize liability and maximize growth."
            description="Tax codes are complex, but your strategy shouldn't be. We move beyond simple compliance to architect a multi-year tax plan that aligns with your business goals. By analyzing current laws and anticipating future legislation, we position you to keep more of what you earn."
            image="https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=1920"
            icon={TrendingUp}
            benefits={[
              "Multi-Year Liability Forecasting",
              "Entity Structure Optimization",
              "Tax Credit & Deduction Discovery",
              "Retirement Planning Integration",
              "Quarterly Reviews & Adjustments"
            ]}
            process={[
              { step: '01', title: 'Analysis', desc: 'Deep dive into past returns and current financial structure.' },
              { step: '02', title: 'Strategy', desc: 'Developing a custom roadmap for tax efficiency.' },
              { step: '03', title: 'Implementation', desc: 'Executing legal strategies and filing necessary forms.' }
            ]}
          />
        )}

        {currentPage === PageState.SERVICE_ACCOUNTING && (
          <ServiceDetail
            setPage={setPage}
            serviceId="accounting"
            title="Full Cycle Accounting"
            subtitle="From transaction to spreadsheet, we handle your entire financial lifecycle."
            description="Modern business demands real-time financial intelligence. Our corporate accounting services go beyond simple bookkeeping to provide a clear operational picture of your company. We act as your outsourced financial department, ensuring accuracy and compliance at every step."
            image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1920"
            icon={PieChart}
            benefits={[
              "Month-End & Year-End Close",
              "Financial Statement Preparation",
              "KPI Tracking & Reporting",
              "Budgeting & Forecasting",
              "Virtual CFO Services"
            ]}
            process={[
              { step: '01', title: 'Setup', desc: 'Integrating your accounts with our secure cloud platforms.' },
              { step: '02', title: 'Monitor', desc: 'Continuous tracking of transactions and cash flow.' },
              { step: '03', title: 'Report', desc: 'Monthly executive summaries to guide your decisions.' }
            ]}
          />
        )}

        {currentPage === PageState.SERVICE_BOOKKEEPING && (
          <ServiceDetail
            setPage={setPage}
            serviceId="bookkeeping"
            title="Bookkeeping"
            subtitle="Meticulous record-keeping for absolute peace of mind."
            description="Accurate books are the foundation of a healthy business. We ensure every penny is accounted for, categorized correctly, and reconcilable. Say goodbye to receipt shoeboxes and spreadsheet headaches—we keep your financial house in perfect order."
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920"
            icon={Calculator}
            benefits={[
              "Daily Transaction Categorization",
              "Bank & Credit Card Reconciliation",
              "Accounts Payable & Receivable",
              "Expense Tracking",
              "Clean Audit Trails"
            ]}
            process={[
              { step: '01', title: 'Capture', desc: 'Automated receipt scanning and data entry.' },
              { step: '02', title: 'Reconcile', desc: 'Matching bank feeds to internal records.' },
              { step: '03', title: 'Organize', desc: 'Maintain clean ledgers ready for tax time.' }
            ]}
          />
        )}

        {currentPage === PageState.SERVICE_PAYROLL && (
          <ServiceDetail
            setPage={setPage}
            serviceId="payroll"
            title="Payroll Processing"
            subtitle="Seamless, compliant payment solutions for your team."
            description="Your people are your greatest asset, and paying them shouldn't be a struggle. We handle calculation, distribution, and tax withholding with precision. From W2s to 1099s, we ensure full compliance with federal and state labor laws."
            image="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=1920"
            icon={Users}
            benefits={[
              "Direct Deposit Management",
              "Federal & State Tax Filings",
              "Benefits Administration",
              "PTO & Leave Tracking",
              "Compliance Monitoring"
            ]}
            process={[
              { step: '01', title: 'Onboard', desc: 'Setting up employee profiles and tax information.' },
              { step: '02', title: 'Run', desc: 'Calculating hours, deductions, and net pay.' },
              { step: '03', title: 'File', desc: 'Submitting payroll taxes and reports to authorities.' }
            ]}
          />
        )}

        {currentPage === PageState.SERVICE_LEGAL && (
          <ServiceDetail
            setPage={setPage}
            serviceId="legal"
            title="Legal Compliances"
            subtitle="Navigating the complex regulatory landscape so you don't have to."
            description="Staying compliant effectively protects your business from costly penalties and legal exposure. We guide you through the maze of local, state, and federal regulations, handling everything from annual reports to license renewals."
            image="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=1920"
            icon={ShieldCheck}
            benefits={[
              "Annual Report Filings",
              "Business License Renewals",
              "Registered Agent Services",
              "Corporate Minutes & Resolutions",
              "Regulatory Alerts"
            ]}
            process={[
              { step: '01', title: 'Audit', desc: 'Reviewing current standing and identifying gaps.' },
              { step: '02', title: 'Action', desc: 'Filing necessary documents to restore or maintain status.' },
              { step: '03', title: 'Calendar', desc: 'Proactive scheduling of all future deadlines.' }
            ]}
          />
        )}
      </main>

      <Footer setPage={setPage} />
    </div>
  );
};

export default App;