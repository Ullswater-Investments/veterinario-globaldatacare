
## Plan: Documento de Especificación de Datos Sintéticos para VetSpace-X

### Objetivo
Crear un documento técnico exhaustivo que sirva como guía para que Google Gemini genere datos sintéticos coherentes y realistas para alimentar todas las secciones del portal VetSpace-X.

---

### Estructura del Documento

El documento se estructurará en formato Markdown con las siguientes secciones principales:

---

## PARTE 1: CONTEXTO Y ARQUITECTURA

### 1.1 Introducción al Proyecto VetSpace-X
- Plataforma de interoperabilidad para salud animal
- Enfoque One Health (conexión humano-animal-ambiente)
- Arquitectura federada de datos veterinarios

### 1.2 Modelo de Datos Principal (Supabase)
Tablas existentes que requieren población:

| Tabla | Descripción | Campos Clave |
|-------|-------------|--------------|
| `patients` | Mascotas (pacientes animales) | full_name, species, breed, sex, microchip_id, guardian_id, did, date_of_birth |
| `profiles` | Usuarios (veterinarios, tutores, investigadores) | full_name, avatar_url |
| `clinical_encounters` | Visitas clínicas | patient_id, doctor_id, encounter_date, data_source, risk_level, fhir_bundle (JSON) |
| `hospitalizations` | Ingresos hospitalarios | patient_id, cage_number, current_status, admission_date, next_medication_time, treatment_notes |
| `weight_history` | Historial de peso | patient_id, weight_kg, recorded_at, notes |
| `lab_orders` | Órdenes de laboratorio | patient_id, lab_tech_id, status, dpp_payload (JSON) |
| `smart_claims` | Reclamaciones de seguros | patient_id, treatment_code, amount, status, evidence_url |
| `iot_devices` | Dispositivos IoT | name, device_type, status, current_value, target_value, metadata |
| `user_roles` | Roles de usuario | user_id, role (enum: doctor, lab_tech, patient, researcher, insurance_admin, auditor) |

---

## PARTE 2: DATOS SINTÉTICOS POR SECCIÓN

### 2.1 MÓDULO CLÍNICO (Cockpit Veterinario)

**Ruta:** `/clinical`, `/portal/doctor`

**Datos requeridos:**

```text
PACIENTES (patients):
- 50-100 mascotas con distribución:
  - Especies: 60% Perros, 30% Gatos, 10% Exóticos (conejos, aves, reptiles)
  - Razas: Labrador, Pastor Alemán, Bulldog Francés, Siamés, Persa, etc.
  - Sexo: 50% Macho, 50% Hembra
  - Estado castración: 70% castrados
  - Microchips: Formato ISO 11784 (15 dígitos numéricos)
  - DIDs: formato did:web:vetspace.health:[nombre-mascota-uuid]
  - Edades: 0.5 a 15 años

ENCUENTROS CLÍNICOS (clinical_encounters):
- 200-300 visitas distribuidas en últimos 12 meses
- Tipos de visita (fhir_bundle.resourceType):
  - Immunization: Vacunaciones (Rabia, DHPPi, Triple Felina)
  - Procedure: Cirugías (Castración, Limpieza dental, Extracción tumores)
  - Observation: Consultas rutinarias
  - Condition: Diagnósticos (Dermatitis, Otitis, Displasia cadera)
- Niveles de riesgo: 10% high, 25% medium, 65% normal
- Fuentes de datos: "Clínica VetSalud Norte", "Hospital Veterinario Central", "Clínica Felina Especializada"

HISTORIAL DE PESO (weight_history):
- 3-10 registros por mascota
- Pesos realistas según especie/raza:
  - Perros pequeños: 2-8 kg
  - Perros medianos: 10-25 kg
  - Perros grandes: 25-50 kg
  - Gatos: 3-7 kg
- Notas: "Control rutinario", "Post-cirugía", "Dieta especial"
```

---

### 2.2 MÓDULO HOSPITALIZACIÓN

**Ruta:** `/hospitalization`

**Datos requeridos:**

