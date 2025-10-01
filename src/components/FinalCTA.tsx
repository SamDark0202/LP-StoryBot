import { Button } from "@/components/ui/button";
import { Check, CreditCard, Lock, Zap } from "lucide-react";

export const FinalCTA = () => {
  const handleCTAClick = () => {
    window.open("https://pay.kirvano.com/bbbf7d2a-6317-4f6f-975b-a8e11a83dce3", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Comece agora por <span className="text-primary">R$37</span> e nunca mais falhe nos Stories
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Junte-se aos creators, empreendedores e marcas que já automatizaram sua presença online
            </p>
          </div>
          
          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="font-medium">Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="font-medium">Configuração em minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="font-medium">Suporte por 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="font-medium">Garantia total</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mb-8">
            <Button 
              onClick={handleCTAClick}
              variant="cta" 
              size="xl"
              className="w-full sm:w-auto text-xl px-16"
            >
              <Zap className="w-6 h-6 mr-2" />
              Comprar agora – R$37
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span>Pix ou cartão</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Acesso instantâneo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
