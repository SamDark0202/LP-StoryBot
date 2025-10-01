import { Copy, Link2, Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Copy,
    title: "Copie o modelo do StoryBot",
    description: "Receba acesso ao template pronto do Make com tudo configurado."
  },
  {
    number: "02",
    icon: Link2,
    title: "Conecte suas contas",
    description: "Vincule seu Google Drive, Instagram e Facebook em poucos cliques."
  },
  {
    number: "03",
    icon: Upload,
    title: "Suba as fotos na pasta",
    description: "Adicione suas imagens na pasta indicada do Google Drive."
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Pronto! Stories no automático",
    description: "Relaxe enquanto seus Stories são publicados diariamente."
  }
];

export const HowItWorks = () => {
  const handleCTAClick = () => {
    window.open("https://www.kivano.com.br/", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
            Como <span className="text-primary">funciona</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 passos simples para automatizar seus Stories
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative"
              >
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-12 h-0.5 bg-border" 
                       style={{ transform: 'translateX(0)' }} 
                  />
                )}
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1 pt-1">
                    <div className="text-sm font-bold text-primary mb-1">{step.number}</div>
                    <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={handleCTAClick}
              variant="cta" 
              size="xl"
              className="w-full sm:w-auto"
            >
              Comprar agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
