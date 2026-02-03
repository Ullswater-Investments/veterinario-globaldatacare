// Mock data for Data Scientist/Researcher Panel

export interface Dataset {
  id: string;
  name: string;
  category: string;
  records: number;
  lastUpdated: string;
  revenue: number;
  status: "published" | "private" | "pending";
}

export interface FederatedModel {
  id: string;
  name: string;
  objective: string;
  progress: number;
  currentAccuracy: number;
  targetAccuracy: number;
  participatingNodes: number;
  status: "training" | "validating" | "deployed" | "paused";
}

export interface EpidemiologicalAlert {
  id: string;
  disease: string;
  region: string;
  incidenceRate: number;
  trend: "rising" | "stable" | "declining";
  severity: "high" | "medium" | "low";
}

export interface ScientificPublication {
  id: string;
  title: string;
  journal: string;
  citations: number;
  date: string;
  datasetUsed: string;
}

export interface RegionalIncidence {
  region: string;
  lat: number;
  lng: number;
  cases: number;
  disease: string;
}

export const researcherProfile = {
  name: "Dra. Elena Ruiz",
  institution: "Instituto de Investigación Veterinaria",
  specialty: "Epidemiología One Health",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
};

export const marketplaceStats = {
  publishedDatasets: 8,
  acquiredDatasets: 12,
  totalRevenue: 3450,
  pendingPayments: 280,
  licensedAlgorithms: 3,
};

export const datasets: Dataset[] = [
  { id: "ds-001", name: "Displasia Cadera Canina", category: "Ortopedia", records: 12500, lastUpdated: "2026-01-28", revenue: 890, status: "published" },
  { id: "ds-002", name: "Cardiomiopatía Felina", category: "Cardiología", records: 8200, lastUpdated: "2026-01-15", revenue: 650, status: "published" },
  { id: "ds-003", name: "Dermatitis Atópica", category: "Dermatología", records: 15800, lastUpdated: "2026-02-01", revenue: 1200, status: "published" },
  { id: "ds-004", name: "Leishmaniasis Regional", category: "Zoonosis", records: 4500, lastUpdated: "2026-01-20", revenue: 450, status: "published" },
  { id: "ds-005", name: "Obesidad Felina", category: "Nutrición", records: 9800, lastUpdated: "2026-01-10", revenue: 260, status: "pending" },
];

export const federatedModels: FederatedModel[] = [
  { id: "fm-001", name: "Hip Dysplasia Detector v3", objective: "Detección temprana displasia", progress: 78, currentAccuracy: 91.2, targetAccuracy: 95, participatingNodes: 23, status: "training" },
  { id: "fm-002", name: "Feline Cardiomyopathy Classifier", objective: "Clasificación MCH/MCD", progress: 100, currentAccuracy: 94.8, targetAccuracy: 93, participatingNodes: 18, status: "deployed" },
  { id: "fm-003", name: "Skin Lesion Analyzer", objective: "Análisis dermatológico", progress: 45, currentAccuracy: 82.5, targetAccuracy: 90, participatingNodes: 31, status: "training" },
  { id: "fm-004", name: "Zoonosis Risk Predictor", objective: "Predicción brotes One Health", progress: 62, currentAccuracy: 87.3, targetAccuracy: 92, participatingNodes: 15, status: "validating" },
];

export const epidemiologicalAlerts: EpidemiologicalAlert[] = [
  { id: "epi-001", disease: "Leishmaniasis", region: "Comunidad de Madrid", incidenceRate: 12.5, trend: "rising", severity: "high" },
  { id: "epi-002", disease: "Leptospirosis", region: "Galicia", incidenceRate: 3.2, trend: "stable", severity: "medium" },
  { id: "epi-003", disease: "Parvovirus Canino", region: "Andalucía", incidenceRate: 8.7, trend: "declining", severity: "medium" },
  { id: "epi-004", disease: "Gripe Aviar H5N1", region: "Cataluña", incidenceRate: 0.8, trend: "rising", severity: "high" },
];

export const regionalIncidences: RegionalIncidence[] = [
  { region: "Madrid", lat: 40.4168, lng: -3.7038, cases: 145, disease: "Leishmaniasis" },
  { region: "Barcelona", lat: 41.3851, lng: 2.1734, cases: 82, disease: "Dermatitis" },
  { region: "Valencia", lat: 39.4699, lng: -0.3763, cases: 67, disease: "Parvovirus" },
  { region: "Sevilla", lat: 37.3891, lng: -5.9845, cases: 93, disease: "Leishmaniasis" },
  { region: "Bilbao", lat: 43.263, lng: -2.935, cases: 28, disease: "Leptospirosis" },
  { region: "A Coruña", lat: 43.3623, lng: -8.4115, cases: 41, disease: "Leptospirosis" },
];

export const publications: ScientificPublication[] = [
  { id: "pub-001", title: "Federated Learning for Canine Hip Dysplasia Detection", journal: "Veterinary AI Journal", citations: 24, date: "2025-11-15", datasetUsed: "Displasia Cadera Canina" },
  { id: "pub-002", title: "One Health Approach to Leishmaniasis Surveillance in Spain", journal: "Zoonoses and Public Health", citations: 18, date: "2025-09-22", datasetUsed: "Leishmaniasis Regional" },
  { id: "pub-003", title: "Privacy-Preserving Analytics in Veterinary Networks", journal: "Digital Veterinary Medicine", citations: 31, date: "2025-07-10", datasetUsed: "Multi-dataset" },
];

export const ecosystemContribution = {
  totalTokens: 4580,
  algorithmsDeployed: 2,
  dataContributions: 156,
  peerReviews: 12,
  networkRank: "Gold Contributor",
};

export const datasetDistribution = [
  { category: "Ortopedia", count: 3, color: "hsl(var(--chart-1))" },
  { category: "Cardiología", count: 2, color: "hsl(var(--chart-2))" },
  { category: "Dermatología", count: 4, color: "hsl(var(--chart-3))" },
  { category: "Zoonosis", count: 2, color: "hsl(var(--chart-4))" },
  { category: "Nutrición", count: 1, color: "hsl(var(--chart-5))" },
];
