

# Plan: Showcase con 25 Secciones - Graficos de Alta Calidad y Cuadros Explicativos

## Objetivo

Reescribir completamente `src/pages/dossier/PlatformShowcase.tsx` para incluir:
- **25 secciones** en formato scroll continuo
- **Graficos nativos de Recharts** de alta calidad (no iframes)
- **Cuadros explicativos detallados** para cada pantalla
- **Previews inline** que replican exactamente los graficos de las paginas originales

## Problema con la Implementacion Actual

El archivo actual usa `IframePreview` que:
- Es lento y consume muchos recursos
- No siempre renderiza bien los graficos de Recharts
- No permite control sobre que se muestra
- No incluye cuadros explicativos detallados

## Solucion: Componentes de Preview Nativos con Cuadros Explicativos

Cada seccion tendra:
1. **Header de seccion** (Label + Titulo + Subtitulo)
2. **Preview nativo** con graficos Recharts reales
3. **ExplanationBox** con logica detallada
4. **FeatureGrid** con 4-6 funcionalidades explicadas

---

## Nueva Estructura de 25 Secciones

| # | Seccion | Graficos/Elementos | Cuadro Explicativo |
|---|---------|-------------------|-------------------|
| 1 | **Hero** | Diagrama de actores, CTAs | Vision del ecosistema |
| 2 | **El Problema** | MetricCards (85%, 0%, 30%) | Por que los datos estan fragmentados |
| 3 | **La Vision Federada** | Imagen red activa, CheckList | Como funciona la federacion |
| 4 | **Panel Tutor - Wallet** | PieChart gastos, AreaChart tendencia, Pet cards | La wallet como hub central |
| 5 | **Panel Tutor - Privacidad** | Cards conexiones, Tokens datos | Modelo ODRL de consentimiento |
| 6 | **Cockpit Veterinario** | Timeline historial, AI Copilot badge | El flujo de trabajo clinico |
| 7 | **Panel Veterinario Jornada** | AreaChart carga, AlertsPanel, Hospitalizados | Optimizacion del dia a dia |
| 8 | **Panel Director - Servicio** | 4 KpiCards, OccupancyHeatmap | Excelencia de servicio |
| 9 | **Panel Director - Finanzas** | LineChart revenue vs target | Control financiero |
| 10 | **Panel Director - Benchmarking** | BarChart comparativa red | Posicionamiento sectorial |
| 11 | **Marketplace Research** | Grid datasets, Stats panel | Economia de datos |
| 12 | **Panel Investigador** | PieChart distribucion, Progress FL | Federated Learning explicado |
| 13 | **Central Compras - Flujo** | Cards del proceso 3 pasos | Prediccion y agrupacion |
| 14 | **Central Compras - Demo** | Tabla pedidos, Ahorro card | ROI de compras federadas |
| 15 | **Pasaporte Digital (DPP)** | Interfaz pasaporte, Timeline blockchain | Trazabilidad inmutable |
| 16 | **Dashboard KPIs - Servicio** | 4 KpiCards servicio, Alert AI | Metricas de satisfaccion |
| 17 | **Dashboard KPIs - Medico** | 4 KpiCards medicos | Excelencia clinica |
| 18 | **Portal Aseguradoras** | Split screen auditoria | Smart Claims automation |
| 19 | **Epidemiologia One Health** | Alertas por severidad, Mapa | Vigilancia sanitaria |
| 20 | **Tecnologia FHIR** | Grid 6 cards tecnologicas | Interoperabilidad |
| 21 | **Arquitectura Gaia-X** | Diagrama componentes | Soberania de datos |
| 22 | **Kit Espacio de Datos** | MetricCards subvencion | Financiacion Red.es |
| 23 | **Perfiles Partners** | Grid 8 cards partners | Propuesta de valor |
| 24 | **Metricas ROI** | 4 MetricCards impacto | Retorno de inversion |
| 25 | **CTA Final** | Formulario contacto | Llamada a la accion |

---

