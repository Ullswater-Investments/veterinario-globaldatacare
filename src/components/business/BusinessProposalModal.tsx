import React, { useState } from "react";
import {
  X,
  FileText,
  Euro,
  Rocket,
  CheckCircle2,
  CalendarClock,
  ArrowRight,
  Building2,
  ExternalLink,
} from "lucide-react";

const BusinessProposalModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Estado cerrado: solo botón flotante de llamada a la acción
  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
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

  // Modal abierto: dossier interactivo a pantalla casi completa
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
        aria-label="Cerrar propuesta de negocio"
      />

      {/* Contenido del dossier */}
      <div className="relative bg-white w-full max-w-5xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
        {/* Header institucional */}
        <header className="bg-slate-900 text-white p-6 md:p-8 flex justify-between items-start shrink-0">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-blue-600 rounded text-xs font-bold uppercase tracking-wider">
                Plan Europeo
              </span>
              <span className="px-3 py-1 bg-slate-700 rounded text-xs font-bold uppercase tracking-wider text-slate-300">
                Red.es
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Kit Espacio de Datos: Propuesta Estratégica
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-1">
              Accuro Technology como Agente Digitalizador Habilitador.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        {/* Cuerpo scrollable */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-50 custom-scrollbar">
          {/* Sección 1: intro y enlaces */}
          <section className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Esta es una oportunidad única para financiar la transformación digital de tu clínica.
              Utilizamos las ayudas del <strong>Programa Kit Espacios de Datos</strong> para construir el
              Espacio de Datos Federado del sector dental.
            </p>
            <a
              href="https://www.acelerapyme.gob.es/kit-espacios-de-datos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors border-b-2 border-blue-200 hover:border-blue-600 pb-0.5"
            >
              Ver bases oficiales en Acelera Pyme
              <ExternalLink className="w-4 h-4" />
            </a>
          </section>

          {/* Sección 2: opciones económicas */}
          <section className="mb-16">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Euro className="w-6 h-6 text-emerald-600" />
              Modelos de Adhesión (Economía de Escala)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Opción estándar */}
              <article className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold mb-4">
                  OPCIÓN A: MAYORÍA DE CLÍNICAS
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">Integración Estándar</h4>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-bold text-emerald-600">15.000€</span>
                  <span className="text-sm text-slate-500 mb-1">Subvención Total</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-600">
                      Tu Inversión (Coste Integración)
                    </span>
                    <span className="font-bold text-slate-900">2.000€</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Retorno Directo (Servicios)</span>
                    <span className="text-emerald-600 font-bold">x7.5</span>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    Integración técnica en el Espacio de Datos.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    Gestión completa de la solicitud.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    Licencia de uso de la plataforma Global Data Care.
                  </li>
                </ul>
              </article>

              {/* Opción piloto */}
              <article className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-md border border-blue-200 relative">
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  LIMITADO A 5 EMPRESAS
                </div>
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4">
                  OPCIÓN B: LÍDERES DE CONSORCIO
                </div>
                <h4 className="text-2xl font-bold text-blue-900 mb-2">Caso de Uso &amp; Negocio</h4>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-bold text-blue-600">30.000€</span>
                  <span className="text-sm text-slate-500 mb-1">Subvención Total</span>
                </div>

                <div className="bg-white p-4 rounded-xl mb-6 border border-blue-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-600">
                      Tu Inversión (Coste Desarrollo)
                    </span>
                    <span className="font-bold text-slate-900">5.000€</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-500">
                    <span>Retorno Estratégico</span>
                    <span className="text-blue-600 font-bold">Liderazgo Sectorial</span>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    Definición de modelos de negocio del dato.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    Prioridad en el roadmap de IA.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    Justificación técnica compleja incluida.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* Sección 3: roadmap 4 fases */}
          <section className="mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-orange-500" />
              Hoja de Ruta del Proyecto
            </h3>

            <div className="relative border-l-2 border-slate-200 ml-3 space-y-12">
              {/* Fase 1 */}
              <div className="relative pl-8">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-sm" />
                <h4 className="font-bold text-lg text-slate-800">Fase 1: Captación y Adhesión</h4>
                <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">
                  Ahora - 15 Enero 2025
                </p>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Firma de acuerdos. Es vital conseguir la masa crítica de empresas.
                  <span className="font-semibold text-slate-900"> Objetivo:</span> Maximizar el presupuesto
                  conjunto para un desarrollo ambicioso.
                </p>
              </div>

              {/* Fase 2 */}
              <div className="relative pl-8">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm" />
                <h4 className="font-bold text-lg text-slate-800">Fase 2: Desarrollo MVP &amp; Integración</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Q1 - Q2 2025</p>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Accuro despliega los conectores en las clínicas. Se construyen los pilotos de los casos de uso
                  (Opción B).
                </p>
              </div>

              {/* Fase 3 */}
              <div className="relative pl-8">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white shadow-sm" />
                <h4 className="font-bold text-lg text-slate-800">Fase 3: Justificación y Cobro</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Q3 2025</p>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Gestión burocrática ante Red.es para liberar los fondos. Auditoría técnica de la integración.
                </p>
              </div>

              {/* Fase 4 */}
              <div className="relative pl-8">
                <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
                <h4 className="font-bold text-lg text-slate-800">Fase 4: Escala e Inteligencia Artificial</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Futuro</p>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Con el presupuesto consolidado, desplegamos las capacidades avanzadas: IA federada y
                  automatización masiva.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 4: pacto win-win */}
          <section className="bg-slate-900 text-slate-300 p-6 rounded-2xl flex items-start gap-4">
            <Building2 className="w-8 h-8 text-blue-400 shrink-0" />
            <div>
              <h4 className="text-white font-bold text-lg mb-2">El Compromiso Accuro (Win-Win)</h4>
              <p className="text-sm leading-relaxed">
                No somos un proveedor externo que cobra y se va. Somos el socio tecnológico del grupo.
                Todo el beneficio obtenido de los costes de integración y fees de éxito se reinvierte en
                el desarrollo de la plataforma común. Tu inversión no compra solo una integración, compra
                una parte del ecosistema futuro.
              </p>
            </div>
          </section>
        </div>

        {/* Footer del modal: CTA */}
        <footer className="bg-white p-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0">
          <div className="flex items-center gap-2 text-orange-600 font-bold bg-orange-50 px-4 py-2 rounded-lg">
            <CalendarClock className="w-5 h-5" />
            Fecha Límite: 15 de Enero
          </div>
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Solicitar Adhesión Ahora
            <ArrowRight className="w-5 h-5" />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default BusinessProposalModal;
export { BusinessProposalModal };
