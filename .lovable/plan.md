

## Plan: Sistema de Inscripción para Campaña de Marketing Kit Espacio de Datos

### Objetivo
Añadir un **CTA prominente en la página principal** y crear un **formulario de inscripción** para que las clínicas veterinarias puedan registrar sus datos y solicitar las ayudas del Kit Espacio de Datos (financiación europea).

---

## Parte 1: Cambios en la Página Principal (Index.tsx)

### 1.1 Banner CTA de Campaña
Añadir un banner llamativo justo debajo del Hero con:
- Icono de subvención (moneda/euro)
- Texto: "**Ayudas Kit Espacio de Datos 2025** - Subvención hasta 25.000€ para digitalizar tu clínica veterinaria"
- Botón: "Solicitar Inscripción Gratuita"
- Badge animado con "Plazas Limitadas"
- Diseño con gradiente verde/azul que destaque del resto

### 1.2 Ubicación Estratégica
El banner se posicionará:
- Inmediatamente después del subtítulo del Hero
- Antes de la sección "Únete a la primera red europea"
- Fijo en la parte superior (sticky) al hacer scroll (opcional)

---

## Parte 2: Página de Formulario de Inscripción

### 2.1 Nueva Ruta
- **URL**: `/inscripcion-kit-espacio-datos`
- **Archivo**: `src/pages/KitEspacioDatosInscripcion.tsx`

### 2.2 Campos del Formulario

```text
DATOS DE LA CLÍNICA VETERINARIA
├── Nombre de la Clínica* (text)
├── CIF* (text, validación formato español)
├── Dirección Completa* (text)
├── Código Postal* (text, 5 dígitos)
├── Ciudad* (text)
├── Provincia* (select con 52 provincias españolas)
├── Teléfono* (tel)
├── Email de la Clínica* (email)

DATOS DEL RESPONSABLE
├── Nombre y Apellidos* (text)
├── Cargo* (select: Director/a, Gerente, Veterinario/a responsable, Otro)
├── Teléfono de Contacto* (tel)
├── Email Personal* (email)

INFORMACIÓN ADICIONAL
├── Número de Veterinarios (number, 1-50)
├── Número de Empleados Total (number)
├── Software de Gestión Actual (text, placeholder: "Ej: Qvet, Provet, Veterges, Ninguno")
├── ¿Tiene página web? (radio: Sí/No)
├── ¿Usa actualmente algún sistema de historia clínica digital? (radio: Sí/No/Parcialmente)

INTERÉS EN MÓDULOS (Checkboxes múltiples)
├── [ ] Gestión Clínica Digital (FHIR)
├── [ ] Pasaporte Digital de Producto (DPP)
├── [ ] Wallet para Tutores
├── [ ] Investigación One Health
├── [ ] Abastecimiento Inteligente
├── [ ] Dashboard KPIs

CONSENTIMIENTOS
├── [ ] Acepto la política de privacidad* (checkbox obligatorio)
├── [ ] Acepto recibir comunicaciones sobre las ayudas Kit Espacio de Datos (checkbox)
├── [ ] He leído y acepto las condiciones de participación* (checkbox obligatorio)

BOTÓN: "Enviar Solicitud de Inscripción"
```

### 2.3 Diseño Visual
- Header con logo VetSpace-X y título de campaña
- Barra de progreso visual (3 pasos: Datos Clínica → Responsable → Confirmación)
- Iconos junto a cada sección
- Colores alineados con la marca (verde/azul)
- Footer con información sobre las ayudas europeas

---

## Parte 3: Almacenamiento en Base de Datos

### 3.1 Nueva Tabla: `kit_inscriptions`

```sql
CREATE TABLE kit_inscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Datos de la clínica
  clinic_name TEXT NOT NULL,
  cif TEXT NOT NULL,
  address TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  city TEXT NOT NULL,
  province TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  
  -- Datos del responsable
  contact_name TEXT NOT NULL,
  contact_role TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  
  -- Información adicional
  num_veterinarians INTEGER,
  num_employees INTEGER,
  current_software TEXT,
  has_website BOOLEAN,
  has_digital_records TEXT,
  
  -- Módulos de interés (array JSON)
  interested_modules JSONB DEFAULT '[]',
  
  -- Consentimientos
  privacy_accepted BOOLEAN NOT NULL DEFAULT false,
  communications_accepted BOOLEAN DEFAULT false,
  terms_accepted BOOLEAN NOT NULL DEFAULT false,
  
  -- Metadatos
  status TEXT DEFAULT 'pending',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### 3.2 RLS Policy
- INSERT: Público (cualquiera puede inscribirse)
- SELECT/UPDATE/DELETE: Solo administradores autenticados

---

## Parte 4: Flujo de Usuario

```text
1. Usuario ve el banner en la página principal (/)
2. Hace clic en "Solicitar Inscripción Gratuita"
3. Navega a /inscripcion-kit-espacio-datos
4. Completa el formulario de 3 pasos
5. Envío → Guardado en Supabase
6. Pantalla de confirmación con:
   - Mensaje de éxito
   - Número de referencia
   - "Nos pondremos en contacto en 48h"
   - Enlace a /propuesta-kit-espacio-datos para más información
```

---

## Parte 5: Archivos a Crear/Modificar

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/pages/Index.tsx` | MODIFICAR | Añadir banner CTA de campaña |
| `src/pages/KitEspacioDatosInscripcion.tsx` | CREAR | Formulario de inscripción completo |
| `src/components/home/KitDatosCampaignBanner.tsx` | CREAR | Componente del banner reutilizable |
| `src/App.tsx` | MODIFICAR | Añadir ruta `/inscripcion-kit-espacio-datos` |
| **Base de datos** | MIGRACIÓN | Crear tabla `kit_inscriptions` |

---

## Parte 6: Diseño del Banner (Vista Previa)

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│  🎯 AYUDAS KIT ESPACIO DE DATOS 2025                    ⚡ PLAZAS LIMITADAS │
│                                                                             │
│  Digitaliza tu clínica veterinaria con hasta 25.000€ de subvención europea │
│                                                                             │
│  ✓ Tramitación 100% gratuita    ✓ Subvención 85-90%    ✓ Sin letra pequeña │
│                                                                             │
│         [ 🐾 SOLICITAR INSCRIPCIÓN GRATUITA ]   [ Ver Condiciones ]         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Resumen Técnico

| Componente | Tecnología |
|------------|------------|
| Formulario | React Hook Form + Zod (validación) |
| UI | Componentes shadcn/ui existentes |
| Base de datos | Supabase (tabla `kit_inscriptions`) |
| Seguridad | RLS: INSERT público, SELECT restringido |
| Tracking | Parámetros UTM capturados automáticamente |
| Responsive | Mobile-first design |

---

## Próximos Pasos Opcionales
- Añadir notificación por email (Edge Function)
- Panel de administración para ver inscripciones
- Exportación a CSV/Excel
- Integración con CRM (HubSpot, Salesforce)

