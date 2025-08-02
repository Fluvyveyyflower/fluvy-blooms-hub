import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroFlowers from "@/assets/hero-flowers.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-floral-cream via-background to-floral-mint">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-floral-mint/50 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Fresh & Beautiful Flowers</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Bunga Cantik untuk
                <span className="block text-primary">Setiap Kesempatan</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Temukan koleksi bunga segar, buket, dan rangkaian bunga kami yang memukau.
                Sempurna untuk pernikahan, ulang tahun, hari jadi, dan semua momen spesial dalam hidup.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={scrollToProducts}
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://wa.me/6281234567890?text=Hello! I would like to know more about your flower arrangements.', '_blank')}
              >
                WhatsApp Us
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Fresh Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-floral-cream p-8">
              <img
                src={heroFlowers}
                alt="Beautiful flower arrangement"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-8 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-sm font-semibold text-foreground">Free Delivery</div>
                <div className="text-xs text-muted-foreground">Same day delivery</div>
              </div>
              
              <div className="absolute bottom-8 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-sm font-semibold text-foreground">Fresh Guarantee</div>
                <div className="text-xs text-muted-foreground">7 days freshness</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;