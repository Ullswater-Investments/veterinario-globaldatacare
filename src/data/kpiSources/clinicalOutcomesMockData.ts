// Mock data for Clinical Outcomes KPI page

export const kpiSummary = {
  surgicalSuccess: 96.2,
  minorComplications: 3.1,
  majorComplications: 0.7,
  reinterventions30d: 1.8,
  hospitalMortality: 0.3,
};

export const surgicalSuccessData = {
  global: 96.2,
  target: 95.0,
  trend: [
    { month: "Mar", value: 94.8 },
    { month: "Abr", value: 95.2 },
    { month: "May", value: 95.5 },
    { month: "Jun", value: 95.1 },
    { month: "Jul", value: 95.8 },
    { month: "Ago", value: 96.0 },
    { month: "Sep", value: 95.7 },
    { month: "Oct", value: 96.1 },
    { month: "Nov", value: 96.3 },
    { month: "Dic", value: 96.0 },
    { month: "Ene", value: 96.4 },
    { month: "Feb", value: 96.2 },
  ],
  byType: [
    { type: "Esterilización", rate: 99.1, cases: 156 },
    { type: "Ortopedia", rate: 94.5, cases: 45 },
    { type: "Dental", rate: 98.2, cases: 89 },
    { type: "Oncología", rate: 88.3, cases: 24 },
    { type: "Oftalmología", rate: 95.8, cases: 32 },
    { type: "Tejidos blandos", rate: 96.7, cases: 78 },
  ],
};

export const complications = {
  summary: {
    minor: 3.1,
    major: 0.7,
    benchmark: { minor: 4.0, major: 1.0 },
  },
  byType: [
    { type: "Infección herida quirúrgica", count: 8, severity: "Menor", trend: "stable" },
    { type: "Reacción a anestesia", count: 3, severity: "Mayor", trend: "down" },
    { type: "Dehiscencia de sutura", count: 5, severity: "Menor", trend: "up" },
    { type: "Hemorragia post-op", count: 2, severity: "Mayor", trend: "stable" },
    { type: "Seroma", count: 12, severity: "Menor", trend: "stable" },
    { type: "Edema excesivo", count: 6, severity: "Menor", trend: "down" },
  ],
  monthlyTrend: [
    { month: "Sep", minor: 3.5, major: 0.9 },
    { month: "Oct", minor: 3.3, major: 0.8 },
    { month: "Nov", minor: 3.2, major: 0.7 },
    { month: "Dic", minor: 3.4, major: 0.8 },
    { month: "Ene", minor: 3.0, major: 0.6 },
    { month: "Feb", minor: 3.1, major: 0.7 },
  ],
};

export const reinterventions = {
  rate: 1.8,
  target: 2.0,
  cases: [
    {
      id: "REINT-001",
      originalProcedure: "Reparación de ligamento cruzado",
      reason: "Fallo de implante",
      daysAfter: 18,
      outcome: "Exitosa",
      date: "2026-01-15",
    },
    {
      id: "REINT-002",
      originalProcedure: "Esplenectomía",
      reason: "Hemorragia tardía",
      daysAfter: 5,
      outcome: "Exitosa",
      date: "2026-01-22",
    },
    {
      id: "REINT-003",
      originalProcedure: "Cirugía dental compleja",
      reason: "Absceso residual",
      daysAfter: 12,
      outcome: "Exitosa",
      date: "2026-01-28",
    },
  ],
  byCause: [
    { cause: "Complicación de herida", percentage: 35 },
    { cause: "Fallo de material", percentage: 20 },
    { cause: "Infección", percentage: 25 },
    { cause: "Hemorragia", percentage: 15 },
    { cause: "Otros", percentage: 5 },
  ],
};

export const diagnosticQuality = {
  confirmationRate: 94.2,
  modificationRate: 5.8,
  byPathology: [
    { pathology: "Tumores de piel", confirmed: 96, modified: 4 },
    { pathology: "Patología digestiva", confirmed: 92, modified: 8 },
    { pathology: "Problemas cardíacos", confirmed: 95, modified: 5 },
    { pathology: "Enfermedades renales", confirmed: 93, modified: 7 },
    { pathology: "Patología respiratoria", confirmed: 91, modified: 9 },
  ],
};

export const mortality = {
  rate: 0.3,
  benchmark: 0.5,
  trend: [
    { month: "Sep", value: 0.4 },
    { month: "Oct", value: 0.3 },
    { month: "Nov", value: 0.2 },
    { month: "Dic", value: 0.4 },
    { month: "Ene", value: 0.3 },
    { month: "Feb", value: 0.3 },
  ],
  analysis: [
    { cause: "Complicación anestésica", cases: 1, preventable: "Parcialmente" },
    { cause: "Patología avanzada al diagnóstico", cases: 2, preventable: "No" },
    { cause: "Fallo multiorgánico", cases: 1, preventable: "No" },
  ],
};

export const aiInsights = [
  {
    type: "trend",
    title: "Éxito Quirúrgico por Encima del Objetivo",
    description: "La tasa de éxito quirúrgico (96.2%) supera el benchmark del 95%. El protocolo de esterilización es ejemplar con 99.1% de éxito.",
    priority: "low",
  },
  {
    type: "alert",
    title: "Aumento en Dehiscencia de Sutura",
    description: "Se detecta tendencia al alza en casos de dehiscencia de sutura. Revisar material de sutura y técnica de cierre.",
    priority: "medium",
  },
  {
    type: "recommendation",
    title: "Mejorar Diagnóstico en Patología Respiratoria",
    description: "La tasa de modificación diagnóstica es mayor en patología respiratoria (9%). Considerar protocolo de segunda opinión.",
    priority: "medium",
  },
];
