

## Plan: Integrar Contrato de Adhesión y Acta de Conformidad en el Formulario de Inscripción

### Objetivo
Añadir una sección de **lectura obligatoria del Contrato de Adhesión** y el **Acta de Entrega y Conformidad** en el Paso 3 (Confirmación) del formulario de inscripción, antes de que el usuario pueda enviar su solicitud.

---

## Parte 1: Estructura de la Fase de Confirmación Mejorada

El paso 3 actual se reestructurará para incluir:

```text
PASO 3: CONFIRMACIÓN Y CONTRATO
├── 3.1 Información Adicional (opcional) [existente]
│   ├── Número de veterinarios
│   ├── Número de empleados
│   ├── Software actual
│   └── Historia clínica digital
│
├── 3.2 Módulos de Interés [existente]
│
├── 3.3 CONTRATO DE ADHESIÓN [NUEVO]
│   ├── ScrollArea con texto completo del contrato
│   ├── Indicador "Scroll para leer todo"
│   ├── Tiempo mínimo de lectura (30 segundos)
│   └── Checkbox: "He leído y acepto el Contrato de Adhesión"
│
├── 3.4 ACTA DE ENTREGA Y CONFORMIDAD [NUEVO]
│   ├── ScrollArea con texto del acta
│   └── Checkbox: "Acepto el Acta de Entrega y Conformidad"
│
└── 3.5 Consentimientos Adicionales [existente actualizado]
    ├── Política de privacidad
    ├── Condiciones de participación
    └── Comunicaciones comerciales
```

---

## Parte 2: Componentes del Contrato

### 2.1 Contrato de Adhesión (Contenido resumido para UI)

Se mostrará en un ScrollArea con las siguientes secciones:

| Cláusula | Contenido Principal |
|----------|---------------------|
| 1. OBJETO | Licencia de uso + Consultoría para Kit Espacio de Datos |
| 2. DURACIÓN | Fase 1 (6 meses irrevocable) + Fase 2 (prórroga automática si se concede ayuda) |
| 3. PRECIO | Fase 1: 1.140€ + IVA (190€/mes x 6) / Fase 2: Importe de la subvención |
| 4. FORMA DE PAGO | Financiación a través de Hokodo |
| 5. ACTA DE CONFORMIDAD | Activación del servicio = deuda exigible |
| 6. MANDATO | Autorización para tramitar la subvención |
| 7. DISPUTAS | Separación de incidencias técnicas vs. pagos |

### 2.2 Acta de Entrega y Conformidad (Texto digital)

Se mostrará como un documento separado que certifica:
- Recepción de credenciales de acceso
- Inicio de la consultoría
- Conformidad con el servicio
- Activación irrevocable de la financiación

---

## Parte 3: Validaciones Adicionales

### 3.1 Nuevos campos en el schema Zod

```typescript
// Añadir al formSchema
contract_read: z.boolean().refine(val => val === true, 
  'Debes leer y aceptar el Contrato de Adhesión'),
acceptance_act_read: z.boolean().refine(val => val === true, 
  'Debes aceptar el Acta de Entrega y Conformidad'),
```

### 3.2 Nuevas columnas en la base de datos

Se añadirán a la tabla `kit_inscriptions`:
- `contract_accepted: boolean`
- `acceptance_act_accepted: boolean`  
- `contract_accepted_at: timestamptz`

---

## Parte 4: Diseño Visual del Contrato

