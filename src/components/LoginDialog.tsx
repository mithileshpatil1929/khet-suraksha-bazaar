import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, CreditCard, User, Mail, Lock } from "lucide-react";

interface LoginDialogProps {
  children: React.ReactNode;
}

const LoginDialog = ({ children }: LoginDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Smart<span className="text-primary">Farm</span> में आपका स्वागत है
          </DialogTitle>
          <DialogDescription className="text-center">
            किसानों के लिए बनाया गया डिजिटल प्लेटफॉर्म
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">लॉगिन</TabsTrigger>
            <TabsTrigger value="register">रजिस्टर करें</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-mobile" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  मोबाइल नंबर
                </Label>
                <Input
                  id="login-mobile"
                  type="tel"
                  placeholder="+91 9876543210"
                  className="pl-10"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="login-password" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  पासवर्ड
                </Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="आपका पासवर्ड"
                />
              </div>

              <Button className="w-full" variant="hero">
                लॉगिन करें
              </Button>
              
              <div className="text-center">
                <Button variant="link" className="text-sm text-muted-foreground">
                  पासवर्ड भूल गए?
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    पहला नाम
                  </Label>
                  <Input
                    id="first-name"
                    placeholder="राम"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">अंतिम नाम</Label>
                  <Input
                    id="last-name"
                    placeholder="कुमार"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  मोबाइल नंबर *
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+91 9876543210"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  ईमेल (वैकल्पिक)
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ram@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="aadhaar" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  आधार नंबर *
                </Label>
                <Input
                  id="aadhaar"
                  type="text"
                  placeholder="1234 5678 9012"
                  maxLength={14}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  सत्यापन के लिए आवश्यक (सुरक्षित रूप से संग्रहीत)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  पूरा पता *
                </Label>
                <Textarea
                  id="address"
                  placeholder="गांव/शहर, तहसील, जिला, राज्य - पिन कोड"
                  className="min-h-[80px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">पासवर्ड बनाएं</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="कम से कम 6 अक्षर"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">पासवर्ड दोबारा डालें</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="पासवर्ड दोबारा डालें"
                />
              </div>

              <Button className="w-full" variant="hero">
                खाता बनाएं
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                रजिस्टर करके आप हमारी{" "}
                <Button variant="link" className="p-0 h-auto text-xs">
                  नियम और शर्तों
                </Button>{" "}
                से सहमत हैं
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;