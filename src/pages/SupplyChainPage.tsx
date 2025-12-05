import React, { useEffect } from "react";
import {
  ShoppingCart,
  TrendingUp,
  Users,
  BrainCircuit,
  Truck,
  PackageCheck,
  CalendarClock,
  ArrowRight,
  Zap,
} from "lucide-react";

const SupplyChainPage: React.FC = () => {
  useEffect(() => {
    const descriptionContent =
      "Central de compras predictiva para clínicas dentales: conecta agenda, stock y proveedores para compras federadas con ahorro en material médico-dental.";

    document.title =
      "Central de Compras Predictiva | ACCURO TECHNOLOGY";

    let metaDescription = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = descriptionContent;

    const canonicalUrl = `${window.location.origin}/portal/supply`;
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
      name: "Central de Compras Predictiva para Clínicas Dentales",
      description: descriptionContent,
    };

    let script = document.querySelector(
      "script#supply-chain-page-ldjson",
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "supply-chain-page-ldjson";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(ldJson);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- HERO SECTION: CEREBRO LOGÍSTICO --- */}
      <section className="relative py-20 bg-slate-900 overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-cyan-600/10 rounded-l-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium mb-6">
                <BrainCircuit className="w-4 h-4" />
                <span>AI Supply Chain</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Compras Predictivas <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                  Federadas e Inteligentes
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Tu agenda clínica dicta tu stock. El sistema se conecta con tu
                ERP, predice qué materiales necesitarás y lanza órdenes de
                compra conjuntas con cientos de clínicas para conseguir precios
                de mayorista, manteniendo tu independencia.
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-900/50 flex items-center gap-2 transition-all"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Unirme a la Central
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Gráfico Abstracto de Red */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span className="font-bold">Nodo Federado #402</span>
                  </div>
                  <span className="text-green-400 text-xs font-mono bg-green-500/20 px-2 py-1 rounded">
                    ● CONECTADO A ERP
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800 p-4 rounded-xl">
                    <p className="text-xs text-slate-400 mb-1">
                      Volumen Agrupado (Red)
                    </p>
                    <p className="text-2xl font-bold text-white">€2.4M</p>
                    <p className="text-xs text-green-400 flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" /> +15% vs mes anterior
                    </p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-xl">
                    <p className="text-xs text-slate-400 mb-1">Ahorro Medio</p>
                    <p className="text-2xl font-bold text-cyan-400">22.5%</p>
                    <p className="text-xs text-slate-400 mt-1">
                      En implantes y biomateriales
                    </p>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-3 text-xs font-mono text-slate-300 flex items-center justify-between">
                  <span>Procesando Agenda...</span>
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-200" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CÓMO FUNCIONA: LA LÓGICA PREDICTIVA --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Del Dato Clínico al Pedido Automático
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              El sistema analiza tus datos históricos y futuros para que nunca
              te sobre ni te falte material.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-200 via-cyan-400 to-blue-200 border-t-2 border-dashed border-slate-300 z-0" />

            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-slate-100 group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm">
                <CalendarClock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">
                1. Lectura de Agenda
              </h3>
              <p className="text-slate-500 text-center text-sm leading-relaxed">
                El algoritmo lee tu CRM: "Próxima semana: 15 cirugías de
                implante y 4 regeneraciones óseas".
              </p>
            </div>

            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-cyan-100 ring-2 ring-cyan-50 group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm animate-pulse">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">
                2. Cálculo y Agrupación
              </h3>
              <p className="text-slate-500 text-center text-sm leading-relaxed">
                Cruza tu stock actual con la necesidad futura. Detecta déficit y
                suma tu pedido al de 500 clínicas más.
              </p>
            </div>

            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg border border-slate-100 group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">
                3. Envío Just-in-Time
              </h3>
              <p className="text-slate-500 text-center text-sm leading-relaxed">
                Los proveedores reciben una mega-orden y envían directamente a
                tu clínica antes de que inicie la semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DASHBOARD INTERACTIVO: SIMULACIÓN --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

            <div className="flex flex-col md:flex-row gap-12 relative z-10">
              <div className="md:w-1/3">
                <div className="inline-flex items-center gap-2 text-cyan-400 font-bold mb-4 uppercase tracking-wider text-xs">
                  <Zap className="w-4 h-4" /> Live Demo
                </div>
                <h3 className="text-3xl font-bold mb-4">Tu Asistente de Compras</h3>
                <p className="text-slate-400 mb-6">
                  Mira cómo el sistema detecta una rotura de stock futura basada
                  en tus citas y propone una solución automatizada.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-300">
                        Citas Próxima Semana
                      </span>
                      <span className="font-bold text-white">
                        15 Implantes
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full w-[70%]" />
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-300">
                        Stock Actual en Clínica
                      </span>
                      <span className="font-bold text-red-400">
                        4 Unidades (Déficit)
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full w-[20%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 bg-white text-slate-900 rounded-2xl p-6 shadow-xl">
                <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
                  <div>
                    <h4 className="font-bold text-xl flex items-center gap-2">
                      <PackageCheck className="w-6 h-6 text-cyan-600" />
                      Propuesta de Pedido Automático
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Generado por IA • Basado en Agenda Sem. 42
                    </p>
                  </div>
                  <span className="bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Pendiente Aprobación
                  </span>
                </div>

                <table className="w-full text-sm mb-6">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-100">
                      <th className="text-left py-2">Producto</th>
                      <th className="text-center py-2">Cantidad</th>
                      <th className="text-right py-2">Precio Unitario</th>
                      <th className="text-right py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-50">
                      <td className="py-3 font-medium">
                        Implante Titanio Tipo-Z
                      </td>
                      <td className="text-center py-3">15 u.</td>
                      <td className="text-right py-3 text-slate-400 line-through">
                        120€
                      </td>
                      <td className="text-right py-3 font-bold">
                        95€
                        <span className="text-xs text-green-600 font-normal">
                          {" "}
                          (-21%)
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Biomaterial Óseo 0.5g</td>
                      <td className="text-center py-3">5 u.</td>
                      <td className="text-right py-3 text-slate-400 line-through">
                        85€
                      </td>
                      <td className="text-right py-3 font-bold">
                        70€
                        <span className="text-xs text-green-600 font-normal">
                          {" "}
                          (-18%)
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 text-white p-2 rounded-full">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-green-800">Ahorro detectado</p>
                      <p className="text-xs text-green-600">
                        Al unirte al lote federado #9921
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-green-700">450€</span>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    className="flex-1 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                  >
                    Aprobar Pedido (1 Click)
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 text-slate-600"
                  >
                    Modificar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GRID DE BENEFICIOS --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-2xl font-bold mb-12">
            Todo lo que puedes adquirir federadamente
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Implantes & Prótesis", icon: "🦷" },
              { name: "Células Madre Bucales", icon: "🧬" },
              { name: "Equipamiento Rayos X", icon: "⚡" },
              { name: "Consumibles Diarios", icon: "🧤" },
              { name: "Mobiliario Clínico", icon: "💺" },
              { name: "Software & Licencias", icon: "💻" },
              { name: "Formación Médica", icon: "🎓" },
              { name: "Servicios de Marketing", icon: "📢" },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow cursor-pointer"
              >
                <span className="text-4xl">{item.icon}</span>
                <span className="font-bold text-slate-700 text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplyChainPage;