## Componentes de Preview a Crear

### TutorWalletPreview

Replica exacta del panel del tutor con:

```text
+------------------------------------------+
|  Header: Avatar + Nombre + Puntos        |
+------------------------------------------+
|  Pet Selector: [Luna] [Michi] [Coco]     |
+------------------------------------------+
|  +------------------+------------------+ |
|  | PieChart         | AreaChart        | |
|  | Gastos Anuales   | Tendencia Mensual| |
|  | (5 categorias)   |                  | |
|  +------------------+------------------+ |
+------------------------------------------+
|  Ahorro Federado Card: 127.50 EUR        |
+------------------------------------------+
```

Datos: `yearlyExpenses`, `monthlyExpenseTrend` de `tutorMockData.ts`

### TutorPrivacyPreview

```text
+------------------------------------------+
|  Privacidad de Datos                     |
+------------------------------------------+
|  [Clinica Central] [full] [activo]       |
|  [Hospital 24h]    [limited] [activo]    |
|  [VetLab]          [readonly] [pending]  |
+------------------------------------------+
|  Tokens de Datos: 90 tokens              |
+------------------------------------------+
|  [Encuesta NPS +15] [Reporte +25]        |
+------------------------------------------+
```

### VetCockpitPreview

```text
+------------------------------------------+
|  Header: Dr. Carlos Fernandez            |
+------------------------------------------+
|  Stats: 8/12 consultas | 15min prox      |
+------------------------------------------+
|  AlertsPanel AI Sugerencias              |
|  - Bella: Test alergia (87%)             |
|  - Whiskers: Ajustar fluidoterapia       |
+------------------------------------------+
|  AI Precision: 89.3% historico           |
+------------------------------------------+
```

### VetWorkloadPreview

```text
+------------------------------------------+
|  Carga de Trabajo (30 dias)              |
+------------------------------------------+
|  AreaChart con performanceData           |
+------------------------------------------+
|  Hospitalizados a mi Cargo               |
+------------------------------------------+
|  [Bruno - Estable] [Whiskers - Critico]  |
|  [Toby - Recuperando] [Mia - Estable]    |
+------------------------------------------+
```

### ClinicServicePreview

```text
+------------------------------------------+
|  Tabs: [Servicio] Finanzas Ops Benchmark |
+------------------------------------------+
|  Alert AI Predictivo                     |
+------------------------------------------+
|  +--------+--------+--------+--------+   |
|  | NPS 78 | Espera | Ocup.  | Reclam |   |
|  | +4.2   | 12min  | 92%    | 1      |   |
|  +--------+--------+--------+--------+   |
+------------------------------------------+
|  OccupancyHeatmap (6x10 grid colores)    |
+------------------------------------------+
```

Datos: `serviceKPIs`, `occupancyHeatmap` de `clinicMockData.ts`

### ClinicFinancePreview

```text
+------------------------------------------+
|  Revenue vs Objetivo (6 meses)           |
+------------------------------------------+
|  LineChart con 2 lineas:                 |
|  - Revenue (solida)                      |
|  - Target (punteada)                     |
+------------------------------------------+
|  +--------+--------+--------+--------+   |
|  | 48.5K  | 23.5%  | 42 EUR | 9.7K   |   |
|  | MTD    | Margen | /Cons  | /Vet   |   |
|  +--------+--------+--------+--------+   |
+------------------------------------------+
```

### ClinicBenchmarkPreview

```text
+------------------------------------------+
|  Comparativa con Red Federada            |
+------------------------------------------+
|  BarChart horizontal:                    |
|  NPS: Tu Clinica vs Media Red            |
|  Tiempo Espera: ...                      |
|  Exito Quirurgico: ...                   |
+------------------------------------------+
|  Percentiles: P75 | P68 | P82 | P71      |
+------------------------------------------+
```

### ResearchMarketplacePreview

