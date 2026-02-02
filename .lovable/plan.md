
## Plan: Generar 20 Datasets de Investigación Veterinaria + Páginas de Muestra

### Objetivo
Expandir el Research Data Marketplace con 20 nuevos datasets veterinarios bilingües (ES/EN), cada uno con una página de muestra individual que muestra datos sintéticos de ejemplo.

---

## Parte 1: Estructura de Datos (20 Datasets)

### Distribución por Categoría Clínica

| # | Dataset | Especie | Categoría | Tipo Datos | Precio (Tokens) |
|---|---------|---------|-----------|------------|-----------------|
| 1 | Cohorte Displasia Cadera PennHIP | Canino | Ortopedia | DICOM + Scores | 950 |
| 2 | Cardiomiopatía Dilatada Canina (DCM) | Canino | Cardiología | Echo + ECG | 1100 |
| 3 | Enfermedad Renal Crónica Felina IRIS | Felino | Nefrología | Labs + Staging | 800 |
| 4 | Mastocitoma Cutáneo (Grading Pataki) | Multi-especie | Oncología | Citología + Imágenes | 1500 |
| 5 | Epilepsia Idiopática Canina | Canino | Neurología | EEG + Historial | 1200 |
| 6 | Diabetes Mellitus Veterinaria | Multi-especie | Endocrino | Glucosa + Fructosamina | 650 |
| 7 | Leishmaniosis Canina (IFI + PCR) | Canino | Infecciosas | Serología + Hematología | 700 |
| 8 | Dermatitis Atópica Canina CADESI-04 | Canino | Dermatología | Scores + Tratamiento | 550 |
| 9 | Filariosis Dirofilaria immitis | Canino | Parasitología | Antígeno + Microfilarias | 480 |
| 10 | FeLV/FIV Prevalencia Nacional | Felino | Infecciosas | Serología + Outcomes | 900 |
| 11 | Obesidad y Síndrome Metabólico | Multi-especie | Metabolismo | Peso + BCS + Labs | 420 |
| 12 | Ehrlichiosis/Anaplasma Canina | Canino | Hematología | Serología + Frotis | 580 |
| 13 | Glaucoma y Presión Intraocular | Multi-especie | Oftalmología | Tonometría + Fundoscopia | 750 |
| 14 | Luxación Patelar Congénita | Canino | Ortopedia | Rx + Grading | 680 |
| 15 | Parvovirosis Canina Outcomes | Canino | Infecciosas | Labs + Hospitalización | 620 |
| 16 | Hipertiroidismo Felino | Felino | Endocrino | T4 + Gammagrafía | 720 |
| 17 | Comportamiento y Ansiedad | Multi-especie | Etología | Cuestionarios + Tratamiento | 350 |
| 18 | Otitis Externa Recurrente | Multi-especie | Dermatología | Citología + Cultivo | 380 |
| 19 | Enfermedad Periodontal Veterinaria | Multi-especie | Dental | Radiografía + Staging | 520 |
| 20 | Microbioma Gastrointestinal | Multi-especie | Gastroenterología | Secuenciación 16S | 1800 |

---

## Parte 2: Estructura de Cada Dataset

```text
interface ResearchDataset {
  id: string;                    // "DS-VET-2024-001"
  title: string;                 // Nombre descriptivo
  title_en: string;              // English title
  author: string;                // Institución/Autor
  n: number;                     // Número de registros
  price: string;                 // "X Tokens"
  priceValue: number;            // Valor numérico
  type: string;                  // Tipo de datos
  quality: string;               // Badge de calidad
  species: string;               // Canino/Felino/Multi-especie
  tags: string[];                // Etiquetas de búsqueda
  status: 'Ready' | 'Generating' | 'Sold';
  progress?: number;             // Si status = Generating
  buyer?: string;                // Si status = Sold
  description: string;           // Descripción detallada
  description_en: string;        // English description
  previewData: object;           // Muestra de datos sintéticos
  sampleUrl: string;             // Ruta a página de muestra "/research/sample/X"
}
```

---

## Parte 3: Archivos a Crear

### 3.1 Archivo de Datos (src/data/researchDatasets.ts)
- 20 datasets completos con todos los campos
- Datos de preview (previewData) para cada uno
- Datos de muestra extendidos para las páginas individuales

### 3.2 Página de Muestra Reutilizable
**Archivo:** `src/pages/research/DatasetSamplePage.tsx`

