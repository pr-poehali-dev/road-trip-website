
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2942&auto=format&fit=crop')",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 mt-16 text-center md:text-left">
        <div className="max-w-3xl animate-slide-in">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-playfair mb-6">
            Откройте Россию с нами на премиальных автопутешествиях
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Эксклюзивные маршруты, комфортные автомобили, профессиональная команда — 
            все для вашего идеального автопутешествия под ключ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-secondary font-medium text-lg">
              <Link to="/tours">
                Выбрать тур
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-medium text-lg">
              <Link to="/about">
                О нас
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Trip Categories */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-12 z-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/tours" className="transform transition-all duration-300 hover:translate-y-[-8px]">
              <div className="bg-secondary/80 border border-gold/20 rounded-lg p-6 text-center hover:bg-secondary hover-card">
                <h3 className="text-xl font-playfair text-gold mb-2">Выбрать тур</h3>
                <p className="text-white/80">Индивидуальные и групповые туры по всей России</p>
              </div>
            </Link>
            <Link to="/weekend" className="transform transition-all duration-300 hover:translate-y-[-8px]">
              <div className="bg-secondary/80 border border-gold/20 rounded-lg p-6 text-center hover:bg-secondary hover-card">
                <h3 className="text-xl font-playfair text-gold mb-2">Рейд выходного дня</h3>
                <p className="text-white/80">Короткие, но насыщенные путешествия на 2-3 дня</p>
              </div>
            </Link>
            <Link to="/corporate" className="transform transition-all duration-300 hover:translate-y-[-8px]">
              <div className="bg-secondary/80 border border-gold/20 rounded-lg p-6 text-center hover:bg-secondary hover-card">
                <h3 className="text-xl font-playfair text-gold mb-2">Корпоративные туры</h3>
                <p className="text-white/80">Незабываемый тимбилдинг для вашей компании</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
