import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const handleCTAClick = () => {
    window.open("https://www.kivano.com.br/", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">StoryBot</span>
          </Link>

          <Button
            onClick={handleCTAClick}
            variant="cta"
            size="lg"
            className="hidden sm:flex"
          >
            Comprar agora
          </Button>

          <Button
            onClick={handleCTAClick}
            variant="cta"
            size="default"
            className="sm:hidden"
          >
            R$47
          </Button>
        </div>
      </div>
    </nav>
  );
};
