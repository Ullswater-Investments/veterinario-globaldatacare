import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, Globe, Coins, FileX, Lock, Network, TrendingUp, 
  Server, Languages, BrainCircuit, Shield, Smartphone, Zap, 
  CheckCircle2, ArrowDown, Share2
} from "lucide-react";
import servidoresAisladosImg from "@/assets/servidores-aislados.png";

const PropuestaKitEspacioDatos: React.FC = () => {
  const [visionTab, setVisionTab] = useState<"today" | "tomorrow">("tomorrow");
  const [plan, setPlan] = useState<"integral" | "essential">("integral");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* NAV */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                ACCURO <span className="text-blue-600">| BQDC</span>
              </span>
            </Link>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#vision" className="hover:text-blue-600 transition">Visión</a>
              <a href="#arquitectura" className="hover:text-blue-600 transition">Arquitectura</a>
              <a href="#roadmap" className="hover:text-blue-600 transition">Roadmap</a>
              <a href="#inversion" className="hover:text-blue-600 transition">Inversión</a>
            </div>
            <a 
              href="#contacto" 
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition"
            >
              Reservar Plaza
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-slate-900"
        style={{
          backgroundImage: `radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
                           radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
                           radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)`
        }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Propuesta Estratégica Confidencial
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Transformando la Excelencia Clínica en <br/>
            <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Inteligencia de Datos
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Implementación del ecosistema <strong className="text-white">Global Data Care</strong> para la red BQDC.
            Soberanía, Interoperabilidad y Financiación Europea.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a 
              href="#vision" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              Descubrir Propuesta <ArrowDown className="w-4 h-4" />
            </a>
            <a 
              href="#inversion" 
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition border border-slate-700"
            >
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">De la Clínica Digital a la Clínica Inteligente</h2>
            <p className="text-lg text-slate-600">BQDC ya lidera en calidad. El siguiente paso es liderar en datos.</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-2 max-w-sm mx-auto flex mb-12">
            <button 
              onClick={() => setVisionTab("today")} 
              className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
                visionTab === "today" 
                  ? "bg-white shadow-sm text-blue-600" 
                  : "text-slate-500"
              }`}
            >
              HOY (El Silo)
            </button>
            <button 
              onClick={() => setVisionTab("tomorrow")} 
              className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all ${
                visionTab === "tomorrow" 
                  ? "bg-white shadow-sm text-emerald-600" 
                  : "text-slate-500"
              }`}
            >
              MAÑANA (La Red)
            </button>
          </div>

          {/* Content Today */}
          {visionTab === "today" && (
            <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
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
                <img 
                  src={servidoresAisladosImg} 
                  alt="Servidores aislados representando datos fragmentados" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}

          {/* Content Tomorrow */}
          {visionTab === "tomorrow" && (
            <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
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
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl h-64 flex items-center justify-center border border-emerald-100">
                <span className="text-emerald-600 font-mono flex items-center gap-2">
                  <Share2 /> Red Federada Activa
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ARQUITECTURA */}
      <section id="arquitectura" className="py-24 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <span className="text-blue-400 font-semibold tracking-wider text-sm">ZERO-TRUST ARCHITECTURE</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Soberanía por Diseño</h2>
            <p className="text-slate-400 mt-4 max-w-2xl">No llevamos sus datos a la nube. Llevamos la inteligencia a su clínica.</p>
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
              <h3 className="text-xl font-bold mb-3">2. Traductor Universal (FHIR)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Traducimos sus datos (sin importar su PMS actual) al estándar internacional HL7. Su clínica pasa a hablar el idioma de Europa.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all cursor-default">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <BrainCircuit className="text-purple-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Colaboración Segura</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Para estudios de IA, los datos no viajan; viajan los algoritmos. Privacidad absoluta para sus pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Cronograma de Despliegue</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            {/* Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Shield className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-800">Fase 1: Fortaleza Digital</h3>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Mes 1-3</span>
                </div>
                <p className="text-sm text-slate-600">Instalación del conector soberano, auditoría de seguridad y cumplimiento Data Act.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-800">Fase 2: Experiencia 360º</h3>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">Mes 4-6</span>
                </div>
                <p className="text-sm text-slate-600">Lanzamiento de la Wallet del Paciente (App) y Dashboard de Gestión en tiempo real.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Zap className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-slate-800">Fase 3: Inteligencia Colectiva</h3>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">Mes 7-12</span>
                </div>
                <p className="text-sm text-slate-600">Activación del Marketplace de Datos y algoritmos de IA Preventiva federada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOS / FINANCIACIÓN */}
      <section id="inversion" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-bold tracking-wide uppercase text-sm">Kit Espacio de Datos</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Modelo de Co-Inversión Europea</h2>
            <p className="text-lg text-slate-600 mt-4">ACCURO gestiona la subvención del 85% a fondo perdido.</p>
          </div>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 p-1 rounded-xl inline-flex relative">
              <div 
                className={`absolute w-1/2 h-[calc(100%-8px)] top-1 bg-white rounded-lg shadow-sm transition-all duration-300 ${
                  plan === "integral" ? "left-1" : "left-[calc(50%)]"
                }`}
              />
              <button 
                onClick={() => setPlan("integral")} 
                className={`relative z-10 px-6 py-3 rounded-lg text-sm font-bold transition-colors ${
                  plan === "integral" ? "text-slate-900" : "text-slate-500"
                }`}
              >
                Transformación Integral
              </button>
              <button 
                onClick={() => setPlan("essential")} 
                className={`relative z-10 px-6 py-3 rounded-lg text-sm font-bold transition-colors ${
                  plan === "essential" ? "text-slate-900" : "text-slate-500"
                }`}
              >
                Digitalización Esencial
              </button>
            </div>
          </div>

          {/* Pricing Card Container */}
          <div className="max-w-md mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            {/* PLAN INTEGRAL */}
            {plan === "integral" && (
              <div className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-xl animate-fade-in">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Pack Integral</h3>
                    <p className="text-slate-500 text-sm mt-1">Para líderes en investigación e IA</p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Recomendado</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-slate-50">
                    <span className="text-slate-600">Valor Tecnológico</span>
                    <span className="font-semibold text-slate-900 line-through decoration-red-400">35.000 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-50">
                    <span className="text-emerald-600 font-medium">Subvención Europea</span>
                    <span className="font-bold text-emerald-600">- 30.000 €</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-slate-900 font-bold text-lg">Inversión Final</span>
                    <span className="text-4xl font-bold text-slate-900">5.000 €</span>
                  </div>
                  <p className="text-xs text-right text-slate-400">+ IVA (Cuota única de adhesión)</p>
                </div>

                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-blue-500 w-4 h-4" /> Conector Soberano Completo
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-blue-500 w-4 h-4" /> Wallet Paciente + Dashboard
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-blue-500 w-4 h-4" /> Módulo IA & Research
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-blue-500 w-4 h-4" /> Gestión administrativa incluida
                  </li>
                </ul>

                <a 
                  href="mailto:ivan.becerro@accuro.es?subject=Adhesión Plan Integral BQDC" 
                  className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold hover:bg-slate-800 transition"
                >
                  Reservar Plaza
                </a>
              </div>
            )}

            {/* PLAN ESENCIAL */}
            {plan === "essential" && (
              <div className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-xl animate-fade-in">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Pack Esencial</h3>
                    <p className="text-slate-500 text-sm mt-1">Eficiencia y cumplimiento normativo</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-slate-50">
                    <span className="text-slate-600">Valor Tecnológico</span>
                    <span className="font-semibold text-slate-900 line-through decoration-red-400">17.000 €</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-50">
                    <span className="text-emerald-600 font-medium">Subvención Europea</span>
                    <span className="font-bold text-emerald-600">- 15.000 €</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-slate-900 font-bold text-lg">Inversión Final</span>
                    <span className="text-4xl font-bold text-slate-900">2.000 €</span>
                  </div>
                  <p className="text-xs text-right text-slate-400">+ IVA (Cuota única de adhesión)</p>
                </div>

                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-slate-400 w-4 h-4" /> Conector de Seguridad
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-slate-400 w-4 h-4" /> Estandarización FHIR
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-slate-400 w-4 h-4" /> Dashboard Básico
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-slate-400 w-4 h-4" /> Gestión administrativa incluida
                  </li>
                </ul>

                <a 
                  href="mailto:ivan.becerro@accuro.es?subject=Adhesión Plan Esencial BQDC" 
                  className="block w-full bg-white text-slate-900 border-2 border-slate-200 text-center py-4 rounded-xl font-bold hover:bg-slate-50 transition"
                >
                  Reservar Plaza
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER / CTA FINAL */}
      <section id="contacto" className="py-20 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            El futuro de la odontología no es tener mejores sillones.<br/>Es tener mejores datos.
          </h2>
          <p className="text-slate-400 mb-8">La ventana de oportunidad de los fondos europeos es limitada. Posicione su clínica hoy.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:ivan.becerro@accuro.es" 
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition"
            >
              Contactar con ACCURO
            </a>
            <Link 
              to="/consulting/technical-proposal" 
              className="px-8 py-4 bg-transparent border border-slate-700 text-slate-300 hover:text-white hover:border-white rounded-xl font-bold transition"
            >
              Descargar Whitepaper Técnico
            </Link>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500">
            <p>© 2025 ACCURO TECHNOLOGY. Global Data Care Ecosystem.</p>
            <p className="mt-2">Confidencialidad: Este documento contiene propiedad intelectual exclusiva.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropuestaKitEspacioDatos;
