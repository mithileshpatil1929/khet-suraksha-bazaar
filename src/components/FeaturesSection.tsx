import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ShoppingCart, Bell, Shield, TrendingUp, Smartphone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "GPS-Region Based Pest Alert",
      description: "Real-time pest outbreak warnings based on your exact location. AI-powered detection system jo aapke 10km radius mein kisi bhi pest ki activity detect karta hai.",
      gradient: "from-primary/10 to-success/10"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-warning" />,
      title: "Dynamic Buy/Sell Marketplace",
      description: "Direct farmers se connect karein. Photo upload karke products list karein, buyers se chat karein, aur secure payment system se safe transactions karein.",
      gradient: "from-warning/10 to-orange-500/10"
    },
    {
      icon: <Bell className="h-8 w-8 text-destructive" />,
      title: "Location Based Pest Notification",
      description: "Smart notifications jo aapko sirf relevant pest alerts bhejte hain. Machine learning se predict karta hai ki aapki fasal ko kya threat ho sakta hai.",
      gradient: "from-destructive/10 to-red-500/10"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure Online Payment",
      description: "UPI, Net banking, aur digital wallet support. Escrow protection ke saath safe transactions. Payment disputes ke liye 24/7 customer support.",
      gradient: "from-primary/10 to-blue-500/10"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-success" />,
      title: "Real-Time Product Tracking",
      description: "Order placement se delivery tak complete tracking. GPS-enabled delivery tracking, real-time updates, aur estimated delivery time notifications.",
      gradient: "from-success/10 to-green-500/10"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-accent" />,
      title: "Smart Advisory System",
      description: "AI-powered farming advice. Weather data, soil conditions, aur market trends ke basis pe personalized recommendations. Video consultations with experts.",
      gradient: "from-accent/10 to-purple-500/10"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Features That Make It <span className="text-primary">Unique</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern technology aur traditional farming knowledge ka perfect combination. 
            Har feature specially Indian farmers ke liye design kiya gaya hai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`relative overflow-hidden bg-gradient-to-br ${feature.gradient} border-0 hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-full bg-white/50 backdrop-blur-sm">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
              
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-3xl"></div>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 via-success/5 to-warning/5 border-primary/20 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">Why Choose Our Platform?</CardTitle>
              <CardDescription className="text-lg">
                Indian farming conditions ke liye specially designed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Verified Sellers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-success mb-2">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-warning mb-2">₹0</div>
                  <div className="text-muted-foreground">Registration Fee</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;