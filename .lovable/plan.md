
# Plan: Carpeta Exportable de Presentaciones Completas

## Objetivo

Crear una carpeta organizada `export/presentations/` que contenga todos los archivos necesarios para copiar y exportar las presentaciones a un proyecto nuevo, incluyendo:
- Todos los componentes de slides (10 slides inversor + 9 slides business partners + 15 slides mobile)
- Todas las imagenes y assets utilizados
- Todos los datos mock necesarios para los graficos
- Componentes UI reutilizables
- Configuracion de estilos

## Inventario de Archivos a Exportar

### 1. Paginas de Presentacion Principal

| Archivo Original | Descripcion |
|------------------|-------------|
| `src/pages/presentation/InvestorPitchDeck.tsx` | 10 slides para inversores (1038 lineas) |
| `src/pages/presentation/MobilePresentation.tsx` | 15 slides formato vertical movil (495 lineas) |
| `src/pages/dossier/BusinessPartnersSlides.tsx` | 9 slides business partners (575 lineas) |
| `src/pages/dossier/PlatformShowcase.tsx` | Dossier completo 25 secciones (2644 lineas) |
| `src/pages/dossier/BusinessPartnersDossier.tsx` | Portal de business partners |

### 2. Assets e Imagenes

| Asset | Uso |
|-------|-----|
| `src/assets/servidores-aislados.png` | Slide "El Problema" - silos de datos |
| `src/assets/red-federada-activa.png` | Slide "La Solucion" - arquitectura federada |
| `src/assets/logo-gobierno-red-es.png` | Logos institucionales Red.es |
| `src/assets/logo-kit-espacio-datos.jpg` | Logo Kit Espacio de Datos |
| `src/assets/logos-kit-digital.jpg` | Logos Kit Digital |
| `src/assets/codigo_de_barras.jpg` | Codigo de barras para DPP |

### 3. Datos Mock para Graficos

| Archivo | Contenido |
|---------|-----------|
| `src/data/dossier/partnerProfiles.ts` | 8 perfiles de business partners con iconos y gradientes |
| `src/data/dossier/valuePropositions.ts` | Propuestas de valor por tipo de partner |
| `src/data/demoKpis/clinicMockData.ts` | Datos de clinica para graficos |
| `src/data/demoKpis/tutorMockData.ts` | Datos de tutor/wallet para graficos |
| `src/data/demoKpis/vetMockData.ts` | Datos de veterinario para graficos |
| `src/data/demoKpis/researchMockData.ts` | Datos de investigacion para graficos |

### 4. Componentes UI Necesarios

| Componente | Ruta |
|------------|------|
| Card, CardContent, CardHeader, CardTitle | `src/components/ui/card.tsx` |
| Button | `src/components/ui/button.tsx` |
| Badge | `src/components/ui/badge.tsx` |
| Progress | `src/components/ui/progress.tsx` |
| Carousel, CarouselContent, CarouselItem | `src/components/ui/carousel.tsx` |

### 5. Utilidades

| Archivo | Contenido |
|---------|-----------|
| `src/lib/utils.ts` | Funcion cn() para clases |
| `src/lib/format.ts` | Funciones de formateo |

## Estructura de Carpetas a Crear

```
export/
└── presentations/
    ├── README.md                          # Instrucciones de uso
    ├── package.json                       # Dependencias necesarias
    │
    ├── pages/
    │   ├── InvestorPitchDeck.tsx          # 10 slides inversores
    │   ├── MobilePresentation.tsx         # 15 slides movil
    │   ├── BusinessPartnersSlides.tsx     # 9 slides partners
    │   └── PlatformShowcase.tsx           # Dossier completo
    │
    ├── assets/
    │   ├── servidores-aislados.png
    │   ├── red-federada-activa.png
    │   ├── logo-gobierno-red-es.png
    │   ├── logo-kit-espacio-datos.jpg
    │   ├── logos-kit-digital.jpg
    │   └── codigo_de_barras.jpg
    │
    ├── data/
    │   ├── partnerProfiles.ts
    │   ├── valuePropositions.ts
    │   ├── clinicMockData.ts
    │   ├── tutorMockData.ts
    │   ├── vetMockData.ts
    │   └── researchMockData.ts
    │
    ├── components/
    │   └── ui/
    │       ├── card.tsx
    │       ├── button.tsx
    │       ├── badge.tsx
    │       ├── progress.tsx
    │       └── carousel.tsx
    │
    └── lib/
        └── utils.ts
```