```text
+------------------------------------------+
|  Stats: 8 Datasets | 3450 EUR | 12 Acq   |
+------------------------------------------+
|  Grid Datasets:                          |
|  [Displasia Cadera - 890 EUR]            |
|  [Cardiomiopatia - 650 EUR]              |
|  [Dermatitis - 1200 EUR]                 |
+------------------------------------------+
```

### ResearchFLPreview

```text
+------------------------------------------+
|  Modelos Federated Learning              |
+------------------------------------------+
|  Hip Dysplasia v3: 78% [=====>  ] 91.2%  |
|  Feline Cardio: 100% [DEPLOYED] 94.8%    |
|  Skin Lesion: 45% [==>     ] 82.5%       |
+------------------------------------------+
|  PieChart Distribucion Datasets          |
+------------------------------------------+
```

### SupplyFlowPreview

```text
+------------------------------------------+
|  Del Dato Clinico al Pedido Automatico   |
+------------------------------------------+
|  [Lectura Agenda] -> [Calculo AI] ->     |
|  [Envio Just-in-Time]                    |
+------------------------------------------+
|  Nodo Federado #402: CONECTADO           |
|  Volumen Red: 2.4M EUR | Ahorro: 22.5%   |
+------------------------------------------+
```

### SupplyDemoPreview

```text
+------------------------------------------+
|  Propuesta Pedido Automatico - Sem 42    |
+------------------------------------------+
|  | Producto           | Cant | Precio   ||
|  | Vacuna Nobivac     | 15   | 19 EUR   ||
|  | Antiparasitario    | 10   | 28 EUR   ||
+------------------------------------------+
|  Ahorro Detectado: 160 EUR               |
+------------------------------------------+
```

### ProductPassportPreview

```text
+------------------------------------------+
|  [Verificado] Microchip ISO 11784        |
|  Ref: MC-134-ISO | Lote: #993821-X       |
+------------------------------------------+
|  Fabricante: VetChip GmbH                |
|  Material: Biopolimero ISO               |
|  Caducidad: Oct 2029                     |
+------------------------------------------+
|  [Certificado MDR] [IFU PDF] [Alerta]    |
+------------------------------------------+
|  Blockchain: Bloque #882910 Verificado   |
+------------------------------------------+
```

### KpiServicePreview

```text
+------------------------------------------+
|  [Servicio] Medico                       |
+------------------------------------------+
|  Alert AI: Saturacion +20% martes tarde  |
+------------------------------------------+
|  +--------+--------+--------+--------+   |
|  | NPS 78 | 12min  | 92%    | 1/mes  |   |
|  +--------+--------+--------+--------+   |
+------------------------------------------+
```

### KpiMedicalPreview

```text
+------------------------------------------+
|  Servicio [Medico]                       |
+------------------------------------------+
|  Alert AI: Patron vacunacion detectado   |
+------------------------------------------+
|  +--------+--------+--------+--------+   |
|  | 98.5%  | 94.2%  | 2.1%   | 4.7/5  |   |
|  | Exito  | Diagn  | Reint  | Satis  |   |
|  +--------+--------+--------+--------+   |
+------------------------------------------+
```

### InsurancePreview

```text
+------------------------------------------+
|  Auditoria en Vivo                       |
+------------------------------------------+
|  +------------------+------------------+ |
|  | FACTURA          | EVIDENCIA        | |
|  | Castracion 280E  | Radiografia OK   | |
|  | Pendiente        | Hash: 0xA3F2...  | |
|  +------------------+------------------+ |
+------------------------------------------+
|  [CHECK VERDE] Contrato en 0.5s          |
+------------------------------------------+
|  Alerta Fraude: Desviacion 40%           |
+------------------------------------------+
```

### EpidemiologyPreview

```text
+------------------------------------------+
|  Alertas One Health                      |
+------------------------------------------+
|  [Leishmaniasis - Madrid] RISING HIGH    |
|  [Leptospirosis - Galicia] STABLE MED    |
|  [Parvovirus - Andalucia] DECLINING MED  |
+------------------------------------------+
|  Mapa Regional (6 puntos)                |
+------------------------------------------+
```

