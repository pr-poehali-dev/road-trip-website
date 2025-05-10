
import React from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Проживание в лучших отелях",
    description: "Бронируем для вас номера в лучших отелях и глэмпингах на маршруте."
  },
  {
    title: "Высококлассные автомобили",
    description: "Комфортные и надежные внедорожники премиум-класса с опытными водителями."
  },
  {
    title: "Все топливные расходы",
    description: "Вам не нужно беспокоиться о стоимости топлива на протяжении всего маршрута."
  },
  {
    title: "Питание по маршруту",
    description: "Завтраки, обеды и ужины в лучших ресторанах и аутентичных местах."
  },
  {
    title: "Индивидуальное меню",
    description: "Учтем ваши предпочтения в питании и особые пожелания при составлении меню."
  },
  {
    title: "Трансферы и доставка багажа",
    description: "Встреча и проводы в аэропортах, забота о вашем багаже на всем маршруте."
  },
  {
    title: "Интернет на маршруте",
    description: "Спутниковый интернет даже в самых удаленных уголках нашей страны."
  },
  {
    title: "Фото и видеосъемка",
    description: "Профессиональная съемка вашего путешествия и памятный фотоальбом в подарок."
  },
  {
    title: "Фирменный мерч",
    description: "Комплект брендированной одежды и полезных аксессуаров для путешествия."
  }
];

const AllInclusiveSection = () => {
  return (
    <section className="py-24 bg-secondary text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-gold">
            Все включено
          </h2>
          <p className="text-lg text-white/80">
            Наши автопутешествия организованы по принципу "все включено". Мы берем на себя 
            все заботы, чтобы вы могли полностью погрузиться в атмосферу путешествия, 
            не отвлекаясь на организационные вопросы.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-secondary/50 backdrop-blur-sm border border-gold/10 p-6 rounded-lg hover-card"
            >
              <div className="flex items-start mb-4">
                <CheckCircle2 className="text-gold h-6 w-6 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-playfair font-medium ml-3 text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-white/70 ml-9">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gold/10 rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-playfair font-medium mb-4 text-center text-gold">
            Индивидуальные пожелания
          </h3>
          <p className="text-white/80 text-center">
            При бронировании тура вы можете указать свои индивидуальные пожелания, 
            и мы учтем их при организации вашего путешествия. Будь то особые требования 
            к питанию, размещению или дополнительные активности — мы сделаем все возможное, 
            чтобы ваше путешествие было идеальным.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AllInclusiveSection;
