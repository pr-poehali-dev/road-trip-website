
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/">
              <img src="/logo.svg" alt="Автопутешествия" className="h-12 mb-4" />
            </Link>
            <p className="text-gray-400 mb-4">
              Премиальные автопутешествия по самым интересным маршрутам России и зарубежья с профессиональной командой.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-white hover:text-gold transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-playfair mb-4">Направления</h3>
            <ul className="space-y-2">
              <li><Link to="/tours" className="text-gray-400 hover:text-gold transition-colors">Выбрать тур</Link></li>
              <li><Link to="/weekend" className="text-gray-400 hover:text-gold transition-colors">Рейд выходного дня</Link></li>
              <li><Link to="/corporate" className="text-gray-400 hover:text-gold transition-colors">Корпоративные туры</Link></li>
              <li><Link to="/custom" className="text-gray-400 hover:text-gold transition-colors">Индивидуальные маршруты</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-playfair mb-4">О нас</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-gold transition-colors">О компании</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-gold transition-colors">Наша команда</Link></li>
              <li><Link to="/vehicles" className="text-gray-400 hover:text-gold transition-colors">Автопарк</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-gold transition-colors">Частые вопросы</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-xl font-playfair mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-gold mt-0.5" />
                <div>
                  <p className="text-white">+7 900 123-45-67</p>
                  <p className="text-gray-400">Ежедневно с 9:00 до 21:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-gold mt-0.5" />
                <div>
                  <p className="text-white">info@autotravel.ru</p>
                  <p className="text-gray-400">Ответим в течение 24 часов</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Автопутешествия. Все права защищены.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-gold transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-gold transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
