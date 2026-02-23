import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustedSection } from './components/sections/TrustedSection';
import { ShortFormSection } from './components/sections/ShortFormSection';
import { LongFormSection } from './components/sections/LongFormSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/layout/Footer';

export default function App() {
    return (
        <div className="app-container">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
        html  { scroll-behavior: smooth; }
        body  { background: #fff; overflow-x: hidden; }
        img   { max-width: 100%; display: block; }
      `}</style>
            <Navbar />
            <Hero />
            <TrustedSection />
            <ShortFormSection />
            <LongFormSection />
            <TestimonialsSection />
            <ServicesSection />
            <CTASection />
            <Footer />
        </div>
    );
}
