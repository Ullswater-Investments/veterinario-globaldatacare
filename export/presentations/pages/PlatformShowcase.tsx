import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from "recharts";
import { 
  Database, Network, Shield, Users, Stethoscope, Building2, 
  FlaskConical, ShoppingCart, Package, BarChart3, Cpu, Euro,
  Handshake, TrendingUp, ArrowRight, CheckCircle2, Lock,
  Wallet, Brain, Globe, FileCheck, Microscope, Heart,
  AlertTriangle, Zap, Target, Award, Percent, Clock,
  Eye, EyeOff, Coins, Gift, Pill, Factory, QrCode, History,
  Download, ScrollText, BrainCircuit, PackageCheck, CalendarClock,
  Truck, Video, Smartphone, Activity, Siren, MapPin, Thermometer,
  Layers, Key, Server, GitBranch, CircleDot, ShieldCheck, 
  PawPrint, Sparkles, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import servidoresAislados from "@/assets/servidores-aislados.png";
import redFederadaActiva from "@/assets/red-federada-activa.png";

// Import mock data
import {
  tutorProfile, pets, yearlyExpenses, monthlyExpenseTrend,
  privacyConnections, dataTokens, federatedSavings
} from "@/data/demoKpis/tutorMockData";

import {
  clinicProfile, financialKPIs, serviceKPIs, 
  occupancyHeatmap, benchmarks, revenueData,
  federatedSavings as clinicSavings, aiPredictions, supplyAlerts
} from "@/data/demoKpis/clinicMockData";

import {
  vetProfile, todayStats, performanceData,
  aiSuggestions, hospitalizedPatients, aiAccuracyHistory
} from "@/data/demoKpis/vetMockData";

import {
  researcherProfile, marketplaceStats, datasets, federatedModels,
  epidemiologicalAlerts, datasetDistribution
} from "@/data/demoKpis/researchMockData";

// ============== CHART COLORS ==============
const CHART_COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

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
}

const ScreenshotFrame = ({ src, alt }: ScreenshotFrameProps) => (
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
      </div>
      <div className="aspect-video">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  </motion.div>
);

// ============== EXPLANATION BOX COMPONENT ==============

interface ExplanationBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  highlight?: string;
}

