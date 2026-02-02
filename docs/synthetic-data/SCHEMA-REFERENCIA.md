# Schema de Base de Datos - VetSpace-X

> **Referencia técnica** del esquema Supabase para generación de datos sintéticos.

---

## Diagrama de Relaciones

```
┌─────────────────┐     ┌─────────────────┐
│    profiles     │     │   user_roles    │
│   (usuarios)    │◄────│    (roles)      │
└────────┬────────┘     └─────────────────┘
         │
         │ guardian_id / created_by / doctor_id
         ▼
┌─────────────────┐
│    patients     │
│   (mascotas)    │
└────────┬────────┘
         │
         │ patient_id
         ▼
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │clinical_encounters│ │ hospitalizations│              │
│  └─────────────────┘  └─────────────────┘              │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │   lab_orders    │  │  weight_history │              │
│  └─────────────────┘  └─────────────────┘              │
│                                                         │
│  ┌─────────────────┐                                   │
│  │  smart_claims   │                                   │
│  └─────────────────┘                                   │
│                                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────┐
│   iot_devices   │  (independiente)
└─────────────────┘
```

---

## Tabla: profiles

**Descripción**: Usuarios del sistema (veterinarios, tutores, técnicos, etc.)

```sql
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

| Campo | Tipo | Nullable | Default | Descripción |
|-------|------|----------|---------|-------------|
| id | UUID | No | gen_random_uuid() | Identificador único (referencia auth.users) |
| full_name | TEXT | No | - | Nombre completo del usuario |
| avatar_url | TEXT | Sí | NULL | URL de imagen de perfil |
| created_at | TIMESTAMPTZ | No | now() | Fecha de creación |
| updated_at | TIMESTAMPTZ | No | now() | Última actualización |

**Ejemplo INSERT**:
```sql
INSERT INTO profiles (id, full_name, avatar_url, created_at, updated_at)
VALUES (
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'Dra. Carmen Vidal Ortega',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=carmen',
  NOW(),
  NOW()
);
```

---

## Tabla: user_roles

**Descripción**: Roles asignados a cada usuario

```sql
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id),
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enum de roles
CREATE TYPE app_role AS ENUM (
  'doctor',
  'lab_tech', 
  'patient',
  'researcher',
  'insurance_admin',
  'auditor'
);
```

| Campo | Tipo | Nullable | Default | Descripción |
|-------|------|----------|---------|-------------|
| id | UUID | No | gen_random_uuid() | Identificador único |
| user_id | UUID | No | - | FK a profiles.id |
| role | app_role | No | - | Rol del usuario |
| created_at | TIMESTAMPTZ | No | now() | Fecha de asignación |

**Valores role**:
- `doctor` - Veterinario
- `lab_tech` - Técnico de laboratorio
- `patient` - Tutor de mascota
- `researcher` - Investigador
- `insurance_admin` - Administrador de seguros
- `auditor` - Auditor

**Ejemplo INSERT**:
```sql
INSERT INTO user_roles (id, user_id, role, created_at)
VALUES (
  'r1s2t3u4-v5w6-7890-xyza-bc1234567890',
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'doctor',
  NOW()
);
```

---

## Tabla: patients

**Descripción**: Mascotas (pacientes animales)

```sql
CREATE TABLE public.patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  species TEXT,
  breed TEXT,
  sex TEXT,
  microchip_id TEXT UNIQUE,
  guardian_id UUID REFERENCES profiles(id),
  did TEXT NOT NULL UNIQUE,
  date_of_birth DATE,
  is_neutered BOOLEAN DEFAULT false,
  photo_url TEXT,
  wallet_status JSONB DEFAULT '{}',
  created_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

| Campo | Tipo | Nullable | Default | Descripción |
|-------|------|----------|---------|-------------|
| id | UUID | No | gen_random_uuid() | Identificador único |
| full_name | TEXT | No | - | Nombre de la mascota |
| species | TEXT | Sí | NULL | Especie (Canino, Felino, etc.) |
| breed | TEXT | Sí | NULL | Raza |
| sex | TEXT | Sí | NULL | Sexo (Macho, Hembra) |
| microchip_id | TEXT | Sí | NULL | Número microchip ISO 11784 (15 dígitos) |
| guardian_id | UUID | Sí | NULL | FK a profiles.id (tutor) |
| did | TEXT | No | - | Decentralized Identifier único |
| date_of_birth | DATE | Sí | NULL | Fecha de nacimiento |
| is_neutered | BOOLEAN | Sí | false | ¿Castrado/esterilizado? |
| photo_url | TEXT | Sí | NULL | URL foto del animal |
| wallet_status | JSONB | Sí | {} | Estado del wallet digital |
| created_by | UUID | Sí | NULL | FK a profiles.id (creador) |
| created_at | TIMESTAMPTZ | No | now() | Fecha de creación |
| updated_at | TIMESTAMPTZ | No | now() | Última actualización |

**Formato microchip_id**: 15 dígitos numéricos, prefijo 724 para España
- Ejemplo: `724098100123456`

