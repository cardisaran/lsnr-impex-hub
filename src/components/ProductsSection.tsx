import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, ExternalLink, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";


const ProductsSection = () => {
  const productCategories = [
    {
      title: "Floriculture & Seeds",
      items: ["Cut Flowers", "Ornamental Plants", "Flower Buds", "Fruits & Vegetable Seeds (Tomato, Brinjal, Chili, etc.)"],
      image: "🌸",
      description: "Exquisite flowers and high-quality seeds for cultivation.",
      color: "bg-pink-50 border-pink-200"
    },
    {
      title: "Fresh Fruits & Vegetables",
      items: [
        "Onion", "Potato", "Tomato", "Brinjal", "Okra (Ladies Finger)", "Carrot", "Cabbage", "Cauliflower", "Green Chili", "Drumstick", "Garlic", "Ginger", "Beans", "Spinach", "Bitter Gourd", "Bottle Gourd", "Ridge Gourd", "Pumpkin",
        "Mango", "Grapes", "Pomegranate", "Banana", "Papaya", "Watermelon", "Orange", "Guava", "Apple", "Pineapple", "Sapota (Chikoo)",
        "Walnuts", "Betel Leaves", "Areca Nuts"
      ],
      image: "🥬",
      description: "A wide range of farm-fresh produce and nuts.",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Processed Fruits & Vegetables",
      items: ["Mango Pulp", "Mixed Fruit Pulp", "Gherkins (in Brine, Vinegar)", "Dehydrated Onion & Garlic", "Fruit Juices, Jams, Pickles", "Frozen Vegetables & Fruits", "Pulses (Red Lentils, Chickpeas, Black Gram, etc.)"],
      image: "🥒",
      description: "Quality processed and preserved produce.",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      title: "Animal Products",
      items: ["Frozen Buffalo Meat", "Goat & Sheep Meat", "Processed & Cured Meats", "Poultry: Chicken, Eggs", "Dairy Products: Milk Powder, Ghee, Paneer", "Natural Honey", "Animal Casings", "Albumin (Egg-based & Milk-based)"],
      image: "🍖",
      description: "A selection of premium animal-based products.",
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Other Processed Foods",
      items: ["Groundnuts (Raw, Roasted, Blanched)", "Guar Gum", "Jaggery, Candies, Indian Sweets", "Cocoa Powder, Chocolate Products", "Breakfast Cereals, Ready-to-Eat Mixes", "Wheat Flour, Rice Flour, Semolina", "Alcoholic Beverages (Wine, Spirits)", "Spices, Masala Blends, Sauces"],
      image: "🍪",
      description: "A variety of other processed food items.",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Cereals",
      items: ["Basmati Rice", "Non-Basmati Rice (Sona Masoori, Ponni, IR-64)", "Wheat", "Maize (Corn)", "Barley", "Millets (Pearl Millet, Finger Millet, Sorghum)"],
      image: "🌾",
      description: "A selection of high-quality grains.",
      color: "bg-orange-50 border-orange-200"
    }
  ];

  const [openCollapsibles, setOpenCollapsibles] = useState<Record<string, boolean>>({});

  const handleWhatsAppContact = () => {
    const phoneNumber = "919385989939"; // +91 85087 83857
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {productCategories.map((category) => (
            <Card key={category.title} className={`${category.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{category.image}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                </div>
                
                <div className="space-y-2 mb-6 flex-grow">
                   <Collapsible
                    open={openCollapsibles[category.title]}
                    onOpenChange={(isOpen) => setOpenCollapsibles(prev => ({...prev, [category.title]: isOpen}))}
                    className="space-y-2"
                  >
                    {category.items.slice(0, 4).map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                    <CollapsibleContent className="space-y-2">
                      {category.items.slice(4).map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </CollapsibleContent>

                    {category.items.length > 4 && (
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full justify-center text-sm mt-2">
                          {openCollapsibles[category.title] ? 'Show less' : `Show ${category.items.length - 4} more`}
                          <ChevronsUpDown className="h-4 w-4 ml-2" />
                        </Button>
                      </CollapsibleTrigger>
                    )}
                  </Collapsible>
                </div>

                <Button 
                  variant="cta" 
                  className="w-full mt-auto"
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
                variant="outline-light"
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