# Ejemplos de Output - Datos Sintéticos VetSpace-X

> **Ejemplos validados** de datos sintéticos correctamente generados para cada tabla.

---

## 1. Perfiles de Usuario (profiles)

### SQL
```sql
INSERT INTO profiles (id, full_name, avatar_url, created_at, updated_at) VALUES
('d1a2b3c4-5678-90ab-cdef-111111111111', 'Dra. Carmen Vidal Ortega', 'https://api.dicebear.com/7.x/avataaars/svg?seed=carmen', NOW(), NOW()),
('d2a2b3c4-5678-90ab-cdef-222222222222', 'Dr. Miguel Ángel Torres Ruiz', 'https://api.dicebear.com/7.x/avataaars/svg?seed=miguel', NOW(), NOW()),
('d3a2b3c4-5678-90ab-cdef-333333333333', 'Ana Belén Ruiz García', NULL, NOW(), NOW()),
('t1a2b3c4-5678-90ab-cdef-444444444444', 'María García López', NULL, NOW(), NOW()),
('t2a2b3c4-5678-90ab-cdef-555555555555', 'Carlos Martínez Fernández', NULL, NOW(), NOW()),
('r1a2b3c4-5678-90ab-cdef-666666666666', 'Dr. Fernando López PhD', NULL, NOW(), NOW()),
('i1a2b3c4-5678-90ab-cdef-777777777777', 'Laura Fernández Castro', NULL, NOW(), NOW()),
('a1a2b3c4-5678-90ab-cdef-888888888888', 'Alberto Sánchez Díaz', NULL, NOW(), NOW());
```

### TypeScript
```typescript
export interface Profile {
  id: string;
  full_name: string;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export const mockProfiles: Profile[] = [
  {
    id: 'd1a2b3c4-5678-90ab-cdef-111111111111',
    full_name: 'Dra. Carmen Vidal Ortega',
    avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carmen',
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-01-15T08:00:00Z'
  },
  {
    id: 'd2a2b3c4-5678-90ab-cdef-222222222222',
    full_name: 'Dr. Miguel Ángel Torres Ruiz',
    avatar_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=miguel',
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-01-15T08:00:00Z'
  }
];
```

---

## 2. Roles de Usuario (user_roles)

### SQL
```sql
INSERT INTO user_roles (id, user_id, role, created_at) VALUES
('ur1-0000-0000-0000-000000000001', 'd1a2b3c4-5678-90ab-cdef-111111111111', 'doctor', NOW()),
('ur2-0000-0000-0000-000000000002', 'd2a2b3c4-5678-90ab-cdef-222222222222', 'doctor', NOW()),
('ur3-0000-0000-0000-000000000003', 'd3a2b3c4-5678-90ab-cdef-333333333333', 'lab_tech', NOW()),
('ur4-0000-0000-0000-000000000004', 't1a2b3c4-5678-90ab-cdef-444444444444', 'patient', NOW()),
('ur5-0000-0000-0000-000000000005', 't2a2b3c4-5678-90ab-cdef-555555555555', 'patient', NOW()),
('ur6-0000-0000-0000-000000000006', 'r1a2b3c4-5678-90ab-cdef-666666666666', 'researcher', NOW()),
('ur7-0000-0000-0000-000000000007', 'i1a2b3c4-5678-90ab-cdef-777777777777', 'insurance_admin', NOW()),
('ur8-0000-0000-0000-000000000008', 'a1a2b3c4-5678-90ab-cdef-888888888888', 'auditor', NOW());
```

---

## 3. Pacientes / Mascotas (patients)

