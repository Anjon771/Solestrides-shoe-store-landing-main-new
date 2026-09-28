
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About SoleStrides</h2>
            <p className="text-gray-600 mb-4 text-lg">
              Founded in 2010 with a passion for quality craftsmanship, SoleStrides has been committed to creating exceptional footwear that combines style, comfort, and durability.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              We believe that great shoes aren't just about looking good—they're about supporting your lifestyle and enhancing your daily experience. Every pair we create is designed with meticulous attention to detail, using only the finest materials sourced from responsible suppliers.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-burgundy-100 flex items-center justify-center text-burgundy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="ml-3 text-lg font-medium">Sustainable Materials</span>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-burgundy-100 flex items-center justify-center text-burgundy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="ml-3 text-lg font-medium">Handcrafted Quality</span>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-burgundy-100 flex items-center justify-center text-burgundy-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="ml-3 text-lg font-medium">Ethical Production</span>
              </div>
            </div>
            <Button className="mt-6" size="lg">Our Story</Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" 
                alt="Shoemaker crafting a shoe" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-burgundy-50 rounded-lg p-4 shadow-lg hidden md:block">
                <p className="text-burgundy-800 font-semibold">
                  "Each pair tells a story of craftsmanship and dedication."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