**Formato did**: `did:web:vetspace.health:[nombre-slug]-[4chars]`
- Ejemplo: `did:web:vetspace.health:luna-a1b2`

**Ejemplo INSERT**:
```sql
INSERT INTO patients (
  id, full_name, species, breed, sex, microchip_id, 
  guardian_id, did, date_of_birth, is_neutered, created_at, updated_at
)
VALUES (
  'p1a2t3i4-e5n6-7890-abcd-ef1234567890',
  'Luna',
  'Canino',
  'Labrador Retriever',
  'Hembra',
  '724098100123456',
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'did:web:vetspace.health:luna-a1b2',
  '2020-03-15',
  true,
  NOW(),
  NOW()
);
```

---

## Tabla: clinical_encounters

**Descripción**: Visitas clínicas / encuentros médicos

```sql
CREATE TABLE public.clinical_encounters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES patients(id),
  doctor_id UUID REFERENCES profiles(id),
  encounter_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  data_source TEXT NOT NULL,
  risk_level TEXT,
  fhir_bundle JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

| Campo | Tipo | Nullable | Default | Descripción |
|-------|------|----------|---------|-------------|
| id | UUID | No | gen_random_uuid() | Identificador único |
| patient_id | UUID | No | - | FK a patients.id |
| doctor_id | UUID | Sí | NULL | FK a profiles.id (veterinario) |
| encounter_date | TIMESTAMPTZ | No | now() | Fecha del encuentro |
| data_source | TEXT | No | - | Origen de los datos (nombre clínica) |
| risk_level | TEXT | Sí | NULL | Nivel de riesgo (high, medium, normal) |
| fhir_bundle | JSONB | No | {} | Datos clínicos en formato FHIR R4 |
| created_at | TIMESTAMPTZ | No | now() | Fecha de creación |

**Valores risk_level**: `high`, `medium`, `normal`

**Estructura fhir_bundle**:
```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "resource": {
        "resourceType": "Immunization|Observation|Procedure|Condition",
        "id": "uuid",
        "status": "completed",
        // ... campos específicos del tipo
      }
    }
  ]
}
```

---

## Tabla: hospitalizations

**Descripción**: Ingresos hospitalarios

```sql
CREATE TABLE public.hospitalizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES patients(id),
  admission_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  discharge_date TIMESTAMPTZ,
  cage_number TEXT NOT NULL,
  current_status TEXT NOT NULL DEFAULT 'stable',
  next_medication_time TIMESTAMPTZ,
  treatment_notes TEXT,
  attending_vet_id UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

| Campo | Tipo | Nullable | Default | Descripción |
|-------|------|----------|---------|-------------|
| id | UUID | No | gen_random_uuid() | Identificador único |
| patient_id | UUID | No | - | FK a patients.id |
| admission_date | TIMESTAMPTZ | No | now() | Fecha de ingreso |
| discharge_date | TIMESTAMPTZ | Sí | NULL | Fecha de alta (NULL si activo) |
| cage_number | TEXT | No | - | Número de jaula/box |
| current_status | TEXT | No | 'stable' | Estado actual |
| next_medication_time | TIMESTAMPTZ | Sí | NULL | Próxima medicación |
| treatment_notes | TEXT | Sí | NULL | Notas de tratamiento |
| attending_vet_id | UUID | Sí | NULL | FK a profiles.id |
| created_at | TIMESTAMPTZ | No | now() | Fecha de creación |
| updated_at | TIMESTAMPTZ | No | now() | Última actualización |

**Valores current_status**: `critical`, `observation`, `stable`

**Valores cage_number**: `A1-A3`, `B1-B3`, `UCI-1`, `UCI-2`, `ISO-1`, `EXO-1`

---

## Tabla: weight_history

**Descripción**: Historial de peso de las mascotas

```sql
CREATE TABLE public.weight_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES patients(id),
  weight_kg NUMERIC NOT NULL,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  recorded_by UUID REFERENCES profiles(id),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

| Campo | Tipo | Nullable | Default | Descripción |
|-------|------|----------|---------|-------------|
| id | UUID | No | gen_random_uuid() | Identificador único |
| patient_id | UUID | No | - | FK a patients.id |
| weight_kg | NUMERIC | No | - | Peso en kilogramos |
| recorded_at | TIMESTAMPTZ | No | now() | Fecha del registro |
| recorded_by | UUID | Sí | NULL | FK a profiles.id (quien registró) |
| notes | TEXT | Sí | NULL | Notas adicionales |
| created_at | TIMESTAMPTZ | No | now() | Fecha de creación |

**Rangos de peso típicos**:
- Perros pequeños: 2-8 kg
- Perros medianos: 10-25 kg
- Perros grandes: 25-40 kg
- Gatos: 3-7 kg

---

## Tabla: lab_orders

**Descripción**: Órdenes de laboratorio

```sql
CREATE TABLE public.lab_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES patients(id),
  lab_tech_id UUID REFERENCES profiles(id),
  status TEXT NOT NULL DEFAULT 'received',
  dpp_payload JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

