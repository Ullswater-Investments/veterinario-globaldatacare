# Guía de Datos Sintéticos para VetSpace-X

> **Propósito**: Este documento proporciona especificaciones técnicas completas para que Google Gemini genere datos sintéticos coherentes y realistas para alimentar todas las secciones del portal VetSpace-X.

---

## PARTE 1: CONTEXTO Y ARQUITECTURA

### 1.1 Introducción al Proyecto VetSpace-X

**VetSpace-X** es una plataforma de interoperabilidad para salud animal que implementa:

- **Arquitectura Federada**: Datos distribuidos entre clínicas veterinarias sin centralización
- **Enfoque One Health**: Conexión entre salud humana, animal y ambiental
- **Soberanía del Dato**: Cada clínica mantiene control sobre sus datos
- **Trazabilidad Blockchain**: Pasaportes digitales para vacunas y medicamentos
- **IA Federada**: Modelos entrenados sin mover datos sensibles

### 1.2 Modelo de Datos Principal (Supabase)

| Tabla | Descripción | Campos Clave |
|-------|-------------|--------------|
| `patients` | Mascotas (pacientes animales) | full_name, species, breed, sex, microchip_id, guardian_id, did, date_of_birth, is_neutered |
| `profiles` | Usuarios del sistema | full_name, avatar_url, id (referencia auth.users) |
| `clinical_encounters` | Visitas clínicas | patient_id, doctor_id, encounter_date, data_source, risk_level, fhir_bundle (JSONB) |
| `hospitalizations` | Ingresos hospitalarios | patient_id, cage_number, current_status, admission_date, discharge_date, next_medication_time, treatment_notes, attending_vet_id |
| `weight_history` | Historial de peso | patient_id, weight_kg, recorded_at, recorded_by, notes |
| `lab_orders` | Órdenes de laboratorio | patient_id, lab_tech_id, status, dpp_payload (JSONB) |
| `smart_claims` | Reclamaciones de seguros | patient_id, treatment_code, amount, status, evidence_url |
| `iot_devices` | Dispositivos IoT | name, device_type, status, current_value, target_value, metadata (JSONB) |
| `user_roles` | Roles de usuario | user_id, role (enum: doctor, lab_tech, patient, researcher, insurance_admin, auditor) |

---

## PARTE 2: DATOS SINTÉTICOS POR SECCIÓN

### 2.1 MÓDULO CLÍNICO (Cockpit Veterinario)

**Rutas:** `/clinical`, `/portal/doctor`

#### PACIENTES (patients)

```yaml
Cantidad: 50-100 mascotas
Distribución:
  Especies:
    - Canino: 60%
    - Felino: 30%
    - Exóticos: 10% (conejos, aves, reptiles, hurones)
  
  Razas Caninas:
    - Labrador Retriever
    - Pastor Alemán
    - Bulldog Francés
    - Golden Retriever
    - Yorkshire Terrier
    - Chihuahua
    - Mestizo
  
  Razas Felinas:
    - Europeo Común
    - Siamés
    - Persa
    - Maine Coon
    - British Shorthair
  
  Sexo: 50% Macho, 50% Hembra
  Castración: 70% castrados/esterilizados
  Edades: 0.5 a 15 años (distribución normal, media 5 años)

Formatos:
  microchip_id: 15 dígitos numéricos (ISO 11784)
    Ejemplo: "724098100123456"
    Prefijo España: 724
  
  did: "did:web:vetspace.health:[nombre-slug]-[uuid-corto]"
    Ejemplo: "did:web:vetspace.health:luna-a1b2c3d4"
  
  date_of_birth: ISO 8601 (YYYY-MM-DD)
```

#### ENCUENTROS CLÍNICOS (clinical_encounters)

