import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import { PageState } from '../types';

interface HomeProps {
  setPage: (page: PageState) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <>
      <Hero setPage={setPage} />
      <Services setPage={setPage} />
      <Testimonials />
      <CallToAction setPage={setPage} />
    </>
  );
};

export default Home;