```text
HOSPITALIZACIONES (hospitalizations):
- 10-20 pacientes ingresados activamente (discharge_date = NULL)
- Estados distribuidos:
  - critical: 15% (emergencias, post-operatorio complicado)
  - observation: 35% (recuperación, monitoreo)
  - stable: 50% (altas programadas)
- cage_number: "A1", "A2", "B1", "B2", "UCI-1", "ISO-1" (aislamiento)
- next_medication_time: Intervalos de 4, 6, 8, 12 horas
- treatment_notes: Descripciones veterinarias realistas
  - "Fluidoterapia IV + Metronidazol 15mg/kg c/12h"
  - "Analgesia Meloxicam 0.1mg/kg + Vendaje compresivo"
  - "Nebulización c/4h + Amoxicilina 20mg/kg"
```

---

### 2.3 MÓDULO LABORATORIO

**Ruta:** `/portal/lab`, `/lab-hub`

**Datos requeridos:**

```text
ÓRDENES DE LABORATORIO (lab_orders):
- 50-100 órdenes con estados:
  - received: 20%
  - design: 15% (procesando)
  - milling: 10% (en análisis)
  - sent: 55% (completadas)

DPP_PAYLOAD (JSON) - Adaptado a veterinaria:
{
  "sample_type": "Sangre" | "Orina" | "Heces" | "Biopsia" | "Citología",
  "tests": ["Hemograma", "Bioquímica", "Serología Leishmania"],
  "cold_chain": {
    "temperature": "2-8°C",
    "validated": true,
    "transport_time_minutes": 45
  },
  "blockchain_hash": "0x..."
}

DISPOSITIVOS IoT (iot_devices):
- Refrigeradores de vacunas (2-8°C, target 4°C)
- Analizadores hematológicos (ciclos de análisis)
- Stock de reactivos (niveles mínimos/actuales)
- Sensores de temperatura de muestras
```

---

### 2.4 MÓDULO SEGUROS / INSURTECH

**Ruta:** `/portal/insurance`, `/claims`

**Datos requeridos:**

```text
RECLAMACIONES (smart_claims):
- 100-200 reclamaciones con distribución:
  - pending: 20%
  - paid: 70%
  - fraud_detected: 10%

CÓDIGOS DE TRATAMIENTO (adaptados a veterinaria):
- VET-VAC-001: Vacunación polivalente (50-80€)
- VET-CST-001: Castración canina (150-300€)
- VET-CST-002: Castración felina (100-200€)
- VET-DEN-001: Limpieza dental (80-150€)
- VET-CIR-001: Cirugía menor (200-500€)
- VET-CIR-002: Cirugía ortopédica (800-2000€)
- VET-HOS-001: Día hospitalización (50-100€/día)
- VET-IMG-001: Radiografía (40-80€)
- VET-IMG-002: Ecografía (60-120€)
- VET-LAB-001: Analítica básica (30-60€)

EVIDENCIAS:
- URLs de radiografías, ecografías, informes
- Tokens DPP de vacunas administradas
```

---

### 2.5 SUPPLY CHAIN Y PROCUREMENT

**Ruta:** `/portal/supply`, `/portal/procurement`

**Datos requeridos:**

```text
PRODUCTOS VETERINARIOS:
- Vacunas: Nobivac DHPPi, Rabisin, Purevax RCP
- Antiparasitarios: Nexgard, Bravecto, Frontline
- Medicamentos: Metacam, Synulox, Convenia
- Material quirúrgico: Suturas, material de osteosíntesis
- Consumibles: Guantes, jeringas, catéteres

PROVEEDORES:
- MSD Animal Health
- Zoetis
- Boehringer Ingelheim
- Elanco
- Virbac
- Henry Schein Animal Health

ÓRDENES AUTOMATIZADAS:
- Triggers: "Low Stock Sensor", "Cold Chain Alert", "Expiry Prediction"
- Valores de comisión: 1.5% sobre compras
```

---

### 2.6 RESEARCH DATA MARKETPLACE

**Ruta:** `/portal/research`, `/research/marketplace`

**Datos requeridos:**