```yaml
Cantidad: 200-300 visitas (últimos 12 meses)

Distribución por tipo (en fhir_bundle.resourceType):
  - Immunization: 30% (vacunaciones)
  - Observation: 40% (consultas rutinarias)
  - Procedure: 20% (cirugías, limpiezas dentales)
  - Condition: 10% (diagnósticos nuevos)

Niveles de riesgo:
  - high: 10%
  - medium: 25%
  - normal: 65%

Fuentes de datos (data_source):
  - "Clínica VetSalud Norte"
  - "Hospital Veterinario Central"
  - "Centro Veterinario Costa"
  - "Clínica Felina Especializada"
  - "Clínica Exóticos Madrid"

Vacunas comunes:
  Perros:
    - DHPPi (Moquillo, Hepatitis, Parvo, Parainfluenza)
    - Rabia
    - Leptospirosis
    - Tos de las perreras (Bordetella)
  
  Gatos:
    - Triple Felina (Panleucopenia, Rinotraqueitis, Calicivirus)
    - Leucemia Felina (FeLV)
    - Rabia

Diagnósticos frecuentes:
  - Dermatitis atópica
  - Otitis externa
  - Enfermedad periodontal
  - Displasia de cadera
  - Obesidad
  - Diabetes mellitus
  - Insuficiencia renal crónica
  - Cardiomiopatía
```

#### HISTORIAL DE PESO (weight_history)

```yaml
Cantidad: 3-10 registros por mascota

Rangos por especie/tamaño:
  Perros pequeños (Chihuahua, Yorkshire): 2-8 kg
  Perros medianos (Bulldog, Cocker): 10-25 kg
  Perros grandes (Labrador, Pastor): 25-40 kg
  Perros gigantes (Gran Danés): 40-70 kg
  Gatos: 3-7 kg
  Conejos: 1-4 kg

Notas típicas:
  - "Control rutinario"
  - "Post-cirugía - recuperación favorable"
  - "Inicio dieta especial por sobrepeso"
  - "Pérdida de peso monitoreada"
  - "Cachorro en crecimiento normal"
```

---

### 2.2 MÓDULO HOSPITALIZACIÓN

**Ruta:** `/hospitalization`

#### HOSPITALIZACIONES (hospitalizations)

```yaml
Cantidad: 10-20 pacientes ingresados (discharge_date = NULL)

Estados (current_status):
  - critical: 15% (emergencias, post-operatorio complicado)
  - observation: 35% (recuperación, monitoreo post-anestésico)
  - stable: 50% (altas programadas próximas 24-48h)

Jaulas (cage_number):
  - "A1", "A2", "A3" (zona general canina)
  - "B1", "B2", "B3" (zona general felina)
  - "UCI-1", "UCI-2" (cuidados intensivos)
  - "ISO-1", "ISO-2" (aislamiento infeccioso)
  - "EXO-1" (exóticos)

Intervalos medicación (next_medication_time):
  - Cada 4 horas (antibióticos IV, analgesia potente)
  - Cada 6 horas (antibióticos orales)
  - Cada 8 horas (antiinflamatorios)
  - Cada 12 horas (medicación crónica)

Notas de tratamiento (treatment_notes):
  - "Fluidoterapia IV Ringer Lactato 60ml/kg/día + Metronidazol 15mg/kg c/12h IV"
  - "Analgesia Meloxicam 0.1mg/kg c/24h + Tramadol 2mg/kg c/8h + Vendaje compresivo"
  - "Nebulización salina c/4h + Amoxicilina-Clavulánico 20mg/kg c/12h"
  - "Monitoreo ECG continuo + Pimobendan 0.25mg/kg c/12h"
  - "Insulina NPH 0.5UI/kg c/12h + Curva glucosa cada 2h"
  - "Dieta renal húmeda + Amlodipino 0.625mg c/24h por HTA"
```

---

### 2.3 MÓDULO LABORATORIO

**Rutas:** `/portal/lab`, `/lab-hub`

#### ÓRDENES DE LABORATORIO (lab_orders)

