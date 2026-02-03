// Mock data for Operational Flow KPI page

export const kpiSummary = {
  avgWaitTime: 12,
  waitTimeTarget: 10,
  consultationDeviation: 8,
  cabinetOccupancy: 78,
  dailyConsultations: 42,
  schedulingEfficiency: 91,
};

export const waitTimeData = {
  current: 12,
  target: 10,
  trend: [
    { day: "Lun", value: 10 },
    { day: "Mar", value: 14 },
    { day: "Mié", value: 11 },
    { day: "Jue", value: 12 },
    { day: "Vie", value: 15 },
    { day: "Sáb", value: 8 },
    { day: "Dom", value: 6 },
  ],
  byTimeSlot: [
    { slot: "09:00-11:00", avg: 8 },
    { slot: "11:00-13:00", avg: 12 },
    { slot: "13:00-15:00", avg: 10 },
    { slot: "15:00-17:00", avg: 14 },
    { slot: "17:00-19:00", avg: 16 },
    { slot: "19:00-21:00", avg: 11 },
  ],
};

export const consultationDuration = {
  planned: 25,
  actual: 27,
  deviation: "+8%",
  byType: [
    { type: "Consulta general", planned: 20, actual: 22 },
    { type: "Vacunación", planned: 15, actual: 14 },
    { type: "Cirugía menor", planned: 45, actual: 52 },
    { type: "Emergencia", planned: 30, actual: 38 },
    { type: "Revisión", planned: 15, actual: 16 },
  ],
  byVet: [
    { name: "Dr. García", avg: 24, cases: 12 },
    { name: "Dra. López", avg: 28, cases: 10 },
    { name: "Dr. Martín", avg: 26, cases: 11 },
    { name: "Dra. Ruiz", avg: 30, cases: 9 },
  ],
};

export const cabinetOccupancy = {
  current: 78,
  heatmap: [
    // Lunes a Domingo, franjas horarias
    { day: "Lun", slots: [60, 75, 85, 90, 95, 80, 45] },
    { day: "Mar", slots: [65, 80, 90, 95, 98, 85, 50] },
    { day: "Mié", slots: [55, 70, 80, 85, 90, 75, 40] },
    { day: "Jue", slots: [60, 75, 85, 88, 92, 78, 42] },
    { day: "Vie", slots: [70, 85, 95, 98, 100, 90, 55] },
    { day: "Sáb", slots: [50, 65, 75, 80, 70, 45, 20] },
    { day: "Dom", slots: [30, 40, 50, 55, 45, 25, 10] },
  ],
  timeSlots: ["09-11", "11-13", "13-15", "15-17", "17-19", "19-21", "21-23"],
  alerts: [
    { day: "Mar", slot: "17:00-19:00", level: "critical", message: "Saturación máxima (98%)" },
    { day: "Vie", slot: "15:00-17:00", level: "critical", message: "Capacidad completa (100%)" },
    { day: "Vie", slot: "17:00-19:00", level: "warning", message: "Alta ocupación (90%)" },
  ],
};

export const bottlenecks = [
  {
    id: 1,
    area: "Recepción",
    issue: "Acumulación de pacientes entre 16:00-18:00",
    impact: "Alto",
    impactColor: "red",
    suggestion: "Añadir un auxiliar en turno de tarde los martes y viernes",
    detectedAt: "2026-02-01",
  },
  {
    id: 2,
    area: "Laboratorio",
    issue: "Retraso en resultados de analíticas urgentes",
    impact: "Medio",
    impactColor: "amber",
    suggestion: "Priorizar muestras urgentes con código de color",
    detectedAt: "2026-01-28",
  },
  {
    id: 3,
    area: "Quirófano",
    issue: "Tiempo de limpieza entre cirugías excede el estándar",
    impact: "Medio",
    impactColor: "amber",
    suggestion: "Revisar protocolo de desinfección y asignar personal dedicado",
    detectedAt: "2026-01-25",
  },
];

export const loadForecast = {
  next24h: [
    { hour: "08:00", predicted: 3, confidence: 85 },
    { hour: "09:00", predicted: 5, confidence: 90 },
    { hour: "10:00", predicted: 7, confidence: 88 },
    { hour: "11:00", predicted: 8, confidence: 85 },
    { hour: "12:00", predicted: 6, confidence: 82 },
    { hour: "13:00", predicted: 4, confidence: 80 },
    { hour: "14:00", predicted: 3, confidence: 78 },
    { hour: "15:00", predicted: 5, confidence: 85 },
    { hour: "16:00", predicted: 8, confidence: 90 },
    { hour: "17:00", predicted: 10, confidence: 92 },
    { hour: "18:00", predicted: 9, confidence: 88 },
    { hour: "19:00", predicted: 6, confidence: 85 },
    { hour: "20:00", predicted: 4, confidence: 80 },
  ],
  peakHours: ["10:00-11:00", "17:00-18:00"],
  recommendation: "Reforzar personal en horario pico de tarde (16:00-19:00)",
};

export const aiInsights = [
  {
    type: "alert",
    title: "Riesgo de Saturación: Martes Tarde",
    description: "Se prevé un aumento del 20% en tiempos de espera los martes entre 16:00-19:00. Considerar refuerzo de recepción.",
    priority: "high",
  },
  {
    type: "trend",
    title: "Mejora en Eficiencia de Programación",
    description: "La eficiencia de programación ha subido del 87% al 91% en el último mes gracias a la optimización de citas.",
    priority: "low",
  },
  {
    type: "recommendation",
    title: "Optimizar Cirugías Menores",
    description: "Las cirugías menores exceden el tiempo planificado en un 15%. Revisar tiempos de preparación pre-quirúrgica.",
    priority: "medium",
  },
];
