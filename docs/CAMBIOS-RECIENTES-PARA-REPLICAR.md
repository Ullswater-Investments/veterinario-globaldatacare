# Cambios recientes del portal Global Data Care — Guía detallada para replicar en portal de Salud Bucodental

> Este documento resume con detalle técnico todos los cambios realizados en el portal de salud animal para que Lovable pueda aplicar los mismos cambios en un portal gemelo de salud bucodental.

---

## 1. Renovación automática de Fase 2: de 1 año a 2 años

- **Archivos afectados:**
  - `src/pages/CondicionesKitEspacioDatos.tsx` (línea 53: FAQ, línea 337: tarjeta Fase 2)
  - `src/components/legal/ContractContent.tsx` (línea 79: cláusula de prórroga)
  - `src/pages/ContratoKitEspacioDatos.tsx` (línea 287: tarjeta resumen Fase 2)
- **Cambio:** Todas las referencias a "12 meses" / "1 año" / "DOCE (12) MESES" en la prórroga automática de Fase 2 se cambiaron a "24 meses" / "2 años" / "VEINTICUATRO (24) MESES".
- **Textos exactos cambiados:**
  - FAQ: *"El contrato se prorroga automáticamente por **24 meses** adicionales (Fase 2)"*
  - Tarjeta Fase 2 título: *"Renovación automática **2 años**"*
  - Cláusula contractual: *"se PRORROGARÁ AUTOMÁTICAMENTE por **VEINTICUATRO (24) MESES** adicionales"*

---

## 2. Identidad del prestador de servicios: ACCURO TECHNOLOGY, S.L.

- **Cambio:** Se eliminaron TODAS las referencias a "VetSpace Technology S.L." y se reemplazaron por:
  - **Nombre:** ACCURO TECHNOLOGY, S.L.
  - **CIF:** B87617981
  - **Dirección:** C/ Colquide, 6 – Portal 2, 1ª planta, Edificio Prisma de Las Rozas – Madrid
  - **Teléfono:** (+34) 91 710 48 40
  - **Email:** ivan.becerro@accuro.es
  - **Marca comercial:** GLOBAL DATA CARE
- **Archivos afectados:**
  - `src/components/ui/GlobalFooter.tsx` — Datos legales completos en el footer
  - `src/components/legal/ContractContent.tsx` — Sección "REUNIDOS", datos del PRESTADOR
  - `src/components/legal/AcceptanceActContent.tsx` — Referencia a ACCURO TECHNOLOGY, S.L.
  - `src/pages/ContratoKitEspacioDatos.tsx` — Aviso legal inicial y sección "REUNIDOS"
  - `src/pages/CondicionesKitEspacioDatos.tsx` — Aviso legal al pie
  - `src/pages/LegalNotice.tsx` — Información del titular, protección de datos, propiedad intelectual
- **NOTA:** En la cláusula 9 de `ContratoKitEspacioDatos.tsx` (línea 410) aún aparece la referencia *"VetSpace"* en la propiedad intelectual. Esto debe corregirse al replicar.

---

## 3. Footer global con información legal completa (`GlobalFooter.tsx`)

- **Archivo:** `src/components/ui/GlobalFooter.tsx` (179 líneas)
- **Estructura del componente:**
  ```
  <footer> bg-slate-950
    ├── Company Info (nombre, CIF, dirección, teléfono, email)
    ├── Navigation Links (Inicio /, Aviso Legal /legal, PDF Espacios Datos Homologados)
    ├── Scroll to Top button
    ├── Admin Login Section (ver punto 4)
    └── Bottom: "Proyecto GLOBAL DATA CARE — Espacio de Datos Federado de Salud Animal"
  ```
- **Dependencias:** `useAuth` de `@/contexts/AuthContext`, `supabase` client, componentes `Input`, `Button`
- **Iconos usados:** `ArrowUp`, `Home`, `ExternalLink`, `Gavel`, `Mail`, `Phone`, `MapPin`, `Lock`, `LogOut`
- **El footer se incluye en:** `Index.tsx`, `CondicionesKitEspacioDatos.tsx`, `ContratoKitEspacioDatos.tsx`, `KitEspacioDatosInscripcion.tsx`, `GuiaKitEspacioDatos.tsx`, `LegalNotice.tsx`