```yaml
Cantidad: 50-100 órdenes

Estados (status):
  - received: 20% (muestra recibida)
  - design: 15% (procesando/preparando)
  - milling: 10% (en análisis activo)
  - sent: 55% (resultados enviados)

Estructura dpp_payload (JSONB):
  sample_type: 
    - "Sangre"
    - "Orina"
    - "Heces"
    - "Biopsia"
    - "Citología"
    - "Raspado cutáneo"
    - "Líquido cefalorraquídeo"
  
  tests:
    Hematología:
      - "Hemograma completo"
      - "Fórmula leucocitaria"
      - "Recuento plaquetario"
    
    Bioquímica:
      - "Perfil hepático (ALT, AST, FA, Bilirrubina)"
      - "Perfil renal (Urea, Creatinina, Fósforo)"
      - "Glucosa"
      - "Proteínas totales y albúmina"
    
    Serología:
      - "Leishmania (IFI + PCR)"
      - "Ehrlichia/Anaplasma"
      - "FeLV/FIV (gatos)"
      - "Filaria (Dirofilaria)"
    
    Endocrinología:
      - "T4 total"
      - "Cortisol basal"
      - "Fructosamina"
  
  cold_chain:
    temperature: "2-8°C"
    validated: true/false
    transport_time_minutes: 30-120
  
  blockchain_hash: "0x..." (64 caracteres hex)
```

#### DISPOSITIVOS IoT (iot_devices)

```yaml
Cantidad: 8-12 dispositivos

Tipos (device_type):
  refrigerator:
    name: "Refrigerador Vacunas Principal"
    current_value: 2-8 (°C)
    target_value: 4
    status: "online" | "warning" | "critical"
    metadata:
      brand: "Liebherr"
      last_calibration: ISO date
      alarm_threshold_min: 2
      alarm_threshold_max: 8
  
  analyzer:
    name: "Analizador Hematológico IDEXX"
    current_value: 0-100 (% ciclo completado)
    target_value: 100
    status: "idle" | "running" | "maintenance"
    metadata:
      model: "ProCyte Dx"
      samples_today: 15
      reagent_level: 75
  
  stock_sensor:
    name: "Sensor Stock Vacuna Rabia"
    current_value: unidades actuales
    target_value: stock mínimo
    status: "ok" | "low" | "critical"
    metadata:
      product: "Rabisin"
      lot: "LOT2024A123"
      expiry: ISO date
  
  temperature_logger:
    name: "Logger Transporte Muestras"
    current_value: temperatura actual
    target_value: 4
    status: "logging" | "completed" | "alert"
```

---

### 2.4 MÓDULO SEGUROS / INSURTECH

**Rutas:** `/portal/insurance`, `/claims`

#### RECLAMACIONES (smart_claims)

```yaml
Cantidad: 100-200 reclamaciones

Estados (status):
  - pending: 20%
  - paid: 70%
  - fraud_detected: 10%

Códigos de tratamiento (treatment_code):
  Vacunaciones:
    VET-VAC-001: "Vacunación polivalente canina" (50-80€)
    VET-VAC-002: "Vacunación triple felina" (45-70€)
    VET-VAC-003: "Vacunación rabia" (25-40€)
  
  Cirugías:
    VET-CST-001: "Castración canina macho" (150-250€)
    VET-CST-002: "Esterilización canina hembra" (200-350€)
    VET-CST-003: "Castración felina macho" (80-120€)
    VET-CST-004: "Esterilización felina hembra" (120-180€)
    VET-CIR-001: "Cirugía menor (lipomas, quistes)" (200-500€)
    VET-CIR-002: "Cirugía ortopédica (fracturas)" (800-2000€)
    VET-CIR-003: "Cirugía abdominal (cuerpos extraños)" (600-1500€)
  
  Dental:
    VET-DEN-001: "Limpieza dental con ultrasonidos" (80-150€)
    VET-DEN-002: "Extracción dental simple" (50-100€)
    VET-DEN-003: "Extracción dental complicada" (100-200€)
  
  Hospitalización:
    VET-HOS-001: "Día de hospitalización básica" (50-80€)
    VET-HOS-002: "Día de UCI" (100-150€)
  
  Diagnóstico por imagen:
    VET-IMG-001: "Radiografía simple" (40-60€)
    VET-IMG-002: "Radiografía con sedación" (80-120€)
    VET-IMG-003: "Ecografía abdominal" (60-100€)
    VET-IMG-004: "Ecocardiografía" (100-150€)
  
  Laboratorio:
    VET-LAB-001: "Analítica básica (hemograma + bioquímica)" (40-70€)
    VET-LAB-002: "Analítica completa + serología" (80-150€)
    VET-LAB-003: "Citología" (30-60€)
    VET-LAB-004: "Histopatología" (80-150€)

Evidencias (evidence_url):
  Formato: "ipfs://Qm..." o "https://dpp.vetspace.health/evidence/..."
  Tipos:
    - Radiografías digitales
    - Informes de laboratorio PDF
    - Tokens DPP de vacunas
    - Fotografías clínicas
```

