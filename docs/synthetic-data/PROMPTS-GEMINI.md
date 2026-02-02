# Prompts para Google Gemini - Generación de Datos Sintéticos VetSpace-X

> **Uso**: Copiar el prompt correspondiente y ejecutarlo en Google Gemini para generar datos sintéticos para cada módulo del portal.

---

## PROMPT 1: Pacientes y Tutores (Base de datos core)

```
Genera datos sintéticos para el portal veterinario VetSpace-X.

TAREA: Crear 50 mascotas (pacientes) con sus tutores correspondientes.

FORMATO OUTPUT: SQL INSERT statements para PostgreSQL/Supabase

ESPECIFICACIONES PACIENTES (tabla: patients):
- Campos: id (UUID v4), full_name, species, breed, sex, microchip_id, guardian_id (UUID), did, date_of_birth, is_neutered, created_at, updated_at
- Distribución especies: 60% Canino, 30% Felino, 10% Exóticos (Conejo, Ave, Reptil)
- Razas caninas: Labrador, Pastor Alemán, Bulldog Francés, Golden Retriever, Yorkshire, Chihuahua, Mestizo
- Razas felinas: Europeo Común, Siamés, Persa, Maine Coon
- Microchip: 15 dígitos, prefijo 724 (España), ejemplo: 724098100123456
- DID formato: did:web:vetspace.health:[nombre-slug]-[4chars-uuid]
- 70% castrados/esterilizados
- Edades: 0.5 a 15 años

ESPECIFICACIONES TUTORES (tabla: profiles):
- Campos: id (UUID v4), full_name, avatar_url (null), created_at, updated_at
- Nombres españoles realistas: María García, Carlos López, Ana Martínez, etc.
- Un tutor puede tener 1-3 mascotas

RESTRICCIONES:
- UUIDs válidos v4
- Fechas ISO 8601
- guardian_id debe referenciar un profile.id existente
- Sin duplicados en microchip_id ni did

EJEMPLO OUTPUT:
-- Insertar tutores
INSERT INTO profiles (id, full_name, created_at, updated_at) VALUES
('uuid-tutor-1', 'María García López', NOW(), NOW());

-- Insertar pacientes
INSERT INTO patients (id, full_name, species, breed, sex, microchip_id, guardian_id, did, date_of_birth, is_neutered, created_at, updated_at) VALUES
('uuid-paciente-1', 'Luna', 'Canino', 'Labrador Retriever', 'Hembra', '724098100123456', 'uuid-tutor-1', 'did:web:vetspace.health:luna-a1b2', '2020-03-15', true, NOW(), NOW());

Genera 20 tutores y 50 mascotas con estas especificaciones.
```

---

## PROMPT 2: Encuentros Clínicos con FHIR Bundle

```
Genera datos sintéticos para encuentros clínicos veterinarios.

TAREA: Crear 100 clinical_encounters con fhir_bundle JSON válido.

FORMATO OUTPUT: SQL INSERT statements con JSON embebido

ESPECIFICACIONES (tabla: clinical_encounters):
- Campos: id (UUID), patient_id (UUID existente), doctor_id (UUID), encounter_date, data_source, risk_level, fhir_bundle (JSONB), created_at

- Distribución tipos (en fhir_bundle.resourceType):
  * Immunization: 30% (vacunaciones)
  * Observation: 40% (consultas rutinarias)
  * Procedure: 20% (cirugías, limpiezas)
  * Condition: 10% (diagnósticos)

- risk_level: 10% "high", 25% "medium", 65% "normal"

- data_source (clínicas):
  * "Clínica VetSalud Norte"
  * "Hospital Veterinario Central"
  * "Centro Veterinario Costa"
  * "Clínica Felina Especializada"

- Vacunas (para Immunization):
  * Perros: DHPPi, Rabia, Leptospirosis
  * Gatos: Triple Felina, Leucemia Felina, Rabia

- Diagnósticos (para Condition):
  * Dermatitis atópica
  * Otitis externa
  * Enfermedad periodontal
  * Displasia de cadera
  * Obesidad

ESTRUCTURA fhir_bundle JSON:
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [{
    "resource": {
      "resourceType": "[Immunization|Observation|Procedure|Condition]",
      "id": "uuid",
      "status": "completed",
      ... campos específicos del tipo
    }
  }]
}

EJEMPLO para Immunization:
{
  "resourceType": "Bundle",
  "entry": [{
    "resource": {
      "resourceType": "Immunization",
      "status": "completed",
      "vaccineCode": {"coding": [{"display": "DHPPi"}]},
      "lotNumber": "LOT2024A123",
      "expirationDate": "2025-06-30"
    }
  }]
}

Fechas distribuidas en últimos 12 meses. Genera 100 encuentros.
```

