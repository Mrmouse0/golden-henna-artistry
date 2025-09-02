import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, Sparkles, Leaf } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Leaf,
      title: "Premium Henna Cones",
      description: "Natural, chemical-free henna cones with rich, long-lasting color",
      features: ["100% natural ingredients", "Dark stain guarantee", "Easy application"],
      price: "$12",
      unit: "per cone",
      image: "🌿",
    },
    {
      icon: Package,
      title: "Henna Powder",
      description: "Pure, finely sifted henna powder from Rajasthan for professional results",
      features: ["Finest quality powder", "Fresh batch monthly", "500g package"],
      price: "$25",
      unit: "per 500g",
      image: "🍃",
    },
    {
      icon: Sparkles,
      title: "Bridal Henna Kit",
      description: "Complete kit with everything needed for stunning bridal henna designs",
      features: ["Premium cones (5pc)", "Design templates", "Aftercare oil"],
      price: "$85",
      unit: "complete kit",
      image: "💎",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-henna-primary mb-6">
            Premium Products
          </h2>
          <p className="text-lg text-henna-primary/80 max-w-3xl mx-auto">
            Discover our carefully curated collection of premium henna products, 
            sourced directly from trusted artisans and crafted for exceptional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.title} 
              className="h-full border-henna-primary/10 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{product.image}</div>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-warm rounded-full flex items-center justify-center">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif text-henna-primary">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-henna-primary/70">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-henna-primary/80">
                      <div className="w-2 h-2 bg-henna-gold rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-henna-primary/10 pt-4">
                  
                  <Button variant="gold" className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="elegant" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;