---

## Nuevo Componente: ExplanationBox

Cuadro explicativo que acompana a cada preview:

```tsx
interface ExplanationBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  highlight?: string;
}

const ExplanationBox = ({ icon, title, description, bullets, highlight }: ExplanationBoxProps) => (
  <div className="bg-muted/50 border rounded-xl p-6 mt-8">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-primary/10 rounded-xl text-primary">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {highlight && (
          <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm font-medium text-primary">{highlight}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);
```

---

## Contenido de Cuadros Explicativos

### Seccion 4: Panel Tutor - Wallet

**Titulo:** La Wallet de Salud como Hub Central

**Descripcion:** El tutor accede a toda la informacion de salud de sus mascotas desde una unica interfaz. La wallet actua como un "pasaporte de salud" que viaja con la mascota independientemente de la clinica.

**Bullets:**
- Historial completo de vacunas, analiticas y tratamientos en tiempo real
- Control total sobre quien accede a los datos de su mascota
- Sistema de recompensas por compartir datos anonimizados para investigacion
- Alertas proactivas de vacunas y revisiones pendientes

**Highlight:** "El tutor es el verdadero propietario de los datos, no la clinica"

### Seccion 5: Panel Tutor - Privacidad

**Titulo:** Modelo ODRL de Consentimiento Granular

**Descripcion:** El sistema implementa el estandar ODRL (Open Digital Rights Language) de la W3C para gestionar permisos de acceso a datos con precision quirurgica.

**Bullets:**
- Tres niveles de acceso: completo, limitado, solo lectura
- Revocacion instantanea de permisos con un click
- Tokens de datos como compensacion por compartir informacion
- Trazabilidad completa de quien accedio a que y cuando

**Highlight:** "Cada dato compartido genera valor economico para el tutor"

### Seccion 6-7: Cockpit Veterinario

**Titulo:** El Flujo de Trabajo Clinico Optimizado

**Descripcion:** El veterinario accede al historial federado del paciente con sugerencias de diagnostico basadas en millones de casos similares. El copiloto AI reduce el tiempo de decision clinica.

**Bullets:**
- Acceso a registros de otras clinicas autorizadas por el tutor
- Sugerencias diagnosticas con nivel de confianza (ej: 87% displasia)
- Visualizacion temporal de la evolucion del paciente
- Integracion directa con resultados de laboratorio

**Highlight:** "El AI Copilot ha demostrado un 89.3% de precision historica"

### Seccion 8-10: Panel Director de Clinica

**Titulo:** Centro de Mando para la Excelencia Operativa

**Descripcion:** El director tiene vision 360 grados de su clinica: satisfaccion, finanzas, operaciones y posicionamiento frente a la red federada.

**Bullets:**
- NPS en tiempo real alimentado por la App del Tutor
- Heatmap de ocupacion para optimizar agendas
- Benchmarking anonimo con otras clinicas de la red
- Alertas predictivas de saturacion y stock critico

**Highlight:** "Las clinicas de la red ahorran una media de 22.5% en compras federadas"

### Seccion 11-12: Marketplace Research

**Titulo:** La Economia de Datos en Accion

**Descripcion:** Los investigadores acceden a datasets anonimizados y entrenan modelos de IA sin que los datos salgan de su origen (Federated Learning).

**Bullets:**
- Datasets categorizados por especialidad veterinaria
- Modelo de revenue sharing con clinicas contribuyentes
- Entrenamiento distribuido que preserva la privacidad
- Publicaciones cientificas vinculadas a datasets utilizados

**Highlight:** "El modelo de Displasia Canina v3 entrena con 23 nodos sin mover datos"

### Seccion 13-14: Central de Compras

**Titulo:** Compras Predictivas Federadas

**Descripcion:** El sistema lee la agenda clinica, predice necesidades de material y agrupa pedidos con cientos de clinicas para conseguir precios de mayorista.

