
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Eye, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const FeaturedProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Urban Runner",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
      category: "Running"
    },
    {
      id: 2,
      name: "Comfort Flex",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
      category: "Casual"
    },
    {
      id: 3,
      name: "Trail Blazer",
      price: 139.99,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
      category: "Hiking"
    },
    {
      id: 4,
      name: "Business Elite",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
      category: "Formal"
    },
    {
      id: 5,
      name: "Street Style",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
      category: "Casual"
    },
    {
      id: 6,
      name: "Active Sport",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1951&q=80",
      category: "Sport"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="custom-container">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Products</h2>
          <p className="text-gray-600">
            Explore our handpicked selection of this season's most popular styles, crafted with premium materials for maximum comfort and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-none">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Button variant="secondary" size="sm" className="gap-1">
                      <Eye className="h-4 w-4" /> Quick View
                    </Button>
                    <Button variant="secondary" size="sm" className="gap-1">
                      <ShoppingCart className="h-4 w-4" /> Add to Cart
                    </Button>
                  </div>
                </div>
                <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <CardContent className="pt-4">
                <h3 className="font-medium text-lg group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-burgundy-700 font-semibold">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 transition-colors">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
