import { CheckCircle2, Zap, Shield } from "lucide-react";

export const SocialProof = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
            Feito para <span className="font-semibold text-primary">social media</span>, infoprodutores, 
            lojas locais e creators que precisam de <span className="font-semibold">constância sem perder tempo</span>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border shadow-sm">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-2">Fácil</h3>
            <p className="text-sm text-muted-foreground">Configure em minutos e esqueça</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border shadow-sm">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-2">Escalável</h3>
            <p className="text-sm text-muted-foreground">Funciona 24/7 sem limites</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border shadow-sm">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-2">Confiável</h3>
            <p className="text-sm text-muted-foreground">Tecnologia testada e segura</p>
          </div>
        </div>
      </div>
    </section>
  );
};