---

## 4. Acceso de administrador discreto en el footer

- **Archivo:** `src/components/ui/GlobalFooter.tsx` (líneas 112-168)
- **Comportamiento:**
  - Si NO hay usuario autenticado: muestra botón "Acceso Admin" (icono `Lock`, texto gris discreto `text-slate-600`)
  - Al hacer click: despliega un formulario inline con campos Email + Contraseña + botón "Entrar"
  - Usa `supabase.auth.signInWithPassword({ email, password })`
  - Si HAY usuario autenticado: muestra email del usuario + botón "Cerrar sesión"
  - NO redirige a otra página tras el login
  - Cualquier usuario puede autenticarse (no hay restricción de email en el footer)
- **Estilos del formulario:** inputs con `bg-slate-900 border-slate-700 text-slate-200`, altura `h-8`, `text-xs`

---

## 5. Restricción del formulario de inscripción al superadministrador

- **Archivo:** `src/pages/KitEspacioDatosInscripcion.tsx`
- **Constante:** `const SUPER_ADMIN_EMAIL = 'emilio.emulet@accuro.es';`
- **Lógica:** `const isSuperAdmin = user?.email === SUPER_ADMIN_EMAIL;`
- **Efectos:**
  - Los botones "Siguiente" y "Enviar" tienen `disabled={!isSuperAdmin}`
  - Si un usuario no-admin intenta avanzar (`nextStep`), muestra toast de "Acceso denegado"
  - El admin puede saltar la validación de campos obligatorios (líneas 200-218): si `isSuperAdmin`, no se ejecuta `form.trigger(fieldsToValidate)`
  - Mensaje bajo los botones: *"Requiere acceso de administrador"* (texto destructive, `text-xs`)
- **IMPORTANTE:** El email del superadmin debe ser el mismo en el portal dental.

---

## 6. Notificaciones por email en cada inscripción

- **Edge Function:** `supabase/functions/send-inscription-email/index.ts`
- **Trigger:** Se llama desde `KitEspacioDatosInscripcion.tsx` línea 177 con `supabase.functions.invoke('send-inscription-email', { body: {...} })`
- **La llamada es non-blocking:** usa `.catch()` para no bloquear el flujo principal
- **Datos enviados al email:**
  - `clinicName`, `cif`, `email` (de la clínica)
  - `contactName`, `contactEmail`, `contactPhone` (del responsable)
  - `referenceId` (los primeros 8 caracteres del UUID en mayúsculas)
- **Destinatario:** `emilio.emulet@accuro.es`
- **Remitente:** `Global Data Care <onboarding@resend.dev>`
- **Asunto:** `Nueva inscripción Kit Espacio de Datos - ${clinicName}`
- **Tecnología:** API de Resend (`https://api.resend.com/emails`)
- **Secret requerido:** `RESEND_API_KEY` (configurado en Lovable Cloud)
- **CORS headers incluidos** para llamadas desde el frontend

---

## 7. Base de datos de inscripciones (`kit_inscriptions`)