### SQL
```sql
INSERT INTO patients (id, full_name, species, breed, sex, microchip_id, guardian_id, did, date_of_birth, is_neutered, created_by, created_at, updated_at) VALUES
('p001-aaaa-bbbb-cccc-000000000001', 'Luna', 'Canino', 'Labrador Retriever', 'Hembra', '724098100000001', 't1a2b3c4-5678-90ab-cdef-444444444444', 'did:web:vetspace.health:luna-a1b2', '2020-03-15', true, 'd1a2b3c4-5678-90ab-cdef-111111111111', NOW(), NOW()),
('p002-aaaa-bbbb-cccc-000000000002', 'Max', 'Canino', 'Pastor Alemán', 'Macho', '724098100000002', 't1a2b3c4-5678-90ab-cdef-444444444444', 'did:web:vetspace.health:max-c3d4', '2019-07-22', true, 'd1a2b3c4-5678-90ab-cdef-111111111111', NOW(), NOW()),
('p003-aaaa-bbbb-cccc-000000000003', 'Misi', 'Felino', 'Europeo Común', 'Hembra', '724098100000003', 't2a2b3c4-5678-90ab-cdef-555555555555', 'did:web:vetspace.health:misi-e5f6', '2021-11-08', true, 'd2a2b3c4-5678-90ab-cdef-222222222222', NOW(), NOW()),
('p004-aaaa-bbbb-cccc-000000000004', 'Rocky', 'Canino', 'Bulldog Francés', 'Macho', '724098100000004', 't2a2b3c4-5678-90ab-cdef-555555555555', 'did:web:vetspace.health:rocky-g7h8', '2022-05-30', false, 'd2a2b3c4-5678-90ab-cdef-222222222222', NOW(), NOW()),
('p005-aaaa-bbbb-cccc-000000000005', 'Simba', 'Felino', 'Siamés', 'Macho', '724098100000005', 't1a2b3c4-5678-90ab-cdef-444444444444', 'did:web:vetspace.health:simba-i9j0', '2023-01-14', false, 'd1a2b3c4-5678-90ab-cdef-111111111111', NOW(), NOW());
```

### TypeScript
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
  is_neutered: boolean;
}

export const mockPatients: Patient[] = [
  {
    id: 'p001-aaaa-bbbb-cccc-000000000001',
    full_name: 'Luna',
    species: 'Canino',
    breed: 'Labrador Retriever',
    sex: 'Hembra',
    microchip_id: '724098100000001',
    guardian_id: 't1a2b3c4-5678-90ab-cdef-444444444444',
    did: 'did:web:vetspace.health:luna-a1b2',
    date_of_birth: '2020-03-15',
    is_neutered: true
  },
  {
    id: 'p002-aaaa-bbbb-cccc-000000000002',
    full_name: 'Max',
    species: 'Canino',
    breed: 'Pastor Alemán',
    sex: 'Macho',
    microchip_id: '724098100000002',
    guardian_id: 't1a2b3c4-5678-90ab-cdef-444444444444',
    did: 'did:web:vetspace.health:max-c3d4',
    date_of_birth: '2019-07-22',
    is_neutered: true
  }
];
```

---

## 4. Encuentros Clínicos (clinical_encounters)

### SQL con FHIR Bundle - Vacunación
```sql
INSERT INTO clinical_encounters (id, patient_id, doctor_id, encounter_date, data_source, risk_level, fhir_bundle, created_at) VALUES
('enc001-0000-0000-0000-000000000001', 
 'p001-aaaa-bbbb-cccc-000000000001', 
 'd1a2b3c4-5678-90ab-cdef-111111111111',
 '2024-03-15T10:30:00Z',
 'Clínica VetSalud Norte',
 'normal',
 '{
   "resourceType": "Bundle",
   "type": "transaction",
   "entry": [{
     "resource": {
       "resourceType": "Immunization",
       "id": "imm-001",
       "status": "completed",
       "vaccineCode": {
         "coding": [{
           "system": "http://snomed.info/sct",
           "code": "871878002",
           "display": "DHPPi - Polivalente Canina"
         }]
       },
       "patient": {"reference": "Patient/luna-a1b2"},
       "occurrenceDateTime": "2024-03-15T10:30:00Z",
       "lotNumber": "LOT2024A001",
       "expirationDate": "2025-09-30",
       "manufacturer": {"display": "MSD Animal Health"},
       "site": {"coding": [{"display": "Subcutáneo zona interescapular"}]}
     }
   }]
 }',
 NOW());