---

### 2.5 SUPPLY CHAIN Y PROCUREMENT

**Rutas:** `/portal/supply`, `/portal/procurement`

#### PRODUCTOS VETERINARIOS

```yaml
Vacunas:
  - Nobivac DHPPi (MSD) - Polivalente canina
  - Nobivac Lepto (MSD) - Leptospirosis
  - Nobivac Rabies (MSD) - Rabia
  - Rabisin (Boehringer) - Rabia
  - Purevax RCP (Boehringer) - Triple felina
  - Felocell CVR (Zoetis) - Triple felina
  - Eurican DAP (Boehringer) - Polivalente canina

Antiparasitarios:
  - NexGard (Boehringer) - Comprimidos antipulgas/garrapatas
  - Bravecto (MSD) - Comprimidos larga duración
  - Frontline Tri-Act (Boehringer) - Pipetas
  - Scalibor (MSD) - Collar antiparasitario
  - Milbemax (Elanco) - Antiparasitario interno
  - Drontal (Elanco) - Antiparasitario interno

Medicamentos:
  - Metacam (Boehringer) - Meloxicam antiinflamatorio
  - Synulox (Zoetis) - Amoxicilina-clavulánico
  - Convenia (Zoetis) - Cefovecina inyectable
  - Cerenia (Zoetis) - Maropitant antiemético
  - Vetmedin (Boehringer) - Pimobendan cardíaco
  - Semintra (Boehringer) - Telmisartán renal

Material quirúrgico:
  - Suturas absorbibles (Vicryl, PDS)
  - Material de osteosíntesis
  - Implantes ortopédicos
  - Material de endoscopia

Proveedores principales:
  - MSD Animal Health
  - Zoetis España
  - Boehringer Ingelheim
  - Elanco Animal Health
  - Virbac España
  - Henry Schein Animal Health
  - Distrivet

Triggers de pedido automático:
  - "Low Stock Alert" - Stock bajo mínimo
  - "Cold Chain Breach" - Rotura cadena frío
  - "Expiry Warning" - Caducidad próxima (30 días)
  - "Consumption Spike" - Aumento consumo inusual

Comisión plataforma: 1.5% sobre valor de compra
```

---

### 2.6 RESEARCH DATA MARKETPLACE

**Rutas:** `/portal/research`, `/research/marketplace`

#### DATASETS SINTÉTICOS

