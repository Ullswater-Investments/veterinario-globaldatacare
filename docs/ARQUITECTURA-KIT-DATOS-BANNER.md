# Arquitectura del Banner de Campaña y Páginas Enlazadas

## Índice

1. [KitDatosCampaignBanner (Componente Principal)](#1-kitdatoscampaignbanner)
2. [Página de Condiciones](#2-página-de-condiciones)
3. [Página del Contrato Completo](#3-página-del-contrato-completo)
4. [Formulario de Inscripción](#4-formulario-de-inscripción)
5. [Componentes Legales Reutilizables](#5-componentes-legales-reutilizables)
6. [Backend (Edge Function + Base de Datos)](#6-backend)
7. [Páginas Adicionales Enlazadas](#7-páginas-adicionales-enlazadas)
8. [Diagrama de Flujo de Navegación](#8-diagrama-de-flujo)

---

## 1. KitDatosCampaignBanner

**Archivo:** `src/components/home/KitDatosCampaignBanner.tsx` (125 líneas)

### Ubicación en la app

Se importa y renderiza en `src/pages/Index.tsx` (Landing page), justo después del Hero principal:

```tsx
import { KitDatosCampaignBanner } from '@/components/home/KitDatosCampaignBanner';
// ...
<KitDatosCampaignBanner />
```

### Dependencias

| Paquete | Uso |
|---------|-----|
| `react-router-dom` | `Link` para navegación interna |
| `framer-motion` | `motion.div` con animaciones `scale` pulsantes en los badges |
| `lucide-react` | Iconos: `Euro`, `Zap`, `CheckCircle2`, `PawPrint`, `FileText`, `Clock`, `ArrowRight` |
| `@/components/ui/button` | Botones CTA (shadcn) |
| `@/components/ui/badge` | Badges animados (shadcn) |

### Assets importados

```tsx
import logoGobiernoRedEs from '@/assets/logo-gobierno-red-es.png';
import logoKitEspacioDatos from '@/assets/logo-kit-espacio-datos.jpg';
```

### Estructura visual (de arriba a abajo)

1. **Header con badges animados:**
   - Icono `Euro` en círculo con fondo `bg-primary/20`
   - Título: "AYUDAS KIT ESPACIO DE DATOS"
   - **Badge de fecha límite** (amber-500): "Inscripción hasta 20 de Marzo del 2026" — animación `scale: [1, 1.03, 1]` con `repeat: Infinity, duration: 1.5`
   - **Badge de plazas limitadas** (destructive/rojo): "PLAZAS LIMITADAS" — animación `scale: [1, 1.05, 1]` con `repeat: Infinity, duration: 2`

2. **Mensaje principal:**
   - Texto: "Digitaliza tu clínica veterinaria con hasta **30.000 €** de Subvención a fondo perdido de RED.ES"

3. **Beneficios** (3 items con `CheckCircle2` verde):
   - "Tramitación incluida en la cuota mensual"
   - "Subvención 85-90%"
   - "Sin letra pequeña"

4. **Botón Hero CTA** (máximo impacto visual):
   - Link a `/condiciones-kit-espacio-datos`
   - Gradiente: `from-emerald-500 via-teal-500 to-cyan-500`
   - Efecto shimmer: `span` con `bg-gradient-to-r from-transparent via-white/20 to-transparent` que se desplaza en hover
   - Sombra: `shadow-2xl shadow-emerald-500/30`
   - `whileHover: { scale: 1.02 }`, `whileTap: { scale: 0.98 }`
   - Texto: "SOLICITA LAS AYUDAS KIT ESPACIO DE DATOS"
   - Bordes redondeados: `rounded-full`

5. **Botones CTA secundarios:**
   - **Inscripción** → `/inscripcion-kit-espacio-datos` (botón primary, "Solicitar Inscripción por 190€ al mes")
   - **Ver Condiciones** → `/condiciones-kit-espacio-datos` (botón outline)

6. **Logos institucionales:**
   - Logo Kit Espacio de Datos → enlace externo a `acelerapyme.gob.es`
   - Logo Gobierno de España / Red.es → enlace externo a `red.es`

### Estilo del contenedor

```tsx
<section className="py-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-primary/20">
```

---

## 2. Página de Condiciones

**Archivo:** `src/pages/CondicionesKitEspacioDatos.tsx` (579 líneas)  
**Ruta:** `/condiciones-kit-espacio-datos`

### Estructura de la página

#### Header sticky
- Link "Volver al inicio" (`/`)
- Botón "Solicitar Inscripción" → `/inscripcion-kit-espacio-datos`

#### Hero Section
- Badge animado con fecha límite (amber-500, pulsante)
- **NOTA:** Contiene texto duplicado en el Badge — "Inscripción hasta 20 de Marzo del 2026" y "Inscripción hasta el 24 de Febrero" superpuestos
- Título: "Condiciones Transparentes"
- Subtítulo: "Todo lo que necesitas saber antes de inscribirte. Sin letra pequeña."
- Logos institucionales (Kit Espacio de Datos + Gobierno de España)

#### Cuadro de Pricing
- Card destacada con borde `border-2 border-primary/50 bg-primary/5`
- Rango de subvención: **15.000€ — 30.000€**
- Dos niveles explicados con boxes coloreados (verde/azul)
- Nota informativa (amber) sobre consultoría de evaluación
- Lista de 6 servicios incluidos con checkmarks
- Precio anticipado: **1.140€ + IVA** (190€/mes × 6 meses)

#### Resumen Ejecutivo (3 Cards)
| Card | Valor | Detalle |
|------|-------|---------|
| 190€/mes | Cuota fija + IVA | 6 meses iniciales |
| 6 meses | Fase inicial | Compromiso irrevocable |
| 30.000€ | Subvención máxima | A fondo perdido de RED.ES |

#### Timeline de Fases
- **FASE 1** (amber): 6 meses irrevocable — 1.140€ + IVA, financiación Hokodo, sin cancelación
- **FASE 2** (verde): Renovación automática 24 meses — condicional a concesión de subvención, importe = subvención concedida

#### Calculadora ROI
- Grid 3 columnas: TU INVERSIÓN (1.140€) → ROI 26x → SUBVENCIÓN (30.000€)
- Financiación cubierta al 85-90%

#### Grid de Cuotas Mensuales
- 6 cards animadas (Mes 1 a Mes 6), cada una: 190€ + IVA
- Nota sobre financiación por Hokodo

#### Servicios Incluidos
- Array `serviciosIncluidos` de 7 items con iconos:
  1. Shield → Acceso al Espacio de Datos Federado
  2. Users → Consultoría técnica y administrativa
  3. FileText → Tramitación de la ayuda
  4. FileCheck → Redacción de memoria técnica
  5. Building2 → Presentación de solicitud
  6. CheckCircle2 → Justificación completa del proyecto
  7. Headphones → Soporte durante el proceso

#### FAQ Accordion
- Array `faqItems` de 7 preguntas/respuestas:
  1. Cancelación en los 6 primeros meses → No (irrevocable)
  2. Si conceden subvención → Prórroga 24 meses automática
  3. Qué es el Acta de Conformidad → Activa financiación Hokodo
  4. Quién tramita → Global Data Care como Representante Voluntario
  5. Incidencias técnicas → No afectan flujo de pagos
  6. Si no conceden subvención → Contrato termina en 6 meses
  7. Financiación Hokodo → Entidad financiera externa

#### Aviso Legal
- Card amber con datos de ACCURO TECHNOLOGY, S.L.
- CIF: B87617981
- Domicilio: C/ Colquide, 6 – Portal 2, 1ª planta, Edificio Prisma de Las Rozas – Madrid
- Referencia a eIDAS (UE) 910/2014

#### CTA Final
- Botón "Solicitar Inscripción por 190€/mes" → `/inscripcion-kit-espacio-datos`
- Botón "Ver Propuesta Completa" → `/guia-kit-espacio-datos`
- Botón ghost "Ver Contrato Completo y Condiciones" → `/contrato-kit-espacio-datos`

### Animaciones
- Objeto `fadeInUp` reutilizado: `{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }`
- Cards con delays incrementales
- Cuotas mensuales con `scale: 0.9 → 1`

---

## 3. Página del Contrato Completo

**Archivo:** `src/pages/ContratoKitEspacioDatos.tsx` (656 líneas)  
**Ruta:** `/contrato-kit-espacio-datos`

### Estado local

```tsx
const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
const [contractAccepted, setContractAccepted] = useState(false);
const [actAccepted, setActAccepted] = useState(false);
const [acceptanceTimestamp, setAcceptanceTimestamp] = useState<string | null>(null);
```

### Mecanismo de scroll-to-accept

```tsx
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    // Margen de 300px para considerar que ha llegado al final
    const isAtBottom = scrollTop + windowHeight >= documentHeight - 300;
    if (isAtBottom && !hasScrolledToEnd) {
      setHasScrolledToEnd(true);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [hasScrolledToEnd]);
```

- **Antes del scroll completo:** Banner amber sticky "Desplázate hasta el final del documento"
- **Después del scroll:** Banner verde "Has llegado al final. Ahora puedes marcar las casillas"
- **Checkboxes deshabilitados** hasta que `hasScrolledToEnd === true`

### Guardado del timestamp

```tsx
useEffect(() => {
  if (contractAccepted && actAccepted && !acceptanceTimestamp) {
    const timestamp = new Date().toISOString();
    setAcceptanceTimestamp(timestamp);
    localStorage.setItem('contract_acceptance', JSON.stringify({
      contractAccepted: true,
      actAccepted: true,
      timestamp
    }));
  }
}, [contractAccepted, actAccepted, acceptanceTimestamp]);
```

### Redirección al inscribirse

```tsx
const handleContinue = () => {
  if (contractAccepted && actAccepted && acceptanceTimestamp) {
    navigate(`/inscripcion-kit-espacio-datos?contrato_leido=true&acta_leida=true&timestamp=${encodeURIComponent(acceptanceTimestamp)}`);
  }
};
```

### Estructura del contrato (Sección 1)

12 cláusulas en Cards individuales con numeración circular:

| # | Título | Contenido clave |
|---|--------|-----------------|
| 1 | Objeto del contrato | Licencia de uso + consultoría de tramitación |
| 2 | Duración y condicionalidad | Fase 1 (6 meses irrevocable) + Fase 2 (24 meses si subvención) |
| 3 | Precio y condiciones económicas | Fase 1: 1.140€ + IVA / Fase 2: importe de la subvención |
| 4 | Forma de pago y financiación | Hokodo, 6 cuotas de 190€ + IVA, deuda cierta/líquida/exigible |
| 5 | Acta de conformidad y activación | Firma digital del acta, renuncia a retener pagos |
| 6 | Obligaciones del cliente (mandato) | Representante Voluntario ante RED.ES, 5 días hábiles, penalización 15% |
| 7 | Disputas comerciales | Reclamaciones técnicas separadas del flujo de pagos |
| 8 | Protección de datos | RGPD (UE) 2016/679, LOPD-GDD |
| 9 | Propiedad intelectual | **⚠️ NOTA:** Aún dice "VetSpace" en línea 410 — debería decir "Global Data Care" |
| 10 | Jurisdicción y ley aplicable | Juzgados de Madrid |
| 11 | Comunicaciones | Por email a las direcciones del formulario |
| 12 | Firma digital | Validez eIDAS (UE) 910/2014 y Ley 6/2020 |

### Estructura del Acta de Entrega (Sección 2)

5 puntos de certificación en Cards con borde izquierdo coloreado:

| # | Título | Color |
|---|--------|-------|
| 1 | Recepción efectiva del servicio | primary |
| 2 | Inicio de la consultoría | primary |
| 3 | Conformidad y ausencia de incidencias | primary |
| 4 | Activación de la financiación (HOKODO) | amber (destacado) |
| 5 | Validez de la firma digital | primary |

### Sección de Aceptación Digital

- 2 checkboxes (deshabilitados hasta scroll completo):
  - Contrato de Adhesión (12 cláusulas)
  - Acta de Entrega y Conformidad (5 puntos)
- Timestamp de aceptación mostrado al usuario
- Botón "Continuar con la Inscripción" → navega a `/inscripcion-kit-espacio-datos` con query params

---

## 4. Formulario de Inscripción

**Archivo:** `src/pages/KitEspacioDatosInscripcion.tsx` (763 líneas)  
**Ruta:** `/inscripcion-kit-espacio-datos`

### Dependencias principales

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import ContractContent from '@/components/legal/ContractContent';
import AcceptanceActContent from '@/components/legal/AcceptanceActContent';
```

### Constantes

```tsx
const SUPER_ADMIN_EMAIL = 'emilio.emulet@accuro.es';
const PROVINCES = ['Álava', 'Albacete', ...]; // 52 provincias españolas
const CONTACT_ROLES = [
  { value: 'director', label: 'Director/a' },
  { value: 'gerente', label: 'Gerente' },
  { value: 'veterinario', label: 'Veterinario/a responsable' },
  { value: 'otro', label: 'Otro' },
];
const MODULES = [
  { id: 'fhir', label: 'Gestión Clínica Digital (FHIR)' },
  { id: 'dpp', label: 'Pasaporte Digital de Producto (DPP)' },
  { id: 'wallet', label: 'Wallet para Tutores' },
  { id: 'onehealth', label: 'Investigación One Health' },
  { id: 'procurement', label: 'Abastecimiento Inteligente' },
  { id: 'kpi', label: 'Dashboard KPIs' },
];
```

### Schema Zod (validación)

```tsx
const formSchema = z.object({
  // Datos clínica (obligatorios)
  clinic_name: z.string().min(2).max(200),
  cif: z.string().regex(/^[A-Z][0-9]{8}$|^[0-9]{8}[A-Z]$/),
  address: z.string().min(5).max(300),
  postal_code: z.string().regex(/^[0-9]{5}$/),
  city: z.string().min(2).max(100),
  province: z.string().min(1),
  phone: z.string().regex(/^[0-9+\s]{9,15}$/),
  email: z.string().email().max(255),
  // Datos contacto (obligatorios)
  contact_name: z.string().min(2).max(150),
  contact_role: z.string().min(1),
  contact_phone: z.string().regex(/^[0-9+\s]{9,15}$/),
  contact_email: z.string().email().max(255),
  // Datos opcionales
  num_veterinarians: z.number().min(1).max(100).optional().nullable(),
  num_employees: z.number().min(1).max(500).optional().nullable(),
  current_software: z.string().max(200).optional(),
  has_website: z.boolean().optional(),
  has_digital_records: z.enum(['si', 'no', 'parcialmente']).optional(),
  interested_modules: z.array(z.string()).optional(),
  // Documentos legales (obligatorios)
  contract_accepted: z.boolean().refine(val => val === true),
  acceptance_act_accepted: z.boolean().refine(val => val === true),
  // Consentimientos
  privacy_accepted: z.boolean().refine(val => val === true),
  communications_accepted: z.boolean().optional(),
  terms_accepted: z.boolean().refine(val => val === true),
});
```

### Super-admin bypass

```tsx
const isSuperAdmin = user?.email === SUPER_ADMIN_EMAIL;

const nextStep = async () => {
  // PRIMERA barrera: solo admin puede avanzar
  if (!isSuperAdmin) {
    toast({ title: 'Acceso denegado', description: 'Solo el administrador puede avanzar...', variant: 'destructive' });
    return;
  }
  // SEGUNDA barrera: si NO es admin (nunca se ejecuta), validar campos
  if (!isSuperAdmin) {
    let fieldsToValidate = [...];
    const isValid = await form.trigger(fieldsToValidate);
    if (!isValid) return;
  }
  setStep(step + 1);
};
```

**Efecto:** Solo `emilio.emulet@accuro.es` puede navegar entre pasos. Además, salta la validación de campos obligatorios para poder revisar todo el formulario sin rellenarlo.

Los botones "Siguiente" también tienen `disabled={!isSuperAdmin}` y muestran "Requiere acceso de administrador" si no es admin.

### Formulario multi-step (3 pasos)

#### Paso 1: Datos de la Clínica Veterinaria
- `clinic_name` (Input)
- `cif` (Input, uppercase)
- `phone` (Input tel)
- `email` (Input email)
- `address` (Input)
- `postal_code` (Input)
- `city` (Input)
- `province` (Select con 52 provincias)

#### Paso 2: Datos del Responsable
- `contact_name` (Input)
- `contact_role` (Select: Director, Gerente, Veterinario, Otro)
- `contact_phone` (Input tel)
- `contact_email` (Input email)

#### Paso 3: Confirmación
Subdividido en secciones:

**a) Información adicional (opcional):**
- `num_veterinarians` (Input number)
- `num_employees` (Input number)
- `current_software` (Input texto)
- `has_website` (Checkbox)
- `has_digital_records` (RadioGroup: Sí/No/Parcialmente)

**b) Módulos de interés (opcional):**
- 6 checkboxes (MODULES array)

**c) Contrato de Adhesión:**
- Componente `<ContractContent>` embebido (ScrollArea 350px)
- Indicador "Desplázate para leer" con icono animado `bounce`
- Checkbox: "He leído y acepto el CONTRATO DE ADHESIÓN"

**d) Acta de Entrega y Conformidad:**
- Componente `<AcceptanceActContent>` embebido (ScrollArea 300px)
- Indicador "Desplázate para leer"
- Checkbox: "Acepto el ACTA DE ENTREGA Y CONFORMIDAD" (fondo amber)

**e) Consentimientos adicionales:**
- Checkbox: "Acepto la política de privacidad" (obligatorio, link a `/legal`)
- Checkbox: "Acepto las condiciones de participación" (obligatorio, link a `/propuesta-kit-espacio-datos`)
- Checkbox: "Acepto recibir comunicaciones" (opcional)

### Proceso de envío (onSubmit)

```tsx
const onSubmit = async (data: FormData) => {
  // 1. Insert en tabla kit_inscriptions
  const { data: result, error } = await supabase.from('kit_inscriptions').insert({
    ...allFields,
    contract_accepted_at: new Date().toISOString(),
    utm_source: searchParams.get('utm_source'),
    utm_medium: searchParams.get('utm_medium'),
    utm_campaign: searchParams.get('utm_campaign'),
  }).select('id').single();

  // 2. Generar referencia (primeros 8 chars del UUID en mayúsculas)
  const refId = result.id.slice(0, 8).toUpperCase();

  // 3. Enviar email de notificación (non-blocking)
  supabase.functions.invoke('send-inscription-email', {
    body: { clinicName, cif, email, contactName, contactEmail, contactPhone, referenceId },
  }).catch((err) => console.error('Email notification error:', err));

  // 4. Mostrar pantalla de éxito con referencia
};
```

### Pantalla de éxito

- Card con icono verde `CheckCircle2`
- Título: "¡Solicitud Enviada con Éxito!"
- Referencia: `{referenceId}` en font-mono bold
- Mensaje: "Nos pondremos en contacto en 48 horas"
- Botón "Ver Detalles de las Ayudas" → `/propuesta-kit-espacio-datos`
- Botón "Volver al Inicio" → `/`

### Barra de progreso

```tsx
<Progress value={step / 3 * 100} className="h-2" />
```

---

## 5. Componentes Legales Reutilizables

### ContractContent

**Archivo:** `src/components/legal/ContractContent.tsx` (177 líneas)

```tsx
interface ContractContentProps {
  clinicName?: string; // default: '[NOMBRE DE LA CLÍNICA]'
}
```

- Renderizado en `ScrollArea` de 350px
- **7 cláusulas** (versión resumida del contrato completo):
  1. Objeto del contrato
  2. Duración y condicionalidad (Fase 1 + Fase 2 con 24 meses)
  3. Precio y condiciones económicas
  4. Forma de pago y financiación (Hokodo)
  5. Acta de conformidad y activación
  6. Obligaciones del cliente (mandato + penalización)
  7. Disputas comerciales
- Datos del prestador: ACCURO TECHNOLOGY, S.L., CIF B87617981, contacto: emilio.emulet@accuro.es, tel. 601 398 868
- Secciones coloreadas: amber (Fase 1 irrevocable), green (Fase 2 prórroga), blue (precios), red (penalizaciones)

### AcceptanceActContent

**Archivo:** `src/components/legal/AcceptanceActContent.tsx` (117 líneas)

```tsx
interface AcceptanceActContentProps {
  clinicName?: string;  // default: '[NOMBRE DE LA CLÍNICA]'
  contactName?: string; // default: '[NOMBRE DEL REPRESENTANTE]'
}
```

- Renderizado en `ScrollArea` de 300px
- **5 puntos de certificación** con bordes izquierdos coloreados:
  1. 🟢 Recepción efectiva del servicio (green)
  2. 🔵 Inicio de la consultoría (blue)
  3. 🟣 Conformidad y ausencia de incidencias (purple)
  4. 🟡 **Activación de la financiación HOKODO** (amber, con fondo destacado) — "AUTORIZO IRREVOCABLEMENTE"
  5. ⚫ Validez de la firma (gray)
- Fecha automática: `new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })`

---

## 6. Backend

### Edge Function: send-inscription-email

**Archivo:** `supabase/functions/send-inscription-email/index.ts` (75 líneas)

**Propósito:** Envía un email de notificación al administrador cuando se recibe una nueva inscripción.

**Configuración requerida:**
- Secret: `RESEND_API_KEY` (ya configurada)

**Flujo:**
1. Recibe POST con: `clinicName`, `cif`, `email`, `contactName`, `contactEmail`, `contactPhone`, `referenceId`
2. Valida que `RESEND_API_KEY` existe
3. Construye HTML con los datos de la inscripción
4. Llama a `https://api.resend.com/emails` con:
   - `from`: "Global Data Care <onboarding@resend.dev>"
   - `to`: ["emilio.emulet@accuro.es"]
   - `subject`: "Nueva inscripción Kit Espacio de Datos - {clinicName}"
5. Retorna `{ success: true }` o error 500

**CORS:** Headers estándar habilitados (`*` origin)

### Tabla: kit_inscriptions

**Campos completos del schema:**

| Campo | Tipo | Obligatorio | Notas |
|-------|------|-------------|-------|
| id | UUID | Sí (auto) | PK, gen_random_uuid() |
| clinic_name | string | Sí | |
| cif | string | Sí | |
| address | string | Sí | |
| postal_code | string | Sí | 5 dígitos |
| city | string | Sí | |
| province | string | Sí | |
| phone | string | Sí | |
| email | string | Sí | |
| contact_name | string | Sí | |
| contact_role | string | Sí | |
| contact_phone | string | Sí | |
| contact_email | string | Sí | |
| num_veterinarians | number | No | |
| num_employees | number | No | |
| current_software | string | No | |
| has_website | boolean | No | |
| has_digital_records | string | No | 'si'/'no'/'parcialmente' |
| interested_modules | JSON | No | Array de strings |
| contract_accepted | boolean | No | Default null |
| acceptance_act_accepted | boolean | No | Default null |
| contract_accepted_at | timestamp | No | ISO string |
| privacy_accepted | boolean | Sí | |
| terms_accepted | boolean | Sí | |
| communications_accepted | boolean | No | |
| status | string | No | Default null |
| utm_source | string | No | Tracking param |
| utm_medium | string | No | Tracking param |
| utm_campaign | string | No | Tracking param |
| created_at | timestamp | No | Auto |
| updated_at | timestamp | No | Auto |

---

## 7. Páginas Adicionales Enlazadas

### Guía Kit Espacio de Datos

**Archivo:** `src/pages/GuiaKitEspacioDatos.tsx` (620 líneas)  
**Ruta:** `/guia-kit-espacio-datos`

Contenido:
- Explicación de qué es el Kit Espacio de Datos (programa gobierno)
- Qué es el Espacio de Datos de Salud Animal (infraestructura federada)
- 6 servicios incluidos (FHIR, Wallet, DPP, One Health, Central de Compras, Dashboard KPIs)
- 6 beneficios de la ayuda
- Pricing card (15.000€ — 30.000€)
- 4 pasos del proceso (Adhesión → Solicitud → Concesión → Justificación)
- FAQ (7 preguntas)
- CTA final
- **⚠️ NOTA:** En `pasosProceso` (líneas 108, 122) y `faqItems` (líneas 135, 147, 155) aún dice "VetSpace" en lugar de "Global Data Care" / "ACCURO TECHNOLOGY"

### Propuesta Kit Espacio de Datos

**Archivo:** `src/pages/PropuestaKitEspacioDatos.tsx`  
**Ruta:** `/propuesta-kit-espacio-datos`

### Aviso Legal

**Archivo:** `src/pages/LegalNotice.tsx`  
**Ruta:** `/legal`

---

## 8. Diagrama de Flujo

```
┌─────────────────────────────────────────────┐
│                Landing Page (/)              │
│                Index.tsx                      │
│                                              │
│  ┌─────────────────────────────────────┐     │
│  │     KitDatosCampaignBanner          │     │
│  │                                     │     │
│  │  [Hero CTA] ──→ /condiciones        │     │
│  │  [Inscripción] ──→ /inscripcion     │     │
│  │  [Ver Condiciones] ──→ /condiciones │     │
│  └─────────────────────────────────────┘     │
└─────────────────────────────────────────────┘
                    │
        ┌───────────┼───────────┐
        ▼                       ▼
┌───────────────────┐   ┌───────────────────┐
│   /condiciones    │   │   /inscripcion    │
│   (579 líneas)    │   │   (763 líneas)    │
│                   │   │                   │
│ Hero + Pricing    │   │ Paso 1: Clínica   │
│ Fases 1 y 2       │   │ Paso 2: Contacto  │
│ Calculadora ROI   │   │ Paso 3: Confirm.  │
│ Cuotas mensuales  │   │   ├ ContractContent│
│ Servicios         │   │   ├ AcceptanceAct  │
│ FAQ               │   │   └ Consentimientos│
│ Aviso Legal       │   │                   │
│ CTA Final         │   │ → INSERT DB       │
│                   │   │ → Edge Function   │
│ ├→ /inscripcion   │   │ → Pantalla éxito  │
│ ├→ /guia          │   │                   │
│ └→ /contrato      │   │ ├→ /propuesta     │
└───────────────────┘   │ └→ /              │
        │               └───────────────────┘
        ▼
┌───────────────────┐
│    /contrato      │
│   (656 líneas)    │
│                   │
│ 12 cláusulas      │
│ Acta (5 puntos)   │
│ Scroll-to-accept  │
│ 2 checkboxes      │
│ localStorage      │
│                   │
│ → /inscripcion    │
│   ?contrato_leido │
│   &acta_leida     │
│   &timestamp      │
└───────────────────┘

Páginas complementarias:
  /guia-kit-espacio-datos  (620 líneas) ─── Guía completa del programa
  /propuesta-kit-espacio-datos ─── Propuesta detallada
  /legal ─── Aviso legal (enlazado en consentimientos)
```

### Flujo de usuario típico

1. Usuario llega a **Landing** (`/`) y ve el banner `KitDatosCampaignBanner`
2. Hace clic en el **Hero CTA** → va a `/condiciones-kit-espacio-datos`
3. Lee las condiciones y hace clic en "Ver Contrato Completo" → `/contrato-kit-espacio-datos`
4. **Scroll hasta el final** del contrato (margen 300px)
5. Se desbloquean los **2 checkboxes** de aceptación
6. Marca ambos → se genera **timestamp** y se guarda en localStorage
7. Clic en "Continuar con la Inscripción" → `/inscripcion-kit-espacio-datos?contrato_leido=true&acta_leida=true&timestamp=...`
8. **Solo si es super-admin** (`emilio.emulet@accuro.es`): completa los 3 pasos del formulario
9. Submit → **INSERT** en `kit_inscriptions` + invocación **Edge Function** `send-inscription-email`
10. Se muestra pantalla de éxito con **referencia**

---

## Notas para Replicación

### Errores conocidos a corregir
1. **Cláusula 9** en `ContratoKitEspacioDatos.tsx` (línea 410): dice "VetSpace" → debería decir "Global Data Care"
2. **GuiaKitEspacioDatos.tsx** (líneas 108, 122, 135, 147, 155): dice "VetSpace" → debería decir "Global Data Care" / "ACCURO TECHNOLOGY"
3. **Badge de fecha** en `KitDatosCampaignBanner.tsx` (línea 30): texto duplicado — muestra "Inscripción hasta 20 de Marzo del 2026" y "Inscripción hasta 24 Feb" superpuestos
4. **Badge de fecha** en `CondicionesKitEspacioDatos.tsx` (líneas 98-100): mismo problema de texto duplicado

### Adaptación para portal dental
- Cambiar "Clínica Veterinaria" → "Clínica Dental" / "Clínica Odontológica"
- Cambiar "Salud Animal" → "Salud Bucodental"
- Cambiar módulos (FHIR vet → FHIR dental, DPP → DPP dental, etc.)
- Cambiar iconos PawPrint → Smile/Tooth
- Mantener idéntica: lógica legal, financiera (Hokodo), super-admin, edge function, tabla DB