```

### SQL con FHIR Bundle - Diagnóstico
```sql
INSERT INTO clinical_encounters (id, patient_id, doctor_id, encounter_date, data_source, risk_level, fhir_bundle, created_at) VALUES
('enc002-0000-0000-0000-000000000002', 
 'p003-aaaa-bbbb-cccc-000000000003', 
 'd2a2b3c4-5678-90ab-cdef-222222222222',
 '2024-06-20T16:45:00Z',
 'Hospital Veterinario Central',
 'medium',
 '{
   "resourceType": "Bundle",
   "type": "transaction",
   "entry": [{
     "resource": {
       "resourceType": "Condition",
       "id": "cond-001",
       "clinicalStatus": {"coding": [{"code": "active"}]},
       "verificationStatus": {"coding": [{"code": "confirmed"}]},
       "code": {
         "coding": [{
           "system": "http://snomed.info/sct",
           "code": "19030005",
           "display": "Dermatitis atópica"
         }]
       },
       "subject": {"reference": "Patient/misi-e5f6"},
       "onsetDateTime": "2024-06-01",
       "severity": {"coding": [{"code": "moderate", "display": "Moderada - CADESI-04 score: 35"}]},
       "note": [{"text": "Prurito generalizado, lesiones en abdomen y extremidades. Iniciar inmunoterapia."}]
     }
   }]
 }',
 NOW());
```

### SQL con FHIR Bundle - Procedimiento Quirúrgico
```sql
INSERT INTO clinical_encounters (id, patient_id, doctor_id, encounter_date, data_source, risk_level, fhir_bundle, created_at) VALUES
('enc003-0000-0000-0000-000000000003', 
 'p004-aaaa-bbbb-cccc-000000000004', 
 'd1a2b3c4-5678-90ab-cdef-111111111111',
 '2024-08-10T09:00:00Z',
 'Clínica VetSalud Norte',
 'normal',
 '{
   "resourceType": "Bundle",
   "type": "transaction",
   "entry": [{
     "resource": {
       "resourceType": "Procedure",
       "id": "proc-001",
       "status": "completed",
       "code": {
         "coding": [{
           "system": "http://snomed.info/sct",
           "code": "22523008",
           "display": "Orquiectomía bilateral"
         }]
       },
       "subject": {"reference": "Patient/rocky-g7h8"},
       "performedDateTime": "2024-08-10T09:00:00Z",
       "performer": [{"actor": {"display": "Dra. Carmen Vidal Ortega"}}],
       "outcome": {"coding": [{"code": "successful", "display": "Sin complicaciones"}]},
       "note": [{"text": "Castración rutinaria. Protocolo anestésico: Propofol + Isoflurano. Recuperación favorable."}]
     }
   }]
 }',
 NOW());
```

---

## 5. Hospitalizaciones (hospitalizations)

### SQL
```sql
INSERT INTO hospitalizations (id, patient_id, admission_date, discharge_date, cage_number, current_status, next_medication_time, treatment_notes, attending_vet_id, created_at, updated_at) VALUES
('hosp001-0000-0000-0000-000000000001',
 'p001-aaaa-bbbb-cccc-000000000001',
 '2024-12-01T14:30:00Z',
 NULL,
 'A1',
 'stable',
 '2024-12-02T06:30:00Z',
 'Gastroenteritis aguda. Fluidoterapia IV Ringer Lactato 60ml/kg/día + Metronidazol 15mg/kg c/12h IV + Omeprazol 1mg/kg c/24h. Dieta blanda mañana si tolera.',
 'd1a2b3c4-5678-90ab-cdef-111111111111',
 NOW(), NOW()),