Componente que recibe el ID del dataset y muestra:
- Header con información del dataset
- Estadísticas del dataset (N, especies, formato)
- Vista de datos sintéticos en formato JSON/tabla
- Gráficos de distribución cuando aplique
- Botón para adquirir dataset completo
- Navegación de vuelta al marketplace

### 3.3 Actualizar ResearchDataMarketplace.tsx
- Importar nuevos datasets desde `researchDatasets.ts`
- Actualizar la lógica de "Ver Muestra" para navegar a `/research/sample/:id`
- Mantener modal para preview rápido

### 3.4 Actualizar Rutas (App.tsx)
- Añadir ruta: `/research/sample/:datasetId` → DatasetSamplePage

---

## Parte 4: Contenido de Cada Dataset (Muestra)

### Dataset 1: Displasia Cadera PennHIP
```json
{
  "patient_id": "SYNTH-DC-001",
  "species": "Canino",
  "breed": "Pastor Alemán",
  "age_months": 18,
  "pennhip_di_left": 0.42,
  "pennhip_di_right": 0.45,
  "ofa_grade": "Moderate",
  "bilateral": true,
  "treatment": "Manejo conservador"
}
```

### Dataset 2: Cardiomiopatía Dilatada
```json
{
  "patient_id": "SYNTH-DCM-001",
  "species": "Canino",
  "breed": "Doberman",
  "age_years": 6,
  "lvidd_mm": 58.2,
  "lvids_mm": 48.5,
  "fs_percent": 16.8,
  "ef_percent": 32,
  "arrhythmia": "VPCs",
  "stage": "B2"
}
```

### Dataset 3: ERC Felina IRIS
```json
{
  "patient_id": "SYNTH-CKD-001",
  "species": "Felino",
  "breed": "Europeo Común",
  "age_years": 12,
  "creatinine_mg_dl": 3.2,
  "sdma_ug_dl": 28,
  "upc_ratio": 0.8,
  "blood_pressure_mmhg": 165,
  "iris_stage": "3",
  "substage": "Proteinúrico/Hipertenso"
}
```

### [Continúa con 17 datasets más con estructuras similares...]

---

## Parte 5: Página de Muestra - Componentes

```text
DatasetSamplePage.tsx
├── Header (título, autor, badges)
├── StatsPanel (N, especie, formato, precio)
├── DataPreviewSection
│   ├── TabView: "JSON" | "Tabla" | "Estadísticas"
│   ├── JSONViewer (como el modal actual)
│   ├── TableView (datos en tabla interactiva)
│   └── StatsView (distribuciones, histogramas)
├── PrivacyBadge (K-Anonymity, Differential Privacy)
├── ActionButtons
│   ├── "Descargar Muestra (100 registros)"
│   └── "Adquirir Dataset Completo"
└── RelatedDatasets (otros datasets similares)
```

---

## Parte 6: Especificaciones Técnicas

### Navegación
- `/portal/research` → Marketplace principal (existente)
- `/research/sample/:id` → Página de muestra individual (nuevo)
- Modal en marketplace para preview rápido (existente, mejorado)

### Datos Sintéticos por Página
Cada página de muestra incluirá:
- 5-10 registros de ejemplo en formato JSON
- Distribución de variables principales (gráfico)
- Metadatos del dataset (fecha creación, última actualización, versión)

### Estándares Clínicos
- Scores veterinarios: PennHIP DI, IRIS, CADESI-04, OFA, Pataki
- Códigos SNOMED-VET donde aplique
- Unidades SI (mg/dL, mmHg, mm, %)

### Bilingüe (ES/EN)
- Títulos y descripciones en ambos idiomas
- Campos clínicos en inglés (estándar internacional)
- UI labels en español (contexto mercado español)

---

## Resumen de Cambios

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/data/researchDatasets.ts` | CREAR | 20 datasets con datos completos |
| `src/pages/research/DatasetSamplePage.tsx` | CREAR | Página de muestra reutilizable |
| `src/pages/ResearchDataMarketplace.tsx` | MODIFICAR | Importar datos, añadir navegación |
| `src/App.tsx` | MODIFICAR | Añadir ruta `/research/sample/:id` |

**Total:**
- 2 archivos nuevos
- 2 archivos modificados
- 20 datasets veterinarios con páginas de muestra individuales
