import { Button } from "@/components/ui/button";
import { MapPin, ShoppingCart, Bell, Menu, Smartphone, Globe, Bot } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoginDialog from "./LoginDialog";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("hindi");

  const languages = [
    { code: "hindi", name: "हिंदी", flag: "🇮🇳" },
    { code: "english", name: "English", flag: "🇺🇸" },
    { code: "punjabi", name: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
    { code: "gujarati", name: "ગુજરાતી", flag: "🇮🇳" },
  ];

  const navItems = [
    { name: "Home", href: "#home", icon: <Smartphone className="h-4 w-4" /> },
    { name: "Pest Alerts", href: "#alerts", icon: <Bell className="h-4 w-4" /> },
    { name: "Marketplace", href: "#marketplace", icon: <ShoppingCart className="h-4 w-4" /> },
    { name: "Features", href: "#features", icon: <MapPin className="h-4 w-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl">🌾</div>
            <span className="text-xl font-bold text-foreground">
              Smart<span className="text-primary">Farm</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* AI Assistant Button */}
            <Button variant="outline" size="sm" className="gap-2">
              <Bot className="h-4 w-4" />
              AI सहायक
            </Button>
            
            {/* Language Changer */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  {languages.find(lang => lang.code === language)?.flag}
                  {languages.find(lang => lang.code === language)?.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="gap-2"
                  >
                    <span>{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <LoginDialog>
              <Button variant="outline" size="sm">
                Login
              </Button>
            </LoginDialog>
            <LoginDialog>
              <Button variant="hero" size="sm">
                Register
              </Button>
            </LoginDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Bot className="h-4 w-4" />
                  AI सहायक
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Globe className="h-4 w-4" />
                      {languages.find(lang => lang.code === language)?.flag}
                      {languages.find(lang => lang.code === language)?.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {languages.map((lang) => (
                      <DropdownMenuItem 
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className="gap-2"
                      >
                        <span>{lang.flag}</span>
                        {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex gap-3">
                  <LoginDialog>
                    <Button variant="outline" size="sm" className="flex-1">
                      Login
                    </Button>
                  </LoginDialog>
                  <LoginDialog>
                    <Button variant="hero" size="sm" className="flex-1">
                      Register
                    </Button>
                  </LoginDialog>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;