---

## PROMPT 3: Hospitalizaciones Activas

```
Genera datos de pacientes hospitalizados para el módulo de hospitalización.

TAREA: Crear 15 hospitalizaciones activas (sin fecha de alta).

FORMATO OUTPUT: SQL INSERT statements

ESPECIFICACIONES (tabla: hospitalizations):
- Campos: id, patient_id, cage_number, current_status, admission_date, discharge_date (NULL), next_medication_time, treatment_notes, attending_vet_id, created_at, updated_at

- Distribución current_status:
  * critical: 15% (2-3 pacientes)
  * observation: 35% (5-6 pacientes)
  * stable: 50% (7-8 pacientes)

- cage_number:
  * "A1", "A2", "A3" (zona canina)
  * "B1", "B2", "B3" (zona felina)
  * "UCI-1", "UCI-2" (intensivos)
  * "ISO-1" (aislamiento)
  * "EXO-1" (exóticos)

- next_medication_time: intervalos de 4, 6, 8 o 12 horas desde now()

- treatment_notes (ejemplos realistas):
  * "Fluidoterapia IV Ringer Lactato 60ml/kg/día + Metronidazol 15mg/kg c/12h IV"
  * "Analgesia Meloxicam 0.1mg/kg c/24h + Tramadol 2mg/kg c/8h"
  * "Nebulización salina c/4h + Amoxicilina-Clavulánico 20mg/kg c/12h"
  * "Monitoreo ECG continuo + Pimobendan 0.25mg/kg c/12h"
  * "Insulina NPH 0.5UI/kg c/12h + Curva glucosa cada 2h"
  * "Dieta renal húmeda + Control presión arterial"

- admission_date: últimos 1-10 días

Genera 15 hospitalizaciones con variedad de estados y tratamientos.
```

---

## PROMPT 4: Órdenes de Laboratorio con DPP

```
Genera órdenes de laboratorio con payload de Pasaporte Digital de Producto.

TAREA: Crear 50 lab_orders con dpp_payload JSON completo.

FORMATO OUTPUT: SQL INSERT statements

ESPECIFICACIONES (tabla: lab_orders):
- Campos: id, patient_id, lab_tech_id, status, dpp_payload (JSONB), created_at, updated_at

- status:
  * received: 20%
  * design: 15%
  * milling: 10%
  * sent: 55%

- dpp_payload estructura:
{
  "sample_type": "Sangre|Orina|Heces|Biopsia|Citología|Raspado cutáneo",
  "tests": ["lista de tests solicitados"],
  "cold_chain": {
    "temperature": "2-8°C",
    "validated": true|false,
    "transport_time_minutes": 30-120
  },
  "blockchain_hash": "0x[64 caracteres hex]",
  "collection_date": "ISO timestamp",
  "priority": "routine|urgent|stat"
}

- Tests disponibles:
  Hematología: "Hemograma completo", "Fórmula leucocitaria", "Recuento plaquetario"
  Bioquímica: "Perfil hepático", "Perfil renal", "Glucosa", "Proteínas totales"
  Serología: "Leishmania IFI+PCR", "Ehrlichia/Anaplasma", "FeLV/FIV", "Dirofilaria"
  Endocrinología: "T4 total", "Cortisol basal", "Fructosamina"

Genera 50 órdenes con variedad de tests y estados.
```

---

## PROMPT 5: Dispositivos IoT