**Bullets:**
- Lectura automatica de la agenda clinica
- Prediccion de consumo basada en historial y citas futuras
- Agrupacion federada con 500+ clinicas
- Envio just-in-time antes de que empiece la semana

**Highlight:** "Ahorro medio detectado: 22.5% en vacunas y biologicos"

### Seccion 15: Pasaporte Digital de Producto

**Titulo:** Trazabilidad Inmutable desde Fabrica

**Descripcion:** Cada producto veterinario (vacuna, microchip, medicamento) tiene un identificador unico vinculado a su "gemelo digital" en blockchain.

**Bullets:**
- Verificacion de autenticidad antes de abrir el envase
- Documentacion legal y certificados MDR accesibles
- Alertas de recalls automaticas por lote
- Hash blockchain que garantiza inmutabilidad

**Highlight:** "El pasaporte digital cumple con la normativa MDR 2017/745 de la UE"

### Seccion 16-17: Dashboard KPIs

**Titulo:** Inteligencia Operativa Predictiva

**Descripcion:** El sistema de KPIs combina tres fuentes de datos: voz del tutor (NPS), flujo operativo (sensores) y resultados clinicos (notas medicas).

**Bullets:**
- Alertas predictivas basadas en patrones historicos
- Vista dual: Excelencia de Servicio vs Excelencia Medica
- Deteccion temprana de cuellos de botella
- Sugerencias automaticas de mejora

**Highlight:** "Se preve un aumento del 20% en tiempos de espera los martes por la tarde"

### Seccion 18: Portal Aseguradoras

**Titulo:** Smart Claims Automation

**Descripcion:** Las reclamaciones de seguros se validan automaticamente contra evidencia blockchain, eliminando el fraude y acelerando los pagos.

**Bullets:**
- Validacion automatica contra documentacion clinica
- Deteccion de anomalias estadisticas por clinica
- Contratos inteligentes ejecutados en 0.5 segundos
- Auditoria profunda con un click

**Highlight:** "Desviacion del 40% detectada en clinica X - iniciar auditoria"

### Seccion 19: Epidemiologia One Health

**Titulo:** Vigilancia Sanitaria en Tiempo Real

**Descripcion:** El sistema detecta patrones epidemiologicos agregando datos anonimizados de toda la red. Enfoque One Health que conecta salud animal y humana.

**Bullets:**
- Alertas por region y nivel de severidad
- Tendencias: rising, stable, declining
- Incidencia por 10.000 animales
- Correlacion con datos de salud publica

**Highlight:** "Leishmaniasis en Madrid: incidencia 12.5/10k y subiendo"

### Seccion 20-21: Tecnologia y Arquitectura

**Titulo:** Fundamentos Gaia-X / IDS

**Descripcion:** La arquitectura sigue los principios europeos de espacios de datos: soberania, interoperabilidad, confianza y portabilidad.

**Bullets:**
- FHIR R4 para interoperabilidad clinica
- ODRL para gestion de derechos de datos
- Identity Wallets (SSI) para tutores y mascotas
- Row Level Security (RLS) para aislamiento de datos

**Highlight:** "Arquitectura alineada con los espacios de datos europeos"

### Seccion 22: Kit Espacio de Datos

**Titulo:** Financiacion Red.es hasta 30.000 EUR

**Descripcion:** El programa Kit Espacio de Datos financia hasta el 100% de la integracion en la red federada para clinicas veterinarias elegibles.

**Bullets:**
- Subvencion de 15.000 a 30.000 EUR segun numero de empleados
- Financiacion europea a traves de Red.es
- Sin coste inicial para la clinica
- Implementacion en 3 meses

**Highlight:** "Clinicas de 10-49 empleados: hasta 20.000 EUR de subvencion"

### Seccion 23: Perfiles de Business Partners

**Titulo:** 8 Tipos de Socios del Ecosistema

**Descripcion:** El espacio de datos veterinario integra a todos los actores de la cadena de valor, cada uno con su propuesta de valor diferenciada.