- **Tabla:** `public.kit_inscriptions`
- **Campos principales:**
  | Campo | Tipo | Requerido | Descripción |
  |-------|------|-----------|-------------|
  | `id` | UUID | Auto | PK, `gen_random_uuid()` |
  | `clinic_name` | TEXT | Sí | Nombre de la clínica |
  | `cif` | TEXT | Sí | CIF/NIF de la clínica |
  | `address` | TEXT | Sí | Dirección completa |
  | `city` | TEXT | Sí | Ciudad |
  | `province` | TEXT | Sí | Provincia (select de 52 provincias) |
  | `postal_code` | TEXT | Sí | Código postal (5 dígitos) |
  | `email` | TEXT | Sí | Email de la clínica |
  | `phone` | TEXT | Sí | Teléfono de la clínica |
  | `contact_name` | TEXT | Sí | Nombre del responsable |
  | `contact_email` | TEXT | Sí | Email del responsable |
  | `contact_phone` | TEXT | Sí | Teléfono del responsable |
  | `contact_role` | TEXT | Sí | Cargo (director/gerente/veterinario/otro) |
  | `contract_accepted` | BOOLEAN | Sí | Aceptación del contrato |
  | `acceptance_act_accepted` | BOOLEAN | Sí | Aceptación del acta |
  | `contract_accepted_at` | TIMESTAMPTZ | No | Timestamp de aceptación |
  | `privacy_accepted` | BOOLEAN | Sí | Aceptación de privacidad |
  | `terms_accepted` | BOOLEAN | Sí | Aceptación de términos |
  | `communications_accepted` | BOOLEAN | No | Comunicaciones comerciales |
  | `current_software` | TEXT | No | Software actual (ej: Qvet, Provet) |
  | `has_digital_records` | TEXT | No | Enum: si/no/parcialmente |
  | `has_website` | BOOLEAN | No | ¿Tiene web? |
  | `interested_modules` | JSON | No | Array de módulos seleccionados |
  | `num_employees` | INTEGER | No | Número de empleados |
  | `num_veterinarians` | INTEGER | No | Número de veterinarios |
  | `utm_source` | TEXT | No | UTM source |
  | `utm_medium` | TEXT | No | UTM medium |
  | `utm_campaign` | TEXT | No | UTM campaign |
  | `status` | TEXT | No | Estado de la inscripción |
  | `created_at` | TIMESTAMPTZ | Auto | Fecha de creación |
  | `updated_at` | TIMESTAMPTZ | Auto | Fecha de actualización |

---

## 8. Contrato de adhesión completo — Componente embebido (`ContractContent.tsx`)

- **Archivo:** `src/components/legal/ContractContent.tsx` (177 líneas)
- **Props:** `clinicName?: string` (default: `'[NOMBRE DE LA CLÍNICA]'`)
- **Contenedor:** `ScrollArea` con `h-[350px]`, fondo `bg-muted/30`
- **Estructura del contrato:**
  1. **Encabezado:** "CONTRATO DE ADHESIÓN AL ESPACIO DE DATOS FEDERADO / Y GESTIÓN DE AYUDAS 'KIT ESPACIO DE DATOS'"
  2. **REUNIDOS:** Datos del PRESTADOR (ACCURO TECHNOLOGY, S.L.) y del CLIENTE (nombre dinámico)
  3. **EXPONEN:** Dos apartados (I y II)
  4. **7 CLÁUSULAS:**
     - Cláusula 1: Objeto del Contrato
     - Cláusula 2: Duración y Condicionalidad (Fase 1 en `bg-amber-50`, Fase 2 en `bg-green-50`)
     - Cláusula 3: Precio y Condiciones Económicas (en `bg-blue-50`)
     - Cláusula 4: Forma de Pago y Financiación (Hokodo)
     - Cláusula 5: Acta de Conformidad y Activación
     - Cláusula 6: Obligaciones del Cliente (Mandato, penalización en `bg-red-50`)
     - Cláusula 7: Disputas Comerciales
- **Diseño:** Usa bordes laterales (`border-l-2 border-primary/30 pl-3`) en las cláusulas, colores semánticos por fase

---

## 9. Acta de conformidad y entrega (`AcceptanceActContent.tsx`)

- **Archivo:** `src/components/legal/AcceptanceActContent.tsx` (117 líneas)
- **Props:** `clinicName?: string`, `contactName?: string`
- **Contenedor:** `ScrollArea` con `h-[300px]`, fondo `bg-muted/30`
- **Genera fecha automática:** `new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' })`
- **5 Secciones de certificación:**
  1. **Recepción efectiva del servicio** (borde verde, `border-l-2 border-green-500`)
  2. **Inicio de la consultoría "Kit Espacio de Datos"** (borde azul)
  3. **Conformidad y ausencia de incidencias** (borde púrpura)
  4. **Activación de la financiación Hokodo** (borde ámbar, fondo `bg-amber-50`, texto `AUTORIZO IRREVOCABLEMENTE`)
  5. **Validez de la firma digital** (borde gris)

---

## 10. Páginas de adhesión al espacio de datos

