import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import { PageState } from './types';

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
      </main>

      <Footer setPage={setPage} />
    </div>
  );
};

export default App;