```typescript
syntheticDatasets = [
  {
    id: "DS-VET-2024-A",
    name: "Cohorte Displasia Cadera Canina",
    size: "15k Pacientes",
    price: 45000,
    status: "Ready",
    format: "FHIR R4 JSON",
    species: "Canine",
    clinical_score: "PennHIP DI",
    description: "Datos radiográficos y clínicos de displasia de cadera en razas grandes",
    breeds: ["Labrador", "Pastor Alemán", "Golden Retriever", "Rottweiler"]
  },
  {
    id: "DS-VET-2024-B",
    name: "Cardiomiopatía Hipertrófica Felina",
    size: "8k Pacientes",
    price: 55000,
    status: "Generating",
    progress: 72,
    format: "Parquet",
    species: "Feline",
    clinical_score: "ACVIM Stage",
    description: "Ecocardiografías y biomarcadores cardíacos en gatos"
  },
  {
    id: "DS-VET-2024-C",
    name: "Dermatitis Atópica Canina CADESI-04",
    size: "20k Pacientes",
    price: 50000,
    status: "Sold",
    buyer: "Zoetis Research",
    format: "FHIR JSON",
    species: "Canine",
    clinical_score: "CADESI-04",
    description: "Casos de dermatitis atópica con scoring clínico estandarizado"
  },
  {
    id: "DS-VET-2024-D",
    name: "Epilepsia Idiopática Canina",
    size: "5k Pacientes",
    price: 60000,
    status: "Ready",
    format: "Parquet + EEG",
    species: "Canine",
    description: "Historial de convulsiones, medicación y respuesta al tratamiento"
  },
  {
    id: "DS-VET-2024-E",
    name: "Enfermedad Renal Crónica Felina",
    size: "12k Pacientes",
    price: 48000,
    status: "Generating",
    progress: 45,
    format: "FHIR R4 JSON",
    species: "Feline",
    clinical_score: "IRIS Stage",
    description: "Progresión de ERC con analíticas seriadas y supervivencia"
  }
]
```

#### ALGORITMOS FEDERADOS

```yaml
Disponibles:
  - Detección Displasia Cadera (PennHIP/OFA scoring)
    accuracy: 94%
    input: Radiografía ventrodorsal
    output: DI score, probabilidad displasia
  
  - Screening Cardiomiopatía Felina
    accuracy: 91%
    input: Ecocardiografía + NT-proBNP
    output: Clasificación ACVIM, riesgo
  
  - Clasificación Dermatitis (CADESI score)
    accuracy: 89%
    input: Fotografías lesiones + historial
    output: CADESI-04 score, severidad
  
  - Detección Tumores Piel (MCT grading)
    accuracy: 87%
    input: Citología digitalizada
    output: Grado Patnaik, pronóstico
  
  - Predicción Epilepsia Idiopática
    accuracy: 82%
    input: EEG + historial convulsiones
    output: Probabilidad epilepsia idiopática vs sintomática
```

---

### 2.7 MÓDULO KPI DASHBOARD

**Ruta:** `/portal/kpi`

#### KPIs VETERINARIOS

```yaml
Métricas principales:
  - Éxito Quirúrgico: 94-98%
  - Adherencia Vacunación: 75-85%
  - NPS Tutores: 45-65 (escala -100 a +100)
  - Tiempo Medio Consulta: 15-25 minutos
  - Tasa Reingresos Hospitalización (7 días): 5-12%
  - Cobertura Antiparasitaria: 60-80%
  - Ratio Consultas/Emergencias: 8:1
  - Ocupación Hospitalización: 60-85%

Series temporales (últimos 12 meses):
  Consultas por mes: 800-1200 (variación estacional)
  Vacunaciones por mes: 200-400
  Cirugías por mes: 50-100
  Emergencias por mes: 30-60
  Hospitalizaciones nuevas por mes: 40-80

Alertas AI (ejemplos):
  - "Aumento 15% otitis externa en zona norte - posible epidemia estacional"
  - "Baja adherencia desparasitación en gatos senior (+10 años)"
  - "Stock vacuna rabia bajo mínimo de seguridad (quedan 12 dosis)"
  - "Incremento inusual cirugías por cuerpo extraño - revisar campaña educativa"
  - "NPS cayó 8 puntos este mes - revisar tiempos de espera"
```

---

### 2.8 MÓDULO EPIDEMIOLOGÍA / VIGILANCIA

**Rutas:** `/epidemiology`, `/business/case/15`

#### DATOS EPIDEMIOLÓGICOS

