import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React from "react";

export default function contato() {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
       <main className="max-w-3xl mx-auto px-5 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contato</h1>
        <p className="mb-8">
          Fale com nossa equipe para suporte, dúvidas sobre o StoryBot, pedidos de reembolso dentro
          do prazo e solicitações de dados.
        </p>

        <section className="space-y-6">
          <div className="rounded-lg border p-5">
            <h2 className="text-xl font-semibold mb-2">Canais oficiais</h2>
            <ul className="space-y-2">
              <li>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:contato@automacaomkt.com" className="text-sky-600 underline">
                  contato@automacaomkt.com
                </a>{" "}
                <span className="text-gray-500"></span>
              </li>
              <li>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/5592984455904"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 underline"
                >
                  +55 (92) 98445-5904
                </a>{" "}
                <span className="text-gray-500"></span>
              </li>
              <li>
                <strong>Horário de atendimento:</strong> Seg a Sex, 9h–18h (horário de Brasília)
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}