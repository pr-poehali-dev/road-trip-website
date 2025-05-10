
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const vehicles = [
  {
    id: 1,
    name: "Toyota Land Cruiser 300",
    description: "Флагманский внедорожник с максимальным комфортом и проходимостью. Идеален для дальних путешествий по любому бездорожью.",
    image: "https://images.unsplash.com/photo-1675271591211-141c837dd97d?q=80&w=2052&auto=format&fit=crop",
    specs: ["V8 3.5 Twin-Turbo", "415 л.с.", "7 мест", "Полный привод"]
  },
  {
    id: 2,
    name: "Lexus LX 600",
    description: "Роскошь и комфорт в сочетании с внедорожными возможностями. Для тех, кто не привык к компромиссам.",
    image: "https://images.unsplash.com/photo-1583870908951-71149f42bcf9?q=80&w=2069&auto=format&fit=crop",
    specs: ["V6 3.5 Twin-Turbo", "409 л.с.", "5-7 мест", "Пневмоподвеска"]
  },
  {
    id: 3,
    name: "Mercedes G-Class",
    description: "Легендарный внедорожник, сочетающий превосходные внедорожные качества с комфортом и престижем.",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2070&auto=format&fit=crop",
    specs: ["V8 4.0 Biturbo", "585 л.с.", "5 мест", "Три блокировки дифференциала"]
  }
];

const VehiclesSection = () => {
  const [activeVehicle, setActiveVehicle] = React.useState(vehicles[0]);

  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 text-secondary">
            На чем едем
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Наш автопарк состоит из премиальных внедорожников, подготовленных для путешествий 
            по любым дорогам и бездорожью. Комфорт, безопасность и проходимость — наши главные приоритеты.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gold/20 absolute inset-0 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src={activeVehicle.image} 
              alt={activeVehicle.name}
              className="rounded-lg w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4 text-secondary">
                {activeVehicle.name}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {activeVehicle.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {activeVehicle.specs.map((spec, index) => (
                  <div key={index} className="bg-white py-3 px-4 rounded-lg text-center shadow-sm">
                    <p className="text-secondary font-medium">{spec}</p>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-gold hover:bg-gold-dark text-secondary">
                <Link to="/vehicles">
                  Подробнее об автомобилях
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-medium mb-4 text-secondary">Другие автомобили:</h4>
              <div className="flex flex-wrap gap-4">
                {vehicles.map(vehicle => (
                  <button
                    key={vehicle.id}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      activeVehicle.id === vehicle.id 
                        ? "bg-gold text-secondary" 
                        : "bg-white text-secondary hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveVehicle(vehicle)}
                  >
                    {vehicle.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
