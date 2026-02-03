// Mock data for Tutor Voice KPI page

export const npsData = {
  current: 72,
  target: 80,
  trend: [
    { month: "Sep", value: 65 },
    { month: "Oct", value: 68 },
    { month: "Nov", value: 70 },
    { month: "Dic", value: 69 },
    { month: "Ene", value: 71 },
    { month: "Feb", value: 72 },
  ],
  distribution: {
    promoters: 52,
    passives: 28,
    detractors: 20,
  },
};

export const kpiSummary = {
  npsGlobal: 72,
  responsesThisMonth: 156,
  evolutionReports: 34,
  responseRate: 68,
  avgSatisfaction: 4.3,
};

export const evolutionReports = [
  {
    id: "REP-001",
    petName: "Luna",
    species: "Canino",
    treatment: "Cirugía de rodilla",
    status: "Excelente",
    statusColor: "emerald",
    date: "2026-02-01",
    tutorName: "María García",
    notes: "Recuperación completa, ya camina sin cojear",
  },
  {
    id: "REP-002",
    petName: "Max",
    species: "Canino",
    treatment: "Dermatitis atópica",
    status: "En progreso",
    statusColor: "amber",
    date: "2026-01-30",
    tutorName: "Carlos Ruiz",
    notes: "Mejora visible, continuar tratamiento 2 semanas más",
  },
  {
    id: "REP-003",
    petName: "Michi",
    species: "Felino",
    treatment: "Vacunación anual",
    status: "Completado",
    statusColor: "emerald",
    date: "2026-01-28",
    tutorName: "Ana López",
    notes: "Sin reacciones adversas, próxima cita en 12 meses",
  },
  {
    id: "REP-004",
    petName: "Rocky",
    species: "Canino",
    treatment: "Extracción dental",
    status: "En seguimiento",
    statusColor: "blue",
    date: "2026-01-25",
    tutorName: "Pedro Martín",
    notes: "Cicatrización normal, antibióticos completados",
  },
  {
    id: "REP-005",
    petName: "Nala",
    species: "Felino",
    treatment: "Esterilización",
    status: "Excelente",
    statusColor: "emerald",
    date: "2026-01-22",
    tutorName: "Laura Sánchez",
    notes: "Recuperación ejemplar, activa y con buen apetito",
  },
];

export const satisfactionCategories = [
  { category: "Atención médica", score: 4.6, responses: 142 },
  { category: "Tiempo de espera", score: 3.8, responses: 138 },
  { category: "Limpieza instalaciones", score: 4.5, responses: 145 },
  { category: "Comunicación", score: 4.4, responses: 140 },
  { category: "Relación calidad-precio", score: 4.1, responses: 136 },
  { category: "Facilidad de cita", score: 4.2, responses: 141 },
];

export const feedbackHighlights = {
  positive: [
    { text: "Excelente trato con mi perrito, muy profesionales", author: "María G.", date: "Hace 2 días" },
    { text: "El veterinario explicó todo con mucha paciencia", author: "Carlos R.", date: "Hace 3 días" },
    { text: "Instalaciones muy limpias y modernas", author: "Ana L.", date: "Hace 5 días" },
    { text: "La app del tutor es muy útil para el seguimiento", author: "Pedro M.", date: "Hace 1 semana" },
  ],
  negative: [
    { text: "Tuve que esperar más de 30 minutos", author: "Juan P.", date: "Hace 4 días" },
    { text: "Los precios podrían ser más accesibles", author: "Laura S.", date: "Hace 1 semana" },
  ],
};

export const aiInsights = [
  {
    type: "trend",
    title: "Tendencia Positiva en NPS",
    description: "El NPS ha aumentado un 10.7% en los últimos 6 meses. Mantener el enfoque en comunicación y seguimiento post-tratamiento.",
    priority: "low",
  },
  {
    type: "alert",
    title: "Área de Mejora: Tiempos de Espera",
    description: "El tiempo de espera es la categoría con menor puntuación (3.8/5). Considerar reforzar recepción en horas punta.",
    priority: "medium",
  },
  {
    type: "recommendation",
    title: "Incrementar Reportes de Evolución",
    description: "Solo el 22% de tratamientos tienen reporte de evolución. Enviar recordatorios automáticos a tutores aumentaría la tasa.",
    priority: "medium",
  },
];
