import { useEffect, useState } from "react";
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import {
  QrCode,
  ShieldCheck,
  FileText,
  Factory,
  Stethoscope,
  User,
  CheckCircle2,
  ScrollText,
  AlertTriangle,
  History,
  Download,
} from "lucide-react";

const ProductPassportPage = () => {
  const [activeTab, setActiveTab] = useState<"manufacturer" | "clinic" | "patient">(
    "clinic",
  );

  useEffect(() => {
    // SEO: título, descripción y canonical específicos de la página
    const descriptionContent =
      "Explora el Pasaporte Digital de Producto (DPP) para implantes dentales: trazabilidad total, certificados MDR/ISO y advertencias de seguridad en un solo escaneo.";

    document.title =
      "Pasaporte Digital de Producto Dental (DPP) | ACCURO TECHNOLOGY";

    let metaDescription = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = descriptionContent;

    const canonicalUrl = `${window.location.origin}/solutions/product-passport`;
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // Structured data (Product) para SEO
    const ldJson = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Pasaporte Digital de Producto para implantes dentales",
      description: descriptionContent,
      category: "MedicalDevice",
      brand: {
        "@type": "Organization",
        name: "ACCURO TECHNOLOGY",
      },
    };

    let script = document.querySelector(
      "script#product-passport-ldjson",
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "product-passport-ldjson";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(ldJson);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <div className="container mx-auto px-6 pt-6">
        <NavigationControls />
      </div>
      {/* --- HERO SECTION --- */}
      <header className="relative py-20 bg-slate-900 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20">
          {/* Patrón de fondo tipo "circuito" o "qr abstracto" */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm font-medium mb-6">
            <QrCode className="w-4 h-4" />
            <span>Digital Product Passport (DPP)</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            La Verdad Detrás de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-300">
              Cada Intervención Clínica
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Trazabilidad inmutable desde la fábrica hasta el paciente.
            Certificados, garantías y advertencias de seguridad accesibles con un
            simple escaneo.
          </p>
        </div>
      </header>

      {/* --- INTERACTIVE PASSPORT DEMO (EL EJEMPLO VISUAL) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            {/* Lado Izquierdo: El Producto Físico (Contexto) */}
            <article className="md:w-1/3 text-center md:text-right space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">
                El Objeto Físico
              </h2>
              <p className="text-slate-500">
                Un implante, una férula o biomaterial llega a la clínica.
                Parece una simple caja, pero contiene un identificador único
                (UDI) vinculado al cloud.
              </p>
              <div className="flex justify-end mt-8">
                <div className="relative group">
                  <div className="w-48 h-48 bg-slate-100 rounded-xl border-2 border-slate-200 flex items-center justify-center shadow-inner">
                    <img
                      src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=300"
                      alt="Código de barras del Pasaporte Digital de Producto dental"
                      className="w-32 h-32 object-contain mix-blend-multiply opacity-80"
                    />
                  </div>
                  {/* Efecto de escaneo */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-[scan_2s_ease-in-out_infinite] group-hover:opacity-100" />
                </div>
              </div>
              <p className="text-xs font-mono text-purple-600 mt-2 flex items-center justify-end gap-1">
                <QrCode className="w-3 h-3" /> Escaneando código DataMatrix...
              </p>
            </article>

            {/* Centro: Flecha Conectora */}
            <div className="hidden md:flex flex-col items-center justify-center text-purple-300">
              <div className="w-16 h-0.5 bg-current mb-2" />
              <div className="w-3 h-3 rounded-full bg-purple-500" />
            </div>

            {/* Lado Derecho: EL PASAPORTE DIGITAL (La Interfaz) */}
            <article className="md:w-1/2 w-full">
              <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl border border-purple-500/30 text-white relative overflow-hidden">
                {/* Background Decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl" />

                {/* Cabecera del Pasaporte */}
                <header className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-400 mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Verificado &amp; Auténtico
                      </span>
                    </div>
                    <h2 className="text-xl font-bold">Implante Titanio Z-Series</h2>
                    <p className="text-sm text-slate-400">
                      Ref: TI-400-12 | Lote: #993821-X
                    </p>
                  </div>
                  <div className="bg-white p-1 rounded">
                    <QrCode className="w-8 h-8 text-slate-900" />
                  </div>
                </header>

                {/* Grid de Información */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <p className="text-xs text-slate-400 mb-1">Fabricante</p>
                    <p className="text-sm font-semibold flex items-center gap-2">
                      <Factory className="w-3 h-3 text-purple-400" />
                      DentalTech GmbH
                    </p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <p className="text-xs text-slate-400 mb-1">
                      Fecha Esterilización
                    </p>
                    <p className="text-sm font-semibold">12 Oct 2024</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <p className="text-xs text-slate-400 mb-1">Material</p>
                    <p className="text-sm font-semibold">
                      Titanio Grado 5 (Ti-6Al-4V)
                    </p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <p className="text-xs text-slate-400 mb-1">Caducidad</p>
                    <p className="text-sm font-semibold text-orange-300">Oct 2029</p>
                  </div>
                </div>

                {/* Sección Legal y Documentos */}
                <section className="space-y-3">
                  <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Documentación Legal &amp; Seguridad
                  </h3>

                  <div className="flex items-center justify-between p-3 bg-emerald-900/20 border border-emerald-500/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-500" />
                      <div>
                        <p className="text-sm font-medium text-emerald-100">
                          Certificado MDR (UE)
                        </p>
                        <p className="text-xs text-emerald-400/70">
                          Cumplimiento normativa 2017/745
                        </p>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-emerald-500 cursor-pointer hover:text-white" />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <ScrollText className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-sm font-medium text-slate-200">
                          Instrucciones de Uso (IFU)
                        </p>
                        <p className="text-xs text-slate-500">PDF Multilenguaje</p>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-slate-400" />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-900/20 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="text-sm font-medium text-yellow-100">
                          Advertencias
                        </p>
                        <p className="text-xs text-yellow-400/70">
                          Verificar integridad del envase estéril
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Timeline Inferior */}
                <footer className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-purple-300">
                    <History className="w-3 h-3" />
                    <span>
                      Trazabilidad Blockchain: Bloque #882910 Verificado
                    </span>
                  </div>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* --- WHY IT MATTERS (TABS) --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <header className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">
              Valor para todo el Ecosistema
            </h2>
            <p className="text-slate-500 mt-2">
              Selecciona un rol para ver cómo te protege el Pasaporte Digital.
            </p>
          </header>

          <div className="flex justify-center gap-4 mb-8" aria-label="Roles beneficiados por el DPP">
            <button
              type="button"
              onClick={() => setActiveTab("manufacturer")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === "manufacturer"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-slate-500 hover:bg-purple-50"
              }`}
           >
              Fabricantes
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("clinic")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === "clinic"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-slate-500 hover:bg-blue-50"
              }`}
            >
              Clínicas
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("patient")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === "patient"
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-white text-slate-500 hover:bg-emerald-50"
              }`}
            >
              Pacientes
            </button>
          </div>

          <section className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 min-h-[250px] flex items-center" aria-live="polite">
            {activeTab === "manufacturer" && (
              <div className="flex gap-6 animate-in fade-in duration-300">
                <div className="p-4 bg-purple-100 rounded-full h-fit">
                  <Factory className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-2">
                    Protección de Marca y Cumplimiento
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Evita falsificaciones mediante identificadores únicos
                    criptográficos. Automatiza el cumplimiento de la normativa
                    MDR (Medical Device Regulation) y simplifica auditorías
                    teniendo toda la documentación técnica vinculada al lote de
                    producción.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "clinic" && (
              <div className="flex gap-6 animate-in fade-in duration-300">
                <div className="p-4 bg-blue-100 rounded-full h-fit">
                  <Stethoscope className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Seguridad Jurídica y Clínica
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Antes de abrir un envase, verifica su autenticidad y fecha
                    de caducidad. En caso de alertas sanitarias (recalls),
                    identifica instantáneamente a los pacientes afectados.
                    Reduce la responsabilidad civil al usar solo productos
                    certificados.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "patient" && (
              <div className="flex gap-6 animate-in fade-in duration-300">
                <div className="p-4 bg-emerald-100 rounded-full h-fit">
                  <User className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">
                    Transparencia y Garantía a Largo Plazo
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    ¿Qué llevo en mi boca? El paciente accede a su "Wallet de
                    Salud" y ve la marca, modelo y garantía de sus implantes. Si
                    cambia de dentista o país años después, la información
                    técnica viaja con él para un mantenimiento adecuado.
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>
      </section>

      {/* --- COMPLIANCE FOOTER --- */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-lg font-bold text-slate-800 mb-8">
            Cumplimiento Normativo Integrado
          </h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            {/* Logos simulados con texto */}
            <div className="flex items-center gap-2 border px-4 py-2 rounded bg-slate-50">
              <ShieldCheck className="w-5 h-5" /> MDR 2017/745 (EU)
            </div>
            <div className="flex items-center gap-2 border px-4 py-2 rounded bg-slate-50">
              <FileText className="w-5 h-5" /> ISO 13485:2016
            </div>
            <div className="flex items-center gap-2 border px-4 py-2 rounded bg-slate-50">
              <CheckCircle2 className="w-5 h-5" /> FDA 21 CFR Part 11
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPassportPage;
