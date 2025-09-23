import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Calendar, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-henna-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-henna-primary/80 max-w-3xl mx-auto">
            Ready to create beautiful henna art for your special occasion? 
            We'd love to discuss your vision and bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-warm border-henna-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-henna-primary">
                Book Your Appointment
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-henna-primary mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-henna-primary mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-henna-primary mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-henna-primary mb-2 block">
                  Phone Number
                </label>
                <Input type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-henna-primary mb-2 block">
                  Service Type
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-henna-gold">
                  <option>Select a service</option>
                  <option>Bridal Henna</option>
                  <option>Party & Events</option>
                  <option>Festival Henna</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-henna-primary mb-2 block">
                  Event Date
                </label>
                <Input type="date" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-henna-primary mb-2 block">
                  Additional Details
                </label>
                <Textarea 
                  placeholder="Tell us about your event, design preferences, number of people, etc."
                  className="min-h-[100px]"
                />
              </div>
              
              <Link to="/details">
                <Button variant="henna" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-soft border-henna-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-henna-primary mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-henna-gold mr-3" />
                    <div>
                      <div className="font-medium text-henna-primary">Location</div>
                      <div className="text-sm text-henna-primary/70">Downtown Art District</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-henna-gold mr-3" />
                    <div>
                      <div className="font-medium text-henna-primary">Phone</div>
                      <div className="text-sm text-henna-primary/70">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-henna-gold mr-3" />
                    <div>
                      <div className="font-medium text-henna-primary">Email</div>
                      <div className="text-sm text-henna-primary/70">hello@goldenhenna.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="w-5 h-5 text-henna-gold mr-3" />
                    <div>
                      <div className="font-medium text-henna-primary">Instagram</div>
                      <div className="text-sm text-henna-primary/70">@goldenhenna_artistry</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-henna-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-henna-primary mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-henna-gold mr-2" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-henna-primary">Monday - Friday</span>
                    <span className="text-henna-primary/70">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-henna-primary">Saturday</span>
                    <span className="text-henna-primary/70">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-henna-primary">Sunday</span>
                    <span className="text-henna-primary/70">12:00 PM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-henna-primary/10 bg-gradient-subtle">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold text-henna-primary mb-2">
                  Why Choose Us?
                </h3>
                <ul className="space-y-2 text-sm text-henna-primary/80">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-henna-gold rounded-full mr-3"></div>
                    10+ years of professional experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-henna-gold rounded-full mr-3"></div>
                    100% natural, chemical-free henna
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-henna-gold rounded-full mr-3"></div>
                    Custom designs for every occasion
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-henna-gold rounded-full mr-3"></div>
                    Flexible scheduling and location
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