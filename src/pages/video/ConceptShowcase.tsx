import React, { useState } from 'react';
import { 
  Calendar, Bell, Server, CreditCard, Activity, Users, Clock, 
  CheckCircle2, AlertTriangle, Wifi, Database, Shield, Star,
  FileText, Eye, Smartphone, MapPin, Package, Factory, Truck,
  Building2, User, BadgeCheck, Search, Filter, Download, Lock,
  TrendingUp, TrendingDown, BarChart3, PieChart, Target, Zap,
  ChevronRight, MoreHorizontal, Plus, Settings, ArrowUpRight,
  Stethoscope, Receipt, CreditCard as CardIcon, Heart, CircleDot
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart as RechartsPie, Pie, Cell, Area, AreaChart
} from 'recharts';

// ============================================
// UI 1: Dashboard de la Clínica ("The Hub")
// ============================================
const ClinicDashboard = () => {
  const appointments = [
    { time: '09:00', patient: 'María García', treatment: 'Limpieza dental', status: 'confirmed' },
    { time: '10:30', patient: 'Carlos López', treatment: 'Revisión ortodoncia', status: 'confirmed' },
    { time: '11:45', patient: 'Ana Martínez', treatment: 'Implante fase 2', status: 'pending' },
    { time: '14:00', patient: 'Pedro Sánchez', treatment: 'Extracción molar', status: 'confirmed' },
    { time: '15:30', patient: 'Laura Torres', treatment: 'Blanqueamiento', status: 'confirmed' },
    { time: '17:00', patient: 'Miguel Ruiz', treatment: 'Endodoncia', status: 'pending' },
  ];

  const billingData = [
    { day: 'Lun', amount: 2400 },
    { day: 'Mar', amount: 1800 },
    { day: 'Mié', amount: 3200 },
    { day: 'Jue', amount: 2800 },
    { day: 'Vie', amount: 4100 },
  ];

  return (
    <div className="bg-slate-50 p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Centro de Mando Clínico</h2>
          <p className="text-slate-500">Clínica Dental Norte · Miércoles, 15 Enero 2025</p>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-emerald-100 text-emerald-700 border-0">
            <Wifi className="w-3 h-3 mr-1" /> Online
          </Badge>
          <Badge className="bg-blue-100 text-blue-700 border-0">
            <Shield className="w-3 h-3 mr-1" /> Federado
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Agenda Central */}
        <div className="col-span-7">
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Agenda del Día
                </CardTitle>
                <Badge variant="outline">6 citas</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {appointments.map((apt, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="text-sm font-mono text-slate-600 w-12">{apt.time}</div>
                    <div className={`w-1 h-10 rounded-full ${apt.status === 'confirmed' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">{apt.patient}</p>
                      <p className="text-sm text-slate-500">{apt.treatment}</p>
                    </div>
                    <Badge variant={apt.status === 'confirmed' ? 'default' : 'secondary'} className="text-xs">
                      {apt.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                    </Badge>
                    <Button variant="ghost" size="sm"><MoreHorizontal className="w-4 h-4" /></Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Panel Lateral */}
        <div className="col-span-5 space-y-4">
          {/* Conexiones */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Conexiones Activas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium">ERP Conectado</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium">CRM Sincronizado</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-blue-50">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium">Espacio Federado</span>
                </div>
                <Badge className="bg-blue-600 text-white text-xs">Activo</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Facturación en Tiempo Real */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-600">Facturación Semanal</CardTitle>
                <span className="text-lg font-bold text-emerald-600">€14,300</span>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={billingData}>
                  <Bar dataKey="amount" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Estado Servidores */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Estado del Sistema</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Servidor Local</span>
                  <span className="text-emerald-600 font-medium">98% uptime</span>
                </div>
                <Progress value={98} className="h-2" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Almacenamiento</span>
                  <span className="text-blue-600 font-medium">45% usado</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-slate-100">
                <Server className="w-4 h-4 text-slate-500" />
                <span className="text-xs text-slate-600">Última sincronización: hace 2 min</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// ============================================
// UI 2: App del Paciente ("Patient Wallet")
// ============================================
const PatientWalletMobile = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl">
      {/* Phone Frame */}
      <div className="relative">
        {/* Phone Border */}
        <div className="w-[320px] h-[640px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Phone Screen */}
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-10" />
            
            {/* Status Bar */}
            <div className="h-10 bg-blue-600 flex items-center justify-between px-6 pt-2">
              <span className="text-white text-xs">9:41</span>
              <div className="flex gap-1">
                <Wifi className="w-3 h-3 text-white" />
                <Activity className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* Header */}
            <div className="bg-blue-600 px-5 pb-6 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-xs">Bienvenida</p>
                  <p className="text-white font-semibold">Ana García López</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 -mt-4 space-y-4 pb-20">
              {/* Próxima Cita Card */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-blue-600">PRÓXIMA CITA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">Revisión Ortodoncia</p>
                      <p className="text-sm text-slate-500">Dr. Martínez · Sillón 3</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className="bg-blue-100 text-blue-700 text-xs">Mañana</Badge>
                        <span className="text-sm font-medium">10:30h</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Button size="sm" variant="outline" className="text-xs">
                        Modificar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-3">
                <Button className="h-20 flex-col gap-2 bg-slate-900 hover:bg-slate-800">
                  <FileText className="w-5 h-5" />
                  <span className="text-xs">Ver Historial</span>
                </Button>
                <Button className="h-20 flex-col gap-2 bg-emerald-600 hover:bg-emerald-700">
                  <CircleDot className="w-5 h-5" />
                  <span className="text-xs">Visor 3D</span>
                </Button>
              </div>

              {/* 3D Preview Placeholder */}
              <Card className="border-0 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-slate-600">MI BOCA EN 3D</span>
                    <Badge variant="outline" className="text-xs">Beta</Badge>
                  </div>
                  <div className="h-24 rounded-lg bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
                    <div className="text-center">
                      <CircleDot className="w-8 h-8 text-blue-600 mx-auto mb-1" />
                      <span className="text-xs text-slate-600">Toca para explorar</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notification */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Receipt className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Receta disponible</p>
                  <p className="text-xs text-slate-500">Ibuprofeno 600mg · Hace 2h</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t flex items-center justify-around px-4">
              <div className="flex flex-col items-center text-blue-600">
                <Stethoscope className="w-5 h-5" />
                <span className="text-xs">Inicio</span>
              </div>
              <div className="flex flex-col items-center text-slate-400">
                <Calendar className="w-5 h-5" />
                <span className="text-xs">Citas</span>
              </div>
              <div className="flex flex-col items-center text-slate-400">
                <CardIcon className="w-5 h-5" />
                <span className="text-xs">Pagos</span>
              </div>
              <div className="flex flex-col items-center text-slate-400">
                <Settings className="w-5 h-5" />
                <span className="text-xs">Ajustes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// UI 3: Pasaporte de Producto ("Traceability")
// ============================================
const ProductTraceability = () => {
  const timeline = [
    {
      stage: 'Fabricación',
      icon: Factory,
      date: '2024-11-15',
      location: 'Straumann AG, Basilea, Suiza',
      status: 'verified',
      details: 'Implante Titanio Grado 5 · Lote: STR-2024-78542',
      cert: 'ISO 13485 · MDR Class IIb'
    },
    {
      stage: 'Control de Calidad',
      icon: Shield,
      date: '2024-11-18',
      location: 'Laboratorio Central, Suiza',
      status: 'verified',
      details: 'Pruebas mecánicas y biocompatibilidad aprobadas',
      cert: 'CE 0123 Certified'
    },
    {
      stage: 'Envío',
      icon: Truck,
      date: '2024-11-22',
      location: 'Hub Logístico, Frankfurt, Alemania',
      status: 'verified',
      details: 'Cadena de frío verificada · Tracking: EU-STR-445521',
      cert: 'GDP Compliant'
    },
    {
      stage: 'Recepción en Clínica',
      icon: Building2,
      date: '2024-11-25',
      location: 'Clínica Dental Norte, Madrid',
      status: 'verified',
      details: 'Recibido por: Dr. Martínez · Almacén: A3-12',
      cert: 'Registro sanitario verificado'
    },
    {
      stage: 'Implantación',
      icon: User,
      date: '2024-12-10',
      location: 'Sillón 2 · Clínica Dental Norte',
      status: 'verified',
      details: 'Paciente: *** *** (ID: PAT-8842) · Posición: 46',
      cert: 'Consentimiento informado firmado'
    },
  ];

  return (
    <div className="bg-white p-8 rounded-xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Pasaporte Digital de Producto</h2>
          <p className="text-slate-500">Trazabilidad completa bajo normativa MDR</p>
        </div>
        <Badge className="bg-emerald-100 text-emerald-700 border-0 gap-1">
          <BadgeCheck className="w-4 h-4" />
          Verificado Blockchain
        </Badge>
      </div>

      {/* Product Info */}
      <div className="flex items-center gap-6 p-4 rounded-xl bg-slate-50 mb-8">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
          <Package className="w-10 h-10 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-slate-900">Implante Dental Straumann BLT</h3>
          <p className="text-slate-500">Ref: SLA-4510-RC · Diámetro: 4.1mm · Longitud: 10mm</p>
          <div className="flex gap-2 mt-2">
            <Badge variant="outline">Titanio Grado 5</Badge>
            <Badge variant="outline">SLA Surface</Badge>
            <Badge className="bg-emerald-600 text-white">MDR Class IIb</Badge>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {timeline.map((item, index) => (
          <div key={index} className="flex gap-4 pb-8 last:pb-0">
            {/* Vertical Line */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                item.status === 'verified' ? 'bg-emerald-100' : 'bg-slate-100'
              }`}>
                <item.icon className={`w-6 h-6 ${
                  item.status === 'verified' ? 'text-emerald-600' : 'text-slate-400'
                }`} />
              </div>
              {index < timeline.length - 1 && (
                <div className="w-0.5 flex-1 bg-emerald-200 my-2" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-2">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-slate-900">{item.stage}</h4>
                <span className="text-sm text-slate-500">{item.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                <MapPin className="w-3 h-3" />
                {item.location}
              </div>
              <p className="text-sm text-slate-600 mb-2">{item.details}</p>
              <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                {item.cert}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================
// UI 4: Marketplace de Investigación
// ============================================
const ResearchMarketplace = () => {
  const datasets = [
    {
      title: 'Dataset Caries Pediátrica 2024',
      records: 5000,
      author: 'Red Clínicas Federadas',
      verified: true,
      price: 450,
      rating: 4.8,
      category: 'Odontopediatría',
      quality: 'K-Anonymity L5'
    },
    {
      title: 'Implantes Titanio - Éxito 5 años',
      records: 12400,
      author: 'Consorcio Implantología EU',
      verified: true,
      price: 890,
      rating: 4.9,
      category: 'Implantología',
      quality: 'Differential Privacy'
    },
    {
      title: 'Periodontitis & Diabetes Tipo 2',
      records: 3200,
      author: 'Hospital Universitario Madrid',
      verified: true,
      price: 320,
      rating: 4.7,
      category: 'Periodoncia',
      quality: 'K-Anonymity L5'
    },
  ];

  const algorithms = [
    { name: 'Predictor Periimplantitis', accuracy: 94.5, price: 120, status: 'Production' },
    { name: 'Clasificador Caries Temprana', accuracy: 91.2, price: 85, status: 'Beta' },
  ];

  return (
    <div className="bg-slate-50 p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Marketplace de Investigación</h2>
          <p className="text-slate-500">Datasets anonimizados y algoritmos licenciables</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtrar
          </Button>
          <Button size="sm" className="bg-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            Publicar Dataset
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Buscar datasets, algoritmos, categorías..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Tabs defaultValue="datasets" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="datasets">Datasets</TabsTrigger>
          <TabsTrigger value="algorithms">Algoritmos IA</TabsTrigger>
        </TabsList>

        <TabsContent value="datasets">
          <div className="grid grid-cols-3 gap-4">
            {datasets.map((dataset, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="text-xs">{dataset.category}</Badge>
                    {dataset.verified && (
                      <BadgeCheck className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1">{dataset.title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{dataset.author}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Database className="w-3 h-3" />
                      {dataset.records.toLocaleString()} registros
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500" />
                      {dataset.rating}
                    </span>
                  </div>

                  <Badge className="bg-emerald-50 text-emerald-700 border-0 text-xs mb-4">
                    <Lock className="w-3 h-3 mr-1" />
                    {dataset.quality}
                  </Badge>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div>
                      <span className="text-2xl font-bold text-slate-900">{dataset.price}</span>
                      <span className="text-sm text-slate-500 ml-1">tokens</span>
                    </div>
                    <Button size="sm" className="bg-blue-600">
                      Licenciar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="algorithms">
          <div className="grid grid-cols-2 gap-4">
            {algorithms.map((algo, i) => (
              <Card key={i} className="border-0 shadow-sm">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <Zap className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900">{algo.name}</h3>
                      <Badge variant={algo.status === 'Production' ? 'default' : 'secondary'} className="text-xs">
                        {algo.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-500">Precisión: {algo.accuracy}%</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">{algo.price} <span className="text-sm font-normal">tokens/mes</span></p>
                    <Button size="sm" variant="outline" className="mt-2">
                      Probar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// ============================================
// UI 5: Cockpit de Inteligencia (KPIs)
// ============================================
const KPICockpit = () => {
  const waitTimeData = [
    { month: 'Ene', clinic: 12, network: 15 },
    { month: 'Feb', clinic: 10, network: 14 },
    { month: 'Mar', clinic: 8, network: 13 },
    { month: 'Abr', clinic: 9, network: 12 },
    { month: 'May', clinic: 7, network: 11 },
    { month: 'Jun', clinic: 6, network: 10 },
  ];

  const profitData = [
    { month: 'Ene', value: 2400 },
    { month: 'Feb', value: 2800 },
    { month: 'Mar', value: 3200 },
    { month: 'Abr', value: 2900 },
    { month: 'May', value: 3500 },
    { month: 'Jun', value: 4100 },
  ];

  const npsData = [
    { name: 'Promotores', value: 68, color: '#10b981' },
    { name: 'Pasivos', value: 22, color: '#94a3b8' },
    { name: 'Detractores', value: 10, color: '#ef4444' },
  ];

  return (
    <div className="bg-slate-900 p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Cockpit de Inteligencia Federada</h2>
          <p className="text-slate-400">Comparativa en tiempo real · Red Accuro</p>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-blue-500/20 text-blue-400 border-0">
            <Activity className="w-3 h-3 mr-1" /> En vivo
          </Badge>
          <Badge className="bg-emerald-500/20 text-emerald-400 border-0">
            247 clínicas conectadas
          </Badge>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card className="bg-slate-800 border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <Badge className="bg-emerald-500/20 text-emerald-400 text-xs">-25%</Badge>
            </div>
            <p className="text-2xl font-bold text-white">6 min</p>
            <p className="text-sm text-slate-400">Tiempo espera</p>
            <p className="text-xs text-slate-500 mt-1">Red: 10 min</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-5 h-5 text-emerald-400" />
              <Badge className="bg-emerald-500/20 text-emerald-400 text-xs">+12%</Badge>
            </div>
            <p className="text-2xl font-bold text-white">€4,100</p>
            <p className="text-sm text-slate-400">Rentabilidad/sillón</p>
            <p className="text-xs text-slate-500 mt-1">Red: €3,650</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Heart className="w-5 h-5 text-rose-400" />
              <Badge className="bg-emerald-500/20 text-emerald-400 text-xs">Top 15%</Badge>
            </div>
            <p className="text-2xl font-bold text-white">+58</p>
            <p className="text-sm text-slate-400">NPS Score</p>
            <p className="text-xs text-slate-500 mt-1">Red: +42</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              <Badge className="bg-amber-500/20 text-amber-400 text-xs">Estable</Badge>
            </div>
            <p className="text-2xl font-bold text-white">94%</p>
            <p className="text-sm text-slate-400">Ocupación sillones</p>
            <p className="text-xs text-slate-500 mt-1">Red: 87%</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Wait Time Comparison */}
        <Card className="bg-slate-800 border-0 col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-300">Tiempo de Espera (min)</CardTitle>
            <CardDescription className="text-slate-500">Mi Clínica vs Red</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={150}>
              <AreaChart data={waitTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Area type="monotone" dataKey="network" stroke="#64748b" fill="#64748b" fillOpacity={0.3} name="Red" />
                <Area type="monotone" dataKey="clinic" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} name="Mi Clínica" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2">
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> Mi Clínica
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <div className="w-2 h-2 rounded-full bg-slate-500" /> Red Federada
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profitability Trend */}
        <Card className="bg-slate-800 border-0 col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-300">Rentabilidad por Sillón (€)</CardTitle>
            <CardDescription className="text-slate-500">Últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={profitData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* NPS Distribution */}
        <Card className="bg-slate-800 border-0 col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-300">Satisfacción NPS</CardTitle>
            <CardDescription className="text-slate-500">Distribución de pacientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={120}>
                <RechartsPie>
                  <Pie
                    data={npsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={50}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {npsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }}
                  />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-3 mt-2">
              {npsData.map((item, i) => (
                <div key={i} className="flex items-center gap-1 text-xs text-slate-400">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name} ({item.value}%)
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// ============================================
// MAIN COMPONENT: ConceptShowcase
// ============================================
const ConceptShowcase: React.FC = () => {
  const [currentUI, setCurrentUI] = useState(0);
  const [screenshotMode, setScreenshotMode] = useState(false);

  const uis = [
    { id: 'CLINIC_DASHBOARD', title: 'UI 1: Dashboard de la Clínica', subtitle: 'The Hub · Centro de Mando', component: ClinicDashboard },
    { id: 'PATIENT_WALLET', title: 'UI 2: App del Paciente', subtitle: 'Patient Wallet · Móvil', component: PatientWalletMobile },
    { id: 'PRODUCT_PASSPORT', title: 'UI 3: Pasaporte de Producto', subtitle: 'Traceability View · Timeline', component: ProductTraceability },
    { id: 'RESEARCH_MARKETPLACE', title: 'UI 4: Marketplace de Investigación', subtitle: 'Prof. Data · E-commerce', component: ResearchMarketplace },
    { id: 'KPI_COCKPIT', title: 'UI 5: Cockpit de Inteligencia', subtitle: 'KPIs Federados · Analytics', component: KPICockpit },
  ];

  const CurrentComponent = uis[currentUI].component;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' && currentUI < uis.length - 1) {
      setCurrentUI(prev => prev + 1);
    } else if (e.key === 'ArrowLeft' && currentUI > 0) {
      setCurrentUI(prev => prev - 1);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentUI]);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Controls - Hidden in Screenshot Mode */}
      {!screenshotMode && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 px-6 py-3">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div>
              <h1 className="font-bold text-slate-900">{uis[currentUI].title}</h1>
              <p className="text-sm text-slate-500">{uis[currentUI].subtitle}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500">
                {currentUI + 1} / {uis.length}
              </span>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  disabled={currentUI === 0}
                  onClick={() => setCurrentUI(prev => prev - 1)}
                >
                  ← Anterior
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  disabled={currentUI === uis.length - 1}
                  onClick={() => setCurrentUI(prev => prev + 1)}
                >
                  Siguiente →
                </Button>
              </div>
              <Button 
                variant={screenshotMode ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setScreenshotMode(!screenshotMode)}
              >
                {screenshotMode ? 'Salir Screenshot' : '📷 Modo Screenshot'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`${screenshotMode ? 'p-8' : 'pt-24 p-8'} max-w-7xl mx-auto`}>
        {/* Screenshot filename hint */}
        {!screenshotMode && (
          <div className="mb-4 text-center">
            <Badge variant="outline" className="text-xs">
              Archivo sugerido: UI_{String(currentUI + 1).padStart(2, '0')}_{uis[currentUI].id}.png
            </Badge>
          </div>
        )}

        {/* UI Component */}
        <CurrentComponent />

        {/* Keyboard hint */}
        {!screenshotMode && (
          <div className="mt-6 text-center text-sm text-slate-400">
            Usa las flechas del teclado ← → para navegar
          </div>
        )}
      </div>

      {/* Exit Screenshot Mode Button */}
      {screenshotMode && (
        <button
          onClick={() => setScreenshotMode(false)}
          className="fixed top-4 right-4 z-50 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-slate-800 transition-colors"
        >
          ✕ Salir
        </button>
      )}
    </div>
  );
};

export default ConceptShowcase;
