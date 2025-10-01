import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <main className="max-w-3xl mx-auto px-5 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Política de Privacidade</h1>
        <p className="text-sm text-gray-500 mb-8">
          Última atualização: <span className="font-medium">30 de Setembro de 2025</span>
        </p>

        <section className="space-y-6">
          <p>
            Nós, do <strong>StoryBot</strong>, respeitamos sua privacidade e valorizamos a
            transparência no uso dos seus dados.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">1. Coleta de informações</h2>
            <p>
              Podemos coletar informações fornecidas no momento da compra, como nome, e-mail e dados
              de pagamento (processados de forma segura por plataformas parceiras, como
              Kivano/Mercado Pago/Hotmart, conforme aplicável).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Uso das informações</h2>
            <p>As informações são utilizadas para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processar a compra e liberar acesso ao produto.</li>
              <li>Enviar comunicações sobre suporte e atualizações.</li>
              <li>Garantir uma experiência segura e personalizada.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Compartilhamento de dados</h2>
            <p>
              Não compartilhamos informações pessoais com terceiros, exceto quando necessário para
              processamento de pagamento ou cumprimento de obrigações legais.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger suas informações, mas
              lembramos que nenhum sistema é 100% seguro.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Direitos do usuário</h2>
            <p>
              Você pode solicitar a exclusão ou atualização de seus dados pessoais a qualquer
              momento, entrando em contato pelo nosso canal oficial.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Alterações</h2>
            <p>Podemos atualizar esta Política de Privacidade periodicamente. As alterações serão publicadas nesta página.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}