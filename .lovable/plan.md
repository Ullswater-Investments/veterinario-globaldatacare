
# Documento Markdown: Arquitectura del Banner de Campana y Paginas Enlazadas

## Resumen
Crear un nuevo documento `docs/ARQUITECTURA-KIT-DATOS-BANNER.md` que explique en detalle como esta construido y disenado el componente `KitDatosCampaignBanner` y todas las paginas a las que enlaza, incluyendo su estructura tecnica, flujo de navegacion, logica de negocio, componentes legales, backend y edge functions.

## Contenido del documento

El documento cubrira las siguientes secciones:

### 1. KitDatosCampaignBanner (Componente Principal)
- Ubicacion: `src/components/home/KitDatosCampaignBanner.tsx`
- Estructura visual: header con badges animados (Framer Motion), mensaje principal, beneficios, boton hero CTA con efecto shimmer, botones secundarios, logos institucionales
- Dependencias: `framer-motion`, `lucide-react`, `react-router-dom`, componentes UI internos (Button, Badge)
- Assets: `logo-gobierno-red-es.png`, `logo-kit-espacio-datos.jpg`
- Integracion en `src/pages/Index.tsx` (Landing page)

### 2. Pagina de Condiciones (`/condiciones-kit-espacio-datos`)
- Archivo: `src/pages/CondicionesKitEspacioDatos.tsx` (579 lineas)
- Secciones: Hero, Pricing Card con criterios de subvencion, Resumen ejecutivo (3 cards), Timeline de Fases (Fase 1 y Fase 2), Calculadora ROI, Grid de cuotas mensuales, Servicios incluidos, FAQ Accordion, Aviso legal, CTA final
- Datos hardcoded: serviciosIncluidos (7 items), faqItems (7 preguntas)
- Animaciones: fadeInUp con Framer Motion

### 3. Pagina del Contrato Completo (`/contrato-kit-espacio-datos`)
- Archivo: `src/pages/ContratoKitEspacioDatos.tsx` (656 lineas)
- Seccion 1: Contrato Principal con 12 clausulas legales
- Seccion 2: Acta de Entrega y Conformidad con 5 puntos de certificacion
- Mecanismo de scroll-to-accept: scroll listener que detecta llegada al final (margen 300px)
- Checkboxes bloqueados hasta scroll completo
- Timestamp de aceptacion guardado en localStorage
- Redireccion a inscripcion con query params (`contrato_leido`, `acta_leida`, `timestamp`)

### 4. Formulario de Inscripcion (`/inscripcion-kit-espacio-datos`)
- Archivo: `src/pages/KitEspacioDatosInscripcion.tsx` (763 lineas)
- Formulario multi-step (3 pasos): Datos Clinica, Responsable, Confirmacion
- Validacion con Zod + React Hook Form
- Super-admin bypass para `emilio.emulet@accuro.es`
- Paso 3 incluye: info adicional, seleccion de modulos, ContractContent embebido (ScrollArea), AcceptanceActContent embebido, consentimientos
- Submit: insert en tabla `kit_inscriptions` + invocacion edge function `send-inscription-email`

### 5. Componentes Legales
- `ContractContent.tsx`: contrato en ScrollArea (350px), 7 clausulas, recibe `clinicName` como prop
- `AcceptanceActContent.tsx`: acta en ScrollArea (300px), 5 puntos de certificacion, recibe `clinicName` y `contactName`

### 6. Backend (Edge Function + Base de Datos)
- Edge Function: `supabase/functions/send-inscription-email/index.ts` -- envia email via Resend API a `emilio.emulet@accuro.es`
- Tabla: `kit_inscriptions` con todos los campos del formulario + timestamps + UTM params

### 7. Paginas Adicionales Enlazadas
- `/guia-kit-espacio-datos`: Guia completa del programa (620 lineas)
- `/propuesta-kit-espacio-datos`: Propuesta detallada del Kit
- `/legal`: Aviso legal

### 8. Diagrama de Flujo de Navegacion
- Mapa completo de rutas y enlaces entre componentes

## Archivo a crear
- `docs/ARQUITECTURA-KIT-DATOS-BANNER.md`

El documento sera exhaustivo y autosuficiente para que cualquier desarrollador (o IA) pueda entender y replicar toda la funcionalidad.
