
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, User } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // إغلاق القائمة عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-nav');
      const button = document.getElementById('menu-button');
      if (isMenuOpen && nav && !nav.contains(event.target as Node) && 
          button && !button.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-sm z-50">
      <div className="custom-container flex items-center justify-between h-16">
        <div className="flex items-center">
          <h1 className="font-heading font-bold text-2xl tracking-tight">SoleStrides</h1>
        </div>
        
        <button 
          id="menu-button"
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        
        <nav 
          id="mobile-nav"
          className={`
            ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 md:translate-x-0 md:opacity-100'} 
            md:flex fixed md:relative top-16 md:top-0 left-0 right-0 
            bg-white md:bg-transparent flex-col md:flex-row 
            items-start md:items-center space-y-4 md:space-y-0 
            space-x-0 md:space-x-8 p-4 md:p-0 border-b md:border-0
            transition-all duration-300 ease-in-out
          `}
        >
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors w-full md:w-auto p-2 rounded-lg hover:bg-gray-50 md:hover:bg-transparent">Home</a>
          <a href="#products" className="text-sm font-medium hover:text-primary transition-colors w-full md:w-auto p-2 rounded-lg hover:bg-gray-50 md:hover:bg-transparent">Products</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors w-full md:w-auto p-2 rounded-lg hover:bg-gray-50 md:hover:bg-transparent">About</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors w-full md:w-auto p-2 rounded-lg hover:bg-gray-50 md:hover:bg-transparent">Testimonials</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
            <User className="h-4 w-4" />
            Sign in
          </Button>
          <Button variant="default" size="sm" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Shop now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
