import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Phone, Mail, ArrowLeft, Check, Star, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-henna-light/10 via-white to-henna-gold/5">
      {/* Navigation Header */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-henna-primary/10 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center text-henna-primary hover:text-henna-gold transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h2 className="text-2xl font-serif font-bold text-henna-primary">
              Golden Henna
            </h2>
            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        </div>
      </nav>

      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <Sparkles className="w-6 h-6 text-henna-gold mr-2" />
              <Badge variant="outline" className="border-henna-gold text-henna-gold">
                Premium Henna Experience
              </Badge>
              <Sparkles className="w-6 h-6 text-henna-gold ml-2" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-henna-primary mb-6">
              Book Your <span className="text-henna-gold">Henna</span> Session
            </h1>
            <p className="text-xl text-henna-primary/80 max-w-3xl mx-auto leading-relaxed">
              Transform your special moments with our exquisite henna artistry. 
              From intricate bridal designs to festive celebrations, we create memories that last.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-warm border-henna-primary/10 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-serif text-henna-primary flex items-center">
                    <Calendar className="w-7 h-7 text-henna-gold mr-3" />
                    Complete Your Booking
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Please fill out all details for your perfect henna experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-henna-primary border-b border-henna-primary/20 pb-2">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-henna-primary mb-2 block">
                          First Name *
                        </label>
                        <Input placeholder="Your first name" className="h-12" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-henna-primary mb-2 block">
                          Last Name *
                        </label>
                        <Input placeholder="Your last name" className="h-12" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-henna-primary mb-2 block">
                          Email Address *
                        </label>
                        <Input type="email" placeholder="your.email@example.com" className="h-12" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-henna-primary mb-2 block">
                          Phone Number *
                        </label>
                        <Input type="tel" placeholder="+1 (555) 123-4567" className="h-12" />
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-henna-primary border-b border-henna-primary/20 pb-2">
                      Service Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-henna-primary mb-2 block">
                          Service Type *
                        </label>
                        <select className="w-full h-12 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-henna-gold">
                          <option>Select a service</option>
                          <option>Bridal Henna Package</option>
                          <option>Party & Events</option>
                          <option>Festival Special</option>
                          <option>Traditional Patterns</option>
                          <option>Modern Designs</option>
                          <option>Custom Request</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-henna-primary mb-2 block">
                          Number of People
                        </label>
                        <select className="w-full h-12 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-henna-gold">
                          <option>1 person</option>
                          <option>2-5 people</option>
                          <option>6-10 people</option>
                          <option>11+ people (Group event)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-henna-primary mb-2 block">
                          Preferred Date *
                        </label>
                        <Input type="date" className="h-12" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-henna-primary mb-2 block">
                          Preferred Time
                        </label>
                        <select className="w-full h-12 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-henna-gold">
                          <option>Select time</option>
                          <option>9:00 AM - 12:00 PM</option>
                          <option>12:00 PM - 3:00 PM</option>
                          <option>3:00 PM - 6:00 PM</option>
                          <option>6:00 PM - 9:00 PM</option>
                          <option>Flexible</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Location & Preferences */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-henna-primary border-b border-henna-primary/20 pb-2">
                      Location & Preferences
                    </h3>
                    <div>
                      <label className="text-sm font-medium text-henna-primary mb-2 block">
                        Service Location
                      </label>
                      <select className="w-full h-12 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-henna-gold">
                        <option>Our Studio (Downtown Art District)</option>
                        <option>My Location (Travel service available)</option>
                        <option>Event Venue</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-henna-primary mb-2 block">
                        Design Preferences & Special Instructions
                      </label>
                      <Textarea 
                        placeholder="Describe your preferred style, complexity level, cultural preferences, or any special requirements for your henna design..."
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>

                  <Button variant="henna" size="lg" className="w-full h-14 text-lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Confirm Booking Request
                  </Button>
                  
                  <p className="text-sm text-henna-primary/70 text-center">
                    We'll contact you within 24 hours to confirm your appointment details and discuss pricing.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="shadow-soft border-henna-primary/10 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-henna-primary mb-4 flex items-center">
                    <Phone className="w-5 h-5 text-henna-gold mr-2" />
                    Quick Contact
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-henna-gold mr-2" />
                      <span className="text-henna-primary/80">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-henna-gold mr-2" />
                      <span className="text-henna-primary/80">hello@goldenhenna.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-henna-gold mr-2" />
                      <span className="text-henna-primary/80">Downtown Art District</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Highlights */}
              <Card className="shadow-soft border-henna-primary/10 bg-gradient-subtle">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-henna-primary mb-4 flex items-center">
                    <Star className="w-5 h-5 text-henna-gold mr-2" />
                    What's Included
                  </h3>
                  <ul className="space-y-3 text-sm text-henna-primary/80">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-henna-gold mr-3 flex-shrink-0" />
                      Professional consultation & design planning
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-henna-gold mr-3 flex-shrink-0" />
                      100% natural, organic henna paste
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-henna-gold mr-3 flex-shrink-0" />
                      Custom design creation
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-henna-gold mr-3 flex-shrink-0" />
                      Aftercare instructions & tips
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-henna-gold mr-3 flex-shrink-0" />
                      Photo session of completed artwork
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="shadow-soft border-henna-primary/10 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-henna-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-henna-primary/80 italic mb-3">
                    "Absolutely stunning work! The intricate details and beautiful patterns made my wedding day even more special. Highly recommend!"
                  </p>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 text-henna-gold mr-2" />
                    <span className="text-sm font-medium text-henna-primary">Sarah M., Bride</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Details;