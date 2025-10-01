import { Package, Video, CheckSquare, Mail } from "lucide-react";

const includes = [
  {
    icon: Package,
    title: "Template pronto do Make",
    description: "Integração completa com Google Drive, Instagram e Facebook já configurada."
  },
  {
    icon: Video,
    title: "Passo a Passo em Vídeo",
    description: "Videos aulas com passo a passo simples para ativar tudo em minutos."
  },
  {
    icon: CheckSquare,
    title: "Checklist de boas práticas",
    description: "Dicas para criar Stories que convertem e geram engajamento."
  },
  {
    icon: Mail,
    title: "Suporte por 7 dias",
    description: "Ajuda por e-mail durante sua configuração inicial."
  }
];

export const ProductIncludes = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
            O que você <span className="text-primary">recebe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para começar hoje mesmo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
          {includes.map((item, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
            <span className="font-semibold">Observação:</span> Necessário ter contas ativas no Instagram e Facebook 
            e acesso às credenciais das plataformas para conexão.
          </p>
        </div>
      </div>
    </section>
  );
};
