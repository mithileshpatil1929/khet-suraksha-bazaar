import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, MapPin, Clock, Camera, MessageCircle } from "lucide-react";

const PestAlertDashboard = () => {
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
                  <Button variant="default" size="sm">
                    <Camera className="mr-2 h-4 w-4" />
                    Send Pest Photo
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get Live Advisory
                  </Button>
                  <Button variant="ghost" size="sm">
                    View Solution
                  </Button>
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
              <Button variant="hero" size="lg">
                <Camera className="mr-2 h-5 w-5" />
                Report New Pest
              </Button>
              <Button variant="outline" size="lg">
                <MapPin className="mr-2 h-5 w-5" />
                Check My Area
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PestAlertDashboard;