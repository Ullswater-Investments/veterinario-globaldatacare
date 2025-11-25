// =====================================================================
// ORALSPACE-X MASTER DATA FILE - CONSOLIDATED & AUDITED
// =====================================================================
// This file serves as the single source of truth for all mock/synthetic
// data used throughout the application for demos, testing, and development.
// All data structures maintain referential integrity and proper TypeScript types.

// =====================================================================
// TYPE DEFINITIONS
// =====================================================================

export interface Patient {
  id: string;
  full_name: string;
  did: string;
  wallet_status: {
    hasConsent: boolean;
    activePermissions: string[];
  };
  created_at: string;
}

export interface ClinicalEncounter {
  id: string;
  patient_id: string;
  doctor_id: string;
  encounter_date: string;
  data_source: string;
  risk_level: 'low' | 'medium' | 'high';
  fhir_bundle: Record<string, any>;
}

export interface LabOrder {
  id: string;
  patient_id: string;
  lab_tech_id: string;
  status: 'received' | 'design' | 'milling' | 'sent';
  dpp_payload: {
    material: string;
    origin: string;
    temperature?: string;
    blockchain_hash?: string;
  };
  created_at: string;
}

export interface SmartClaim {
  id: string;
  patient_id: string;
  treatment_code: string;
  amount: number;
  status: 'pending' | 'paid' | 'fraud_detected';
  evidence_url?: string;
  created_at: string;
}

export interface IoTDevice {
  id: string;
  name: string;
  device_type: 'stock' | 'machinery';
  status: 'active' | 'needs_order' | 'in_cycle';
  current_value: number;
  target_value: number;
  metadata: Record<string, any>;
}

export interface BusinessModel {
  id: number;
  name: string;
  revenue: number;
  unit: string;
  description: string;
}

