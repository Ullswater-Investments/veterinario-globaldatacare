// ============================================================
// Research Datasets - 20 Veterinary Datasets with Preview Data
// Bilingual: Spanish UI / English clinical fields
// ============================================================

export interface ResearchDataset {
  id: string;
  title: string;
  title_en: string;
  author: string;
  n: number;
  price: string;
  priceValue: number;
  type: string;
  quality: string;
  species: string;
  category: string;
  tags: string[];
  status: 'Ready' | 'Generating' | 'Sold';
  progress?: number;
  buyer?: string;
  description: string;
  description_en: string;
  previewData: Record<string, unknown>[];
  sampleUrl: string;
  createdAt: string;
  updatedAt: string;
  version: string;
  privacyLevel: string;
  snomed_codes?: string[];
}

export const researchDatasets: ResearchDataset[] = [
  // ============================================================
  // DATASET 1: Displasia Cadera PennHIP
  // ============================================================
  {
    id: "DS-VET-2024-001",
    title: "Cohorte Displasia Cadera PennHIP",
    title_en: "PennHIP Hip Dysplasia Cohort",
    author: "Universidad Complutense Madrid - Facultad Veterinaria",
    n: 3420,
    price: "950 Tokens",
    priceValue: 950,
    type: "DICOM + Scores",
    quality: "Gold Standard (PennHIP Certified)",
    species: "Canino",
    category: "Ortopedia",
    tags: ["Ortopedia", "Canino", "PennHIP", "DICOM", "Displasia"],
    status: "Ready",
    description: "Cohorte longitudinal de 3,420 perros evaluados con el método PennHIP para displasia de cadera. Incluye radiografías digitales estandarizadas, índices de distracción (DI) bilaterales, clasificación OFA, datos demográficos y seguimiento clínico a 24 meses.",
    description_en: "Longitudinal cohort of 3,420 dogs evaluated with PennHIP method for hip dysplasia. Includes standardized digital radiographs, bilateral distraction indices (DI), OFA classification, demographics and 24-month clinical follow-up.",
    sampleUrl: "/research/sample/DS-VET-2024-001",
    createdAt: "2024-01-15",
    updatedAt: "2025-01-20",
    version: "2.1",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["21522001", "73589002"],
    previewData: [
      { patient_id: "SYNTH-DC-001", species: "Canino", breed: "Pastor Alemán", age_months: 18, weight_kg: 34.2, pennhip_di_left: 0.42, pennhip_di_right: 0.45, ofa_grade: "Moderate", bilateral: true, treatment: "Manejo conservador", follow_up_months: 24 },
      { patient_id: "SYNTH-DC-002", species: "Canino", breed: "Golden Retriever", age_months: 24, weight_kg: 32.1, pennhip_di_left: 0.58, pennhip_di_right: 0.62, ofa_grade: "Severe", bilateral: true, treatment: "THR bilateral", follow_up_months: 18 },
      { patient_id: "SYNTH-DC-003", species: "Canino", breed: "Labrador Retriever", age_months: 14, weight_kg: 28.5, pennhip_di_left: 0.31, pennhip_di_right: 0.29, ofa_grade: "Mild", bilateral: true, treatment: "Fisioterapia", follow_up_months: 24 },
      { patient_id: "SYNTH-DC-004", species: "Canino", breed: "Rottweiler", age_months: 20, weight_kg: 45.8, pennhip_di_left: 0.55, pennhip_di_right: 0.48, ofa_grade: "Moderate", bilateral: true, treatment: "NSAID + Condroprotectores", follow_up_months: 12 },
      { patient_id: "SYNTH-DC-005", species: "Canino", breed: "Bulldog Francés", age_months: 36, weight_kg: 12.4, pennhip_di_left: 0.38, pennhip_di_right: 0.41, ofa_grade: "Mild", bilateral: true, treatment: "Control peso", follow_up_months: 6 },
    ]
  },

  // ============================================================
  // DATASET 2: Cardiomiopatía Dilatada Canina (DCM)
  // ============================================================
  {
    id: "DS-VET-2024-002",
    title: "Cardiomiopatía Dilatada Canina (DCM)",
    title_en: "Canine Dilated Cardiomyopathy Registry",
    author: "Hospital Veterinario Universitario de Zaragoza",
    n: 1850,
    price: "1100 Tokens",
    priceValue: 1100,
    type: "Echo + ECG",
    quality: "ACVIM Staging Validated",
    species: "Canino",
    category: "Cardiología",
    tags: ["Cardiología", "Canino", "DCM", "Ecocardiografía", "ECG", "Arritmias"],
    status: "Ready",
    description: "Registro multicéntrico de 1,850 perros diagnosticados con cardiomiopatía dilatada. Incluye ecocardiografías completas (modo M, 2D, Doppler), electrocardiogramas de 24h, estadificación ACVIM, terapias instauradas y supervivencia.",
    description_en: "Multicenter registry of 1,850 dogs diagnosed with dilated cardiomyopathy. Includes complete echocardiograms (M-mode, 2D, Doppler), 24h ECGs, ACVIM staging, therapies and survival data.",
    sampleUrl: "/research/sample/DS-VET-2024-002",
    createdAt: "2024-02-10",
    updatedAt: "2025-01-18",
    version: "1.8",
    privacyLevel: "Differential Privacy ε=0.5",
    snomed_codes: ["195021004", "29384001"],
    previewData: [
      { patient_id: "SYNTH-DCM-001", species: "Canino", breed: "Doberman", age_years: 6, sex: "M", weight_kg: 38.5, lvidd_mm: 58.2, lvids_mm: 48.5, fs_percent: 16.8, ef_percent: 32, la_ao_ratio: 1.8, arrhythmia: "VPCs", stage: "B2", therapy: "Pimobendan + Furosemida" },
      { patient_id: "SYNTH-DCM-002", species: "Canino", breed: "Gran Danés", age_years: 5, sex: "M", weight_kg: 62.1, lvidd_mm: 72.4, lvids_mm: 62.1, fs_percent: 14.2, ef_percent: 28, la_ao_ratio: 2.1, arrhythmia: "AF", stage: "C", therapy: "Pimobendan + Espironolactona + Digoxina" },
      { patient_id: "SYNTH-DCM-003", species: "Canino", breed: "Boxer", age_years: 8, sex: "F", weight_kg: 28.4, lvidd_mm: 52.1, lvids_mm: 42.8, fs_percent: 17.8, ef_percent: 35, la_ao_ratio: 1.6, arrhythmia: "VPCs frecuentes", stage: "B1", therapy: "Sotalol" },
      { patient_id: "SYNTH-DCM-004", species: "Canino", breed: "Irish Wolfhound", age_years: 4, sex: "M", weight_kg: 58.9, lvidd_mm: 68.5, lvids_mm: 58.2, fs_percent: 15.0, ef_percent: 30, la_ao_ratio: 1.9, arrhythmia: "SVT", stage: "B2", therapy: "Pimobendan + Enalapril" },
      { patient_id: "SYNTH-DCM-005", species: "Canino", breed: "Cocker Spaniel", age_years: 10, sex: "F", weight_kg: 14.2, lvidd_mm: 42.1, lvids_mm: 34.5, fs_percent: 18.1, ef_percent: 36, la_ao_ratio: 1.5, arrhythmia: "Ninguna", stage: "B1", therapy: "Monitorización" },
    ]
  },

  // ============================================================
  // DATASET 3: Enfermedad Renal Crónica Felina IRIS
  // ============================================================
  {
    id: "DS-VET-2024-003",
    title: "Enfermedad Renal Crónica Felina IRIS",
    title_en: "Feline Chronic Kidney Disease IRIS Registry",
    author: "Asociación AVEPA - Grupo Nefrología",
    n: 4200,
    price: "800 Tokens",
    priceValue: 800,
    type: "Labs + Staging",
    quality: "IRIS Guidelines Compliant",
    species: "Felino",
    category: "Nefrología",
    tags: ["Nefrología", "Felino", "ERC", "IRIS", "Creatinina", "SDMA"],
    status: "Ready",
    description: "Base de datos de 4,200 gatos con enfermedad renal crónica clasificados según directrices IRIS. Incluye analíticas seriadas (creatinina, SDMA, UPC), presión arterial, proteinuria, estadificación completa y respuesta al tratamiento.",
    description_en: "Database of 4,200 cats with chronic kidney disease classified per IRIS guidelines. Includes serial blood work (creatinine, SDMA, UPC), blood pressure, proteinuria, complete staging and treatment response.",
    sampleUrl: "/research/sample/DS-VET-2024-003",
    createdAt: "2024-03-05",
    updatedAt: "2025-01-22",
    version: "3.0",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["90688005", "709044004"],
    previewData: [
      { patient_id: "SYNTH-CKD-001", species: "Felino", breed: "Europeo Común", age_years: 12, sex: "F", weight_kg: 4.2, creatinine_mg_dl: 3.2, sdma_ug_dl: 28, upc_ratio: 0.8, blood_pressure_mmhg: 165, potassium_meq_l: 3.8, phosphorus_mg_dl: 6.2, iris_stage: "3", substage: "Proteinúrico/Hipertenso", diet: "Renal" },
      { patient_id: "SYNTH-CKD-002", species: "Felino", breed: "Persa", age_years: 14, sex: "M", weight_kg: 3.8, creatinine_mg_dl: 4.8, sdma_ug_dl: 42, upc_ratio: 1.2, blood_pressure_mmhg: 180, potassium_meq_l: 3.2, phosphorus_mg_dl: 8.5, iris_stage: "4", substage: "Proteinúrico/Hipertenso", diet: "Renal + Quelante fósforo" },
      { patient_id: "SYNTH-CKD-003", species: "Felino", breed: "Siamés", age_years: 10, sex: "F", weight_kg: 3.5, creatinine_mg_dl: 2.1, sdma_ug_dl: 18, upc_ratio: 0.3, blood_pressure_mmhg: 145, potassium_meq_l: 4.1, phosphorus_mg_dl: 4.8, iris_stage: "2", substage: "No proteinúrico/Normotenso", diet: "Senior" },
      { patient_id: "SYNTH-CKD-004", species: "Felino", breed: "Maine Coon", age_years: 8, sex: "M", weight_kg: 7.2, creatinine_mg_dl: 2.8, sdma_ug_dl: 22, upc_ratio: 0.5, blood_pressure_mmhg: 155, potassium_meq_l: 3.9, phosphorus_mg_dl: 5.5, iris_stage: "2", substage: "Borderline proteinúrico/Prehipertenso", diet: "Renal" },
      { patient_id: "SYNTH-CKD-005", species: "Felino", breed: "Ragdoll", age_years: 15, sex: "F", weight_kg: 4.8, creatinine_mg_dl: 5.2, sdma_ug_dl: 48, upc_ratio: 2.1, blood_pressure_mmhg: 195, potassium_meq_l: 2.9, phosphorus_mg_dl: 9.2, iris_stage: "4", substage: "Severamente proteinúrico/Hipertenso severo", diet: "Renal + Fluidoterapia SC" },
    ]
  },

  // ============================================================
  // DATASET 4: Mastocitoma Cutáneo (Grading Pataki)
  // ============================================================
  {
    id: "DS-VET-2024-004",
    title: "Mastocitoma Cutáneo - Grading Patnaik/Kiupel",
    title_en: "Cutaneous Mast Cell Tumor Grading Registry",
    author: "Servicio Anatomía Patológica - HVUZ",
    n: 2100,
    price: "1500 Tokens",
    priceValue: 1500,
    type: "Citología + Imágenes",
    quality: "Histopathology Confirmed",
    species: "Multi-especie",
    category: "Oncología",
    tags: ["Oncología", "Mastocitoma", "Patnaik", "Kiupel", "Citología", "Histopatología"],
    status: "Ready",
    description: "Registro de 2,100 mastocitomas cutáneos con clasificación dual Patnaik y Kiupel. Incluye imágenes citológicas e histológicas, índice mitótico, marcadores c-KIT, tratamiento quirúrgico/quimioterápico y supervivencia.",
    description_en: "Registry of 2,100 cutaneous mast cell tumors with dual Patnaik and Kiupel grading. Includes cytological and histological images, mitotic index, c-KIT markers, surgical/chemotherapy treatment and survival data.",
    sampleUrl: "/research/sample/DS-VET-2024-004",
    createdAt: "2024-03-20",
    updatedAt: "2025-01-15",
    version: "2.0",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["4079000", "127241009"],
    previewData: [
      { patient_id: "SYNTH-MCT-001", species: "Canino", breed: "Boxer", age_years: 8, location: "Tronco", size_cm: 2.5, patnaik_grade: "II", kiupel_grade: "Low", mitotic_index: 3, ckit_mutation: "Negativo", margins: "Limpios", treatment: "Escisión quirúrgica", survival_months: 36 },
      { patient_id: "SYNTH-MCT-002", species: "Canino", breed: "Labrador", age_years: 10, location: "Extremidad posterior", size_cm: 4.2, patnaik_grade: "III", kiupel_grade: "High", mitotic_index: 12, ckit_mutation: "Exon 11", margins: "Incompletos", treatment: "Cirugía + Toceranib", survival_months: 8 },
      { patient_id: "SYNTH-MCT-003", species: "Canino", breed: "Bulldog Francés", age_years: 6, location: "Cabeza", size_cm: 1.8, patnaik_grade: "II", kiupel_grade: "Low", mitotic_index: 2, ckit_mutation: "Negativo", margins: "Limpios", treatment: "Escisión quirúrgica", survival_months: 48 },
      { patient_id: "SYNTH-MCT-004", species: "Felino", breed: "Siamés", age_years: 12, location: "Pabellón auricular", size_cm: 0.8, patnaik_grade: "N/A", kiupel_grade: "Low", mitotic_index: 1, ckit_mutation: "Negativo", margins: "Limpios", treatment: "Escisión quirúrgica", survival_months: 60 },
      { patient_id: "SYNTH-MCT-005", species: "Canino", breed: "Golden Retriever", age_years: 9, location: "Inguinal", size_cm: 3.1, patnaik_grade: "II", kiupel_grade: "High", mitotic_index: 8, ckit_mutation: "Exon 8", margins: "Estrechos", treatment: "Cirugía + Vinblastina", survival_months: 14 },
    ]
  },

  // ============================================================
  // DATASET 5: Epilepsia Idiopática Canina
  // ============================================================
  {
    id: "DS-VET-2024-005",
    title: "Epilepsia Idiopática Canina",
    title_en: "Canine Idiopathic Epilepsy Cohort",
    author: "Hospital Clínico Veterinario UAB",
    n: 1200,
    price: "1200 Tokens",
    priceValue: 1200,
    type: "EEG + Historial",
    quality: "IVETF Tier II Criteria",
    species: "Canino",
    category: "Neurología",
    tags: ["Neurología", "Epilepsia", "Canino", "EEG", "Antiepilépticos", "Convulsiones"],
    status: "Ready",
    description: "Cohorte de 1,200 perros con epilepsia idiopática diagnosticada según criterios IVETF Tier II. Incluye registros EEG, frecuencia de crisis, tipos de convulsiones, respuesta a antiepilépticos y calidad de vida.",
    description_en: "Cohort of 1,200 dogs with idiopathic epilepsy diagnosed per IVETF Tier II criteria. Includes EEG recordings, seizure frequency, seizure types, antiepileptic response and quality of life scores.",
    sampleUrl: "/research/sample/DS-VET-2024-005",
    createdAt: "2024-04-01",
    updatedAt: "2025-01-10",
    version: "1.5",
    privacyLevel: "Differential Privacy ε=0.3",
    snomed_codes: ["313307000", "84757009"],
    previewData: [
      { patient_id: "SYNTH-EPI-001", species: "Canino", breed: "Border Collie", age_onset_years: 2.5, sex: "M", weight_kg: 18.5, seizure_type: "Tónico-clónica generalizada", frequency_monthly: 2.5, cluster_seizures: false, status_epilepticus: false, medication: "Fenobarbital 2.5mg/kg BID", response: "Controlado", qol_score: 85 },
      { patient_id: "SYNTH-EPI-002", species: "Canino", breed: "Pastor Belga", age_onset_years: 3.0, sex: "F", weight_kg: 25.2, seizure_type: "Focal con generalización", frequency_monthly: 4.0, cluster_seizures: true, status_epilepticus: false, medication: "Fenobarbital + Levetiracetam", response: "Parcialmente controlado", qol_score: 68 },
      { patient_id: "SYNTH-EPI-003", species: "Canino", breed: "Beagle", age_onset_years: 4.0, sex: "M", weight_kg: 12.8, seizure_type: "Tónico-clónica generalizada", frequency_monthly: 1.0, cluster_seizures: false, status_epilepticus: false, medication: "Imepitoin 20mg/kg BID", response: "Controlado", qol_score: 92 },
      { patient_id: "SYNTH-EPI-004", species: "Canino", breed: "Lagotto Romagnolo", age_onset_years: 1.5, sex: "F", weight_kg: 14.1, seizure_type: "Focal", frequency_monthly: 6.0, cluster_seizures: true, status_epilepticus: true, medication: "Fenobarbital + KBr + Levetiracetam", response: "Refractario", qol_score: 45 },
      { patient_id: "SYNTH-EPI-005", species: "Canino", breed: "Golden Retriever", age_onset_years: 5.0, sex: "M", weight_kg: 32.4, seizure_type: "Tónico-clónica generalizada", frequency_monthly: 0.5, cluster_seizures: false, status_epilepticus: false, medication: "Fenobarbital 2mg/kg BID", response: "Controlado", qol_score: 88 },
    ]
  },

  // ============================================================
  // DATASET 6: Diabetes Mellitus Veterinaria
  // ============================================================
  {
    id: "DS-VET-2024-006",
    title: "Diabetes Mellitus Veterinaria",
    title_en: "Veterinary Diabetes Mellitus Registry",
    author: "Red Hospitales Veterinarios AniCura",
    n: 2800,
    price: "650 Tokens",
    priceValue: 650,
    type: "Glucosa + Fructosamina",
    quality: "AAHA Diabetes Guidelines",
    species: "Multi-especie",
    category: "Endocrino",
    tags: ["Endocrino", "Diabetes", "Insulina", "Glucosa", "Fructosamina", "Canino", "Felino"],
    status: "Ready",
    description: "Registro de 2,800 pacientes diabéticos (60% felinos, 40% caninos). Incluye curvas de glucosa, niveles de fructosamina, tipos de insulina, dosis, complicaciones y remisión diabética en gatos.",
    description_en: "Registry of 2,800 diabetic patients (60% feline, 40% canine). Includes glucose curves, fructosamine levels, insulin types, dosing, complications and diabetic remission in cats.",
    sampleUrl: "/research/sample/DS-VET-2024-006",
    createdAt: "2024-04-15",
    updatedAt: "2025-01-08",
    version: "2.2",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["73211009", "44054006"],
    previewData: [
      { patient_id: "SYNTH-DM-001", species: "Felino", breed: "Europeo Común", age_years: 11, sex: "M", weight_kg: 6.8, bcs: 8, dm_type: "Tipo 2", fructosamine_umol_l: 520, insulin_type: "Glargina", dose_ui_kg: 0.5, glucose_nadir: 85, remission: false, complications: "Ninguna" },
      { patient_id: "SYNTH-DM-002", species: "Canino", breed: "Samoyedo", age_years: 9, sex: "F", weight_kg: 22.5, bcs: 6, dm_type: "Tipo 1", fructosamine_umol_l: 480, insulin_type: "Caninsulin", dose_ui_kg: 0.8, glucose_nadir: 92, remission: false, complications: "Cataratas" },
      { patient_id: "SYNTH-DM-003", species: "Felino", breed: "Burmés", age_years: 8, sex: "M", weight_kg: 5.2, bcs: 7, dm_type: "Tipo 2", fructosamine_umol_l: 385, insulin_type: "Glargina", dose_ui_kg: 0.25, glucose_nadir: 78, remission: true, complications: "Ninguna" },
      { patient_id: "SYNTH-DM-004", species: "Canino", breed: "Schnauzer Miniatura", age_years: 12, sex: "F", weight_kg: 7.8, bcs: 5, dm_type: "Tipo 1", fructosamine_umol_l: 610, insulin_type: "Caninsulin", dose_ui_kg: 1.2, glucose_nadir: 105, remission: false, complications: "Pancreatitis crónica" },
      { patient_id: "SYNTH-DM-005", species: "Felino", breed: "Persa", age_years: 10, sex: "M", weight_kg: 4.5, bcs: 4, dm_type: "Tipo 2", fructosamine_umol_l: 445, insulin_type: "ProZinc", dose_ui_kg: 0.4, glucose_nadir: 88, remission: false, complications: "Neuropatía periférica" },
    ]
  },

  // ============================================================
  // DATASET 7: Leishmaniosis Canina (IFI + PCR)
  // ============================================================
  {
    id: "DS-VET-2024-007",
    title: "Leishmaniosis Canina (IFI + PCR)",
    title_en: "Canine Leishmaniosis Serological & Molecular Registry",
    author: "LeishVet Research Network España",
    n: 5600,
    price: "700 Tokens",
    priceValue: 700,
    type: "Serología + Hematología",
    quality: "LeishVet Guidelines Compliant",
    species: "Canino",
    category: "Infecciosas",
    tags: ["Infecciosas", "Leishmaniosis", "Canino", "IFI", "PCR", "Serología", "Zoonosis"],
    status: "Ready",
    description: "Base de datos de 5,600 perros con sospecha o diagnóstico confirmado de leishmaniosis. Incluye títulos IFI seriados, PCR cuantitativa, proteinograma, estadificación clínica LeishVet y respuesta a tratamiento.",
    description_en: "Database of 5,600 dogs with suspected or confirmed leishmaniosis. Includes serial IFI titers, quantitative PCR, protein electrophoresis, LeishVet clinical staging and treatment response.",
    sampleUrl: "/research/sample/DS-VET-2024-007",
    createdAt: "2024-05-01",
    updatedAt: "2025-01-12",
    version: "3.1",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["186802003", "61299003"],
    previewData: [
      { patient_id: "SYNTH-LEISH-001", species: "Canino", breed: "Podenco", age_years: 5, region: "Andalucía", ifi_titer: "1:640", pcr_copies_ml: 12500, albumin_g_dl: 2.1, globulin_g_dl: 5.8, ag_ratio: 0.36, clinical_stage: "III", treatment: "Miltefosina + Alopurinol", response_6m: "Parcial" },
      { patient_id: "SYNTH-LEISH-002", species: "Canino", breed: "Boxer", age_years: 4, region: "Cataluña", ifi_titer: "1:160", pcr_copies_ml: 850, albumin_g_dl: 2.8, globulin_g_dl: 4.2, ag_ratio: 0.67, clinical_stage: "II", treatment: "Alopurinol monoterapia", response_6m: "Buena" },
      { patient_id: "SYNTH-LEISH-003", species: "Canino", breed: "Galgo Español", age_years: 7, region: "Extremadura", ifi_titer: "1:2560", pcr_copies_ml: 85000, albumin_g_dl: 1.5, globulin_g_dl: 7.2, ag_ratio: 0.21, clinical_stage: "IV", treatment: "Antimoniato + Alopurinol", response_6m: "Pobre" },
      { patient_id: "SYNTH-LEISH-004", species: "Canino", breed: "Beagle", age_years: 3, region: "Madrid", ifi_titer: "1:80", pcr_copies_ml: 0, albumin_g_dl: 3.2, globulin_g_dl: 3.5, ag_ratio: 0.91, clinical_stage: "I", treatment: "Vacunación + Collar", response_6m: "N/A (Seropositivo asintomático)" },
      { patient_id: "SYNTH-LEISH-005", species: "Canino", breed: "Pastor Alemán", age_years: 6, region: "Aragón", ifi_titer: "1:320", pcr_copies_ml: 4200, albumin_g_dl: 2.4, globulin_g_dl: 5.1, ag_ratio: 0.47, clinical_stage: "II", treatment: "Miltefosina + Alopurinol", response_6m: "Buena" },
    ]
  },

  // ============================================================
  // DATASET 8: Dermatitis Atópica Canina CADESI-04
  // ============================================================
  {
    id: "DS-VET-2024-008",
    title: "Dermatitis Atópica Canina CADESI-04",
    title_en: "Canine Atopic Dermatitis CADESI-04 Registry",
    author: "ESVD - European Society of Veterinary Dermatology",
    n: 3100,
    price: "550 Tokens",
    priceValue: 550,
    type: "Scores + Tratamiento",
    quality: "CADESI-04 Validated",
    species: "Canino",
    category: "Dermatología",
    tags: ["Dermatología", "Atopia", "Canino", "CADESI", "Prurito", "Alérgenos"],
    status: "Generating",
    progress: 78,
    description: "Registro de 3,100 perros con dermatitis atópica evaluados con el score CADESI-04. Incluye puntuaciones seriadas, pruebas intradérmicas, IgE específicas, tratamientos instaurados y respuesta clínica.",
    description_en: "Registry of 3,100 dogs with atopic dermatitis evaluated with CADESI-04 score. Includes serial scores, intradermal tests, specific IgE, treatments and clinical response.",
    sampleUrl: "/research/sample/DS-VET-2024-008",
    createdAt: "2024-05-15",
    updatedAt: "2025-01-25",
    version: "1.2",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["200775004", "402387002"],
    previewData: [
      { patient_id: "SYNTH-AD-001", species: "Canino", breed: "Bulldog Francés", age_years: 3, cadesi_baseline: 62, cadesi_week12: 28, pruritus_vas: 8, allergens: ["Ácaros polvo", "Gramíneas"], treatment: "Apoquel + Inmunoterapia", response: "Excelente" },
      { patient_id: "SYNTH-AD-002", species: "Canino", breed: "West Highland", age_years: 5, cadesi_baseline: 85, cadesi_week12: 45, pruritus_vas: 9, allergens: ["Malassezia", "Ácaros almacén"], treatment: "Cytopoint + Baños medicados", response: "Buena" },
      { patient_id: "SYNTH-AD-003", species: "Canino", breed: "Labrador", age_years: 2, cadesi_baseline: 38, cadesi_week12: 15, pruritus_vas: 6, allergens: ["Polen olivo"], treatment: "Apoquel estacional", response: "Excelente" },
      { patient_id: "SYNTH-AD-004", species: "Canino", breed: "Shar Pei", age_years: 4, cadesi_baseline: 110, cadesi_week12: 72, pruritus_vas: 10, allergens: ["Múltiples"], treatment: "Ciclosporina + Corticoides", response: "Parcial" },
      { patient_id: "SYNTH-AD-005", species: "Canino", breed: "Golden Retriever", age_years: 6, cadesi_baseline: 52, cadesi_week12: 22, pruritus_vas: 7, allergens: ["Ácaros polvo", "Hongos"], treatment: "Lokivetmab", response: "Buena" },
    ]
  },

  // ============================================================
  // DATASET 9: Filariosis Dirofilaria immitis
  // ============================================================
  {
    id: "DS-VET-2024-009",
    title: "Filariosis Dirofilaria immitis",
    title_en: "Canine Heartworm Disease Registry",
    author: "Red ESCCAP España",
    n: 1800,
    price: "480 Tokens",
    priceValue: 480,
    type: "Antígeno + Microfilarias",
    quality: "AHS Guidelines Compliant",
    species: "Canino",
    category: "Parasitología",
    tags: ["Parasitología", "Filaria", "Dirofilaria", "Canino", "Cardiología"],
    status: "Ready",
    description: "Registro de 1,800 perros diagnosticados con filariosis por Dirofilaria immitis. Incluye tests de antígeno, recuento de microfilarias, clasificación de severidad AHS, ecocardiografía y protocolo adulticida.",
    description_en: "Registry of 1,800 dogs diagnosed with Dirofilaria immitis heartworm disease. Includes antigen tests, microfilariae counts, AHS severity classification, echocardiography and adulticide protocol.",
    sampleUrl: "/research/sample/DS-VET-2024-009",
    createdAt: "2024-06-01",
    updatedAt: "2025-01-05",
    version: "2.0",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["24308001", "39607008"],
    previewData: [
      { patient_id: "SYNTH-HW-001", species: "Canino", breed: "Podenco", age_years: 4, region: "Canarias", antigen_test: "Positivo fuerte", microfilariae_ml: 2500, ahs_class: "2", pulmonary_changes: "Leves", treatment: "Protocolo AHS 3 dosis", outcome: "Negativo 6m" },
      { patient_id: "SYNTH-HW-002", species: "Canino", breed: "Mestizo", age_years: 7, region: "Andalucía", antigen_test: "Positivo", microfilariae_ml: 850, ahs_class: "3", pulmonary_changes: "Moderados", treatment: "Protocolo AHS modificado", outcome: "Negativo 9m" },
      { patient_id: "SYNTH-HW-003", species: "Canino", breed: "Galgo", age_years: 5, region: "Extremadura", antigen_test: "Positivo fuerte", microfilariae_ml: 5200, ahs_class: "4", pulmonary_changes: "Severos + Síndrome cava", treatment: "Extracción quirúrgica + Adulticida", outcome: "Falleció" },
      { patient_id: "SYNTH-HW-004", species: "Canino", breed: "Labrador", age_years: 3, region: "Valencia", antigen_test: "Positivo débil", microfilariae_ml: 0, ahs_class: "1", pulmonary_changes: "Ninguno", treatment: "Protocolo AHS 3 dosis", outcome: "Negativo 6m" },
      { patient_id: "SYNTH-HW-005", species: "Canino", breed: "Pastor Alemán", age_years: 6, region: "Murcia", antigen_test: "Positivo", microfilariae_ml: 1200, ahs_class: "2", pulmonary_changes: "Leves", treatment: "Protocolo slow-kill (Doxiciclina + Ivermectina)", outcome: "En tratamiento" },
    ]
  },

  // ============================================================
  // DATASET 10: FeLV/FIV Prevalencia Nacional
  // ============================================================
  {
    id: "DS-VET-2024-010",
    title: "FeLV/FIV Prevalencia Nacional",
    title_en: "National FeLV/FIV Prevalence Study",
    author: "GEMFE - Grupo Medicina Felina AVEPA",
    n: 8500,
    price: "900 Tokens",
    priceValue: 900,
    type: "Serología + Outcomes",
    quality: "ABCD Guidelines Validated",
    species: "Felino",
    category: "Infecciosas",
    tags: ["Infecciosas", "Felino", "FeLV", "FIV", "Retrovirus", "Prevalencia"],
    status: "Ready",
    description: "Estudio epidemiológico nacional con 8,500 gatos testados para FeLV/FIV. Incluye datos demográficos, estilo de vida, resultados serológicos confirmados, coinfecciones y supervivencia a largo plazo.",
    description_en: "National epidemiological study with 8,500 cats tested for FeLV/FIV. Includes demographics, lifestyle, confirmed serological results, coinfections and long-term survival data.",
    sampleUrl: "/research/sample/DS-VET-2024-010",
    createdAt: "2024-06-15",
    updatedAt: "2025-01-20",
    version: "2.5",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["77379009", "88348008"],
    previewData: [
      { patient_id: "SYNTH-RETRO-001", species: "Felino", breed: "Europeo Común", age_years: 4, sex: "M", lifestyle: "Exterior", felv_elisa: "Negativo", felv_ifa: "N/A", fiv_elisa: "Positivo", fiv_wb: "Confirmado", cd4_cd8_ratio: 0.8, survival_years: 5, cause_death: "Vivo" },
      { patient_id: "SYNTH-RETRO-002", species: "Felino", breed: "Siamés", age_years: 2, sex: "F", lifestyle: "Interior", felv_elisa: "Positivo", felv_ifa: "Positivo", fiv_elisa: "Negativo", fiv_wb: "N/A", cd4_cd8_ratio: 1.2, survival_years: 1.5, cause_death: "Linfoma mediastínico" },
      { patient_id: "SYNTH-RETRO-003", species: "Felino", breed: "Persa", age_years: 8, sex: "M", lifestyle: "Interior", felv_elisa: "Negativo", felv_ifa: "N/A", fiv_elisa: "Negativo", fiv_wb: "N/A", cd4_cd8_ratio: 1.5, survival_years: "N/A", cause_death: "Vivo (Control)" },
      { patient_id: "SYNTH-RETRO-004", species: "Felino", breed: "Común", age_years: 6, sex: "M", lifestyle: "Exterior", felv_elisa: "Positivo", felv_ifa: "Positivo", fiv_elisa: "Positivo", fiv_wb: "Confirmado", cd4_cd8_ratio: 0.4, survival_years: 0.8, cause_death: "Anemia no regenerativa" },
      { patient_id: "SYNTH-RETRO-005", species: "Felino", breed: "Maine Coon", age_years: 3, sex: "F", lifestyle: "Interior", felv_elisa: "Positivo transitorio", felv_ifa: "Negativo", fiv_elisa: "Negativo", fiv_wb: "N/A", cd4_cd8_ratio: 1.4, survival_years: 4, cause_death: "Vivo (Eliminó virus)" },
    ]
  },

  // ============================================================
  // DATASET 11: Obesidad y Síndrome Metabólico
  // ============================================================
  {
    id: "DS-VET-2024-011",
    title: "Obesidad y Síndrome Metabólico Veterinario",
    title_en: "Veterinary Obesity and Metabolic Syndrome Study",
    author: "WSAVA Global Nutrition Committee",
    n: 4500,
    price: "420 Tokens",
    priceValue: 420,
    type: "Peso + BCS + Labs",
    quality: "WSAVA BCS Standardized",
    species: "Multi-especie",
    category: "Metabolismo",
    tags: ["Metabolismo", "Obesidad", "BCS", "Nutrición", "Canino", "Felino"],
    status: "Generating",
    progress: 92,
    description: "Estudio multicéntrico de 4,500 pacientes con sobrepeso/obesidad. Incluye BCS estandarizado, perímetro torácico, analíticas metabólicas, dietas prescritas y pérdida de peso a 6 meses.",
    description_en: "Multicenter study of 4,500 overweight/obese patients. Includes standardized BCS, girth measurements, metabolic blood work, prescribed diets and 6-month weight loss outcomes.",
    sampleUrl: "/research/sample/DS-VET-2024-011",
    createdAt: "2024-07-01",
    updatedAt: "2025-01-22",
    version: "1.0",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["414916001", "238136002"],
    previewData: [
      { patient_id: "SYNTH-OB-001", species: "Canino", breed: "Labrador", age_years: 6, sex: "M", weight_kg: 42.5, ideal_weight_kg: 32, bcs_9: 8, body_fat_percent: 38, triglycerides_mg_dl: 285, cholesterol_mg_dl: 320, diet: "Hill's Metabolic", weight_6m_kg: 36.2, success: true },
      { patient_id: "SYNTH-OB-002", species: "Felino", breed: "Europeo", age_years: 9, sex: "M", weight_kg: 8.2, ideal_weight_kg: 5.5, bcs_9: 9, body_fat_percent: 42, triglycerides_mg_dl: 180, cholesterol_mg_dl: 245, diet: "Royal Canin Satiety", weight_6m_kg: 6.8, success: true },
      { patient_id: "SYNTH-OB-003", species: "Canino", breed: "Beagle", age_years: 7, sex: "F", weight_kg: 18.5, ideal_weight_kg: 13, bcs_9: 8, body_fat_percent: 35, triglycerides_mg_dl: 195, cholesterol_mg_dl: 280, diet: "Purina OM", weight_6m_kg: 17.8, success: false },
      { patient_id: "SYNTH-OB-004", species: "Canino", breed: "Carlino", age_years: 5, sex: "M", weight_kg: 12.8, ideal_weight_kg: 8, bcs_9: 9, body_fat_percent: 45, triglycerides_mg_dl: 320, cholesterol_mg_dl: 385, diet: "Hill's r/d", weight_6m_kg: 10.2, success: true },
      { patient_id: "SYNTH-OB-005", species: "Felino", breed: "Persa", age_years: 8, sex: "F", weight_kg: 6.5, ideal_weight_kg: 4.2, bcs_9: 8, body_fat_percent: 36, triglycerides_mg_dl: 145, cholesterol_mg_dl: 210, diet: "Hill's Metabolic Feline", weight_6m_kg: 5.1, success: true },
    ]
  },

  // ============================================================
  // DATASET 12: Ehrlichiosis/Anaplasma Canina
  // ============================================================
  {
    id: "DS-VET-2024-012",
    title: "Ehrlichiosis/Anaplasmosis Canina",
    title_en: "Canine Ehrlichiosis and Anaplasmosis Registry",
    author: "ESCCAP España + Portugal",
    n: 2400,
    price: "580 Tokens",
    priceValue: 580,
    type: "Serología + Frotis",
    quality: "IDEXX SNAP 4Dx Plus Validated",
    species: "Canino",
    category: "Hematología",
    tags: ["Hematología", "Ehrlichia", "Anaplasma", "Garrapatas", "Canino", "Trombocitopenia"],
    status: "Ready",
    description: "Registro de 2,400 perros con ehrlichiosis/anaplasmosis. Incluye serología SNAP 4Dx, PCR específica, hemogramas seriados, respuesta al tratamiento con doxiciclina y seguimiento a 12 meses.",
    description_en: "Registry of 2,400 dogs with ehrlichiosis/anaplasmosis. Includes SNAP 4Dx serology, specific PCR, serial CBCs, doxycycline treatment response and 12-month follow-up.",
    sampleUrl: "/research/sample/DS-VET-2024-012",
    createdAt: "2024-07-15",
    updatedAt: "2025-01-18",
    version: "1.8",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["36073002", "71204009"],
    previewData: [
      { patient_id: "SYNTH-EHR-001", species: "Canino", breed: "Pointer", age_years: 5, region: "Castilla-La Mancha", snap_ehrlichia: "Positivo", snap_anaplasma: "Negativo", pcr_agent: "E. canis", platelets_ul: 45000, hematocrit_percent: 28, treatment_days: 28, response: "Completa" },
      { patient_id: "SYNTH-EHR-002", species: "Canino", breed: "Setter", age_years: 7, region: "Extremadura", snap_ehrlichia: "Positivo", snap_anaplasma: "Positivo", pcr_agent: "E. canis + A. platys", platelets_ul: 32000, hematocrit_percent: 24, treatment_days: 42, response: "Parcial (crónico)" },
      { patient_id: "SYNTH-EHR-003", species: "Canino", breed: "Beagle", age_years: 3, region: "Cataluña", snap_ehrlichia: "Negativo", snap_anaplasma: "Positivo", pcr_agent: "A. phagocytophilum", platelets_ul: 85000, hematocrit_percent: 38, treatment_days: 21, response: "Completa" },
      { patient_id: "SYNTH-EHR-004", species: "Canino", breed: "Pastor Alemán", age_years: 8, region: "Andalucía", snap_ehrlichia: "Positivo", snap_anaplasma: "Negativo", pcr_agent: "E. canis", platelets_ul: 18000, hematocrit_percent: 18, treatment_days: 56, response: "Transfusión + Doxiciclina" },
      { patient_id: "SYNTH-EHR-005", species: "Canino", breed: "Galgo", age_years: 4, region: "Madrid", snap_ehrlichia: "Positivo", snap_anaplasma: "Negativo", pcr_agent: "E. canis", platelets_ul: 95000, hematocrit_percent: 42, treatment_days: 28, response: "Completa (subclínico)" },
    ]
  },

  // ============================================================
  // DATASET 13: Glaucoma y Presión Intraocular
  // ============================================================
  {
    id: "DS-VET-2024-013",
    title: "Glaucoma y Presión Intraocular",
    title_en: "Glaucoma and Intraocular Pressure Registry",
    author: "SEVO - Sociedad Española Veterinaria Oftalmología",
    n: 1650,
    price: "750 Tokens",
    priceValue: 750,
    type: "Tonometría + Fundoscopia",
    quality: "TonoVet Plus Calibrated",
    species: "Multi-especie",
    category: "Oftalmología",
    tags: ["Oftalmología", "Glaucoma", "IOP", "Canino", "Felino", "Tonometría"],
    status: "Ready",
    description: "Registro de 1,650 pacientes con glaucoma primario o secundario. Incluye mediciones de PIO seriadas, gonioscopia, imágenes de fondo de ojo, tratamientos médicos/quirúrgicos y conservación visual.",
    description_en: "Registry of 1,650 patients with primary or secondary glaucoma. Includes serial IOP measurements, gonioscopy, fundus images, medical/surgical treatments and visual preservation outcomes.",
    sampleUrl: "/research/sample/DS-VET-2024-013",
    createdAt: "2024-08-01",
    updatedAt: "2025-01-15",
    version: "1.5",
    privacyLevel: "Differential Privacy ε=0.5",
    snomed_codes: ["23986001", "77075001"],
    previewData: [
      { patient_id: "SYNTH-GL-001", species: "Canino", breed: "Cocker Spaniel", age_years: 8, eye: "OD", glaucoma_type: "Primario ángulo cerrado", iop_mmhg_baseline: 48, iop_mmhg_treated: 18, gonioscopy: "Ángulo cerrado 360°", treatment: "Latanoprost + Dorzolamida", surgery: "Ninguna", vision_preserved: true },
      { patient_id: "SYNTH-GL-002", species: "Canino", breed: "Basset Hound", age_years: 6, eye: "OU", glaucoma_type: "Primario ángulo abierto", iop_mmhg_baseline: 35, iop_mmhg_treated: 22, gonioscopy: "Displasia pectinada", treatment: "Brinzolamida + Timolol", surgery: "Láser ciclodiodo", vision_preserved: true },
      { patient_id: "SYNTH-GL-003", species: "Felino", breed: "Siamés", age_years: 12, eye: "OS", glaucoma_type: "Secundario uveítis", iop_mmhg_baseline: 42, iop_mmhg_treated: 28, gonioscopy: "Sinequias", treatment: "Prednisolona + Latanoprost", surgery: "Ninguna", vision_preserved: false },
      { patient_id: "SYNTH-GL-004", species: "Canino", breed: "Husky Siberiano", age_years: 5, eye: "OD", glaucoma_type: "Primario ángulo cerrado", iop_mmhg_baseline: 55, iop_mmhg_treated: 45, gonioscopy: "Ángulo cerrado", treatment: "Manitol + Latanoprost", surgery: "Enucleación", vision_preserved: false },
      { patient_id: "SYNTH-GL-005", species: "Canino", breed: "Beagle", age_years: 9, eye: "OU", glaucoma_type: "Primario", iop_mmhg_baseline: 32, iop_mmhg_treated: 16, gonioscopy: "Displasia ligera", treatment: "Dorzolamida BID", surgery: "Ninguna", vision_preserved: true },
    ]
  },

  // ============================================================
  // DATASET 14: Luxación Patelar Congénita
  // ============================================================
  {
    id: "DS-VET-2024-014",
    title: "Luxación Patelar Congénita",
    title_en: "Congenital Patellar Luxation Registry",
    author: "SECOT Veterinaria",
    n: 2200,
    price: "680 Tokens",
    priceValue: 680,
    type: "Rx + Grading",
    quality: "OFA Patellar Grading",
    species: "Canino",
    category: "Ortopedia",
    tags: ["Ortopedia", "Luxación patelar", "Canino", "Cirugía", "Razas pequeñas"],
    status: "Ready",
    description: "Registro de 2,200 perros con luxación patelar congénita. Incluye graduación OFA (I-IV), radiografías, deformidades asociadas (varus/valgus), técnicas quirúrgicas empleadas y resultados funcionales.",
    description_en: "Registry of 2,200 dogs with congenital patellar luxation. Includes OFA grading (I-IV), radiographs, associated deformities (varus/valgus), surgical techniques and functional outcomes.",
    sampleUrl: "/research/sample/DS-VET-2024-014",
    createdAt: "2024-08-15",
    updatedAt: "2025-01-10",
    version: "2.0",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["202446007", "46866001"],
    previewData: [
      { patient_id: "SYNTH-PL-001", species: "Canino", breed: "Yorkshire Terrier", age_years: 2, weight_kg: 3.2, limb: "Bilateral", grade_l: "III", grade_r: "II", direction: "Medial", deformity: "Varus tibial", surgery: "Trocleoplastia + TTT bilateral", outcome: "Excelente" },
      { patient_id: "SYNTH-PL-002", species: "Canino", breed: "Chihuahua", age_years: 4, weight_kg: 2.1, limb: "MPD", grade_l: "II", grade_r: "N/A", direction: "Medial", deformity: "Ninguna", surgery: "Trocleoplastia", outcome: "Bueno" },
      { patient_id: "SYNTH-PL-003", species: "Canino", breed: "Pomerania", age_years: 3, weight_kg: 2.8, limb: "Bilateral", grade_l: "IV", grade_r: "IV", direction: "Medial", deformity: "Varus severo", surgery: "Osteotomía correctiva + TTT", outcome: "Bueno" },
      { patient_id: "SYNTH-PL-004", species: "Canino", breed: "Boston Terrier", age_years: 5, weight_kg: 8.5, limb: "MPI", grade_l: "N/A", grade_r: "III", direction: "Medial", deformity: "Leve varus", surgery: "Trocleoplastia en cuña", outcome: "Excelente" },
      { patient_id: "SYNTH-PL-005", species: "Canino", breed: "Bulldog Francés", age_years: 2, weight_kg: 11.2, limb: "Bilateral", grade_l: "II", grade_r: "II", direction: "Lateral", deformity: "Valgus", surgery: "Monitorización (subclínico)", outcome: "Estable" },
    ]
  },

  // ============================================================
  // DATASET 15: Parvovirosis Canina Outcomes
  // ============================================================
  {
    id: "DS-VET-2024-015",
    title: "Parvovirosis Canina Outcomes",
    title_en: "Canine Parvovirus Treatment Outcomes Registry",
    author: "Hospitales Veterinarios IVC Evidensia España",
    n: 3800,
    price: "620 Tokens",
    priceValue: 620,
    type: "Labs + Hospitalización",
    quality: "RECOVER CPR Guidelines",
    species: "Canino",
    category: "Infecciosas",
    tags: ["Infecciosas", "Parvovirosis", "Canino", "UCI", "Gastroenterología"],
    status: "Sold",
    buyer: "Zoetis Research Division",
    description: "Registro de 3,800 cachorros hospitalizados por parvovirosis. Incluye edad, vacunación previa, severidad clínica, analíticas seriadas, tratamientos intensivos y supervivencia al alta.",
    description_en: "Registry of 3,800 puppies hospitalized for parvovirus. Includes age, vaccination status, clinical severity, serial blood work, intensive treatments and discharge survival rates.",
    sampleUrl: "/research/sample/DS-VET-2024-015",
    createdAt: "2024-09-01",
    updatedAt: "2024-12-01",
    version: "1.0",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["398102009", "55342001"],
    previewData: [
      { patient_id: "SYNTH-CPV-001", species: "Canino", breed: "Rottweiler", age_weeks: 10, vaccination_status: "Incompleta (1 dosis)", severity_score: 8, wbc_ul: 1200, albumin_g_dl: 1.8, hospitalization_days: 5, treatment: "Fluidoterapia + Maropitant + Cefazolina + Plasma", survived: true },
      { patient_id: "SYNTH-CPV-002", species: "Canino", breed: "Mestizo", age_weeks: 8, vaccination_status: "Sin vacunar", severity_score: 10, wbc_ul: 800, albumin_g_dl: 1.2, hospitalization_days: 3, treatment: "UCI + Transfusión + Oseltamivir", survived: false },
      { patient_id: "SYNTH-CPV-003", species: "Canino", breed: "Bulldog Francés", age_weeks: 12, vaccination_status: "Incompleta (2 dosis)", severity_score: 5, wbc_ul: 3500, albumin_g_dl: 2.4, hospitalization_days: 4, treatment: "Fluidoterapia + Antiemético", survived: true },
      { patient_id: "SYNTH-CPV-004", species: "Canino", breed: "Labrador", age_weeks: 9, vaccination_status: "Sin vacunar", severity_score: 7, wbc_ul: 1800, albumin_g_dl: 1.6, hospitalization_days: 6, treatment: "Fluidoterapia intensiva + Antibióticos", survived: true },
      { patient_id: "SYNTH-CPV-005", species: "Canino", breed: "Beagle", age_weeks: 11, vaccination_status: "Incompleta", severity_score: 9, wbc_ul: 950, albumin_g_dl: 1.4, hospitalization_days: 2, treatment: "UCI + Soporte multiorgánico", survived: false },
    ]
  },

  // ============================================================
  // DATASET 16: Hipertiroidismo Felino
  // ============================================================
  {
    id: "DS-VET-2024-016",
    title: "Hipertiroidismo Felino",
    title_en: "Feline Hyperthyroidism Registry",
    author: "GEMFE - AVEPA",
    n: 3200,
    price: "720 Tokens",
    priceValue: 720,
    type: "T4 + Gammagrafía",
    quality: "AAFP Thyroid Guidelines",
    species: "Felino",
    category: "Endocrino",
    tags: ["Endocrino", "Hipertiroidismo", "Felino", "T4", "Tiroides", "I-131"],
    status: "Ready",
    description: "Registro de 3,200 gatos con hipertiroidismo. Incluye niveles T4/fT4, gammagrafías tiroideas, evaluación renal concurrente, tratamientos (metimazol, dieta y/y I-131) y supervivencia.",
    description_en: "Registry of 3,200 cats with hyperthyroidism. Includes T4/fT4 levels, thyroid scintigraphy, concurrent renal evaluation, treatments (methimazole, diet, I-131) and survival data.",
    sampleUrl: "/research/sample/DS-VET-2024-016",
    createdAt: "2024-09-15",
    updatedAt: "2025-01-08",
    version: "2.2",
    privacyLevel: "Differential Privacy ε=0.3",
    snomed_codes: ["34486009", "14304000"],
    previewData: [
      { patient_id: "SYNTH-HT-001", species: "Felino", breed: "Europeo", age_years: 14, sex: "F", weight_kg: 3.2, t4_ug_dl: 8.5, ft4_pmol_l: 85, creatinine_mg_dl: 1.8, heart_rate_bpm: 240, scintigraphy: "Adenoma unilateral", treatment: "I-131", outcome: "Eutiroidismo 3m" },
      { patient_id: "SYNTH-HT-002", species: "Felino", breed: "Siamés", age_years: 12, sex: "M", weight_kg: 4.1, t4_ug_dl: 12.2, ft4_pmol_l: 120, creatinine_mg_dl: 2.4, heart_rate_bpm: 260, scintigraphy: "Bilateral", treatment: "Metimazol 2.5mg BID", outcome: "Controlado + ERC desenmascarada" },
      { patient_id: "SYNTH-HT-003", species: "Felino", breed: "Persa", age_years: 15, sex: "F", weight_kg: 2.8, t4_ug_dl: 6.8, ft4_pmol_l: 62, creatinine_mg_dl: 1.4, heart_rate_bpm: 200, scintigraphy: "Adenoma unilateral", treatment: "Dieta y/d", outcome: "Controlado" },
      { patient_id: "SYNTH-HT-004", species: "Felino", breed: "Común", age_years: 16, sex: "M", weight_kg: 3.5, t4_ug_dl: 15.5, ft4_pmol_l: 145, creatinine_mg_dl: 1.6, heart_rate_bpm: 280, scintigraphy: "Carcinoma bilateral", treatment: "Metimazol + Tiroidectomía", outcome: "Recidiva 6m" },
      { patient_id: "SYNTH-HT-005", species: "Felino", breed: "Maine Coon", age_years: 11, sex: "F", weight_kg: 5.2, t4_ug_dl: 5.2, ft4_pmol_l: 48, creatinine_mg_dl: 1.2, heart_rate_bpm: 180, scintigraphy: "Adenoma unilateral pequeño", treatment: "I-131", outcome: "Eutiroidismo 1m" },
    ]
  },

  // ============================================================
  // DATASET 17: Comportamiento y Ansiedad
  // ============================================================
  {
    id: "DS-VET-2024-017",
    title: "Comportamiento y Ansiedad Veterinaria",
    title_en: "Veterinary Behavior and Anxiety Study",
    author: "GRETCA - Grupo Etología Clínica AVEPA",
    n: 2600,
    price: "350 Tokens",
    priceValue: 350,
    type: "Cuestionarios + Tratamiento",
    quality: "C-BARQ Validated",
    species: "Multi-especie",
    category: "Etología",
    tags: ["Etología", "Ansiedad", "Comportamiento", "C-BARQ", "Psicofármacos"],
    status: "Ready",
    description: "Estudio de 2,600 pacientes con problemas de comportamiento. Incluye cuestionarios C-BARQ/FVBS, diagnósticos conductuales, tratamientos farmacológicos/conductuales y evolución a 6 meses.",
    description_en: "Study of 2,600 patients with behavior problems. Includes C-BARQ/FVBS questionnaires, behavioral diagnoses, pharmacological/behavioral treatments and 6-month outcomes.",
    sampleUrl: "/research/sample/DS-VET-2024-017",
    createdAt: "2024-10-01",
    updatedAt: "2025-01-12",
    version: "1.5",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["35489007", "48694002"],
    previewData: [
      { patient_id: "SYNTH-BEH-001", species: "Canino", breed: "Border Collie", age_years: 3, sex: "M", diagnosis: "Ansiedad por separación", cbarq_fear: 28, cbarq_aggression: 12, treatment: "Fluoxetina 1mg/kg + Desensibilización", improvement_6m: "75%" },
      { patient_id: "SYNTH-BEH-002", species: "Canino", breed: "Pastor Alemán", age_years: 5, sex: "M", diagnosis: "Agresividad territorial", cbarq_fear: 18, cbarq_aggression: 42, treatment: "Sertralina + Modificación conductual", improvement_6m: "50%" },
      { patient_id: "SYNTH-BEH-003", species: "Felino", breed: "Bengalí", age_years: 2, sex: "M", diagnosis: "Agresividad redirigida", cbarq_fear: "N/A", cbarq_aggression: "N/A", treatment: "Enriquecimiento ambiental + Feliway", improvement_6m: "80%" },
      { patient_id: "SYNTH-BEH-004", species: "Canino", breed: "Chihuahua", age_years: 4, sex: "F", diagnosis: "Fobia a ruidos", cbarq_fear: 45, cbarq_aggression: 8, treatment: "Sileo + Desensibilización gradual", improvement_6m: "65%" },
      { patient_id: "SYNTH-BEH-005", species: "Felino", breed: "Persa", age_years: 8, sex: "F", diagnosis: "Marcaje urinario", cbarq_fear: "N/A", cbarq_aggression: "N/A", treatment: "Clomipramina + Areneros adicionales", improvement_6m: "90%" },
    ]
  },

  // ============================================================
  // DATASET 18: Otitis Externa Recurrente
  // ============================================================
  {
    id: "DS-VET-2024-018",
    title: "Otitis Externa Recurrente",
    title_en: "Recurrent Otitis Externa Registry",
    author: "GEDA - Grupo Dermatología AVEPA",
    n: 4100,
    price: "380 Tokens",
    priceValue: 380,
    type: "Citología + Cultivo",
    quality: "OTIS-3 Scoring System",
    species: "Multi-especie",
    category: "Dermatología",
    tags: ["Dermatología", "Otitis", "Citología", "Cultivo", "Canino", "Felino"],
    status: "Ready",
    description: "Registro de 4,100 pacientes con otitis externa recurrente. Incluye citologías óticas seriadas, cultivos bacterianos/fúngicos, antibiogramas, tratamientos tópicos/sistémicos y resolución.",
    description_en: "Registry of 4,100 patients with recurrent otitis externa. Includes serial ear cytology, bacterial/fungal cultures, susceptibility testing, topical/systemic treatments and resolution rates.",
    sampleUrl: "/research/sample/DS-VET-2024-018",
    createdAt: "2024-10-15",
    updatedAt: "2025-01-18",
    version: "1.8",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["3135009", "65363002"],
    previewData: [
      { patient_id: "SYNTH-OE-001", species: "Canino", breed: "Cocker Spaniel", age_years: 6, ear: "Bilateral", cytology: "Malassezia +++, Cocos +", culture: "S. pseudintermedius", resistance: "Ninguna", treatment: "Posatex BID x 14d", resolution: "Completa" },
      { patient_id: "SYNTH-OE-002", species: "Canino", breed: "Bulldog Francés", age_years: 4, ear: "OD", cytology: "Cocos +++, Bacilos ++", culture: "P. aeruginosa MDR", resistance: "Fluoroquinolonas, Aminoglucósidos", treatment: "Tris-EDTA + Polimixina", resolution: "Parcial" },
      { patient_id: "SYNTH-OE-003", species: "Felino", breed: "Europeo", age_years: 8, ear: "OS", cytology: "Otodectes cynotis", culture: "N/A", resistance: "N/A", treatment: "Selamectina tópica", resolution: "Completa" },
      { patient_id: "SYNTH-OE-004", species: "Canino", breed: "Shar Pei", age_years: 3, ear: "Bilateral", cytology: "Malassezia +++, Cocos ++", culture: "S. pseudintermedius MRSP", resistance: "Meticilina", treatment: "Clotrimazol + Ácido fusídico", resolution: "Parcial → TECA" },
      { patient_id: "SYNTH-OE-005", species: "Canino", breed: "Labrador", age_years: 5, ear: "Bilateral", cytology: "Malassezia ++", culture: "Negativo", resistance: "N/A", treatment: "Clotrimazol + Limpieza semanal", resolution: "Completa" },
    ]
  },

  // ============================================================
  // DATASET 19: Enfermedad Periodontal Veterinaria
  // ============================================================
  {
    id: "DS-VET-2024-019",
    title: "Enfermedad Periodontal Veterinaria",
    title_en: "Veterinary Periodontal Disease Registry",
    author: "SEOVE - Sociedad Odontología Veterinaria",
    n: 5200,
    price: "520 Tokens",
    priceValue: 520,
    type: "Radiografía + Staging",
    quality: "AVDC Nomenclature Compliant",
    species: "Multi-especie",
    category: "Dental",
    tags: ["Dental", "Periodontal", "Radiografía dental", "Canino", "Felino", "Extracciones"],
    status: "Generating",
    progress: 45,
    description: "Registro de 5,200 pacientes con enfermedad periodontal. Incluye radiografías dentales intraorales, estadificación AVDC, procedimientos realizados (limpiezas, extracciones) y seguimiento.",
    description_en: "Registry of 5,200 patients with periodontal disease. Includes intraoral dental radiographs, AVDC staging, procedures performed (prophylaxis, extractions) and follow-up data.",
    sampleUrl: "/research/sample/DS-VET-2024-019",
    createdAt: "2024-11-01",
    updatedAt: "2025-01-25",
    version: "0.8",
    privacyLevel: "K-Anonymity Level 5",
    snomed_codes: ["2556008", "109564008"],
    previewData: [
      { patient_id: "SYNTH-PD-001", species: "Canino", breed: "Yorkshire", age_years: 8, weight_kg: 3.5, periodontal_stage: "4", teeth_affected: 12, bone_loss_percent: 75, treatment: "Extracciones múltiples (8)", anesthesia_time_min: 90, complications: "Ninguna" },
      { patient_id: "SYNTH-PD-002", species: "Felino", breed: "Siamés", age_years: 10, weight_kg: 4.2, periodontal_stage: "3", teeth_affected: 6, bone_loss_percent: 50, treatment: "Profilaxis + Extracciones (3)", anesthesia_time_min: 60, complications: "FORL detectadas" },
      { patient_id: "SYNTH-PD-003", species: "Canino", breed: "Greyhound", age_years: 5, weight_kg: 28.5, periodontal_stage: "2", teeth_affected: 4, bone_loss_percent: 25, treatment: "Profilaxis + Antibioterapia", anesthesia_time_min: 45, complications: "Ninguna" },
      { patient_id: "SYNTH-PD-004", species: "Canino", breed: "Chihuahua", age_years: 12, weight_kg: 2.1, periodontal_stage: "4", teeth_affected: 18, bone_loss_percent: 85, treatment: "Extracciones full mouth", anesthesia_time_min: 120, complications: "Fractura mandibular iatrogénica" },
      { patient_id: "SYNTH-PD-005", species: "Felino", breed: "Persa", age_years: 7, weight_kg: 3.8, periodontal_stage: "2", teeth_affected: 3, bone_loss_percent: 20, treatment: "Profilaxis", anesthesia_time_min: 35, complications: "Ninguna" },
    ]
  },

  // ============================================================
  // DATASET 20: Microbioma Gastrointestinal
  // ============================================================
  {
    id: "DS-VET-2024-020",
    title: "Microbioma Gastrointestinal Veterinario",
    title_en: "Veterinary Gastrointestinal Microbiome Study",
    author: "Texas A&M GI Lab + AVEPA",
    n: 1200,
    price: "1800 Tokens",
    priceValue: 1800,
    type: "Secuenciación 16S",
    quality: "Illumina MiSeq V3-V4",
    species: "Multi-especie",
    category: "Gastroenterología",
    tags: ["Gastroenterología", "Microbioma", "16S rRNA", "IBD", "Disbiosis", "Canino", "Felino"],
    status: "Ready",
    description: "Estudio de microbioma intestinal en 1,200 pacientes (sanos vs IBD). Incluye secuenciación 16S rRNA, índice de disbiosis, abundancia relativa de phyla, respuesta a probióticos/FMT.",
    description_en: "Intestinal microbiome study in 1,200 patients (healthy vs IBD). Includes 16S rRNA sequencing, dysbiosis index, relative phyla abundance, probiotic/FMT response data.",
    sampleUrl: "/research/sample/DS-VET-2024-020",
    createdAt: "2024-11-15",
    updatedAt: "2025-01-20",
    version: "1.2",
    privacyLevel: "Differential Privacy ε=0.5",
    snomed_codes: ["24526004", "397825006"],
    previewData: [
      { patient_id: "SYNTH-MB-001", species: "Canino", breed: "Pastor Alemán", age_years: 4, diagnosis: "IBD linfocítica", dysbiosis_index: 2.8, firmicutes_percent: 28, bacteroidetes_percent: 42, fusobacteria_percent: 8, clostridium_hiranonis: "Bajo", treatment: "Dieta hidrolizada + Probióticos", response: "Buena" },
      { patient_id: "SYNTH-MB-002", species: "Felino", breed: "Siamés", age_years: 8, diagnosis: "IBD + Triaditis", dysbiosis_index: 4.2, firmicutes_percent: 18, bacteroidetes_percent: 55, fusobacteria_percent: 4, clostridium_hiranonis: "Ausente", treatment: "Prednisolona + FMT", response: "Parcial" },
      { patient_id: "SYNTH-MB-003", species: "Canino", breed: "Labrador", age_years: 3, diagnosis: "Sano (control)", dysbiosis_index: -1.2, firmicutes_percent: 52, bacteroidetes_percent: 28, fusobacteria_percent: 12, clostridium_hiranonis: "Normal", treatment: "N/A", response: "N/A" },
      { patient_id: "SYNTH-MB-004", species: "Canino", breed: "Yorkshire", age_years: 6, diagnosis: "Enteropatía con pérdida proteica", dysbiosis_index: 5.1, firmicutes_percent: 15, bacteroidetes_percent: 60, fusobacteria_percent: 2, clostridium_hiranonis: "Ausente", treatment: "Cobalamina + Dieta elemental + FMT", response: "Buena" },
      { patient_id: "SYNTH-MB-005", species: "Felino", breed: "Europeo", age_years: 5, diagnosis: "Sano (control)", dysbiosis_index: -0.8, firmicutes_percent: 48, bacteroidetes_percent: 32, fusobacteria_percent: 10, clostridium_hiranonis: "Normal", treatment: "N/A", response: "N/A" },
    ]
  },
];

// Helper function to get dataset by ID
export const getDatasetById = (id: string): ResearchDataset | undefined => {
  return researchDatasets.find(ds => ds.id === id);
};

// Helper function to get datasets by category
export const getDatasetsByCategory = (category: string): ResearchDataset[] => {
  return researchDatasets.filter(ds => ds.category === category);
};

// Helper function to get datasets by species
export const getDatasetsBySpecies = (species: string): ResearchDataset[] => {
  return researchDatasets.filter(ds => ds.species === species);
};

// Get all unique categories
export const getCategories = (): string[] => {
  return [...new Set(researchDatasets.map(ds => ds.category))];
};

// Get all unique species
export const getSpeciesList = (): string[] => {
  return [...new Set(researchDatasets.map(ds => ds.species))];
};