```text
DATASETS SINTÉTICOS (syntheticDatasets):
[
  {
    id: "DS-VET-2024-A",
    name: "Cohorte Displasia Cadera Canina",
    size: "15k Pacientes",
    price: 45000,
    status: "Ready",
    format: "FHIR R4 JSON",
    species: "Canine",
    clinical_score: "PennHIP DI"
  },
  {
    id: "DS-VET-2024-B",
    name: "Cardiomiopatía Hipertrófica Felina",
    size: "8k Pacientes",
    price: 55000,
    status: "Generating",
    progress: 72,
    format: "Parquet",
    species: "Feline"
  },
  {
    id: "DS-VET-2024-C",
    name: "Dermatitis Atópica Canina CADESI-04",
    size: "20k Pacientes",
    price: 50000,
    status: "Sold",
    buyer: "Zoetis Research",
    format: "FHIR JSON"
  }
]

ALGORITMOS FEDERADOS:
- Detección Displasia Cadera (PennHIP/OFA scoring)
- Screening Cardiomiopatía Felina
- Clasificación Dermatitis (CADESI score)
- Detección Tumores Piel (Mast Cell Tumor grading)
- Predicción Epilepsia Idiopática
```

---

### 2.7 MÓDULO KPI DASHBOARD

**Ruta:** `/portal/kpi`

**Datos requeridos:**

```text
KPIs VETERINARIOS:
- Éxito Quirúrgico: 94-98%
- Adherencia Vacunación: 75-85%
- NPS Tutores: 45-65
- Tiempo Medio Consulta: 15-25 min
- Tasa Reingresos Hospitalización: 5-12%
- Cobertura Antiparasitaria: 60-80%

SERIES TEMPORALES (últimos 12 meses):
- Consultas por mes: 800-1200
- Vacunaciones por mes: 200-400
- Cirugías por mes: 50-100
- Emergencias por mes: 30-60

ALERTAS AI:
- "Aumento 15% otitis en zona norte - posible epidemia"
- "Baja adherencia desparasitación en gatos senior"
- "Stock vacuna rabia bajo mínimo de seguridad"
```

---

### 2.8 MÓDULO EPIDEMIOLOGÍA / VIGILANCIA

**Ruta:** `/epidemiology`, `/business/case/15`

**Datos requeridos:**

```text
DATOS EPIDEMIOLÓGICOS:
[
  { region: "Madrid", condition: "Leishmaniosis", level: "High", trend: "+12%" },
  { region: "Cataluña", condition: "Filariosis", level: "Medium", trend: "+5%" },
  { region: "Andalucía", condition: "Ehrlichiosis", level: "High", trend: "+18%" },
  { region: "Galicia", condition: "Leptospirosis", level: "Low", trend: "-3%" },
  { region: "Valencia", condition: "Parvovirosis", level: "Medium", trend: "+8%" }
]

ZOONOSIS (One Health):
- Rabia: Casos importados
- Leptospirosis: Correlación clima húmedo
- Toxoplasmosis: Prevalencia poblacional
- Fiebre Q: Brotes en explotaciones
```

---

### 2.9 BUSINESS CASES (20 casos)

**Ruta:** `/business/case/[1-20]`

Cada caso de negocio requiere datos específicos. A continuación los principales adaptados a veterinaria:

```text
CASO 1 - Marketplace Derivación:
- Referrals entre clínicas generalistas y especialistas
- Especialidades: Cardiología, Oncología, Neurología, Dermatología, Traumatología
- Comisiones: 3% sobre valor del tratamiento

CASO 2 - Telemedicina Veterinaria:
- Videoconsultas: Triage, Post-operatorio, Seguimiento crónico
- Métricas: 215 clínicas, 42 sesiones activas, MRR 21k€

CASO 4 - API Diagnóstico IA:
- Endpoints: /analyze/xray, /analyze/dermatology, /analyze/cytology
- Costos: 0.50€ - 1.50€ por análisis
- Latencias: 100-500ms

CASO 6 - Pasaportes Digitales DPP:
- Productos: Vacunas, Microchips, Medicamentos controlados
- Trazabilidad: Lote, Fecha caducidad, Cadena frío
- Fee: 2€ por pasaporte emitido

CASO 7 - Protección Marca:
- Detección falsificaciones: Vacunas, Antiparasitarios premium
- Alertas por geografía: Asia, Sudamérica
- Verificación autenticidad por QR/NFC

CASO 11 - Datos Sintéticos:
- Cohortes para pharma veterinaria
- Privacy: k-anonymity (k=5), ε-differential privacy (0.1)
- Validación estadística: 99.9% match

CASO 13 - Ensayos Clínicos:
- Reclutamiento para trials veterinarios
- Criterios: Especie, Edad, Condición, Medicación previa
- Revenue: 1.500€ por paciente reclutado

CASO 16 - Smart Claims:
- Procesamiento automático de reclamaciones
- Evidencia: Radiografías + Códigos tratamiento + DPP Token
- Tiempo procesamiento: <1 segundo

CASO 17 - Fraud Scoring:
- Detección anomalías: Upselling, Phantom patients
- Risk scores: 0-100
- Alertas en tiempo real
```