('hosp002-0000-0000-0000-000000000002',
 'p003-aaaa-bbbb-cccc-000000000003',
 '2024-12-01T20:15:00Z',
 NULL,
 'UCI-1',
 'critical',
 '2024-12-02T02:15:00Z',
 'Obstrucción urinaria. Sondaje uretral realizado. Fluidoterapia agresiva 100ml/kg/día. Control electrolitos c/6h. Buprenorfina 0.02mg/kg c/6h IV. Vigilar arritmias por hiperpotasemia.',
 'd2a2b3c4-5678-90ab-cdef-222222222222',
 NOW(), NOW()),

('hosp003-0000-0000-0000-000000000003',
 'p002-aaaa-bbbb-cccc-000000000002',
 '2024-11-30T11:00:00Z',
 NULL,
 'B2',
 'observation',
 '2024-12-02T11:00:00Z',
 'Post-operatorio cirugía TPLO rodilla derecha día 2. Meloxicam 0.1mg/kg c/24h + Cefovecina (Convenia) administrada. Crioterapia c/4h. Movilidad pasiva mañana.',
 'd1a2b3c4-5678-90ab-cdef-111111111111',
 NOW(), NOW());
```

### TypeScript
```typescript
export interface Hospitalization {
  id: string;
  patient_id: string;
  admission_date: string;
  discharge_date: string | null;
  cage_number: string;
  current_status: 'critical' | 'observation' | 'stable';
  next_medication_time: string | null;
  treatment_notes: string | null;
  attending_vet_id: string | null;
}

export const mockHospitalizations: Hospitalization[] = [
  {
    id: 'hosp001-0000-0000-0000-000000000001',
    patient_id: 'p001-aaaa-bbbb-cccc-000000000001',
    admission_date: '2024-12-01T14:30:00Z',
    discharge_date: null,
    cage_number: 'A1',
    current_status: 'stable',
    next_medication_time: '2024-12-02T06:30:00Z',
    treatment_notes: 'Gastroenteritis aguda. Fluidoterapia IV Ringer Lactato 60ml/kg/día + Metronidazol 15mg/kg c/12h IV',
    attending_vet_id: 'd1a2b3c4-5678-90ab-cdef-111111111111'
  }
];
```

---

## 6. Historial de Peso (weight_history)

### SQL
```sql
INSERT INTO weight_history (id, patient_id, weight_kg, recorded_at, recorded_by, notes, created_at) VALUES
-- Luna (Labrador) - progresión típica adulto
('wh001-0000-0000-0000-000000000001', 'p001-aaaa-bbbb-cccc-000000000001', 28.5, '2024-01-15T10:00:00Z', 'd1a2b3c4-5678-90ab-cdef-111111111111', 'Control rutinario anual', NOW()),
('wh002-0000-0000-0000-000000000002', 'p001-aaaa-bbbb-cccc-000000000001', 29.8, '2024-04-20T11:30:00Z', 'd1a2b3c4-5678-90ab-cdef-111111111111', 'Ligero aumento - recomendar más ejercicio', NOW()),
('wh003-0000-0000-0000-000000000003', 'p001-aaaa-bbbb-cccc-000000000001', 28.2, '2024-08-10T09:45:00Z', 'd1a2b3c4-5678-90ab-cdef-111111111111', 'Peso estabilizado tras dieta', NOW()),
('wh004-0000-0000-0000-000000000004', 'p001-aaaa-bbbb-cccc-000000000001', 27.1, '2024-12-01T14:30:00Z', 'd1a2b3c4-5678-90ab-cdef-111111111111', 'Ingreso por gastroenteritis - pérdida por deshidratación', NOW()),

