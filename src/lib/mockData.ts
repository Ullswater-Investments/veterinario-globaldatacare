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
