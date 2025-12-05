import React from "react";
import { ArrowUp } from "lucide-react";

export const GlobalFooter: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800 mt-auto relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-medium text-center md:text-left">
          ACCURO TECHNOLOGY proyecto GLOBAL DATA CARE Derechos Reservados 2025
        </div>
        <button
          type="button"
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all text-sm font-bold border border-slate-700 hover:border-slate-500"
        >
          Subir
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default GlobalFooter;
