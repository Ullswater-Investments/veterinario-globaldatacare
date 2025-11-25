// Mock Data for OralSpace-X Innovation Labs

// 1. ESG & Sostenibilidad
export const esgMetrics = {
  energyConsumption: { value: 450, unit: "kWh", benchmark: "20% above avg" },
  carbonFootprint: { daily: "12kg CO2", status: "Warning" },
  greenTokens: 150,
  wasteLog: [
    { type: "Amalgama (Mercurio)", weight: "50g", disposalCert: "CERT-XYZ-99", status: "Recycled" },
    { type: "Plástico PVC", weight: "120g", disposalCert: "CERT-ABC-45", status: "Recycled" },
    { type: "Papel Contaminado", weight: "80g", disposalCert: "CERT-DEF-78", status: "Incinerado" }
  ],
  energyHistory: [
    { day: "Lun", consumption: 420 },
    { day: "Mar", consumption: 450 },
    { day: "Mié", consumption: 430 },
    { day: "Jue", consumption: 460 },
    { day: "Vie", consumption: 440 }
  ]
};

// 2. Microbioma (Bio)
export const microbiomeData = {
  patientId: "p-001",
  analysisDate: "2023-11-25",
  pathogens: [
    { name: "P. gingivalis", level: "High", riskAssociation: "Alzheimer" },
    { name: "T. denticola", level: "Medium", riskAssociation: "Cardiovascular" },
    { name: "A. actinomycetemcomitans", level: "Low", riskAssociation: "Artritis Reumatoide" }
  ],
  crossDomainAccess: { 
    requester: "Dr. Neuro (Neurología)", 
    status: "Pending Approval",
    reason: "Investigación correlación microbioma-Alzheimer"
  }
};

// 3. Forense (DVI)
export const forensicMatch = {
  searchQuery: "Implant Straumann #LOTE-X",
  status: "Match Found",
  location: "Clínica Dental Norte",
  patientHash: "0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
  policeCaseId: "INTERPOL-RED-2024",
  coordinates: { lat: 40.4168, lng: -3.7038 },
  matchConfidence: 98.5
};

// 4. InsurTech (Habits)
export const brushingTelemetry = [
  { day: "Lun", score: 92, duration: "2:10" },
  { day: "Mar", score: 88, duration: "1:55" },
  { day: "Mié", score: 95, duration: "2:15" },
  { day: "Jue", score: 90, duration: "2:05" },
  { day: "Vie", score: 87, duration: "1:50" },
  { day: "Sáb", score: 93, duration: "2:12" },
  { day: "Dom", score: 91, duration: "2:08" }
];

export const bnplScoring = {
  preApprovedCredit: 3000,
  creditScore: 785,
  paymentHistory: "Excelente",
  federatedDataSources: 3,
  monthlyPremium: { current: 45, optimized: 38 }
};

// 5. Sports IoT
export const mouthguardTelemetry = {
  athlete: "Jugador #10",
  lastImpact: "55G",
  timestamp: "Live",
  alertSent: true,
  impactHistory: [
    { time: "14:23", force: "32G", severity: "Low" },
    { time: "14:45", force: "55G", severity: "High" },
    { time: "15:10", force: "28G", severity: "Low" }
  ],
  concussionRisk: "Alto"
};

// Business Models Data
export const businessModels = {
  clinical: [
    { id: 1, name: "Marketplace de Derivación", revenue: 37500, unit: "€/mes", description: "Comisión 3% sobre derivaciones especialistas" },
    { id: 2, name: "Teledentistería SaaS", revenue: 19800, unit: "€/mes", description: "99€/mes por clínica (200 clínicas)" },
    { id: 3, name: "Almacenamiento Federado", revenue: 15000, unit: "€/mes", description: "Ahorro en costes de nube" },
    { id: 4, name: "API Diagnóstico IA", revenue: 25000, unit: "€/mes", description: "0.50€ por análisis (50k/mes)" },
    { id: 5, name: "Gestión Stock IoT", revenue: 30000, unit: "€/mes", description: "1.5% fee sobre 2M€ en compras" }
  ],
  industry: [
    { id: 6, name: "Pasaportes Digitales DPP", revenue: 20000, unit: "€/mes", description: "2€ por implante certificado" },
    { id: 7, name: "Anti-Falsificación", revenue: 50000, unit: "€/mes", description: "5k€/mes por marca (10 clientes)" },
    { id: 8, name: "DRM Impresión 3D", revenue: 25000, unit: "€/mes", description: "5€ por diseño desbloqueado" },
    { id: 9, name: "Certificación ESG", revenue: 15000, unit: "€/mes", description: "1.200€/año por entidad (150 clientes)" },
    { id: 10, name: "Publicidad Contextual", revenue: 12000, unit: "€/mes", description: "CPM 50€ en marketplace" }
  ],
  data: [
    { id: 11, name: "Datos Sintéticos Pharma", revenue: 16667, unit: "€/mes", description: "50k€ por dataset (4/año)" },
    { id: 12, name: "Compute Federado", revenue: 50000, unit: "€/mes", description: "500€/hora (100h/mes)" },
    { id: 13, name: "Reclutamiento Ensayos", revenue: 75000, unit: "€/mes", description: "1.500€ por paciente (50/mes)" },
    { id: 14, name: "Informes RWE", revenue: 25000, unit: "€/mes", description: "15k€/año por fabricante (20 clientes)" },
    { id: 15, name: "Vigilancia Epidemiológica", revenue: 12500, unit: "€/mes", description: "Contrato B2G 150k€/año" }
  ],
  insurance: [
    { id: 16, name: "Smart Claims Processing", revenue: 100000, unit: "€/mes", description: "1€ por claim (100k/mes)" },
    { id: 17, name: "Scoring Antifraude", revenue: 20000, unit: "€/mes", description: "0.10€ por consulta API" },
    { id: 18, name: "Financiación BNPL", revenue: 20000, unit: "€/mes", description: "2% sobre 1M€ financiado" },
    { id: 19, name: "Seguros Paramétricos", revenue: 20000, unit: "€/mes", description: "20€ comisión (1k pólizas/mes)" },
    { id: 20, name: "Factoring Facturas", revenue: 15000, unit: "€/mes", description: "3% sobre 500k€ adelantados" }
  ],
  patient: [
    { id: 21, name: "Wallet Premium", revenue: 14950, unit: "€/mes", description: "2.99€/mes (5k usuarios)" },
    { id: 22, name: "Segunda Opinión Internacional", revenue: 6000, unit: "€/mes", description: "20% comisión sobre 150€ (200 casos)" },
    { id: 23, name: "Turismo Dental", revenue: 50000, unit: "€/mes", description: "50€ por lead cualificado (1k/mes)" },
    { id: 24, name: "App Coaching Infantil", revenue: 10000, unit: "€/mes", description: "50€/mes B2B2C (200 clínicas)" },
    { id: 25, name: "Herencia Digital", revenue: 9900, unit: "€/mes", description: "99€ lifetime (100 ventas/mes)" }
  ]
};

export const revenueDistribution = [
  { name: "B2B Clínico", value: 127300, percentage: 24, color: "#3b82f6" },
  { name: "Industria", value: 122000, percentage: 23, color: "#8b5cf6" },
  { name: "Economía del Dato", value: 179167, percentage: 34, color: "#f97316" },
  { name: "InsurTech", value: 175000, percentage: 33, color: "#06b6d4" },
  { name: "Servicios Paciente", value: 90850, percentage: 17, color: "#10b981" }
];