---

## PARTE 3: ESPECIFICACIONES TÉCNICAS

### 3.1 Formato de Salida Esperado

```text
Para cada sección, Gemini debe generar:

1. DATOS SQL (INSERT statements):
   - Compatibles con PostgreSQL/Supabase
   - UUIDs válidos para IDs
   - Timestamps en formato ISO 8601
   - JSON válido para campos JSONB

2. DATOS TypeScript (mockData):
   - Exportados como constantes tipadas
   - Interfaces TypeScript incluidas
   - Integridad referencial entre entidades

3. DATOS FHIR R4 (bundles clínicos):
   - Recursos: Immunization, Procedure, Observation, Condition
   - Códigos SNOMED-VET
   - Formato JSON válido
```

### 3.2 Restricciones de Integridad

```text
REGLAS DE NEGOCIO:
- Cada mascota (patient) debe tener un tutor (guardian_id → profiles.id)
- Cada encuentro clínico referencia un paciente y un veterinario válidos
- Los pesos deben ser coherentes con la especie/raza
- Las fechas deben ser cronológicamente consistentes
- Los microchips deben ser únicos (15 dígitos)
- Los DIDs deben seguir el formato did:web:vetspace.health:[slug]

DISTRIBUCIONES REALISTAS:
- 80% de mascotas son perros o gatos
- 70% de consultas son rutinarias
- 15% de hospitalizaciones son críticas
- 10% de claims tienen alguna anomalía
```

### 3.3 Localización España

```text
NOMBRES DE MASCOTAS (España):
- Perros: Max, Luna, Coco, Rocky, Thor, Nala, Simba, Kira
- Gatos: Misi, Luna, Coco, Nala, Simba, Felix, Garfield

NOMBRES DE TUTORES:
- María García, Carlos López, Ana Martínez, Pedro Sánchez, Laura Fernández

CLÍNICAS VETERINARIAS:
- Clínica VetSalud Norte (Madrid)
- Hospital Veterinario Central (Barcelona)
- Centro Veterinario Costa (Valencia)
- Clínica Felina Especializada (Sevilla)

ASEGURADORAS VETERINARIAS:
- Sanitas Mascota
- Mapfre Petcare
- Adeslas Veterinario
- Caser Salud Animal
```

---

## PARTE 4: INSTRUCCIONES PARA GEMINI

### Prompt Template Sugerido

```text
Genera datos sintéticos para el portal VetSpace-X siguiendo estas especificaciones:

CONTEXTO: [Describir la sección específica]
CANTIDAD: [Número de registros]
FORMATO: [SQL/TypeScript/JSON]
IDIOMA: Español (España)
DOMINIO: Veterinaria / Salud Animal / One Health

RESTRICCIONES:
- Datos realistas para el mercado español
- Coherencia entre entidades relacionadas
- Variedad en especies, razas y condiciones
- Fechas en los últimos 12-24 meses

OUTPUT ESPERADO:
[Especificar estructura exacta]
```

---

## Archivos a Crear

| Archivo | Descripción |
|---------|-------------|
| `docs/synthetic-data/GUIA-GEMINI-DATOS-SINTETICOS.md` | Documento principal con todas las especificaciones |
| `docs/synthetic-data/PROMPTS-GEMINI.md` | Colección de prompts listos para usar con Gemini |
| `docs/synthetic-data/SCHEMA-REFERENCIA.md` | Schema de base de datos documentado |
| `docs/synthetic-data/EJEMPLOS-OUTPUT.md` | Ejemplos de datos generados correctamente |

---

## Resultado Esperado

Este documento permitirá:

1. **Consistencia**: Todos los datos sintéticos seguirán el mismo estándar
2. **Realismo**: Datos coherentes con el contexto veterinario español
3. **Completitud**: Cobertura de todas las secciones del portal
4. **Reutilización**: Prompts listos para generar más datos cuando sea necesario
5. **Validación**: Reglas claras para verificar la calidad de los datos generados