### 10a. Adhesión general (`/solutions/adhesion`)
- **Archivo:** `src/pages/solutions/AdhesionEspacioDatos.tsx`
- **Ruta en App.tsx:** `<Route path="/solutions/adhesion" element={<AdhesionEspacioDatos />} />`
- **Contenido:** Formulario de 3 pasos (datos clínica, responsable, aceptación legal)
- **Contexto:** Adhesión al Espacio de Datos de Salud Animal

### 10b. Adhesión central de compras (`/portal/procurement/adhesion`)
- **Archivo:** `src/pages/portals/ProcurementAdhesion.tsx`
- **Ruta en App.tsx:** `<Route path="/portal/procurement/adhesion" element={<ProcurementAdhesion />} />`
- **Enfoque:** Compra coordinada, IA predictiva y soberanía de datos

---

## 11. Página de condiciones del Kit Espacio de Datos (`/condiciones-kit-espacio-datos`)

- **Archivo:** `src/pages/CondicionesKitEspacioDatos.tsx` (579 líneas)
- **Ruta en App.tsx:** `<Route path="/condiciones-kit-espacio-datos" element={<CondicionesKitEspacioDatos />} />`
- **Secciones principales:**
  1. **Header sticky** con botón "Volver al inicio" y botón "Solicitar Inscripción"
  2. **Hero Section** con badge de deadline animado (pulsante), logos institucionales (Kit Espacio de Datos + Gobierno España/Red.es)
  3. **Cuadro de Pricing** con Card prominente: 15.000€—30.000€ subvención, detalles de criterios (verde para básico, azul para avanzado, ámbar para info)
  4. **3 Cards de resumen ejecutivo:** 190€/mes | 6 meses | 30.000€
  5. **Timeline de Fases:** 2 cards (Fase 1 ámbar irrevocable, Fase 2 verde condicional con renovación 2 años)
  6. **Calculadora ROI:** inversión 1.140€ → subvención 30.000€ (ROI 26x)
  7. **Grid de cuotas mensuales:** 6 cards animadas (Mes 1-6, 190€ cada una)
  8. **Servicios incluidos:** 7 items con iconos
  9. **FAQ Acordeón:** 7 preguntas frecuentes (Accordion de shadcn)
  10. **Aviso legal** con datos de ACCURO TECHNOLOGY, S.L.
  11. **CTA Final** con 3 botones: Solicitar Inscripción, Ver Propuesta, Ver Contrato
  12. **GlobalFooter**
- **Animaciones:** Usa `framer-motion` para `fadeInUp` y animaciones de escala en badges
- **Logos importados:** `logo-gobierno-red-es.png`, `logo-kit-espacio-datos.jpg` desde `@/assets/`

---

## 12. Página de contrato del Kit Espacio de Datos (`/contrato-kit-espacio-datos`)

- **Archivo:** `src/pages/ContratoKitEspacioDatos.tsx` (656 líneas)
- **Ruta en App.tsx:** `<Route path="/contrato-kit-espacio-datos" element={<ContratoKitEspacioDatos />} />`
- **Funcionalidad especial:**
  - **Detección de scroll al final:** `useEffect` que escucha `scroll` y activa `hasScrolledToEnd` cuando faltan menos de 300px del final
  - **Checkboxes bloqueados:** No se pueden marcar hasta que el usuario llegue al final del documento
  - **Registro de timestamp:** Cuando ambos checkboxes están marcados, se guarda en `localStorage` como `contract_acceptance`
  - **Botón "Continuar":** Redirige a `/inscripcion-kit-espacio-datos?contrato_leido=true&acta_leida=true&timestamp=...`
