

# Plan: Crear 3 Páginas de Detalle para las Fuentes de Datos 360°

## Contexto

Las 3 tarjetas seleccionadas en `KpiDashboardPage.tsx` representan las fuentes de datos que alimentan la visión 360° del sistema:

1. **Voz del Tutor** (azul) - NPS, reportes de evolución, encuestas de satisfacción
2. **Flujo Operativo** (índigo) - Tiempos de espera, duración de consultas, uso de gabinetes
3. **Resultado Clínico** (esmeralda) - Éxito quirúrgico, complicaciones, re-intervenciones

Cada página tendrá un enfoque profundo con KPIs, gráficos interactivos y datos sintéticos específicos.

---

## Arquitectura de las Páginas

```text
src/
├── pages/
│   └── kpi/
│       ├── TutorVoicePage.tsx        # Voz del Tutor
│       ├── OperationalFlowPage.tsx   # Flujo Operativo
│       └── ClinicalOutcomesPage.tsx  # Resultado Clínico
│
└── data/
    └── kpiSources/
        ├── tutorVoiceMockData.ts      # Datos NPS, encuestas, evolución
        ├── operationalFlowMockData.ts # Tiempos, ocupación, eficiencia
        └── clinicalOutcomesMockData.ts# Cirugías, complicaciones, readmisiones
```

---

## Página 1: Voz del Tutor (`/kpi/tutor-voice`)

### Diseño Visual
- **Header**: Gradiente azul a cian (coincide con icono actual)
- **Hero Stat**: NPS Global con gauge animado

### Secciones

| Sección | Contenido |
|---------|-----------|
| NPS en Tiempo Real | Gauge de NPS (0-100), tendencia 6 meses, distribución promotores/detractores/neutros |
| Reportes de Evolución | Lista de últimos reportes enviados por tutores desde la Wallet, con estado y seguimiento |
| Encuestas de Satisfacción | Resultados agregados por categoría (atención, limpieza, precio, tiempo espera) |
| Feedback Textual | Nube de palabras o lista de comentarios destacados (positivos/negativos) |
| Análisis AI | Insights generados automáticamente: tendencias, alertas, recomendaciones |

### KPIs Principales
- NPS Global: 72
- Respuestas este mes: 156
- Reportes de evolución: 34
- Tasa de respuesta: 68%
- Satisfacción media: 4.3/5

---

## Página 2: Flujo Operativo (`/kpi/operational-flow`)

### Diseño Visual
- **Header**: Gradiente índigo a púrpura (coincide con icono actual)
- **Hero Stat**: Tiempo de espera medio actual

### Secciones

| Sección | Contenido |
|---------|-----------|
| Tiempos de Espera | Tiempo actual vs objetivo, histórico 7 días, por franja horaria |
| Duración de Consultas | Comparativa planificado vs real, por tipo de consulta, por veterinario |
| Ocupación de Gabinetes | Heatmap semanal (reutilizar OccupancyHeatmap), alertas de saturación |
| Bottlenecks Detectados | Lista de cuellos de botella identificados por AI con sugerencias |
| Predicción de Carga | Forecast para próximas 24h basado en histórico |

### KPIs Principales
- Tiempo espera medio: 12 min
- Desviación consulta: +8%
- Ocupación gabinetes: 78%
- Consultas/día: 42
- Eficiencia programación: 91%

---

## Página 3: Resultado Clínico (`/kpi/clinical-outcomes`)

### Diseño Visual
- **Header**: Gradiente esmeralda a teal (coincide con icono actual)
- **Hero Stat**: Tasa de éxito quirúrgico

### Secciones

| Sección | Contenido |
|---------|-----------|
| Éxito Quirúrgico | Tasa global, desglose por tipo de cirugía, tendencia 12 meses |
| Complicaciones | Clasificación por severidad, tipos más frecuentes, comparativa con benchmark |
| Re-intervenciones | Tasa de re-intervención 30 días, causas principales, seguimiento de casos |
| Calidad Diagnóstica | Tasa de diagnósticos confirmados vs modificados, precisión por patología |
| Mortalidad Hospitalaria | Tasa global, casos críticos, análisis de causas |

### KPIs Principales
- Éxito quirúrgico: 96.2%
- Complicaciones menores: 3.1%
- Complicaciones mayores: 0.7%
- Re-intervenciones 30d: 1.8%
- Mortalidad hospitalaria: 0.3%

---

## Resumen de Archivos

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/pages/kpi/TutorVoicePage.tsx` | CREAR | Página completa de Voz del Tutor |
| `src/pages/kpi/OperationalFlowPage.tsx` | CREAR | Página completa de Flujo Operativo |
| `src/pages/kpi/ClinicalOutcomesPage.tsx` | CREAR | Página completa de Resultado Clínico |
| `src/data/kpiSources/tutorVoiceMockData.ts` | CREAR | Datos NPS, encuestas, reportes |
| `src/data/kpiSources/operationalFlowMockData.ts` | CREAR | Datos tiempos, ocupación, eficiencia |
| `src/data/kpiSources/clinicalOutcomesMockData.ts` | CREAR | Datos cirugías, complicaciones |
| `src/pages/KpiDashboardPage.tsx` | MODIFICAR | Enlazar tarjetas a las nuevas páginas |
| `src/App.tsx` | MODIFICAR | Registrar las 3 nuevas rutas |

---

## Rutas a Registrar

```text
/kpi/tutor-voice       → TutorVoicePage
/kpi/operational-flow  → OperationalFlowPage
/kpi/clinical-outcomes → ClinicalOutcomesPage
```

---

## Modificación de Tarjetas Existentes

Las 3 tarjetas en `KpiDashboardPage.tsx` (líneas 176-207) se convertirán en componentes `Link` clickeables que navegarán a sus respectivas páginas de detalle.

**Antes:**
```tsx
<div className="bg-white p-8 rounded-2xl ...">
```

**Después:**
```tsx
<Link to="/kpi/tutor-voice" className="bg-white p-8 rounded-2xl ... cursor-pointer">
```

---

## Componentes Reutilizados

| Componente | Uso |
|------------|-----|
| `KpiCard` | Tarjetas de métricas principales |
| `TrendChart` | Gráficos de evolución temporal |
| `OccupancyHeatmap` | Mapas de calor de ocupación |
| `AlertsPanel` | Alertas y recomendaciones AI |
| `NavigationControls` | Navegación estándar del proyecto |
| `GlobalFooter` | Footer consistente |

---

## Estimación de Implementación

| Componente | Líneas Estimadas |
|------------|------------------|
| TutorVoicePage.tsx | ~350 |
| OperationalFlowPage.tsx | ~400 |
| ClinicalOutcomesPage.tsx | ~350 |
| tutorVoiceMockData.ts | ~120 |
| operationalFlowMockData.ts | ~150 |
| clinicalOutcomesMockData.ts | ~130 |
| Modificaciones App.tsx | ~10 |
| Modificaciones KpiDashboardPage.tsx | ~30 |
| **Total** | ~1,540 líneas |