-- Misi (Gata Europeo) - peso estable
('wh005-0000-0000-0000-000000000005', 'p003-aaaa-bbbb-cccc-000000000003', 4.2, '2024-02-10T16:00:00Z', 'd2a2b3c4-5678-90ab-cdef-222222222222', 'Control post-esterilización', NOW()),
('wh006-0000-0000-0000-000000000006', 'p003-aaaa-bbbb-cccc-000000000003', 4.5, '2024-06-20T16:45:00Z', 'd2a2b3c4-5678-90ab-cdef-222222222222', 'Consulta dermatología - peso OK', NOW()),
('wh007-0000-0000-0000-000000000007', 'p003-aaaa-bbbb-cccc-000000000003', 4.3, '2024-12-01T20:15:00Z', 'd2a2b3c4-5678-90ab-cdef-222222222222', 'Ingreso urgencias', NOW());
```

---

## 7. Órdenes de Laboratorio (lab_orders)

### SQL
```sql
INSERT INTO lab_orders (id, patient_id, lab_tech_id, status, dpp_payload, created_at, updated_at) VALUES
('lab001-0000-0000-0000-000000000001',
 'p001-aaaa-bbbb-cccc-000000000001',
 'd3a2b3c4-5678-90ab-cdef-333333333333',
 'sent',
 '{
   "sample_type": "Sangre",
   "tests": ["Hemograma completo", "Bioquímica básica (ALT, Creatinina, Glucosa)", "Proteínas totales"],
   "cold_chain": {
     "temperature": "2-8°C",
     "validated": true,
     "transport_time_minutes": 35
   },
   "blockchain_hash": "0xa1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890",
   "collection_date": "2024-12-01T14:45:00Z",
   "priority": "urgent",
   "results": {
     "hemoglobin": {"value": 14.2, "unit": "g/dL", "reference": "12-18"},
     "wbc": {"value": 15.8, "unit": "x10^9/L", "reference": "6-17", "flag": "normal"},
     "creatinine": {"value": 1.1, "unit": "mg/dL", "reference": "0.5-1.8"},
     "glucose": {"value": 95, "unit": "mg/dL", "reference": "74-143"}
   }
 }',
 NOW(), NOW()),

('lab002-0000-0000-0000-000000000002',
 'p003-aaaa-bbbb-cccc-000000000003',
 'd3a2b3c4-5678-90ab-cdef-333333333333',
 'milling',
 '{
   "sample_type": "Sangre",
   "tests": ["Hemograma", "Bioquímica completa", "Electrolitos (Na, K, Cl)"],
   "cold_chain": {
     "temperature": "4°C",
     "validated": true,
     "transport_time_minutes": 15
   },
   "blockchain_hash": "0xb2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890ab",
   "collection_date": "2024-12-01T20:30:00Z",
   "priority": "stat"
 }',
 NOW(), NOW()),

('lab003-0000-0000-0000-000000000003',
 'p002-aaaa-bbbb-cccc-000000000002',
 'd3a2b3c4-5678-90ab-cdef-333333333333',
 'sent',
 '{
   "sample_type": "Sangre",
   "tests": ["Serología Leishmania (IFI + PCR)", "Ehrlichia/Anaplasma", "Hemograma"],
   "cold_chain": {
     "temperature": "2-8°C",
     "validated": true,
     "transport_time_minutes": 45
   },
   "blockchain_hash": "0xc3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890abcd",
   "collection_date": "2024-11-15T10:00:00Z",
   "priority": "routine",
   "results": {
     "leishmania_ifi": {"value": "Negativo", "titer": "<1:40"},
     "leishmania_pcr": {"value": "No detectado"},
     "ehrlichia": {"value": "Negativo"}
   }
 }',
 NOW(), NOW());
```

---

## 8. Reclamaciones de Seguros (smart_claims)

### SQL
```sql
INSERT INTO smart_claims (id, patient_id, treatment_code, amount, status, evidence_url, created_at) VALUES
-- Claims normales (paid)
('claim001-0000-0000-0000-000000000001', 'p001-aaaa-bbbb-cccc-000000000001', 'VET-VAC-001', 65.00, 'paid', 'ipfs://QmT8K3vNzB4mC5dJwRxP7qY9sH2fL6nE4aG1jK8rM3uW5v', '2024-03-15T12:00:00Z'),
('claim002-0000-0000-0000-000000000002', 'p002-aaaa-bbbb-cccc-000000000002', 'VET-CIR-002', 1450.00, 'paid', 'ipfs://QmR9L4wOzC5nD6eKxQ8pZ1sI3gH7mF2jA4bN5kT6rU8vY9', '2024-08-10T15:00:00Z'),
('claim003-0000-0000-0000-000000000003', 'p003-aaaa-bbbb-cccc-000000000003', 'VET-CST-004', 145.00, 'paid', NULL, '2024-02-10T18:00:00Z'),
('claim004-0000-0000-0000-000000000004', 'p004-aaaa-bbbb-cccc-000000000004', 'VET-LAB-001', 55.00, 'paid', NULL, '2024-09-05T11:30:00Z'),