- **Estructura:**
  1. **Header sticky** con enlace "Volver a Condiciones"
  2. **Indicador de progreso de lectura** (banner ámbar que desaparece al llegar al final)
  3. **Aviso legal inicial** con datos de ACCURO TECHNOLOGY, S.L.
  4. **Sección 1: Contrato Principal** (12 cláusulas renderizadas como Cards con números circulares)
     - Cláusula 1: Objeto
     - Cláusula 2: Duración (Fase 1 ámbar, Fase 2 verde con 24 meses)
     - Cláusula 3: Precio (badges azules)
     - Cláusula 4: Forma de Pago (Hokodo)
     - Cláusula 5: Acta de Conformidad
     - Cláusula 6: Obligaciones (con penalización)
     - Cláusula 7: Disputas Comerciales
     - Cláusula 8: Protección de Datos (RGPD)
     - Cláusula 9: Propiedad Intelectual
     - Cláusula 10: Jurisdicción (Madrid)
     - Cláusula 11: Comunicaciones
     - Cláusula 12: Firma Digital (eIDAS)
  5. **Sección 2: Acta de Entrega y Conformidad** (5 puntos de certificación como Cards con bordes laterales)
  6. **Sección de Aceptación Digital** (2 checkboxes + timestamp + botón continuar)
  7. **Tarjetas resumen de fases** (Fase 1 ámbar + Fase 2 verde)
  8. **GlobalFooter**

---

## 13. Sistema de roles y autenticación

### 13a. Autenticación (`AuthContext.tsx`)
- **Archivo:** `src/contexts/AuthContext.tsx`
- **Funcionalidad:** Proveedor de contexto con `user`, `session`, `loading`, `signOut`
- **Listener:** `supabase.auth.onAuthStateChange` + `getSession()` al montar
- **signOut:** Cierra sesión y navega a `/auth`

### 13b. Roles (`RoleContext.tsx`)
- **Archivo:** `src/contexts/RoleContext.tsx`
- **Tipo:** `AppRole = 'doctor' | 'lab_tech' | 'patient' | 'researcher' | 'insurance_admin' | 'auditor'`
- **Tabla:** `user_roles` con campos `id`, `user_id`, `role`, `created_at`
- **Función DB:** `has_role(_user_id uuid, _role app_role)` — `SECURITY DEFINER`
- **Lógica:** Carga roles del usuario al detectar `user` en AuthContext. Primer rol = rol por defecto.

### 13c. Protección de rutas (`useRoleProtection.tsx`)
- **Archivo:** `src/hooks/useRoleProtection.tsx`
- **Uso:** `useRoleProtection(['doctor', 'auditor'])` — redirige a `/` si el usuario no tiene uno de los roles permitidos
- **Muestra toast** de error con los roles requeridos

### 13d. Página de login (`/auth`)
- **Archivo:** `src/pages/Auth.tsx`
- **Ruta:** `<Route path="/auth" element={<Auth />} />`

---

## 14. Banner de modo auditoría

- **Ubicación:** Dentro del `AppLayout.tsx` (layout para rutas autenticadas)
- **Condición:** Se muestra cuando `currentRole === 'auditor'`
- **Texto:** *"MODO AUDITORÍA: Visualizando Datos Sintéticos. No se exponen datos reales de pacientes (GDPR Safe)."*
- **Diseño:** Fondo naranja, icono `Shield`, texto blanco, `z-index: 50`, posición fija en la parte inferior

---

## 15. Layout de aplicación autenticada (`AppLayout.tsx`)

- **Archivo:** `src/components/AppLayout.tsx`
- **Funcionalidad:**
  - Redirige a `/auth` si no hay usuario autenticado
  - Muestra spinner de carga mientras verifica autenticación
  - Incluye: `Sidebar` (izquierda), `Header` (arriba), `Breadcrumbs`, área de contenido principal (`<Outlet />`)
  - Banner de auditoría al final (ver punto 14)
- **Rutas protegidas por AppLayout** (en `App.tsx`):
  ```
  /dashboard, /auditor-dashboard, /clinical, /ai-assistant, /e-prescription,
  /triage, /hospitalization, /lab-hub, /inventory, /research, /research/marketplace,
  /epidemiology, /claims, /wallet
  ```

---

## 16. Formulario de inscripción multi-paso (`KitEspacioDatosInscripcion.tsx`)