```typescript
regionalData = [
  { region: "Madrid", condition: "Leishmaniosis", level: "High", trend: "+12%", cases: 847 },
  { region: "Cataluña", condition: "Filariosis (Dirofilaria)", level: "Medium", trend: "+5%", cases: 234 },
  { region: "Andalucía", condition: "Ehrlichiosis", level: "High", trend: "+18%", cases: 1203 },
  { region: "Galicia", condition: "Leptospirosis", level: "Low", trend: "-3%", cases: 89 },
  { region: "Valencia", condition: "Parvovirosis", level: "Medium", trend: "+8%", cases: 156 },
  { region: "Extremadura", condition: "Leishmaniosis", level: "Very High", trend: "+22%", cases: 567 },
  { region: "Murcia", condition: "Filariosis", level: "High", trend: "+15%", cases: 312 },
  { region: "Canarias", condition: "Filariosis", level: "Very High", trend: "+25%", cases: 423 }
]

zoonosis_oneHealth = [
  { disease: "Rabia", status: "Casos importados", human_risk: "Low", surveillance: "Activa" },
  { disease: "Leptospirosis", status: "Endémico - correlación clima húmedo", human_risk: "Medium", surveillance: "Activa" },
  { disease: "Toxoplasmosis", status: "Prevalencia 30-40% en gatos", human_risk: "Medium (embarazadas)", surveillance: "Pasiva" },
  { disease: "Fiebre Q", status: "Brotes esporádicos en explotaciones", human_risk: "Low-Medium", surveillance: "Activa" },
  { disease: "Leishmaniosis", status: "Zoonosis emergente", human_risk: "Low", surveillance: "Activa" }
]
```

---

### 2.9 BUSINESS CASES (20 casos)

**Ruta:** `/business/case/[1-20]`

#### CASO 1 - Marketplace Derivación

```yaml
Especialidades:
  - Cardiología veterinaria
  - Oncología veterinaria
  - Neurología veterinaria
  - Dermatología veterinaria
  - Traumatología y ortopedia
  - Oftalmología veterinaria
  - Medicina interna

Métricas:
  Derivaciones mensuales: 150-300
  Valor medio derivación: 400-800€
  Comisión plataforma: 3%
  Clínicas conectadas: 215
```

#### CASO 2 - Telemedicina Veterinaria

```yaml
Tipos de consulta:
  - Triage pre-consulta: 15€
  - Seguimiento post-operatorio: 25€
  - Control enfermedad crónica: 35€
  - Segunda opinión con especialista: 60-100€

Métricas:
  Clínicas activas: 215
  Sesiones simultáneas pico: 42
  MRR (Monthly Recurring Revenue): 21.000€
  Tiempo medio sesión: 12 minutos
```

#### CASO 4 - API Diagnóstico IA

```yaml
Endpoints:
  /analyze/xray:
    cost: 1.50€/análisis
    latency: 300-500ms
    accuracy: 92%
    use_cases: ["displasia cadera", "fracturas", "megaesófago"]
  
  /analyze/dermatology:
    cost: 1.00€/análisis
    latency: 200-400ms
    accuracy: 89%
    use_cases: ["dermatitis", "tumores piel", "alopecia"]
  
  /analyze/cytology:
    cost: 0.75€/análisis
    latency: 150-300ms
    accuracy: 87%
    use_cases: ["MCT grading", "linfoma", "infecciones"]
  
  /analyze/ecg:
    cost: 0.50€/análisis
    latency: 100-200ms
    accuracy: 94%
    use_cases: ["arritmias", "cardiomiopatía"]
```

#### CASO 6 - Pasaportes Digitales DPP

```yaml
Productos trazables:
  - Vacunas (lote, caducidad, cadena frío)
  - Microchips (número, fecha implantación, veterinario)
  - Medicamentos controlados (receta, dispensación)
  - Material quirúrgico implantable

Fee: 2€ por pasaporte emitido
Volumen mensual: 5.000-10.000 pasaportes
```

#### CASO 7 - Protección Marca

```yaml
Productos monitoreados:
  - Vacunas premium (falsificaciones)
  - Antiparasitarios de marca
  - Dietas veterinarias especializadas

Alertas por geografía:
  - Asia: Alto riesgo falsificaciones
  - Sudamérica: Riesgo medio
  - Europa del Este: Riesgo medio

Verificación:
  - QR en packaging
  - NFC en productos premium
  - Verificación blockchain de lote
```

