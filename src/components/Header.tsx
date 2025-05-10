
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  Facebook, 
  Instagram, 
  Phone, 
  Menu, 
  X
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-secondary py-2 shadow-lg" : "bg-transparent py-4"
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="Автопутешествия" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/tours" className="text-white hover:text-gold transition-colors">
            Выбрать тур
          </Link>
          <Link to="/promotions" className="text-white hover:text-gold transition-colors">
            Акции
          </Link>
          <Link to="/faq" className="text-white hover:text-gold transition-colors">
            Вопросы
          </Link>
          <Link to="/team" className="text-white hover:text-gold transition-colors">
            Наша команда
          </Link>
        </nav>

        {/* Contact & Social */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
              className="text-white hover:text-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          
          <a href="tel:+79001234567" className="flex items-center text-white hover:text-gold transition-colors">
            <Phone size={20} className="mr-2" />
            <span>+7 900 123-45-67</span>
          </a>
          
          <div className="flex items-center border border-gold/50 rounded-md overflow-hidden">
            <button className="bg-gold px-3 py-1 text-secondary">
              RU
            </button>
            <button className="px-3 py-1 text-white opacity-50 cursor-not-allowed">
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-secondary w-[300px] p-0">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-gold/20">
                <div className="flex justify-between items-center">
                  <img src="/logo.svg" alt="Автопутешествия" className="h-8" />
                </div>
              </div>
              
              <nav className="flex flex-col p-4 space-y-4">
                <Link to="/tours" className="text-white hover:text-gold py-2 transition-colors">
                  Выбрать тур
                </Link>
                <Link to="/promotions" className="text-white hover:text-gold py-2 transition-colors">
                  Акции
                </Link>
                <Link to="/faq" className="text-white hover:text-gold py-2 transition-colors">
                  Вопросы
                </Link>
                <Link to="/team" className="text-white hover:text-gold py-2 transition-colors">
                  Наша команда
                </Link>
              </nav>
              
              <div className="mt-auto p-4 border-t border-gold/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                      className="text-white hover:text-gold transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                      className="text-white hover:text-gold transition-colors">
                      <Instagram size={20} />
                    </a>
                  </div>
                  
                  <div className="flex items-center border border-gold/50 rounded-md overflow-hidden">
                    <button className="bg-gold px-3 py-1 text-secondary">
                      RU
                    </button>
                    <button className="px-3 py-1 text-white opacity-50 cursor-not-allowed">
                      EN
                    </button>
                  </div>
                </div>
                
                <a href="tel:+79001234567" className="flex items-center justify-center w-full text-white hover:text-gold py-2 transition-colors">
                  <Phone size={20} className="mr-2" />
                  <span>+7 900 123-45-67</span>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