const ExplanationBox = ({ icon, title, description, bullets, highlight }: ExplanationBoxProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-muted/50 border rounded-xl p-6 mt-8"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {highlight && (
          <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm font-medium text-primary">{highlight}</p>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

// ============== PREVIEW FRAME COMPONENT ==============

interface PreviewFrameProps {
  children: React.ReactNode;
  route?: string;
  title?: string;
}

const PreviewFrame = ({ children, route, title }: PreviewFrameProps) => (
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
          {route && <span className="text-xs text-muted-foreground ml-2">{route}</span>}
        </div>
        {route && (
          <Link to={route} target="_blank">
            <Button variant="ghost" size="sm" className="text-xs">
              Abrir <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </Link>
        )}
      </div>
      <div className="p-6 bg-background min-h-[400px]">
        {children}
      </div>
    </div>
  </motion.div>
);

// ============== NATIVE PREVIEW COMPONENTS ==============

// Preview 1: Tutor Wallet
const TutorWalletPreview = () => (
  <div className="space-y-6">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <PawPrint className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold">{tutorProfile.name}</h3>
          <p className="text-sm text-muted-foreground">{tutorProfile.totalPets} mascotas registradas</p>
        </div>
      </div>
      <Badge variant="secondary" className="gap-1">
        <Coins className="h-3 w-3" />
        {tutorProfile.loyaltyPoints} puntos
      </Badge>
    </div>

    {/* Pet selector */}
    <div className="flex gap-3">
      {pets.map((pet, i) => (
        <Card key={pet.id} className={`p-3 cursor-pointer transition-all ${i === 0 ? 'ring-2 ring-primary' : ''}`}>
          <div className="flex items-center gap-2">
            <img src={pet.photoUrl} alt={pet.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium text-sm">{pet.name}</p>
              <p className="text-xs text-muted-foreground">{pet.species}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>

    {/* Charts */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Pie Chart - Gastos */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Gastos Anuales por Categoría</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={yearlyExpenses}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="amount"
                nameKey="category"
              >
                {yearlyExpenses.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value}€`, '']}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {yearlyExpenses.map((item, i) => (
              <div key={i} className="flex items-center gap-1 text-xs">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span>{item.category}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Area Chart - Tendencia */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Tendencia Mensual de Gastos</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={monthlyExpenseTrend}>
              <defs>
                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <Tooltip 
                formatter={(value: number) => [`${value}€`, 'Gasto']}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="amount" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                fill="url(#colorAmount)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>

    {/* Federated Savings Card */}
    <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
            <Gift className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="font-medium text-green-800 dark:text-green-200">Ahorro Federado Acumulado</p>
            <p className="text-sm text-green-600 dark:text-green-400">{federatedSavings.lastPurchase}</p>
          </div>
        </div>
        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
          {federatedSavings.totalSaved}€
        </div>
      </CardContent>
    </Card>
  </div>
);

// Preview 2: Tutor Privacy
const TutorPrivacyPreview = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        Control de Privacidad de Datos
      </h3>
      <Badge variant="outline" className="gap-1">
        <Lock className="h-3 w-3" />
        ODRL Activo
      </Badge>
    </div>

    {/* Connections */}
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Conexiones Autorizadas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {privacyConnections.map((conn, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm">{conn.clinicName}</p>
                <p className="text-xs text-muted-foreground">Último acceso: {conn.lastAccess}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge 
                variant={conn.accessLevel === 'full' ? 'default' : conn.accessLevel === 'limited' ? 'secondary' : 'outline'}
              >
                {conn.accessLevel === 'full' ? 'Completo' : conn.accessLevel === 'limited' ? 'Limitado' : 'Lectura'}
              </Badge>
              <Badge variant={conn.status === 'active' ? 'default' : 'secondary'} className="gap-1">
                {conn.status === 'active' ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                {conn.status === 'active' ? 'Activo' : 'Pendiente'}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>

    {/* Data Tokens */}
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center justify-between">
          <span>Tokens de Datos Ganados</span>
          <Badge className="bg-primary/10 text-primary">
            {dataTokens.reduce((acc, t) => acc + t.earnedTokens, 0)} tokens
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-3">
          {dataTokens.map((token, i) => (
            <Card key={i} className="flex-1 p-3 bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium">{token.type}</span>
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <p className="text-xl font-bold text-primary">+{token.earnedTokens}</p>
              <p className="text-xs text-muted-foreground">{token.date}</p>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

// Preview 3: Vet Cockpit
const VetCockpitPreview = () => (
  <div className="space-y-6">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Stethoscope className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold">{vetProfile.name}</h3>
          <p className="text-sm text-muted-foreground">{vetProfile.specialty}</p>
        </div>
      </div>
      <Badge variant="secondary" className="gap-1">
        <Activity className="h-3 w-3" />
        {todayStats.completedConsultations}/{todayStats.totalScheduled} consultas
      </Badge>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-4 gap-4">
      <Card className="p-4 text-center">
        <p className="text-2xl font-bold text-primary">{todayStats.completedConsultations}</p>
        <p className="text-xs text-muted-foreground">Completadas</p>
      </Card>
      <Card className="p-4 text-center">
        <p className="text-2xl font-bold text-amber-500">{todayStats.totalScheduled - todayStats.completedConsultations}</p>
        <p className="text-xs text-muted-foreground">Pendientes</p>
      </Card>
      <Card className="p-4 text-center">
        <p className="text-2xl font-bold text-green-500">{todayStats.nextAppointmentIn}min</p>
        <p className="text-xs text-muted-foreground">Próxima cita</p>
      </Card>
      <Card className="p-4 text-center">
        <p className="text-2xl font-bold text-blue-500">{todayStats.hospitalized}</p>
        <p className="text-xs text-muted-foreground">Hospitalizados</p>
      </Card>
    </div>

    {/* AI Suggestions */}
    <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Brain className="h-4 w-4 text-amber-600" />
          Sugerencias del AI Copilot
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {aiSuggestions.filter(s => !s.reviewed).slice(0, 2).map((suggestion, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-background rounded-lg">
            <Sparkles className="h-5 w-5 text-amber-500 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm">{suggestion.patientName}</span>
                <Badge variant="secondary" className="text-xs">
                  {suggestion.confidence}% confianza
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{suggestion.suggestion}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>

    {/* AI Accuracy */}
    <Card className="bg-primary/5">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BrainCircuit className="h-8 w-8 text-primary" />
          <div>
            <p className="font-medium">Precisión del AI Copilot</p>
            <p className="text-sm text-muted-foreground">
              {aiAccuracyHistory.acceptedSuggestions} de {aiAccuracyHistory.totalSuggestions} sugerencias aceptadas
            </p>
          </div>
        </div>
        <div className="text-3xl font-bold text-primary">
          {aiAccuracyHistory.overall}%
        </div>
      </CardContent>
    </Card>
  </div>
);

// Preview 4: Vet Workload
const VetWorkloadPreview = () => (
  <div className="space-y-6">
    {/* Workload Chart */}
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Carga de Trabajo (Últimos 30 días)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={performanceData}>
            <defs>
              <linearGradient id="colorConsultations" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }} 
            />
            <Area 
              type="monotone" 
              dataKey="consultations" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              fill="url(#colorConsultations)" 
              name="Consultas"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    {/* Hospitalized Patients */}
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Pacientes Hospitalizados a mi Cargo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {hospitalizedPatients.map((patient, i) => (
            <div key={i} className={`p-3 rounded-lg border-l-4 ${
              patient.status === 'critical' ? 'bg-red-50 dark:bg-red-950/20 border-red-500' :
              patient.status === 'stable' ? 'bg-green-50 dark:bg-green-950/20 border-green-500' :
              'bg-blue-50 dark:bg-blue-950/20 border-blue-500'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">{patient.patientName}</span>
                <Badge variant={
                  patient.status === 'critical' ? 'destructive' :
                  patient.status === 'stable' ? 'default' : 'secondary'
                } className="text-xs">
                  {patient.status === 'critical' ? 'Crítico' :
                   patient.status === 'stable' ? 'Estable' : 'Recuperando'}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{patient.condition}</p>
              <div className="flex items-center gap-1 mt-2 text-xs">
                <Clock className="h-3 w-3" />
                <span>{patient.nextMedication} en {patient.minutesToMed}min</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

// Preview 5: Clinic Service
const ClinicServicePreview = () => (
  <div className="space-y-6">
    {/* Tabs simulation */}
    <div className="flex gap-2 border-b pb-2">
      <Badge className="bg-primary text-primary-foreground">Servicio</Badge>
      <Badge variant="outline">Finanzas</Badge>
      <Badge variant="outline">Operaciones</Badge>
      <Badge variant="outline">Benchmark</Badge>
    </div>

    {/* AI Alert */}
    {aiPredictions.length > 0 && (
      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg">
        <div className="flex items-start gap-3">
          <Brain className="h-5 w-5 text-amber-600 mt-0.5" />
          <div>
            <p className="font-medium text-amber-800 dark:text-amber-200">Alerta Predictiva IA</p>
            <p className="text-sm text-amber-600 dark:text-amber-400">{aiPredictions[0].message}</p>
          </div>
        </div>
      </div>
    )}

    {/* KPI Cards */}
    <div className="grid grid-cols-4 gap-4">
      <Card className="p-4 border-l-4 border-l-green-500">
        <p className="text-sm text-muted-foreground mb-1">NPS Global</p>
        <p className="text-3xl font-bold">{serviceKPIs.npsGlobal}</p>
        <Badge variant="secondary" className="mt-2 text-green-600">
          +{serviceKPIs.npsTrend}%
        </Badge>
      </Card>
      <Card className="p-4 border-l-4 border-l-blue-500">
        <p className="text-sm text-muted-foreground mb-1">Tiempo Espera</p>
        <p className="text-3xl font-bold">{serviceKPIs.avgWaitTime}min</p>
        <p className="text-xs text-muted-foreground mt-2">Objetivo: {serviceKPIs.waitTimeTarget}min</p>
      </Card>
      <Card className="p-4 border-l-4 border-l-purple-500">
        <p className="text-sm text-muted-foreground mb-1">Ocupación</p>
        <p className="text-3xl font-bold">{serviceKPIs.occupancyRate}%</p>
        <Progress value={serviceKPIs.occupancyRate} className="mt-2" />
      </Card>
      <Card className="p-4 border-l-4 border-l-amber-500">
        <p className="text-sm text-muted-foreground mb-1">Reclamaciones</p>
        <p className="text-3xl font-bold">{serviceKPIs.complaintsMonth}</p>
        <Badge variant="secondary" className="mt-2 text-green-600">
          {serviceKPIs.complaintsTrend}%
        </Badge>
      </Card>
    </div>

    {/* Occupancy Heatmap */}
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Mapa de Calor de Ocupación</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-7 gap-1 text-xs min-w-[500px]">
            <div></div>
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
              <div key={day} className="text-center font-medium p-1">{day}</div>
            ))}
            {occupancyHeatmap.slice(0, 6).map((slot, i) => (
              <React.Fragment key={i}>
                <div className="text-right pr-2 py-1">{slot.hour}</div>
                {[slot.monday, slot.tuesday, slot.wednesday, slot.thursday, slot.friday, slot.saturday].map((val, j) => (
                  <div 
                    key={j}
                    className={`p-1 rounded text-center ${
                      val === 0 ? 'bg-muted' :
                      val < 50 ? 'bg-green-200 dark:bg-green-900' :
                      val < 75 ? 'bg-yellow-200 dark:bg-yellow-900' :
                      val < 90 ? 'bg-orange-200 dark:bg-orange-900' :
                      'bg-red-200 dark:bg-red-900'
                    }`}
                  >
                    {val > 0 ? `${val}%` : '-'}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

// Preview 6: Clinic Finance
const ClinicFinancePreview = () => (
  <div className="space-y-6">
    {/* Revenue Chart */}
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Revenue vs Objetivo (6 meses)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
            <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}K`} />
            <Tooltip 
              formatter={(value: number) => [`${value.toLocaleString()}€`, '']}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }} 
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 0, r: 4 }}
              name="Revenue"
            />
            <Line 
              type="monotone" 
              dataKey="target" 
              stroke="hsl(var(--muted-foreground))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Objetivo"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    {/* Financial KPIs */}
    <div className="grid grid-cols-4 gap-4">
      {financialKPIs.map((kpi, i) => (
        <Card key={i} className="p-4">
          <p className="text-sm text-muted-foreground mb-1">{kpi.label}</p>
          <p className="text-2xl font-bold">
            {kpi.value.toLocaleString()}{kpi.unit}
          </p>
          <Badge 
            variant="secondary" 
            className={`mt-2 ${kpi.trend > 0 ? 'text-green-600' : 'text-red-600'}`}
          >
            {kpi.trend > 0 ? '+' : ''}{kpi.trend}%
          </Badge>
        </Card>
      ))}
    </div>
  </div>
);

// Preview 7: Clinic Benchmark
const ClinicBenchmarkPreview = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Comparativa con Red Federada</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={benchmarks} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis type="number" tick={{ fontSize: 12 }} />
            <YAxis dataKey="metric" type="category" tick={{ fontSize: 12 }} width={100} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }} 
            />
            <Legend />
            <Bar dataKey="clinicValue" fill="hsl(var(--primary))" name="Tu Clínica" radius={[0, 4, 4, 0]} />
            <Bar dataKey="networkAverage" fill="hsl(var(--muted-foreground))" name="Media Red" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    {/* Percentiles */}
    <div className="grid grid-cols-5 gap-3">
      {benchmarks.map((b, i) => (
        <Card key={i} className="p-3 text-center">
          <p className="text-xs text-muted-foreground mb-1">{b.metric}</p>
          <p className="text-2xl font-bold text-primary">P{b.percentile}</p>
          <p className="text-xs mt-1">{b.clinicValue}{b.unit}</p>
        </Card>
      ))}
    </div>
  </div>
);

// Preview 8: Research Marketplace
const ResearchMarketplacePreview = () => (
  <div className="space-y-6">
    {/* Stats */}
    <div className="grid grid-cols-4 gap-4">
      <Card className="p-4 text-center">
        <Database className="h-6 w-6 text-primary mx-auto mb-2" />
        <p className="text-2xl font-bold">{marketplaceStats.publishedDatasets}</p>
        <p className="text-xs text-muted-foreground">Datasets</p>
      </Card>
      <Card className="p-4 text-center">
        <Euro className="h-6 w-6 text-green-500 mx-auto mb-2" />
        <p className="text-2xl font-bold">{marketplaceStats.totalRevenue}€</p>
        <p className="text-xs text-muted-foreground">Revenue Total</p>
      </Card>
      <Card className="p-4 text-center">
        <Download className="h-6 w-6 text-blue-500 mx-auto mb-2" />
        <p className="text-2xl font-bold">{marketplaceStats.acquiredDatasets}</p>
        <p className="text-xs text-muted-foreground">Adquisiciones</p>
      </Card>
      <Card className="p-4 text-center">
        <Cpu className="h-6 w-6 text-purple-500 mx-auto mb-2" />
        <p className="text-2xl font-bold">{marketplaceStats.licensedAlgorithms}</p>
        <p className="text-xs text-muted-foreground">Algoritmos</p>
      </Card>
    </div>

    {/* Dataset Grid */}
    <div className="grid grid-cols-2 gap-4">
      {datasets.slice(0, 4).map((dataset, i) => (
        <Card key={i} className="p-4">
          <div className="flex items-start justify-between mb-2">
            <Badge variant="outline">{dataset.category}</Badge>
            <Badge 
              variant={dataset.status === 'published' ? 'default' : 'secondary'}
            >
              {dataset.status === 'published' ? 'Publicado' : 'Pendiente'}
            </Badge>
          </div>
          <h4 className="font-medium mb-2">{dataset.name}</h4>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{dataset.records.toLocaleString()} registros</span>
            <span className="font-bold text-primary">{dataset.revenue}€</span>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

// Preview 9: Research FL
const ResearchFLPreview = () => (
  <div className="space-y-6">
    {/* FL Models */}
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Modelos Federated Learning</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {federatedModels.map((model, i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{model.name}</span>
                <Badge 
                  variant={
                    model.status === 'deployed' ? 'default' :
                    model.status === 'training' ? 'secondary' :
                    model.status === 'validating' ? 'outline' : 'destructive'
                  }
                  className="text-xs"
                >
                  {model.status === 'deployed' ? 'Desplegado' :
                   model.status === 'training' ? 'Entrenando' :
                   model.status === 'validating' ? 'Validando' : 'Pausado'}
                </Badge>
              </div>
              <span className="text-sm font-bold text-primary">{model.currentAccuracy}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={model.progress} className="flex-1" />
              <span className="text-xs text-muted-foreground w-10">{model.progress}%</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {model.participatingNodes} nodos participando • Objetivo: {model.targetAccuracy}%
            </p>
          </div>
        ))}
      </CardContent>
    </Card>

    {/* Distribution Chart */}
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Distribución de Datasets por Categoría</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={datasetDistribution}
              cx="50%"
              cy="50%"
              outerRadius={80}
              paddingAngle={2}
              dataKey="count"
              nameKey="category"
              label={({ category, count }) => `${category}: ${count}`}
              labelLine={false}
            >
              {datasetDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);

// Preview 10: Supply Flow
const SupplyFlowPreview = () => (
  <div className="space-y-6">
    <h3 className="font-semibold text-center">Del Dato Clínico al Pedido Automático</h3>
    
    {/* Process Flow */}
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4 text-center bg-primary/5">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
          <CalendarClock className="h-6 w-6 text-primary" />
        </div>
        <h4 className="font-medium mb-1">1. Lectura Agenda</h4>
        <p className="text-xs text-muted-foreground">El sistema lee las citas programadas y tratamientos pendientes</p>
      </Card>
      <Card className="p-4 text-center bg-primary/5">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
          <Brain className="h-6 w-6 text-primary" />
        </div>
        <h4 className="font-medium mb-1">2. Cálculo IA</h4>
        <p className="text-xs text-muted-foreground">Predicción de necesidades basada en consumo histórico</p>
      </Card>
      <Card className="p-4 text-center bg-primary/5">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
          <Truck className="h-6 w-6 text-primary" />
        </div>
        <h4 className="font-medium mb-1">3. Envío Just-in-Time</h4>
        <p className="text-xs text-muted-foreground">Pedido federado enviado antes de empezar la semana</p>
      </Card>
    </div>

    {/* Network Status */}
    <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-medium">Nodo Federado #{clinicSavings.networkedClinics}</span>
            <Badge variant="secondary">CONECTADO</Badge>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Volumen Red: 2.4M EUR</p>
            <p className="font-bold text-primary">Ahorro Medio: 22.5%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

// Preview 11: Supply Demo
const SupplyDemoPreview = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Propuesta Pedido Automático - Semana 42</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3">Producto</th>
                <th className="text-center p-3">Stock Actual</th>
                <th className="text-center p-3">Mínimo</th>
                <th className="text-center p-3">Cantidad</th>
                <th className="text-right p-3">Precio Fed.</th>
              </tr>
            </thead>
            <tbody>
              {supplyAlerts.slice(0, 3).map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3 flex items-center gap-2">
                    {item.status === 'critical' && <Siren className="h-4 w-4 text-red-500" />}
                    {item.status === 'low' && <AlertTriangle className="h-4 w-4 text-amber-500" />}
                    {item.product}
                  </td>
                  <td className="text-center p-3">{item.currentStock}</td>
                  <td className="text-center p-3">{item.minStock}</td>
                  <td className="text-center p-3 font-medium">{item.minStock - item.currentStock + 10}</td>
                  <td className="text-right p-3 text-primary font-bold">19.50€</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>

    {/* Savings Card */}
    <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
            <Percent className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="font-medium text-green-800 dark:text-green-200">Ahorro Detectado en Este Pedido</p>
            <p className="text-sm text-green-600 dark:text-green-400">Comparado con compra individual</p>
          </div>
        </div>
        <div className="text-3xl font-bold text-green-600 dark:text-green-400">
          160€
        </div>
      </CardContent>
    </Card>
  </div>
);

// Preview 12: Product Passport
const ProductPassportPreview = () => (
  <div className="space-y-6 bg-slate-900 text-white p-6 rounded-lg">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <ShieldCheck className="h-8 w-8 text-green-400" />
        <div>
          <Badge className="bg-green-600 text-white mb-1">✓ VERIFICADO</Badge>
          <h3 className="font-bold text-lg">Microchip ISO 11784</h3>
        </div>
      </div>
      <QrCode className="h-16 w-16 text-white/20" />
    </div>

    {/* Product Info */}
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <p className="text-xs text-white/60">Referencia</p>
        <p className="font-medium">MC-134-ISO-2024</p>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-white/60">Lote</p>
        <p className="font-medium">#993821-X</p>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-white/60">Fabricante</p>
        <p className="font-medium">VetChip GmbH</p>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-white/60">Material</p>
        <p className="font-medium">Biopolímero ISO</p>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-white/60">Caducidad</p>
        <p className="font-medium">Octubre 2029</p>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-white/60">Temperatura</p>
        <p className="font-medium">15-25°C ✓</p>
      </div>
    </div>

    {/* Certificates */}
    <div className="flex gap-2">
      <Badge className="bg-blue-600">Certificado MDR</Badge>
      <Badge className="bg-purple-600">IFU PDF</Badge>
      <Badge variant="outline" className="border-amber-500 text-amber-400">Alerta Recall: Ninguna</Badge>
    </div>

    {/* Blockchain */}
    <div className="p-3 bg-white/10 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GitBranch className="h-5 w-5 text-green-400" />
          <span className="text-sm">Blockchain Hash</span>
        </div>
        <Badge className="bg-green-600">Bloque #882910</Badge>
      </div>
      <p className="font-mono text-xs text-white/60 mt-2">0xA3F2B8C9D1E5...7K2M9P</p>
    </div>
  </div>
);

// Preview 13: KPI Service
const KpiServicePreview = () => (
  <div className="space-y-6">
    {/* Toggle */}
    <div className="flex gap-2">
      <Badge className="bg-primary text-primary-foreground">Servicio</Badge>
      <Badge variant="outline">Médico</Badge>
    </div>

    {/* AI Alert */}
    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg">
      <div className="flex items-start gap-3">
        <Brain className="h-5 w-5 text-amber-600 mt-0.5" />
        <div>
          <p className="font-medium text-amber-800 dark:text-amber-200">Alerta Predictiva</p>
          <p className="text-sm text-amber-600 dark:text-amber-400">
            Se prevé un aumento del 20% en tiempos de espera los martes por la tarde. 
            Sugerencia: Reforzar recepción de 16:00 a 19:00.
          </p>
        </div>
      </div>
    </div>

    {/* Service KPIs */}
    <div className="grid grid-cols-4 gap-4">
      <Card className="p-4 border-l-4 border-l-green-500">
        <p className="text-sm text-muted-foreground mb-1">NPS Global</p>
        <p className="text-3xl font-bold">{serviceKPIs.npsGlobal}</p>
        <Badge variant="secondary" className="mt-2 text-green-600">+{serviceKPIs.npsTrend}%</Badge>
      </Card>
      <Card className="p-4 border-l-4 border-l-blue-500">
        <p className="text-sm text-muted-foreground mb-1">Tiempo Espera</p>
        <p className="text-3xl font-bold">{serviceKPIs.avgWaitTime}min</p>
      </Card>
      <Card className="p-4 border-l-4 border-l-purple-500">
        <p className="text-sm text-muted-foreground mb-1">Ocupación</p>
        <p className="text-3xl font-bold">{serviceKPIs.occupancyRate}%</p>
      </Card>
      <Card className="p-4 border-l-4 border-l-amber-500">
        <p className="text-sm text-muted-foreground mb-1">Reclamaciones</p>
        <p className="text-3xl font-bold">{serviceKPIs.complaintsMonth}/mes</p>
      </Card>
    </div>
  </div>
);

// Preview 14: KPI Medical
const KpiMedicalPreview = () => (
  <div className="space-y-6">
    {/* Toggle */}
    <div className="flex gap-2">
      <Badge variant="outline">Servicio</Badge>
      <Badge className="bg-primary text-primary-foreground">Médico</Badge>
    </div>

    {/* AI Alert */}
    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
      <div className="flex items-start gap-3">
        <Sparkles className="h-5 w-5 text-blue-600 mt-0.5" />
        <div>
          <p className="font-medium text-blue-800 dark:text-blue-200">Patrón Detectado</p>
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Incremento significativo en vacunaciones de rabia (+35% vs mes anterior). 
            Considerar stock preventivo.
          </p>
        </div>
      </div>
    </div>

    {/* Medical KPIs */}
    <div className="grid grid-cols-4 gap-4">
      <Card className="p-4 border-l-4 border-l-green-500">
        <p className="text-sm text-muted-foreground mb-1">Éxito Quirúrgico</p>
        <p className="text-3xl font-bold">98.5%</p>
      </Card>
      <Card className="p-4 border-l-4 border-l-blue-500">
        <p className="text-sm text-muted-foreground mb-1">Precisión Dx</p>
        <p className="text-3xl font-bold">94.2%</p>
      </Card>
      <Card className="p-4 border-l-4 border-l-purple-500">
        <p className="text-sm text-muted-foreground mb-1">Reingresos</p>
        <p className="text-3xl font-bold">2.1%</p>
      </Card>
      <Card className="p-4 border-l-4 border-l-amber-500">
        <p className="text-sm text-muted-foreground mb-1">Satisfacción</p>
        <p className="text-3xl font-bold">4.7/5</p>
      </Card>
    </div>
  </div>
);

// Preview 15: Insurance
const InsurancePreview = () => (
  <div className="space-y-6">
    <h3 className="font-semibold flex items-center gap-2">
      <Shield className="h-5 w-5 text-primary" />
      Auditoría en Vivo - Smart Claims
    </h3>

    {/* Split Screen */}
    <div className="grid grid-cols-2 gap-4">
      <Card className="p-4">
        <h4 className="font-medium mb-3 flex items-center gap-2">
          <ScrollText className="h-4 w-4" />
          Factura
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Castración felina</span>
            <span className="font-bold">280€</span>
          </div>
          <div className="flex justify-between">
            <span>Anestesia general</span>
            <span className="font-bold">85€</span>
          </div>
          <div className="flex justify-between">
            <span>Medicación post-op</span>
            <span className="font-bold">45€</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>410€</span>
          </div>
        </div>
        <Badge variant="secondary" className="mt-3">Pendiente validación</Badge>
      </Card>

      <Card className="p-4">
        <h4 className="font-medium mb-3 flex items-center gap-2">
          <FileCheck className="h-4 w-4" />
          Evidencia Blockchain
        </h4>
        <div className="space-y-3">
          <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm">Radiografía preoperatoria</span>
          </div>
          <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm">Consentimiento firmado</span>
          </div>
          <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm">Registro quirúrgico</span>
          </div>
          <p className="text-xs text-muted-foreground font-mono">Hash: 0xA3F2...9K2M</p>
        </div>
      </Card>
    </div>

    {/* Validation Result */}
    <Card className="bg-green-50 dark:bg-green-950/20 border-green-500 p-4">
      <div className="flex items-center justify-center gap-3">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="font-bold text-green-800 dark:text-green-200">CONTRATO VALIDADO</p>
          <p className="text-sm text-green-600 dark:text-green-400">Procesado en 0.5 segundos</p>
        </div>
      </div>
    </Card>

    {/* Fraud Alert */}
    <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900 p-4">
      <div className="flex items-start gap-3">
        <Siren className="h-5 w-5 text-red-600 mt-0.5" />
        <div>
          <p className="font-medium text-red-800 dark:text-red-200">Alerta de Anomalía Estadística</p>
          <p className="text-sm text-red-600 dark:text-red-400">
            Clínica XYZ presenta desviación del 40% en facturación media de castraciones.
            <Button variant="link" className="text-red-600 p-0 h-auto ml-1">Iniciar auditoría →</Button>
          </p>
        </div>
      </div>
    </Card>
  </div>
);

// Preview 16: Epidemiology
const EpidemiologyPreview = () => (
  <div className="space-y-6">
    <h3 className="font-semibold flex items-center gap-2">
      <Globe className="h-5 w-5 text-primary" />
      Alertas One Health - Vigilancia Epidemiológica
    </h3>

    {/* Alerts */}
    <div className="space-y-3">
      {epidemiologicalAlerts.map((alert, i) => (
        <Card key={i} className={`p-4 border-l-4 ${
          alert.severity === 'high' ? 'border-l-red-500 bg-red-50 dark:bg-red-950/20' :
          'border-l-amber-500 bg-amber-50 dark:bg-amber-950/20'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Thermometer className={`h-5 w-5 ${alert.severity === 'high' ? 'text-red-600' : 'text-amber-600'}`} />
              <div>
                <p className="font-medium">{alert.disease}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {alert.region}
                </p>
              </div>
            </div>
            <div className="text-right">
              <Badge 
                variant={
                  alert.trend === 'rising' ? 'destructive' :
                  alert.trend === 'declining' ? 'default' : 'secondary'
                }
              >
                {alert.trend === 'rising' ? '↑ SUBIENDO' :
                 alert.trend === 'declining' ? '↓ BAJANDO' : '→ ESTABLE'}
              </Badge>
              <p className="text-sm mt-1">
                <span className="font-bold">{alert.incidenceRate}</span>/10k
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>

    {/* Map placeholder */}
    <Card className="p-4">
      <div className="h-40 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <Globe className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">Mapa de Incidencia Regional</p>
          <p className="text-xs text-muted-foreground">6 regiones monitorizadas</p>
        </div>
      </div>
    </Card>
  </div>
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

      {/* ===== SECTION 1: HERO ===== */}
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

        <ExplanationBox
          icon={<Network className="h-6 w-6" />}
          title="Visión del Ecosistema"
          description="El Espacio de Datos de Salud Animal conecta a todos los actores del ecosistema veterinario en una red federada donde los datos fluyen de forma segura, soberana e interoperable."
          bullets={[
            "Red de más de 500 clínicas veterinarias conectadas",
            "Más de 2 millones de historiales clínicos federados",
            "Arquitectura Gaia-X compliant para soberanía europea",
            "Cumplimiento RGPD y estándares FHIR R4 de salud"
          ]}
          highlight="Primera red de datos de salud animal en España bajo principios de espacios de datos europeos"
        />
      </Section>

      {/* ===== SECTION 2: EL PROBLEMA ===== */}
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

        <ExplanationBox
          icon={<AlertTriangle className="h-6 w-6" />}
          title="Por Qué los Datos Están Fragmentados"
          description="La industria veterinaria ha crecido con software propietario que no se comunica entre sí. Cada proveedor de gestión crea silos de información que impiden el flujo de datos clínicos."
          bullets={[
            "Más de 40 proveedores de software veterinario solo en España",
            "Cero estándares de interoperabilidad adoptados en el sector",
            "Dependencia del tutor para transmitir información verbal entre clínicas",
            "Pérdida de información crítica en emergencias y derivaciones"
          ]}
          highlight="El coste de la fragmentación: cada mascota realiza de media 2.3 analíticas duplicadas al año por falta de acceso a resultados previos"
        />
      </Section>

      {/* ===== SECTION 3: LA VISIÓN ===== */}
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

        <ExplanationBox
          icon={<Network className="h-6 w-6" />}
          title="Cómo Funciona la Federación"
          description="A diferencia de modelos centralizados donde los datos se copian a un servidor central, la federación permite que los datos permanezcan en su origen mientras se comparten de forma controlada."
          bullets={[
            "Los datos nunca salen de la clínica sin autorización explícita",
            "Contratos de uso (ODRL) definen exactamente qué se puede hacer con cada dato",
            "El consentimiento del tutor viaja con el dato en tiempo real",
            "Auditoría completa de quién accedió a qué y cuándo"
          ]}
          highlight="Modelo Gaia-X: La federación sigue los principios europeos de espacios de datos soberanos"
        />
      </Section>

      {/* ===== SECTION 4: PANEL TUTOR - WALLET ===== */}
      <Section id="plataforma" className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Plataforma en Acción</SectionLabel>
          <SectionTitle>Panel del Tutor de Mascotas</SectionTitle>
          <SectionSubtitle className="mx-auto">
            El tutor accede a toda la información de salud de su mascota desde una wallet digital segura
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/demo/tutor" title="Panel del Tutor">
          <TutorWalletPreview />
        </PreviewFrame>
        
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

        <ExplanationBox
          icon={<Wallet className="h-6 w-6" />}
          title="La Wallet de Salud como Hub Central"
          description="El tutor accede a toda la información de salud de sus mascotas desde una única interfaz. La wallet actúa como un 'pasaporte de salud' que viaja con la mascota independientemente de la clínica."
          bullets={[
            "Historial completo de vacunas, analíticas y tratamientos en tiempo real",
            "Control total sobre quién accede a los datos de su mascota",
            "Sistema de recompensas por compartir datos anonimizados para investigación",
            "Alertas proactivas de vacunas y revisiones pendientes"
          ]}
          highlight="El tutor es el verdadero propietario de los datos, no la clínica"
        />
      </Section>

      {/* ===== SECTION 5: PANEL TUTOR - PRIVACIDAD ===== */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>Control de Datos</SectionLabel>
          <SectionTitle>Privacidad y Consentimiento ODRL</SectionTitle>
          <SectionSubtitle className="mx-auto">
            El tutor controla cada acceso a los datos con precisión granular usando estándares W3C
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/demo/tutor" title="Panel de Privacidad">
          <TutorPrivacyPreview />
        </PreviewFrame>

        <ExplanationBox
          icon={<Shield className="h-6 w-6" />}
          title="Modelo ODRL de Consentimiento Granular"
          description="El sistema implementa el estándar ODRL (Open Digital Rights Language) de la W3C para gestionar permisos de acceso a datos con precisión quirúrgica."
          bullets={[
            "Tres niveles de acceso: completo, limitado, solo lectura",
            "Revocación instantánea de permisos con un click",
            "Tokens de datos como compensación por compartir información",
            "Trazabilidad completa de quién accedió a qué y cuándo"
          ]}
          highlight="Cada dato compartido genera valor económico para el tutor"
        />
      </Section>

      {/* ===== SECTION 6: COCKPIT VETERINARIO ===== */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Para Veterinarios</SectionLabel>
          <SectionTitle>Cockpit Clínico Veterinario</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Acceso al historial federado del paciente con diagnóstico asistido por IA
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/portal/doctor" title="Cockpit Veterinario">
          <VetCockpitPreview />
        </PreviewFrame>
        
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

        <ExplanationBox
          icon={<Stethoscope className="h-6 w-6" />}
          title="El Flujo de Trabajo Clínico Optimizado"
          description="El veterinario accede al historial federado del paciente con sugerencias de diagnóstico basadas en millones de casos similares. El copiloto AI reduce el tiempo de decisión clínica."
          bullets={[
            "Acceso a registros de otras clínicas autorizadas por el tutor",
            "Sugerencias diagnósticas con nivel de confianza (ej: 87% displasia)",
            "Visualización temporal de la evolución del paciente",
            "Integración directa con resultados de laboratorio"
          ]}
          highlight="El AI Copilot ha demostrado un 89.3% de precisión histórica"
        />
      </Section>

      {/* ===== SECTION 7: PANEL VETERINARIO JORNADA ===== */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>Jornada Diaria</SectionLabel>
          <SectionTitle>Carga de Trabajo y Hospitalizados</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Visión completa de la jornada con alertas de medicación y pacientes críticos
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/demo/vet" title="Panel Jornada Veterinario">
          <VetWorkloadPreview />
        </PreviewFrame>

        <ExplanationBox
          icon={<Activity className="h-6 w-6" />}
          title="Optimización del Día a Día"
          description="El panel de jornada ofrece una visión unificada de todas las responsabilidades del veterinario: desde citas programadas hasta pacientes hospitalizados que requieren medicación."
          bullets={[
            "Visualización de carga de trabajo histórica para identificar patrones",
            "Alertas de medicación próxima para pacientes hospitalizados",
            "Código de colores para estado de pacientes (crítico/estable/recuperando)",
            "Integración con agenda y sistemas de hospitalización"
          ]}
          highlight="Reducción del 25% en olvidos de medicación gracias a alertas proactivas"
        />
      </Section>

      {/* ===== SECTION 8: PANEL DIRECTOR - SERVICIO ===== */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Para Directores</SectionLabel>
          <SectionTitle>Panel de Dirección - Excelencia de Servicio</SectionTitle>
          <SectionSubtitle className="mx-auto">
            KPIs de satisfacción, tiempos de espera y ocupación en tiempo real
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/demo/clinic" title="Panel Director - Servicio">
          <ClinicServicePreview />
        </PreviewFrame>

        <ExplanationBox
          icon={<Target className="h-6 w-6" />}
          title="Excelencia de Servicio"
          description="El director tiene visión 360 grados de la experiencia del cliente: desde el NPS hasta los tiempos de espera y la ocupación de gabinetes."
          bullets={[
            "NPS en tiempo real alimentado por la App del Tutor",
            "Heatmap de ocupación para optimizar agendas",
            "Alertas predictivas de saturación basadas en patrones históricos",
            "Detección temprana de cuellos de botella"
          ]}
          highlight="Las clínicas que optimizan su ocupación aumentan su rentabilidad en un 18%"
        />
      </Section>

      {/* ===== SECTION 9: PANEL DIRECTOR - FINANZAS ===== */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>Control Financiero</SectionLabel>
          <SectionTitle>Revenue, Márgenes y Objetivos</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Seguimiento de facturación vs objetivos con desglose por servicio
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/demo/clinic" title="Panel Director - Finanzas">
          <ClinicFinancePreview />
        </PreviewFrame>

        <ExplanationBox
          icon={<Euro className="h-6 w-6" />}
          title="Control Financiero en Tiempo Real"
          description="Visibilidad completa de la salud financiera de la clínica con comparativa contra objetivos y evolución temporal."
          bullets={[
            "Facturación MTD con comparativa vs objetivo",
            "Margen operativo por tipo de servicio",
            "Coste por consulta y revenue por veterinario",
            "Proyecciones de cierre de mes basadas en tendencia"
          ]}
          highlight="Las clínicas de la red mejoran su margen operativo en 2.3 puntos de media"
        />
      </Section>

      {/* ===== SECTION 10: PANEL DIRECTOR - BENCHMARKING ===== */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Posicionamiento</SectionLabel>
          <SectionTitle>Benchmarking con la Red Federada</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Compara tu rendimiento con el promedio anonimizado del sector
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/demo/clinic" title="Panel Director - Benchmark">
          <ClinicBenchmarkPreview />
        </PreviewFrame>

        <ExplanationBox
          icon={<BarChart3 className="h-6 w-6" />}
          title="Posicionamiento Sectorial"
          description="Gracias a la red federada, cada clínica puede compararse con el promedio del sector sin comprometer la confidencialidad de nadie."
          bullets={[
            "Comparativa de NPS, tiempos de espera, éxito quirúrgico",
            "Percentil de posicionamiento en cada métrica",
            "Identificación de áreas de mejora vs la media del sector",
            "Benchmarking por tamaño de clínica y especialidad"
          ]}
          highlight="El benchmarking federado es completamente anónimo y agregado"
        />
      </Section>

      {/* ===== SECTION 11: MARKETPLACE RESEARCH ===== */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>Para Investigadores</SectionLabel>
          <SectionTitle>Marketplace de Datos de Investigación</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Acceso a datasets anonimizados y algoritmos de IA veterinaria
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/portal/research" title="Marketplace Research">
          <ResearchMarketplacePreview />
        </PreviewFrame>
        
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

        <ExplanationBox
          icon={<Microscope className="h-6 w-6" />}
          title="La Economía de Datos en Acción"
          description="Los investigadores acceden a datasets anonimizados y pueden entrenar modelos de IA sin que los datos salgan de su origen (Federated Learning)."
          bullets={[
            "Datasets categorizados por especialidad veterinaria",
            "Modelo de revenue sharing con clínicas contribuyentes",
            "Publicaciones científicas vinculadas a datasets utilizados",
            "Cumplimiento total RGPD y ética de investigación"
          ]}
          highlight="El modelo de revenue sharing ha generado más de 450.000€ para clínicas contribuyentes"
        />
      </Section>

      {/* ===== SECTION 12: PANEL INVESTIGADOR ===== */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Federated Learning</SectionLabel>
          <SectionTitle>Entrenamiento Distribuido de Modelos IA</SectionTitle>
          <SectionSubtitle className="mx-auto">
            La IA va a los datos, no los datos a la IA. Privacidad preservada.
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/demo/research" title="Panel Investigador FL">
          <ResearchFLPreview />
        </PreviewFrame>

        <ExplanationBox
          icon={<BrainCircuit className="h-6 w-6" />}
          title="Federated Learning Explicado"
          description="En lugar de centralizar datos sensibles, el modelo de IA viaja a cada nodo de la red, aprende localmente, y solo comparte los gradientes (nunca los datos originales)."
          bullets={[
            "Entrenamiento distribuido en 23+ nodos sin mover datos",
            "Agregación segura de gradientes con differential privacy",
            "Modelos que mejoran continuamente con nuevos datos",
            "Publicaciones científicas basadas en modelos federados"
          ]}
          highlight="El modelo de Displasia Canina v3 entrena con 23 nodos sin mover un solo registro"
        />
      </Section>

      {/* ===== SECTION 13: CENTRAL COMPRAS - FLUJO ===== */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>Para Compras</SectionLabel>
          <SectionTitle>Central de Compras Predictiva</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Del dato clínico al pedido automático: predicción IA y compras federadas
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/portal/supply" title="Central Compras - Flujo">
          <SupplyFlowPreview />
        </PreviewFrame>

        <ExplanationBox
          icon={<ShoppingCart className="h-6 w-6" />}
          title="Compras Predictivas Federadas"
          description="El sistema lee la agenda clínica, predice necesidades de material y agrupa pedidos con cientos de clínicas para conseguir precios de mayorista."
          bullets={[
            "Lectura automática de la agenda clínica",
            "Predicción de consumo basada en historial y citas futuras",
            "Agrupación federada con 500+ clínicas para mejores precios",
            "Envío just-in-time antes de que empiece la semana"
          ]}
          highlight="Ahorro medio detectado: 22.5% en vacunas y biológicos"
        />
      </Section>

      {/* ===== SECTION 14: CENTRAL COMPRAS - DEMO ===== */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Demo Interactivo</SectionLabel>
          <SectionTitle>Pedido Automático Semanal</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Visualización del ahorro federado vs compra individual
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/portal/supply" title="Central Compras - Demo">
          <SupplyDemoPreview />
        </PreviewFrame>

        <ExplanationBox
          icon={<Percent className="h-6 w-6" />}
          title="ROI de Compras Federadas"
          description="Cada semana, el sistema genera propuestas de pedido basadas en la agenda y el consumo histórico, comparando el precio federado vs el precio individual."
          bullets={[
            "Propuesta semanal automática basada en agenda",
            "Comparativa de precios federados vs individuales",
            "Alertas de stock crítico antes de que sea emergencia",
            "Histórico de ahorro acumulado por clínica"
          ]}
          highlight="Las clínicas de la red ahorran una media de 4.250€ anuales en compras"
        />
      </Section>

      {/* ===== SECTION 15: PASAPORTE DIGITAL ===== */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>Trazabilidad</SectionLabel>
          <SectionTitle>Pasaporte Digital de Producto (DPP)</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Trazabilidad inmutable desde fábrica hasta dispensación con blockchain
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/solutions/product-passport" title="Pasaporte Digital">
          <ProductPassportPreview />
        </PreviewFrame>
        
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <FeatureCard 
            icon={<Package className="h-8 w-8" />}
            title="DPP Europeo"
            description="Cumplimiento de regulación UE de trazabilidad"
          />
          <FeatureCard 
            icon={<QrCode className="h-8 w-8" />}
            title="Verificación QR"
            description="Comprobación instantánea de autenticidad"
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

        <ExplanationBox
          icon={<Package className="h-6 w-6" />}
          title="Trazabilidad Inmutable desde Fábrica"
          description="Cada producto veterinario (vacuna, microchip, medicamento) tiene un identificador único vinculado a su 'gemelo digital' en blockchain."
          bullets={[
            "Verificación de autenticidad antes de abrir el envase",
            "Documentación legal y certificados MDR accesibles por QR",
            "Alertas de recalls automáticas por lote",
            "Hash blockchain que garantiza inmutabilidad"
          ]}
          highlight="El pasaporte digital cumple con la normativa MDR 2017/745 de la UE"
        />
      </Section>

      {/* ===== SECTION 16: DASHBOARD KPIs - SERVICIO ===== */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Analytics</SectionLabel>
          <SectionTitle>Dashboard de KPIs - Excelencia de Servicio</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Métricas de satisfacción, tiempos y reclamaciones con alertas predictivas
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/portal/kpi" title="Dashboard KPIs - Servicio">
          <KpiServicePreview />
        </PreviewFrame>

        <ExplanationBox
          icon={<BarChart3 className="h-6 w-6" />}
          title="Métricas de Satisfacción"
          description="El sistema de KPIs combina la voz del tutor (NPS) con métricas operativas para ofrecer una visión completa de la excelencia de servicio."
          bullets={[
            "NPS en tiempo real con feedback de la App del Tutor",
            "Tiempos de espera monitorizados y alertas de saturación",
            "Tasa de ocupación y gestión de reclamaciones",
            "Alertas predictivas basadas en patrones históricos"
          ]}
          highlight="Se prevé un aumento del 20% en tiempos de espera los martes por la tarde"
        />
      </Section>

      {/* ===== SECTION 17: DASHBOARD KPIs - MÉDICO ===== */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>Excelencia Clínica</SectionLabel>
          <SectionTitle>Dashboard de KPIs - Resultados Médicos</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Métricas de calidad clínica: éxito quirúrgico, diagnósticos y reingresos
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/portal/kpi" title="Dashboard KPIs - Médico">
          <KpiMedicalPreview />
        </PreviewFrame>

        <ExplanationBox
          icon={<Heart className="h-6 w-6" />}
          title="Excelencia Clínica"
          description="Las métricas médicas permiten medir y mejorar continuamente los resultados clínicos, desde tasas de éxito quirúrgico hasta precisión diagnóstica."
          bullets={[
            "Tasa de éxito quirúrgico por tipo de intervención",
            "Precisión diagnóstica comparada con resultados finales",
            "Tasa de reingresos a 30 días",
            "Satisfacción del tutor post-tratamiento"
          ]}
          highlight="Las clínicas que monitorizan KPIs médicos mejoran sus outcomes en un 15%"
        />
      </Section>

      {/* ===== SECTION 18: PORTAL ASEGURADORAS ===== */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Para Aseguradoras</SectionLabel>
          <SectionTitle>Portal de Smart Claims</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Validación automática de reclamaciones contra evidencia blockchain
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/portal/insurance" title="Portal Aseguradoras">
          <InsurancePreview />
        </PreviewFrame>

        <ExplanationBox
          icon={<Shield className="h-6 w-6" />}
          title="Smart Claims Automation"
          description="Las reclamaciones de seguros se validan automáticamente contra evidencia blockchain, eliminando el fraude y acelerando los pagos."
          bullets={[
            "Validación automática contra documentación clínica",
            "Detección de anomalías estadísticas por clínica",
            "Contratos inteligentes ejecutados en 0.5 segundos",
            "Auditoría profunda con un click"
          ]}
          highlight="Desviación del 40% detectada en clínica X - iniciar auditoría"
        />
      </Section>

      {/* ===== SECTION 19: EPIDEMIOLOGÍA ===== */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>One Health</SectionLabel>
          <SectionTitle>Vigilancia Epidemiológica en Tiempo Real</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Alertas de enfermedades emergentes agregando datos de toda la red
          </SectionSubtitle>
        </div>
        
        <PreviewFrame route="/epidemiology" title="Epidemiología One Health">
          <EpidemiologyPreview />
        </PreviewFrame>

        <ExplanationBox
          icon={<Globe className="h-6 w-6" />}
          title="Vigilancia Sanitaria en Tiempo Real"
          description="El sistema detecta patrones epidemiológicos agregando datos anonimizados de toda la red. Enfoque One Health que conecta salud animal y humana."
          bullets={[
            "Alertas por región y nivel de severidad",
            "Tendencias: subiendo, estable, bajando",
            "Incidencia por 10.000 animales",
            "Correlación con datos de salud pública"
          ]}
          highlight="Leishmaniasis en Madrid: incidencia 12.5/10k y subiendo"
        />
      </Section>

      {/* ===== SECTION 20: TECNOLOGÍA FHIR ===== */}
      <Section id="tecnologia" className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Tecnología</SectionLabel>
          <SectionTitle>Interoperabilidad FHIR y Estándares</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Arquitectura basada en estándares internacionales de salud
          </SectionSubtitle>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">FHIR R4</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Estándar HL7 FHIR para interoperabilidad de datos de salud a nivel internacional.
            </p>
            <Badge variant="outline">HL7 Certified</Badge>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <ScrollText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Contratos ODRL</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Políticas de uso de datos machine-readable para automatizar permisos.
            </p>
            <Badge variant="outline">W3C Standard</Badge>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">DID / SSI</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Identidad descentralizada y credenciales verificables para autenticación segura.
            </p>
            <Badge variant="outline">eIDAS Compliant</Badge>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Federated Learning</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Entrenamiento de modelos sin mover datos: la IA va a los datos.
            </p>
            <Badge variant="outline">Privacy-Preserving</Badge>
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
            <Badge variant="outline">Zero Trust</Badge>
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
            <Badge variant="outline">Real-Time</Badge>
          </Card>
        </div>

        <ExplanationBox
          icon={<Layers className="h-6 w-6" />}
          title="Stack Tecnológico de Interoperabilidad"
          description="El espacio de datos utiliza estándares internacionales probados para garantizar que los datos fluyan de forma segura entre todos los actores."
          bullets={[
            "FHIR R4 como lingua franca de datos de salud",
            "ODRL para contratos de uso machine-readable",
            "DIDs y Verifiable Credentials para identidad",
            "Row Level Security para aislamiento de datos"
          ]}
          highlight="100% compatible con regulación europea de espacios de datos"
        />
      </Section>

      {/* ===== SECTION 21: ARQUITECTURA GAIA-X ===== */}
      <Section>
        <div className="text-center mb-12">
          <SectionLabel>Arquitectura</SectionLabel>
          <SectionTitle>Fundamentos Gaia-X / IDS</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Soberanía de datos siguiendo principios europeos de espacios de datos
          </SectionSubtitle>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Data Space Connector</h4>
                <p className="text-sm text-muted-foreground">
                  Componente IDS que gestiona el intercambio soberano de datos entre participantes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Trust Anchor</h4>
                <p className="text-sm text-muted-foreground">
                  Servicio centralizado de confianza para verificar identidades y credenciales.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Clearing House</h4>
                <p className="text-sm text-muted-foreground">
                  Registro inmutable de todas las transacciones de datos para auditoría.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <CircleDot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Vocabulary Hub</h4>
                <p className="text-sm text-muted-foreground">
                  Repositorio semántico compartido para garantizar interoperabilidad.
                </p>
              </div>
            </div>
          </div>
          
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="text-center">
              <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Gaia-X Compliant</h3>
              <p className="text-muted-foreground mb-4">
                Arquitectura alineada con los principios europeos de espacios de datos soberanos.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge>Soberanía</Badge>
                <Badge>Interoperabilidad</Badge>
                <Badge>Portabilidad</Badge>
                <Badge>Confianza</Badge>
              </div>
            </div>
          </Card>
        </div>

        <ExplanationBox
          icon={<Globe className="h-6 w-6" />}
          title="Principios Gaia-X de Soberanía de Datos"
          description="La arquitectura sigue los cuatro pilares de Gaia-X para espacios de datos europeos: soberanía, interoperabilidad, confianza y portabilidad."
          bullets={[
            "Soberanía: El propietario de los datos siempre mantiene el control",
            "Interoperabilidad: Estándares abiertos para comunicación entre sistemas",
            "Confianza: Identidades verificables y auditoría completa",
            "Portabilidad: Los datos pueden moverse entre proveedores sin lock-in"
          ]}
          highlight="Primer espacio de datos veterinario certificado Gaia-X en España"
        />
      </Section>

      {/* ===== SECTION 22: KIT ESPACIO DE DATOS ===== */}
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
                <span>Cubierto 100% por fondos europeos Next Generation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Implementación guiada por expertos certificados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Sin coste inicial para la clínica</span>
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
            <MetricCard value="3 meses" label="Implementación" icon={<Clock className="h-6 w-6" />} />
          </div>
        </div>

        <ExplanationBox
          icon={<Euro className="h-6 w-6" />}
          title="Financiación Red.es hasta 30.000€"
          description="El programa Kit Espacio de Datos financia hasta el 100% de la integración en la red federada para clínicas veterinarias elegibles."
          bullets={[
            "Subvención de 15.000 a 30.000€ según número de empleados",
            "Financiación europea a través de Red.es (fondos Next Generation)",
            "Sin coste inicial para la clínica participante",
            "Implementación completa en 3 meses por agente digitalizador"
          ]}
          highlight="Clínicas de 10-49 empleados: hasta 20.000€ de subvención"
        />
      </Section>

      {/* ===== SECTION 23: PERFILES PARTNERS ===== */}
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
            <Pill className="h-10 w-10 text-primary mb-4" />
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

        <ExplanationBox
          icon={<Handshake className="h-6 w-6" />}
          title="8 Tipos de Socios del Ecosistema"
          description="El espacio de datos veterinario integra a todos los actores de la cadena de valor, cada uno con su propuesta de valor diferenciada."
          bullets={[
            "Clínicas: Eficiencia operativa, nuevos ingresos por datos y benchmarking",
            "Laboratorios: Integración automática de resultados y trazabilidad",
            "Farmacéuticas: Trazabilidad DPP y farmacovigilancia real-world",
            "Aseguradoras: Smart Claims y detección de fraude automatizada"
          ]}
          highlight="Cada actor del ecosistema captura valor de forma justa y transparente"
        />
      </Section>

      {/* ===== SECTION 24: MÉTRICAS ROI ===== */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <SectionLabel>Impacto</SectionLabel>
          <SectionTitle>ROI Cuantificable para Todos los Actores</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Beneficios medibles desde el primer año de implementación
          </SectionSubtitle>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <MetricCard value="22.5%" label="Ahorro medio en compras federadas" icon={<Percent className="h-6 w-6" />} />
          <MetricCard value="30%" label="Reducción de pruebas duplicadas" icon={<FlaskConical className="h-6 w-6" />} />
          <MetricCard value="15%" label="Mejora en outcomes clínicos" icon={<Heart className="h-6 w-6" />} />
          <MetricCard value="40%" label="Detección de anomalías de fraude" icon={<Shield className="h-6 w-6" />} />
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Euro className="h-5 w-5 text-primary" />
              Para Clínicas
            </h3>
            <p className="text-sm text-muted-foreground">
              Ahorro de 4.250€/año en compras + nuevos ingresos por compartir datos anonimizados
            </p>
          </Card>
          
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Microscope className="h-5 w-5 text-primary" />
              Para Investigación
            </h3>
            <p className="text-sm text-muted-foreground">
              Acceso a datasets de calidad sin mover datos + modelos FL pre-entrenados
            </p>
          </Card>
          
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Para Aseguradoras
            </h3>
            <p className="text-sm text-muted-foreground">
              Reducción del 40% en fraude + Smart Claims procesados en 0.5 segundos
            </p>
          </Card>
        </div>

        <ExplanationBox
          icon={<TrendingUp className="h-6 w-6" />}
          title="Retorno de Inversión Cuantificable"
          description="Cada actor del ecosistema obtiene beneficios medibles desde el primer año de participación en el espacio de datos."
          bullets={[
            "22.5% ahorro medio en compras federadas por volumen agregado",
            "30% reducción de pruebas duplicadas por acceso a historiales",
            "15% mejora en outcomes clínicos por IA diagnóstica",
            "40% detección de anomalías estadísticas en reclamaciones"
          ]}
          highlight="Payback de la inversión en menos de 12 meses para clínicas típicas"
        />
      </Section>

      {/* ===== SECTION 25: CTA FINAL ===== */}
      <Section id="contacto">
        <div className="max-w-2xl mx-auto text-center">
          <SectionLabel>Únete al Ecosistema</SectionLabel>
          <SectionTitle>Transforma tu Clínica con Datos Federados</SectionTitle>
          <SectionSubtitle className="mx-auto">
            Solicita una demo personalizada y descubre cómo el espacio de datos puede transformar tu operación veterinaria
          </SectionSubtitle>
          
          <Card className="p-8 mt-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="text-sm font-medium mb-2 block">Nombre</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg bg-background" placeholder="Tu nombre" />
                </div>
                <div className="text-left">
                  <label className="text-sm font-medium mb-2 block">Clínica</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg bg-background" placeholder="Nombre de tu clínica" />
                </div>
              </div>
              <div className="text-left">
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg bg-background" placeholder="tu@email.com" />
              </div>
              <div className="text-left">
                <label className="text-sm font-medium mb-2 block">¿Qué te interesa más?</label>
                <select className="w-full px-4 py-2 border rounded-lg bg-background">
                  <option>Historiales federados</option>
                  <option>Compras predictivas</option>
                  <option>IA diagnóstica</option>
                  <option>Kit Espacio de Datos (subvención)</option>
                  <option>Otro</option>
                </select>
              </div>
              <Button size="lg" className="w-full">
                Solicitar Demo Gratuita <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground">
                Al enviar este formulario, aceptas nuestra política de privacidad. 
                No compartiremos tus datos con terceros.
              </p>
            </div>
          </Card>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Demo gratuita sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Implementación en 3 meses</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Subvención hasta 30.000€</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <span className="font-bold">Espacio de Datos</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Conectando el ecosistema de salud animal con datos federados y soberanos.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/demo/tutor" className="hover:text-primary">Panel Tutor</Link></li>
                <li><Link to="/portal/doctor" className="hover:text-primary">Cockpit Veterinario</Link></li>
                <li><Link to="/demo/clinic" className="hover:text-primary">Panel Director</Link></li>
                <li><Link to="/portal/research" className="hover:text-primary">Research Marketplace</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tecnología</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/tech/fhir" className="hover:text-primary">FHIR R4</Link></li>
                <li><Link to="/tech/contracts" className="hover:text-primary">Contratos ODRL</Link></li>
                <li><Link to="/tech/federated" className="hover:text-primary">Federated Learning</Link></li>
                <li><Link to="/tech/identity" className="hover:text-primary">Identidad Digital</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/legal-notice" className="hover:text-primary">Aviso Legal</Link></li>
                <li><Link to="/legal-notice" className="hover:text-primary">Política de Privacidad</Link></li>
                <li><Link to="/legal-notice" className="hover:text-primary">Términos de Uso</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Espacio de Datos de Salud Animal. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlatformShowcase;
