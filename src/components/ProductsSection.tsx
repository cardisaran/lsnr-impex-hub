import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, ExternalLink } from 'lucide-react';

const ProductsSection = () => {
  const productCategories = [
    {
      title: "Fresh Fruits",
      items: ["Mango", "Banana", "Guava", "Papaya"],
      image: "🥭",
      description: "Premium quality fresh fruits sourced directly from farmers",
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Fresh Vegetables",
      items: ["Drumstick", "Okra", "Tomato", "Brinjal", "Bitter Gourd"],
      image: "🥬",
      description: "Farm-fresh vegetables with superior nutritional value",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Spices & Herbs",
      items: ["Turmeric", "Dried Red Chilies", "Pepper", "Cardamom"],
      image: "🌶️",
      description: "Authentic Indian spices with rich flavor and aroma",
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Millets & Pulses",
      items: ["Ragi", "Kodo Millet", "Foxtail Millet", "Moong Dal"],
      image: "🌾",
      description: "Nutritious grains and pulses for healthy living",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      title: "Coconut Products",
      items: ["Semi Husked Coconut", "Copra", "Virgin Coconut Oil"],
      image: "🥥",
      description: "Pure coconut products with natural goodness",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Processed Foods",
      items: ["Pickles", "Jams", "Ready-to-eat snacks"],
      image: "🫙",
      description: "Traditional recipes processed with modern techniques",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const handleWhatsAppContact = () => {
    const phoneNumber = "918508783857"; // +91 85087 83857
    const message = "Hi! I'm interested in your export products. Please share pricing and details.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Our Product Range
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Premium 
            <span className="text-primary"> Export Quality </span>
            Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of fresh produce, spices, and processed foods, 
            carefully selected and processed to meet international quality standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <Card key={index} className={`${category.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{category.image}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={handleWhatsAppContact}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get Prices on WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Orders CTA */}
        <Card className="bg-gradient-primary border-0 text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Custom Products or Packaging?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              We offer custom orders and specialized packaging solutions to meet your specific requirements. 
              Contact us to discuss your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                onClick={handleWhatsAppContact}
                className="bg-white text-primary hover:bg-white/90"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp for Custom Orders
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Contact Form
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductsSection;