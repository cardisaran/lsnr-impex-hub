import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Globe, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "APEDA registered with stringent quality control processes ensuring premium export standards."
    },
    {
      icon: Award,
      title: "Industry Experience",
      description: "Led by experienced professionals with deep knowledge of international trade regulations."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with reliable supply chain and logistics management."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building long-term partnerships through personalized service and consistent quality delivery."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            About LSNR IMPEX
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Trusted Partner in 
            <span className="text-primary"> Agricultural Exports</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            LSNR IMPEX PVT LTD is a professionally managed export-import company based in Tamil Nadu, India. 
            We are committed to delivering top-quality agricultural and processed food products globally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Our Mission & Values</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our mission is to foster long-term partnerships by prioritizing quality, reliability, and 
              customer satisfaction. We bridge the gap between India's finest agricultural produce and 
              global markets, ensuring freshness and quality at every step.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Quality First</h4>
                  <p className="text-muted-foreground text-sm">Rigorous quality control at every stage of the supply chain</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Timely Delivery</h4>
                  <p className="text-muted-foreground text-sm">Efficient logistics ensuring fresh products reach you on time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Global Standards</h4>
                  <p className="text-muted-foreground text-sm">Compliance with international food safety and export regulations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2 text-foreground">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Founded By</h4>
                <p className="text-muted-foreground">Suman Ramachandran</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Directors</h4>
                <p className="text-muted-foreground text-sm">Suman Ramachandran</p>
                <p className="text-muted-foreground text-sm">Ramachandran Perumal</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground">Kanyakumari, Tamil Nadu</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Certification</h4>
                <p className="text-muted-foreground">APEDA Registered</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;