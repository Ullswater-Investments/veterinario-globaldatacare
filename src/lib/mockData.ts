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

// Run integrity check in development
if (import.meta.env.DEV) {
  checkReferentialIntegrity();
}
