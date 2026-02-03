import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Home, ExternalLink, Gavel, Mail, Phone, MapPin } from "lucide-react";

export const GlobalFooter: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 mt-auto">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">
              © {currentYear} GLOBAL DATA CARE — Todos los derechos reservados
            </p>
            <div className="text-xs space-y-1.5">
              <p className="font-medium text-slate-300">ACCURO TECHNOLOGY, S.L. · CIF: B87617981</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-slate-500" />
                <span>C/ Colquide, 6 – Portal 2, 1ª planta, Edificio Prisma de Las Rozas – Madrid</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 flex-shrink-0 text-slate-500" />
                <span>(+34) 91 710 48 40</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 flex-shrink-0 text-slate-500" />
                <a 
                  href="mailto:ivan.becerro@accuro.es" 
                  className="hover:text-white transition-colors"
                >
                  ivan.becerro@accuro.es
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link 
              to="/" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              Inicio
            </Link>
            <span className="text-slate-700">·</span>
            <Link 
              to="/legal" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Gavel className="w-4 h-4" />
              Aviso Legal
            </Link>
            <span className="text-slate-700">·</span>
            <a 
              href="/documents/Espacios_de_Datos_Elegibles_KTED.pdf#page=22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Espacios de Datos Homologados
            </a>
          </nav>

          {/* Scroll to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all text-sm font-bold border border-slate-700 hover:border-slate-500"
          >
            Subir
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Divider & Extra Info */}
        <div className="border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-500 text-center">
            Proyecto GLOBAL DATA CARE — Espacio de Datos Federado de Salud Animal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
