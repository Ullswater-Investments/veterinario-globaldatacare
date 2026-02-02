
## Plan de Generación de Datos Sintéticos - VetSpace-X

### Estado Actual de la Base de Datos

| Tabla | Registros Actuales | Objetivo Recomendado | Gap |
|-------|-------------------|---------------------|-----|
| `profiles` | **0** | 30 | -30 |
| `user_roles` | **0** | 30 | -30 |
| `patients` | 15 | 50 | -35 |
| `clinical_encounters` | 13 | 100 | -87 |
| `hospitalizations` | 8 | 15-20 | -7 |
| `lab_orders` | 7 | 50 | -43 |
| `smart_claims` | 12 | 100 | -88 |
| `iot_devices` | 8 | 15 | -7 |
| `weight_history` | 27 | 200 | -173 |

---

### Plan de Ejecución por Fases

---

## FASE 1: Usuarios y Roles (Crítico - Base del Sistema)

**Prioridad**: ALTA (requerido para autenticación y RLS)

**Tablas**: `profiles`, `user_roles`

**Datos a generar**:
- 30 perfiles de usuario con nombres bilingues (ES/EN)
- Distribución de roles:
  - 8 doctores/veterinarios
  - 4 técnicos de laboratorio
  - 12 tutores (pacientes/owners)
  - 3 investigadores
  - 2 administradores de seguros
  - 1 auditor

**Formato**: SQL INSERT

---

## FASE 2: Pacientes Adicionales (Ampliación)

**Prioridad**: ALTA

**Tabla**: `patients`

**Datos a generar**:
- 35 nuevas mascotas (total: 50)
- Distribución especies:
  - 60% Caninos (21 perros adicionales)
  - 30% Felinos (10 gatos adicionales)
  - 10% Exóticos (4: conejos, aves, reptiles)
- Campos bilingues en `wallet_status`
- Microchips formato ISO 11784
- DIDs formato did:web:vetspace.health

---

## FASE 3: Encuentros Clínicos con FHIR

**Prioridad**: ALTA

**Tabla**: `clinical_encounters`

**Datos a generar**:
- 87 nuevos encuentros (total: 100)
- FHIR bundles con resourceType:
  - 30% Immunization (vacunaciones)
  - 40% Observation (consultas)
  - 20% Procedure (cirugías)
  - 10% Condition (diagnósticos)
- Códigos SNOMED-VET bilingues
- Distribución risk_level: 10% high, 25% medium, 65% normal

---

## FASE 4: Historial de Peso

**Prioridad**: MEDIA

**Tabla**: `weight_history`

**Datos a generar**:
- 173 nuevos registros (total: 200)
- 4-5 registros por paciente
- Progresión realista según especie/raza
- Notas bilingues (ES/EN)

---

## FASE 5: Laboratorio y DPP

**Prioridad**: MEDIA

**Tabla**: `lab_orders`

**Datos a generar**:
- 43 nuevas órdenes (total: 50)
- Estados: received, designing, manufacturing, shipped
- DPP payload con:
  - Tipos de muestra (Sangre, Orina, Heces, Biopsia)
  - Tests (Hemograma, Bioquímica, Serología)
  - Cold chain validation
  - Blockchain hashes

---

## FASE 6: Reclamaciones de Seguros

**Prioridad**: MEDIA

**Tabla**: `smart_claims`

**Datos a generar**:
- 88 nuevas claims (total: 100)
- Códigos veterinarios:
  - VET-VAC-xxx (vacunaciones)
  - VET-CST-xxx (castraciones)
  - VET-CIR-xxx (cirugías)
  - VET-DEN-xxx (dental)
  - VET-HOS-xxx (hospitalización)
  - VET-IMG-xxx (diagnóstico por imagen)
  - VET-LAB-xxx (laboratorio)
- Estados: 70% paid, 20% pending, 10% fraud_detected

---

## FASE 7: Hospitalizaciones

**Prioridad**: MEDIA

**Tabla**: `hospitalizations`

**Datos a generar**:
- 7-12 nuevas hospitalizaciones (total: 15-20)
- Zonas: A1-A3 (canina), B1-B3 (felina), UCI-1/2, ISO-1
- Estados: 50% stable, 35% observation, 15% critical
- Notas de tratamiento bilingues

---

## FASE 8: Dispositivos IoT

**Prioridad**: BAJA

**Tabla**: `iot_devices`

**Datos a generar**:
- 7 nuevos dispositivos (total: 15)
- Tipos adicionales:
  - Refrigeradores de vacunas (2-8°C)
  - Analizadores hematológicos
  - Sensores de temperatura
  - Monitores de stock

---

## FASE 9: Datos para Vistas Especiales (TypeScript/Mock)

**Prioridad**: MEDIA

**Archivos**: `src/lib/mockData.ts` y nuevos archivos de datos

**Datos a generar**:

### 9.1 Epidemiología
```text
- Datos regionales España (17 CCAA)
- Enfermedades: Leishmaniosis, Filariosis, Ehrlichiosis
- Zoonosis One Health
- Alertas AI
```

### 9.2 Research Marketplace
```text
- 10 datasets sintéticos con precios
- Algoritmos federados
- Estados: Ready, Generating, Sold
```

### 9.3 KPI Dashboard
```text
- 8 KPIs veterinarios
- Series temporales 12 meses
- Alertas AI predictivas
```

### 9.4 Supply Chain
```text
- Catálogo productos veterinarios
- Proveedores (Zoetis, MSD, Elanco)
- Órdenes automatizadas
```

---

## Resumen de Ejecución

| Fase | Tabla/Archivo | Registros | Prioridad |
|------|---------------|-----------|-----------|
| 1 | profiles + user_roles | 30+30 | ALTA |
| 2 | patients | +35 | ALTA |
| 3 | clinical_encounters | +87 | ALTA |
| 4 | weight_history | +173 | MEDIA |
| 5 | lab_orders | +43 | MEDIA |
| 6 | smart_claims | +88 | MEDIA |
| 7 | hospitalizations | +12 | MEDIA |
| 8 | iot_devices | +7 | BAJA |
| 9 | mockData.ts | N/A | MEDIA |

**Total de registros SQL a generar**: ~475 nuevos registros

---

## Especificaciones Técnicas

### Idiomas (Bilingue ES/EN)
- Campos de texto: Incluir versiones en español e inglés donde aplique
- Notas clínicas: Español (contexto España)
- FHIR resources: Inglés (estándar internacional)
- UI labels en mockData: Ambos idiomas

### Formato de Salida
1. **SQL**: INSERT statements para Supabase
2. **TypeScript**: Constantes tipadas para mockData
3. **JSON**: FHIR bundles y DPP payloads

### Integridad Referencial
- patient_id debe existir en patients
- doctor_id/lab_tech_id debe existir en profiles
- guardian_id debe existir en profiles
- Microchips únicos (15 dígitos, prefijo 724)
- DIDs únicos (did:web:vetspace.health:[slug])
