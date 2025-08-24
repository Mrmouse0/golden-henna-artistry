import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-henna.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Intricate henna art design" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in-up">
          G•Henna Studios
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Exquisite henna designs for your most precious moments
        </p>
        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          From traditional bridal mehndi to contemporary festival art, we create stunning henna designs 
          that tell your unique story with elegance and artistry.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="henna" size="lg" className="text-lg px-8 py-4">
            Book Your Session
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-henna-primary">
            View Gallery
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;