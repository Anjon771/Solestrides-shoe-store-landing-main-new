
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center z-0" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="custom-container relative z-10 pt-16 md:pt-0">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Step Into<br />Comfort & Style
          </h1>
          <p className="text-white/90 text-lg mb-8 max-w-md">
            Discover our premium collection of handcrafted shoes designed for the modern lifestyle.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/40 hover:bg-white/30">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