| Campo | Tipo | Nullable | Default | Descripción |
|-------|------|----------|---------|-------------|
| id | UUID | No | gen_random_uuid() | Identificador único |
| patient_id | UUID | No | - | FK a patients.id |
| lab_tech_id | UUID | Sí | NULL | FK a profiles.id |
| status | TEXT | No | 'received' | Estado de la orden |
| dpp_payload | JSONB | No | {} | Payload del Digital Product Passport |
| created_at | TIMESTAMPTZ | No | now() | Fecha de creación |
| updated_at | TIMESTAMPTZ | No | now() | Última actualización |

**Valores status**: `received`, `design`, `milling`, `sent`

**Estructura dpp_payload**:
```json
{
  "sample_type": "Sangre|Orina|Heces|Biopsia|Citología",
  "tests": ["Hemograma completo", "Perfil renal"],
  "cold_chain": {
    "temperature": "2-8°C",
    "validated": true,
    "transport_time_minutes": 45
  },
  "blockchain_hash": "0x...",
  "collection_date": "2024-01-15T10:30:00Z",
  "priority": "routine|urgent|stat"
}
```

---

## Tabla: smart_claims

**Descripción**: Reclamaciones de seguros veterinarios

```sql
CREATE TABLE public.smart_claims (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES patients(id),
  treatment_code TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  evidence_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

| Campo | Tipo | Nullable | Default | Descripción |
|-------|------|----------|---------|-------------|
| id | UUID | No | gen_random_uuid() | Identificador único |
| patient_id | UUID | No | - | FK a patients.id |
| treatment_code | TEXT | No | - | Código de tratamiento |
| amount | NUMERIC | No | - | Importe en euros |
| status | TEXT | No | 'pending' | Estado de la reclamación |
| evidence_url | TEXT | Sí | NULL | URL de evidencia |
| created_at | TIMESTAMPTZ | No | now() | Fecha de creación |

**Valores status**: `pending`, `paid`, `fraud_detected`

**Códigos de tratamiento**:
- `VET-VAC-XXX` - Vacunaciones
- `VET-CST-XXX` - Castraciones/Esterilizaciones
- `VET-CIR-XXX` - Cirugías
- `VET-DEN-XXX` - Dental
- `VET-HOS-XXX` - Hospitalización
- `VET-IMG-XXX` - Diagnóstico por imagen
- `VET-LAB-XXX` - Laboratorio

---

## Tabla: iot_devices

**Descripción**: Dispositivos IoT de monitorización

```sql
CREATE TABLE public.iot_devices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  device_type TEXT NOT NULL,
  status TEXT NOT NULL,
  current_value INTEGER DEFAULT 0,
  target_value INTEGER,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

| Campo | Tipo | Nullable | Default | Descripción |
|-------|------|----------|---------|-------------|
| id | UUID | No | gen_random_uuid() | Identificador único |
| name | TEXT | No | - | Nombre del dispositivo |
| device_type | TEXT | No | - | Tipo de dispositivo |
| status | TEXT | No | - | Estado actual |
| current_value | INTEGER | Sí | 0 | Valor actual |
| target_value | INTEGER | Sí | NULL | Valor objetivo |
| metadata | JSONB | Sí | {} | Metadatos adicionales |
| created_at | TIMESTAMPTZ | No | now() | Fecha de creación |
| updated_at | TIMESTAMPTZ | No | now() | Última actualización |

**Valores device_type**: `refrigerator`, `analyzer`, `stock_sensor`, `temperature_logger`

**Valores status por tipo**:
- refrigerator: `online`, `warning`, `critical`
- analyzer: `idle`, `running`, `maintenance`
- stock_sensor: `ok`, `low`, `critical`
- temperature_logger: `logging`, `completed`, `alert`

---

## Índices Recomendados

```sql
-- Búsqueda por microchip
CREATE INDEX idx_patients_microchip ON patients(microchip_id);

-- Búsqueda por DID
CREATE INDEX idx_patients_did ON patients(did);

-- Encuentros por fecha
CREATE INDEX idx_encounters_date ON clinical_encounters(encounter_date DESC);

-- Hospitalizaciones activas
CREATE INDEX idx_hospitalizations_active ON hospitalizations(discharge_date) 
  WHERE discharge_date IS NULL;

-- Claims por estado
CREATE INDEX idx_claims_status ON smart_claims(status);

-- Lab orders por estado
CREATE INDEX idx_lab_orders_status ON lab_orders(status);
```

---

## Validaciones de Datos

### Microchip (ISO 11784)
- Exactamente 15 dígitos
- Prefijo 724 para España
- Único en toda la tabla

### DID (Decentralized Identifier)
- Formato: `did:web:vetspace.health:[slug]`
- Slug: nombre-mascota + 4 caracteres únicos
- Único en toda la tabla

### Peso
- Siempre positivo
- Coherente con especie/raza
- Variación máxima 20% entre registros consecutivos (salvo nota)

### Fechas
- encounter_date ≥ patient.date_of_birth
- discharge_date ≥ admission_date
- recorded_at ordenado cronológicamente por paciente

---

*Schema VetSpace-X v1.0 - Febrero 2026*
