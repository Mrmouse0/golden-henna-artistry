import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Bridal Henna",
      description: "Intricate traditional and contemporary designs for your special day",
      features: ["Full hand & feet designs", "Consultation included", "Touch-up session"],
      price: "Starting from $150",
      duration: "3-4 hours",
    },
    {
      icon: Sparkles,
      title: "Party & Events",
      description: "Beautiful henna art for celebrations, parties, and special occasions",
      features: ["Quick designs", "Group bookings", "Custom patterns"],
      price: "Starting from $25",
      duration: "15-30 minutes",
    },
    {
      icon: Star,
      title: "Festival Henna",
      description: "Traditional and modern designs for cultural festivals and ceremonies",
      features: ["Cultural patterns", "Symbolic designs", "Group discounts"],
      price: "Starting from $40",
      duration: "30-60 minutes",
    },
  ];

  return (
    <section id="services" className="py-20 bg-henna-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-henna-primary mb-6">
            Our Services
          </h2>
          <p className="text-lg text-henna-primary/80 max-w-3xl mx-auto">
            From intimate celebrations to grand festivities, we offer personalized henna artistry 
            that captures the beauty and significance of your special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="h-full border-henna-primary/10 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2 animate-fade-in-up bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-warm rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif text-henna-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-henna-primary/70">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-henna-primary/80">
                      <div className="w-2 h-2 bg-henna-gold rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-henna-primary/10 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="font-semibold text-henna-primary">{service.price}</div>
                      <div className="text-sm text-henna-primary/60">{service.duration}</div>
                    </div>
                  </div>
                  
                  <Button variant="elegant" className="w-full">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;