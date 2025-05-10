
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Александр Петров",
    role: "Основатель и руководитель",
    bio: "Более 15 лет опыта в организации экспедиций. Лично проехал более 500 000 км по России и миру.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    contact: {
      email: "alex@autotravel.ru",
      phone: "+7 900 123-45-67"
    }
  },
  {
    name: "Екатерина Иванова",
    role: "Главный маршрутный эксперт",
    bio: "Профессиональный географ и путешественник. Разрабатывает уникальные маршруты по самым живописным местам.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    contact: {
      email: "kate@autotravel.ru",
      phone: "+7 900 123-45-68"
    }
  },
  {
    name: "Михаил Соколов",
    role: "Шеф-инструктор",
    bio: "Мастер спорта по ралли-рейдам. Обучает всех водителей команды и следит за техническим состоянием автопарка.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    contact: {
      email: "mikhail@autotravel.ru",
      phone: "+7 900 123-45-69"
    }
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-secondary">
            Наша команда
          </h2>
          <p className="text-lg text-gray-600">
            За каждым незабываемым путешествием стоит команда профессионалов, 
            влюбленных в свое дело. Познакомьтесь с людьми, которые создают для вас 
            незабываемые впечатления и заботятся о вашем комфорте и безопасности.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-lg overflow-hidden hover-card"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-playfair font-medium mb-1 text-secondary">
                  {member.name}
                </h3>
                <p className="text-gold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-4">
                  {member.bio}
                </p>
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2 text-gold" />
                    <a href={`mailto:${member.contact.email}`} className="hover:text-gold transition-colors">
                      {member.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-gold" />
                    <a href={`tel:${member.contact.phone}`} className="hover:text-gold transition-colors">
                      {member.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-playfair font-medium mb-4 text-secondary">
                Опыт, которому можно доверять
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="bg-gold text-secondary rounded-full h-12 w-12 flex items-center justify-center font-bold mr-4">15+</div>
                  <p className="text-gray-700">лет в организации путешествий</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-gold text-secondary rounded-full h-12 w-12 flex items-center justify-center font-bold mr-4">10+</div>
                  <p className="text-gray-700">профессионалов в команде</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-gold text-secondary rounded-full h-12 w-12 flex items-center justify-center font-bold mr-4">6</div>
                  <p className="text-gray-700">наград в сфере туризма</p>
                </div>
              </div>
              <Button asChild className="bg-gold hover:bg-gold-dark text-secondary">
                <Link to="/team">
                  Узнать больше о команде
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Команда" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
