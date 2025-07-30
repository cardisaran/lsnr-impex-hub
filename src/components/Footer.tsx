import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppContact = () => {
    const phoneNumber = "919385989939";
    const message = "Hi! I'm interested in your export services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/70aa9eee-6763-4a83-b1d5-d33b20a6d3bb.png" 
              alt="LSNR IMPEX PVT LTD" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              LSNR IMPEX PVT LTD is your trusted partner for premium agricultural exports from India. 
              We specialize in fresh fruits, vegetables, spices, and processed foods with 
              international quality standards.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 85087 83857</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">lsnrimpex@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">
                  No 23G - 72/62, Main Road, Peyankuti, Kalkulam,<br />
                  Kanyakumari - 629809, Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('products');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={handleWhatsAppContact}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm flex items-center gap-1"
                >
                  WhatsApp
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Fresh Fruits Export</li>
              <li>Vegetable Export</li>
              <li>Spices & Herbs</li>
              <li>Millets & Pulses</li>
              <li>Coconut Products</li>
              <li>Processed Foods</li>
              <li>Custom Packaging</li>
              <li>Quality Assurance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} LSNR IMPEX PVT LTD. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </button>
              <span className="text-primary-foreground/60">
                APEDA Registered Exporter
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;