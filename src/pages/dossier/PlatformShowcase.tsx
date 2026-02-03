import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Database, Network, Shield, Users, Stethoscope, Building2, 
  FlaskConical, ShoppingCart, Package, BarChart3, Cpu, Euro,
  Handshake, TrendingUp, ArrowRight, CheckCircle2, Lock,
  Wallet, Brain, Globe, FileCheck, Microscope, Heart,
  AlertTriangle, Zap, Target, Award, Percent, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import servidoresAislados from "@/assets/servidores-aislados.png";
import redFederadaActiva from "@/assets/red-federada-activa.png";

// ============== REUSABLE SECTION COMPONENTS ==============

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = "", id }: SectionProps) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-4 md:px-8">
      {children}
    </div>
  </section>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest text-primary mb-4">
    {children}
  </span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
    {children}
  </h2>
);

interface SectionSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionSubtitle = ({ children, className = "" }: SectionSubtitleProps) => (
  <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 ${className}`}>
    {children}
  </p>
);

interface MetricCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

const MetricCard = ({ value, label, icon }: MetricCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center p-6"
  >
    {icon && <div className="text-primary mb-2 flex justify-center">{icon}</div>}
    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">{value}</div>
    <div className="text-sm md:text-base text-muted-foreground">{label}</div>
  </motion.div>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="text-primary mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  route?: string;
}

const ScreenshotFrame = ({ src, alt, route }: ScreenshotFrameProps) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
    <div className="relative bg-card rounded-xl shadow-2xl overflow-hidden border">
      <div className="bg-muted/50 px-4 py-2 flex items-center gap-2 border-b">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        {route && <span className="text-xs text-muted-foreground ml-2">{route}</span>}
      </div>
      <AspectRatio ratio={16/9}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </AspectRatio>
    </div>
  </motion.div>
);

interface IframePreviewProps {
  route: string;
  title: string;
}

const IframePreview = ({ route, title }: IframePreviewProps) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl" />
    <div className="relative bg-card rounded-xl shadow-2xl overflow-hidden border">
      <div className="bg-muted/50 px-4 py-2 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs text-muted-foreground ml-2">{route}</span>
        </div>
        <Link to={route} target="_blank">
          <Button variant="ghost" size="sm" className="text-xs">
            Abrir <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </Link>
      </div>
      <AspectRatio ratio={16/9}>
        <iframe 
          src={route} 
          title={title}
          className="w-full h-full border-0 pointer-events-none"
          loading="lazy"
        />
      </AspectRatio>
    </div>
  </motion.div>
);

// ============== MAIN COMPONENT ==============

const PlatformShowcase = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Database className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Espacio de Datos</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#problema" className="hover:text-primary transition-colors">Problema</a>
            <a href="#vision" className="hover:text-primary transition-colors">Visión</a>
            <a href="#plataforma" className="hover:text-primary transition-colors">Plataforma</a>
            <a href="#tecnologia" className="hover:text-primary transition-colors">Tecnología</a>
            <a href="#partners" className="hover:text-primary transition-colors">Partners</a>
          </div>
          <Button asChild>
            <a href="#contacto">Únete</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-32 md:pt-40 bg-gradient-to-b from-primary/5 to-background">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Innovación en Salud Animal</SectionLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Espacio de Datos Federado de{" "}
              <span className="text-primary">Salud Animal</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Conectando Clínicas, Laboratorios, Industria e Investigación en un ecosistema interoperable y soberano
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button size="lg" asChild>
              <a href="#contacto">
                Solicitar Demo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/propuesta-kit-espacio-datos">
                Ver Propuesta Kit <Euro className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Actor Diagram */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center max-w-3xl mx-auto mt-12"
          >
            <div className="flex flex-col items-center p-4 bg-card rounded-lg border">
              <Stethoscope className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Clínicas</span>
            </div>
            <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground justify-self-center" />
            <div className="flex flex-col items-center p-4 bg-primary/10 rounded-lg border-2 border-primary">
              <Database className="h-10 w-10 text-primary mb-2" />
              <span className="text-sm font-bold text-primary">Espacio de Datos</span>
            </div>
            <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground justify-self-center" />
            <div className="flex flex-col items-center p-4 bg-card rounded-lg border">
              <FlaskConical className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium">Investigación</span>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Section 2: El Problema Actual */}
      <Section id="problema" className="bg-muted/30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>El Problema Actual</SectionLabel>
            <SectionTitle>Fragmentación Total de Datos Veterinarios</SectionTitle>
            <SectionSubtitle>
              Cada clínica es una isla de información. Los datos de salud animal están dispersos, 
              duplicados y desconectados, impidiendo avances en investigación y atención.
            </SectionSubtitle>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive mt-1" />
                <div>
                  <h4 className="font-medium">Historiales Incompletos</h4>
                  <p className="text-sm text-muted-foreground">El veterinario nunca tiene la foto completa del paciente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive mt-1" />
                <div>
                  <h4 className="font-medium">Pruebas Duplicadas</h4>
                  <p className="text-sm text-muted-foreground">Analíticas repetidas por falta de acceso a resultados previos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive mt-1" />
                <div>
                  <h4 className="font-medium">Investigación Bloqueada</h4>
                  <p className="text-sm text-muted-foreground">Imposible hacer estudios poblacionales con datos aislados</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <ScreenshotFrame 
              src={servidoresAislados} 
              alt="Servidores aislados sin conexión"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <MetricCard value="85%" label="Clínicas con datos aislados" icon={<Building2 className="h-6 w-6" />} />
          <MetricCard value="0%" label="Interoperabilidad actual" icon={<Network className="h-6 w-6" />} />
          <MetricCard value="30%" label="Pruebas duplicadas" icon={<FlaskConical className="h-6 w-6" />} />
          <MetricCard value="€0" label="Valor extraído de datos" icon={<Euro className="h-6 w-6" />} />
        </div>
      </Section>

      {/* Section 3: La Visión - Red Federada */}
      <Section id="vision">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <ScreenshotFrame 
              src={redFederadaActiva} 
              alt="Red federada activa conectando clínicas"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <SectionLabel>La Visión</SectionLabel>
            <SectionTitle>Red Federada: Datos Conectados, Soberanía Preservada</SectionTitle>
            <SectionSubtitle>
              Un modelo donde cada actor mantiene el control de sus datos mientras participa 
              en un ecosistema de valor compartido.
            </SectionSubtitle>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h4 className="font-medium">Soberanía de Datos</h4>
                  <p className="text-sm text-muted-foreground">Cada clínica decide qué comparte y con quién</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h4 className="font-medium">Interoperabilidad FHIR</h4>
                  <p className="text-sm text-muted-foreground">Estándar internacional de datos de salud</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h4 className="font-medium">Economía de Datos</h4>
                  <p className="text-sm text-muted-foreground">Monetización justa por compartir información</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: Panel del Tutor de Mascotas */}
      <Section id="plataforma" className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Plataforma en Acción</SectionLabel>
          <SectionTitle>Panel del Tutor de Mascotas</SectionTitle>
          <SectionSubtitle className="mx-auto">
            El tutor accede a toda la información de salud de su mascota desde una wallet digital segura
          </SectionSubtitle>
        </div>
        
        <IframePreview route="/demo/tutor" title="Panel del Tutor de Mascotas" />
        
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <FeatureCard 
            icon={<Wallet className="h-8 w-8" />}
            title="Wallet de Salud"
            description="Historial completo, vacunas, analíticas y tratamientos en un solo lugar"
          />
          <FeatureCard 
            icon={<Lock className="h-8 w-8" />}
            title="Control de Privacidad"
            description="Decide quién accede a qué información de tu mascota"
          />
          <FeatureCard 
            icon={<Euro className="h-8 w-8" />}
            title="Tokens de Datos"
            description="Gana recompensas por compartir datos anonimizados para investigación"
          />
          <FeatureCard 
            icon={<Heart className="h-8 w-8" />}
            title="Alertas de Salud"
            description="Notificaciones proactivas de vacunas y revisiones pendientes"
          />
        </div>
      </Section>

      {/* Section 5: Cockpit Veterinario */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>Para Veterinarios</SectionLabel>
          <SectionTitle>Cockpit Clínico Veterinario</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Acceso al historial federado del paciente con diagnóstico asistido por IA
          </SectionSubtitle>
        </div>
        
        <IframePreview route="/portal/doctor" title="Cockpit Veterinario" />
        
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <FeatureCard 
            icon={<FileCheck className="h-8 w-8" />}
            title="Historial Federado"
            description="Accede a registros de otras clínicas autorizadas por el tutor"
          />
          <FeatureCard 
            icon={<Brain className="h-8 w-8" />}
            title="Diagnóstico IA"
            description="Sugerencias basadas en patrones de millones de casos"
          />
          <FeatureCard 
            icon={<TrendingUp className="h-8 w-8" />}
            title="Trayectoria de Salud"
            description="Visualización temporal de la evolución del paciente"
          />
          <FeatureCard 
            icon={<Microscope className="h-8 w-8" />}
            title="Integración Lab"
            description="Resultados de laboratorio directamente en el expediente"
          />
        </div>
      </Section>

      {/* Section 6: Panel Director de Clínica */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Para Directores</SectionLabel>
          <SectionTitle>Panel de Dirección de Clínica</SectionTitle>
          <SectionSubtitle className="mx-auto">
            KPIs en tiempo real, benchmarking sectorial y excelencia operativa
          </SectionSubtitle>
        </div>
        
        <IframePreview route="/demo/clinic" title="Panel Director de Clínica" />
        
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <FeatureCard 
            icon={<BarChart3 className="h-8 w-8" />}
            title="KPIs en Tiempo Real"
            description="Métricas operativas, financieras y clínicas actualizadas"
          />
          <FeatureCard 
            icon={<Target className="h-8 w-8" />}
            title="Benchmarking"
            description="Compara tu rendimiento con el sector anonimizado"
          />
          <FeatureCard 
            icon={<Euro className="h-8 w-8" />}
            title="Control Financiero"
            description="Facturación, cobros y márgenes por servicio"
          />
          <FeatureCard 
            icon={<Award className="h-8 w-8" />}
            title="Excelencia Operativa"
            description="Identificación de cuellos de botella y mejoras"
          />
        </div>
      </Section>

      {/* Section 7: Marketplace de Investigación */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>Para Investigadores</SectionLabel>
          <SectionTitle>Marketplace de Datos de Investigación</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Acceso a datasets anonimizados, algoritmos federados y estudios epidemiológicos
          </SectionSubtitle>
        </div>
        
        <IframePreview route="/portal/research" title="Marketplace de Investigación" />
        
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <FeatureCard 
            icon={<Database className="h-8 w-8" />}
            title="Datasets Premium"
            description="Miles de registros clínicos anonimizados disponibles"
          />
          <FeatureCard 
            icon={<Cpu className="h-8 w-8" />}
            title="Federated Learning"
            description="Entrena modelos sin mover los datos originales"
          />
          <FeatureCard 
            icon={<Globe className="h-8 w-8" />}
            title="Epidemiología"
            description="Mapas de incidencia y alertas sanitarias en tiempo real"
          />
          <FeatureCard 
            icon={<Shield className="h-8 w-8" />}
            title="Compliance Total"
            description="GDPR, Gaia-X y estándares de privacidad garantizados"
          />
        </div>
      </Section>

      {/* Section 8: Central de Compras Predictiva */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Para Compras</SectionLabel>
          <SectionTitle>Central de Compras Predictiva</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Compras federadas con predicción IA y ahorro colectivo garantizado
          </SectionSubtitle>
        </div>
        
        <IframePreview route="/portal/supply" title="Central de Compras" />
        
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <FeatureCard 
            icon={<ShoppingCart className="h-8 w-8" />}
            title="Compras Federadas"
            description="Volumen agregado de múltiples clínicas para mejores precios"
          />
          <FeatureCard 
            icon={<Brain className="h-8 w-8" />}
            title="Predicción IA"
            description="Anticipación de necesidades basada en consumo histórico"
          />
          <FeatureCard 
            icon={<Percent className="h-8 w-8" />}
            title="Ahorro Colectivo"
            description="Descuentos exclusivos por volumen de red"
          />
          <FeatureCard 
            icon={<Clock className="h-8 w-8" />}
            title="Just-in-Time"
            description="Inventario optimizado sin excesos ni roturas"
          />
        </div>
      </Section>

      {/* Section 9: Pasaporte Digital de Producto */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>Trazabilidad</SectionLabel>
          <SectionTitle>Pasaporte Digital de Producto (DPP)</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Trazabilidad completa de medicamentos y productos con verificación blockchain
          </SectionSubtitle>
        </div>
        
        <IframePreview route="/solutions/product-passport" title="Pasaporte Digital" />
        
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <FeatureCard 
            icon={<Package className="h-8 w-8" />}
            title="DPP Europeo"
            description="Cumplimiento de regulación UE de trazabilidad"
          />
          <FeatureCard 
            icon={<FileCheck className="h-8 w-8" />}
            title="Certificación QR"
            description="Verificación instantánea de autenticidad"
          />
          <FeatureCard 
            icon={<Shield className="h-8 w-8" />}
            title="Anti-falsificación"
            description="Blockchain para prevenir productos falsificados"
          />
          <FeatureCard 
            icon={<Globe className="h-8 w-8" />}
            title="Cadena Completa"
            description="Desde fabricación hasta dispensación al paciente"
          />
        </div>
      </Section>

      {/* Section 10: Dashboard KPIs */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Analytics</SectionLabel>
          <SectionTitle>Dashboard de KPIs Sectoriales</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Métricas en tiempo real y benchmarking del sector veterinario
          </SectionSubtitle>
        </div>
        
        <IframePreview route="/portal/kpi" title="Dashboard KPIs" />
        
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <FeatureCard 
            icon={<BarChart3 className="h-8 w-8" />}
            title="Real-Time Analytics"
            description="Datos actualizados automáticamente desde la red"
          />
          <FeatureCard 
            icon={<Target className="h-8 w-8" />}
            title="Benchmarking Sectorial"
            description="Compara métricas con el promedio del sector"
          />
          <FeatureCard 
            icon={<TrendingUp className="h-8 w-8" />}
            title="Tendencias"
            description="Proyecciones y alertas de cambios significativos"
          />
          <FeatureCard 
            icon={<FileCheck className="h-8 w-8" />}
            title="Reportes Automáticos"
            description="Informes periódicos enviados por email"
          />
        </div>
      </Section>

      {/* Section 11: Fundamentos Tecnológicos */}
      <Section id="tecnologia">
        <div className="text-center mb-12">
          <SectionLabel>Tecnología</SectionLabel>
          <SectionTitle>Fundamentos Tecnológicos</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Arquitectura basada en estándares Gaia-X / IDS para espacios de datos soberanos
          </SectionSubtitle>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Identidad Descentralizada</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              DIDs y Verifiable Credentials para autenticación sin contraseñas ni intermediarios.
            </p>
            <Link to="/tech/identity" className="text-primary text-sm hover:underline">
              Más sobre Identity →
            </Link>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Contratos ODRL</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Políticas de uso de datos machine-readable para automatizar permisos y compliance.
            </p>
            <Link to="/tech/contracts" className="text-primary text-sm hover:underline">
              Más sobre Contracts →
            </Link>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">FHIR R4</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Estándar HL7 FHIR para interoperabilidad de datos de salud a nivel internacional.
            </p>
            <Link to="/tech/fhir" className="text-primary text-sm hover:underline">
              Más sobre FHIR →
            </Link>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Federated Learning</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Entrenamiento de modelos sin mover datos: la IA va a los datos, no al revés.
            </p>
            <Link to="/tech/federated" className="text-primary text-sm hover:underline">
              Más sobre Federación →
            </Link>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Row Level Security</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Control granular de acceso a datos a nivel de fila en base de datos.
            </p>
            <Link to="/tech/sovereignty" className="text-primary text-sm hover:underline">
              Más sobre Soberanía →
            </Link>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">IoT & Edge</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Integración de dispositivos médicos y sensores en tiempo real.
            </p>
            <Link to="/tech/iot" className="text-primary text-sm hover:underline">
              Más sobre IoT →
            </Link>
          </Card>
        </div>
      </Section>

      {/* Section 12: Kit Espacio de Datos */}
      <Section className="bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>Financiación</SectionLabel>
            <SectionTitle>Kit Espacio de Datos - Red.es</SectionTitle>
            <SectionSubtitle>
              Programa de ayudas del Gobierno de España para la adopción de espacios de datos.
              Subvención de hasta 30.000€ para clínicas veterinarias.
            </SectionSubtitle>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Subvención directa sin devolución</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Cubierto 100% por los fondos europeos</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Implementación guiada por expertos</span>
              </div>
            </div>
            
            <Button size="lg" asChild>
              <Link to="/propuesta-kit-espacio-datos">
                Ver Propuesta Completa <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <MetricCard value="15-30K" label="Subvención en EUR" icon={<Euro className="h-6 w-6" />} />
            <MetricCard value="100%" label="Fondos Europeos" icon={<Globe className="h-6 w-6" />} />
            <MetricCard value="0€" label="Coste para la Clínica" icon={<Percent className="h-6 w-6" />} />
            <MetricCard value="6 meses" label="Implementación" icon={<Clock className="h-6 w-6" />} />
          </div>
        </div>
      </Section>

      {/* Section 13: Perfiles de Business Partners */}
      <Section id="partners">
        <div className="text-center mb-12">
          <SectionLabel>Ecosistema</SectionLabel>
          <SectionTitle>Perfiles de Business Partners</SectionTitle>
          <SectionSubtitle className="mx-auto">
            El espacio de datos conecta múltiples actores del ecosistema veterinario
          </SectionSubtitle>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Stethoscope className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Clínicas Veterinarias</h3>
            <p className="text-sm text-muted-foreground">
              Acceso a historiales federados, IA diagnóstica y benchmarking sectorial
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <FlaskConical className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Laboratorios</h3>
            <p className="text-sm text-muted-foreground">
              Integración directa de resultados y trazabilidad de muestras
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Building2 className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Industria Farmacéutica</h3>
            <p className="text-sm text-muted-foreground">
              Real World Evidence y trazabilidad de productos con DPP
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Aseguradoras</h3>
            <p className="text-sm text-muted-foreground">
              Smart Claims automatizados y datos actuariales de calidad
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Microscope className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Investigación</h3>
            <p className="text-sm text-muted-foreground">
              Acceso a datasets y federated learning para estudios
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Cpu className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Proveedores IoT</h3>
            <p className="text-sm text-muted-foreground">
              Integración de dispositivos y sensores médicos
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <ShoppingCart className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Centrales de Compra</h3>
            <p className="text-sm text-muted-foreground">
              Compras federadas y predicción de demanda IA
            </p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <TrendingUp className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Inversores</h3>
            <p className="text-sm text-muted-foreground">
              Oportunidad en mercado emergente de data spaces
            </p>
          </Card>
        </div>
      </Section>

      {/* Section 14: Métricas de Impacto */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Impacto</SectionLabel>
          <SectionTitle>ROI Cuantificable para Todos los Actores</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Beneficios medibles desde el primer año de implementación
          </SectionSubtitle>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <MetricCard value="-25%" label="Reducción de costes operativos" icon={<TrendingUp className="h-6 w-6" />} />
          <MetricCard value="+40%" label="Mejora en diagnóstico temprano" icon={<Target className="h-6 w-6" />} />
          <MetricCard value="-30%" label="Menos pruebas duplicadas" icon={<Zap className="h-6 w-6" />} />
          <MetricCard value="+15%" label="Incremento de ingresos" icon={<Euro className="h-6 w-6" />} />
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h4 className="font-semibold mb-2">Para Clínicas</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Ahorro de 4h semanales en gestión administrativa</li>
              <li>• +20% en fidelización de clientes</li>
              <li>• Ingresos adicionales por compartir datos</li>
            </ul>
          </Card>
          
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h4 className="font-semibold mb-2">Para Investigación</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Acceso a 10x más datos de calidad</li>
              <li>• -60% tiempo en recopilación de datos</li>
              <li>• Compliance GDPR garantizado</li>
            </ul>
          </Card>
          
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h4 className="font-semibold mb-2">Para Tutores</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Historial completo en el móvil</li>
              <li>• Menos visitas innecesarias</li>
              <li>• Recompensas por compartir datos</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Section 15: CTA Final */}
      <Section id="contacto" className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel>¿Listo para empezar?</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Únete al Espacio de Datos de Salud Animal
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Conecta tu clínica al ecosistema federado. Sin coste inicial gracias al Kit Espacio de Datos.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/inscripcion-kit-espacio-datos">
                  Solicitar Adhesión <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/dossier">
                  Ver Dossier Completo
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-80">
            <div className="flex items-center gap-2">
              <Handshake className="h-5 w-5" />
              <span className="text-sm">+50 Clínicas Piloto</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">8 Tipos de Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <Euro className="h-5 w-5" />
              <span className="text-sm">Subvención 100%</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              <span className="font-medium">Espacio de Datos de Salud Animal</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/legal" className="hover:text-foreground">Aviso Legal</Link>
              <Link to="/tech" className="hover:text-foreground">Tecnología</Link>
              <Link to="/business/models" className="hover:text-foreground">Modelos de Negocio</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlatformShowcase;
