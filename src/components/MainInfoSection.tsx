
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MainInfoSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-secondary">
              Автопутешествия премиум-класса по всей России
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Мы предлагаем уникальный опыт путешествий для тех, кто ценит комфорт, 
              качество и уникальные впечатления. Уже более 10 лет мы организуем премиальные 
              автопутешествия по самым интересным и живописным маршрутам России.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              Наша команда профессионалов берёт на себя всю организацию: от разработки 
              индивидуального маршрута до бронирования лучших отелей. Вам остаётся только 
              наслаждаться путешествием и коллекционировать незабываемые впечатления.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="text-gold font-playfair text-4xl font-bold mb-2">10+</h4>
                <p className="text-secondary">лет опыта</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="text-gold font-playfair text-4xl font-bold mb-2">50+</h4>
                <p className="text-secondary">маршрутов</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="text-gold font-playfair text-4xl font-bold mb-2">1000+</h4>
                <p className="text-secondary">довольных клиентов</p>
              </div>
            </div>
            <Button asChild className="bg-gold hover:bg-gold-dark text-secondary">
              <Link to="/about">Узнать больше о нас</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1974&auto=format&fit=crop"
                alt="Автопутешествие" 
                className="rounded-lg w-full h-48 md:h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1974&auto=format&fit=crop" 
                alt="Природа России" 
                className="rounded-lg w-full h-32 md:h-40 object-cover"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2070&auto=format&fit=crop" 
                alt="Автомобильный маршрут" 
                className="rounded-lg w-full h-32 md:h-40 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop" 
                alt="Путешествие на закате" 
                className="rounded-lg w-full h-48 md:h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainInfoSection;
