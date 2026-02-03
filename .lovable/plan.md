

# Plan: Dossier de Business Partners - Espacio de Datos Federados de Salud Animal

## Contexto y Objetivo

Crear un **documento/portal independiente** dentro del proyecto que sirva como "Dossier de Business Partners" para el Espacio de Datos Federados de Salud Animal. Este dossier debe poder:

1. **Reutilizar** screenshots, interfaces y conceptos del proyecto existente como evidencia visual
2. **Mantenerse aislado** del resto del proyecto (no interferir con las funcionalidades existentes)
3. **Servir como documento comercial** para presentar a potenciales Business Partners

---

## Opciones de Arquitectura

### Opcion A: Portal Web Independiente (Recomendada)

Crear una nueva ruta `/dossier-business-partners` con un portal web completo y navegable, similar a `PropuestaKitEspacioDatos.tsx` o `StrategicPresentation.tsx`.

**Ventajas:**
- Interactivo y navegable
- Puede incluir capturas de pantalla de las interfaces existentes
- Profesional para presentaciones en vivo
- Reutiliza componentes del proyecto

**Estructura propuesta:**
```
src/
├── pages/
│   └── dossier/
│       ├── BusinessPartnersDossier.tsx    # Página principal del dossier
│       ├── sections/
│       │   ├── ExecutiveSummary.tsx       # Resumen ejecutivo
│       │   ├── MarketOpportunity.tsx      # Oportunidad de mercado
│       │   ├── PlatformShowcase.tsx       # Demostración visual de la plataforma
│       │   ├── PartnerProfiles.tsx        # Perfiles de partners objetivo
│       │   ├── ValueProposition.tsx       # Propuesta de valor por tipo de partner
│       │   ├── TechnologyOverview.tsx     # Resumen tecnológico
│       │   ├── BusinessModels.tsx         # Modelos de negocio y revenue share
│       │   └── NextSteps.tsx              # Llamada a la acción
│       └── components/
│           └── DossierLayout.tsx          # Layout específico del dossier
│
└── layouts/
    └── DossierLayout.tsx                  # Layout con navegación lateral
```

### Opcion B: Presentación en Slides (Alternativa)

Similar a `StrategicPresentation.tsx`, crear una presentación navegable con flechas.

**Ventajas:**
- Formato tipo Keynote/PowerPoint
- Ideal para proyector
- Navegación secuencial

**Estructura:**
```
src/pages/dossier/
└── BusinessPartnersPresentation.tsx   # 15-20 slides navegables
```

---

## Recomendacion: Opcion A + B Combinada

Crear **ambos formatos**:
1. Un **portal web completo** para consulta detallada
2. Una **versión slides** para presentaciones ejecutivas

---

## Contenido del Dossier

### Secciones Principales

| Seccion | Contenido | Elementos Visuales del Proyecto a Reutilizar |
|---------|-----------|----------------------------------------------|
| **1. Portada** | Título, logo, fecha, confidencialidad | Hero de `Index.tsx` |
| **2. Resumen Ejecutivo** | Vision, mision, oportunidad | Badges de `PropuestaKitEspacioDatos.tsx` |
| **3. El Problema** | Fragmentacion de datos veterinarios | Imagen "servidores aislados" |
| **4. La Solucion** | Arquitectura federada | Imagen "red federada activa", diagrama de `Interoperability.tsx` |
| **5. Plataforma en Accion** | Capturas de los 6 portales | Screenshots de: Doctor Portal, Patient Wallet, Research Marketplace, Supply Chain, KPI Dashboard |
| **6. Perfiles de Partners** | Tipos de socios buscados | Tarjetas de perfil de `KpiDashboardPage.tsx` |
| **7. Propuesta de Valor** | Beneficios por tipo de partner | Cards de `BusinessModels.tsx` |
| **8. Modelos de Negocio** | Revenue streams y revenue share | Calculadora ROI de `BusinessModels.tsx` |
| **9. Tecnologia** | Stack y arquitectura | Diagrama de `TechnicalProposal.tsx` |
| **10. Financiacion** | Kit Espacio de Datos | Seccion de `PropuestaKitEspacioDatos.tsx` |
| **11. Roadmap** | Fases de implementacion | Timeline de `StrategicPresentation.tsx` |
| **12. Llamada a la Accion** | Formulario de contacto | CTA existente |

### Tipos de Business Partners a Destacar

Basandome en el proyecto existente:

1. **Clinicas Veterinarias** - Proveedores de datos clinicos
2. **Laboratorios** - Integracion de resultados diagnosticos
3. **Industria Farmaceutica** - Trazabilidad de productos
4. **Aseguradoras** - Smart claims y parametric insurance
5. **Instituciones de Investigacion** - Federated learning
6. **Centrales de Compra** - Supply chain federado
7. **Fabricantes IoT** - Sensores y dispositivos
8. **Inversores** - Financiacion del ecosistema

---

## Archivos a Crear

| Archivo | Tipo | Descripcion |
|---------|------|-------------|
| `src/pages/dossier/BusinessPartnersDossier.tsx` | CREAR | Pagina principal con navegacion |
| `src/layouts/DossierLayout.tsx` | CREAR | Layout con sidebar y header |
| `src/pages/dossier/BusinessPartnersSlides.tsx` | CREAR | Version slides para presentaciones |
| `src/data/dossier/partnerProfiles.ts` | CREAR | Datos de tipos de partners |
| `src/data/dossier/valuePropositions.ts` | CREAR | Propuestas de valor por perfil |

## Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/App.tsx` | Agregar rutas `/dossier` y `/dossier/slides` |

---

## Rutas Nuevas

```
/dossier                    → BusinessPartnersDossier (portal completo)
/dossier/slides             → BusinessPartnersSlides (version presentacion)
```

---

## Elementos Visuales a Capturar/Referenciar

El dossier incluira referencias visuales a estas paginas existentes:

1. **`/portal/doctor`** - Cockpit veterinario
2. **`/portal/patient`** - Wallet del tutor
3. **`/portal/research`** - Marketplace de datos
4. **`/portal/supply`** - Central de compras
5. **`/portal/kpi`** - Dashboard de KPIs
6. **`/solutions/product-passport`** - Pasaporte digital
7. **`/business/models`** - Modelos de negocio
8. **`/demo/*`** - Paneles demo por perfil

---

## Estimacion de Trabajo

| Componente | Lineas Estimadas |
|------------|------------------|
| DossierLayout.tsx | ~100 |
| BusinessPartnersDossier.tsx | ~600 |
| BusinessPartnersSlides.tsx | ~500 |
| partnerProfiles.ts | ~80 |
| valuePropositions.ts | ~100 |
| Modificaciones App.tsx | ~10 |
| **Total** | ~1,400 lineas |

---

## Resultado Final

Un portal profesional accesible en `/dossier` que:

- Presenta la oportunidad de negocio del Espacio de Datos Federados
- Muestra visualmente la plataforma existente como evidencia
- Define claramente los perfiles de Business Partners buscados
- Explica los modelos de colaboracion y revenue share
- Incluye una version en slides para presentaciones ejecutivas

