import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    handle: "@marifotografa",
    text: "Economizei 30 min/dia e nunca mais falhei nos stories. Meu engajamento aumentou 40% em apenas 3 semanas!",
    rating: 5
  },
  {
    name: "Carlos Eduardo",
    handle: "@carloscoach",
    text: "Como infoprodutor, constância é tudo. O StoryBot me deu a liberdade de focar no que realmente importa.",
    rating: 5
  },
  {
    name: "Juliana Santos",
    handle: "@jumodaintima",
    text: "Minha loja local nunca teve tanta visibilidade. Stories todos os dias sem eu precisar lembrar. Incrível!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
            O que dizem sobre o <span className="text-primary">StoryBot</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de quem já está economizando tempo
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