-- Claims pendientes
('claim005-0000-0000-0000-000000000005', 'p001-aaaa-bbbb-cccc-000000000001', 'VET-HOS-001', 75.00, 'pending', NULL, '2024-12-01T16:00:00Z'),
('claim006-0000-0000-0000-000000000006', 'p003-aaaa-bbbb-cccc-000000000003', 'VET-HOS-002', 130.00, 'pending', NULL, '2024-12-01T22:00:00Z'),

-- Claim con fraude detectado (monto anómalo)
('claim007-0000-0000-0000-000000000007', 'p004-aaaa-bbbb-cccc-000000000004', 'VET-VAC-001', 350.00, 'fraud_detected', NULL, '2024-11-20T09:00:00Z'),

-- Claim con fraude (castración en animal ya castrado)
('claim008-0000-0000-0000-000000000008', 'p001-aaaa-bbbb-cccc-000000000001', 'VET-CST-002', 280.00, 'fraud_detected', NULL, '2024-10-15T14:00:00Z');
```

---

## 9. Dispositivos IoT (iot_devices)

### SQL
```sql
INSERT INTO iot_devices (id, name, device_type, status, current_value, target_value, metadata, created_at, updated_at) VALUES
-- Refrigeradores
('iot001-0000-0000-0000-000000000001',
 'Refrigerador Vacunas Principal',
 'refrigerator',
 'online',
 4,
 4,
 '{"brand": "Liebherr", "model": "LKPv 6523", "alarm_threshold_min": 2, "alarm_threshold_max": 8, "last_calibration": "2024-11-01", "capacity_liters": 500}',
 NOW(), NOW()),

('iot002-0000-0000-0000-000000000002',
 'Refrigerador Vacunas Secundario',
 'refrigerator',
 'warning',
 7,
 4,
 '{"brand": "Liebherr", "model": "LKPv 1422", "alarm_threshold_min": 2, "alarm_threshold_max": 8, "last_calibration": "2024-10-15", "alert_reason": "Temperatura elevada - revisar puerta"}',
 NOW(), NOW()),

-- Analizadores
('iot003-0000-0000-0000-000000000003',
 'Analizador Hematológico IDEXX',
 'analyzer',
 'idle',
 0,
 100,
 '{"model": "ProCyte Dx", "serial": "PCX-2024-001", "samples_today": 12, "reagent_level": 78, "last_maintenance": "2024-11-20"}',
 NOW(), NOW()),

('iot004-0000-0000-0000-000000000004',
 'Analizador Bioquímico VetScan',
 'analyzer',
 'running',
 65,
 100,
 '{"model": "VS2", "serial": "VS2-2023-042", "samples_today": 8, "current_sample": "lab002", "eta_minutes": 3}',
 NOW(), NOW()),

-- Sensores de stock
('iot005-0000-0000-0000-000000000005',
 'Sensor Stock Vacuna Rabia',
 'stock_sensor',
 'ok',
 45,
 20,
 '{"product": "Rabisin", "manufacturer": "Boehringer", "lot": "LOT2024R789", "expiry": "2025-08-31", "unit": "dosis"}',
 NOW(), NOW()),

('iot006-0000-0000-0000-000000000006',
 'Sensor Stock NexGard',
 'stock_sensor',
 'low',
 8,
 15,
 '{"product": "NexGard Spectra", "manufacturer": "Boehringer", "sizes": ["S", "M", "L"], "reorder_triggered": true}',
 NOW(), NOW()),