```
Genera datos de dispositivos IoT para monitorización de laboratorio/clínica.

TAREA: Crear 10 iot_devices con diferentes tipos y estados.

FORMATO OUTPUT: SQL INSERT statements

ESPECIFICACIONES (tabla: iot_devices):
- Campos: id, name, device_type, status, current_value, target_value, metadata (JSONB), created_at, updated_at

TIPOS DE DISPOSITIVO:

1. Refrigerador vacunas (3 unidades):
   - device_type: "refrigerator"
   - name: "Refrigerador Vacunas [Principal|Secundario|Backup]"
   - current_value: 2-8 (°C)
   - target_value: 4
   - status: "online" (2), "warning" (1)
   - metadata: {"brand": "Liebherr", "alarm_threshold_min": 2, "alarm_threshold_max": 8, "last_calibration": "ISO date"}

2. Analizadores (2 unidades):
   - device_type: "analyzer"
   - name: "Analizador Hematológico IDEXX" / "Analizador Bioquímico VetScan"
   - current_value: 0-100 (% ciclo)
   - target_value: 100
   - status: "idle" | "running" | "maintenance"
   - metadata: {"model": "ProCyte Dx", "samples_today": 15, "reagent_level": 75}

3. Sensores de stock (3 unidades):
   - device_type: "stock_sensor"
   - name: "Sensor Stock [Vacuna Rabia|Nobivac DHPPi|NexGard]"
   - current_value: unidades actuales (5-50)
   - target_value: stock mínimo (10-20)
   - status: "ok" | "low" | "critical"
   - metadata: {"product": "nombre", "lot": "LOT2024...", "expiry": "ISO date"}

4. Logger temperatura (2 unidades):
   - device_type: "temperature_logger"
   - name: "Logger Transporte Muestras [A|B]"
   - current_value: 4-6 (°C)
   - target_value: 4
   - status: "logging" | "completed"
   - metadata: {"trip_id": "uuid", "start_time": "ISO", "readings_count": 24}

Genera 10 dispositivos con variedad de estados y valores.
```

---

## PROMPT 6: Reclamaciones de Seguros

```
Genera reclamaciones de seguros veterinarios para el módulo InsurTech.

TAREA: Crear 100 smart_claims con variedad de tratamientos y estados.

FORMATO OUTPUT: SQL INSERT statements

ESPECIFICACIONES (tabla: smart_claims):
- Campos: id, patient_id, treatment_code, amount, status, evidence_url, created_at

- status:
  * pending: 20%
  * paid: 70%
  * fraud_detected: 10%

- treatment_code y amount (usar estos códigos exactos):

VACUNACIONES:
  VET-VAC-001: "Vacunación polivalente canina" (50-80€)
  VET-VAC-002: "Vacunación triple felina" (45-70€)
  VET-VAC-003: "Vacunación rabia" (25-40€)

CIRUGÍAS:
  VET-CST-001: "Castración canina macho" (150-250€)
  VET-CST-002: "Esterilización canina hembra" (200-350€)
  VET-CST-003: "Castración felina macho" (80-120€)
  VET-CST-004: "Esterilización felina hembra" (120-180€)
  VET-CIR-001: "Cirugía menor" (200-500€)
  VET-CIR-002: "Cirugía ortopédica" (800-2000€)
  VET-CIR-003: "Cirugía abdominal" (600-1500€)

DENTAL:
  VET-DEN-001: "Limpieza dental" (80-150€)
  VET-DEN-002: "Extracción dental simple" (50-100€)
  VET-DEN-003: "Extracción dental complicada" (100-200€)

HOSPITALIZACIÓN:
  VET-HOS-001: "Día hospitalización básica" (50-80€)
  VET-HOS-002: "Día UCI" (100-150€)

DIAGNÓSTICO:
  VET-IMG-001: "Radiografía simple" (40-60€)
  VET-IMG-002: "Radiografía con sedación" (80-120€)
  VET-IMG-003: "Ecografía abdominal" (60-100€)
  VET-IMG-004: "Ecocardiografía" (100-150€)
  VET-LAB-001: "Analítica básica" (40-70€)
  VET-LAB-002: "Analítica completa + serología" (80-150€)

- evidence_url formato: "ipfs://Qm[44 caracteres]" o NULL

- Distribuir fechas en últimos 6 meses

Para claims con fraud_detected:
- Montos inusualmente altos para el código
- Múltiples claims del mismo paciente en 48h
- Códigos incompatibles (ej: castración en paciente ya castrado)

Genera 100 claims con distribución realista.
```

---

## PROMPT 7: Historial de Peso

```
Genera registros de peso para seguimiento de mascotas.

TAREA: Crear 200 weight_history registros para 50 pacientes.

FORMATO OUTPUT: SQL INSERT statements

ESPECIFICACIONES (tabla: weight_history):
- Campos: id, patient_id, weight_kg, recorded_at, recorded_by (uuid vet), notes, created_at

- 3-10 registros por paciente
- Distribuidos en últimos 24 meses
- Cronológicamente ordenados por paciente

RANGOS DE PESO POR TIPO:
  Perros pequeños (Yorkshire, Chihuahua): 2-8 kg
  Perros medianos (Bulldog, Cocker): 10-25 kg
  Perros grandes (Labrador, Pastor): 25-40 kg
  Perros gigantes (Gran Danés): 40-70 kg
  Gatos: 3-7 kg
  Conejos: 1-4 kg
  Aves: 0.02-0.5 kg

PROGRESIÓN REALISTA:
- Cachorros/gatitos: incremento gradual
- Adultos: estable con ±5% variación
- Casos obesidad: pesos altos con notas de dieta
- Post-cirugía: posible pérdida temporal

NOTAS (ejemplos):
- "Control rutinario"
- "Cachorro en crecimiento normal"
- "Inicio dieta hipocalórica - objetivo -2kg"
- "Post-cirugía día 3 - recuperación favorable"
- "Pérdida apetito - derivar internista"
- "Peso estable - continuar mantenimiento"
- NULL (sin nota)

Genera 200 registros manteniendo coherencia de peso por paciente.
```