#### CASO 11 - Datos Sintéticos

```yaml
Privacy garantizada:
  k-anonymity: k=5
  ε-differential privacy: ε=0.1
  Validación estadística: 99.9% match distribuciones

Precio por dataset:
  10k pacientes: 30.000-50.000€
  50k pacientes: 100.000-150.000€
  100k pacientes: 180.000-250.000€

Compradores típicos:
  - Farmacéuticas veterinarias
  - Universidades (investigación)
  - Startups IA veterinaria
  - Aseguradoras (modelos actuariales)
```

#### CASO 13 - Ensayos Clínicos

```yaml
Criterios de reclutamiento:
  - Especie
  - Edad (rango)
  - Condición clínica específica
  - Medicación previa (exclusiones)
  - Peso corporal
  - Estado reproductivo

Revenue: 1.500€ por paciente reclutado y aceptado
Trials activos: 15-25
Pacientes en trials: 200-500
```

#### CASO 16 - Smart Claims

```yaml
Procesamiento:
  Tiempo: <1 segundo
  Accuracy: 98%
  Elementos verificados:
    - Código tratamiento válido
    - Precio dentro de rango
    - Evidencia presente (radiografía, informe)
    - Token DPP válido (si aplica)
    - Sin duplicados en 48h

Métricas:
  Claims procesados/mes: 5.000-10.000
  Tasa aprobación automática: 85%
  Ahorro vs proceso manual: 70%
```

#### CASO 17 - Fraud Scoring

```yaml
Indicadores de anomalía:
  - Upselling excesivo (procedimientos innecesarios)
  - Phantom patients (mascotas inexistentes)
  - Duplicate billing (facturación duplicada)
  - Unusual patterns (patrones atípicos de reclamación)

Risk score: 0-100
  0-30: Bajo riesgo (aprobación automática)
  31-60: Riesgo medio (revisión aleatoria)
  61-80: Alto riesgo (revisión obligatoria)
  81-100: Muy alto riesgo (bloqueo + investigación)

Alertas en tiempo real: Sí
```

---

## PARTE 3: ESPECIFICACIONES TÉCNICAS

### 3.1 Formato de Salida Esperado

Para cada sección, Gemini debe generar datos en estos formatos:

#### SQL (INSERT statements)

```sql
-- Ejemplo: Insertar paciente
INSERT INTO patients (id, full_name, species, breed, sex, microchip_id, guardian_id, did, date_of_birth, is_neutered, created_at, updated_at)
VALUES (
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'Luna',
  'Canino',
  'Labrador Retriever',
  'Hembra',
  '724098100123456',
  'g1h2i3j4-k5l6-7890-mnop-qr1234567890',
  'did:web:vetspace.health:luna-a1b2c3d4',
  '2020-03-15',
  true,
  NOW(),
  NOW()
);
```

#### TypeScript (mockData)

```typescript
export interface Patient {
  id: string;
  full_name: string;
  species: string;
  breed: string | null;
  sex: string | null;
  microchip_id: string | null;
  guardian_id: string | null;
  did: string;
  date_of_birth: string | null;
  is_neutered: boolean | null;
}

export const mockPatients: Patient[] = [
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    full_name: 'Luna',
    species: 'Canino',
    breed: 'Labrador Retriever',
    sex: 'Hembra',
    microchip_id: '724098100123456',
    guardian_id: 'g1h2i3j4-k5l6-7890-mnop-qr1234567890',
    did: 'did:web:vetspace.health:luna-a1b2c3d4',
    date_of_birth: '2020-03-15',
    is_neutered: true
  }
];
```

