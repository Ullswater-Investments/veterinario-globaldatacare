import React, { useState, useEffect } from 'react';
import { 
  Calendar, Bell, Server, CreditCard, Activity, Users, Clock, 
  CheckCircle2, Wifi, Database, Shield, Star,
  FileText, MapPin, Package, Factory, Truck,
  Building2, User, BadgeCheck, Search, Filter, Lock,
  TrendingUp, Target, Zap, ChevronRight, MoreHorizontal, 
  Plus, Settings, ArrowUpRight, Stethoscope, Receipt, 
  CreditCard as CardIcon, Heart, CircleDot, Smile
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart as RechartsPie, Pie, Cell, Area, AreaChart
} from 'recharts';

// UI 1: Dashboard de la Clínica
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
    <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-200 h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Centro de Mando Clínico</h2>
          <p className="text-slate-500">Clínica Dental Norte · Miércoles, 15 Enero 2025</p>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-emerald-100 text-emerald-700 border-0 hover:bg-emerald-100 px-3 py-1">
            <Wifi className="w-3 h-3 mr-2" /> Online
          </Badge>
          <Badge className="bg-blue-100 text-blue-700 border-0 hover:bg-blue-100 px-3 py-1">
            <Shield className="w-3 h-3 mr-2" /> Federado
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <Card className="border-0 shadow-sm h-full">
            <CardHeader className="pb-4 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2 text-slate-800">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  Agenda del Día
                </CardTitle>
                <Badge variant="secondary" className="bg-slate-100 text-slate-600">6 citas hoy</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                {appointments.map((apt, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all group">
                    <div className="text-sm font-mono font-bold text-slate-500 w-12">{apt.time}</div>
                    <div className={`w-1.5 h-10 rounded-full ${apt.status === 'confirmed' ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{apt.patient}</p>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">{apt.treatment}</p>
                    </div>
                    <Badge variant={apt.status === 'confirmed' ? 'default' : 'secondary'} className={`text-xs ${apt.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 shadow-none' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'}`}>
                      {apt.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600"><MoreHorizontal className="w-4 h-4" /></Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-12 lg:col-span-5 space-y-6">
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-wider">Estado de Red</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50/50 border border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-emerald-100 rounded-md">
                     <Database className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold text-emerald-900">ERP Conectado</span>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50/50 border border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-emerald-100 rounded-md">
                    <Users className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold text-emerald-900">CRM Sincronizado</span>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50/50 border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-blue-100 rounded-md">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold text-blue-900">Espacio Federado</span>
                </div>
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-slate-900 text-white">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-slate-400">Facturación Semanal</CardTitle>
                <span className="text-xl font-bold text-emerald-400">€14,300</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[120px] w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={billingData}>
                    <Bar dataKey="amount" fill="#34d399" radius={[4, 4, 0, 0]} barSize={30} />
                    <Tooltip cursor={{fill: 'rgba(255,255,255,0.1)'}} contentStyle={{backgroundColor: '#1e293b', border: 'none', color: '#fff'}} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-wider">Infraestructura Local</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-700">Servidor PMS (On-Premise)</span>
                  <span className="text-emerald-600">99.9% uptime</span>
                </div>
                <Progress value={100} className="h-2 bg-slate-100" />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-700">Almacenamiento Seguro</span>
                  <span className="text-blue-600">45% usado</span>
                </div>
                <Progress value={45} className="h-2 bg-slate-100" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// UI 2: App del Paciente
const PatientWalletMobile = () => {
  return (
    <div className="flex justify-center items-center py-6 bg-slate-100">
      <div className="relative transform transition-transform duration-500 hover:scale-[1.02]">
        <div className="w-[340px] h-[680px] bg-slate-900 rounded-[3.5rem] p-3 shadow-2xl ring-4 ring-slate-200">
          <div className="w-full h-full bg-slate-50 rounded-[2.8rem] overflow-hidden relative font-sans flex flex-col">
            <div className="absolute top-0 w-full h-12 z-50 flex justify-center">
               <div className="w-40 h-7 bg-slate-900 rounded-b-3xl"></div>
            </div>

            <div className="h-14 w-full bg-blue-600 flex items-center justify-between px-8 pt-4 z-40">
              <span className="text-white text-[11px] font-medium">9:41</span>
              <div className="flex gap-1.5">
                <Wifi className="w-3.5 h-3.5 text-white" />
                <Activity className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            <div className="bg-blue-600 px-6 pb-8 pt-2 rounded-b-[2.5rem] shadow-lg relative z-10">
              <div className="flex items-center justify-between mt-2">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border-2 border-white/30 p-0.5 bg-blue-800 flex items-center justify-center">
                       <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-xs font-medium mb-0.5">Hola,</p>
                      <p className="text-white font-bold text-xl">Ana García</p>
                    </div>
                 </div>
                 <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 rounded-full">
                    <Bell className="w-6 h-6" />
                 </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pt-6 pb-24 -mt-4 z-20 space-y-5 scrollbar-hide">
              <div className="bg-white p-5 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                <div className="flex justify-between items-start mb-4 pl-2">
                   <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold tracking-wide mb-2">
                        <Calendar className="w-3 h-3" /> PRÓXIMA CITA
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">Revisión Ortodoncia</h3>
                      <p className="text-sm text-slate-500 mt-1">Dr. Martínez · Sala 3</p>
                   </div>
                   <div className="text-center bg-slate-50 p-2.5 rounded-2xl border border-slate-100 min-w-[60px]">
                      <span className="block text-xl font-bold text-slate-900">16</span>
                      <span className="text-[10px] uppercase font-bold text-slate-400">Ene</span>
                   </div>
                </div>
                <div className="flex items-center gap-3 pl-2">
                   <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">Mañana, 10:30</Badge>
                   <span className="text-xs text-slate-400">30 min est.</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <button className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all active:scale-95">
                    <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-1">
                       <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-700">Historial</span>
                 </button>
                 <button className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all active:scale-95">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-1">
                       <Receipt className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-700">Facturas</span>
                 </button>
              </div>

              <div className="relative rounded-3xl overflow-hidden h-36 shadow-lg group cursor-pointer">
                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700"></div>
                 <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-4 translate-y-4">
                    <Smile className="w-32 h-32 text-white" />
                 </div>
                 <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                    <div>
                       <div className="flex items-center gap-2 mb-1">
                          <CircleDot className="w-4 h-4 text-indigo-200" />
                          <span className="text-[10px] font-bold text-indigo-200 uppercase tracking-widest">Digital Twin</span>
                       </div>
                       <h3 className="text-white font-bold text-lg">Mi Boca 3D</h3>
                    </div>
                    <button className="self-start bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/30">
                       Ver Modelo Interactivo
                    </button>
                 </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                 <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                 </div>
                 <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-900">Receta Disponible</h4>
                    <p className="text-xs text-slate-500 truncate">Ibuprofeno 600mg · Dr. Martínez</p>
                 </div>
                 <ChevronRight className="w-4 h-4 text-slate-300" />
              </div>
            </div>

            <div className="absolute bottom-0 w-full h-[88px] bg-white/90 backdrop-blur-lg border-t border-slate-200 z-50 rounded-b-[2.5rem] px-6">
               <div className="flex items-center justify-between h-full pb-4">
                  <div className="flex flex-col items-center gap-1 text-blue-600">
                     <Stethoscope className="w-6 h-6" />
                     <span className="text-[10px] font-bold">Inicio</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors">
                     <Calendar className="w-6 h-6" />
                     <span className="text-[10px] font-medium">Citas</span>
                  </div>
                  <div className="-mt-12">
                     <button className="w-14 h-14 bg-blue-600 rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                        <Plus className="w-7 h-7" />
                     </button>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors">
                     <CardIcon className="w-6 h-6" />
                     <span className="text-[10px] font-medium">Pagos</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors">
                     <Settings className="w-6 h-6" />
                     <span className="text-[10px] font-medium">Perfil</span>
                  </div>
               </div>
            </div>
            
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 rounded-full z-[60]" />
          </div>
        </div>
      </div>
    </div>
  );
};

// UI 3: Pasaporte de Producto
const ProductTraceability = () => {
  const timeline = [
    { stage: 'Fabricación', icon: Factory, date: '15 Nov 2024', time: '08:45', location: 'Straumann AG, Basilea, Suiza', status: 'verified', details: 'Implante Titanio Grado 5 · Lote: STR-2024-78542', cert: 'ISO 13485 · MDR Class IIb' },
    { stage: 'Control de Calidad', icon: Shield, date: '18 Nov 2024', time: '14:20', location: 'Laboratorio Central, Suiza', status: 'verified', details: 'Pruebas mecánicas y biocompatibilidad aprobadas', cert: 'CE 0123 Certified' },
    { stage: 'Logística & Envío', icon: Truck, date: '22 Nov 2024', time: '09:15', location: 'Hub Logístico, Frankfurt, Alemania', status: 'verified', details: 'Cadena de frío verificada · Tracking: EU-STR-445521', cert: 'GDP Compliant' },
    { stage: 'Recepción en Clínica', icon: Building2, date: '25 Nov 2024', time: '11:30', location: 'Clínica Dental Norte, Madrid', status: 'verified', details: 'Recibido por: Dr. Martínez · Almacén: A3-12', cert: 'Registro sanitario verificado' },
    { stage: 'Implantación', icon: User, date: '10 Dic 2024', time: '10:45', location: 'Sillón 2 · Clínica Dental Norte', status: 'verified', details: 'Paciente: *** *** (ID: PAT-8842) · Posición: 46', cert: 'Consentimiento informado firmado' },
  ];

  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-3 mb-2">
             <h2 className="text-3xl font-bold text-slate-900">Pasaporte de Producto</h2>
             <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-emerald-700 font-mono">MDR EU/2017/745</Badge>
          </div>
          <p className="text-slate-500">Cadena de custodia digital (Blockchain Ledger)</p>
        </div>
        <div className="text-right flex flex-col items-end">
           <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 gap-1.5 py-1.5 px-4 mb-2 shadow-sm text-sm">
            <BadgeCheck className="w-4 h-4" />
            Autenticidad Garantizada
          </Badge>
          <p className="text-xs text-slate-400 font-mono">Asset ID: 0x71...9f2b</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 md:col-span-4">
           <Card className="bg-slate-50 border-slate-200 sticky top-6 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600" />
              <CardContent className="p-6">
                 <div className="w-32 h-32 mx-auto bg-white rounded-full p-6 shadow-sm mb-6 flex items-center justify-center border border-slate-100">
                    <Package className="w-full h-full text-blue-600 stroke-1" />
                 </div>
                 
                 <div className="text-center mb-6">
                    <h3 className="font-bold text-2xl text-slate-900 mb-1">Straumann BLT</h3>
                    <p className="text-sm text-slate-500">Bone Level Tapered Implant</p>
                 </div>
                 
                 <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-slate-200/60">
                       <span className="text-slate-500">Referencia</span>
                       <span className="font-mono font-semibold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">SLA-4510</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200/60">
                       <span className="text-slate-500">Material</span>
                       <span className="font-semibold text-slate-900">Roxolid®</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200/60">
                       <span className="text-slate-500">Superficie</span>
                       <span className="font-semibold text-slate-900">SLActive®</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                       <span className="text-slate-500">Lote (Batch)</span>
                       <span className="font-mono font-semibold text-slate-900">STR-2024-78</span>
                    </div>
                 </div>
              </CardContent>
           </Card>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="relative pl-6 pt-2">
            <div className="absolute top-4 bottom-10 left-[35px] w-0.5 bg-slate-200" />

            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 relative group">
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-white shadow-md transition-all duration-300 group-hover:scale-110 ${
                    item.status === 'verified' ? 'bg-gradient-to-br from-emerald-50 to-emerald-100' : 'bg-slate-50'
                  }`}>
                    <item.icon className={`w-7 h-7 ${item.status === 'verified' ? 'text-emerald-600' : 'text-slate-400'}`} />
                    
                    {item.status === 'verified' && (
                        <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 border-2 border-white">
                            <CheckCircle2 className="w-3 h-3" />
                        </div>
                    )}
                  </div>
                </div>

                <Card className="flex-1 border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300 cursor-default group-hover:-translate-y-1">
                   <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                           <h4 className="font-bold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">{item.stage}</h4>
                           <div className="flex items-center gap-3 text-xs text-slate-500 mt-1 font-mono">
                              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                              <span className="text-slate-300">|</span> 
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.time}</span>
                           </div>
                        </div>
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100 font-normal">
                           Blockchain Verified
                        </Badge>
                      </div>
                      
                      <div className="bg-slate-50 rounded-lg p-3 text-sm border border-slate-100 mb-3 flex items-start gap-2.5">
                         <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                         <span className="text-slate-700 font-medium">{item.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                         <p className="text-sm text-slate-600">{item.details}</p>
                         <Badge variant="outline" className="text-[10px] text-slate-400 font-normal bg-white">
                            {item.cert}
                         </Badge>
                      </div>
                   </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// UI 4: Marketplace de Investigación
const ResearchMarketplace = () => {
  const datasets = [
    { title: 'Dataset Caries Pediátrica 2024', records: 5000, author: 'Red Clínicas Federadas', verified: true, price: 450, rating: 4.8, category: 'Odontopediatría', quality: 'K-Anonymity L5', image: 'bg-blue-100' },
    { title: 'Implantes Titanio - Éxito 5 años', records: 12400, author: 'Consorcio Implantología EU', verified: true, price: 890, rating: 4.9, category: 'Implantología', quality: 'Differential Privacy', image: 'bg-indigo-100' },
    { title: 'Periodontitis & Diabetes Tipo 2', records: 3200, author: 'Hospital Universitario Madrid', verified: true, price: 320, rating: 4.7, category: 'Periodoncia', quality: 'K-Anonymity L5', image: 'bg-emerald-100' },
  ];

  return (
    <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 h-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Prof. Data Marketplace</h2>
          <p className="text-slate-500 mt-1 text-lg">Monetización segura de activos clínicos</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="bg-white border-slate-200">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20">
            <Plus className="w-4 h-4 mr-2" />
            Publicar Activo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
         {datasets.map((dataset, i) => (
            <Card key={i} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-[400px]">
               <div className={`h-36 ${dataset.image} relative group`}>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute top-4 left-4">
                     <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm hover:bg-white border-0">
                        {dataset.category}
                     </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Database className="w-16 h-16 text-slate-900/10" />
                  </div>
               </div>

               <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                     <h3 className="font-bold text-xl text-slate-900 leading-snug">{dataset.title}</h3>
                     {dataset.verified && <BadgeCheck className="w-6 h-6 text-blue-500 shrink-0" />}
                  </div>
                  
                  <p className="text-sm text-slate-500 mb-6 font-medium">{dataset.author}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                     <div className="bg-slate-50 p-3 rounded-lg text-center border border-slate-100">
                        <span className="block text-xl font-bold text-slate-800">{dataset.records / 1000}k</span>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wide">Registros</span>
                     </div>
                     <div className="bg-slate-50 p-3 rounded-lg text-center border border-slate-100">
                        <div className="flex items-center justify-center gap-1 text-lg font-bold text-slate-800">
                           {dataset.rating} <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        </div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wide">Calidad</span>
                     </div>
                  </div>

                  <div className="mt-auto">
                     <div className="flex items-center gap-2 mb-4">
                        <Lock className="w-3 h-3 text-emerald-600" />
                        <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{dataset.quality}</span>
                     </div>

                     <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex flex-col">
                           <span className="text-xs text-slate-400 font-medium uppercase">Precio Licencia</span>
                           <span className="text-2xl font-bold text-slate-900">{dataset.price} €</span>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-600/20">
                           Adquirir
                        </Button>
                     </div>
                  </div>
               </CardContent>
            </Card>
         ))}
      </div>
    </div>
  );
};

// UI 5: Cockpit de Inteligencia
const KPICockpit = () => {
  const waitTimeData = [
    { month: 'Ene', clinic: 12, network: 15 },
    { month: 'Feb', clinic: 10, network: 14 },
    { month: 'Mar', clinic: 8, network: 13 },
    { month: 'Abr', clinic: 9, network: 12 },
    { month: 'May', clinic: 7, network: 11 },
    { month: 'Jun', clinic: 6, network: 10 },
  ];

  const npsData = [
    { name: 'Promotores', value: 68, color: '#10b981' },
    { name: 'Pasivos', value: 22, color: '#94a3b8' },
    { name: 'Detractores', value: 10, color: '#ef4444' },
  ];

  const kpis = [
    { icon: Clock, label: 'Tiempo de Espera', value: '6 min', trend: '-25%', bgColor: 'bg-blue-500/10', textColor: 'text-blue-400' },
    { icon: Target, label: 'Rentabilidad', value: '€4,100', trend: '+12%', bgColor: 'bg-emerald-500/10', textColor: 'text-emerald-400' },
    { icon: Heart, label: 'NPS Score', value: '+58', trend: 'Top 15%', bgColor: 'bg-rose-500/10', textColor: 'text-rose-400' },
    { icon: TrendingUp, label: 'Ocupación', value: '94%', trend: 'Estable', bgColor: 'bg-amber-500/10', textColor: 'text-amber-400' },
  ];

  return (
    <div className="bg-slate-950 p-8 rounded-xl border border-slate-800 shadow-2xl h-full text-slate-200">
      <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Cockpit de Inteligencia Federada</h2>
          <div className="flex items-center gap-2 mt-1">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
             <p className="text-slate-400 text-sm">Nodo Madrid Norte · Datos en tiempo real</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="border-slate-700 text-slate-400 h-9 px-3 bg-slate-900">
            v2.4.0 (Stable)
          </Badge>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white border-0">
             <ArrowUpRight className="w-4 h-4 mr-2" /> Exportar Informe
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((kpi, i) => (
           <Card key={i} className="bg-slate-900/50 border-slate-800 hover:bg-slate-800 transition-colors group">
             <CardContent className="p-5">
               <div className="flex items-center justify-between mb-4">
                 <div className={`p-2 rounded-lg ${kpi.bgColor} ${kpi.textColor} group-hover:scale-110 transition-transform`}>
                    <kpi.icon className="w-5 h-5" />
                 </div>
                 <Badge className={`${kpi.bgColor} ${kpi.textColor} border-0 text-xs`}>{kpi.trend}</Badge>
               </div>
               <div>
                  <p className="text-sm text-slate-400 font-medium mb-1">{kpi.label}</p>
                  <p className="text-3xl font-bold text-white tracking-tight">{kpi.value}</p>
               </div>
             </CardContent>
           </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[350px]">
        <Card className="bg-slate-900/50 border-slate-800 col-span-2">
          <CardHeader className="pb-2 border-b border-slate-800/50">
             <div className="flex items-center justify-between">
                <div>
                   <CardTitle className="text-base text-slate-200">Benchmarking: Tiempos de Espera</CardTitle>
                   <CardDescription className="text-slate-500">Mi Clínica vs Media de la Red</CardDescription>
                </div>
                <div className="flex gap-4">
                   <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-3 h-3 rounded bg-blue-500/30 border border-blue-500"></span> Mi Clínica
                   </div>
                   <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-3 h-3 rounded bg-slate-600/30 border border-slate-600"></span> Red
                   </div>
                </div>
             </div>
          </CardHeader>
          <CardContent className="pt-6 h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={waitTimeData}>
                <defs>
                  <linearGradient id="colorClinic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  itemStyle={{ color: '#e2e8f0' }}
                />
                <Area type="monotone" dataKey="network" stroke="#64748b" strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
                <Area type="monotone" dataKey="clinic" stroke="#3b82f6" strokeWidth={3} fill="url(#colorClinic)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-800 col-span-1">
          <CardHeader className="pb-2 border-b border-slate-800/50">
            <CardTitle className="text-base text-slate-200">Calidad Percibida</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-[280px]">
            <div className="relative w-full h-[200px]">
               <ResponsiveContainer width="100%" height="100%">
                  <RechartsPie>
                  <Pie
                     data={npsData}
                     cx="50%"
                     cy="50%"
                     innerRadius={60}
                     outerRadius={85}
                     paddingAngle={5}
                     dataKey="value"
                     stroke="none"
                  >
                     {npsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                     ))}
                  </Pie>
                  </RechartsPie>
               </ResponsiveContainer>
               <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-4xl font-bold text-white">+58</span>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">NPS</span>
               </div>
            </div>
            <div className="w-full flex justify-between px-4 mt-2">
               {npsData.map((d, i) => (
                  <div key={i} className="text-center">
                     <span className="block text-xs text-slate-500 mb-1">{d.name}</span>
                     <span className="block text-sm font-bold" style={{color: d.color}}>{d.value}%</span>
                  </div>
               ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// MAIN COMPONENT
const ConceptShowcase: React.FC = () => {
  const [currentUI, setCurrentUI] = useState(0);
  const [screenshotMode, setScreenshotMode] = useState(false);

  const uis = [
    { id: 'CLINIC', title: '01. Clínica', subtitle: 'Dashboard Operativo', component: ClinicDashboard },
    { id: 'WALLET', title: '02. Paciente', subtitle: 'Mobile App Wallet', component: PatientWalletMobile },
    { id: 'TRACE', title: '03. Industria', subtitle: 'Pasaporte de Producto', component: ProductTraceability },
    { id: 'MARKET', title: '04. Investigación', subtitle: 'Data Marketplace', component: ResearchMarketplace },
    { id: 'KPI', title: '05. Gestión', subtitle: 'Cockpit de KPIs', component: KPICockpit },
  ];

  const CurrentComponent = uis[currentUI].component;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentUI < uis.length - 1) setCurrentUI(p => p + 1);
      if (e.key === 'ArrowLeft' && currentUI > 0) setCurrentUI(p => p - 1);
      if (e.key === 'Escape') setScreenshotMode(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentUI]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${screenshotMode ? 'bg-transparent' : 'bg-slate-100'}`}>
      
      {!screenshotMode && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="bg-slate-900 text-white font-bold px-3 py-1 rounded text-sm">ACCURO</div>
              <div className="h-6 w-px bg-slate-200"></div>
              <div>
                <h1 className="font-bold text-slate-900 text-lg leading-tight">{uis[currentUI].title}</h1>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{uis[currentUI].subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex bg-slate-100 rounded-lg p-1 gap-1">
                {uis.map((ui, idx) => (
                   <button 
                    key={ui.id}
                    onClick={() => setCurrentUI(idx)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                       currentUI === idx 
                         ? 'bg-white shadow text-slate-900' 
                         : 'text-slate-500 hover:text-slate-900'
                    }`}
                   >
                     {ui.id}
                   </button>
                ))}
              </div>
              
              <div className="h-6 w-px bg-slate-200"></div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled={currentUI === 0} onClick={() => setCurrentUI(p => p - 1)}>
                  ← Anterior
                </Button>
                <Button variant="outline" size="sm" disabled={currentUI === uis.length - 1} onClick={() => setCurrentUI(p => p + 1)}>
                  Siguiente →
                </Button>
              </div>
              
              <Button size="sm" onClick={() => setScreenshotMode(true)} className="bg-slate-900 text-white hover:bg-slate-800">
                📷 Modo Screenshot
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className={`${screenshotMode ? 'p-8' : 'pt-28 p-8'} max-w-7xl mx-auto`}>
        <CurrentComponent />
        
        {!screenshotMode && (
          <div className="mt-8 text-center text-sm text-slate-400">
            Usa las flechas del teclado ← → para navegar · ESC para salir del modo screenshot
          </div>
        )}
      </div>

      {screenshotMode && (
        <button
          onClick={() => setScreenshotMode(false)}
          className="fixed top-4 right-4 z-50 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
        >
          <Settings className="w-4 h-4" /> Salir del modo captura
        </button>
      )}
    </div>
  );
};

export default ConceptShowcase;
