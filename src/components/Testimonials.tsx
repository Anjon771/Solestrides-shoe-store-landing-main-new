import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  image?: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      comment: "These are the most comfortable shoes I've ever worn! Worth every penny and the customer service was exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      comment: "The quality is outstanding! I've had my Urban Runners for over a year now and they still look brand new.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      comment: "Not only are these shoes stylish, but they're also incredibly durable. I wear them almost daily and they've held up amazingly well.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={i < rating ? "currentColor" : "none"}
        stroke={i < rating ? "none" : "currentColor"}
        className={`w-4 h-4 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-burgundy-50">
      <div className="custom-container">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Customers Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it – here's what our satisfied customers have to say about SoleStrides shoes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-burgundy-100"
                    />
                  )}
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
