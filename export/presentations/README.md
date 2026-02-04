# Presentaciones Exportables - Global Data Care - Veterinario

Esta carpeta contiene todas las presentaciones completas del proyecto, listas para copiar a un nuevo proyecto React/Vite.

## Contenido

### Páginas de Presentación

| Archivo | Descripción | Slides |
|---------|-------------|--------|
| `pages/InvestorPitchDeck.tsx` | Pitch deck para inversores | 10 slides |
| `pages/MobilePresentation.tsx` | Presentación vertical móvil | 15 slides |
| `pages/BusinessPartnersSlides.tsx` | Dossier para business partners | 9 slides |
| `pages/PlatformShowcase.tsx` | Dossier completo de plataforma | 25 secciones |

### Assets

| Archivo | Uso |
|---------|-----|
| `assets/servidores-aislados.png` | Slide "El Problema" - silos de datos |
| `assets/red-federada-activa.png` | Slide "La Solución" - arquitectura federada |
| `assets/logo-gobierno-red-es.png` | Logos institucionales Red.es |
| `assets/logo-kit-espacio-datos.jpg` | Logo Kit Espacio de Datos |
| `assets/logos-kit-digital.jpg` | Logos Kit Digital |
| `assets/codigo_de_barras.jpg` | Código de barras para DPP |

### Datos Mock

| Archivo | Contenido |
|---------|-----------|
| `data/partnerProfiles.ts` | 8 perfiles de business partners |
| `data/valuePropositions.ts` | Propuestas de valor por partner |
| `data/clinicMockData.ts` | KPIs y datos de clínica |
| `data/tutorMockData.ts` | Datos del tutor/wallet |
| `data/vetMockData.ts` | Datos del veterinario |
| `data/researchMockData.ts` | Datos de investigación |

### Componentes UI

| Archivo | Contenido |
|---------|-----------|
| `components/ui/card.tsx` | Card, CardContent, CardHeader, etc. |
| `components/ui/button.tsx` | Button con variantes |
| `components/ui/badge.tsx` | Badge con variantes |
| `components/ui/progress.tsx` | Progress bar |
| `components/ui/carousel.tsx` | Carrusel Embla |

### Utilidades

| Archivo | Contenido |
|---------|-----------|
| `lib/utils.ts` | Función cn() para clases |
| `lib/format.ts` | Funciones de formateo |

## Instalación

### 1. Copiar la carpeta

```bash
cp -r export/presentations /ruta/a/tu/nuevo/proyecto/src/presentations
```

### 2. Instalar dependencias

```bash
npm install framer-motion recharts lucide-react embla-carousel-react react-router-dom class-variance-authority clsx tailwind-merge @radix-ui/react-slot @radix-ui/react-progress
```

O con el package.json incluido:

```bash
cd export/presentations
npm install
```

### 3. Configurar Tailwind

Asegúrate de tener configurado Tailwind CSS con las variables CSS necesarias en tu `index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --primary: 142.1 76.2% 36.3%;
  --primary-foreground: 355.7 100% 97.3%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --destructive: 0 84.2% 60.2%;
  --border: 214.3 31.8% 91.4%;
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
}
```

### 4. Configurar rutas en App.tsx

```tsx
import InvestorPitchDeck from './presentations/pages/InvestorPitchDeck';
import MobilePresentation from './presentations/pages/MobilePresentation';
import BusinessPartnersSlides from './presentations/pages/BusinessPartnersSlides';
import PlatformShowcase from './presentations/pages/PlatformShowcase';

// En tus rutas:
<Route path="/investor-deck" element={<InvestorPitchDeck />} />
<Route path="/mobile" element={<MobilePresentation />} />
<Route path="/dossier/slides" element={<BusinessPartnersSlides />} />
<Route path="/showcase" element={<PlatformShowcase />} />
```

### 5. Ajustar imports

Si cambias la ubicación de los archivos, actualiza los imports en las páginas:

```tsx
// Cambia esto:
import { Button } from "@/components/ui/button";
// Por esto:
import { Button } from "../components/ui/button";
```

## Gráficos Incluidos

### InvestorPitchDeck
- **PieChart**: Uso de fondos (4 segmentos)
- **BarChart**: Revenue streams proyección (5 barras)
- **LineChart**: Timeline captación clínicas (dual Y-axis)

### PlatformShowcase
- **PieChart**: Gastos tutor, distribución datasets
- **AreaChart**: Tendencia gastos, métricas clínica
- **BarChart**: KPIs, benchmarks, supply chain
- **LineChart**: Epidemiología, rendimiento

### BusinessPartnersSlides
- Cards y badges estáticos (sin gráficos Recharts)

### MobilePresentation
- Formato vertical simplificado (sin gráficos Recharts)

## Dependencias Requeridas

```json
{
  "framer-motion": "^12.x",
  "recharts": "^2.x",
  "lucide-react": "^0.462.x",
  "embla-carousel-react": "^8.x",
  "react-router-dom": "^6.x",
  "class-variance-authority": "^0.7.x",
  "clsx": "^2.x",
  "tailwind-merge": "^2.x",
  "@radix-ui/react-slot": "^1.x",
  "@radix-ui/react-progress": "^1.x"
}
```

## Licencia

© 2025 Global Data Care - Veterinario - Documentos confidenciales
