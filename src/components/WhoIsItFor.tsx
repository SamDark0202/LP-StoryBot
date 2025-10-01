import { Check, X } from "lucide-react";

const forYou = [
  "Quer constância nas redes sociais",
  "Tem fotos ou artes prontas para postar",
  "Precisa economizar tempo todos os dias",
  "Usa Instagram e/ou Facebook Stories",
  "Quer automatizar tarefas repetitivas",
  "Busca mais engajamento com menos esforço"
];

const notForYou = [
  "Quer edição avançada automática de vídeos",
  "Não tem conteúdo visual para postar",
  "Não usa Instagram ou Facebook",
  "Busca uma solução para feed (não Stories)",
  "Quer gerenciar múltiplas contas corporativas",
  "Precisa de aprovação em equipe antes de postar"
];

export const WhoIsItFor = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
            É para <span className="text-primary">você</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja se o StoryBot é a solução certa para suas necessidades
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For You */}
          <div className="bg-card rounded-2xl border-2 border-primary/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Check className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold">É para você se:</h3>
            </div>
            
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Not For You */}
          <div className="bg-card rounded-2xl border-2 border-muted p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <X className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Não é para você se:</h3>
            </div>
            
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
