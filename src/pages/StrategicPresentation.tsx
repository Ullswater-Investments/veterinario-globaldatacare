import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Database,
  Euro,
  Globe,
  Lock,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const totalSlides = 20;

export const StrategicPresentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // SEO básico para la presentación estratégica
  useEffect(() => {
    document.title = "Presentación Estratégica | Global Data Care";

    const description =
      "Keynote panorámica 16:9 para explicar la estrategia Global Data Care: problema, solución federada, Kit Espacio de Datos y roadmap.";
    let meta = document.querySelector("meta[name='description']") as
      | HTMLMetaElement
      | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    let canonical = document.querySelector(
      "link[rel='canonical']",
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
  }, []);

  // Navegación con teclado (flechas izquierda/derecha)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentSlide((prev) =>
          prev < totalSlides - 1 ? prev + 1 : prev,
        );
      }
      if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((curr) =>
      curr < totalSlides - 1 ? curr + 1 : curr,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((curr) => (curr > 0 ? curr - 1 : curr));
  };

  // Renderizado condicional de cada slide para diseños únicos
  const renderSlide = (index: number): JSX.Element | null => {
    switch (index) {
      // --- ACTO 1: INTRODUCCIÓN ---
      case 0: // Portada
        return (
          <div className="h-full flex flex-col items-center justify-center bg-slate-900 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
            <div className="z-10 animate-in fade-in zoom-in duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-bold mb-6">
                <Rocket className="w-4 h-4" /> Propuesta Estratégica 2025
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 tracking-tight">
                GLOBAL DATA
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  {" "}
                  CARE
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-300 font-light">
                La Primera Red Federada de Salud Animal
              </p>
              <p className="mt-8 text-xs md:text-sm text-slate-500 uppercase tracking-widest">
                Accuro Technology · Red.es
              </p>
            </div>
          </div>
        );

      case 1: // El Dato es el Nuevo Petróleo
        return (
          <div className="h-full flex flex-col md:flex-row bg-white">
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                El Dato Clínico Veterinario es un Activo Financiero
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Las clínicas veterinarias generan terabytes de información valiosa cada día.
                Hoy, esos datos están "dormidos" en servidores locales. Mañana, serán la base de la medicina
                predictiva.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-blue-50 flex items-center justify-center p-8 md:p-10">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                className="rounded-2xl shadow-2xl max-h-[70vh] object-cover"
                alt="Análisis de datos clínicos"
              />
            </div>
          </div>
        );

      case 2: // El Problema
        return (
          <div className="h-full bg-slate-900 text-white p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-red-400">
              El Problema Actual: Silos Aislados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div className="p-6 md:p-8 bg-white/5 rounded-2xl border border-white/10">
                <Database className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-slate-400" />
                <h3 className="text-xl font-bold mb-2">Invisibilidad</h3>
                <p className="text-slate-400">
                  Tu software no habla con el hospital ni con el laboratorio.
                </p>
              </div>
              <div className="p-6 md:p-8 bg-white/5 rounded-2xl border border-white/10">
                <Lock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-slate-400" />
                <h3 className="text-xl font-bold mb-2">Sin Valor Agregado</h3>
                <p className="text-slate-400">
                  Los datos no entrenan IA porque no hay volumen suficiente individualmente.
                </p>
              </div>
              <div className="p-6 md:p-8 bg-white/5 rounded-2xl border border-white/10">
                <Euro className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-slate-400" />
                <h3 className="text-xl font-bold mb-2">Coste de Oportunidad</h3>
                <p className="text-slate-400">
                  Pierdes la capacidad de monetizar datos anónimos.
                </p>
              </div>
            </div>
          </div>
        );

      // --- ACTO 2: LA SOLUCIÓN ---
      case 3: // La Solución Federada
        return (
          <div className="h-full bg-gradient-to-br from-blue-900 to-slate-900 text-white p-8 md:p-16 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <div className="inline-block px-3 py-1 bg-blue-600 rounded text-xs font-bold mb-4">
                SOLUCIÓN
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Arquitectura Federada
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-6">
                No movemos los datos. Movemos el algoritmo.
              </p>
              <ul className="space-y-4 text-base md:text-lg">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" /> Soberanía total (Tus datos no salen).
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" /> Cumplimiento GDPR automático.
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" /> Inteligencia Colectiva (500 clínicas veterinarias).
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <Globe className="w-40 h-40 md:w-64 md:h-64 mx-auto text-blue-400 relative z-10 animate-pulse" />
            </div>
          </div>
        );

      case 4: // Los 6 Pilares
        return (
          <div className="h-full bg-slate-50 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-slate-900">
              Un Ecosistema, 6 Soluciones
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { icon: "🏥", title: "Clínicas", desc: "Gestión Cloud" },
                { icon: "🏭", title: "Industria", desc: "Pasaporte Producto" },
                { icon: "🧬", title: "Paciente", desc: "Wallet & App" },
                { icon: "📊", title: "Investigación", desc: "Marketplace Datos" },
                { icon: "📦", title: "Compras", desc: "IA Predictiva" },
                { icon: "📈", title: "KPIs", desc: "Business Intel" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4"
                >
                  <span className="text-3xl md:text-4xl">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      // --- ACTO 3: EL DINERO (KIT DIGITAL) ---
      case 5: // La Oportunidad de Financiación
        return (
          <div className="h-full bg-indigo-900 text-white p-8 md:p-16 text-center flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-pink-600/20 rounded-full blur-3xl" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">
              Kit Espacio de Datos
            </h2>
            <p className="text-lg md:text-2xl mb-10 md:mb-12 max-w-3xl md:max-w-4xl mx-auto">
              El Gobierno de España (Red.es) subvenciona la creación de economías del dato.
              <br />
              <span className="text-yellow-400 font-bold">
                Esto no es un crédito. Es una subvención a fondo perdido.
              </span>
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  150M€
                </div>
                <div className="text-indigo-300 text-sm md:text-base">
                  Presupuesto Total Programa
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  100%
                </div>
                <div className="text-indigo-300 text-sm md:text-base">
                  Cobertura de la Ayuda
                </div>
              </div>
            </div>
          </div>
        );

      case 6: // Modelo de negocio
        return (
          <div className="h-full bg-slate-900 text-white p-8 md:p-16 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Alianza Estratégica Win-Win
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Accuro Technology no busca un cliente puntual, sino <strong>socios fundadores</strong> de la red.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li>
                  Tú inviertes una pequeña cantidad para la integración. A cambio,
                  recibes una subvención muy superior gestionada ante Red.es.
                </li>
                <li>
                  Todo el beneficio se reinvierte en la plataforma común. Cuantos más
                  seamos, más potente será la IA que recibirás de vuelta.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
              <div className="bg-blue-500/10 border border-blue-400/30 rounded-2xl p-6 w-full max-w-md">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Euro className="w-5 h-5 text-yellow-300" /> Retorno Compartido
                </h3>
                <p className="text-slate-300 text-sm">
                  El valor creado por la red se reparte entre los socios fundadores según su grado de participación.
                </p>
              </div>
              <div className="flex items-center gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" /> Socios fundadores
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" /> Escalabilidad
                </div>
              </div>
            </div>
          </div>
        );

      case 7: // Opción A
        return (
          <div className="h-full bg-white p-8 md:p-16 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Opción A: Integración Estándar
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Para la mayoría de las clínicas del grupo.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li>
                  <strong>Inversión inicial:</strong> 2.000 €.
                </li>
                <li>
                  <strong>Subvención solicitada:</strong> 15.000 €.
                </li>
                <li>
                  <strong>Incluye:</strong> integración técnica en el Espacio de
                  Datos, licencia de uso y gestión burocrática completa de la ayuda.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 w-full max-w-md">
                <h3 className="text-xl font-bold mb-2 text-emerald-800">Ideal para clínicas veterinarias individuales</h3>
                <p className="text-emerald-700 text-sm">
                  Entrada accesible al ecosistema Global Data Care Veterinario con acompañamiento completo en la gestión de la ayuda.
                </p>
              </div>
            </div>
          </div>
        );

      case 8: // Opción B
        return (
          <div className="h-full bg-slate-900 text-white p-8 md:p-16 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Opción B: Casos de Uso y Liderazgo
              </h2>
              <p className="text-lg text-slate-200 mb-4">
                Limitado a 5 empresas tractoras del consorcio.
              </p>
              <ul className="space-y-3 text-slate-200">
                <li>
                  <strong>Inversión inicial:</strong> 5.000 €.
                </li>
                <li>
                  <strong>Subvención solicitada:</strong> 30.000 €.
                </li>
                <li>
                  <strong>Incluye:</strong> definición de modelos de negocio del dato
                  y prioridad en el roadmap de IA.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
              <div className="bg-yellow-500/10 border border-yellow-400/40 rounded-2xl p-6 w-full max-w-md">
                <h3 className="text-xl font-bold mb-2 text-yellow-200">Liderazgo en Innovación</h3>
                <p className="text-yellow-100 text-sm">
                  Define junto a nosotros los casos de uso estrella que marcarán la diferencia en el mercado.
                </p>
              </div>
            </div>
          </div>
        );

      case 9: // Roadmap Fase 1
        return (
          <div className="h-full bg-slate-50 p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-slate-900 text-center">
              Fase 1: Captación y Urgencia
            </h2>
            <p className="text-center text-slate-600 mb-6">
              <strong>Fecha límite 15 de enero de 2025</strong>
            </p>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-slate-700">
              <p>
                <strong>Acción:</strong> firma de acuerdos de adhesión al proyecto.
              </p>
              <p>
                <strong>Objetivo:</strong> conseguir masa crítica. Si solo entran
                pocas empresas, el alcance tecnológico será limitado.
              </p>
              <p className="font-medium text-slate-900">
                Necesitamos volumen para crear una IA real y representativa del
                sector.
              </p>
            </div>
          </div>
        );

      case 10: // Roadmap Fase 2
        return (
          <div className="h-full bg-white p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-slate-900 text-center">
              Fase 2: Desarrollo e Integración
            </h2>
            <p className="text-center text-slate-600 mb-6">
              <strong>Periodo Q1 - Q2 2025</strong>
            </p>
            <ul className="max-w-3xl mx-auto space-y-3 text-lg text-slate-700 list-disc list-inside">
              <li>Construcción del MVP (Producto Mínimo Viable) de la plataforma veterinaria.</li>
              <li>Instalación de conectores IDS en las clínicas veterinarias participantes.</li>
              <li>Despliegue de los 5 casos de uso piloto acordados (vacunación, microchips, One Health).</li>
            </ul>
          </div>
        );

      case 11: // Roadmap Fase 3
        return (
          <div className="h-full bg-slate-900 text-white p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center text-emerald-400">
              Fase 3: Fondos Europeos
            </h2>
            <p className="text-center text-slate-200 mb-6">
              <strong>Periodo Q3 2026</strong>
            </p>
            <p className="max-w-3xl mx-auto text-lg text-slate-100 text-center">
              Q3 2026 · Ingreso de Fondos Europeos de RED.ES para continuar con el
              desarrollo del proyecto tecnológico.
            </p>
          </div>
        );

      case 12: // Roadmap Fase 4
        return (
          <div className="h-full bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">
              Fase 4: IA a Escala
            </h2>
            <ul className="max-w-3xl mx-auto space-y-3 text-lg text-slate-100 list-disc list-inside">
              <li>Compras predictivas automatizadas entre clínicas veterinarias federadas.</li>
              <li>Diagnóstico IA federado global para patologías complejas (displasia, cardiomiopatía).</li>
              <li>
                Venta de datasets anonimizados a laboratorios farmacéuticos veterinarios con modelos de
                revenue share.
              </li>
            </ul>
          </div>
        );

      case 13: // Caso de Uso Real
        return (
          <div className="h-full bg-white p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-slate-900 text-center">
              El Valor en la Práctica
            </h2>
            <p className="text-center text-slate-600 mb-6">
              <strong>Ejemplo de flujo completo veterinario</strong>
            </p>
            <ul className="max-w-3xl mx-auto space-y-3 text-lg text-slate-700 list-disc list-inside">
              <li>La agenda predice 20 vacunaciones y 5 cirugías en las próximas semanas.</li>
              <li>
                La Central de Compras agrupa el pedido de vacunas automáticamente con otras
                clínicas veterinarias y reduce el coste un 25%.
              </li>
              <li>
                Cada vacuna y microchip lleva un Pasaporte Digital de Producto con trazabilidad
                completa de cadena de frío.
              </li>
              <li>
                El tutor visualiza el historial de su mascota en la app Wallet.
              </li>
              <li>
                Los datos anónimos mejoran los algoritmos de diagnóstico veterinario (displasia, dermatitis).
              </li>
            </ul>
          </div>
        );

      case 14: // Requisitos y siguientes pasos
        return (
          <div className="h-full bg-white p-8 md:p-16 flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12">
              ¿Qué necesitamos de ti?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
              <div className="p-6 border-2 border-slate-100 rounded-xl hover:border-blue-500 cursor-pointer transition-colors">
                <div className="font-bold text-xl mb-2">1. Confirmar Interés</div>
                <p className="text-slate-500">Elige Opción A o B.</p>
              </div>
              <div className="p-6 border-2 border-slate-100 rounded-xl hover:border-blue-500 cursor-pointer transition-colors">
                <div className="font-bold text-xl mb-2">2. Firmar Acuerdo</div>
                <p className="text-slate-500">Documento de Agente Digitalizador.</p>
              </div>
              <div className="p-6 border-2 border-slate-100 rounded-xl hover:border-blue-500 cursor-pointer transition-colors">
                <div className="font-bold text-xl mb-2">3. Abonar Fee Inicio</div>
                <p className="text-slate-500">2.000 € o 5.000 €.</p>
              </div>
              <div className="p-6 border-2 border-red-100 bg-red-50 rounded-xl">
                <div className="font-bold text-xl mb-2 text-red-600">
                  4. Antes del 15 Enero
                </div>
                <p className="text-red-400">Fecha límite improrrogable.</p>
              </div>
            </div>
          </div>
        );

      case 15: // Final CTA
        return (
          <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col justify-center items-center text-center p-8">
            <Rocket className="w-16 h-16 md:w-24 md:h-24 mb-6 md:mb-8 animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8">
              Lidera el Cambio
            </h2>
            <p className="text-xl md:text-2xl mb-10 md:mb-12 max-w-xl md:max-w-2xl">
              No dejes que tu clínica veterinaria se quede en la era analógica.
              Únete hoy a Global Data Care Veterinario.
            </p>
            <button className="px-8 md:px-12 py-4 md:py-6 bg-white text-blue-700 rounded-full text-lg md:text-2xl font-bold hover:scale-105 transition-transform shadow-2xl">
              Solicitar Adhesión
            </button>
            <p className="mt-8 md:mt-12 opacity-60 text-xs md:text-sm">
              Accuro Technology · 2025
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 md:p-8 gap-3">
      {/* Marco de la Presentación (Aspect Ratio 16:9) */}
      <div className="w-full max-w-[1400px] aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl relative">
        {/* Contenido Slide */}
        <div className="absolute inset-0">{renderSlide(currentSlide)}</div>

        {/* Controles de Navegación */}
        <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex gap-3 md:gap-4 z-50">
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-full bg-black/20 hover:bg-black/40 text-white text-xs md:text-sm backdrop-blur-md transition-all disabled:opacity-0 disabled:pointer-events-none"
            aria-label="Diapositiva anterior"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Anterior</span>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-full bg-black/20 hover:bg-black/40 text-white text-xs md:text-sm backdrop-blur-md transition-all disabled:opacity-0 disabled:pointer-events-none"
            aria-label="Siguiente diapositiva"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Barra de Progreso */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>

        {/* Contador */}
        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white/70 font-mono text-xs md:text-sm bg-black/30 px-3 md:px-4 py-1 md:py-2 rounded-full backdrop-blur-sm">
          {currentSlide + 1} / {totalSlides}
        </div>

        {/* Botón Cerrar (volver al inicio) */}
        <Link
          to="/"
          className="absolute top-4 md:top-6 right-4 md:right-6 text-white/70 hover:text-white z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 shadow-lg backdrop-blur-md transition-all"
          aria-label="Cerrar presentación y volver al inicio"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
      </div>

      {/* Guía de controles */}
      <p className="text-xs md:text-sm text-white/60 text-center max-w-xl">
        Usa las flechas o el teclado ← → para avanzar. Pulsa el botón de la esquina superior derecha para salir.
      </p>
    </div>
  );
};

export default StrategicPresentation;
