import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Calendar, Instagram, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-henna-cream/20 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-henna-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-henna-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-warm rounded-full mb-6 shadow-glow">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-henna-primary mb-8 leading-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-henna-primary/80 max-w-3xl mx-auto leading-relaxed">
            Ready to create beautiful henna art for your special occasion? 
            We'd love to discuss your vision and bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="shadow-elegant border-henna-primary/20 backdrop-blur-sm bg-white/80 hover:shadow-warm transition-all duration-500 hover:-translate-y-1">
              <CardHeader className="text-center pb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-warm rounded-full mb-4 mx-auto">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-3xl font-serif text-henna-primary mb-3">
                  Book Your Appointment
                </CardTitle>
                <div className="w-16 h-0.5 bg-henna-gold mx-auto mb-4"></div>
                <CardDescription className="text-henna-primary/70 text-base">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 px-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="text-sm font-semibold text-henna-primary mb-3 block flex items-center">
                      <div className="w-2 h-2 bg-henna-gold rounded-full mr-2"></div>
                      First Name
                    </label>
                    <Input placeholder="Your first name" className="border-henna-primary/20 focus:border-henna-gold focus:ring-henna-gold/20 transition-all duration-300" />
                  </div>
                  <div className="group">
                    <label className="text-sm font-semibold text-henna-primary mb-3 block flex items-center">
                      <div className="w-2 h-2 bg-henna-gold rounded-full mr-2"></div>
                      Last Name
                    </label>
                    <Input placeholder="Your last name" className="border-henna-primary/20 focus:border-henna-gold focus:ring-henna-gold/20 transition-all duration-300" />
                  </div>
                </div>
                
                <div className="group">
                  <label className="text-sm font-semibold text-henna-primary mb-3 block flex items-center">
                    <div className="w-2 h-2 bg-henna-gold rounded-full mr-2"></div>
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" className="border-henna-primary/20 focus:border-henna-gold focus:ring-henna-gold/20 transition-all duration-300" />
                </div>
                
                <div className="group">
                  <label className="text-sm font-semibold text-henna-primary mb-3 block flex items-center">
                    <div className="w-2 h-2 bg-henna-gold rounded-full mr-2"></div>
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="border-henna-primary/20 focus:border-henna-gold focus:ring-henna-gold/20 transition-all duration-300" />
                </div>
                
                <div className="group">
                  <label className="text-sm font-semibold text-henna-primary mb-3 block flex items-center">
                    <div className="w-2 h-2 bg-henna-gold rounded-full mr-2"></div>
                    Service Type
                  </label>
                  <select className="w-full px-4 py-3 border border-henna-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-henna-gold/20 focus:border-henna-gold transition-all duration-300 bg-white">
                    <option>Select a service</option>
                    <option>Bridal Henna</option>
                    <option>Party & Events</option>
                    <option>Festival Henna</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="group">
                  <label className="text-sm font-semibold text-henna-primary mb-3 block flex items-center">
                    <div className="w-2 h-2 bg-henna-gold rounded-full mr-2"></div>
                    Event Date
                  </label>
                  <Input type="date" className="border-henna-primary/20 focus:border-henna-gold focus:ring-henna-gold/20 transition-all duration-300" />
                </div>
                
                <div className="group">
                  <label className="text-sm font-semibold text-henna-primary mb-3 block flex items-center">
                    <div className="w-2 h-2 bg-henna-gold rounded-full mr-2"></div>
                    Additional Details
                  </label>
                  <Textarea 
                    placeholder="Tell us about your event, design preferences, number of people, etc."
                    className="min-h-[120px] border-henna-primary/20 focus:border-henna-gold focus:ring-henna-gold/20 transition-all duration-300 resize-none"
                  />
                </div>
                
                <Button variant="henna" className="w-full h-12 text-base font-semibold shadow-glow hover:shadow-warm transition-all duration-300 hover:-translate-y-0.5">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="shadow-elegant border-henna-primary/20 backdrop-blur-sm bg-white/80 hover:shadow-warm transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-warm rounded-full mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-henna-primary mb-2">
                    Contact Information
                  </h3>
                  <div className="w-16 h-0.5 bg-henna-gold mx-auto"></div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center group hover:bg-henna-cream/30 p-4 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-henna-primary text-lg">Location</div>
                      <div className="text-henna-primary/70">Downtown Art District</div>
                    </div>
                  </div>
                  <div className="flex items-center group hover:bg-henna-cream/30 p-4 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-henna-primary text-lg">Phone</div>
                      <div className="text-henna-primary/70">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center group hover:bg-henna-cream/30 p-4 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-henna-primary text-lg">Email</div>
                      <div className="text-henna-primary/70">hello@goldenhenna.com</div>
                    </div>
                  </div>
                  <div className="flex items-center group hover:bg-henna-cream/30 p-4 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-henna-primary text-lg">Instagram</div>
                      <div className="text-henna-primary/70">@goldenhenna_artistry</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


            <Card className="shadow-elegant border-henna-primary/20 bg-gradient-to-br from-henna-cream/10 to-white backdrop-blur-sm hover:shadow-warm transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-warm rounded-full mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-henna-primary mb-2">
                    Why Choose Us?
                  </h3>
                  <div className="w-16 h-0.5 bg-henna-gold mx-auto"></div>
                </div>
                <ul className="space-y-4 text-henna-primary/80">
                  <li className="flex items-center group">
                    <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-base">10+ years of professional experience</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-base">100% natural, chemical-free henna</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-base">Custom designs for every occasion</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-base">Flexible scheduling and location</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;