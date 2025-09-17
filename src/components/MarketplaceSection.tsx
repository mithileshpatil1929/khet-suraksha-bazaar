import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, MessageCircle, ShoppingCart, Truck, Phone, Camera } from "lucide-react";

const MarketplaceSection = () => {
  const products = [
    {
      id: 1,
      title: "Fresh Organic Wheat",
      seller: "Ramesh Kumar",
      location: "Sonipat, Haryana",
      price: "₹2,200",
      unit: "per quintal",
      quantity: "50 quintal available",
      rating: 4.8,
      image: "🌾",
      description: "Premium quality organic wheat, pesticide-free",
      inStock: true,
      verified: true
    },
    {
      id: 2,
      title: "Fresh Tomatoes",
      seller: "Sunita Devi",
      location: "Faridabad, Haryana",
      price: "₹25",
      unit: "per kg",
      quantity: "500 kg available",
      rating: 4.9,
      image: "🍅",
      description: "Farm fresh tomatoes, direct from field",
      inStock: true,
      verified: true
    },
    {
      id: 3,
      title: "Quality Seeds - Hybrid Corn",
      seller: "Agri Seeds Co.",
      location: "Gurugram, Haryana",
      price: "₹450",
      unit: "per kg",
      quantity: "100 kg available",
      rating: 4.7,
      image: "🌽",
      description: "High yield hybrid corn seeds, 85% germination rate",
      inStock: false,
      verified: true
    }
  ];

  const buyingRequests = [
    {
      id: 1,
      title: "Looking for Basmati Rice",
      buyer: "Delhi Traders",
      location: "New Delhi",
      quantity: "200 quintal needed",
      priceRange: "₹4,000 - ₹4,500 per quintal",
      urgency: "high",
      description: "Need premium basmati rice for export"
    },
    {
      id: 2,
      title: "Bulk Purchase - Onions",
      buyer: "Wholesale Market",
      location: "Azadpur Mandi",
      quantity: "1000 kg needed",
      priceRange: "₹15 - ₹20 per kg",
      urgency: "medium",
      description: "Regular bulk purchase requirement"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Buy</span> & <span className="text-warning">Sell</span> Marketplace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Direct farmers se kharidiye ya apni fasal bechiye. Secure payment, 
            real-time tracking, aur guaranteed quality.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-primary/10 to-success/10 border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <ShoppingCart className="h-6 w-6 text-primary" />
                Sell Your Products
              </CardTitle>
              <CardDescription>
                Apni fasal ya kisani samagri bechne ke liye list karein
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="hero" size="lg" className="w-full mb-4">
                <Camera className="mr-2 h-5 w-5" />
                List Product Now
              </Button>
              <p className="text-sm text-muted-foreground">
                Photo upload → Price set → Buyers connect → Payment secure
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-warning/10 to-orange-500/10 border-warning/20 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Truck className="h-6 w-6 text-warning" />
                Buy Products
              </CardTitle>
              <CardDescription>
                Quality products browse karein aur direct order karein
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="earth" size="lg" className="w-full mb-4">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Browse Products
              </Button>
              <p className="text-sm text-muted-foreground">
                Search → Filter → Order → Track delivery → Payment
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Available Products */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-6">Available Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${!product.inStock ? 'opacity-60' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-2">{product.image}</div>
                    <div className="flex flex-col items-end gap-1">
                      {product.verified && (
                        <Badge variant="default" className="text-xs">✓ Verified</Badge>
                      )}
                      {!product.inStock && (
                        <Badge variant="destructive" className="text-xs">Out of Stock</Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {product.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">• {product.seller}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-2xl font-bold text-primary">{product.price}</div>
                      <div className="text-sm text-muted-foreground">{product.unit}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{product.quantity}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="default" size="sm" className="flex-1" disabled={!product.inStock}>
                      <MessageCircle className="mr-1 h-3 w-3" />
                      Chat
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" disabled={!product.inStock}>
                      <Phone className="mr-1 h-3 w-3" />
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Buying Requests */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-6">Active Buying Requests</h3>
          <div className="grid gap-4">
            {buyingRequests.map((request) => (
              <Card key={request.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-warning">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{request.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4" />
                        {request.location} • {request.buyer}
                      </CardDescription>
                    </div>
                    <Badge variant={request.urgency === 'high' ? 'destructive' : 'warning'}>
                      {request.urgency === 'high' ? 'URGENT' : 'REGULAR'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Quantity Needed</div>
                      <div className="font-medium">{request.quantity}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Price Range</div>
                      <div className="font-medium text-primary">{request.priceRange}</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="hero" size="sm">
                        <MessageCircle className="mr-1 h-3 w-3" />
                        Contact Buyer
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{request.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;