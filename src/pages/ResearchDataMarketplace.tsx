import React, { useEffect, useState } from "react";
import {
  Database,
  BrainCircuit,
  Lock,
  Search,
  ShoppingCart,
  Eye,
  TrendingUp,
  Globe,
  FileJson,
  CheckCircle2,
} from "lucide-react";

// --- DATOS MOCK (Simulación) ---

const datasets = [
  {
    id: 1,
    title: "Cohorte Longitudinal Caries Pediátrica",
    author: "Clínica Universitaria de Valencia",
    n: 12500,
    price: "450 Tokens",
    type: "Datos Estructurados + Imágenes",
    quality: "Gold Standard (Validado por humanos)",
    tags: ["Pediatría", "Caries", "Dieta"],
    previewData: {
      patient_id: "SYNTH-9921",
      age_group: "6-12",
      dmft_index: 4.2,
      diet_sugar_freq: "High",
      fluoride_exposure: false,
      intervention_history: ["Sealant #16", "Filling #36"],
    },
  },
  {
    id: 2,
    title: "Marcadores Genéticos Periodontitis Agresiva",
    author: "Dr. Genetic Lab (Hub Norte)",
    n: 850,
    price: "1200 Tokens",
    type: "Datos Genómicos + Clínicos",
    quality: "Sequencing High-Fi",
    tags: ["Periodoncia", "Genética", "Raro"],
    previewData: {
      sample_id: "GEN-552",
      periodontal_stage: "Stage IV",
      grade: "Grade C",
      marker_il1: "Positive",
      pocket_depth_avg: "6mm",
      bone_loss_ratios: ">50%",
    },
  },
  {
    id: 3,
    title: "Segmentación Canal Mandibular (CBCT)",
    author: "Radiology AI Corp",
    n: 5000,
    price: "800 Tokens",
    type: "DICOM + Máscaras Segmentación",
    quality: "Pixel-Perfect Annotation",
    tags: ["Implantología", "Visión Artificial", "CBCT"],
    previewData: {
      scan_id: "CBCT-8821",
      resolution: "0.2mm voxel",
      nerve_path_coordinates: [
        [12, 45, 99],
        [13, 46, 100],
        "...",
      ],
      noise_level: "Low",
      artifact_reduction: true,
    },
  },
];

const algorithms = [
  {
    id: 101,
    name: "Predictor de Riesgo Periimplantario",
    accuracy: "94.5%",
    author: "Consorcio Europeo Perio",
    status: "Production Ready",
    nodes: 120,
  },
  {
    id: 102,
    name: "Auto-Detección Caries Interproximal",
    accuracy: "91.2%",
    author: "DeepDent AI",
    status: "Beta Testing",
    nodes: 450,
  },
];

