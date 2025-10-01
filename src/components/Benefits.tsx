import { Calendar, Clock, Smartphone, TrendingUp, Instagram, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Constância automática todos os dias",
    description: "Nunca mais perca um dia de postagem. O StoryBot trabalha por você 24/7."
  },
  {
    icon: Clock,
    title: "Configuração em minutos",
    description: "Copie o modelo pronto e conecte suas contas. Simples e rápido."
  },
  {
    icon: Smartphone,
    title: "Sem precisar entrar no app",
    description: "Adicione fotos no Drive e pronto. Sem abrir Instagram ou Facebook."
  },
  {
    icon: TrendingUp,
    title: "Mais engajamento e presença",
    description: "Constância gera resultados. Apareça todos os dias para sua audiência."
  },
  {
    icon: Instagram,
    title: "Instagram e Facebook Stories",
    description: "Funciona nas duas plataformas principais. Alcance multiplicado."
  },
  {
    icon: DollarSign,
    title: "Baixo custo e alto ROI",
    description: "Investimento único. Economize horas de trabalho todo mês."
  }
];

export const Benefits = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
            Por que escolher o <span className="text-primary">StoryBot</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todos os benefícios de ter presença constante sem o trabalho manual
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