export interface RevenueDistribution {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

// =====================================================================
// SECTION 1: CORE CLINICAL DATA
// =====================================================================

export const patients: Patient[] = [
  {
    id: 'p-001',
    full_name: 'Ana García Martínez',
    did: 'did:web:oralspace.health:ana-garcia',
    wallet_status: {
      hasConsent: true,
      activePermissions: ['Sanitas Clinic', 'Hospital La Paz']
    },
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: 'p-002',
    full_name: 'Carlos López Fernández',
    did: 'did:web:oralspace.health:carlos-lopez',
    wallet_status: {
      hasConsent: false,
      activePermissions: []
    },
    created_at: '2024-02-20T14:15:00Z'
  },
  {
    id: 'p-003',
    full_name: 'María Rodríguez Silva',
    did: 'did:web:oralspace.health:maria-rodriguez',
    wallet_status: {
      hasConsent: true,
      activePermissions: ['Clínica Dental Norte']
    },
    created_at: '2024-03-10T09:45:00Z'
  }
];

export const clinicalEncounters: ClinicalEncounter[] = [
  {
    id: 'enc-001',
    patient_id: 'p-001',
    doctor_id: 'doc-001',
    encounter_date: '2024-11-20T10:00:00Z',
    data_source: 'Hospital La Paz',
    risk_level: 'high',
    fhir_bundle: {
      resourceType: 'Bundle',
      entry: [
        {
          resource: {
            resourceType: 'Condition',
            code: { text: 'Endocarditis Bacteriana' },
            clinicalStatus: { coding: [{ code: 'active' }] }
          }
        }
      ]
    }
  },
  {
    id: 'enc-002',
    patient_id: 'p-002',
    doctor_id: 'doc-001',
    encounter_date: '2024-11-22T11:30:00Z',
    data_source: 'Clínica Dental Norte',
    risk_level: 'low',
    fhir_bundle: {
      resourceType: 'Bundle',
      entry: [
        {
          resource: {
            resourceType: 'Procedure',
            code: { text: 'Limpieza Dental' }
          }
        }
      ]
    }
  },
  {
    id: 'enc-003',
    patient_id: 'p-003',
    doctor_id: 'doc-002',
    encounter_date: '2024-11-23T15:00:00Z',
    data_source: 'Sanitas Clinic',
    risk_level: 'medium',
    fhir_bundle: {
      resourceType: 'Bundle',
      entry: [
        {
          resource: {
            resourceType: 'Observation',
            code: { text: 'Caries Profunda' }
          }
        }
      ]
    }
  }
];

export const labOrders: LabOrder[] = [
  {
    id: 'lab-001',
    patient_id: 'p-001',
    lab_tech_id: 'tech-001',
    status: 'milling',
    dpp_payload: {
      material: 'Zirconio',
      origin: 'Alemania',
      temperature: '1450°C',
      blockchain_hash: '0xabc123def456'
    },
    created_at: '2024-11-20T12:00:00Z'
  },
  {
    id: 'lab-002',
    patient_id: 'p-002',
    lab_tech_id: 'tech-001',
    status: 'design',
    dpp_payload: {
      material: 'PMMA',
      origin: 'España'
    },
    created_at: '2024-11-22T14:30:00Z'
  },
  {
    id: 'lab-003',
    patient_id: 'p-003',
    lab_tech_id: 'tech-002',
    status: 'sent',
    dpp_payload: {
      material: 'Zirconio',
      origin: 'Suiza',
      temperature: '1500°C',
      blockchain_hash: '0xdef789ghi012'
    },
    created_at: '2024-11-21T10:00:00Z'
  }
];

export const smartClaims: SmartClaim[] = [
  {
    id: 'claim-001',
    patient_id: 'p-001',
    treatment_code: 'D2392',
    amount: 150.50,
    status: 'paid',
    evidence_url: 'https://storage.oralspace.health/evidence/claim-001.jpg',
    created_at: '2024-11-20T16:00:00Z'
  },
  {
    id: 'claim-002',
    patient_id: 'p-002',
    treatment_code: 'D0120',
    amount: 85.00,
    status: 'pending',
    created_at: '2024-11-22T17:30:00Z'
  },
  {
    id: 'claim-003',
    patient_id: 'p-003',
    treatment_code: 'D6010',
    amount: 1250.00,
    status: 'fraud_detected',
    evidence_url: 'https://storage.oralspace.health/evidence/claim-003.jpg',
    created_at: '2024-11-23T11:00:00Z'
  }
];

export const iotDevices: IoTDevice[] = [
  {
    id: 'iot-001',
    name: 'Autoclave B',
    device_type: 'machinery',
    status: 'in_cycle',
    current_value: 121,
    target_value: 134,
    metadata: {
      temperature: '121°C',
      pressure: '2.1 bar',
      timeRemaining: '15min'
    }
  },
  {
    id: 'iot-002',
    name: 'Stock Implantes Straumann',
    device_type: 'stock',
    status: 'needs_order',
    current_value: 8,
    target_value: 50,
    metadata: {
      supplier: 'Straumann',
      reorderLevel: 10,
      lastOrder: '2024-11-01'
    }
  },
  {
    id: 'iot-003',
    name: 'Refrigerador Anestésicos',
    device_type: 'machinery',
    status: 'active',
    current_value: 4,
    target_value: 4,
    metadata: {
      temperature: '4°C',
      humidity: '45%'
    }
  }
];

// =====================================================================
// SECTION 2: INNOVATION LABS DATA
// =====================================================================

// 2.1 ESG & Sostenibilidad
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

// 2.2 Microbioma (Bio-Genomics)
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

// 2.3 Forense (DVI - Disaster Victim Identification)
export const forensicMatch = {
  searchQuery: "Implant Straumann #LOTE-X",
  status: "Match Found",
  location: "Clínica Dental Norte",
  patientHash: "0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
  policeCaseId: "INTERPOL-RED-2024",
  coordinates: { lat: 40.4168, lng: -3.7038 },
  matchConfidence: 98.5
};

// 2.4 InsurTech (Pay-as-you-Brush Telemetry)
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

// 2.5 Sports IoT (Mouthguard Telemetry)
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

// =====================================================================
// SECTION 3: BUSINESS MODELS DATA (25 Revenue Streams)
// =====================================================================

export const businessModels: {
  clinical: BusinessModel[];
  industry: BusinessModel[];
  data: BusinessModel[];
  insurance: BusinessModel[];
  patient: BusinessModel[];
} = {
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

export const revenueDistribution: RevenueDistribution[] = [
  { name: "B2B Clínico", value: 127300, percentage: 24, color: "#3b82f6" },
  { name: "Industria", value: 122000, percentage: 23, color: "#8b5cf6" },
  { name: "Economía del Dato", value: 179167, percentage: 34, color: "#f97316" },
  { name: "InsurTech", value: 175000, percentage: 33, color: "#06b6d4" },
  { name: "Servicios Paciente", value: 90850, percentage: 17, color: "#10b981" }
];

// =====================================================================
// INTEGRITY CHECKS (Development Only)
// =====================================================================

// Verify all patient IDs referenced in other entities exist
const patientIds = new Set(patients.map(p => p.id));

const checkReferentialIntegrity = () => {
  const errors: string[] = [];

  clinicalEncounters.forEach(enc => {
    if (!patientIds.has(enc.patient_id)) {
      errors.push(`ClinicalEncounter ${enc.id} references non-existent patient ${enc.patient_id}`);
    }
  });

  labOrders.forEach(order => {
    if (!patientIds.has(order.patient_id)) {
      errors.push(`LabOrder ${order.id} references non-existent patient ${order.patient_id}`);
    }
  });

  smartClaims.forEach(claim => {
    if (!patientIds.has(claim.patient_id)) {
      errors.push(`SmartClaim ${claim.id} references non-existent patient ${claim.patient_id}`);
    }
  });

  if (errors.length > 0) {
    console.warn('❌ REFERENTIAL INTEGRITY ERRORS:', errors);
  } else {
    console.log('✅ All referential integrity checks passed');
  }
};

// --- DATOS PARA CASOS DE NEGOCIO (VERTICAL 1: CLÍNICA) ---

// Caso 1: Marketplace de Derivación
export interface ReferralTransaction {
  id: string;
  from: string;
  to: string;
  patient: string;
  treatment: string;
  value: number;
  commission: number;
  status: 'Completed' | 'In Progress' | 'Pending';
}

export const referralTransactions: ReferralTransaction[] = [
  { id: "REF-001", from: "Clínica Dental Norte", to: "Dr. Maxilofacial Sur", patient: "Ana García", treatment: "Cirugía Ortognática", value: 3500, commission: 105, status: "Completed" },
  { id: "REF-002", from: "Centro Salud Oeste", to: "Ortodoncia Avanzada", patient: "Luis Pérez", treatment: "Invisalign Full", value: 4200, commission: 126, status: "In Progress" },
  { id: "REF-003", from: "Dra. López General", to: "PerioExpert", patient: "Marta Ruiz", treatment: "Injerto Encía", value: 800, commission: 24, status: "Pending" },
  { id: "REF-004", from: "Clínica Dental Centro", to: "Implantología Avanzada", patient: "Carlos Martín", treatment: "Implante Dental", value: 1800, commission: 54, status: "Completed" },
  { id: "REF-005", from: "Dental Plus Madrid", to: "Endodoncia Especializada", patient: "Laura Sánchez", treatment: "Endodoncia Molar", value: 600, commission: 18, status: "Completed" },
];

// Caso 2: Teledentistería SaaS
export interface TeledentistryMetrics {
  totalClinics: number;
  activeSessionsNow: number;
  mrr: number;
  churnRate: number;
  recentCalls: {
    id: string;
    clinic: string;
    duration: string;
    rating: number;
    type: string;
  }[];
}

export const teledentistryMetrics: TeledentistryMetrics = {
  totalClinics: 215,
  activeSessionsNow: 42,
  mrr: 21285,
  churnRate: 1.2,
  recentCalls: [
    { id: "CALL-99", clinic: "VitalDent Madrid", duration: "12:30", rating: 5, type: "Triage" },
    { id: "CALL-98", clinic: "Sanitas BCN", duration: "08:15", rating: 4, type: "Post-Op" },
    { id: "CALL-97", clinic: "Clínica Dental Norte", duration: "15:45", rating: 5, type: "Consulta" },
    { id: "CALL-96", clinic: "Dental Plus Valencia", duration: "09:20", rating: 4, type: "Seguimiento" },
  ]
};

// Caso 3: Almacenamiento Federado
export interface StorageComparison {
  totalStoredTB: number;
  awsCost: number;
  oralSpaceCost: number;
  savings: number;
  nodeDistribution: {
    region: string;
    usage: string;
    status: 'Online' | 'Syncing' | 'Offline';
  }[];
}

export const storageComparison: StorageComparison = {
  totalStoredTB: 540,
  awsCost: 12420,
  oralSpaceCost: 5400,
  savings: 7020,
  nodeDistribution: [
    { region: "Madrid Node", usage: "45%", status: "Online" },
    { region: "Paris Node", usage: "78%", status: "Online" },
    { region: "Berlin Node", usage: "30%", status: "Syncing" },
    { region: "Lisboa Node", usage: "62%", status: "Online" },
  ]
};

// Caso 4: API Diagnóstico IA
export interface ApiUsageLog {
  timestamp: string;
  endpoint: string;
  latency: string;
  status: number;
  cost: number;
}

export const apiUsageLog: ApiUsageLog[] = [
  { timestamp: "10:00:01", endpoint: "/analyze/caries", latency: "120ms", status: 200, cost: 0.50 },
  { timestamp: "10:00:05", endpoint: "/analyze/perio", latency: "350ms", status: 200, cost: 0.75 },
  { timestamp: "10:00:12", endpoint: "/analyze/ortho", latency: "900ms", status: 200, cost: 1.20 },
  { timestamp: "10:00:15", endpoint: "/analyze/caries", latency: "110ms", status: 200, cost: 0.50 },
  { timestamp: "10:00:18", endpoint: "/analyze/endodoncia", latency: "280ms", status: 200, cost: 0.65 },
  { timestamp: "10:00:22", endpoint: "/analyze/caries", latency: "95ms", status: 200, cost: 0.50 },
];

// Caso 5: Gestión Stock IoT
export interface StockAutomation {
  id: string;
  item: string;
  supplier: string;
  quantity: number;
  value: number;
  fee: number;
  trigger: string;
}

export const stockAutomations: StockAutomation[] = [
  { id: "ORD-550", item: "Implante Straumann BLX", supplier: "Straumann Group", quantity: 10, value: 2500, fee: 37.5, trigger: "Low Stock Sensor" },
  { id: "ORD-551", item: "Guantes Nitrilo L", supplier: "Henry Schein", quantity: 50, value: 500, fee: 7.5, trigger: "Weekly Refill" },
  { id: "ORD-552", item: "Composite A2", supplier: "3M ESPE", quantity: 5, value: 300, fee: 4.5, trigger: "AI Prediction" },
  { id: "ORD-553", item: "Anestesia Articaína", supplier: "Inibsa Dental", quantity: 20, value: 180, fee: 2.7, trigger: "Low Stock Sensor" },
  { id: "ORD-554", item: "Puntas Ultrasonidos", supplier: "NSK Europe", quantity: 8, value: 240, fee: 3.6, trigger: "Monthly Reorder" },
];

// --- DATOS PARA CASOS DE NEGOCIO (VERTICAL 2: INDUSTRIA) ---

// Caso 6: Pasaportes Digitales (DPP)
export interface DppIssuance {
  id: string;
  product: string;
  batch: string;
  timestamp: string;
  hash: string;
  fee: number;
}

export const dppIssuanceLog: DppIssuance[] = [
  { id: "DPP-8821", product: "Implante Titanio Grade 4", batch: "LOT-99X", timestamp: "10:05:22", hash: "0x7f...a1", fee: 2.00 },
  { id: "DPP-8822", product: "Pilar Zirconia", batch: "LOT-88Y", timestamp: "10:05:45", hash: "0x8b...c2", fee: 2.00 },
  { id: "DPP-8823", product: "Corona Monolítica", batch: "LOT-77Z", timestamp: "10:06:10", hash: "0x9c...d3", fee: 2.00 },
  { id: "DPP-8824", product: "Implante Titanio Grade 4", batch: "LOT-99X", timestamp: "10:06:35", hash: "0x1d...e4", fee: 2.00 },
  { id: "DPP-8825", product: "Tornillo Protésico", batch: "LOT-66W", timestamp: "10:07:00", hash: "0x2e...f5", fee: 2.00 },
  { id: "DPP-8826", product: "Pilar Zirconia", batch: "LOT-88Y", timestamp: "10:07:25", hash: "0x3f...g6", fee: 2.00 },
];

// Caso 7: Anti-Falsificación (Brand Protection)
export interface SecurityAlert {
  id: string;
  location: string;
  product: string;
  status: 'FAKE DETECTED' | 'Authentic' | 'Grey Market';
  risk: 'Critical' | 'Safe' | 'Medium';
  timestamp: string;
}

export const securityAlerts: SecurityAlert[] = [
  { id: "SEC-001", location: "Shanghai, CN", product: "Straumann BLX", status: "FAKE DETECTED", risk: "Critical", timestamp: "Hace 2 min" },
  { id: "SEC-002", location: "Madrid, ES", product: "Nobel Active", status: "Authentic", risk: "Safe", timestamp: "Hace 5 min" },
  { id: "SEC-003", location: "Sao Paulo, BR", product: "Straumann BLX", status: "Grey Market", risk: "Medium", timestamp: "Hace 12 min" },
  { id: "SEC-004", location: "Dubai, AE", product: "Dentsply Astra", status: "Authentic", risk: "Safe", timestamp: "Hace 18 min" },
  { id: "SEC-005", location: "Mumbai, IN", product: "Nobel Biocare", status: "FAKE DETECTED", risk: "Critical", timestamp: "Hace 25 min" },
];

// Caso 8: DRM Impresión 3D
export interface DrmUnlock {
  designId: string;
  clinic: string;
  printer: string;
  status: 'Unlocked' | 'Blocked (No License)';
  fee: number;
}

export const drmUnlockLog: DrmUnlock[] = [
  { designId: "STL-5501", clinic: "Clínica Dental Norte", printer: "Formlabs 3B", status: "Unlocked", fee: 5.00 },
  { designId: "STL-5502", clinic: "Lab Pro Madrid", printer: "SprintRay Pro", status: "Unlocked", fee: 5.00 },
  { designId: "STL-5503", clinic: "Dr. Smile", printer: "Unknown Device", status: "Blocked (No License)", fee: 0.00 },
  { designId: "STL-5504", clinic: "Dental Plus", printer: "Formlabs 3B", status: "Unlocked", fee: 5.00 },
  { designId: "STL-5505", clinic: "Centro Odontológico", printer: "Asiga Max", status: "Unlocked", fee: 5.00 },
];

// Caso 9: Certificación ESG
export interface EsgCertification {
  entity: string;
  score: number;
  co2Reduction: string;
  badge: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  renewalDate: string;
}

export const esgCertifications: EsgCertification[] = [
  { entity: "Laboratorio Central", score: 94, co2Reduction: "-15%", badge: "Platinum", renewalDate: "2025-10" },
  { entity: "Clínica Vital", score: 82, co2Reduction: "-5%", badge: "Gold", renewalDate: "2025-06" },
  { entity: "Implantes Tech", score: 88, co2Reduction: "-10%", badge: "Gold", renewalDate: "2025-12" },
  { entity: "Lab Digital Pro", score: 76, co2Reduction: "-3%", badge: "Silver", renewalDate: "2025-08" },
  { entity: "Dental Manufacturing", score: 91, co2Reduction: "-12%", badge: "Platinum", renewalDate: "2025-11" },
];

// Caso 10: Publicidad Contextual
export interface AdCampaign {
  campaign: string;
  impressions: number;
  clicks: number;
  ctr: string;
  spend: number;
  cpm: number;
}

export const adCampaigns: AdCampaign[] = [
  { campaign: "Lanzamiento Zirconia X", impressions: 15400, clicks: 320, ctr: "2.1%", spend: 770, cpm: 50 },
  { campaign: "Promo Escáner Intraoral", impressions: 8200, clicks: 150, ctr: "1.8%", spend: 410, cpm: 50 },
  { campaign: "Implantes Premium", impressions: 12000, clicks: 280, ctr: "2.3%", spend: 600, cpm: 50 },
  { campaign: "Fresadora CAD/CAM", impressions: 6500, clicks: 110, ctr: "1.7%", spend: 325, cpm: 50 },
];

// --- DATOS PARA CASOS DE NEGOCIO (VERTICAL 3: DATOS) ---

// Caso 11: Datos Sintéticos Pharma
export interface SyntheticDataset {
  id: string;
  name: string;
  size: string;
  price: number;
  status: 'Ready' | 'Generating' | 'Sold';
  format: string;
  buyer?: string;
  progress?: number;
}

export const syntheticDatasets: SyntheticDataset[] = [
  { id: "DS-2024-A", name: "Cohorte Perio-Cardio", size: "10k Pacientes", price: 50000, status: "Ready", format: "FHIR JSON" },
  { id: "DS-2024-B", name: "Implantes Fallidos EU", size: "5k Pacientes", price: 50000, status: "Generating", format: "CSV/Parquet", progress: 85 },
  { id: "DS-2024-C", name: "Caries Infantil Pre-escolar", size: "20k Pacientes", price: 50000, status: "Sold", format: "FHIR JSON", buyer: "PharmaCorp" },
  { id: "DS-2024-D", name: "Ortodoncia Adultos", size: "15k Pacientes", price: 50000, status: "Ready", format: "Parquet" },
];

// Caso 12: Compute Federado
export interface ComputeNode {
  nodeId: string;
  status: 'Computing' | 'Idle' | 'Offline';
  task: string;
  cpu: string;
  earnings: number;
}

export const computeNodes: ComputeNode[] = [
  { nodeId: "Node-Paris-01", status: "Computing", task: "Train Model v2.1", cpu: "85%", earnings: 120.50 },
  { nodeId: "Node-Berlin-09", status: "Computing", task: "Train Model v2.1", cpu: "92%", earnings: 145.00 },
  { nodeId: "Node-Madrid-03", status: "Idle", task: "Waiting...", cpu: "5%", earnings: 0.00 },
  { nodeId: "Node-Lisboa-05", status: "Computing", task: "Train Model v2.1", cpu: "78%", earnings: 98.75 },
  { nodeId: "Node-Roma-12", status: "Offline", task: "Disconnected", cpu: "0%", earnings: 0.00 },
];

// Caso 13: Reclutamiento Ensayos
export interface RecruitmentStage {
  stage: string;
  count: number;
  value?: number;
}

export const recruitmentFunnel: RecruitmentStage[] = [
  { stage: "Total Base Pacientes", count: 150000 },
  { stage: "Criterio: Mujer >50 años", count: 45000 },
  { stage: "Criterio: Implante Zirconia", count: 3200 },
  { stage: "Criterio: Periimplantitis Activa", count: 150 },
  { stage: "Consentimiento Recibido", count: 50, value: 75000 },
];

// Caso 14: Informes RWE (Real World Evidence)
export interface RWEComparison {
  material: string;
  survivalRate: number;
  complications: number;
}

export const rweComparison: RWEComparison[] = [
  { material: "Marca A (Premium)", survivalRate: 98.5, complications: 1.2 },
  { material: "Marca B (Standard)", survivalRate: 94.2, complications: 4.5 },
  { material: "Marca C (Low Cost)", survivalRate: 89.1, complications: 9.8 },
];

// Caso 15: Vigilancia Epidemiológica
export interface EpidemicData {
  region: string;
  condition: string;
  level: 'High' | 'Medium' | 'Low';
  trend: string;
}

export const epidemicMapData: EpidemicData[] = [
  { region: "Andalucía", condition: "Caries Infantil", level: "High", trend: "+5%" },
  { region: "Cataluña", condition: "Fluorosis", level: "Low", trend: "-2%" },
  { region: "Madrid", condition: "Bruxismo", level: "Medium", trend: "+12%" },
  { region: "Valencia", condition: "Enfermedad Periodontal", level: "High", trend: "+8%" },
  { region: "Galicia", condition: "Erosión Dental", level: "Medium", trend: "+3%" },
];

// --- DATOS PARA CASOS DE NEGOCIO (VERTICAL 4: FINTECH) ---

// Caso 16: Smart Claims Processing
export interface ClaimQueue {
  id: string;
  treatment: string;
  amount: number;
  evidence: string;
  status: string;
  time: string;
  fee: number;
}

export const claimsQueue: ClaimQueue[] = [
  { id: "CLM-9091", treatment: "Endodoncia", amount: 250, evidence: "X-Ray + CDT Code", status: "Auto-Approved", time: "0.8s", fee: 1.00 },
  { id: "CLM-9092", treatment: "Implante Unitario", amount: 1200, evidence: "DPP Token", status: "Auto-Approved", time: "1.2s", fee: 1.00 },
  { id: "CLM-9093", treatment: "Ortodoncia Fase 1", amount: 800, evidence: "Missing Photo", status: "Rejected (Rule #4)", time: "0.5s", fee: 0.00 },
  { id: "CLM-9094", treatment: "Limpieza", amount: 60, evidence: "Verified", status: "Auto-Approved", time: "0.3s", fee: 1.00 },
  { id: "CLM-9095", treatment: "Corona Zirconia", amount: 450, evidence: "X-Ray + CDT Code", status: "Auto-Approved", time: "0.9s", fee: 1.00 },
];

// Caso 17: Scoring Antifraude
export interface FraudAlert {
  clinic: string;
  riskScore: number;
  flag: string;
  details: string;
}

export const fraudAlerts: FraudAlert[] = [
  { clinic: "Clínica Dental Este", riskScore: 98, flag: "Upselling Anomaly", details: "300% más obturaciones que la media regional." },
  { clinic: "Dr. Smith Practice", riskScore: 85, flag: "Phantom Patient", details: "Reclamación para paciente fallecido según registro civil." },
  { clinic: "Centro Salud Oeste", riskScore: 12, flag: "Low Risk", details: "Patrón normal." },
  { clinic: "Dental Plus Madrid", riskScore: 72, flag: "Volume Spike", details: "Incremento del 400% en tratamientos complejos último mes." },
];

// Caso 18: Financiación BNPL
export interface CreditProposal {
  patient: string;
  treatment: string;
  amount: number;
  risk: string;
  offer: string;
  commission: number;
}

export const creditProposals: CreditProposal[] = [
  { patient: "Carlos M.", treatment: "Invisalign", amount: 3500, risk: "Low (A+)", offer: "12x 291€ (0% TAE)", commission: 70.00 },
  { patient: "Lucía R.", treatment: "Rehabilitación Oral", amount: 12000, risk: "Medium (B)", offer: "24x 550€ (5% TAE)", commission: 240.00 },
  { patient: "Pedro S.", treatment: "Implantes Múltiples", amount: 8000, risk: "Low (A)", offer: "18x 444€ (2% TAE)", commission: 160.00 },
];

// Caso 19: Seguros Paramétricos
export interface ParametricPolicy {
  policyId: string;
  user: string;
  brushingScore: number;
  monthlyPremium: number;
  discountApplied: string;
  trigger: string;
}

export const parametricPolicies: ParametricPolicy[] = [
  { policyId: "POL-IoT-001", user: "Ana García", brushingScore: 94, monthlyPremium: 25.00, discountApplied: "-15%", trigger: "Score > 90" },
  { policyId: "POL-IoT-002", user: "Luis Pérez", brushingScore: 65, monthlyPremium: 35.00, discountApplied: "0%", trigger: "Score < 70" },
  { policyId: "POL-IoT-003", user: "María López", brushingScore: 88, monthlyPremium: 27.00, discountApplied: "-10%", trigger: "Score > 85" },
  { policyId: "POL-IoT-004", user: "Jorge Ruiz", brushingScore: 52, monthlyPremium: 40.00, discountApplied: "+10%", trigger: "Score < 60" },
];

// Caso 20: Factoring Facturas
export interface FactoringInvoice {
  id: string;
  payer: string;
  amount: number;
  dueIn: string;
  advanceOffer: number;
  fee: number;
}

export const factoringInvoices: FactoringInvoice[] = [
  { id: "INV-2024-001", payer: "Sanitas", amount: 15000, dueIn: "60 days", advanceOffer: 14550, fee: 450 },
  { id: "INV-2024-002", payer: "DKV Seguros", amount: 4200, dueIn: "45 days", advanceOffer: 4074, fee: 126 },
  { id: "INV-2024-003", payer: "Mapfre", amount: 8500, dueIn: "30 days", advanceOffer: 8245, fee: 255 },
  { id: "INV-2024-004", payer: "Adeslas", amount: 6800, dueIn: "90 days", advanceOffer: 6596, fee: 204 },
  { id: "INV-2024-005", payer: "Asisa", amount: 3200, dueIn: "45 days", advanceOffer: 3104, fee: 96 },
];

// Run integrity check in development
if (import.meta.env.DEV) {
  checkReferentialIntegrity();
}
