import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React from "react";

export default function TermsOfUse() {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <main className="max-w-3xl mx-auto px-5 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Termos de Uso</h1>
        <p className="text-sm text-gray-500 mb-8">
          Última atualização: <span className="font-medium">30 de Setembro de 2025</span>
        </p>

        <section className="space-y-6">
          <p>
            Bem-vindo ao <strong>StoryBot</strong>! Ao adquirir e utilizar nosso produto, você
            concorda com os termos abaixo. Recomendamos a leitura atenta antes de prosseguir com a
            compra.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">1. Produto digital</h2>
            <p>
              O StoryBot é um modelo de automação pré-configurado que facilita a publicação
              automática de Stories no Instagram e Facebook. O produto é entregue em formato
              digital, via acesso imediato após a confirmação do pagamento.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Uso do produto</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>O StoryBot deve ser utilizado apenas para fins pessoais ou comerciais legítimos.</li>
              <li>É proibida a revenda, compartilhamento ou distribuição não autorizada do modelo.</li>
              <li>
                O usuário é responsável por suas contas vinculadas (Google Drive, Instagram,
                Facebook, Make).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Garantia</h2>
            <p>
              Oferecemos garantia de 7 (sete) dias a partir da data de compra, conforme previsto
              pelo Código de Defesa do Consumidor para produtos digitais. Dentro desse prazo, você
              pode solicitar reembolso caso não esteja satisfeito.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Responsabilidades</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Não nos responsabilizamos por mau uso do produto, exclusão acidental de arquivos ou
                bloqueios decorrentes de uso indevido das plataformas integradas.
              </li>
              <li>
                O funcionamento depende de serviços de terceiros (Google, Meta e Make). Eventuais
                alterações externas podem impactar o produto, e nos comprometemos a oferecer suporte
                básico de ativação.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Alterações</h2>
            <p>
              Reservamo-nos o direito de atualizar estes Termos de Uso a qualquer momento. As
              mudanças entrarão em vigor imediatamente após sua publicação.
            </p>
          </div>
        </section>

        <hr className="my-10" />
        <p className="text-sm text-gray-500">
          *Instagram e Facebook são marcas de seus respectivos proprietários. O StoryBot não é
          afiliado nem endossado por eles.*
        </p>
      </main>
      <Footer />
    </>
  );
}
