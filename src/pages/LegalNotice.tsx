import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import { 
  Building2, 
  FileText, 
  Shield, 
  Scale, 
  Cookie, 
  AlertTriangle, 
  Gavel, 
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Home,
  ScrollText,
  UserPlus
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Section = ({ id, icon, title, children, defaultOpen = false }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <section id={id} className="scroll-mt-24">
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                {icon}
              </div>
              <h2 className="text-lg font-semibold text-left">{title}</h2>
            </div>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="p-4 pt-6 text-sm leading-relaxed text-muted-foreground space-y-4">
            {children}
          </div>
        </CollapsibleContent>
      </section>
    </Collapsible>
  );
};

const LegalNotice = () => {
  const lastUpdate = "3 de febrero de 2026";

  useEffect(() => {
    document.title = "Aviso Legal y Política de Privacidad | ACCURO TECHNOLOGY";

    const description =
      "Aviso legal, política de privacidad y condiciones de uso de la plataforma GLOBAL DATA CARE de ACCURO TECHNOLOGY, S.L. conforme a LSSI-CE y RGPD.";
    let meta = document.querySelector("meta[name='description']") as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/legal`;
  }, []);

  const sections = [
    { id: "titular", title: "Información del Titular", icon: <Building2 className="w-5 h-5" /> },
    { id: "objeto", title: "Objeto y Ámbito de Aplicación", icon: <FileText className="w-5 h-5" /> },
    { id: "condiciones", title: "Condiciones de Uso", icon: <ScrollText className="w-5 h-5" /> },
    { id: "propiedad", title: "Propiedad Intelectual", icon: <Shield className="w-5 h-5" /> },
    { id: "datos", title: "Protección de Datos Personales", icon: <Scale className="w-5 h-5" /> },
    { id: "cookies", title: "Política de Cookies", icon: <Cookie className="w-5 h-5" /> },
    { id: "responsabilidad", title: "Exclusión de Responsabilidad", icon: <AlertTriangle className="w-5 h-5" /> },
    { id: "jurisdiccion", title: "Ley Aplicable y Jurisdicción", icon: <Gavel className="w-5 h-5" /> },
    { id: "modificaciones", title: "Modificaciones", icon: <RefreshCw className="w-5 h-5" /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
            ACCURO TECHNOLOGY, S.L.
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Aviso Legal y Política de Privacidad
          </h1>
          <p className="text-slate-400 max-w-2xl">
            Documento legal que regula el uso de la plataforma GLOBAL DATA CARE y el tratamiento de datos personales, conforme a la LSSI-CE y el RGPD.
          </p>
          <p className="text-xs text-slate-500 mt-4">
            Última actualización: {lastUpdate}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block">
            <Card className="sticky top-24">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                  Índice de contenidos
                </h3>
                <nav className="space-y-1">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left rounded-md hover:bg-muted transition-colors"
                    >
                      <span className="text-muted-foreground">{index + 1}.</span>
                      <span>{section.title}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="space-y-4">
            {/* Mobile TOC */}
            <Card className="lg:hidden">
              <CardContent className="p-4">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer font-semibold">
                    <span>Índice de contenidos</span>
                    <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                  </summary>
                  <nav className="mt-4 space-y-1">
                    {sections.map((section, index) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left rounded-md hover:bg-muted transition-colors"
                      >
                        <span className="text-muted-foreground">{index + 1}.</span>
                        <span>{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </details>
              </CardContent>
            </Card>

            {/* Section 1: Información del Titular */}
            <Section
              id="titular"
              icon={<Building2 className="w-5 h-5" />}
              title="1. Información del Titular"
              defaultOpen={true}
            >
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los siguientes datos identificativos del titular de este sitio web:
              </p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <p><strong className="text-foreground">Denominación social:</strong> ACCURO TECHNOLOGY, S.L.</p>
                <p><strong className="text-foreground">CIF:</strong> B87617981</p>
                <p><strong className="text-foreground">Domicilio social:</strong> C/ Colquide, 6 – Portal 2, 1ª planta, Edificio Prisma de Las Rozas – Madrid</p>
                <p><strong className="text-foreground">Teléfono:</strong> (+34) 91 710 48 40</p>
                <p><strong className="text-foreground">Correo electrónico:</strong>{" "}
                  <a href="mailto:ivan.becerro@accuro.es" className="text-primary hover:underline">
                    ivan.becerro@accuro.es
                  </a>
                </p>
                <p><strong className="text-foreground">Marca comercial:</strong> GLOBAL DATA CARE</p>
              </div>
            </Section>

            {/* Section 2: Objeto y Ámbito */}
            <Section
              id="objeto"
              icon={<FileText className="w-5 h-5" />}
              title="2. Objeto y Ámbito de Aplicación"
            >
              <p>
                El presente Aviso Legal regula el acceso y uso del sitio web <strong className="text-foreground">GLOBAL DATA CARE</strong>, una plataforma tecnológica desarrollada por ACCURO TECHNOLOGY, S.L. orientada a la gestión de datos en el sector de la salud animal.
              </p>
              <p>
                <strong className="text-foreground">Naturaleza del entorno:</strong> Este sitio web incluye entornos de demostración comercial y prueba de concepto. Los datos mostrados (pantallas, registros, gráficos) son en su mayoría ejemplos ficticios, sintéticos o anonimizados, y no representan información clínica real de pacientes.
              </p>
              <p>
                La plataforma tiene como objetivo principal demostrar las capacidades tecnológicas del proyecto GLOBAL DATA CARE y facilitar la adhesión al programa <strong className="text-foreground">Kit Espacio de Datos</strong> del Gobierno de España.
              </p>
              <p>
                El acceso a este sitio web implica la aceptación expresa de las condiciones aquí establecidas. Si no está de acuerdo con alguna de ellas, le rogamos que abandone el sitio.
              </p>
            </Section>

            {/* Section 3: Condiciones de Uso */}
            <Section
              id="condiciones"
              icon={<ScrollText className="w-5 h-5" />}
              title="3. Condiciones de Uso"
            >
              <p>El usuario se compromete a utilizar el sitio web de conformidad con la ley, el presente Aviso Legal, la moral y las buenas costumbres generalmente aceptadas, así como el orden público.</p>
              
              <h3 className="font-semibold text-foreground mt-4 mb-2">Uso aceptable</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Acceder a la información pública del sitio web con fines informativos o comerciales legítimos.</li>
                <li>Utilizar los formularios de contacto e inscripción para solicitar información o servicios.</li>
                <li>Evaluar las funcionalidades de demostración para la toma de decisiones comerciales.</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Prohibiciones</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Utilizar el sitio web con fines ilícitos, fraudulentos o contrarios a lo establecido en este Aviso Legal.</li>
                <li>Intentar acceder a áreas restringidas sin autorización.</li>
                <li>Realizar ingeniería inversa, descompilar o extraer el código fuente de la plataforma.</li>
                <li>Introducir virus, malware o cualquier código malicioso.</li>
                <li>Suplantar la identidad de otros usuarios o del titular del sitio.</li>
                <li>Reproducir, copiar o distribuir contenidos sin autorización expresa.</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Requisitos de edad</h3>
              <p>
                Para contratar servicios a través de este sitio web, el usuario debe ser mayor de 18 años y tener capacidad legal para obligarse contractualmente. Al utilizar los servicios de contratación, el usuario declara cumplir estos requisitos.
              </p>
            </Section>

            {/* Section 4: Propiedad Intelectual */}
            <Section
              id="propiedad"
              icon={<Shield className="w-5 h-5" />}
              title="4. Propiedad Intelectual e Industrial"
            >
              <p>
                Todos los contenidos del sitio web, incluyendo a título enunciativo pero no limitativo: textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de <strong className="text-foreground">ACCURO TECHNOLOGY, S.L.</strong> o de terceros licenciantes, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente.
              </p>
              <p>
                Las marcas, nombres comerciales o signos distintivos son titularidad de ACCURO TECHNOLOGY, S.L. o de terceros, sin que el acceso al sitio web atribuya al usuario derecho alguno sobre los mismos.
              </p>
              <p>
                <strong className="text-foreground">GLOBAL DATA CARE</strong> es una marca comercial de ACCURO TECHNOLOGY, S.L.
              </p>
              <p>
                Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de los contenidos sin autorización expresa y por escrito de ACCURO TECHNOLOGY, S.L.
              </p>
            </Section>

            {/* Section 5: Protección de Datos */}
            <Section
              id="datos"
              icon={<Scale className="w-5 h-5" />}
              title="5. Protección de Datos Personales"
            >
              <p>
                En cumplimiento del Reglamento (UE) 2016/679 General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos:
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Responsable del tratamiento</h3>
              <div className="bg-muted/50 rounded-lg p-4">
                <p><strong>ACCURO TECHNOLOGY, S.L.</strong></p>
                <p>CIF: B87617981</p>
                <p>Dirección: C/ Colquide, 6 – Portal 2, 1ª planta, Edificio Prisma de Las Rozas – Madrid</p>
                <p>Email DPO: <a href="mailto:ivan.becerro@accuro.es" className="text-primary hover:underline">ivan.becerro@accuro.es</a></p>
              </div>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Finalidades del tratamiento</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Gestión de consultas y solicitudes de información recibidas a través del sitio web.</li>
                <li>Tramitación de inscripciones al programa Kit Espacio de Datos.</li>
                <li>Gestión de la relación contractual y comercial.</li>
                <li>Envío de comunicaciones comerciales sobre productos y servicios similares (interés legítimo).</li>
                <li>Cumplimiento de obligaciones legales.</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Base legal</h3>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong className="text-foreground">Consentimiento:</strong> Para el envío de comunicaciones comerciales.</li>
                <li><strong className="text-foreground">Ejecución contractual:</strong> Para la prestación de servicios contratados.</li>
                <li><strong className="text-foreground">Interés legítimo:</strong> Para el mantenimiento de la relación comercial.</li>
                <li><strong className="text-foreground">Obligación legal:</strong> Para el cumplimiento de requerimientos normativos.</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Destinatarios</h3>
              <p>Sus datos podrán ser comunicados a:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong className="text-foreground">RED.ES:</strong> Para la tramitación de subvenciones del programa Kit Espacio de Datos.</li>
                <li><strong className="text-foreground">HOKODO:</strong> Para la gestión de financiación de servicios.</li>
                <li>Administraciones públicas cuando exista obligación legal.</li>
                <li>Proveedores de servicios tecnológicos que actúan como encargados del tratamiento.</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Plazo de conservación</h3>
              <p>
                Los datos personales se conservarán mientras se mantenga la relación comercial y, posteriormente, durante los plazos legalmente establecidos para atender posibles responsabilidades (mínimo 5 años para obligaciones fiscales y 6 años para obligaciones mercantiles).
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Derechos del interesado</h3>
              <p>Puede ejercer los siguientes derechos dirigiéndose a <a href="mailto:ivan.becerro@accuro.es" className="text-primary hover:underline">ivan.becerro@accuro.es</a>:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong className="text-foreground">Acceso:</strong> Conocer qué datos tratamos sobre usted.</li>
                <li><strong className="text-foreground">Rectificación:</strong> Corregir datos inexactos.</li>
                <li><strong className="text-foreground">Supresión:</strong> Solicitar la eliminación de sus datos.</li>
                <li><strong className="text-foreground">Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
                <li><strong className="text-foreground">Portabilidad:</strong> Recibir sus datos en formato estructurado.</li>
                <li><strong className="text-foreground">Limitación:</strong> Solicitar la limitación del tratamiento.</li>
              </ul>
              <p className="mt-2">
                También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>).
              </p>
            </Section>

            {/* Section 6: Cookies */}
            <Section
              id="cookies"
              icon={<Cookie className="w-5 h-5" />}
              title="6. Política de Cookies"
            >
              <p>
                Este sitio web utiliza cookies para mejorar la experiencia de navegación y ofrecer contenidos de interés.
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Tipos de cookies utilizadas</h3>
              
              <div className="space-y-3">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="font-medium text-foreground">Cookies técnicas (necesarias)</p>
                  <p className="text-sm">Permiten la navegación y el uso de funcionalidades básicas del sitio. No requieren consentimiento.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="font-medium text-foreground">Cookies de preferencias</p>
                  <p className="text-sm">Almacenan sus preferencias de configuración (idioma, zona horaria, etc.).</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="font-medium text-foreground">Cookies analíticas</p>
                  <p className="text-sm">Permiten analizar el uso del sitio web de forma agregada y anónima para mejorar nuestros servicios.</p>
                </div>
              </div>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Gestión de cookies</h3>
              <p>
                Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envía una cookie. Sin embargo, algunas funcionalidades del sitio pueden no funcionar correctamente sin cookies.
              </p>
              <p>
                Para más información sobre cómo gestionar cookies en su navegador, consulte la ayuda de su navegador web.
              </p>
            </Section>

            {/* Section 7: Exclusión de Responsabilidad */}
            <Section
              id="responsabilidad"
              icon={<AlertTriangle className="w-5 h-5" />}
              title="7. Exclusión de Responsabilidad"
            >
              <h3 className="font-semibold text-foreground mb-2">Disponibilidad del servicio</h3>
              <p>
                ACCURO TECHNOLOGY, S.L. no garantiza la disponibilidad permanente ni la continuidad del funcionamiento del sitio web. El titular se reserva el derecho de suspender, modificar, restringir o interrumpir el acceso al sitio web sin previo aviso.
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Contenido de demostración</h3>
              <p>
                Los datos, pantallas y funcionalidades mostrados en los entornos de demostración son ejemplos ficticios o sintéticos. No deben utilizarse para tomar decisiones clínicas reales ni sustituyen el criterio de un profesional sanitario.
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Enlaces a terceros</h3>
              <p>
                El sitio web puede contener enlaces a sitios web de terceros. ACCURO TECHNOLOGY, S.L. no se hace responsable del contenido, políticas de privacidad ni prácticas de dichos sitios externos.
              </p>

              <h3 className="font-semibold text-foreground mt-4 mb-2">Limitación de responsabilidad</h3>
              <p>
                ACCURO TECHNOLOGY, S.L. no será responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del uso del sitio web, incluyendo errores u omisiones en los contenidos, falta de disponibilidad del sitio, o transmisión de virus o programas maliciosos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>
            </Section>

            {/* Section 8: Ley Aplicable */}
            <Section
              id="jurisdiccion"
              icon={<Gavel className="w-5 h-5" />}
              title="8. Ley Aplicable y Jurisdicción"
            >
              <p>
                El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten expresamente a los <strong className="text-foreground">Juzgados y Tribunales de Madrid</strong>, con renuncia a cualquier otro fuero que pudiera corresponderles.
              </p>
              <p>
                En caso de que cualquier disposición de este Aviso Legal sea declarada nula o inaplicable, las demás disposiciones permanecerán en pleno vigor y efecto.
              </p>
            </Section>

            {/* Section 9: Modificaciones */}
            <Section
              id="modificaciones"
              icon={<RefreshCw className="w-5 h-5" />}
              title="9. Modificaciones"
            >
              <p>
                ACCURO TECHNOLOGY, S.L. se reserva el derecho de modificar en cualquier momento el presente Aviso Legal para adaptarlo a novedades legislativas, jurisprudenciales o a prácticas de la industria.
              </p>
              <p>
                Se recomienda revisar periódicamente este documento. Las modificaciones serán efectivas desde su publicación en el sitio web.
              </p>
              <div className="bg-muted/50 rounded-lg p-4 mt-4">
                <p className="font-medium text-foreground">Última actualización</p>
                <p>{lastUpdate}</p>
              </div>
            </Section>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </main>
  );
};

export default LegalNotice;
