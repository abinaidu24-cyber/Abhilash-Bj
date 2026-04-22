/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Features from './components/Features';
import Logistics from './components/LogisticsSec';
import Quality from './components/Quality';
import GlobalFocus from './components/GlobalFocus';
import RFQForm from './components/RFQForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageSquare } from 'lucide-react';

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Products />
      <Logistics />
      <Quality />
      <GlobalFocus />
      <RFQForm />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Theme-Specific */}
      <a 
        href="https://wa.me/910000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-xs flex items-center gap-2 shadow-xl hover:scale-105 transition-transform z-50 uppercase tracking-widest"
      >
        <MessageSquare size={16} />
        Chat on WhatsApp
      </a>
    </main>
  );
}