**Partners:**
- Clinicas Veterinarias: Eficiencia operativa y nuevos ingresos
- Laboratorios: Integracion automatica de resultados
- Farmaceuticas: Trazabilidad y farmacovigilancia
- Aseguradoras: Smart Claims y prevencion de fraude
- Centros de Investigacion: Acceso a datos federados
- Fabricantes IoT: Integracion de dispositivos
- Centrales de Compra: Negociacion federada
- Inversores: Oportunidad de impacto social

### Seccion 24: Metricas de Impacto

**Titulo:** ROI Cuantificable del Espacio de Datos

**Metricas:**
- 22.5% ahorro medio en compras federadas
- 30% reduccion de pruebas duplicadas
- 15% mejora en outcomes clinicos
- 40% deteccion de anomalias de fraude

---

## Archivo a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/pages/dossier/PlatformShowcase.tsx` | Reescritura completa de ~938 a ~2800 lineas |

## Imports Necesarios

```typescript
// Recharts
import {
  PieChart, Pie, Cell,
  LineChart, Line, AreaChart, Area,
  BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from "recharts";

// Datos mock
import {
  tutorProfile, pets, yearlyExpenses, monthlyExpenseTrend,
  privacyConnections, dataTokens, loyaltyBenefits, federatedSavings
} from "@/data/demoKpis/tutorMockData";

import {
  clinicProfile, financialKPIs, serviceKPIs, operationalKPIs,
  occupancyHeatmap, benchmarks, revenueData, federatedSavings as clinicSavings,
  supplyAlerts, aiPredictions
} from "@/data/demoKpis/clinicMockData";

import {
  vetProfile, todayStats, performanceData, performanceMetrics,
  aiSuggestions, hospitalizedPatients, aiAccuracyHistory, todayAppointments
} from "@/data/demoKpis/vetMockData";

import {
  researcherProfile, marketplaceStats, datasets, federatedModels,
  epidemiologicalAlerts, datasetDistribution, ecosystemContribution
} from "@/data/demoKpis/researchMockData";

// Iconos adicionales
import {
  Wallet, Brain, Globe, FileCheck, Microscope, Heart,
  AlertTriangle, Zap, Target, Award, Percent, Clock,
  Shield, Coins, Gift, Eye, EyeOff, Pill, Factory,
  QrCode, History, Download, ScrollText, BrainCircuit,
  PackageCheck, CalendarClock, Truck, Video, Smartphone
} from "lucide-react";
```

---

## Estimacion de Lineas

| Componente | Lineas |
|------------|--------|
| Imports y tipos | ~80 |
| Componentes base (Section, MetricCard, etc) | ~150 |
| ExplanationBox | ~50 |
| TutorWalletPreview | ~150 |
| TutorPrivacyPreview | ~100 |
| VetCockpitPreview | ~120 |
| VetWorkloadPreview | ~130 |
| ClinicServicePreview | ~180 |
| ClinicFinancePreview | ~120 |
| ClinicBenchmarkPreview | ~100 |
| ResearchMarketplacePreview | ~120 |
| ResearchFLPreview | ~130 |
| SupplyFlowPreview | ~100 |
| SupplyDemoPreview | ~120 |
| ProductPassportPreview | ~150 |
| KpiServicePreview | ~100 |
| KpiMedicalPreview | ~100 |
| InsurancePreview | ~150 |
| EpidemiologyPreview | ~100 |
| 25 secciones con ExplanationBox | ~600 |
| Navigation y Footer | ~50 |
| **Total** | ~2800 lineas |

---

## Resultado Final

Una pagina `/showcase` que:
- Muestra **25 secciones** en formato scroll continuo
- Renderiza **graficos nativos de Recharts** de alta calidad
- Incluye **cuadros explicativos detallados** para entender la logica de cada pantalla
- Usa los **mismos datos mock** que las paginas originales
- Sirve como **herramienta comercial completa** para presentaciones
- Permite al lector entender el valor de cada funcionalidad sin necesidad de navegar a las paginas reales