('iot007-0000-0000-0000-000000000007',
 'Sensor Stock Nobivac DHPPi',
 'stock_sensor',
 'critical',
 3,
 25,
 '{"product": "Nobivac DHPPi", "manufacturer": "MSD", "lot": "LOT2024D456", "expiry": "2025-03-15", "urgent_order": true}',
 NOW(), NOW()),

-- Logger temperatura
('iot008-0000-0000-0000-000000000008',
 'Logger Transporte Muestras A',
 'temperature_logger',
 'logging',
 5,
 4,
 '{"trip_id": "trip-2024-1201-001", "start_time": "2024-12-01T14:45:00Z", "readings_count": 24, "destination": "Laboratorio Central", "min_recorded": 3, "max_recorded": 6}',
 NOW(), NOW());
```

---

## 10. Datos Epidemiológicos (TypeScript)

```typescript
export interface RegionalEpiData {
  region: string;
  condition: string;
  level: 'Low' | 'Medium' | 'High' | 'Very High';
  trend: string;
  cases: number;
  lastUpdated: string;
}

export interface ZoonosisData {
  disease: string;
  status: string;
  humanRisk: 'Low' | 'Medium' | 'High';
  surveillance: 'Activa' | 'Pasiva';
  notes: string;
}

export const regionalEpidemiology: RegionalEpiData[] = [
  { region: "Madrid", condition: "Leishmaniosis", level: "High", trend: "+12%", cases: 847, lastUpdated: "2024-12-01" },
  { region: "Cataluña", condition: "Filariosis", level: "Medium", trend: "+5%", cases: 234, lastUpdated: "2024-12-01" },
  { region: "Andalucía", condition: "Ehrlichiosis", level: "High", trend: "+18%", cases: 1203, lastUpdated: "2024-12-01" },
  { region: "Galicia", condition: "Leptospirosis", level: "Low", trend: "-3%", cases: 89, lastUpdated: "2024-12-01" },
  { region: "Valencia", condition: "Parvovirosis", level: "Medium", trend: "+8%", cases: 156, lastUpdated: "2024-12-01" },
  { region: "Extremadura", condition: "Leishmaniosis", level: "Very High", trend: "+22%", cases: 567, lastUpdated: "2024-12-01" },
  { region: "Canarias", condition: "Filariosis", level: "Very High", trend: "+25%", cases: 423, lastUpdated: "2024-12-01" },
  { region: "Murcia", condition: "Leishmaniosis", level: "High", trend: "+15%", cases: 312, lastUpdated: "2024-12-01" }
];

export const zoonosisOneHealth: ZoonosisData[] = [
  { disease: "Rabia", status: "Casos importados esporádicos", humanRisk: "Low", surveillance: "Activa", notes: "Protocolo post-exposición disponible" },
  { disease: "Leptospirosis", status: "Endémico - picos otoño/invierno", humanRisk: "Medium", surveillance: "Activa", notes: "Correlación con lluvias intensas" },
  { disease: "Toxoplasmosis", status: "Prevalencia 30-40% en gatos", humanRisk: "Medium", surveillance: "Pasiva", notes: "Riesgo principal en embarazadas e inmunodeprimidos" },
  { disease: "Leishmaniosis", status: "Zoonosis emergente en expansión", humanRisk: "Low", surveillance: "Activa", notes: "Vector Phlebotomus en aumento por cambio climático" },
  { disease: "Fiebre Q", status: "Brotes en explotaciones ganaderas", humanRisk: "Medium", surveillance: "Activa", notes: "Coxiella burnetii - riesgo ocupacional" },
  { disease: "Hidatidosis", status: "Endémico en zonas rurales", humanRisk: "Low", surveillance: "Pasiva", notes: "Ciclo perro-oveja-humano" }
];

