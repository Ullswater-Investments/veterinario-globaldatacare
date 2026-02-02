import React, { useEffect } from "react";
import {
  Globe2,
  BarChart3,
  SplitSquareHorizontal,
  Network,
  Cpu,
  ShieldCheck,
  Handshake,
  BadgeEuro,
  Star,
  AlarmClock,
  Code2,
  FileCheck2,
  Rocket,
  Smartphone,
  ShoppingCart,
  ListChecks,
  Users,
  Mail,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TOTAL_PAGES = 15;

interface SlideProps {
  page: number;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  subtitle?: string;
  isMainTitle?: boolean;
}

const Slide: React.FC<SlideProps> = ({
  page,
  title,
  icon,
  children,
  subtitle,
  isMainTitle,
}) => {
  return (
    <section className="flex h-full flex-col rounded-3xl bg-card shadow-lg border border-border overflow-hidden">
      <header className="flex items-center justify-between px-5 pt-4 text-xs text-muted-foreground">
        <span>Propuesta Estratégica 2025</span>
        <span>Página {page} / {TOTAL_PAGES}</span>
      </header>
      <div className="flex-1 px-5 pb-6 pt-2 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-full bg-primary/10 p-2 text-primary flex items-center justify-center">
            {icon}
          </div>
          <div>
            {isMainTitle ? (
              <h1 className="text-xl font-semibold text-foreground leading-snug">
                {title}
              </h1>
            ) : (
              <h2 className="text-lg font-semibold text-foreground leading-snug">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="mt-1 space-y-3 text-sm text-muted-foreground">
          {children}
        </div>
      </div>
    </section>
  );
};

const MobilePresentation: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "GLOBAL DATA CARE - Presentación móvil";
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-background px-4 py-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="absolute right-4 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-background shadow-lg backdrop-blur-sm"
        aria-label="Cerrar presentación"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="w-full max-w-sm">
        <Carousel
           orientation="vertical"
           className="relative h-[90vh] max-h-[720px]"
         >
          <CarouselContent className="h-full">
            {/* PÁGINA 1: Portada */}
            <CarouselItem className="h-full flex items-center">
              <section className="flex h-full w-full flex-col items-center justify-between rounded-3xl bg-foreground text-background p-6">
                <div className="w-full flex justify-between text-xs text-background/70">
                  <span>Propuesta Estratégica 2025</span>
                  <span>Página 1 / {TOTAL_PAGES}</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-background/70">
                      <span>Accuro Technology</span>
                      <span className="h-px w-6 bg-background/30" />
                      <span>Red.es · Kit Digital</span>
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight">GLOBAL DATA CARE</h1>
                    <p className="text-sm text-background/80">
                      La Primera Red Federada de Datos de Salud Dental.
                    </p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">Financiación Europea para tu Soberanía Tecnológica.</p>
                  </div>
                </div>
                <footer className="w-full text-[11px] text-background/70 flex items-center justify-between">
                  <span>Documento estratégico vertical 9:16</span>
                  <span>GLOBAL DATA CARE · 2025</span>
                </footer>
              </section>
            </CarouselItem>

            {/* PÁGINA 2: Contexto */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={2}
                title="El Momento es Ahora"
                icon={<Globe2 className="h-5 w-5" />}
                subtitle="Programa Kit Espacio de Datos"
              >
                <p>
                  El Gobierno de España, a través de Red.es, lanza el programa
                  <strong> "Kit Espacio de Datos"</strong>.
                </p>
                <p>
                  Una inyección de capital diseñada para crear economías del dato
                  seguras en sectores estratégicos como la salud dental.
                </p>
                <p>
                  No es un préstamo. Es una subvención para integrar tu clínica en la
                  economía digital del futuro.
                </p>
                <p className="font-medium text-foreground">
                  Accuro Technology actúa como tu Agente Digitalizador Habilitador.
                </p>
              </Slide>
            </CarouselItem>

            {/* PÁGINA 3: Problema vs Solución */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={3}
                title="De Silos Aislados a Red Conectada"
                icon={<SplitSquareHorizontal className="h-5 w-5" />}
                subtitle="Problema vs. Solución"
              >
                <p>
                  <strong>Hoy:</strong> tus datos mueren en tu servidor. No generan
                  valor, no entrenan IA y no se conectan con hospitales.
                </p>
                <p>
                  <strong>Mañana:</strong> con Global Data Care, tus datos se conectan de
                  forma federada. Mantienes la propiedad, pero multiplicas su valor.
                </p>
                <p>
                  Pasamos de una clínica aislada a una red inteligente que aprende con
                  cada caso tratado.
                </p>
              </Slide>
            </CarouselItem>

            {/* PÁGINA 4: Ecosistema */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={4}
                title="Un Ecosistema, 6 Soluciones"
                icon={<Network className="h-5 w-5" />}
                subtitle="Visión 360°"
              >
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    <strong>Clínicas:</strong> Gestión clínica e interoperabilidad con
                    hospitales.
                  </li>
                  <li>
                    <strong>Paciente:</strong> Wallet & Gemelo Digital 3D.
                  </li>
                  <li>
                    <strong>Industria:</strong> Pasaporte Digital de Producto.
                  </li>
                  <li>
                    <strong>Investigación:</strong> Marketplace de Datos & Algoritmos.
                  </li>
                  <li>
                    <strong>Compras:</strong> Abastecimiento Predictivo con IA.
                  </li>
                  <li>
                    <strong>KPIs:</strong> Inteligencia de Negocio en tiempo real.
                  </li>
                </ul>
              </Slide>
            </CarouselItem>

            {/* PÁGINA 5: Propuesta técnica */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={5}
                title="Tecnología de Soberanía Europea"
                icon={<Cpu className="h-5 w-5" />}
                subtitle="El motor del ecosistema"
              >
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    <strong>IDS (International Data Spaces):</strong> estándar europeo
                    de soberanía del dato.
                  </li>
                  <li>
                    <strong>Federación:</strong> los datos no salen de tu clínica; el
                    algoritmo viaja al dato.
                  </li>
                  <li>
                    <strong>Estándares:</strong> HL7 FHIR (clínico), DICOM (imagen) y
                    SNODENT (semántica).
                  </li>
                  <li>
                    <strong>Blockchain:</strong> trazabilidad inmutable de eventos
                    críticos.
                  </li>
                </ul>
              </Slide>
            </CarouselItem>

            {/* PÁGINA 6: Modelo de negocio */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={6}
                title="Alianza Estratégica Win-Win"
                icon={<Handshake className="h-5 w-5" />}
                subtitle="Modelo de negocio del Kit Espacio de Datos"
              >
                <p>
                  Accuro Technology no busca un cliente puntual, sino <strong>socios
                  fundadores</strong> de la red.
                </p>
                <p>
                  Tú inviertes una pequeña cantidad para la integración. A cambio,
                  recibes una subvención muy superior gestionada ante Red.es.
                </p>
                <p>
                  Todo el beneficio se reinvierte en la plataforma común. Cuantos más
                  seamos, más potente será la IA que recibirás de vuelta.
                </p>
              </Slide>
            </CarouselItem>

            {/* PÁGINA 7: Opción A */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={7}
                title="Opción A: Integración Estándar"
                icon={<BadgeEuro className="h-5 w-5" />}
                subtitle="La base para la mayoría de clínicas"
              >
                <p className="font-medium text-foreground">Para la mayoría de las clínicas del grupo.</p>
                <ul className="space-y-2 list-disc list-inside">
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
              </Slide>
            </CarouselItem>

            {/* PÁGINA 8: Opción B */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={8}
                title="Opción B: Casos de Uso y Liderazgo"
                icon={<Star className="h-5 w-5" />}
                subtitle="Limitado a 5 empresas tractoras"
              >
                <p className="font-medium text-foreground">Para las 5 empresas líderes del consorcio.</p>
                <ul className="space-y-2 list-disc list-inside">
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
              </Slide>
            </CarouselItem>

            {/* PÁGINA 9: Roadmap Fase 1 */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={9}
                title="Fase 1: Captación y Urgencia"
                icon={<AlarmClock className="h-5 w-5" />}
                subtitle="Fecha límite 15 de enero de 2025"
              >
                <p>
                  <strong>Acción:</strong> firma de acuerdos de adhesión al proyecto.
                </p>
                <p>
                  <strong>Objetivo:</strong> conseguir masa crítica. Si solo entran
                  pocas empresas, el alcance tecnológico será limitado.
                </p>
                <p className="font-medium text-foreground">
                  Necesitamos volumen para crear una IA real y representativa del
                  sector.
                </p>
              </Slide>
            </CarouselItem>

            {/* PÁGINA 10: Roadmap Fase 2 */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={10}
                title="Fase 2: Desarrollo e Integración"
                icon={<Code2 className="h-5 w-5" />}
                subtitle="Periodo Q1 - Q2 2025"
              >
                <ul className="space-y-2 list-disc list-inside">
                  <li>Construcción del MVP (Producto Mínimo Viable) de la plataforma.</li>
                  <li>Instalación de conectores IDS en las clínicas participantes.</li>
                  <li>Despliegue de los 5 casos de uso piloto acordados.</li>
                </ul>
              </Slide>
            </CarouselItem>

            {/* PÁGINA 11: Roadmap Fase 3 */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={11}
                title="Fase 3: Fondos Europeos"
                icon={<FileCheck2 className="h-5 w-5" />}
                subtitle="Periodo Q3 2026"
              >
                <p>
                  Q3 2026 · Ingreso de Fondos Europeos de RED.ES para continuar con el
                  desarrollo del proyecto tecnológico.
                </p>
              </Slide>
            </CarouselItem>

            {/* PÁGINA 12: Roadmap Fase 4 */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={12}
                title="Fase 4: IA a Escala"
                icon={<Rocket className="h-5 w-5" />}
                subtitle="Activación de la Inteligencia Colectiva"
              >
                <ul className="space-y-2 list-disc list-inside">
                  <li>Compras predictivas automatizadas entre clínicas federadas.</li>
                  <li>Diagnóstico IA federado global para casos complejos.</li>
                  <li>
                    Venta de datasets anonimizados a farmacéuticas con modelos de
                    revenue share.
                  </li>
                </ul>
              </Slide>
            </CarouselItem>

            {/* PÁGINA 13: Caso de Uso Real */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={13}
                title="El Valor en la Práctica"
                icon={<Smartphone className="h-5 w-5" />}
                subtitle="Ejemplo de flujo completo"
              >
                <ul className="space-y-2 list-disc list-inside">
                  <li>La agenda predice 10 implantes en las próximas semanas.</li>
                  <li>
                    La Central de Compras agrupa el pedido automáticamente con otras
                    clínicas y reduce el coste un 20%.
                  </li>
                  <li>
                    Cada implante lleva un Pasaporte Digital de Producto con trazabilidad
                    completa.
                  </li>
                  <li>
                    El paciente visualiza su implante 3D en la app Wallet.
                  </li>
                  <li>
                    Los datos anónimos mejoran el algoritmo de éxito de implantes.
                  </li>
                </ul>
              </Slide>
            </CarouselItem>

            {/* PÁGINA 14: Requisitos y siguientes pasos */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={14}
                title="Qué Necesitamos de Ti"
                icon={<ListChecks className="h-5 w-5" />}
                subtitle="Requisitos y siguientes pasos"
              >
                <ul className="space-y-2 list-disc list-inside">
                  <li>Confirmación de interés en Opción A o B.</li>
                  <li>Firma del acuerdo de Agente Digitalizador.</li>
                  <li>
                    Pago del fee de inicio, que se reinvierte en el desarrollo del
                    proyecto.
                  </li>
                  <li>
                    Respeto estricto de la fecha límite de adhesión: 15 de enero.
                  </li>
                </ul>
              </Slide>
            </CarouselItem>

            {/* PÁGINA 15: Cierre y contacto */}
            <CarouselItem className="h-full flex items-center">
              <Slide
                page={15}
                title="Lidera la Transformación"
                icon={<Users className="h-5 w-5" />}
                subtitle="Cierre y contacto"
                isMainTitle
              >
                <p>
                  No dejes que tu clínica se quede en la era analógica mientras el
                  sector avanza hacia la federación de datos y la inteligencia
                  colectiva.
                </p>
                <p className="font-medium text-foreground">
                  GLOBAL DATA CARE es la puerta de entrada a ese futuro, con financiación
                  europea y una hoja de ruta clara.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>emilio.mulet@globaldatacare.es</span>
                </div>
                <div className="mt-6 flex flex-col items-stretch gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
                  >
                    Solicitar Adhesión
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="text-xs font-medium text-muted-foreground underline underline-offset-4"
                  >
                    Cerrar Presentación
                  </button>
                </div>
              </Slide>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="-top-10 left-1/2 -translate-x-1/2" />
          <CarouselNext className="bottom-16 left-1/2 -translate-x-1/2" />
        </Carousel>
        <p className="mt-3 text-[11px] text-muted-foreground text-center">
          Desliza o usa las flechas para avanzar. Pulsa la X para salir.
        </p>
      </div>
    </main>
  );
};

export default MobilePresentation;