- **Archivo:** `src/pages/KitEspacioDatosInscripcion.tsx` (763 líneas)
- **Ruta:** `/inscripcion-kit-espacio-datos`
- **Tecnologías:** `react-hook-form` + `zod` para validación, `shadcn` components
- **3 pasos:**
  1. **Datos de la Clínica** (8 campos: nombre, CIF, teléfono, email, dirección, CP, ciudad, provincia)
  2. **Datos del Responsable** (4 campos: nombre, cargo, teléfono, email)
  3. **Información Adicional y Confirmación:**
     - Info opcional: nº veterinarios, nº empleados, software actual, web, registros digitales
     - Módulos de interés (6 checkboxes): FHIR, DPP, Wallet, OneHealth, Procurement, KPI
     - Contrato embebido (`ContractContent`) + checkbox de aceptación
     - Acta de conformidad embebida (`AcceptanceActContent`) + checkbox de aceptación
     - Consentimientos: privacidad, términos, comunicaciones
- **Al enviar:**
  1. Inserta en tabla `kit_inscriptions`
  2. Genera `referenceId` (8 primeros chars del UUID en mayúsculas)
  3. Envía email via edge function (non-blocking)
  4. Muestra pantalla de éxito con referencia
- **Cargos disponibles:** Director/a, Gerente, Veterinario/a responsable, Otro
- **Lista de provincias:** 52 provincias españolas + Ceuta y Melilla
- **Header:** Logo + "Global Data Care" + "Kit Espacio de Datos 2025"
- **Incluye `NavigationControls`** y **`GlobalFooter`**

---

## 17. Integración con Hokodo (BNPL)

- **No hay integración técnica directa** con la API de Hokodo
- **Es una referencia contractual:** Los documentos legales mencionan a Hokodo como entidad financiera externa
- **Aparece en:**
  - `ContractContent.tsx` — Cláusulas 4 y 7
  - `AcceptanceActContent.tsx` — Punto 4 (activación irrevocable de financiación)
  - `ContratoKitEspacioDatos.tsx` — Cláusulas 4 y 7
  - `CondicionesKitEspacioDatos.tsx` — FAQ y tarjeta de Fase 1
- **Modalidad:** 6 cuotas mensuales de 190€ + IVA. Deuda cierta, líquida y exigible.

---

## 18. Campaña Kit Espacio de Datos (banner en homepage)

- **Archivo:** `src/components/home/KitDatosCampaignBanner.tsx` (125 líneas)
- **Se incluye en:** `src/pages/Index.tsx` (justo después del Hero)
- **Contenido:**
  - Título: "AYUDAS KIT ESPACIO DE DATOS"
  - Badge animado de deadline (pulsante con `framer-motion`)
  - Badge "PLAZAS LIMITADAS" (destructive, también animado)
  - Mensaje central: *"Digitaliza tu clínica veterinaria con hasta 30.000€..."*
  - 3 beneficios con checkmarks verdes
  - **Botón CTA hero:** Gradiente `from-emerald-500 via-teal-500 to-cyan-500`, efecto shimmer, texto "SOLICITA LAS AYUDAS KIT ESPACIO DE DATOS"
  - 2 CTAs secundarios: "Solicitar Inscripción por 190€ al mes" + "Ver Condiciones"
  - Logos institucionales (Kit Espacio de Datos + Gobierno España)

---

## 19. Guía del Kit Espacio de Datos (`/guia-kit-espacio-datos`)

- **Archivo:** `src/pages/GuiaKitEspacioDatos.tsx` (620 líneas)
- **Ruta:** `/guia-kit-espacio-datos`
- **Contenido:** Información detallada sobre el programa, requisitos, proceso de solicitud, beneficios, módulos disponibles, timeline del proceso

---

## 20. Propuesta técnica y presentaciones

- **Presentaciones disponibles:**
  - `/investor-pitch` — Investor Pitch Deck (`src/pages/presentation/InvestorPitchDeck.tsx`)
  - `/presentation/mobile` — Presentación Móvil (`src/pages/presentation/MobilePresentation.tsx`)
  - `/presentation/strategic` — Presentación Estratégica (`src/pages/StrategicPresentation.tsx`)
  - `/dossier` — Business Partners Dossier (`src/pages/dossier/BusinessPartnersDossier.tsx`)
  - `/dossier/slides` — Business Partners Slides (`src/pages/dossier/BusinessPartnersSlides.tsx`)
  - `/showcase` — Platform Showcase (`src/pages/dossier/PlatformShowcase.tsx`)
