import React, { useState } from "react";
import {
  X,
  FileText,
  Euro,
  Rocket,
  CheckCircle2,
  CalendarClock,
  Building2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface Slide {
  id: number;
  bg: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  content: string;
  textColor?: string;
  isLast?: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    bg: "bg-slate-900",
    icon: <Rocket className="w-12 h-12 text-blue-500" />,
    title: "GLOBAL DATA CARE",
    subtitle: "Propuesta Estratégica 2025",
    content:
      "La primera Red Federada de Datos de Salud Dental financiada por Europa. Tu soberanía tecnológica empieza aquí.",
  },
  {
    id: 2,
    bg: "bg-blue-900",
    icon: <Euro className="w-12 h-12 text-yellow-400" />,
    title: "El Momento es Ahora",
    subtitle: "Programa Kit Espacio de Datos",
    content:
      "Red.es lanza una inyección de capital única. No es un préstamo, es una subvención para integrar tu clínica en la economía digital.",
  },
  {
    id: 3,
    bg: "bg-slate-800",
    icon: <Building2 className="w-12 h-12 text-slate-400" />,
    title: "El Problema Actual",
    subtitle: "Silos de Datos Aislados",
    content:
      "Hoy, tus datos mueren en tu servidor. No generan valor, no entrenan IA y no se conectan con el resto del ecosistema de salud.",
  },
  {
    id: 4,
    bg: "bg-emerald-900",
    icon: <ShieldCheck className="w-12 h-12 text-emerald-400" />,
    title: "La Solución",
    subtitle: "Federación de Datos",
    content:
      "Conectamos tu clínica sin mover tus datos. Mantenemos tu propiedad y privacidad, pero multiplicamos el valor mediante IA compartida.",
  },
  {
    id: 5,
    bg: "bg-slate-900",
    icon: <Building2 className="w-12 h-12 text-blue-400" />,
    title: "Ecosistema 360°",
    subtitle: "6 Soluciones Integradas",
    content:
      "1. Clínicas (Gestión)\n2. Paciente (Wallet)\n3. Industria (Pasaporte)\n4. Investigación (Marketplace)\n5. Compras (Predictivas)\n6. KPIs (Inteligencia)",
  },
  {
    id: 6,
    bg: "bg-indigo-900",
    icon: <ShieldCheck className="w-12 h-12 text-indigo-400" />,
    title: "Tecnología Soberana",
    subtitle: "Estándar Europeo IDS",
    content:
      "Arquitectura Zero-Trust. Usamos Blockchain para trazabilidad y estándares HL7 FHIR para hablar el idioma universal de la salud.",
  },
  {
    id: 7,
    bg: "bg-slate-900",
    icon: <Rocket className="w-12 h-12 text-orange-500" />,
    title: "Alianza Win-Win",
    subtitle: "El Compromiso Accuro",
    content:
      "Todo euro ingresado por integración se reinvierte en la plataforma. No somos proveedores, somos socios tecnológicos del grupo.",
  },
  {
    id: 8,
    bg: "bg-white",
    textColor: "text-slate-900",
    icon: <Euro className="w-12 h-12 text-emerald-600" />,
    title: "Opción A: Estándar",
    subtitle: "Para la mayoría",
    content:
      "Inversión: 2.000€\nSubvención: 15.000€\n\nIncluye integración técnica, licencia y gestión burocrática completa.",
  },
  {
    id: 9,
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    textColor: "text-blue-900",
    icon: <Rocket className="w-12 h-12 text-blue-600" />,
    title: "Opción B: Líder",
    subtitle: "Limitado a 5 Empresas",
    content:
      "Inversión: 5.000€\nSubvención: 30.000€\n\nIncluye definición de modelos de negocio y prioridad en el roadmap de IA.",
  },
  {
    id: 10,
    bg: "bg-orange-600",
    icon: <CalendarClock className="w-12 h-12 text-white" />,
    title: "FASE 1: Urgencia",
    subtitle: "Antes del 15 Enero",
    content:
      "Captación y Firma. Necesitamos masa crítica para maximizar el presupuesto tecnológico. El plazo es improrrogable.",
  },
  {
    id: 11,
    bg: "bg-blue-800",
    icon: <Building2 className="w-12 h-12 text-blue-300" />,
    title: "FASE 2: Construcción",
    subtitle: "Q1 2026",
    content:
      "Desarrollo del MVP e instalación de conectores en clínicas. Despliegue de los pilotos de casos de uso.",
  },
  {
    id: 12,
    bg: "bg-purple-900",
    icon: <CheckCircle2 className="w-12 h-12 text-purple-400" />,
    title: "FASE 3: Fondos",
    subtitle: "Q3 2026",
    content:
      "Ingreso de Fondos Europeos de RED.ES para continuar con el desarrollo del proyecto tecnológico.",
  },
  {
    id: 13,
    bg: "bg-emerald-900",
    icon: <Rocket className="w-12 h-12 text-emerald-400" />,
    title: "FASE 4: Futuro",
    subtitle: "Escala e IA",
    content:
      "Con el presupuesto consolidado, activamos la Inteligencia Colectiva y la monetización de datos.",
  },
  {
    id: 14,
    bg: "bg-slate-800",
    icon: <CheckCircle2 className="w-12 h-12 text-white" />,
    title: "¿Qué necesitamos?",
    subtitle: "Siguientes Pasos",
    content:
      "1. Confirmar interés (Opción A o B).\n2. Firmar acuerdo Agente Digitalizador.\n3. Abonar fee de inicio.\n4. Antes del 15 de Enero.",
  },
  {
    id: 15,
    bg: "bg-slate-950",
    icon: <Rocket className="w-16 h-16 text-blue-500 animate-pulse" />,
    title: "Lidera el Cambio",
    subtitle: "Únete a Global Data Care",
    content: "No dejes que tu clínica se quede atrás.",
    isLast: true,
  },
];

const BusinessProposalModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = () => {
    setCurrentSlide(0);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((curr) =>
      curr < slides.length - 1 ? curr + 1 : curr,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((curr) => (curr > 0 ? curr - 1 : curr));
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={openModal}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-blue-700 to-indigo-800 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-blue-900/50 hover-scale transition-all flex items-center gap-3 font-bold border border-white/20"
      >
        <FileText className="w-5 h-5" />
        Propuesta de Negocio
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
        </span>
      </button>
    );
  }

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Contenedor formato móvil 9:16 */}
      <div
        className={`relative w-full max-w-[22rem] sm:max-w-sm md:max-w-md aspect-[9/16] rounded-3xl md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col transition-colors duration-500 ring-1 ring-white/10 ${slide.bg}`}
      >
        {/* Barra de progreso superior */}
        <div className="absolute top-0 left-0 w-full flex gap-1 p-2 z-20">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                idx <= currentSlide ? "bg-white" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        {/* Botón cerrar */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/20 rounded-full p-1"
          aria-label="Cerrar propuesta de negocio"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Contenido del slide */}
        <div
          className={`flex-1 flex flex-col items-center justify-center px-6 py-8 sm:px-8 sm:py-10 md:px-10 text-center animate-in fade-in slide-in-from-right-4 duration-300 ${
            slide.textColor ?? "text-white"
          }`}
        >
          <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-white/10 rounded-full backdrop-blur-sm shadow-lg shadow-black/30">
            {slide.icon}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 sm:mb-3 leading-tight">
            {slide.title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-semibold opacity-80 mb-5 sm:mb-6 uppercase tracking-[0.25em]">
            {slide.subtitle}
          </p>

          <div className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line opacity-90 max-w-xs sm:max-w-sm">
            {slide.content}
          </div>

          {slide.isLast && (
            <button
              type="button"
              className="mt-8 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-500/30 animate-bounce hover-scale transition-transform"
            >
              Solicitar Adhesión
            </button>
          )}
        </div>

        {/* Controles de navegación */}
        <div className="absolute bottom-0 left-0 w-full px-5 sm:px-6 md:px-7 py-5 flex justify-between items-center z-20">
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all hover-scale ${
              currentSlide === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <span className="text-xs font-mono opacity-70 text-white">
            {currentSlide + 1} / {slides.length}
          </span>

          <button
            type="button"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all hover-scale ${
              currentSlide === slides.length - 1
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
            aria-label="Siguiente slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessProposalModal;
export { BusinessProposalModal };
