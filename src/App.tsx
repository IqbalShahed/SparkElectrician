import React, { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

// Lazy load components that are not immediately visible for better initial load performance
const Services = lazy(() => import('./components/Services'));
const ElectricianInfo = lazy(() => import('./components/ElectricianInfo'));
const Certificates = lazy(() => import('./components/Certificates'));
const Stats = lazy(() => import('./components/Stats'));
const Process = lazy(() => import('./components/Process'));
const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

const LoadingFallback = () => (
  <div className="w-full py-20 flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white font-sans selection:bg-yellow-500 selection:text-black">
        <TopBar />
        <Header />
        <Navbar />
        <Hero />
        <Features />
        
        <Suspense fallback={<LoadingFallback />}>
          <Services />
          <ElectricianInfo />
          <Certificates />
          <Stats />
          <Process />
          <Pricing />
          <Contact />
          <Footer />
          <WhatsAppButton />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
