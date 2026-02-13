import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Leadership from './components/Leadership';
import Services from './components/Services';
import OurServices from './components/OurServices';
import Workforce from './components/Workforce';
import CSR from './components/CSR';
import EssentialFunctions from './components/EssentialFunctions';
import CaseStudies from './components/CaseStudies';
import DownloadCenter from './components/DownloadCenter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Leadership />
      <Services />
      <OurServices />
      <Workforce />
      <CSR />
      <EssentialFunctions />
      <CaseStudies />
      <DownloadCenter />
      <Footer />
    </div>
  );
}

export default App;