const ResearchDataMarketplace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"data" | "algos">("data");
  const [selectedPreview, setSelectedPreview] = useState<any>(null);

  useEffect(() => {
    const descriptionContent =
      "Marketplace federado de datos clínicos y algoritmos para investigación en salud bucodental, con datos sintéticos y privacidad preservada.";

    document.title =
      "Marketplace de Datos y Algoritmos Clínicos | ACCURO TECHNOLOGY";

    let metaDescription = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = descriptionContent;

    const canonicalUrl = `${window.location.origin}/portal/research`;
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
      name: "Marketplace de Datos y Algoritmos Clínicos",
      description: descriptionContent,
    };

    let script = document.querySelector(
      "script#research-data-marketplace-ldjson",
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "research-data-marketplace-ldjson";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(ldJson);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* --- HERO SECTION: ECOSISTEMA DE DATOS --- */}
      <section className="bg-slate-900 text-white pt-20 pb-24 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 rounded-l-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                <span>Red Global de Inteligencia Colectiva</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mercado Federado de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                  Datos Clínicos y Algoritmos
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Monetiza tus registros clínicos anonimizados o adquiere datasets
                validados para entrenar tus propios modelos. Todo bajo
                arquitectura Zero-Trust: los datos nunca abandonan su nodo de
                origen sin permiso.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold shadow-lg shadow-orange-900/40 flex items-center gap-2 transition-all">
                  <Database className="w-5 h-5" /> Publicar mis Datos
                </button>
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-bold backdrop-blur-sm flex items-center gap-2 transition-all">
                  <BrainCircuit className="w-5 h-5" /> Desplegar Estudio
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md w-full md:w-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 text-green-400 rounded-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Volumen de Transacciones</p>
                  <p className="text-2xl font-bold">2.4M Registros/día</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Nodos Activos</span>
                  <span className="text-white font-mono">542 Clínicas</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Datos Sintéticos Generados</span>
                  <span className="text-white font-mono">15TB</span>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full mt-2">
                  <div className="bg-orange-500 h-1 rounded-full w-3/4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TABS DE NAVEGACIÓN --- */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("data")}
              className={`py-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "data"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Database className="w-4 h-4" /> Marketplace de Datos
            </button>
            <button
              onClick={() => setActiveTab("algos")}
              className={`py-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === "algos"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <BrainCircuit className="w-4 h-4" /> Catálogo de Algoritmos
            </button>
          </div>
        </div>
      </section>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <section className="py-12 min-h-[600px]">
        <div className="container mx-auto px-6">
          {/* VISTA 1: MARKETPLACE DE DATOS */}
          {activeTab === "data" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    Datasets Disponibles
                  </h2>
                  <p className="text-slate-500">
                    Adquiere derechos de entrenamiento sobre datos anonimizados o
                    sintéticos.
                  </p>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar patología, autor..."
                    className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {datasets.map((ds) => (
                  <div
                    key={ds.id}
                    className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded-md font-bold">
                          {ds.quality}
                        </span>
                        <Lock className="w-4 h-4 text-slate-400" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {ds.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4 flex items-center gap-1">
                        Por: {ds.author} <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-sm text-slate-600 mb-6 bg-slate-50 p-3 rounded-lg">
                        <div>
                          <span className="block text-xs text-slate-400">
                            Registros (N)
                          </span>
                          <span className="font-mono font-bold">
                            {ds.n.toLocaleString()}
                          </span>
                        </div>
                        <div>
                          <span className="block text-xs text-slate-400">Precio</span>
                          <span className="font-mono font-bold text-orange-600">
                            {ds.price}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedPreview(ds)}
                          className="flex-1 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 flex items-center justify-center gap-2"
                        >
                          <Eye className="w-4 h-4" /> Ver Muestra
                        </button>
                        <button
                          type="button"
                          className="flex-1 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 flex items-center justify-center gap-2"
                        >
                          <ShoppingCart className="w-4 h-4" /> Comprar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VISTA 2: CATÁLOGO DE ALGORITMOS */}
          {activeTab === "algos" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8 bg-blue-50 border border-blue-100 p-6 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-900 text-lg">
                    Catálogo de Innovación Abierta
                  </h3>
                  <p className="text-blue-700/80 mt-1">
                    Estos modelos ya han sido entrenados por la red federada.
                    Puedes licenciarlos para uso clínico en tu consulta o
                    contribuir con tus datos para mejorarlos a cambio de
                    royalties.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {algorithms.map((algo) => (
                  <div
                    key={algo.id}
                    className="bg-white p-6 rounded-xl border border-slate-200 flex justify-between items-center hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
                        AI
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{algo.name}</h4>
                        <p className="text-sm text-slate-500">
                          Autor: {algo.author}
                        </p>
                        <div className="flex gap-3 mt-2 text-xs">
                          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                            Precisión: {algo.accuracy}
                          </span>
                          <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                            {algo.nodes} Nodos entrenando
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="px-4 py-2 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 font-medium text-sm"
                    >
                      Licenciar Uso
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- MODAL DE PREVIEW DATOS SINTÉTICOS --- */}
      {selectedPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            {/* Header Modal */}
            <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-800">
              <div className="flex items-center gap-2 text-white">
                <FileJson className="w-5 h-5 text-orange-400" />
                <span className="font-bold">
                  Vista Previa: Datos Sintéticos Generados
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPreview(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Body Modal (Code View) */}
            <div className="p-6 bg-black relative">
              <div className="absolute top-4 right-4 text-xs font-mono text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                ● LIVE GENERATION
              </div>
              <p className="text-slate-400 text-sm mb-4">
                Esta es una muestra sintética generada por IA que replica la
                estructura estadística del dataset real sin exponer datos
                personales (K-Anonymity Level 5).
              </p>

              <pre className="font-mono text-xs md:text-sm text-green-400 overflow-x-auto p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                {JSON.stringify(selectedPreview.previewData, null, 2)}
              </pre>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPreview(null)}
                  className="px-4 py-2 text-slate-300 hover:text-white text-sm"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-sm font-bold shadow-lg shadow-orange-900/50"
                >
                  Adquirir Dataset Completo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchDataMarketplace;
