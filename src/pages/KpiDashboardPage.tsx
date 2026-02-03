import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Activity,
  Users,
  Clock,
  Smile,
  AlertTriangle,
  Brain,
  Stethoscope,
  ArrowRight,
  TrendingUp,
  MessageSquareWarning,
  CheckCircle2,
  Smartphone,
  Heart,
} from "lucide-react";
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";

const KpiDashboardPage: React.FC = () => {
  const [activeView, setActiveView] = useState<"service" | "medical">(
    "service",
  );

  useEffect(() => {
    const descriptionContent =
      "Centro de control de excelencia clínica y de servicio para clínicas veterinarias, uniendo datos de tutores, sensores y resultados médicos.";

    document.title =
      "Dashboard KPI Clínicas Veterinarias | Excelencia 360º | ACCURO TECHNOLOGY";

    let metaDescription = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = descriptionContent;

    const canonicalUrl = `${window.location.origin}/portal/kpi`;
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    const ldJson = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Dashboard KPI Clínicas Veterinarias",
      description: descriptionContent,
    };

    let script = document.querySelector(
      "script#kpi-dashboard-page-ldjson",
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "kpi-dashboard-page-ldjson";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(ldJson);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="container mx-auto px-6 pt-4">
        <NavigationControls />
      </div>

      {/* --- HERO SECTION: INTELIGENCIA OPERATIVA --- */}
      <section className="relative py-24 bg-slate-900 overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-indigo-600/20 rounded-l-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4" />
            <span>Business Intelligence &amp; Medical Analytics Veterinario</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            No solo midas tu clínica veterinaria. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">
              Predice su Futuro.
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Unimos datos de la App del Tutor, sensores en sala y notas
            clínicas para crear un sistema de gestión inteligente. Detecta
            cuellos de botella en tiempo real y eleva la excelencia médica
            automáticamente.
          </p>
          <Link
            to="/demo"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-indigo-900/50 flex items-center gap-2 mx-auto transition-all"
          >
            Ver Demo del Panel
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* --- FLUJO DE DATOS (INPUTS) --- */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-900">
              Una Visión 360° alimentada por 3 fuentes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-indigo-100 z-0" />

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative z-10 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Voz del Tutor</h3>
              <p className="text-slate-500 text-sm">
                NPS en tiempo real, reportes de evolución post-tratamiento desde la
                Wallet y encuestas de satisfacción.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative z-10 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Flujo Operativo</h3>
              <p className="text-slate-500 text-sm">
                Tiempos de espera en sala, duración real vs. planificada de la
                consulta y uso de gabinetes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative z-10 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Resultado Clínico</h3>
              <p className="text-slate-500 text-sm">
                Tasas de éxito en cirugías veterinarias, complicaciones reportadas y
                re-intervenciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DASHBOARD INTERACTIVO (LA DEMO) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Tu Centro de Mando Inteligente
              </h2>
              <p className="text-slate-500 max-w-2xl">
                La IA procesa los datos brutos y te ofrece diagnósticos
                operativos claros. Cambia la vista para ver métricas de
                servicio o puramente médicas.
              </p>
            </div>

            <div className="bg-slate-100 p-1 rounded-xl flex">
              <button
                type="button"
                onClick={() => setActiveView("service")}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeView === "service"
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Excelencia de Servicio
              </button>
              <button
                type="button"
                onClick={() => setActiveView("medical")}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeView === "medical"
                    ? "bg-white text-emerald-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Excelencia Médica
              </button>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
            <div className="mb-8 bg-indigo-600 text-white p-4 rounded-xl flex items-start gap-4 shadow-lg shadow-indigo-200">
              <div className="bg-white/20 p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wide opacity-90 mb-1">
                  Análisis Predictivo AI
                </h4>
                <p className="text-sm md:text-base font-medium">
                  {activeView === "service"
                    ? "Alerta de Saturación: Se prevé un aumento del 20% en tiempos de espera los martes por la tarde. Sugerencia: Reforzar recepción de 16:00 a 19:00."
                    : "Patrón Detectado: Ligero aumento (3%) en reacción post-vacunación con el Lote #9921. Sugerencia: Revisar protocolo de aplicación."}
                </p>
              </div>
            </div>

            {activeView === "service" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify_between mb-4">
                    <span className="text-slate-500 text-sm font-medium">
                      NPS (Satisfacción)
                    </span>
                    <Smile className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">78</div>
                  <div className="flex items-center text-xs text-green-600 font-bold bg-green-50 w-fit px-2 py-1 rounded">
                    <TrendingUp className="w-3 h-3 mr-1" /> +4.2 vs mes pasado
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify_between mb-4">
                    <span className="text-slate-500 text-sm font-medium">
                      Tiempo Espera Medio
                    </span>
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">
                    12m
                  </div>
                  <div className="flex items-center text-xs text-orange-600 font-bold bg-orange-50 w-fit px-2 py-1 rounded">
                    <AlertTriangle className="w-3 h-3 mr-1" /> Objetivo: &lt;10m
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify_between mb-4">
                    <span className="text-slate-500 text-sm font-medium">
                      Tasa de Ocupación
                    </span>
                    <Users className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">
                    92%
                  </div>
                  <div className="text-xs text-slate-400 mt-2">
                    Óptimo. Sin saturación grave.
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-blue-500 w-[92%] h-full" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify_between mb-4">
                    <span className="text-slate-500 text-sm font-medium">
                      Reclamaciones/Mes
                    </span>
                    <MessageSquareWarning className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">1</div>
                  <div className="flex items-center text-xs text-green-600 font-bold bg-green-50 w-fit px-2 py-1 rounded">
                    <CheckCircle2 className="w-3 h-3 mr-1" /> -50% vs mes pasado
                  </div>
                </div>
              </div>
            )}

            {activeView === "medical" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify_between mb-4">
                    <span className="text-slate-500 text-sm font-medium">
                      Éxito Quirúrgico (12m)
                    </span>
                    <Activity className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">
                    98.5%
                  </div>
                  <p className="text-xs text-slate-400">
                    Basado en 450 procedimientos veterinarios
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-50">
                    <p className="text-xs text-indigo-600 font-bold">
                      Benchmark Federado: 97.2%
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify_between mb-4">
                    <span className="text-slate-500 text-sm font-medium">
                      Recuperación Post-Op
                    </span>
                    <Heart className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-4xl font-bold text-slate-800">
                      2.1
                    </span>
                    <span className="text-sm text-slate-500 mb-1">
                      días de media
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Reportado vía App Tutor
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify_between mb-4">
                    <span className="text-slate-500 text-sm font-medium">
                      Adherencia Vacunación
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="text-4xl font-bold text-slate-800 mb-2">
                    89%
                  </div>
                  <p className="text-xs text-slate-400">
                    Mascotas que completan el plan
                  </p>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-blue-500 w-[89%] h-full" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- FOOTER: VALOR AGREGADO --- */}
      <section className="py-20 bg-indigo-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Benchmarking Federado</h2>
          <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
            ¿Cómo saber si tu tiempo de espera es bueno? El sistema compara tus
            KPIs (de forma anónima) con el promedio de la red de 50 clínicas veterinarias
            para que sepas dónde situarte.
          </p>
          <div className="flex justify-center gap-4 text-sm font-mono text-indigo-300">
            <span className="bg-indigo-800 px-3 py-1 rounded">
              PRIVACIDAD DIFERENCIAL ACTIVADA
            </span>
            <span className="bg-indigo-800 px-3 py-1 rounded">
              DATOS EN TIEMPO REAL
            </span>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default KpiDashboardPage;
