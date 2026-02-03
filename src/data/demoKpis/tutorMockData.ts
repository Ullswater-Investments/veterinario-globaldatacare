// Mock data for Pet Owner/Guardian Panel

export interface Pet {
  id: string;
  name: string;
  species: "Canino" | "Felino" | "Exótico";
  breed: string;
  photoUrl: string;
  currentWeight: number;
  idealWeight: number;
  wellnessScore: number;
  nextVaccine: { name: string; dueDate: string };
  nextAppointment: { reason: string; date: string } | null;
}

export interface ExpenseCategory {
  category: string;
  amount: number;
  color: string;
}

export interface PrivacyConnection {
  clinicName: string;
  accessLevel: "full" | "limited" | "readonly";
  lastAccess: string;
  status: "active" | "pending" | "revoked";
}

export interface DataToken {
  id: string;
  type: string;
  earnedTokens: number;
  date: string;
}

export const tutorProfile = {
  name: "María García López",
  email: "maria.garcia@email.com",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  totalPets: 3,
  memberSince: "2021-03-15",
  loyaltyPoints: 2450,
};

export const pets: Pet[] = [
  {
    id: "pet-001",
    name: "Luna",
    species: "Canino",
    breed: "Golden Retriever",
    photoUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=200&h=200&fit=crop",
    currentWeight: 28.5,
    idealWeight: 30,
    wellnessScore: 9,
    nextVaccine: { name: "Rabia", dueDate: "2026-03-15" },
    nextAppointment: { reason: "Revisión anual", date: "2026-02-20" },
  },
  {
    id: "pet-002",
    name: "Michi",
    species: "Felino",
    breed: "Europeo Común",
    photoUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop",
    currentWeight: 4.2,
    idealWeight: 4.5,
    wellnessScore: 8,
    nextVaccine: { name: "Triple Felina", dueDate: "2026-04-10" },
    nextAppointment: null,
  },
  {
    id: "pet-003",
    name: "Coco",
    species: "Exótico",
    breed: "Loro Amazónico",
    photoUrl: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=200&h=200&fit=crop",
    currentWeight: 0.42,
    idealWeight: 0.45,
    wellnessScore: 7,
    nextVaccine: { name: "Chequeo Aviar", dueDate: "2026-05-01" },
    nextAppointment: { reason: "Corte de plumas", date: "2026-02-28" },
  },
];

export const yearlyExpenses: ExpenseCategory[] = [
  { category: "Vacunas", amount: 245, color: "hsl(var(--chart-1))" },
  { category: "Consultas", amount: 380, color: "hsl(var(--chart-2))" },
  { category: "Urgencias", amount: 150, color: "hsl(var(--chart-3))" },
  { category: "Alimentación", amount: 520, color: "hsl(var(--chart-4))" },
  { category: "Higiene", amount: 180, color: "hsl(var(--chart-5))" },
];

export const monthlyExpenseTrend = [
  { month: "Sep", amount: 85 },
  { month: "Oct", amount: 120 },
  { month: "Nov", amount: 95 },
  { month: "Dic", amount: 210 },
  { month: "Ene", amount: 145 },
  { month: "Feb", amount: 78 },
];

export const privacyConnections: PrivacyConnection[] = [
  {
    clinicName: "Clínica Veterinaria Central",
    accessLevel: "full",
    lastAccess: "2026-02-01",
    status: "active",
  },
  {
    clinicName: "Hospital Veterinario 24h",
    accessLevel: "limited",
    lastAccess: "2025-12-15",
    status: "active",
  },
  {
    clinicName: "Laboratorio VetLab",
    accessLevel: "readonly",
    lastAccess: "2025-11-20",
    status: "pending",
  },
];

export const dataTokens: DataToken[] = [
  { id: "tk-001", type: "Encuesta NPS", earnedTokens: 15, date: "2026-01-28" },
  { id: "tk-002", type: "Reporte Evolución", earnedTokens: 25, date: "2026-01-15" },
  { id: "tk-003", type: "Datos Anonimizados", earnedTokens: 50, date: "2026-01-01" },
];

export const loyaltyBenefits = [
  { name: "10% descuento vacunas", pointsRequired: 500, available: true },
  { name: "Consulta gratuita", pointsRequired: 2000, available: true },
  { name: "Pack higiene dental", pointsRequired: 3000, available: false },
];

export const federatedSavings = {
  totalSaved: 127.50,
  lastPurchase: "Pienso Premium Luna - Ahorro €8.50",
  purchases: 12,
};
