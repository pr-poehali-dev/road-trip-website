import React from "react";
import { Shield, Route, Headphones, Wrench } from "lucide-react";

const safetyFeatures = [
  {
    icon: <Shield className="h-10 w-10 text-gold" />,
    title: "Безопасность превыше всего",
    description:
      "Все наши маршруты тщательно разрабатываются с учетом безопасности. Мы мониторим погодные условия и состояние дорог в режиме реального времени.",
  },
  {
    icon: <Route className="h-10 w-10 text-gold" />,
    title: "Проверенные маршруты",
    description:
      "Каждый маршрут многократно пройден нашими специалистами. Мы знаем каждый поворот, каждую смотровую площадку и место отдыха.",
  },
  {
    icon: <Headphones className="h-10 w-10 text-gold" />,
    title: "24/7 поддержка",
    description:
      "Наша команда на связи 24 часа в сутки. В случае любых вопросов или непредвиденных ситуаций мы оперативно придем на помощь.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-gold" />,
    title: "Техническая подготовка",
    description:
      "Все автомобили проходят полную техническую проверку перед каждым путешествием и оснащены необходимым оборудованием для любых ситуаций.",
  },
];

const SafetySection = () => {
  return (
    <section className="py-24 bg-safety-bg bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-white">
            Безопасность
          </h2>
          <p className="text-lg text-white/80">
            Безопасность наших клиентов — приоритет номер один. Мы делаем все
            возможное, чтобы ваше путешествие было не только увлекательным и
            комфортным, но и абсолютно безопасным.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-secondary/70 backdrop-blur-sm p-8 rounded-lg hover-card"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-playfair font-medium mb-4 text-gold">
                {feature.title}
              </h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gold/10 rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-playfair font-medium mb-2 text-white">
                Наши водители
              </h3>
              <p className="text-white/80">
                Профессионалы с многолетним опытом вождения по всем типам дорог
                и стажем не менее 10 лет
              </p>
            </div>
            <div className="flex items-center justify-center bg-gold text-secondary rounded-full h-24 w-24 text-center">
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs">безопасность</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
