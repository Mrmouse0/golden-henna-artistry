import { Button } from "@/components/ui/button";

const Gallery = () => {
  // Placeholder for gallery images - in a real app, these would be actual image URLs
  const galleryImages = [
    { id: 1, category: "Bridal", alt: "Intricate bridal henna design" },
    { id: 2, category: "Festival", alt: "Traditional festival henna pattern" },
    { id: 3, category: "Party", alt: "Modern party henna design" },
    { id: 4, category: "Bridal", alt: "Elegant bridal mehndi" },
    { id: 5, category: "Festival", alt: "Cultural festival henna art" },
    { id: 6, category: "Party", alt: "Contemporary henna design" },
  ];

  return (
    <section id="gallery" className="py-20 bg-henna-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-henna-primary mb-6">
            Our Gallery
          </h2>
          <p className="text-lg text-henna-primary/80 max-w-3xl mx-auto">
            Explore our collection of stunning henna designs, each crafted with precision 
            and artistry to create beautiful, meaningful patterns that last.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in-up bg-white/50 aspect-square"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder for actual images */}
              <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="text-sm font-medium">{image.category}</div>
                  <div className="text-xs opacity-80">Henna Design</div>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button variant="elegant" size="sm" className="bg-white/90 text-henna-primary">
                  View Details
                </Button>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-henna-gold text-henna-primary px-3 py-1 rounded-full text-xs font-medium">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["All", "Bridal", "Festival", "Party", "Traditional"].map((category) => (
            <Button 
              key={category}
              variant={category === "All" ? "gold" : "elegant"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="henna" size="lg">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;