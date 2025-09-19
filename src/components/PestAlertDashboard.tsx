import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, MapPin, Clock, Camera, MessageCircle, Mic, Bot, TrendingUp, Upload } from "lucide-react";
import { useState } from "react";

const PestAlertDashboard = () => {
  const [selectedAlert, setSelectedAlert] = useState(null);
  
  const alerts = [
    {
      id: 1,
      title: "Aphid Outbreak Warning",
      location: "Sector 12, Gurugram",
      distance: "2.5 km away",
      severity: "high",
      time: "2 hours ago",
      description: "Aphid infestation detected in nearby wheat fields. Immediate action recommended.",
      affectedCrops: ["Wheat", "Mustard"]
    },
    {
      id: 2,
      title: "Bollworm Alert",
      location: "Village Kheri, Faridabad",
      distance: "5.8 km away",
      severity: "medium",
      time: "6 hours ago",
      description: "Cotton bollworm activity spotted. Monitor your cotton fields closely.",
      affectedCrops: ["Cotton"]
    },
    {
      id: 3,
      title: "Stem Borer Detection",
      location: "Mandi Road, Sonipat",
      distance: "8.2 km away",
      severity: "low",
      time: "1 day ago",
      description: "Rice stem borer found in paddy fields. Preventive measures suggested.",
      affectedCrops: ["Rice", "Paddy"]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "destructive";
      case "medium": return "warning";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  const getSeverityIcon = (severity: string) => {
    return <AlertTriangle className={`h-4 w-4 ${severity === "high" ? "text-destructive" : severity === "medium" ? "text-warning" : "text-muted-foreground"}`} />;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            GPS-Based <span className="text-destructive">Pest Alerts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aapke aaspaas ke khet mein pest outbreak ki real-time warning. 
            Location-based smart notifications se apni fasal ko bachayein.
          </p>
        </div>

        {/* Alert Cards */}
        <div className="grid gap-6 mb-8">
          {alerts.map((alert) => (
            <Card key={alert.id} className="overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-l-destructive">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {getSeverityIcon(alert.severity)}
                    <div>
                      <CardTitle className="text-xl">{alert.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4" />
                        {alert.location} • {alert.distance}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant={getSeverityColor(alert.severity) as any}>
                      {alert.severity.toUpperCase()}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {alert.time}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{alert.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-medium">Affected Crops:</span>
                  {alert.affectedCrops.map((crop) => (
                    <Badge key={crop} variant="outline">{crop}</Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" size="sm">
                        <Camera className="mr-2 h-4 w-4" />
                        Send Pest Photo
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Upload Pest Photo</DialogTitle>
                        <DialogDescription>
                          Upload a photo of the pest for instant identification and solution
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                          <p className="text-muted-foreground mb-4">Drag & drop your photo here or click to browse</p>
                          <Button variant="outline">Choose Photo</Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <Button variant="outline">
                            <Camera className="mr-2 h-4 w-4" />
                            Take Photo
                          </Button>
                          <Button>
                            <Upload className="mr-2 h-4 w-4" />
                            Upload
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Get Live Advisory
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>AI Assistant (Sarri)</DialogTitle>
                        <DialogDescription>
                          Get instant farming advice from our AI assistant
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="bg-muted/50 rounded-lg p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <Bot className="h-8 w-8 text-primary" />
                            <div>
                              <h4 className="font-semibold">Sarri AI Assistant</h4>
                              <p className="text-sm text-muted-foreground">Your farming companion</p>
                            </div>
                          </div>
                          <p className="text-sm">Namaste! Main Sarri hun, aapki farming assistant. Kya madad chahiye?</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <Button variant="outline">
                            <Mic className="mr-2 h-4 w-4" />
                            Voice Chat
                          </Button>
                          <Button>
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Text Chat
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        View Solution
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Pest Solution Guide</DialogTitle>
                        <DialogDescription>
                          Step-by-step solution for {alert.title}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="bg-muted/50 rounded-lg p-4">
                          <h4 className="font-semibold mb-2">Recommended Treatment:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Apply organic pesticide early morning</li>
                            <li>Spray neem oil solution (2-3 ml per liter)</li>
                            <li>Remove affected plant parts</li>
                            <li>Monitor daily for 1 week</li>
                          </ul>
                        </div>
                        <Button className="w-full">
                          <TrendingUp className="mr-2 h-4 w-4" />
                          Track Treatment Progress
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Center */}
        <Card className="bg-gradient-to-r from-primary/10 to-success/10 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Emergency Pest Report</CardTitle>
            <CardDescription>
              Apne khet mein naya pest dekha hai? Turant report karein aur solution paayein.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" size="lg">
                    <Camera className="mr-2 h-5 w-5" />
                    Report New Pest
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Report New Pest</DialogTitle>
                    <DialogDescription>
                      Help other farmers by reporting pest sightings in your area
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Pest Type</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>Select pest type</option>
                          <option>Aphid</option>
                          <option>Bollworm</option>
                          <option>Stem Borer</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Crop Affected</label>
                        <select className="w-full p-2 border rounded-md">
                          <option>Select crop</option>
                          <option>Wheat</option>
                          <option>Rice</option>
                          <option>Cotton</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Camera className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Upload pest photo</p>
                    </div>
                    <Button className="w-full">Submit Report</Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    <MapPin className="mr-2 h-5 w-5" />
                    Check My Area
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Area Pest Status</DialogTitle>
                    <DialogDescription>
                      View pest alerts and outbreaks in your location
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="h-6 w-6 text-primary" />
                        <div>
                          <h4 className="font-semibold">Current Location</h4>
                          <p className="text-sm text-muted-foreground">Sector 12, Gurugram</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-destructive">3</div>
                          <div className="text-xs text-muted-foreground">High Alerts</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-warning">5</div>
                          <div className="text-xs text-muted-foreground">Medium Alerts</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-success">2</div>
                          <div className="text-xs text-muted-foreground">Low Alerts</div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      View Detailed Map
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PestAlertDashboard;