
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <About />
      <Testimonials />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Index;