export const alertsAI: string[] = [
  "🔴 ALERTA: Aumento 22% casos Leishmaniosis en Extremadura - activar protocolo vigilancia intensiva",
  "🟠 AVISO: Stock vacuna DHPPi bajo mínimo crítico - pedido urgente activado automáticamente",
  "🟡 INFO: Pico estacional de otitis externa detectado en zona costera - preparar stock Otomax",
  "🔴 ALERTA: Temperatura refrigerador secundario fuera de rango - revisar inmediatamente",
  "🟠 AVISO: Incremento 15% parvovirosis en cachorros no vacunados - campaña educativa recomendada",
  "🟢 INFO: NPS tutores subió 5 puntos este mes - mantener estándares actuales"
];
```

---

## 11. Datasets Sintéticos (TypeScript)

```typescript
export interface SyntheticDataset {
  id: string;
  name: string;
  size: string;
  price: number;
  status: 'Ready' | 'Generating' | 'Sold';
  progress?: number;
  buyer?: string;
  format: string;
  species: string;
  clinicalScore?: string;
  description: string;
  privacyLevel: string;
  validationAccuracy: string;
}

export const syntheticDatasets: SyntheticDataset[] = [
  {
    id: "DS-VET-2024-A",
    name: "Cohorte Displasia Cadera Canina",
    size: "15k Pacientes",
    price: 45000,
    status: "Ready",
    format: "FHIR R4 JSON",
    species: "Canine",
    clinicalScore: "PennHIP DI",
    description: "Radiografías ventrodorsales con scoring PennHIP y OFA, datos clínicos y seguimiento de 5 años",
    privacyLevel: "k-anonymity: 5, ε-differential privacy: 0.1",
    validationAccuracy: "99.7% statistical match"
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
    clinicalScore: "ACVIM Stage B1-C",
    description: "Ecocardiografías con mediciones, NT-proBNP, troponinas y supervivencia",
    privacyLevel: "k-anonymity: 5, ε-differential privacy: 0.1",
    validationAccuracy: "99.4% statistical match"
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
    clinicalScore: "CADESI-04",
    description: "Casos con scoring CADESI estandarizado, tratamientos y respuesta",
    privacyLevel: "k-anonymity: 5, ε-differential privacy: 0.1",
    validationAccuracy: "99.9% statistical match"
  },
  {
    id: "DS-VET-2024-D",
    name: "Enfermedad Renal Crónica Felina",
    size: "12k Pacientes",
    price: 48000,
    status: "Generating",
    progress: 45,
    format: "FHIR R4 JSON",
    species: "Feline",
    clinicalScore: "IRIS Stage 1-4",
    description: "Analíticas seriadas, SDMA, creatinina y supervivencia por estadio IRIS",
    privacyLevel: "k-anonymity: 5, ε-differential privacy: 0.1",
    validationAccuracy: "99.5% statistical match"
  },
  {
    id: "DS-VET-2024-E",
    name: "Epilepsia Idiopática Canina",
    size: "5k Pacientes",
    price: 60000,
    status: "Ready",
    format: "Parquet + EEG",
    species: "Canine",
    description: "Historial convulsiones, EEG, medicación antiepiléptica y control",
    privacyLevel: "k-anonymity: 5, ε-differential privacy: 0.1",
    validationAccuracy: "99.2% statistical match"
  }
];
```

---

## Validación de Datos

### Checklist de Integridad

- [ ] Todos los UUIDs son válidos formato v4
- [ ] Microchips tienen 15 dígitos, prefijo 724
- [ ] DIDs siguen formato `did:web:vetspace.health:[slug]`
- [ ] guardian_id referencia profiles existentes
- [ ] patient_id referencia patients existentes
- [ ] Pesos coherentes con especie/raza
- [ ] Fechas cronológicamente consistentes
- [ ] JSON en campos JSONB es válido
- [ ] Códigos tratamiento son del catálogo VET-XXX-NNN
- [ ] Status son valores del enum correspondiente

---

*Ejemplos validados VetSpace-X v1.0 - Febrero 2026*
