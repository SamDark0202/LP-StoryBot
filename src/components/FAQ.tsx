import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso saber programar ou ter conhecimento técnico?",
    answer: "Não! O StoryBot foi criado para ser simples. Você só precisa copiar o modelo pronto e conectar suas contas seguindo o guia passo a passo. Tudo é visual e intuitivo."
  },
  {
    question: "O StoryBot posta no feed também ou só nos Stories?",
    answer: "O foco do StoryBot é publicar Stories automaticamente no Instagram e Facebook. Para postagens no feed, você precisaria de uma solução diferente."
  },
  {
    question: "Como escolho os horários das postagens?",
    answer: "Você define os horários diretamente no template do Make. É super simples ajustar quando quiser que seus Stories sejam publicados."
  },
  {
    question: "Posso pausar as postagens quando quiser?",
    answer: "Sim! Basta desligar o cenário no Make e as postagens param. Quando quiser reativar, é só ligar novamente."
  },
  {
    question: "Posso trocar as fotos depois de configurar?",
    answer: "Claro! É só substituir ou adicionar novas fotos na pasta do Google Drive. O StoryBot vai publicar automaticamente as imagens que estiverem lá."
  },
  {
    question: "Existe garantia ou possibilidade de reembolso?",
    answer: "Como é um produto digital, oferecemos uma garantia de 7 dias. Se não funcionar como esperado ou você não conseguir configurar, entre em contato e resolveremos."
  },
  {
    question: "Preciso pagar mensalidades ou taxas adicionais?",
    answer: "O StoryBot custa R$47 (pagamento único). Você pode precisar de uma conta no Make (que tem plano gratuito) para rodar a automação. Sem taxas ocultas!"
  },
  {
    question: "Funciona com contas comerciais e pessoais?",
    answer: "Sim! O StoryBot funciona tanto com contas pessoais quanto comerciais no Instagram e Facebook, desde que você tenha as credenciais de acesso."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas antes de começar
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
