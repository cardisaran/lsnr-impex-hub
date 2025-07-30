import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Building
} from 'lucide-react';

const ContactSection = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "919385989939";
    const message = "Hi! I'm interested in your export services. Please provide more information.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const complianceInfo = [
    { label: "TAN", value: "MRIL01045C" },
    { label: "CIN", value: "U46909TN2025PTC179994" },
    { label: "PAN", value: "AAGCL2774F" },
    { label: "IEC", value: "AAGCL2774F" },
    { label: "GST", value: "33AAGCL2774F1ZL" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="text-primary"> Export Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contact us today to discuss your requirements. Our team is ready to provide 
            customized export solutions for your business.
          </p>
        </div>

        {/* Contact Information - Centered Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-2 hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-semibold">+91 85087 83857</p>
              <p className="text-muted-foreground text-sm mt-1">Available 9 AM - 6 PM IST</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-semibold">lsnrimpex@gmail.com</p>
              <p className="text-muted-foreground text-sm mt-1">Response within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground text-sm">No 23G - 72/62, Main Road</p>
              <p className="text-foreground text-sm">Peyankuti, Kalkulam</p>
              <p className="text-foreground text-sm">Kanyakumari - 629809</p>
              <p className="text-foreground text-sm">Tamil Nadu, India</p>
            </CardContent>
          </Card>

          <Card className="bg-accent/10 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-accent" />
                Quick Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                variant="cta" 
                className="w-full"
                onClick={handleWhatsAppContact}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Compliance Information */}
        <Card className="bg-background border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              Legal & Compliance Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {complianceInfo.map((item, index) => (
                <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;