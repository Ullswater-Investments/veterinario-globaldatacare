import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export const NavigationControls: FC = () => {
  const navigate = useNavigate();

  return (
    <nav
      aria-label="Controles de navegación"
      className="flex items-center gap-2 mb-4"
    >
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Atrás</span>
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => navigate("/")}
      >
        <Home className="w-4 h-4" />
        <span className="hidden sm:inline">Inicio</span>
      </Button>
    </nav>
  );
};

export default NavigationControls;
