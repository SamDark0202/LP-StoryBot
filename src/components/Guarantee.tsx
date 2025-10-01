import { Shield, Clock } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Guarantee */}
            <div className="bg-card rounded-2xl border-2 border-primary/30 p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Garantia de 7 dias</h3>
              <p className="text-muted-foreground leading-relaxed">
                Teste o StoryBot sem riscos. Se não funcionar como esperado ou você não conseguir configurar, 
                devolvemos seu investimento.
              </p>
            </div>
            
            {/* Urgency */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-2 border-primary/30 p-8 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Comece hoje mesmo</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lance seus stories automáticos agora e nunca mais perca um dia de presença online.
              </p>
              <p className="text-primary font-bold text-lg">
                Seus concorrentes já estão postando. E você?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
