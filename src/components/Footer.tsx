import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Link to="/">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
            </Link>
            <Link to="/">
              <span className="font-heading text-2xl font-bold">StoryBot</span>
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a
              href="/termos-de-uso"
              className="hover:text-primary transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="/politicas-de-privacidade"
              className="hover:text-primary transition-colors"
            >
              Política de Privacidade
            </a>
            <a href="/contato" className="hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-sm text-muted-foreground/80 space-y-2">
            <p>
              Instagram e Facebook são marcas registradas de seus respectivos
              proprietários.
            </p>
            <p>
              Este produto não é afiliado, associado, autorizado, endossado ou de
              qualquer forma oficialmente conectado ao Instagram, Facebook ou Meta
              Platforms, Inc.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 text-sm text-muted-foreground/60">
            <p>
              &copy; {new Date().getFullYear()} StoryBot. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
