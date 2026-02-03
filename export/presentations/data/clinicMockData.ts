// Mock data for Clinic Director Panel

export interface FinancialKPI {
  label: string;
  value: number;
  unit: string;
  trend: number;
  target?: number;
}

export interface OccupancySlot {
  hour: string;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
}

export interface BenchmarkMetric {
  metric: string;
  clinicValue: number;
  networkAverage: number;
  percentile: number;
  unit: string;
}

export interface SupplyAlert {
  id: string;
  product: string;
  currentStock: number;
  minStock: number;
  status: "critical" | "low" | "ok";
  autoOrderPending: boolean;
}

export interface RevenueData {
  month: string;
  revenue: number;
  target: number;
}

export const clinicProfile = {
  name: "Clínica Veterinaria Central",
  director: "Dra. Ana Martínez",
  location: "Madrid Centro",
  employees: 12,
  veterinarians: 5,
};

export const financialKPIs: FinancialKPI[] = [
  { label: "Facturación MTD", value: 48500, unit: "€", trend: 12.3, target: 55000 },
  { label: "Margen Operativo", value: 23.5, unit: "%", trend: 2.1, target: 25 },
  { label: "Coste/Consulta", value: 42, unit: "€", trend: -5.2 },
  { label: "Revenue/Veterinario", value: 9700, unit: "€", trend: 8.4 },
];

export const serviceKPIs = {
  npsGlobal: 78,
  npsTrend: 4.2,
  avgWaitTime: 12, // minutes
  waitTimeTarget: 10,
  complaintsMonth: 1,
  complaintsTrend: -50,
  occupancyRate: 92,
};

export const operationalKPIs = {
  hospitalizedActive: 6,
  criticalPatients: 2,
  orEfficiency: 87, // percentage
  avgSurgeryTime: 45, // minutes
};

export const occupancyHeatmap: OccupancySlot[] = [
  { hour: "08:00", monday: 40, tuesday: 55, wednesday: 45, thursday: 50, friday: 60, saturday: 75 },
  { hour: "09:00", monday: 65, tuesday: 80, wednesday: 70, thursday: 75, friday: 85, saturday: 90 },
  { hour: "10:00", monday: 85, tuesday: 95, wednesday: 80, thursday: 90, friday: 95, saturday: 100 },
  { hour: "11:00", monday: 90, tuesday: 100, wednesday: 85, thursday: 95, friday: 90, saturday: 95 },
  { hour: "12:00", monday: 75, tuesday: 85, wednesday: 70, thursday: 80, friday: 75, saturday: 70 },
  { hour: "13:00", monday: 45, tuesday: 50, wednesday: 40, thursday: 45, friday: 50, saturday: 30 },
  { hour: "16:00", monday: 70, tuesday: 90, wednesday: 75, thursday: 85, friday: 80, saturday: 0 },
  { hour: "17:00", monday: 85, tuesday: 100, wednesday: 90, thursday: 95, friday: 85, saturday: 0 },
  { hour: "18:00", monday: 80, tuesday: 95, wednesday: 85, thursday: 90, friday: 75, saturday: 0 },
  { hour: "19:00", monday: 60, tuesday: 75, wednesday: 65, thursday: 70, friday: 55, saturday: 0 },
];

export const benchmarks: BenchmarkMetric[] = [
  { metric: "NPS", clinicValue: 78, networkAverage: 72, percentile: 75, unit: "pts" },
  { metric: "Tiempo Espera", clinicValue: 12, networkAverage: 15, percentile: 68, unit: "min" },
  { metric: "Éxito Quirúrgico", clinicValue: 98.5, networkAverage: 97.2, percentile: 82, unit: "%" },
  { metric: "Coste/Consulta", clinicValue: 42, networkAverage: 48, percentile: 71, unit: "€" },
  { metric: "Ocupación", clinicValue: 92, networkAverage: 85, percentile: 78, unit: "%" },
];

export const supplyAlerts: SupplyAlert[] = [
  { id: "sup-001", product: "Amoxicilina 250mg", currentStock: 12, minStock: 20, status: "low", autoOrderPending: true },
  { id: "sup-002", product: "Suero Fisiológico 500ml", currentStock: 5, minStock: 15, status: "critical", autoOrderPending: true },
  { id: "sup-003", product: "Guantes Látex M", currentStock: 45, minStock: 50, status: "low", autoOrderPending: false },
  { id: "sup-004", product: "Vacuna Rabia", currentStock: 30, minStock: 25, status: "ok", autoOrderPending: false },
];

export const revenueData: RevenueData[] = [
  { month: "Sep", revenue: 52000, target: 50000 },
  { month: "Oct", revenue: 48000, target: 50000 },
  { month: "Nov", revenue: 55000, target: 52000 },
  { month: "Dic", revenue: 62000, target: 55000 },
  { month: "Ene", revenue: 45000, target: 48000 },
  { month: "Feb", revenue: 48500, target: 55000 },
];

export const federatedSavings = {
  totalAccumulated: 4250,
  lastMonth: 380,
  pendingOrders: 3,
  networkedClinics: 47,
};

export const aiPredictions = [
  {
    type: "saturation",
    message: "Alerta de Saturación: Se prevé un aumento del 20% en tiempos de espera los martes por la tarde. Sugerencia: Reforzar recepción de 16:00 a 19:00.",
    severity: "warning",
  },
  {
    type: "stock",
    message: "Stock Crítico: Suero fisiológico llegará a mínimo en 48h. Pedido automático preparado para aprobación.",
    severity: "critical",
  },
];
