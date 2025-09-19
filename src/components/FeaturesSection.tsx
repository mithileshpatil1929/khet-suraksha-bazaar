import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ShoppingCart, Bell, Shield, TrendingUp, Smartphone, CheckCircle, Clock, AlertTriangle, IndianRupee, Truck, Phone } from "lucide-react";

const FeaturesSection = () => {
  const getFeatureDemo = (feature: any, index: number) => {
    switch (index) {
      case 0: // GPS-Region Based Pest Alert
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                GPS-Region Based Pest Alert Demo
              </DialogTitle>
              <DialogDescription>
                Live demo of location-based pest detection system
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Current Location: Sector 12, Gurugram
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-destructive/10 rounded-lg">
                    <div className="text-2xl font-bold text-destructive">5</div>
                    <div className="text-sm">Active Alerts</div>
                  </div>
                  <div className="text-center p-3 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">2.5km</div>
                    <div className="text-sm">Coverage Radius</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <div>
                      <div className="font-medium">Aphid Outbreak - 1.2km away</div>
                      <div className="text-sm text-muted-foreground">Wheat fields affected</div>
                    </div>
                  </div>
                  <Badge variant="destructive">HIGH</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-warning" />
                    <div>
                      <div className="font-medium">Bollworm Alert - 3.5km away</div>
                      <div className="text-sm text-muted-foreground">Cotton crops at risk</div>
                    </div>
                  </div>
                  <Badge variant="secondary">MEDIUM</Badge>
                </div>
              </div>
            </div>
          </>
        );
      
      case 1: // Dynamic Buy/Sell Marketplace
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <ShoppingCart className="h-6 w-6 text-warning" />
                Marketplace Demo
              </DialogTitle>
              <DialogDescription>
                Sample products and transactions from our marketplace
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">₹2.5L</div>
                  <div className="text-sm">Daily Trading</div>
                </div>
                <div className="p-3 bg-success/10 rounded-lg">
                  <div className="text-2xl font-bold text-success">156</div>
                  <div className="text-sm">Active Sellers</div>
                </div>
                <div className="p-3 bg-warning/10 rounded-lg">
                  <div className="text-2xl font-bold text-warning">89</div>
                  <div className="text-sm">Products Listed</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Premium Basmati Rice</h4>
                      <p className="text-sm text-muted-foreground">By Farmer Rajesh Kumar</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">₹45/kg</div>
                      <div className="text-sm text-muted-foreground">500kg available</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Organic</Badge>
                    <Badge variant="outline">Fresh</Badge>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Desi Wheat</h4>
                      <p className="text-sm text-muted-foreground">By Farmer Suresh Singh</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">₹25/kg</div>
                      <div className="text-sm text-muted-foreground">2 tons available</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Premium Quality</Badge>
                    <Badge variant="outline">Direct Farm</Badge>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      
      case 2: // Location Based Pest Notification
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <Bell className="h-6 w-6 text-destructive" />
                Smart Notification System
              </DialogTitle>
              <DialogDescription>
                Machine learning powered pest prediction alerts
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-3">Recent Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-destructive/10 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <div className="flex-1">
                      <div className="font-medium">High Risk Alert</div>
                      <div className="text-sm text-muted-foreground">Aphid outbreak predicted in your area within 24 hours</div>
                    </div>
                    <div className="text-xs text-muted-foreground">2 mins ago</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg">
                    <Clock className="h-5 w-5 text-warning" />
                    <div className="flex-1">
                      <div className="font-medium">Weather Alert</div>
                      <div className="text-sm text-muted-foreground">Rain expected - cover your crops</div>
                    </div>
                    <div className="text-xs text-muted-foreground">1 hour ago</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div className="flex-1">
                      <div className="font-medium">Treatment Success</div>
                      <div className="text-sm text-muted-foreground">Bollworm treatment effective - pest count reduced by 85%</div>
                    </div>
                    <div className="text-xs text-muted-foreground">6 hours ago</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-xl font-bold">96%</div>
                  <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-xl font-bold">2.5hrs</div>
                  <div className="text-sm text-muted-foreground">Average Alert Time</div>
                </div>
              </div>
            </div>
          </>
        );
      
      case 3: // Secure Online Payment
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                Secure Payment System
              </DialogTitle>
              <DialogDescription>
                Bank-grade security for all your transactions
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <div className="text-2xl font-bold text-success">₹45.2L</div>
                  <div className="text-sm">Monthly Transactions</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Recent Transactions</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <IndianRupee className="h-4 w-4 text-success" />
                      <div>
                        <div className="font-medium">Payment Received</div>
                        <div className="text-sm text-muted-foreground">From Buyer: Amit Sharma</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-success">+₹12,500</div>
                      <div className="text-xs text-muted-foreground">2 mins ago</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <IndianRupee className="h-4 w-4 text-warning" />
                      <div>
                        <div className="font-medium">Payment Sent</div>
                        <div className="text-sm text-muted-foreground">To Seller: Vijay Kisan</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-warning">-₹8,750</div>
                      <div className="text-xs text-muted-foreground">1 hour ago</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">256-bit Encryption</Badge>
                <Badge variant="outline">PCI DSS Compliant</Badge>
                <Badge variant="outline">Escrow Protection</Badge>
              </div>
            </div>
          </>
        );
      
      case 4: // Real-Time Product Tracking
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-success" />
                Live Order Tracking
              </DialogTitle>
              <DialogDescription>
                Track your orders from farm to doorstep
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-3">Order #FKG-2024-001</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div className="flex-1">
                      <div className="font-medium">Order Confirmed</div>
                      <div className="text-sm text-muted-foreground">Your order has been confirmed by farmer</div>
                    </div>
                    <div className="text-xs text-muted-foreground">Today, 9:30 AM</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div className="flex-1">
                      <div className="font-medium">Harvested & Packed</div>
                      <div className="text-sm text-muted-foreground">Fresh produce ready for dispatch</div>
                    </div>
                    <div className="text-xs text-muted-foreground">Today, 2:15 PM</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-warning animate-pulse" />
                    <div className="flex-1">
                      <div className="font-medium">In Transit</div>
                      <div className="text-sm text-muted-foreground">Vehicle No: HR-05-1234, Driver: Ravi Kumar</div>
                    </div>
                    <div className="text-xs text-muted-foreground">Live</div>
                  </div>
                  <div className="flex items-center gap-3 opacity-50">
                    <Clock className="h-5 w-5" />
                    <div className="flex-1">
                      <div className="font-medium">Delivered</div>
                      <div className="text-sm text-muted-foreground">ETA: Tomorrow, 10:00 AM</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-lg font-bold">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Delivery Rating</div>
                </div>
                <div className="text-center p-3 border rounded-lg">
                  <div className="text-lg font-bold">12 hrs</div>
                  <div className="text-sm text-muted-foreground">Avg Delivery Time</div>
                </div>
              </div>
            </div>
          </>
        );
      
      case 5: // Smart Advisory System
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-accent" />
                AI-Powered Advisory System
              </DialogTitle>
              <DialogDescription>
                Personalized farming recommendations powered by AI
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-3">Today's Recommendations</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Smartphone className="h-4 w-4 text-primary" />
                      <span className="font-medium">Watering Schedule</span>
                    </div>
                    <p className="text-sm">Based on weather data, water your tomato plants at 6 AM and 5 PM today. Expected temperature: 32°C</p>
                  </div>
                  <div className="p-3 bg-warning/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-warning" />
                      <span className="font-medium">Fertilizer Alert</span>
                    </div>
                    <p className="text-sm">Your wheat crop needs nitrogen fertilizer. Apply 50kg per acre within next 3 days for optimal yield.</p>
                  </div>
                  <div className="p-3 bg-success/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-success" />
                      <span className="font-medium">Market Insight</span>
                    </div>
                    <p className="text-sm">Tomato prices are 15% higher this week. Consider harvesting early for better profits.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 border rounded-lg">
                  <div className="text-lg font-bold">24/7</div>
                  <div className="text-xs text-muted-foreground">AI Support</div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="text-lg font-bold">95%</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="text-lg font-bold">5000+</div>
                  <div className="text-xs text-muted-foreground">Farmers</div>
                </div>
              </div>
              <Button className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Book Expert Consultation
              </Button>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

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
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className={`relative overflow-hidden bg-gradient-to-br ${feature.gradient} border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}>
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
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                {getFeatureDemo(feature, index)}
              </DialogContent>
            </Dialog>
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