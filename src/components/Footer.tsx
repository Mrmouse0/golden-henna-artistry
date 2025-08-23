import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-henna-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Golden Henna Artistry</h3>
            <p className="text-white/80 mb-6 max-w-md">
              Creating beautiful, meaningful henna designs that celebrate life's most precious moments 
              with artistry, tradition, and elegance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-henna-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-henna-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-henna-gold transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-henna-gold transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-henna-gold transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-white/80 hover:text-henna-gold transition-colors duration-300">Services</a></li>
              <li><a href="#products" className="text-white/80 hover:text-henna-gold transition-colors duration-300">Products</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-henna-gold transition-colors duration-300">Gallery</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-henna-gold transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-white/80">Bridal Henna</span></li>
              <li><span className="text-white/80">Party & Events</span></li>
              <li><span className="text-white/80">Festival Henna</span></li>
              <li><span className="text-white/80">Custom Designs</span></li>
              <li><span className="text-white/80">Henna Products</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Golden Henna Artistry. All rights reserved. | Crafted with love and artistry.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;