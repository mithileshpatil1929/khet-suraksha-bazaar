import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/hero-farming.jpg";
import { MapPin, Bell, ShoppingCart, Truck, Mic, Camera, MessageCircle, Bot, Upload, Send, Leaf, Droplets, BarChart3, TestTube } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "राम शर्मा", message: "मेरी गेहूं की फसल में पत्तियां पीली हो रही हैं, क्या करूं?", time: "2 मिनट पहले" },
    { id: 2, user: "सुनीता देवी", message: "टमाटर की अच्छी किस्म कौन सी है?", time: "5 मिनट पहले" },
    { id: 3, user: "विकास पटेल", message: "बारिश के बाद धान में कीड़े लग गए हैं", time: "10 मिनट पहले" }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, {
        id: chatMessages.length + 1,
        user: "आप",
        message: message,
        time: "अभी"
      }]);
      setMessage("");
    }
  };

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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {/* Voice Assistant */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-xl p-6 border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/20 rounded-full p-4 mb-4 group-hover:bg-primary/30 transition-colors">
                      <Mic className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Voice Assistant</h3>
                    <p className="text-gray-300 text-sm">आवाज से पूछें कोई भी सवाल</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Mic className="h-5 w-5 text-primary" />
                    Voice Assistant
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="text-center p-8 border-2 border-dashed border-primary/30 rounded-lg">
                    <Mic className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">माइक दबाकर अपना सवाल पूछें</p>
                    <Button className="rounded-full h-16 w-16">
                      <Mic className="h-6 w-6" />
                    </Button>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">उदाहरण सवाल:</p>
                    <ul className="text-sm space-y-1">
                      <li>• "मेरी टमाटर की फसल पीली क्यों हो रही है?"</li>
                      <li>• "बारिश के बाद क्या करना चाहिए?"</li>
                      <li>• "गेहूं की अच्छी किस्म कौन सी है?"</li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Disease Detector */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group bg-gradient-to-br from-warning/20 to-orange-500/10 backdrop-blur-sm rounded-xl p-6 border border-warning/30 hover:border-warning/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-warning/20 rounded-full p-4 mb-4 group-hover:bg-warning/30 transition-colors">
                      <Camera className="h-8 w-8 text-warning" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Disease Detector</h3>
                    <p className="text-gray-300 text-sm">फसल की फोटो भेजकर बीमारी पहचानें</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5 text-warning" />
                    Disease Detector
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="text-center p-8 border-2 border-dashed border-warning/30 rounded-lg">
                    <Upload className="h-12 w-12 text-warning mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">फसल की फोटो अपलोड करें</p>
                    <Button variant="outline" className="mb-2 w-full">
                      <Camera className="mr-2 h-4 w-4" />
                      Camera से फोटो लें
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Upload className="mr-2 h-4 w-4" />
                      Gallery से चुनें
                    </Button>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">फोटो लेते समय ध्यान दें:</p>
                    <ul className="text-sm space-y-1">
                      <li>• अच्छी रोशनी में फोटो लें</li>
                      <li>• पत्तियों को साफ दिखाएं</li>
                      <li>• क्लियर और फोकस फोटो लें</li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Chat Board */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group bg-gradient-to-br from-success/20 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-success/30 hover:border-success/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-success/20 rounded-full p-4 mb-4 group-hover:bg-success/30 transition-colors">
                      <MessageCircle className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Chat Board</h3>
                    <p className="text-gray-300 text-sm">किसानों से बात करें और सलाह लें</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-success" />
                    किसान Chat Board
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="h-80 overflow-y-auto border rounded-lg p-4 space-y-3">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className="border-b pb-3 last:border-b-0">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-sm">{msg.user}</span>
                          <span className="text-xs text-muted-foreground">{msg.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="अपना सवाल या सलाह लिखें..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage} size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    यहाँ आप दूसरे किसानों से सलाह ले सकते हैं और अपना अनुभव साझा कर सकते हैं
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            {/* Soil Health Monitor */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="group bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-blue-500/20 rounded-full p-4 mb-4 group-hover:bg-blue-500/30 transition-colors">
                      <Leaf className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Soil Health</h3>
                    <p className="text-gray-300 text-sm">मिट्टी की जांच और सुझाव</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-blue-500" />
                    मिट्टी स्वास्थ्य मॉनिटरिंग
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  {/* Current Soil Status */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <TestTube className="h-5 w-5 text-blue-500" />
                        <h4 className="font-medium">pH Level</h4>
                      </div>
                      <div className="text-2xl font-bold text-blue-500 mb-1">6.8</div>
                      <p className="text-sm text-green-600">✓ Optimal Range</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '68%'}}></div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Droplets className="h-5 w-5 text-blue-500" />
                        <h4 className="font-medium">नमी</h4>
                      </div>
                      <div className="text-2xl font-bold text-blue-500 mb-1">45%</div>
                      <p className="text-sm text-yellow-600">⚠ थोड़ा कम</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                  </div>

                  {/* Nutrient Levels */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                      पोषक तत्व स्तर
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">नाइट्रोजन (N)</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                          </div>
                          <span className="text-sm text-green-600">अच्छा</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">फॉस्फोरस (P)</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{width: '50%'}}></div>
                          </div>
                          <span className="text-sm text-yellow-600">मध्यम</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">पोटाशियम (K)</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{width: '30%'}}></div>
                          </div>
                          <span className="text-sm text-red-600">कम</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-medium mb-3 text-blue-800">💡 सुझाव और सिफारिशें</h4>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li>• पोटाशियम की कमी है - मुरेट ऑफ पोटाश 50 kg/एकड़ डालें</li>
                      <li>• मिट्टी में नमी बढ़ाने के लिए ड्रिप इरिगेशन का उपयोग करें</li>
                      <li>• जैविक खाद (कम्पोस्ट) मिलाएं - 2 टन/एकड़</li>
                      <li>• मिट्टी की जांच हर 6 महीने में कराएं</li>
                    </ul>
                  </div>

                  {/* Test History */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3">हाल की जांच रिपोर्ट</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>15 दिसंबर 2024</span>
                        <span className="text-green-600">pH: 6.8, नमी: 45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1 नवंबर 2024</span>
                        <span className="text-yellow-600">pH: 6.5, नमी: 40%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>15 अक्टूबर 2024</span>
                        <span className="text-red-600">pH: 6.2, नमी: 35%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <TestTube className="mr-2 h-4 w-4" />
                      नई जांच बुक करें
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      डिटेल रिपोर्ट देखें
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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