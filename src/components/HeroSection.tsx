import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farming.jpg";
import { MapPin, Bell, ShoppingCart, Truck, Mic, Camera, MessageCircle, Bot } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-left max-w-6xl">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Smart <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">Farming</span> Revolution
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            GPS-based pest alerts, smart marketplace, aur real-time solutions. 
            Apni kheti ko banayein profitable aur sustainable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <MapPin className="mr-2 h-5 w-5" />
              Get Pest Alerts
            </Button>
            <Button variant="earth" size="lg" className="text-lg px-8 py-6">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Start Trading
            </Button>
          </div>

          {/* Main Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Voice Assistant */}
            <div className="group bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-xl p-6 border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/20 rounded-full p-4 mb-4 group-hover:bg-primary/30 transition-colors">
                  <Mic className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Voice Assistant</h3>
                <p className="text-gray-300 text-sm">आवाज से पूछें कोई भी सवाल</p>
              </div>
            </div>

            {/* Disease Detector */}
            <div className="group bg-gradient-to-br from-warning/20 to-orange-500/10 backdrop-blur-sm rounded-xl p-6 border border-warning/30 hover:border-warning/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="bg-warning/20 rounded-full p-4 mb-4 group-hover:bg-warning/30 transition-colors">
                  <Camera className="h-8 w-8 text-warning" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Disease Detector</h3>
                <p className="text-gray-300 text-sm">फसल की फोटो भेजकर बीमारी पहचानें</p>
              </div>
            </div>

            {/* Chat Board */}
            <div className="group bg-gradient-to-br from-success/20 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-success/30 hover:border-success/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <div className="bg-success/20 rounded-full p-4 mb-4 group-hover:bg-success/30 transition-colors">
                  <MessageCircle className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Chat Board</h3>
                <p className="text-gray-300 text-sm">किसानों से बात करें और सलाह लें</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-300 text-sm">Active Farmers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-gray-300 text-sm">Pest Alerts Daily</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-gray-300 text-sm">Products Listed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Features */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col gap-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:scale-110 transition-transform">
          <Bell className="h-6 w-6 text-warning" />
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:scale-110 transition-transform">
          <Truck className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;