
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the email to your backend/API
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our latest updates and exclusive offers.",
    });
    
    setEmail('');
  };

  return (
    <section className="py-20 bg-white">
      <div className="custom-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and be the first to know about new releases, exclusive discounts, and styling tips. Plus, get 10% off your first order!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
          </form>
          
          <p className="text-gray-400 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
