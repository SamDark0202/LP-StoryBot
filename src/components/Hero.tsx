import { Button } from "@/components/ui/button";
import { Clock, Zap, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-mockup.jpg";

export const Hero = () => {
  const handleCTAClick = () => {
    window.open("https://www.kivano.com.br/", "_blank");
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              Stories diários no{" "}
              <span className="text-primary">piloto automático</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Coloque suas fotos na pasta do Google Drive e o StoryBot publica no Instagram e Facebook todos os dias. 
              <span className="font-semibold text-foreground"> Simples, rápido e constante.</span>
            </p>
            
            {/* Chips */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Configuração em minutos</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Postagens diárias</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Sem esforço</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-sm">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Baixo investimento</span>
              </div>
            </div>
            
            {/* Price */}
            <div className="mb-8">
              <div className="inline-block bg-primary/10 border-2 border-primary px-6 py-3 rounded-xl">
                <p className="text-3xl sm:text-4xl font-heading font-bold text-primary">Ativar StoryBot Agora</p>
              </div>
            </div>
            
            {/* CTA */}
            <Button 
              onClick={handleCTAClick}
              variant="cta" 
              size="xl"
              className="w-full sm:w-auto"
            >
              Comprar agora
            </Button>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative animate-slide-up lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Mockup do StoryBot mostrando interface de Stories do Instagram e Facebook"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border border-border hidden md:block">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Automação ativa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