---

## PROMPT 8: Datos Epidemiológicos (TypeScript)

```
Genera datos epidemiológicos para el mapa de vigilancia One Health.

TAREA: Crear constantes TypeScript para datos epidemiológicos españoles.

FORMATO OUTPUT: TypeScript con tipos e interfaces

ESPECIFICACIONES:

interface RegionalEpiData {
  region: string;
  condition: string;
  level: 'Low' | 'Medium' | 'High' | 'Very High';
  trend: string; // "+X%" o "-X%"
  cases: number;
  lastUpdated: string; // ISO date
}

interface ZoonosisData {
  disease: string;
  status: string;
  humanRisk: 'Low' | 'Medium' | 'High';
  surveillance: 'Activa' | 'Pasiva';
  notes: string;
}

REGIONES ESPAÑA:
Madrid, Cataluña, Andalucía, Valencia, Galicia, País Vasco, Castilla y León, 
Castilla-La Mancha, Canarias, Aragón, Extremadura, Murcia, Baleares, Asturias

ENFERMEDADES VETERINARIAS:
- Leishmaniosis (zonas endémicas: Madrid, Extremadura, Aragón)
- Filariosis/Dirofilaria (zonas costeras, Canarias)
- Ehrlichiosis (sur de España)
- Parvovirosis (brotes esporádicos)
- Leptospirosis (zonas húmedas)
- Moquillo (brotes en no vacunados)

ZOONOSIS ONE HEALTH:
- Rabia (casos importados)
- Leptospirosis (correlación clima)
- Toxoplasmosis (prevalencia gatos)
- Fiebre Q (explotaciones ganaderas)
- Leishmaniosis (vector compartido)
- Hidatidosis (zonas rurales)

OUTPUT ESPERADO:
export const regionalEpidemiology: RegionalEpiData[] = [...]
export const zoonosisOneHealth: ZoonosisData[] = [...]
export const alertsAI: string[] = [...] // 5-10 alertas de ejemplo

Genera datos realistas basados en epidemiología veterinaria española.
```

---

## PROMPT 9: Datasets Sintéticos para Research Marketplace

```
Genera catálogo de datasets sintéticos para el marketplace de investigación.

TAREA: Crear 10 syntheticDatasets con especificaciones completas.

FORMATO OUTPUT: TypeScript

ESPECIFICACIONES:

interface SyntheticDataset {
  id: string; // "DS-VET-YYYY-X"
  name: string;
  size: string; // "Xk Pacientes"
  price: number; // euros
  status: 'Ready' | 'Generating' | 'Sold';
  progress?: number; // solo si Generating
  buyer?: string; // solo si Sold
  format: 'FHIR R4 JSON' | 'Parquet' | 'CSV' | 'FHIR JSON';
  species: 'Canine' | 'Feline' | 'Multi-species' | 'Exotic';
  clinicalScore?: string;
  description: string;
  breeds?: string[];
  dataPoints?: string[];
  privacyLevel: string;
  validationAccuracy: string;
}

DATASETS A GENERAR:

1. Displasia Cadera Canina (PennHIP scoring)
2. Cardiomiopatía Hipertrófica Felina (ACVIM staging)
3. Dermatitis Atópica Canina (CADESI-04)
4. Epilepsia Idiopática Canina (EEG + historial)
5. Enfermedad Renal Crónica Felina (IRIS staging)
6. Diabetes Mellitus Canina/Felina
7. Obesidad y Metabolismo (multi-especie)
8. Oncología Veterinaria - Mastocitomas
9. Oftalmología - Cataratas y Glaucoma
10. Comportamiento y Ansiedad

DISTRIBUCIÓN STATUS:
- Ready: 4-5 datasets
- Generating: 3-4 datasets (con progress 15-85%)
- Sold: 2-3 datasets (con buyer de pharma/research conocido)

COMPRADORES EJEMPLO:
- Zoetis Research
- Elanco R&D
- Boehringer Ingelheim Animal Health
- Universidad Complutense Madrid
- Royal Veterinary College
- AI Startup VetTech Labs

privacyLevel: "k-anonymity: 5, ε-differential privacy: 0.1"
validationAccuracy: "99.X% statistical match"

Precios: 30.000€ - 80.000€ según tamaño y complejidad

Genera 10 datasets con especificaciones completas y realistas.
```

