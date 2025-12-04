import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cloud, ArrowRight, Database, Server, Activity, Users, ShoppingCart, BrainCircuit, ShieldCheck } from "lucide-react";
const ClinicsPage = () => {
  useEffect(() => {
    // SEO: título, descripción y canonical específicos de la página
    document.title = "Servicios Federados para Clínicas | ACCURO TECHNOLOGY";
    const descriptionContent = "Conecta tu clínica dental a un cloud federado donde ERP, IA y compras se consumen como servicios, manteniendo tu independencia.";
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = descriptionContent;
    const canonicalUrl = `${window.location.origin}/solutions/clinics`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
  }, []);
  return <main className="min-h-screen bg-background font-sans">
      {/* HERO SECTION: EL CLOUD FEDERADO */}
      <header className="relative overflow-hidden bg-slate-900 py-24 text-white">
        {/* Fondos decorativos */}
        <div className="absolute right-0 top-0 h-full w-1/2 rounded-l-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">
              <Cloud className="h-4 w-4" />
              <span>Infraestructura Cloud Federada para Clínicas</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Servicios de Valor Añadido en una
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Red Federada
              </span>
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-300">
              Tu clínica deja de depender de software aislado. Se conecta a un hub
              de servicios donde el ERP, la Inteligencia Artificial y la Central
              de Compras se consumen bajo demanda, manteniendo tu independencia
              total.
            </p>
            <Button size="lg" className="mx-auto flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-primary-foreground shadow-lg shadow-blue-900/50 hover:bg-primary/90">
              Conectar mi Clínica al Cloud
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* CÓMO FUNCIONA: DIAGRAMA VISUAL */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Arquitectura de Servicios Federados
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-slate-500">
              Un único punto de conexión te da acceso a múltiples proveedores
              externos especializados en odontología.
            </p>
          </div>

          {/* Representación Gráfica del Modelo Federado */}
          <div className="relative mx-auto max-w-5xl p-10">
            {/* Conector Central (La Red) */}
            <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 md:block" />

            <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Bloque 1: Proveedores Externos */}
              <article className="rounded-2xl border border-slate-100 bg-card p-6 text-center shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-800">Proveedores Externos</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Empresas de IA, ERP y suministros que ofrecen servicios
                  especializados para tu red clínica.
                </p>
              </article>

              {/* Bloque 2: CLOUD FEDERADO (Centro) */}
              <article className="relative rounded-2xl border border-blue-500 bg-slate-900 p-8 text-center text-white shadow-2xl md:scale-110">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Hub Central
                </div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/50 bg-blue-600/20 text-blue-400 animate-pulse">
                  <Server className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Cloud Único</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Orquesta, securiza y distribuye los servicios sin mover los
                  datos de tu clínica.
                </p>
              </article>

              {/* Bloque 3: Tu Clínica */}
              <article className="rounded-2xl border border-slate-100 bg-card p-6 text-center shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-slate-800">Tu Clínica</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Consume servicios de alto valor manteniendo tus sistemas y
                  decisiones bajo tu control.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* GRID DE SERVICIOS (EL VALOR AÑADIDO) */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Módulos que viajan por la misma autopista
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Cuatro servicios, un solo punto de conexión
            </h2>
            <p className="mt-4 text-slate-600">
              Cada clínica decide qué activar, pero todos los servicios viajan
              por la misma infraestructura federada, reduciendo costes y
              complejidad.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Servicio 1: ERP/CRM */}
            <article className="group flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Users className="h-7 w-7" />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  Gestión Unificada (ERP + CRM)
                </h3>
                <p className="mb-4 leading-relaxed text-slate-500">
                  Activa módulos de gestión especializados en salud bucal. Tu
                  CRM sigue siendo tuyo, pero se actualiza automáticamente con
                  las mejores prácticas de la red.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    CRM independiente por clínica.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    Módulos específicos dentales y de salud bucal.
                  </li>
                </ul>
              </div>
            </article>

            {/* Servicio 2: Central de Compras */}
            <article className="group flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                <ShoppingCart className="h-7 w-7" />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  Compras Coordinadas
                </h3>
                <p className="mb-4 leading-relaxed text-slate-500">
                  Un sistema de abastecimiento que conecta tu stock con
                  proveedores homologados. Negociación colectiva automática,
                  pedidos y facturación siempre a nombre de tu clínica.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    Reposición de stock predictiva desde tus datos reales.
                  </li>
                </ul>
              </div>
            </article>

            {/* Servicio 3: Diagnóstico AI */}
            <article className="group flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                <BrainCircuit className="h-7 w-7" />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  Inteligencia Artificial Federada
                </h3>
                <p className="mb-4 leading-relaxed text-slate-500">
                  Accede a algoritmos de diagnóstico de primer nivel sin
                  instalar nada en local. La IA viaja hacia tus datos, no al
                  revés.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    Detección automática de patologías en radiografías.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    Pago por uso, por análisis o por clínica.
                  </li>
                </ul>
              </div>
            </article>

            {/* Servicio 4: Excelencia y Estándares */}
            <article className="group flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  Estándares y Experiencia Paciente
                </h3>
                <p className="mb-4 leading-relaxed text-slate-500">
                  Herramientas automatizadas para seguir protocolos clínicos y
                  mejorar la experiencia del paciente basado en datos agregados
                  del ecosistema.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Indicadores de calidad y cumplimiento normativo.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Encuestas y feedback paciente integrados en el flujo.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="bg-slate-900 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white">
          ¿Listo para evolucionar tu clínica?
        </h2>
        <p className="mb-8 mx-auto max-w-xl text-slate-400">
          Únete al modelo federado: mantén tu independencia mientras multiplicas
          tus capacidades tecnológicas, clínicas y comerciales.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white text-slate-900 hover:bg-slate-100">
            Solicitar Demo
          </Button>
          <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
            Ver Catálogo de Servicios
          </Button>
        </div>
      </footer>
    </main>;
};
export default ClinicsPage;