## Archivos a Crear

### 1. README.md
Instrucciones detalladas para:
- Copiar la carpeta a un nuevo proyecto
- Instalar dependencias (framer-motion, recharts, lucide-react)
- Configurar rutas en App.tsx
- Ajustar paths de imports

### 2. package.json (solo dependencias)
```json
{
  "dependencies": {
    "framer-motion": "^12.x",
    "recharts": "^2.x",
    "lucide-react": "^0.462.x",
    "embla-carousel-react": "^8.x",
    "react-router-dom": "^6.x",
    "class-variance-authority": "^0.7.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  }
}
```

### 3. Paginas de Presentacion (con imports ajustados)
Cada archivo tendra los imports modificados para usar rutas relativas dentro de la carpeta export

### 4. Datos Mock Completos
Todos los datos necesarios para que los graficos funcionen sin dependencias externas

## Seccion Tecnica

### Dependencias Externas Requeridas

| Paquete | Version | Uso |
|---------|---------|-----|
| `framer-motion` | ^12.x | Animaciones de slides |
| `recharts` | ^2.x | Graficos (PieChart, BarChart, LineChart, AreaChart) |
| `lucide-react` | ^0.462.x | Iconos |
| `embla-carousel-react` | ^8.x | Carrusel para MobilePresentation |
| `react-router-dom` | ^6.x | Navegacion y Link |
| `class-variance-authority` | ^0.7.x | Variantes de componentes |
| `clsx` + `tailwind-merge` | ^2.x | Utilidad cn() |

### Graficos Incluidos por Presentacion

**InvestorPitchDeck (10 slides):**
- PieChart: Uso de fondos (4 segmentos)
- BarChart: Revenue streams proyeccion (5 barras)
- LineChart: Timeline captacion clinicas (dual Y-axis)

**PlatformShowcase (25 secciones):**
- PieChart: Gastos tutor, distribucion datasets
- AreaChart: Tendencia gastos, metricas clinica
- BarChart: KPIs, benchmarks, supply chain
- LineChart: Epidemiologia, rendimiento

**BusinessPartnersSlides (9 slides):**
- Sin graficos Recharts (usa cards y badges estaticos)

**MobilePresentation (15 slides):**
- Sin graficos Recharts (formato vertical simplificado)

### Datos Mock por Grafico

| Grafico | Archivo de Datos | Variables |
|---------|------------------|-----------|
| Uso de Fondos | InvestorPitchDeck.tsx (inline) | `useOfFunds` |
| Revenue Streams | InvestorPitchDeck.tsx (inline) | `revenueStreams` |
| Timeline Captacion | InvestorPitchDeck.tsx (inline) | `timelineData` |
| Gastos Tutor | tutorMockData.ts | `yearlyExpenses`, `monthlyExpenseTrend` |
| KPIs Clinica | clinicMockData.ts | `financialKPIs`, `serviceKPIs`, `revenueData` |
| Performance Vet | vetMockData.ts | `performanceData`, `aiAccuracyHistory` |
| Research Datasets | researchMockData.ts | `datasets`, `datasetDistribution` |

## Resultado Final

Una carpeta `export/presentations/` completamente autonoma que:

1. Contiene las 4 presentaciones principales (InvestorPitchDeck, MobilePresentation, BusinessPartnersSlides, PlatformShowcase)
2. Incluye todas las 6 imagenes/assets necesarias
3. Tiene todos los datos mock para que los graficos funcionen
4. Incluye los componentes UI basicos (card, button, badge, etc.)
5. Tiene un README con instrucciones claras de instalacion
6. Tiene un package.json con las dependencias exactas

El usuario podra copiar esta carpeta a cualquier proyecto React/Vite nuevo y tener las presentaciones funcionando con minima configuracion.
