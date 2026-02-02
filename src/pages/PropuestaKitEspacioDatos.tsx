import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Globe, Coins, FileX, Lock, Network, TrendingUp, Server, Languages, BrainCircuit, Shield, Smartphone, Zap, CheckCircle2, ArrowDown, Share2, LayoutDashboard, ScanBarcode, Database, Activity, Cuboid, ShoppingCart, Truck, Percent, BarChart4, Target } from "lucide-react";
import servidoresAisladosImg from "@/assets/servidores-aislados.png";
import redFederadaImg from "@/assets/red-federada-activa.png";

// --- COMPONENTE AUXILIAR PARA LAS TARJETAS DE TRANSFORMACIÓN ---
interface TransformationBlockProps {
  title: string;
  subtitle: string;
  description: string;
  beforeIcon: React.ReactNode;
  afterIcon: React.ReactNode;
  beforeLabel: string;
  afterLabel: string;
  beforeVisual: React.ReactNode;
  afterVisual: React.ReactNode;
}
const TransformationBlock: React.FC<TransformationBlockProps> = ({
  title,
  subtitle,
  description,
  beforeIcon,
  afterIcon,
  beforeLabel,
  afterLabel,
  beforeVisual,
  afterVisual
}) => {
  const [view, setView] = useState<"before" | "after">("after");
  return <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      {/* Texto Explicativo */}
      <div className="order-2 md:order-1">
        <div className="inline-flex items-center gap-2 mb-2">
          <div className={`p-2 rounded-lg ${view === "after" ? "bg-blue-100" : "bg-slate-100"}`}>
            {view === "after" ? afterIcon : beforeIcon}
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        </div>
        <h4 className={`text-xl font-medium mb-4 ${view === "after" ? "text-blue-600" : "text-slate-500"}`}>
          {subtitle}
        </h4>
        <p className="text-slate-600 leading-relaxed mb-8">
          {description}
        </p>
        
        {/* Toggle Switch */}
        <div className="inline-flex bg-slate-200 p-1 rounded-lg">
          <button onClick={() => setView("before")} className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${view === "before" ? "bg-white text-slate-700 shadow" : "text-slate-500 hover:text-slate-700"}`}>
            ANTES
          </button>
          <button onClick={() => setView("after")} className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${view === "after" ? "bg-blue-600 text-white shadow" : "text-slate-500 hover:text-slate-700"}`}>
            DESPUÉS
          </button>
        </div>
      </div>

      {/* Visualización Gráfica */}
      <div className="order-1 md:order-2 h-80 w-full relative group">
        <div className={`relative w-full h-full transition-all duration-500 transform border rounded-2xl overflow-hidden ${view === "before" ? "bg-slate-100 border-slate-300 border-dashed" : "bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-xl shadow-blue-100"}`}>
          {/* Label Badge */}
          <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-bold ${view === "before" ? "bg-slate-200 text-slate-500" : "bg-emerald-100 text-emerald-700"}`}>
            {view === "before" ? beforeLabel.toUpperCase() : afterLabel.toUpperCase()}
          </div>

          {/* Dynamic Content */}
          <div className="absolute inset-0 p-8 flex items-center justify-center">
            {view === "before" ? beforeVisual : afterVisual}
          </div>
        </div>
      </div>
    </div>;
};
const PropuestaKitEspacioDatos: React.FC = () => {
  const [visionTab, setVisionTab] = useState<"today" | "tomorrow">("tomorrow");
  const [plan, setPlan] = useState<"integral" | "essential">("integral");
  return <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* NAV */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                ACCURO <span className="text-blue-600">| VetSpace-X</span>
              </span>
            </Link>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#vision" className="hover:text-blue-600 transition">Visión</a>
              <a href="#funcionalidades" className="hover:text-blue-600 transition">Módulos</a>
              <a href="#arquitectura" className="hover:text-blue-600 transition">Arquitectura</a>
              <a href="#kit-datos" className="hover:text-blue-600 transition text-emerald-600 font-bold">Ayudas Kit</a>
              <a href="#inversion" className="hover:text-blue-600 transition">Inversión</a>
            </div>
            <a href="#contacto" className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
              Solicitar Ayudas
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-slate-900" style={{
      backgroundImage: `radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
                           radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
                           radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)`
    }}>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Propuesta Estratégica Confidencial
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Transformando la Excelencia Veterinaria en <br />
            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Inteligencia de Datos
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Implementación del ecosistema <strong className="text-white">Global Data Care Veterinario</strong> para la red VetSpace-X.
            Soberanía, Interoperabilidad y Financiación Europea.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a href="#funcionalidades" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
              Explorar Ecosistema <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#inversion" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition border border-slate-700">
              Ver Modelo de Financiación
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-emerald-500 w-5 h-5" /> GDPR & Data Act Ready
            </div>
            <div className="flex items-center gap-2">
              <Globe className="text-blue-500 w-5 h-5" /> Estándar Europeo FHIR
            </div>
            <div className="flex items-center gap-2">
              <Coins className="text-yellow-500 w-5 h-5" /> Financiación Kit Digital
            </div>
          </div>
        </div>
      </header>

      {/* VISIÓN INTERACTIVA (TABS) */}
      <section id="vision" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">De la Clínica Veterinaria Digital a la Clínica Inteligente</h2>
            <p className="text-lg text-slate-600">VetSpace-X ya lidera en calidad. El siguiente paso es liderar en datos One Health.</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-2 max-w-sm mx-auto flex mb-12">
            <button onClick={() => setVisionTab("today")} className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${visionTab === "today" ? "bg-white shadow-sm text-blue-600" : "text-slate-500"}`}>
              HOY (El Silo)
            </button>
            <button onClick={() => setVisionTab("tomorrow")} className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${visionTab === "tomorrow" ? "bg-white shadow-sm text-emerald-600" : "text-slate-500"}`}>
              MAÑANA (La Red)
            </button>
          </div>

          {/* Content Today */}
          {visionTab === "today" && <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <FileX className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Datos Fragmentados</h3>
                    <p className="text-slate-600">La información vive en PDFs, excels y servidores locales aislados.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Lock className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Activo Pasivo</h3>
                    <p className="text-slate-600">El historial clínico es un coste de almacenamiento, no una fuente de ingresos.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200">
                <img src={servidoresAisladosImg} alt="Servidores aislados representando datos fragmentados" className="w-full h-auto object-contain" />
              </div>
            </div>}

          {/* Content Tomorrow */}
          {visionTab === "tomorrow" && <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Network className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Ecosistema Conectado</h3>
                    <p className="text-slate-600">Interoperabilidad en tiempo real manteniendo la propiedad del dato.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <TrendingUp className="text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Activo Líquido</h3>
                    <p className="text-slate-600">Generación de ingresos mediante investigación federada y fidelización premium.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl overflow-hidden flex items-center justify-center border border-emerald-100">
                <img src={redFederadaImg} alt="Red federada activa con servidores conectados de forma segura" className="w-full h-auto object-contain" />
              </div>
            </div>}
        </div>
      </section>

      {/* FUNCIONALIDADES: TRANSFORMACIÓN ANTES/DESPUÉS */}
      <section id="funcionalidades" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">El Salto Tecnológico</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Visualice la Transformación</h2>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
              Compare la operativa actual de una clínica veterinaria estándar frente a una clínica integrada en el ecosistema Global Data Care Veterinario.
            </p>
          </div>

          <div className="space-y-24">
            
            {/* TRANSFORMACIÓN 1: CLÍNICA */}
            <TransformationBlock title="1. Gestión Clínica Veterinaria" subtitle="De Silos Aislados a Nodo Conectado" description="Actualmente, su PMS (Gestión), sus equipos de diagnóstico por imagen y su contabilidad hablan idiomas distintos. Con ACCURO, unificamos todo bajo un estándar universal veterinario." beforeIcon={<Server className="w-6 h-6 text-slate-400" />} afterIcon={<LayoutDashboard className="w-6 h-6 text-blue-600" />} beforeLabel="Sistemas Desconectados" afterLabel="Hub Inteligente (EDC)" beforeVisual={<div className="relative w-full h-full flex items-center justify-center">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center p-3 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50">
                      <FileX className="text-slate-400 w-8 h-8 mb-2" />
                      <span className="text-xs text-slate-500 font-mono">PMS</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <FileX className="text-red-400 w-8 h-8" />
                    </div>
                    <div className="flex flex-col items-center p-3 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50">
                      <FileX className="text-slate-400 w-8 h-8 mb-2" />
                      <span className="text-xs text-slate-500 font-mono">ERP</span>
                    </div>
                  </div>
                </div>} afterVisual={<div className="relative w-full h-full flex items-center justify-center">
                  {/* Central Node */}
                  <div className="z-10 bg-blue-600 p-4 rounded-full shadow-lg shadow-blue-500/50 animate-pulse">
                    <Network className="text-white w-10 h-10" />
                  </div>
                  {/* Satellites */}
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-lg shadow text-xs font-bold text-slate-600 border border-blue-100">PMS</div>
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-lg shadow text-xs font-bold text-slate-600 border border-blue-100">ERP</div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg shadow text-xs font-bold text-slate-600 border border-blue-100">IoT</div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg shadow text-xs font-bold text-slate-600 border border-blue-100">DICOM</div>
                  {/* Connecting Lines */}
                  <div className="absolute w-3/4 h-[2px] bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 top-1/2 left-1/2 -translate-x-1/2 -z-0"></div>
                  <div className="absolute h-3/4 w-[2px] bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0"></div>
                </div>} />

            {/* TRANSFORMACIÓN 2: TUTOR/PACIENTE */}
            <TransformationBlock title="2. Experiencia del Tutor" subtitle="De Papel y Teléfono a Identidad Soberana" description="Elimine la burocracia en recepción. Entregue al tutor una App (Wallet) donde lleva las radiografías de su mascota, citas y facturas. Fidelización premium." beforeIcon={<FileX className="w-6 h-6 text-slate-400" />} afterIcon={<Smartphone className="w-6 h-6 text-emerald-600" />} beforeLabel="Gestión Analógica" afterLabel="Wallet Digital Veterinario" beforeVisual={<div className="flex flex-col items-center justify-center h-full gap-3">
                  <div className="bg-slate-100 p-3 w-28 h-36 border border-slate-300 relative rounded">
                    <div className="w-full h-2 bg-slate-300 mb-2 rounded"></div>
                    <div className="w-2/3 h-2 bg-slate-300 mb-2 rounded"></div>
                    <div className="w-full h-2 bg-slate-300 mb-2 rounded"></div>
                    <div className="w-1/2 h-2 bg-slate-300 rounded"></div>
                    <div className="absolute -right-2 -bottom-2 bg-red-100 text-red-600 p-1.5 rounded-full border border-red-200"><FileX className="w-4 h-4" /></div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Pérdida de Documentos</span>
                </div>} afterVisual={<div className="flex items-center justify-center h-full">
                  <div className="bg-slate-900 border-4 border-slate-700 rounded-2xl w-28 h-48 flex flex-col items-center justify-center relative shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-blue-500/20"></div>
                    <Cuboid className="text-emerald-400 w-14 h-14 relative z-10" />
                    <div className="mt-3 w-16 h-1 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-3 w-full flex justify-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                    </div>
                    <div className="absolute top-3 text-[8px] text-emerald-400 font-bold">WALLET</div>
                  </div>
                </div>} />

            {/* TRANSFORMACIÓN 3: INDUSTRIA */}
            <TransformationBlock title="3. Trazabilidad de Vacunas y Microchips" subtitle="De Caja Negra a Pasaporte Digital" description="¿De dónde viene esta vacuna? Con nuestra tecnología Blockchain, generamos un 'Pasaporte Digital de Producto' (DPP) automático con trazabilidad de cadena de frío." beforeIcon={<ScanBarcode className="w-6 h-6 text-slate-400" />} afterIcon={<ShieldCheck className="w-6 h-6 text-purple-600" />} beforeLabel="Origen Incierto" afterLabel="Certificado Blockchain" beforeVisual={<div className="flex items-center justify-center h-full gap-6">
                  <div className="w-20 h-20 bg-slate-200 border-2 border-dashed border-slate-400 rounded-lg flex items-center justify-center text-slate-400 text-3xl font-bold">?</div>
                  <ArrowDown className="text-slate-300 -rotate-90 w-6 h-6" />
                  <div className="text-sm text-slate-500 text-center font-medium">
                    <div className="text-red-400">¿Lote?</div>
                    <div className="text-red-400">¿Cadena Frío?</div>
                    <div className="text-red-400">¿Fabricante?</div>
                  </div>
                </div>} afterVisual={<div className="flex flex-col items-center justify-center h-full w-full gap-4">
                  <div className="flex items-center gap-3 w-full justify-center">
                    <div className="w-10 h-10 bg-white border border-purple-200 rounded-lg flex items-center justify-center shadow"><ScanBarcode className="w-5 h-5 text-purple-600" /></div>
                    <div className="h-[3px] w-10 bg-gradient-to-r from-purple-300 to-purple-500 rounded"></div>
                    <div className="w-10 h-10 bg-white border border-purple-200 rounded-lg flex items-center justify-center shadow"><Server className="w-5 h-5 text-purple-600" /></div>
                    <div className="h-[3px] w-10 bg-gradient-to-r from-purple-500 to-purple-300 rounded"></div>
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50"><CheckCircle2 className="w-6 h-6 text-white" /></div>
                  </div>
                  <span className="text-sm font-bold text-purple-700 bg-purple-50 px-4 py-2 rounded-full border border-purple-200">Cold Chain Verified</span>
                </div>} />

            {/* TRANSFORMACIÓN 4: DATOS One Health */}
            <TransformationBlock title="4. Investigación One Health" subtitle="De Coste de Almacenaje a Fuente de Ingresos" description="Deje de acumular datos muertos. Participe en el Marketplace de Investigación One Health y monetice datasets anonimizados para entrenamiento de IA veterinaria." beforeIcon={<Database className="w-6 h-6 text-slate-400" />} afterIcon={<BrainCircuit className="w-6 h-6 text-orange-600" />} beforeLabel="Dato Muerto" afterLabel="Activo Monetizable" beforeVisual={<div className="flex items-center justify-center h-full">
                  <div className="relative">
                    <Database className="w-24 h-24 text-slate-300" />
                    <Lock className="w-10 h-10 text-red-400 absolute bottom-0 right-0 bg-white rounded-full p-1.5 border-2 border-red-100 shadow" />
                  </div>
                </div>} afterVisual={<div className="flex items-center justify-center h-full relative">
                  <Database className="w-20 h-20 text-orange-300" />
                  <div className="absolute top-2 right-16 animate-bounce">
                    <Coins className="w-8 h-8 text-yellow-500 drop-shadow-lg" />
                  </div>
                  <div className="absolute bottom-8 left-16">
                    <TrendingUp className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div className="absolute -bottom-2 bg-white px-3 py-1.5 rounded-lg border border-orange-200 text-xs font-bold text-orange-600 shadow-lg">
                    Veterinary AI Training
                  </div>
                </div>} />

            {/* TRANSFORMACIÓN 5: CENTRAL DE COMPRAS VETERINARIA */}
            <TransformationBlock title="5. Central de Compras Veterinaria" subtitle="De Compras Reactivas a Abastecimiento Predictivo" description="No compre solo. Nuestro sistema lee su agenda, predice el consumo de materiales (ej: vacunas necesarias para la semana que viene) y agrupa la demanda con cientos de clínicas VetSpace-X para negociar precios mayoristas automáticos." beforeIcon={<ShoppingCart className="w-6 h-6 text-slate-400" />} afterIcon={<Truck className="w-6 h-6 text-indigo-600" />} beforeLabel="Compra Individual" afterLabel="Poder de Red VetSpace-X" beforeVisual={<div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="flex items-center gap-2 opacity-50">
                    <div className="w-12 h-16 bg-slate-200 border-2 border-slate-300 rounded flex items-center justify-center text-xs text-slate-500 font-medium">Stock?</div>
                    <ArrowDown className="text-slate-400 -rotate-90" />
                    <div className="w-12 h-12 bg-white border border-slate-300 rounded flex items-center justify-center text-slate-400 font-bold text-sm">$$$</div>
                  </div>
                  <div className="bg-red-50 text-red-500 text-xs px-2 py-1 rounded border border-red-100">
                    Sobre-coste por bajo volumen
                  </div>
                </div>} afterVisual={<div className="relative w-full h-full flex items-center justify-center">
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white p-4 rounded-full shadow-lg z-10">
                    <Percent className="w-8 h-8" />
                  </div>
                  
                  {/* Flow Lines */}
                  <div className="absolute w-full h-[2px] bg-indigo-100 top-1/2 left-0 -z-0"></div>
                  
                  {/* Nodes */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-lg border border-indigo-100 shadow text-xs text-indigo-800 text-center">
                    <span className="font-bold block">Agenda</span>
                    Predicción IA
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-lg border border-indigo-100 shadow text-xs text-green-600 text-center font-bold">
                    -30% Coste
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-4 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold border border-indigo-200 flex items-center gap-2">
                    <Truck className="w-3 h-3" /> Pedido Automático
                  </div>
                </div>} />

            {/* TRANSFORMACIÓN 6: KPI CLÍNICAS VETERINARIAS */}
            <TransformationBlock title="6. Inteligencia Operativa Veterinaria (KPIs)" subtitle="De la Intuición a la Decisión de Datos" description="Un Cockpit que fusiona rentabilidad, experiencia del tutor y excelencia clínica. Compare su rendimiento de forma anónima con el promedio de la red VetSpace-X (Benchmarking) y reciba alertas predictivas sobre picos de espera." beforeIcon={<BarChart4 className="w-6 h-6 text-slate-400" />} afterIcon={<Target className="w-6 h-6 text-orange-600" />} beforeLabel="Gestión por Intuición" afterLabel="Data Driven" beforeVisual={<div className="flex flex-col items-center justify-center h-full">
                  <div className="relative">
                    <div className="w-32 h-20 bg-slate-100 border border-slate-300 rounded flex items-end justify-around p-2 gap-1">
                      <div className="w-4 h-8 bg-slate-300"></div>
                      <div className="w-4 h-12 bg-slate-300"></div>
                      <div className="w-4 h-6 bg-slate-300"></div>
                      <div className="w-4 h-10 bg-slate-300"></div>
                    </div>
                    <div className="absolute -top-4 -right-4 bg-yellow-100 text-yellow-700 p-2 rounded-full border border-yellow-200 text-sm font-bold">
                      ?
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 mt-4 text-center">¿Soy rentable? ¿Cómo voy respecto a otras clínicas veterinarias?</span>
                </div>} afterVisual={<div className="w-full h-full p-6 flex flex-col justify-center">
                  {/* Benchmarking Graph */}
                  <div className="flex justify-between items-end text-xs text-slate-400 mb-1">
                    <span>Mi Clínica</span>
                    <span>Red VetSpace-X</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full mb-6 relative">
                    <div className="absolute left-0 top-0 h-full w-3/4 bg-orange-200 rounded-full"></div>
                    <div className="absolute left-0 top-0 h-full w-2/3 bg-orange-500 rounded-full shadow-sm"></div>
                    {/* Marker */}
                    <div className="absolute left-2/3 -top-1 w-4 h-4 bg-white border-2 border-orange-600 rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-orange-100 p-2 rounded shadow-sm text-center">
                      <span className="text-[10px] text-slate-400 uppercase block">NPS Tutor</span>
                      <span className="text-xl font-bold text-slate-800">9.8</span>
                    </div>
                    <div className="bg-white border border-orange-100 p-2 rounded shadow-sm text-center">
                      <span className="text-[10px] text-slate-400 uppercase block">Eficiencia</span>
                      <span className="text-xl font-bold text-green-600">+15%</span>
                    </div>
                  </div>
                </div>} />

          </div>
        </div>
      </section>

      {/* ARQUITECTURA */}
      <section id="arquitectura" className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <span className="text-blue-400 font-semibold tracking-wider text-sm">ZERO-TRUST ARCHITECTURE</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Soberanía por Diseño</h2>
            <p className="text-slate-400 mt-4 max-w-2xl">No llevamos los datos de sus pacientes a la nube. Llevamos la inteligencia a su clínica veterinaria.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all cursor-default">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Server className="text-blue-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Nodo Clínica (EDC)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Instalamos un "conector" en su servidor local. Funciona como una aduana digital: nada sale sin su permiso explícito.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all cursor-default">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                <Languages className="text-emerald-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Traductor Universal (FHIR Veterinario)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Traducimos sus datos (sin importar su PMS actual) al estándar internacional HL7. Su clínica veterinaria pasa a hablar el idioma de Europa.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all cursor-default">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <BrainCircuit className="text-purple-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Colaboración One Health</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Para estudios de IA veterinaria, los datos no viajan; viajan los algoritmos. Privacidad absoluta para sus pacientes y tutores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Cronograma de Despliegue</h2>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">12 meses para transformar su clínica en un nodo del ecosistema europeo de datos de salud veterinaria</p>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            {/* Fase 1: Infraestructura Soberana */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Shield className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-800">Fase 1: Infraestructura Soberana</h3>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Mes 1-2</span>
                </div>
                <p className="text-sm text-slate-600">Instalación del Espacio de Datos Conector (EDC), servidor FHIR federado y auditoría de seguridad Data Act.</p>
              </div>
            </div>

            {/* Fase 2: Núcleo Clínico */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Activity className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-800">Fase 2: Núcleo Clínico</h3>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Mes 3-4</span>
                </div>
                <p className="text-sm text-slate-600">Dashboard de Gestión Clínica en tiempo real, conexión ERP/Agenda existente y KPIs operativos básicos.</p>
              </div>
            </div>

            {/* Fase 3: Experiencia Paciente */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-teal-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-teal-300 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-800">Fase 3: Experiencia del Tutor</h3>
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">Mes 5-6</span>
                </div>
                <p className="text-sm text-slate-600">Wallet del Tutor (App móvil), gestión de citas y consentimientos, historial digital de la mascota.</p>
              </div>
            </div>

            {/* Fase 4: Cadena de Valor */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Truck className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-800">Fase 4: Cadena de Valor Veterinaria</h3>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Mes 7-9</span>
                </div>
                <p className="text-sm text-slate-600">Central de Compras Federada, Pasaporte Digital de Producto (DPP) y trazabilidad de vacunas/microchips.</p>
              </div>
            </div>

            {/* Fase 5: Inteligencia Colectiva */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-amber-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Zap className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-amber-300 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-800">Fase 5: Inteligencia One Health</h3>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">Mes 10-12</span>
                </div>
                <p className="text-sm text-slate-600">Marketplace de Datos One Health, IA Federada Veterinaria, Cockpit de benchmarking VetSpace-X.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN EXPLICATIVA: KIT ESPACIO DE DATOS */}
      <section id="kit-datos" className="py-24 bg-white relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold mb-4 border border-yellow-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Convocatoria Abierta 2025
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">¿Qué es el Kit Espacio de Datos?</h2>
            <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
              Es un programa del Gobierno de España (financiado por fondos Next Generation EU) diseñado específicamente para fomentar la <strong>soberanía del dato</strong> y la creación de espacios compartidos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1: El Objetivo */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-2xl">🇪🇺</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">El Objetivo Europeo</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Europa quiere dejar de depender de nubes extranjeras. Paga a las empresas para que instalen infraestructuras propias (como nuestros conectores EDC) que permitan compartir datos de forma segura.
              </p>
            </div>

            {/* Card 2: La Cobertura */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-white shadow-xl transform md:-translate-y-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Coins className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Subvención a Fondo Perdido</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                No es un crédito. Es una ayuda directa que cubre el <strong>100%</strong> de los costes de implantación tecnológica y consultoría.
              </p>
              <div className="inline-block bg-white/20 px-3 py-1 rounded text-xs font-bold">
                Hasta 30.000€ por clínica
              </div>
            </div>

            {/* Card 3: El Papel de ACCURO */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-2xl">🛡️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Escudo Burocrático</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                ACCURO actúa como Agente Digitalizador. Nosotros redactamos la memoria técnica, presentamos la solicitud y justificamos la ayuda.
              </p>
              <p className="text-slate-900 font-bold text-sm mt-4 border-t border-slate-200 pt-2">
                Su esfuerzo administrativo: Cero.
              </p>
            </div>
          </div>

          {/* Timeline del Proceso */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Hoja de Ruta de la Financiación</h3>
            
            <div className="relative">
              {/* Línea conectora */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Paso 1 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg ring-4 ring-white">1</div>
                  <h4 className="font-bold text-slate-900">Adhesión</h4>
                  <p className="text-xs text-slate-500 mt-2">Firma del acuerdo y pago de la cuota de entrada (Adelanto).</p>
                </div>

                {/* Paso 2 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg ring-4 ring-white">2</div>
                  <h4 className="font-bold text-slate-900">Solicitud</h4>
                  <p className="text-xs text-slate-500 mt-2">ACCURO presenta la memoria técnica a red.es.</p>
                </div>

                {/* Paso 3 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg ring-4 ring-white">3</div>
                  <h4 className="font-bold text-slate-900">Concesión</h4>
                  <p className="text-xs text-slate-500 mt-2">Aprobación de los fondos (aprox. 3-6 meses).</p>
                </div>

                {/* Paso 4 */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-white border-2 border-slate-900 text-slate-900 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg ring-4 ring-white">4</div>
                  <h4 className="font-bold text-slate-900">Justificación</h4>
                  <p className="text-xs text-slate-500 mt-2">ACCURO justifica el proyecto ante red.es.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PRECIOS / FINANCIACIÓN */}
      <section id="inversion" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-bold tracking-wide uppercase text-sm">Kit Espacio de Datos</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Modelo de Co-Inversión Europea</h2>
            <p className="text-lg text-slate-600 mt-4">ACCURO gestiona la subvención KIT ESPACIO DE DATOS de RED.ES.</p>
          </div>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 p-1 rounded-xl inline-flex relative">
              <div className={`absolute w-1/2 h-[calc(100%-8px)] top-1 bg-white rounded-lg shadow-sm transition-all duration-300 ${plan === "integral" ? "left-1" : "left-[calc(50%)]"}`} />
              <button onClick={() => setPlan("integral")} className={`relative z-10 px-6 py-3 rounded-lg text-sm font-bold transition-colors ${plan === "integral" ? "text-slate-900" : "text-slate-500"}`}>
                Transformación Integral
              </button>
              <button onClick={() => setPlan("essential")} className={`relative z-10 px-6 py-3 rounded-lg text-sm font-bold transition-colors ${plan === "essential" ? "text-slate-900" : "text-slate-500"}`}>
                Digitalización Esencial
              </button>
            </div>
          </div>

          {/* Pricing Card Container */}
          <div className="max-w-md mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            {/* PLAN INTEGRAL (REDISENADO PARA MÁXIMA CLARIDAD) */}
            {plan === "integral" && <div className="relative bg-white rounded-2xl border border-blue-100 shadow-2xl shadow-blue-900/10 animate-fade-in overflow-hidden">
                
                {/* Banda Superior: Valor Diferencial */}
                <div className="bg-blue-600 px-8 py-3 flex justify-between items-center text-white">
                  <span className="text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-300" fill="currentColor" /> Recomendado VetSpace-X
                  </span>
                  <span className="text-xs font-medium bg-blue-700 px-2 py-1 rounded">Todo Incluido</span>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-slate-900">Pack Transformación Integral Veterinaria</h3>
                    <p className="text-slate-500 text-sm mt-2">
                      La solución definitiva para clínicas veterinarias que buscan liderar sin carga operativa.
                    </p>
                  </div>
                  
                  {/* Resumen de Precio Compacto */}
                  <div className="flex items-center justify-between bg-gradient-to-r from-slate-50 to-emerald-50 rounded-xl p-4 mb-6 border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-100 p-2 rounded-lg">
                        <Coins className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 block">PAGO ANTICIPADO</span>
                        <span className="text-2xl font-bold text-slate-900">5.000 €</span>
                        <span className="text-xs text-slate-400 ml-1">+ IVA</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-emerald-600 font-medium block">Subvención </span>
                      <span className="text-lg font-bold text-emerald-600">+30.000 €</span>
                    </div>
                  </div>

                  {/* BLOQUE 1: GESTIÓN ADMINISTRATIVA (El Servicio) */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">1. Gestión de Ayudas (Burocracia Cero)</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700"><strong>Tramitación 100% incluida:</strong> Redacción de memoria técnica, solicitud y justificación ante el Ministerio.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700"><strong>Garantía de éxito:</strong> Soporte legal y técnico durante todo el proceso de subvención.</span>
                      </li>
                    </ul>
                  </div>

                  {/* BLOQUE 2: FUNCIONALIDAD TÉCNICA (El Producto) */}
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">2. Suite Tecnológica Completa (6 Módulos)</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span><strong>Clínica:</strong> Dashboard 360º veterinario, conexión PMS, Servidor FHIR federado.</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <span><strong>Tutor:</strong> Super-App Wallet con historial de mascota, citas y documentos.</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <span><strong>Industria:</strong> Pasaporte Digital de Producto (DPP) con trazabilidad cadena de frío.</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                        <span><strong>I+D:</strong> IA Federada Veterinaria y Marketplace One Health.</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        <span><strong>Compras:</strong> Central federada con pedidos predictivos y descuentos de red.</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        <span><strong>KPIs:</strong> Cockpit de inteligencia operativa con benchmarking VetSpace-X.</span>
                      </li>
                    </ul>
                  </div>

                  <a href="mailto:emilio.mulet@globaldatacare.es?subject=Adhesión Plan Integral VetSpace-X - Solicitud Kit Datos" className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                    Solicitar Pack Integral
                  </a>
                  <p className="text-center text-xs text-slate-400 mt-3">
                    Plazas limitadas por la convocatoria Kit Espacio de Datos 2025.
                  </p>
                </div>
              </div>}

            {/* PLAN ESENCIAL */}
            {plan === "essential" && <div className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-xl animate-fade-in">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Pack Esencial Veterinario</h3>
                    <p className="text-slate-500 text-sm mt-1">Infraestructura y cumplimiento normativo veterinario</p>
                  </div>
                </div>
                
                {/* BLOQUE 1: RESUMEN ECONÓMICO COMPACTO */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">PAGO ANTICIPADO</p>
                      <p className="text-2xl font-bold text-slate-900">2.000 € <span className="text-sm font-normal text-slate-500">+ IVA</span></p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-emerald-600 uppercase tracking-wider">SUBVENCIÓN</p>
                      <p className="text-2xl font-bold text-emerald-600">+15.000 €</p>
                    </div>
                  </div>
                </div>

                {/* BLOQUE 2: FUNCIONALIDAD TÉCNICA (3 Módulos Core) */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Módulos Incluidos (3 Core)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span><strong>Clínica:</strong> Dashboard básico veterinario y servidor FHIR federado.</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span><strong>Tutor:</strong> Acceso básico al historial de mascota y citas.</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      <span><strong>KPIs:</strong> Métricas operativas esenciales.</span>
                    </li>
                  </ul>
                </div>

                {/* BLOQUE 3: GESTIÓN INCLUIDA */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Servicio Incluido</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-emerald-500 w-4 h-4" /> Gestión administrativa 100%
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-emerald-500 w-4 h-4" /> Conexión EDC segura
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-emerald-500 w-4 h-4" /> Soporte técnico continuo
                    </li>
                  </ul>
                </div>

                <a href="mailto:emilio.mulet@globaldatacare.es?subject=Adhesión Plan Esencial VetSpace-X" className="block w-full bg-white text-slate-900 border-2 border-slate-200 text-center py-4 rounded-xl font-bold hover:bg-slate-50 transition">Solicitar Kit Espacio de Datos</a>
              </div>}
          </div>
        </div>
      </section>

      {/* FOOTER / CTA FINAL */}
      <section id="contacto" className="py-20 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            El futuro de la veterinaria no es tener mejores equipos.<br />Es tener mejores datos One Health.
          </h2>
          <p className="text-slate-400 mb-8">La ventana de oportunidad de los fondos europeos es limitada. Posicione su clínica veterinaria hoy.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:emilio.mulet@globaldatacare.es" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition">
              Contactar con Global Data Care
            </a>
            <Link to="/consulting/technical-proposal" className="px-8 py-4 bg-transparent border border-slate-700 text-slate-300 hover:text-white hover:border-white rounded-xl font-bold transition">
              Descargar Whitepaper Técnico
            </Link>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500">
            <p>© 2025 ACCURO TECHNOLOGY. Global Data Care Veterinary Ecosystem.</p>
            <p className="mt-2">Confidencialidad: Este documento contiene propiedad intelectual exclusiva.</p>
          </div>
        </div>
      </section>
    </div>;
};
export default PropuestaKitEspacioDatos;