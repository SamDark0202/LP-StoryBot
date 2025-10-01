import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

export const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleCTAClick = () => {
    window.open("https://www.kivano.com.br/", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden animate-slide-up">
      <Button 
        onClick={handleCTAClick}
        variant="cta" 
        size="lg"
        className="shadow-2xl"
      >
        <Zap className="w-5 h-5 mr-2" />
        Comprar agora
      </Button>
    </div>
  );
};
