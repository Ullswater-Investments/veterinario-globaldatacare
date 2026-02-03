// Mock data for Veterinary Doctor Panel

export interface Appointment {
  id: string;
  time: string;
  patientName: string;
  species: string;
  reason: string;
  status: "completed" | "in-progress" | "pending" | "cancelled";
  duration: number; // minutes
}

export interface HospitalizedPatient {
  id: string;
  patientName: string;
  species: string;
  condition: string;
  status: "critical" | "stable" | "recovering";
  nextMedication: string;
  minutesToMed: number;
  cageNumber: string;
}

export interface AISuggestion {
  id: string;
  patientName: string;
  suggestion: string;
  confidence: number;
  timestamp: string;
  reviewed: boolean;
}

export interface PerformanceMetric {
  date: string;
  consultations: number;
  avgDuration: number;
}

export const vetProfile = {
  name: "Dr. Carlos Fernández",
  specialty: "Medicina Interna",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
  licenseNumber: "COL-VET-28456",
};

export const todayStats = {
  completedConsultations: 8,
  totalScheduled: 12,
  nextAppointmentIn: 15, // minutes
  hospitalized: 4,
};

export const todayAppointments: Appointment[] = [
  { id: "apt-001", time: "09:00", patientName: "Luna", species: "Canino", reason: "Vacunación", status: "completed", duration: 20 },
  { id: "apt-002", time: "09:30", patientName: "Michi", species: "Felino", reason: "Dermatitis", status: "completed", duration: 35 },
  { id: "apt-003", time: "10:15", patientName: "Rocky", species: "Canino", reason: "Cojera", status: "completed", duration: 45 },
  { id: "apt-004", time: "11:00", patientName: "Nala", species: "Felino", reason: "Revisión", status: "completed", duration: 25 },
  { id: "apt-005", time: "11:30", patientName: "Max", species: "Canino", reason: "Vómitos", status: "completed", duration: 30 },
  { id: "apt-006", time: "12:15", patientName: "Pelusa", species: "Felino", reason: "Esterilización", status: "completed", duration: 60 },
  { id: "apt-007", time: "16:00", patientName: "Thor", species: "Canino", reason: "Otitis", status: "completed", duration: 25 },
  { id: "apt-008", time: "16:30", patientName: "Simba", species: "Felino", reason: "Control peso", status: "completed", duration: 20 },
  { id: "apt-009", time: "17:00", patientName: "Bella", species: "Canino", reason: "Alergia", status: "in-progress", duration: 0 },
  { id: "apt-010", time: "17:30", patientName: "Cleo", species: "Felino", reason: "Vacunación", status: "pending", duration: 0 },
  { id: "apt-011", time: "18:00", patientName: "Duke", species: "Canino", reason: "Revisión post-op", status: "pending", duration: 0 },
  { id: "apt-012", time: "18:30", patientName: "Lola", species: "Canino", reason: "Limpieza dental", status: "pending", duration: 0 },
];

export const hospitalizedPatients: HospitalizedPatient[] = [
  { id: "hosp-001", patientName: "Bruno", species: "Canino", condition: "Post-cirugía", status: "stable", nextMedication: "Antibiótico IV", minutesToMed: 45, cageNumber: "A-03" },
  { id: "hosp-002", patientName: "Whiskers", species: "Felino", condition: "Insuficiencia renal", status: "critical", nextMedication: "Fluidoterapia", minutesToMed: 12, cageNumber: "B-01" },
  { id: "hosp-003", patientName: "Toby", species: "Canino", condition: "Pancreatitis", status: "recovering", nextMedication: "Antieméticos", minutesToMed: 90, cageNumber: "A-05" },
  { id: "hosp-004", patientName: "Mía", species: "Felino", condition: "Trauma", status: "stable", nextMedication: "Analgésico", minutesToMed: 30, cageNumber: "B-02" },
];

export const aiSuggestions: AISuggestion[] = [
  { id: "ai-001", patientName: "Bella", suggestion: "Considerar test de alergia ambiental basado en patrón estacional de síntomas", confidence: 87, timestamp: "2026-02-03T16:55:00", reviewed: false },
  { id: "ai-002", patientName: "Rocky", suggestion: "Radiografía de cadera recomendada - patrón de marcha sugiere displasia temprana", confidence: 92, timestamp: "2026-02-03T10:30:00", reviewed: true },
  { id: "ai-003", patientName: "Whiskers", suggestion: "Ajustar dosis de fluidoterapia según últimos valores de creatinina", confidence: 78, timestamp: "2026-02-03T14:20:00", reviewed: false },
];

export const performanceData: PerformanceMetric[] = [
  { date: "05-Ene", consultations: 10, avgDuration: 28 },
  { date: "12-Ene", consultations: 12, avgDuration: 32 },
  { date: "19-Ene", consultations: 9, avgDuration: 35 },
  { date: "26-Ene", consultations: 11, avgDuration: 30 },
  { date: "02-Feb", consultations: 8, avgDuration: 29 },
];

export const performanceMetrics = {
  avgConsultationTime: 28, // minutes
  clinicAverage: 32, // minutes
  diagnosisAccuracy: 94.2, // percentage
  reschedulingRate: 8.5, // percentage
  patientSatisfaction: 4.7, // out of 5
};

export const aiAccuracyHistory = {
  overall: 89.3,
  lastMonth: 91.2,
  totalSuggestions: 156,
  acceptedSuggestions: 139,
};
