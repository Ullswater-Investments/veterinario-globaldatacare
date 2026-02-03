import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2, Users, TrendingUp, Euro, Target, Briefcase,
  CheckCircle2, ArrowRight, Globe, Shield, Brain, Wallet,
  Microscope, ShoppingCart, BarChart3, Lock, Handshake,
  Mail, FileText, Calendar, AlertTriangle, Server,
  Network, Zap, Award, PieChart as PieChartIcon, Percent,
  Clock, MapPin, FileCheck, ChevronRight, ExternalLink
} from "lucide-react";
import {
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line, Legend
} from "recharts";

import logoGobiernoRedEs from "@/assets/logo-gobierno-red-es.png";
import logoKitEspacioDatos from "@/assets/logo-kit-espacio-datos.jpg";
import servidoresAislados from "@/assets/servidores-aislados.png";
import redFederadaActiva from "@/assets/red-federada-activa.png";

// ==================== TYPES ====================

interface SlideProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: string;
  variant?: "default" | "highlight" | "warning";
}

// ==================== DATA ====================

const problemMetrics = [
  { value: "85%", label: "Clínicas con datos aislados" },
  { value: "0%", label: "Interoperabilidad entre sistemas" },
  { value: "30%", label: "Duplicación de pruebas" },
  { value: "6.200+", label: "Clínicas solo en España" },
];

const solutionModules = [
  { icon: <FileCheck className="h-6 w-6" />, title: "Gestión Clínica", desc: "FHIR/HL7" },
  { icon: <Wallet className="h-6 w-6" />, title: "Wallet del Tutor", desc: "SSI" },
  { icon: <Shield className="h-6 w-6" />, title: "Pasaporte Digital", desc: "DPP" },
  { icon: <Microscope className="h-6 w-6" />, title: "Research Marketplace", desc: "FL" },
  { icon: <ShoppingCart className="h-6 w-6" />, title: "Central de Compras", desc: "AI" },
  { icon: <BarChart3 className="h-6 w-6" />, title: "Dashboard KPIs", desc: "BI" },
];

const marketTargets = [
  { country: "España", networks: ["Vetersalud", "VetFamily", "AGESVET"], priority: "Alta", clinics: "6.200+" },
  { country: "Francia", networks: ["Coveto", "Centravet"], priority: "Alta", clinics: "8.000+" },
  { country: "UK", networks: ["Premier Vet Alliance (3.000+)"], priority: "Alta", clinics: "5.500+" },
  { country: "Via Tech", networks: ["Qvet/VMS", "GestorVet", "WinVet"], priority: "Muy Alta", clinics: "Software" },
];

const gtmChannels = [
  { 
    channel: "Redes de Abanderados", 
    target: "Vetersalud, VetFamily", 
    strategy: "Kit Espacio de Datos gratuito para asociados",
    icon: <Building2 className="h-5 w-5" />
  },
  { 
    channel: "Cooperativas", 
    target: "Coveto, Centravet", 
    strategy: "Proyecto de digitalización cooperativa",
    icon: <Users className="h-5 w-5" />
  },
  { 
    channel: "Partners PMS", 
    target: "Qvet, GestorVet", 
    strategy: "Integración premium con subvención incluida",
    icon: <Network className="h-5 w-5" />
  },
];

const revenueStreams = [
  { stream: "SaaS Clínicas", model: "50-100 EUR/mes", year2: 600000, color: "#3b82f6" },
  { stream: "Data Licensing", model: "Revenue share", year2: 200000, color: "#10b981" },
  { stream: "Research Marketplace", model: "Fee por dataset", year2: 150000, color: "#8b5cf6" },
  { stream: "Supply Chain", model: "% por transacción", year2: 100000, color: "#f59e0b" },
  { stream: "Smart Claims", model: "Fee por claim", year2: 75000, color: "#ef4444" },
];

const useOfFunds = [
  { name: "Marketing y Ventas", value: 50000, percent: 50, color: "#3b82f6" },
  { name: "Desarrollo Tech", value: 30000, percent: 30, color: "#10b981" },
  { name: "Legal y Compliance", value: 10000, percent: 10, color: "#8b5cf6" },
  { name: "Operaciones", value: 10000, percent: 10, color: "#f59e0b" },
];

const valuationScenario = [
  { metric: "Subvenciones captadas", value: "3.000.000 EUR" },
  { metric: "Clínicas integradas", value: "100 clínicas" },
  { metric: "Valoración estimada", value: "1.5M - 2M EUR" },
  { metric: "Equity por 25K", value: "~4-5%" },
  { metric: "Valor equity", value: "75K - 100K EUR" },
];