---

## PROMPT 10: KPIs y Series Temporales

```
Genera datos de KPIs veterinarios para dashboard ejecutivo.

TAREA: Crear métricas y series temporales para 12 meses.

FORMATO OUTPUT: TypeScript

ESPECIFICACIONES:

interface KPIMetric {
  name: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  trendPercent: number;
  target?: number;
  status: 'good' | 'warning' | 'critical';
}

interface TimeSeriesData {
  month: string; // "2024-01", etc.
  consultations: number;
  vaccinations: number;
  surgeries: number;
  emergencies: number;
  hospitalizations: number;
  revenue?: number;
}

interface AIAlert {
  id: string;
  severity: 'info' | 'warning' | 'critical';
  message: string;
  timestamp: string;
  category: string;
}

KPIs A GENERAR:
- Éxito Quirúrgico: 94-98%
- Adherencia Vacunación: 75-85%
- NPS Tutores: 45-65
- Tiempo Medio Consulta: 15-25 min
- Tasa Reingresos (7d): 5-12%
- Cobertura Antiparasitaria: 60-80%
- Ocupación Hospitalización: 60-85%
- Satisfacción Personal: 70-90%

SERIES TEMPORALES (12 meses):
- Consultas/mes: 800-1200 (pico primavera/otoño)
- Vacunaciones/mes: 200-400 (pico primavera)
- Cirugías/mes: 50-100
- Emergencias/mes: 30-60
- Revenue/mes: 80.000-150.000€

ALERTAS AI (5-10):
- Patrones epidemiológicos
- Alertas de stock
- Anomalías en métricas
- Predicciones de demanda
- Oportunidades de mejora

Generar datos con variación estacional realista y tendencias coherentes.
```

---

## PROMPT 11: User Roles (Perfiles de Usuario)

```
Genera usuarios con diferentes roles para el sistema VetSpace-X.

TAREA: Crear 30 profiles con user_roles asignados.

FORMATO OUTPUT: SQL INSERT statements

ESPECIFICACIONES:

profiles (tabla):
- id: UUID v4
- full_name: Nombre español realista
- avatar_url: NULL o "https://api.dicebear.com/7.x/avataaars/svg?seed=[name]"
- created_at, updated_at: NOW()

user_roles (tabla):
- id: UUID v4
- user_id: referencia a profiles.id
- role: enum ('doctor', 'lab_tech', 'patient', 'researcher', 'insurance_admin', 'auditor')
- created_at: NOW()

DISTRIBUCIÓN ROLES:
- doctor: 8-10 usuarios (veterinarios)
- lab_tech: 3-4 usuarios (técnicos laboratorio)
- patient: 10-12 usuarios (tutores de mascotas)
- researcher: 3-4 usuarios (investigadores)
- insurance_admin: 2-3 usuarios (gestores seguros)
- auditor: 2 usuarios (auditores)

NOMBRES POR ROL:
Doctores: Dr./Dra. + nombre + especialidad implícita
  - Dra. Carmen Vidal Ortega
  - Dr. Miguel Ángel Torres
  
Lab_tech: Nombres técnicos
  - Ana Belén Ruiz (Técnico Lab)
  - Roberto García (Técnico Lab)

Patient: Nombres de tutores
  - María García López
  - Carlos Martínez Sánchez

Researcher: Nombres académicos
  - Dr. Fernando López PhD
  - Dra. Isabel Moreno MSc

Insurance_admin: Nombres corporativos
  - Laura Fernández (Sanitas)
  - Javier Pérez (Mapfre)

Auditor: Nombres formales
  - Alberto Sánchez Auditor
  - Elena Díaz Compliance

Generar 30 usuarios con roles variados y nombres realistas españoles.
```

---

## Notas de Uso

1. **Ejecutar en orden**: Empezar por Prompt 1 (base) y luego los demás
2. **Guardar UUIDs**: Mantener los IDs generados para referencias cruzadas
3. **Validar JSON**: Verificar que los campos JSONB sean válidos antes de insertar
4. **Ajustar cantidades**: Modificar números según necesidades
5. **Mantener coherencia**: Los patient_id deben existir antes de crear encounters/claims

---

*Prompts optimizados para Google Gemini - VetSpace-X v1.0*