- **Datos mock para demos:**
  - `src/data/demoKpis/` — KPIs para clínica, veterinario, tutor, investigador
  - `src/data/dossier/` — Perfiles de partners, propuestas de valor
  - `src/data/kpiSources/` — Clinical outcomes, operational flow, tutor voice
- **Componentes reutilizables para KPIs:**
  - `src/components/demo/KpiCard.tsx`
  - `src/components/demo/TrendChart.tsx`
  - `src/components/demo/OccupancyHeatmap.tsx`
  - `src/components/demo/AlertsPanel.tsx`

---

## 21. Página principal (Landing — `Index.tsx`)

- **Archivo:** `src/pages/Index.tsx` (345 líneas)
- **Estructura:**
  1. **Hero:** Título "El primer Espacio de Datos Federado de Salud Animal en Europa", iconos Dog + Cat, logos institucionales
  2. **KitDatosCampaignBanner** (ver punto 18)
  3. **Mid CTA:** "El Futuro de la Medicina Veterinaria No es solo Digital, es Federado"
  4. **Portals Bento Grid:** 6 cards (Gestión Veterinaria, DPP, Wallet Tutor, Investigación One Health, Abastecimiento, Excelencia)
  5. **Profile Cards:** 4 perfiles con gradientes (Tutor, Veterinario, Director, Científico) → links a /demo/*
  6. **Arquitectura de Confianza:** 3 features (Interoperabilidad FHIR, Soberanía Gaia-X, Trazabilidad Blockchain)
  7. **GlobalFooter**
- **Estadísticas live:** Cuenta registros de `patients`, `clinical_encounters`, `lab_orders` desde Supabase

---

## 22. Aviso Legal completo (`/legal`)

- **Archivo:** `src/pages/LegalNotice.tsx` (439 líneas)
- **Estructura:** Sidebar con índice de contenidos (desktop) + collapsible TOC (mobile)
- **9 secciones colapsables** (componente `Section` con `Collapsible`):
  1. Información del Titular
  2. Objeto y Ámbito de Aplicación
  3. Condiciones de Uso
  4. Propiedad Intelectual
  5. Protección de Datos Personales (RGPD completo con responsable, finalidades, base legal, destinatarios, plazos, derechos)
  6. Política de Cookies
  7. Exclusión de Responsabilidad
  8. Ley Aplicable y Jurisdicción
  9. Modificaciones
- **Última actualización:** "3 de febrero de 2026"
- **SEO:** Title tag y meta description dinámicos, canonical URL

---

## 23. Estructura de rutas completa (`App.tsx`)

```
/ .......................... Landing (público)
/auth ...................... Login/Registro
/legal ..................... Aviso Legal
/condiciones-kit-espacio-datos ... Condiciones
/contrato-kit-espacio-datos ...... Contrato
/inscripcion-kit-espacio-datos ... Inscripción
/guia-kit-espacio-datos .......... Guía
/propuesta-kit-espacio-datos ..... Propuesta
/portal/doctor ............. Portal Médico
/portal/lab ................ Portal Laboratorio
/portal/patient ............ Wallet Paciente
/portal/research ........... Marketplace Investigación
/portal/insurance .......... Portal Aseguradoras
/portal/procurement ........ Portal Compras
/portal/procurement/adhesion ... Adhesión Compras
/portal/supply ............. Supply Chain
/portal/kpi ................ Dashboard KPIs
/tech ...................... Índice Tecnología
/tech/* .................... (11 sub-páginas de tecnología)
/business/models ........... Modelos de Negocio
/business/case/1-20 ........ 20 casos de negocio
/solutions/clinics ......... Soluciones Clínicas
/solutions/product-passport . Pasaporte Digital
/solutions/adhesion ........ Adhesión Espacio Datos
/demo ...................... Selector de Demo
/demo/tutor|vet|clinic|research .. 4 paneles demo
/kpi/* ..................... Páginas detalle KPI
/dossier ................... Business Partners
/dossier/slides ............ Slides Partners
/showcase .................. Platform Showcase
/investor-pitch ............ Investor Deck
/presentation/* ............ Presentaciones
/video/* ................... Producción Vídeo (oculto)
/consulting/* .............. Propuesta Técnica

(Rutas protegidas por AppLayout — requieren autenticación):
/dashboard, /auditor-dashboard, /clinical, /ai-assistant,
/e-prescription, /triage, /hospitalization, /lab-hub,
/inventory, /research, /research/marketplace, /epidemiology,
/claims, /wallet
```

---

## 24. Componentes globales y utilidades

- **WhatsAppButton:** `src/components/ui/WhatsAppButton.tsx` — Botón flotante de WhatsApp visible en toda la app
- **ScrollToTop:** `src/components/ScrollToTop.tsx` — Scroll automático al cambiar de ruta
- **NavigationControls:** `src/components/ui/NavigationControls.tsx` — Controles de navegación reutilizables
- **ErrorBoundary:** `src/components/ErrorBoundary.tsx` — Captura de errores global
- **BusinessProposalModal:** `src/components/business/BusinessProposalModal.tsx` — Modal de propuesta de negocio (global)

---

## 25. Archivos estáticos y assets

- **Logos institucionales:**
  - `src/assets/logo-gobierno-red-es.png` — Logo Gobierno España / Red.es
  - `src/assets/logo-kit-espacio-datos.jpg` — Logo Kit Espacio de Datos
  - `src/assets/logos-kit-digital.jpg` — Logos Kit Digital (usado en hero)
  - `src/assets/codigo_de_barras.jpg` — Código de barras (DPP)
  - `src/assets/red-federada-activa.png` — Ilustración red federada
  - `src/assets/servidores-aislados.png` — Ilustración servidores
- **PDF público:** `public/documents/Espacios_de_Datos_Elegibles_KTED.pdf` — Documento oficial de RED.ES

---

## Notas para la adaptación al portal de Salud Bucodental

Al replicar estos cambios, ten en cuenta:

### Cambios de terminología
| Portal Animal | Portal Dental |
|---------------|---------------|
| Salud animal | Salud bucodental |
| Veterinario/a | Odontólogo/a / Dentista |
| Clínica veterinaria | Clínica dental |
| Tutor de mascotas / Pet Parent | Paciente |
| Mascota / Animal | Paciente dental |
| PawPrint (icono) | Smile / Tooth (icono sugerido) |
| Dog, Cat (iconos) | Smile (icono sugerido) |
| "Espacio de Datos Federado de Salud Animal" | "Espacio de Datos Federado de Salud Bucodental" |
| `num_veterinarians` | `num_dentists` o `num_odontologos` |
| Software: Qvet, Provet, Veterges | Software: Dentrix, CS Dental, Gesden |
| Módulos: Wallet tutores, One Health, DPP | Módulos: Portal paciente, Radiología dental, Ortodoncia |

### Lo que NO cambia
- **Prestador:** ACCURO TECHNOLOGY, S.L. (mismos datos legales)
- **Precios:** 1.140€ + IVA, 6 cuotas de 190€, subvención 15.000€-30.000€
- **Duración:** Fase 1 = 6 meses irrevocable, Fase 2 = 24 meses condicional
- **Financiación:** Hokodo con las mismas condiciones
- **Email notificaciones:** emilio.emulet@accuro.es
- **SuperAdmin:** emilio.emulet@accuro.es
- **Tecnología:** Resend API, Supabase, React, shadcn, framer-motion
- **Estructura legal:** Contrato, Acta de Conformidad, Aviso Legal (misma estructura, mismo texto base)

### Tabla de inscripciones dental
- Sugerencia: `kit_inscriptions_dental` o `kit_inscriptions` con campo `vertical: 'dental'`
- Adaptar `CONTACT_ROLES`: Director/a, Gerente, **Odontólogo/a responsable**, Otro
- Adaptar `MODULES`: Gestión clínica dental (FHIR), Radiología dental, Portal paciente, Ortodoncia digital, Periodoncia, Dashboard KPIs

### Marca
- "GLOBAL DATA CARE" puede mantenerse como marca paraguas o crear una marca específica para el vertical dental
- El footer mantiene la línea inferior adaptada: *"Proyecto GLOBAL DATA CARE — Espacio de Datos Federado de Salud Bucodental"*