const timelineData = [
  { month: "M0", clinicas: 0, subvencion: 0 },
  { month: "M2", clinicas: 15, subvencion: 450000 },
  { month: "M4", clinicas: 35, subvencion: 1050000 },
  { month: "M6", clinicas: 55, subvencion: 1650000 },
  { month: "M8", clinicas: 80, subvencion: 2400000 },
  { month: "M10", clinicas: 100, subvencion: 3000000 },
];

const teamMembers = [
  { name: "Emilio Mulet", role: "CEO & Fundador", expertise: "HealthTech, Data Spaces, Red.es" },
  { name: "CTO (Por contratar)", role: "Director Técnico", expertise: "FHIR, Blockchain, AI/ML" },
  { name: "COO (Por contratar)", role: "Operaciones", expertise: "Sector veterinario, Ventas B2B" },
];

// ==================== COMPONENTS ====================

const Slide = ({ id, children, className = "" }: SlideProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`min-h-screen flex flex-col justify-center py-12 px-4 md:px-8 lg:px-16 ${className}`}
  >
    {children}
  </motion.section>
);

const MetricCard = ({ icon, value, label, trend, variant = "default" }: MetricCardProps) => {
  const variants = {
    default: "bg-card border",
    highlight: "bg-primary/10 border-primary/30",
    warning: "bg-amber-500/10 border-amber-500/30",
  };

  return (
    <Card className={`${variants[variant]} transition-all hover:scale-105`}>
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className="p-2 rounded-full bg-primary/10 text-primary mb-2">
          {icon}
        </div>
        <p className="text-2xl md:text-3xl font-bold">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
        {trend && (
          <Badge variant="secondary" className="mt-2 text-xs">
            {trend}
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

const SlideHeader = ({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) => (
  <div className="mb-8 md:mb-12">
    <Badge className="mb-4">{label}</Badge>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">{subtitle}</p>}
  </div>
);

// ==================== SLIDES ====================

const CoverSlide = () => (
  <Slide id="cover" className="bg-gradient-to-br from-background via-background to-primary/5">
    <div className="max-w-6xl mx-auto text-center">
      {/* Logos institucionales */}
      <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
        <img src={logoKitEspacioDatos} alt="Kit Espacio de Datos" className="h-12 md:h-16 object-contain" />
        <img src={logoGobiernoRedEs} alt="Red.es" className="h-10 md:h-14 object-contain" />
      </div>

      {/* Badge confidencial */}
      <Badge variant="outline" className="mb-6 text-amber-600 border-amber-600/50 bg-amber-500/10">
        <Lock className="h-3 w-3 mr-1" /> Propuesta Confidencial para Inversores
      </Badge>

      {/* Título principal */}
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Global Data Care
        <span className="block text-primary">Veterinario</span>
      </motion.h1>

      <motion.p 
        className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Primer Espacio de Datos Federado de Salud Animal en Europa
      </motion.p>

      {/* Ronda */}
      <motion.div 
        className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Euro className="h-6 w-6 text-primary" />
        <span className="text-xl md:text-2xl font-semibold">
          Ronda Pre-Seed: <span className="text-primary">100.000 EUR</span>
        </span>
      </motion.div>

      {/* Tech badges */}
      <motion.div 
        className="flex justify-center flex-wrap gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {["Gaia-X", "IDS", "FHIR R4", "Blockchain", "Federated Learning"].map((tech) => (
          <Badge key={tech} variant="secondary" className="text-sm">
            {tech}
          </Badge>
        ))}
      </motion.div>
    </div>
  </Slide>
);

const ProblemSlide = () => (
  <Slide id="problem" className="bg-gradient-to-br from-background to-destructive/5">
    <div className="max-w-6xl mx-auto">
      <SlideHeader 
        label="El Problema" 
        title="El Mercado Veterinario está Fragmentado" 
        subtitle="Los datos clínicos están atrapados en silos, impidiendo la innovación y la mejora de resultados"
      />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Imagen */}
        <div className="order-2 md:order-1">
          <img 
            src={servidoresAislados} 
            alt="Servidores aislados" 
            className="rounded-xl shadow-xl max-w-full h-auto"
          />
        </div>

        {/* Métricas y pain points */}
        <div className="order-1 md:order-2 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {problemMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-destructive/5 border-destructive/20">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-destructive">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Pain Points del Sector
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Datos clínicos atrapados en silos propietarios",
                  "Sin benchmarking entre clínicas del sector",
                  "Historiales no portables entre centros",
                  "IA imposible sin datos federados",
                  "Duplicación innecesaria de pruebas diagnósticas"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Server className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </Slide>
);

const SolutionSlide = () => (
  <Slide id="solution" className="bg-gradient-to-br from-background to-primary/5">
    <div className="max-w-6xl mx-auto">
      <SlideHeader 
        label="La Solución" 
        title="Espacio de Datos Federado" 
        subtitle="Arquitectura bajo estándares europeos que mantiene los datos en origen mientras permite su uso colaborativo"
      />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Módulos */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {solutionModules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
                      {module.icon}
                    </div>
                    <p className="font-semibold text-sm">{module.title}</p>
                    <Badge variant="outline" className="mt-2 text-xs">{module.desc}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Principios Arquitectónicos
              </h4>
              <ul className="space-y-2">
                {[
                  "Los datos nunca salen de su origen",
                  "El tutor controla quién accede a qué",
                  "Computación federada para IA sin mover datos",
                  "Trazabilidad blockchain inmutable",
                  "Cumplimiento RGPD nativo"
                ].map((principle, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    {principle}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Imagen red federada */}
        <div>
          <img 
            src={redFederadaActiva} 
            alt="Red federada activa" 
            className="rounded-xl shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  </Slide>
);

const MarketSlide = () => (
  <Slide id="market" className="bg-gradient-to-br from-background to-secondary/10">
    <div className="max-w-6xl mx-auto">
      <SlideHeader 
        label="Mercado" 
        title="Mercado Veterinario Europeo en Expansión" 
        subtitle="Un mercado de más de 200.000 clínicas con necesidad urgente de digitalización e interoperabilidad"
      />

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <MetricCard 
          icon={<Euro className="h-5 w-5" />} 
          value="4.5B EUR" 
          label="TAM España" 
          variant="highlight"
        />
        <MetricCard 
          icon={<TrendingUp className="h-5 w-5" />} 
          value="12%" 
          label="CAGR Anual" 
        />
        <MetricCard 
          icon={<Globe className="h-5 w-5" />} 
          value="200K+" 
          label="Clínicas en Europa" 
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Targets Prioritarios por País
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">País</th>
                  <th className="text-left py-3 px-4 font-semibold">Redes / Cooperativas</th>
                  <th className="text-left py-3 px-4 font-semibold">Prioridad</th>
                  <th className="text-left py-3 px-4 font-semibold">Clínicas</th>
                </tr>
              </thead>
              <tbody>
                {marketTargets.map((target, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-3 px-4 font-medium">{target.country}</td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-1">
                        {target.networks.map((net, j) => (
                          <Badge key={j} variant="outline" className="text-xs">{net}</Badge>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={target.priority === "Muy Alta" ? "default" : "secondary"}>
                        {target.priority}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 font-semibold">{target.clinics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  </Slide>
);

const GoToMarketSlide = () => (
  <Slide id="gtm" className="bg-gradient-to-br from-background to-accent/10">
    <div className="max-w-6xl mx-auto">
      <SlideHeader 
        label="Go-to-Market" 
        title="Estrategia 'Caballo de Troya'" 
        subtitle="Financiación pública como palanca para penetrar el mercado sin coste para la clínica"
      />

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {gtmChannels.map((channel, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Card className="h-full hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mb-3">
                  {channel.icon}
                </div>
                <CardTitle className="text-lg">{channel.channel}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Target:</strong> {channel.target}
                </p>
                <p className="text-sm">{channel.strategy}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Fase 1: 10 Meses
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span><strong>100 clínicas</strong> integradas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span><strong>3M EUR</strong> en subvenciones captadas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Ecosistema federado <strong>operativo</strong></span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Fase 2: 24 Meses
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span><strong>500 clínicas</strong> en la red</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span>Expansión a <strong>Francia y UK</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span>Research Marketplace <strong>activo</strong></span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </Slide>
);

const KitDatosSlide = () => (
  <Slide id="kit" className="bg-gradient-to-br from-background to-green-500/5">
    <div className="max-w-6xl mx-auto">
      <SlideHeader 
        label="La Palanca" 
        title="Kit Espacio de Datos" 
        subtitle="Financiación pública como motor de crecimiento: la clínica no paga nada"
      />

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <MetricCard 
          icon={<Euro className="h-5 w-5" />} 
          value="30.000 EUR" 
          label="Subvención por clínica" 
          variant="highlight"
        />
        <MetricCard 
          icon={<Building2 className="h-5 w-5" />} 
          value="100" 
          label="Clínicas objetivo" 
        />
        <MetricCard 
          icon={<Award className="h-5 w-5" />} 
          value="3M EUR" 
          label="Total fondos europeos" 
          variant="highlight"
        />
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Flujo de Financiación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-6">
            {[
              { label: "Clínica Solicitante", icon: <Building2 className="h-6 w-6" /> },
              { label: "Accuro (Agente Digitalizador)", icon: <Network className="h-6 w-6" /> },
              { label: "Red.es Aprueba", icon: <FileCheck className="h-6 w-6" /> },
              { label: "100% Financiación", icon: <CheckCircle2 className="h-6 w-6" /> },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-2">
                    {step.icon}
                  </div>
                  <p className="text-sm font-medium max-w-[120px]">{step.label}</p>
                </div>
                {i < 3 && <ArrowRight className="h-6 w-6 text-muted-foreground hidden md:block" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-green-500/10 border-green-500/30">
        <CardContent className="p-6 text-center">
          <p className="text-xl md:text-2xl font-semibold text-green-700 dark:text-green-400">
            "La clínica no paga nada. Red.es financia el 100%."
          </p>
        </CardContent>
      </Card>
    </div>
  </Slide>
);

const BusinessModelSlide = () => (
  <Slide id="business" className="bg-gradient-to-br from-background to-blue-500/5">
    <div className="max-w-6xl mx-auto">
      <SlideHeader 
        label="Modelo de Negocio" 
        title="Múltiples Flujos de Ingresos Recurrentes" 
        subtitle="Diversificación de revenue streams para maximizar el valor del ecosistema"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Tabla de revenue streams */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Euro className="h-5 w-5 text-primary" />
              Revenue Streams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-semibold">Stream</th>
                  <th className="text-left py-2 font-semibold">Modelo</th>
                  <th className="text-right py-2 font-semibold">Año 2</th>
                </tr>
              </thead>
              <tbody>
                {revenueStreams.map((stream, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: stream.color }} />
                        {stream.stream}
                      </div>
                    </td>
                    <td className="py-2 text-muted-foreground">{stream.model}</td>
                    <td className="py-2 text-right font-medium">
                      {(stream.year2 / 1000).toFixed(0)}K EUR
                    </td>
                  </tr>
                ))}
                <tr className="bg-primary/5">
                  <td colSpan={2} className="py-3 font-semibold">Total ARR Año 2</td>
                  <td className="py-3 text-right font-bold text-primary">1.125K EUR</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Gráfico de proyección */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Proyección de Ingresos Año 2
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueStreams} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(v) => `${(v/1000).toFixed(0)}K`} />
                  <YAxis dataKey="stream" type="category" width={100} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    formatter={(value: number) => [`${(value/1000).toFixed(0)}K EUR`, "Proyección"]}
                  />
                  <Bar dataKey="year2" fill="#3b82f6" radius={[0, 4, 4, 0]}>
                    {revenueStreams.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </Slide>
);

const TheAskSlide = () => (
  <Slide id="ask" className="bg-gradient-to-br from-background to-primary/10">
    <div className="max-w-6xl mx-auto">
      <SlideHeader 
        label="La Propuesta" 
        title="Ronda Pre-Seed: 100.000 EUR" 
        subtitle="4 tickets de inversión para financiar la captación de 100 clínicas"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Estructura de tickets */}
        <Card className="bg-primary/5 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Estructura de la Ronda
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg border">
                <p className="text-3xl font-bold text-primary">4</p>
                <p className="text-sm text-muted-foreground">Inversores</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <p className="text-3xl font-bold text-primary">25K EUR</p>
                <p className="text-sm text-muted-foreground">Por ticket</p>
              </div>
            </div>

            <div className="p-4 bg-background rounded-lg border">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Tipo:</span>
                <span>Préstamo Convertible</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Período:</span>
                <span>10 meses</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Conversión:</span>
                <span>A valoración de mercado</span>
              </div>
            </div>

            <div className="text-center p-4 bg-primary text-primary-foreground rounded-lg">
              <p className="text-2xl font-bold">= 100.000 EUR</p>
              <p className="text-sm opacity-90">Total de la ronda</p>
            </div>
          </CardContent>
        </Card>

        {/* Uso de fondos */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChartIcon className="h-5 w-5 text-primary" />
              Uso de Fondos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={useOfFunds}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {useOfFunds.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => [`${(value/1000).toFixed(0)}K EUR`, ""]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {useOfFunds.map((fund, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: fund.color }} />
                    <span>{fund.name}</span>
                  </div>
                  <span className="font-medium">{fund.percent}% - {(fund.value/1000).toFixed(0)}K EUR</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </Slide>
);

const ROISlide = () => (
  <Slide id="roi" className="bg-gradient-to-br from-background to-green-500/10">
    <div className="max-w-6xl mx-auto">
      <SlideHeader 
        label="Retorno" 
        title="De 25.000 EUR a 100.000 EUR" 
        subtitle="Multiplicador 3x-4x en 10 meses mediante conversión a equity"
      />

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Timeline gráfico */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Progreso de Captación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    tickFormatter={(v) => `${(v/1000000).toFixed(1)}M`}
                  />
                  <Tooltip 
                    formatter={(value: number, name: string) => [
                      name === "clinicas" ? `${value} clínicas` : `${(value/1000).toFixed(0)}K EUR`,
                      name === "clinicas" ? "Clínicas" : "Subvención"
                    ]}
                  />
                  <Legend />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="clinicas" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: "#3b82f6" }}
                    name="Clínicas"
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="subvencion" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ fill: "#10b981" }}
                    name="Subvención"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Escenario de valoración */}
        <Card className="bg-green-500/5 border-green-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Escenario de Valoración
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {valuationScenario.map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-background rounded-lg border">
                <span className="text-sm">{item.metric}</span>
                <span className="font-bold text-green-600">{item.value}</span>
              </div>
            ))}

            <div className="mt-6 p-4 bg-green-500 text-white rounded-lg text-center">
              <p className="text-sm opacity-90">Multiplicador</p>
              <p className="text-3xl font-bold">3x - 4x</p>
              <p className="text-sm opacity-90">en 10 meses</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-1">Inversión</p>
              <p className="text-3xl font-bold">25.000 EUR</p>
              <p className="text-xs text-muted-foreground">(Préstamo convertible)</p>
            </div>
            <ArrowRight className="h-8 w-8 text-primary" />
            <div className="p-4 bg-primary/10 rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">Valor en equity</p>
              <p className="text-4xl font-bold text-primary">75-100K EUR</p>
              <p className="text-xs text-muted-foreground">(~4-5% de la spinoff)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </Slide>
);

const TeamSlide = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <Slide id="team" className="bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <SlideHeader 
          label="Equipo y Cierre" 
          title="Experiencia en HealthTech y Data Spaces" 
          subtitle="Equipo con conexiones directas con Red.es y el ecosistema europeo de datos"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className="h-full text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 mb-8">
          <CardContent className="p-8 text-center">
            <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
              "No invertís en un software. Invertís en la infraestructura de datos 
              del sector veterinario europeo."
            </blockquote>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="gap-2" onClick={() => setShowEmail(!showEmail)}>
            <Mail className="h-5 w-5" />
            Solicitar Reunión
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="/showcase" target="_blank">
              <ExternalLink className="h-5 w-5" />
              Ver Demo Completa
            </a>
          </Button>
          <Button size="lg" variant="secondary" className="gap-2">
            <FileText className="h-5 w-5" />
            Descargar Term Sheet
          </Button>
        </div>

        {showEmail && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center"
          >
            <Card className="inline-block">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">Contacto directo:</p>
                <a 
                  href="mailto:emilio.mulet@globaldatacare.es" 
                  className="text-primary hover:underline font-medium"
                >
                  emilio.mulet@globaldatacare.es
                </a>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Badge variant="outline" className="gap-1">
            <FileText className="h-3 w-3" /> NDA disponible
          </Badge>
          <Badge variant="outline" className="gap-1">
            <Calendar className="h-3 w-3" /> Due Diligence preparado
          </Badge>
          <Badge variant="outline" className="gap-1">
            <Handshake className="h-3 w-3" /> Term Sheet listo
          </Badge>
        </div>
      </div>
    </Slide>
  );
};

// ==================== MAIN COMPONENT ====================

const InvestorPitchDeck = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation dots */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
        {["cover", "problem", "solution", "market", "gtm", "kit", "business", "ask", "roi", "team"].map((slide, i) => (
          <a
            key={slide}
            href={`#${slide}`}
            className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-colors"
            title={`Slide ${i + 1}`}
          />
        ))}
      </nav>

      <CoverSlide />
      <ProblemSlide />
      <SolutionSlide />
      <MarketSlide />
      <GoToMarketSlide />
      <KitDatosSlide />
      <BusinessModelSlide />
      <TheAskSlide />
      <ROISlide />
      <TeamSlide />

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t bg-muted/30">
        <p className="text-sm text-muted-foreground">
          © 2025 Accuro Technology S.L. · Documento confidencial para inversores cualificados
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <img src={logoKitEspacioDatos} alt="Kit Espacio de Datos" className="h-8 object-contain opacity-60" />
          <img src={logoGobiernoRedEs} alt="Red.es" className="h-6 object-contain opacity-60" />
        </div>
      </footer>
    </div>
  );
};

export default InvestorPitchDeck;