#### FHIR R4 (bundles clínicos)

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "resource": {
        "resourceType": "Immunization",
        "id": "imm-001",
        "status": "completed",
        "vaccineCode": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "871878002",
              "display": "Rabies vaccine"
            }
          ]
        },
        "patient": {
          "reference": "Patient/luna-a1b2c3d4"
        },
        "occurrenceDateTime": "2024-01-15T10:30:00Z",
        "lotNumber": "LOT2024A123",
        "expirationDate": "2025-06-30"
      }
    }
  ]
}
```

### 3.2 Restricciones de Integridad

```yaml
Reglas de negocio:
  - Cada mascota (patient) debe tener un tutor válido (guardian_id → profiles.id)
  - Cada encuentro clínico referencia un paciente y veterinario existentes
  - Los pesos deben ser coherentes con especie y raza
  - Las fechas deben ser cronológicamente consistentes
  - Los microchips deben ser únicos (15 dígitos, prefijo 724 para España)
  - Los DIDs siguen formato: did:web:vetspace.health:[slug]

Distribuciones realistas:
  - 80% mascotas son perros o gatos
  - 70% consultas son rutinarias
  - 15% hospitalizaciones son críticas
  - 10% claims tienen alguna anomalía (para testing fraud detection)
  - Vacunaciones tienen picos en primavera y otoño
```

### 3.3 Localización España

```yaml
Nombres de mascotas (España):
  Perros: Max, Luna, Coco, Rocky, Thor, Nala, Simba, Kira, Bruno, Toby, Lola, Zeus
  Gatos: Misi, Luna, Coco, Nala, Simba, Felix, Garfield, Michi, Tigre, Salem

Nombres de tutores:
  - María García López
  - Carlos Martínez Fernández
  - Ana Sánchez Rodríguez
  - Pedro López García
  - Laura Fernández Martín
  - Javier González Pérez
  - Elena Ruiz Díaz
  - Miguel Hernández Torres

Clínicas veterinarias:
  - Clínica VetSalud Norte (Madrid)
  - Hospital Veterinario Central (Barcelona)
  - Centro Veterinario Costa (Valencia)
  - Clínica Felina Especializada (Sevilla)
  - Hospital Veterinario 24h (Málaga)
  - Clínica Exóticos Madrid (Madrid)
  - Centro Veterinario Bilbao (Bilbao)

Aseguradoras veterinarias:
  - Sanitas Mascota
  - Mapfre Petcare
  - Adeslas Veterinario
  - Caser Salud Animal
  - Allianz Mascotas
  - AXA Animales
```

---

## PARTE 4: INSTRUCCIONES PARA GEMINI

### Prompt Template General

```
Genera datos sintéticos para el portal VetSpace-X siguiendo estas especificaciones:

CONTEXTO: [Describir la sección específica]
CANTIDAD: [Número de registros]
FORMATO: [SQL | TypeScript | JSON | FHIR]
IDIOMA: Español (España)
DOMINIO: Veterinaria / Salud Animal / One Health

RESTRICCIONES:
- Datos realistas para el mercado veterinario español
- Coherencia entre entidades relacionadas (foreign keys válidas)
- Variedad en especies, razas, edades y condiciones clínicas
- Fechas distribuidas en los últimos 12-24 meses
- UUIDs válidos v4 para todos los IDs
- Timestamps en formato ISO 8601

OUTPUT ESPERADO:
[Especificar estructura exacta según ejemplos de la guía]

VALIDACIÓN:
- Sin duplicados en campos únicos (microchip, DID)
- Pesos coherentes con especie/raza
- Códigos de tratamiento del catálogo VET-XXX-NNN
- Referencias válidas entre tablas
```

### Notas de Uso

1. **Consistencia**: Mantener los mismos UUIDs cuando se referencien entre tablas
2. **Realismo**: Usar nombres, razas y condiciones comunes en España
3. **Distribución temporal**: Evitar agrupar todos los datos en las mismas fechas
4. **Variedad**: Incluir casos edge (exóticos, emergencias, fraudes detectados)
5. **Completitud**: Generar datos para todas las tablas relacionadas

---

*Documento generado para VetSpace-X - Plataforma de Interoperabilidad Veterinaria*
*Versión 1.0 - Febrero 2026*
