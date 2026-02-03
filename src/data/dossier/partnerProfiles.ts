import { 
  Stethoscope, 
  FlaskConical, 
  Pill, 
  Shield, 
  GraduationCap, 
  Truck, 
  Cpu, 
  TrendingUp,
  LucideIcon
} from 'lucide-react';

export interface PartnerProfile {
  id: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  gradient: string;
  bgGradient: string;
  description: string;
  role: string;
  dataContribution: string;
  benefits: string[];
  integrationPoints: string[];
  revenueModel: string;
  marketSize: string;
  targetCount: string;
}

export const partnerProfiles: PartnerProfile[] = [
  {
    id: 'clinicas',
    name: 'Clínicas Veterinarias',
    shortName: 'Clínicas',
    icon: Stethoscope,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    description: 'Proveedores primarios de datos clínicos y punto de contacto principal con tutores y pacientes.',
    role: 'Data Provider & Service Delivery',
    dataContribution: 'Historiales clínicos, diagnósticos, tratamientos, vacunaciones, cirugías',
    benefits: [
      'Interoperabilidad con laboratorios y especialistas',
      'Acceso a segunda opinión con IA',
      'Dashboard de KPIs clínicos',
      'Monetización de datos anonimizados',
      'Integración con centrales de compra'
    ],
    integrationPoints: ['Portal Veterinario', 'E-Prescription', 'Lab Hub', 'Inventory'],
    revenueModel: 'Suscripción SaaS + Revenue share por datos',
    marketSize: '6,200+ clínicas en España',
    targetCount: '500 clínicas en Fase 1'
  },
  {
    id: 'laboratorios',
    name: 'Laboratorios Diagnósticos',
    shortName: 'Labs',
    icon: FlaskConical,
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    description: 'Generadores de resultados diagnósticos estandarizados con trazabilidad completa.',
    role: 'Data Provider & Diagnostics',
    dataContribution: 'Resultados de análisis, imágenes diagnósticas, biomarcadores',
    benefits: [
      'Estandarización LOINC automática',
      'Conexión directa con clínicas',
      'Reducción de errores de transcripción',
      'Acceso a estudios de investigación',
      'Benchmarking de calidad'
    ],
    integrationPoints: ['Lab Portal', 'FHIR Gateway', 'Research Marketplace'],
    revenueModel: 'Fee por integración + Revenue share',
    marketSize: '150+ laboratorios especializados',
    targetCount: '20 laboratorios en Fase 1'
  },
  {
    id: 'farmaceuticas',
    name: 'Industria Farmacéutica',
    shortName: 'Pharma',
    icon: Pill,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    description: 'Fabricantes de medicamentos y productos veterinarios con necesidad de trazabilidad y farmacovigilancia.',
    role: 'Data Consumer & Sponsor',
    dataContribution: 'Datos de producto, alertas de farmacovigilancia, lotes',
    benefits: [
      'Trazabilidad end-to-end de productos',
      'Farmacovigilancia en tiempo real',
      'Datos de uso real (RWE)',
      'Cumplimiento regulatorio automático',
      'Protección de marca'
    ],
    integrationPoints: ['Product Passport', 'Supply Chain', 'Research Data'],
    revenueModel: 'Licencia enterprise + Data licensing',
    marketSize: '€2.1B mercado farmacéutico veterinario ES',
    targetCount: '10 farmacéuticas Top 20'
  },
  {
    id: 'aseguradoras',
    name: 'Aseguradoras de Mascotas',
    shortName: 'Insurance',
    icon: Shield,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    description: 'Compañías de seguros de salud animal que buscan automatización y reducción de fraude.',
    role: 'Data Consumer & Payer',
    dataContribution: 'Pólizas, claims, históricos de siniestralidad',
    benefits: [
      'Smart Claims automáticos',
      'Reducción de fraude con IA',
      'Scoring de riesgo basado en datos reales',
      'Seguros paramétricos',
      'Tiempo de liquidación reducido 80%'
    ],
    integrationPoints: ['Insurance Portal', 'Claims Engine', 'Risk Scoring'],
    revenueModel: 'Fee por transacción + Ahorro compartido',
    marketSize: '€450M primas anuales ES',
    targetCount: '5 aseguradoras principales'
  },
  {
    id: 'investigacion',
    name: 'Instituciones de Investigación',
    shortName: 'Research',
    icon: GraduationCap,
    gradient: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
    description: 'Universidades, centros de investigación y empresas de I+D veterinaria.',
    role: 'Data Consumer & Knowledge Creator',
    dataContribution: 'Protocolos de investigación, resultados publicables',
    benefits: [
      'Acceso a datasets anonimizados',
      'Federated Learning sin mover datos',
      'Cohortes epidemiológicas',
      'Colaboración multi-centro',
      'Publicación acelerada'
    ],
    integrationPoints: ['Research Marketplace', 'Federated Compute', 'Epidemiology'],
    revenueModel: 'Licencia de datos + Compute fees',
    marketSize: '€180M I+D veterinaria ES',
    targetCount: '15 instituciones académicas'
  },
  {
    id: 'distribuidores',
    name: 'Centrales de Compra',
    shortName: 'Procurement',
    icon: Truck,
    gradient: 'from-slate-500 to-zinc-600',
    bgGradient: 'from-slate-50 to-zinc-50',
    description: 'Distribuidores y centrales de compra del sector veterinario.',
    role: 'Supply Chain Partner',
    dataContribution: 'Catálogos, precios, inventarios, logística',
    benefits: [
      'Gestión de inventario predictiva',
      'Compras agregadas optimizadas',
      'Trazabilidad de lotes',
      'Integración con clínicas automática',
      'Reducción de stock muerto'
    ],
    integrationPoints: ['Procurement Portal', 'Supply Chain', 'IoT Inventory'],
    revenueModel: 'Fee por transacción + Suscripción',
    marketSize: '€1.2B distribución veterinaria ES',
    targetCount: '8 distribuidores principales'
  },
  {
    id: 'iot',
    name: 'Fabricantes IoT',
    shortName: 'IoT',
    icon: Cpu,
    gradient: 'from-rose-500 to-red-500',
    bgGradient: 'from-rose-50 to-red-50',
    description: 'Fabricantes de dispositivos conectados para monitorización animal y clínica.',
    role: 'Technology Partner',
    dataContribution: 'Datos de sensores, telemetría, alertas',
    benefits: [
      'Integración estandarizada',
      'Marketplace de dispositivos',
      'Datos contextualizados',
      'Alertas automatizadas',
      'Nuevos modelos de servicio'
    ],
    integrationPoints: ['IoT Gateway', 'Device Registry', 'Alerts Engine'],
    revenueModel: 'Licencia de integración + Revenue share',
    marketSize: '€85M IoT veterinario ES',
    targetCount: '12 fabricantes tecnológicos'
  },
  {
    id: 'inversores',
    name: 'Inversores & VCs',
    shortName: 'Investors',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    description: 'Fondos de inversión, VCs y business angels interesados en HealthTech veterinaria.',
    role: 'Financial Partner',
    dataContribution: 'Capital, red de contactos, expertise',
    benefits: [
      'Mercado en crecimiento 12% anual',
      'Modelo SaaS escalable',
      'Regulación favorable (Kit Espacio Datos)',
      'Múltiples revenue streams',
      'Exit strategies claras'
    ],
    integrationPoints: ['Investor Dashboard', 'KPIs', 'Due Diligence Portal'],
    revenueModel: 'Equity participation',
    marketSize: 'Serie A target: €3-5M',
    targetCount: '5-8 inversores estratégicos'
  }
];

export const getPartnerById = (id: string): PartnerProfile | undefined => {
  return partnerProfiles.find(p => p.id === id);
};

export const getPartnersByRole = (role: string): PartnerProfile[] => {
  return partnerProfiles.filter(p => p.role.toLowerCase().includes(role.toLowerCase()));
};