```text
┌─────────────────────────────────────────────────────────────────┐
│  📜 CONTRATO DE ADHESIÓN AL ESPACIO DE DATOS FEDERADO          │
│     Y GESTIÓN DE AYUDAS "KIT ESPACIO DE DATOS"                  │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                                                         │    │
│  │  REUNIDOS                                               │▒   │
│  │                                                         │▒   │
│  │  DE UNA PARTE: VetSpace Technology S.L., en adelante   │▒   │
│  │  "EL PRESTADOR"                                         │▒   │
│  │                                                         │▒   │
│  │  DE OTRA PARTE: [NOMBRE CLÍNICA], en adelante          │▒   │
│  │  "EL CLIENTE"                                           │▒   │
│  │                                                         │▒   │
│  │  CLÁUSULA 1. OBJETO DEL CONTRATO...                    │▒   │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                     ↓ Desplázate para leer todo ↓               │
├─────────────────────────────────────────────────────────────────┤
│  [ ] He leído y acepto íntegramente el CONTRATO DE ADHESIÓN *  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Parte 5: Archivos a Crear/Modificar

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/pages/KitEspacioDatosInscripcion.tsx` | MODIFICAR | Añadir secciones de contrato y acta |
| `src/components/legal/ContractContent.tsx` | CREAR | Componente con el texto del contrato |
| `src/components/legal/AcceptanceActContent.tsx` | CREAR | Componente con el texto del acta |
| **Base de datos** | MIGRACIÓN | Añadir columnas `contract_accepted`, `acceptance_act_accepted` |

---

## Parte 6: Flujo de Usuario Actualizado

```text
PASO 1: Datos Clínica
    ↓
PASO 2: Datos Responsable  
    ↓
PASO 3: Confirmación y Contrato
    ├── 3.1 Información adicional (opcional)
    ├── 3.2 Módulos de interés (opcional)
    ├── 3.3 📜 LEER CONTRATO DE ADHESIÓN [scroll obligatorio]
    │       └── ✅ "He leído y acepto el Contrato de Adhesión"
    ├── 3.4 📋 LEER ACTA DE CONFORMIDAD [scroll obligatorio]
    │       └── ✅ "Acepto el Acta de Entrega y Conformidad"
    ├── 3.5 Consentimientos adicionales
    │       ├── ✅ Política de privacidad
    │       ├── ✅ Condiciones de participación
    │       └── ◻ Comunicaciones comerciales
    └── [ENVIAR SOLICITUD] → Solo activo si todo aceptado
    ↓
PANTALLA DE ÉXITO
    └── Referencia + "Nos pondremos en contacto en 48h"
```

---

## Parte 7: Contenido Legal Completo

### 7.1 Contrato de Adhesión (Extracto UI)

El contrato incluirá todas las cláusulas proporcionadas:

1. **OBJETO**: Licencia de uso del Espacio de Datos Federado + Consultoría para tramitación de ayuda "Kit Espacio de Datos" (aprox. 15.000-30.000€)

2. **DURACIÓN**: 
   - Fase 1: 6 meses (irrevocable)
   - Fase 2: Prórroga automática de 12 meses si se concede la ayuda

3. **PRECIO**: 
   - Fase 1: 1.140€ + IVA (6 cuotas de 190€/mes)
   - Fase 2: Importe de la subvención concedida

4. **FORMA DE PAGO**: Financiación a través de Hokodo

5. **ACTA DE CONFORMIDAD**: Certificación de entrega del servicio

6. **MANDATO**: Autorización para actuar como representante ante organismos públicos

7. **DISPUTAS**: Separación de reclamaciones técnicas vs. obligaciones de pago

### 7.2 Acta de Entrega y Conformidad

Documento digital que certifica:
- Recepción efectiva del servicio
- Inicio de la consultoría
- Conformidad y ausencia de incidencias
- Activación irrevocable de la financiación
- Validez de la firma digital

---

## Resumen Técnico

| Componente | Implementación |
|------------|----------------|
| ScrollArea | `@radix-ui/react-scroll-area` (ya instalado) |
| Validación | Zod + React Hook Form |
| UI | Cards con iconos FileText, ScrollText |
| Base de datos | Columnas adicionales para tracking de aceptación |
| Seguridad | Timestamp de aceptación para trazabilidad legal |

---

## Nota Legal

Este contrato es un borrador estructurado con lógica financiera y comercial. Debe ser revisado y validado por asesoría jurídica para asegurar el cumplimiento normativo estricto en España antes de su uso en producción.

