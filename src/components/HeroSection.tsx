import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plane, Ship, Truck, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
              <CheckCircle className="w-4 h-4 mr-2" />
              APEDA Registered Exporter
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium 
              <span className="text-accent"> Agricultural </span>
              Exports from India
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              LSNR IMPEX PVT LTD specializes in exporting fresh fruits, vegetables, spices, 
              and processed foods globally. Quality assured, trust delivered worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8"
              >
                Get Export Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToProducts}
                className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                View Products
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Quality Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Global Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Timely Delivery</span>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Plane className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-white font-semibold mb-2">Air Freight</h3>
                  <p className="text-white/80 text-sm">Fast global delivery for perishable goods</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Ship className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-white font-semibold mb-2">Sea Freight</h3>
                  <p className="text-white/80 text-sm">Cost-effective bulk shipments</p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Truck className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-white font-semibold mb-2">Land Transport</h3>
                  <p className="text-white/80 text-sm">Efficient regional distribution</p>
                </div>
                <div className="bg-accent/20 backdrop-blur-sm rounded-xl p-6 border border-accent/30">
                  <div className="text-2xl font-bold text-accent mb-2">500+</div>
                  <p className="text-white/90 text-sm">Successful Exports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;