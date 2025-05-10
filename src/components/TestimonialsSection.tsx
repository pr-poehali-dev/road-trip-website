
import React, { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, User, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const testimonials = [
  {
    name: "Анна Смирнова",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
    tourName: "Золотое кольцо России",
    rating: 5,
    text: "Невероятное путешествие! Маршрут был просто потрясающим, каждый день был наполнен новыми впечатлениями. Отдельное спасибо Александру за профессионализм и заботу о каждой детали поездки."
  },
  {
    name: "Дмитрий Ковалев",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    tourName: "Алтай и Байкал",
    rating: 5,
    text: "Это было путешествие мечты! Комфортные автомобили, продуманный маршрут, потрясающие виды, отличное размещение. Команда создала все условия, чтобы мы могли полностью погрузиться в атмосферу путешествия."
  },
  {
    name: "Елена и Игорь Петровы",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop",
    tourName: "Карелия",
    rating: 5,
    text: "Путешествие превзошло все наши ожидания! Благодарим за продуманную организацию, за внимание к каждой мелочи и за возможность увидеть такие удивительные места. Уже планируем следующую поездку с вами!"
  },
  {
    name: "Максим Иванов",
    avatar: "https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?q=80&w=1998&auto=format&fit=crop",
    tourName: "Калининград и Балтика",
    rating: 4,
    text: "Отличное путешествие с профессиональной командой. Поразил уровень сервиса и внимание к деталям. Рекомендую всем, кто хочет увидеть новые места без забот об организации."
  }
];

const TestimonialsSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [tourName, setTourName] = useState("");
  const [review, setReview] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    console.log({ name, tourName, review });
    
    // Show success message
    toast({
      title: "Отзыв отправлен",
      description: "Спасибо за ваш отзыв! Он будет опубликован после модерации.",
      duration: 5000,
    });
    
    // Reset form
    setName("");
    setTourName("");
    setReview("");
    
    // Close dialog
    setIsDialogOpen(false);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-secondary">
            Отзывы участников
          </h2>
          <p className="text-lg text-gray-600">
            Ничто не расскажет о нас лучше, чем слова наших клиентов. 
            Вот что говорят люди, которые уже испытали наши автопутешествия на себе.
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className="relative mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover" 
                      />
                      <div className="absolute -bottom-2 -right-2 bg-gold text-white rounded-full p-1">
                        <Quote className="h-4 w-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-secondary">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{testimonial.tourName}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-gold fill-gold' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static transform-none mr-2" />
            <CarouselNext className="relative static transform-none" />
          </div>
        </Carousel>
        
        <div className="text-center mt-16">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gold hover:bg-gold-dark text-secondary">
                Написать отзыв
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-playfair">Написать отзыв</DialogTitle>
                <DialogDescription>
                  Поделитесь своими впечатлениями о путешествии с нами
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Имя Фамилия"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="tourName" className="text-sm font-medium">
                      Название тура
                    </label>
                    <Input
                      id="tourName"
                      placeholder="Например: Золотое кольцо России"
                      value={tourName}
                      onChange={(e) => setTourName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="review" className="text-sm font-medium">
                      Ваш отзыв
                    </label>
                    <Textarea
                      id="review"
                      placeholder="Поделитесь вашими впечатлениями о путешествии..."
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      required
                      rows={5}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="bg-gold hover:bg-gold-dark text-secondary">
                    Отправить отзыв
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
