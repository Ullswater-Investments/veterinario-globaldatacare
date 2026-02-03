

# Plan: Sistema de Paneles KPI por Tipologia de Usuario

## Resumen Ejecutivo

Crear un ecosistema de 4 paneles de control diferenciados, cada uno optimizado para las necesidades especificas de su perfil de usuario. Cada panel mostrara metricas relevantes, acciones contextuales y visualizaciones adaptadas al rol.

---

## Las 4 Tipologias de Panel

### 1. Panel Tutor de Mascotas (Patient/Owner)
**Enfoque: Bienestar animal + Control de datos + Economia familiar**

| Categoria | KPIs y Funcionalidades |
|-----------|------------------------|
| Salud de Mascotas | Calendario vacunacion proxima, Peso actual vs peso ideal, Alertas de citas pendientes |
| Economia | Gasto veterinario anual, Comparativa de precios entre clinicas, Beneficios por fidelidad |
| Privacidad | Conexiones activas (quien accede a datos), Historial de consentimientos, Tokens de datos monetizados |
| Bienestar | Score de bienestar por mascota (ejercicio, dieta), Recordatorios de antiparasitarios |

**Visualizaciones:**
- Timeline de vida de cada mascota
- Grafico circular de gasto por categoria (vacunas, consultas, urgencias)
- Semaforo de proximas acciones

---

### 2. Panel Medico Veterinario (Doctor)
**Enfoque: Eficiencia clinica + Calidad diagnostica + Carga de trabajo**

| Categoria | KPIs y Funcionalidades |
|-----------|------------------------|
| Productividad | Consultas/dia, Tiempo medio por consulta, Tasa de reprogramacion |
| Calidad Clinica | Diagnosticos confirmados vs modificados, Exito quirurgico, Readmisiones 30d |
| Hospitalizacion | Pacientes ingresados (criticos/estables), Proximas medicaciones |
| AI Copiloto | Sugerencias diagnosticas pendientes, Precision del asistente AI, Segundas opiniones generadas |

**Visualizaciones:**
- Heatmap de ocupacion semanal personal
- LineChart de carga de trabajo (ultimos 30 dias)
- Lista de alertas clinicas priorizadas

---

### 3. Panel Director de Clinica (Manager/CEO)
**Enfoque: Rentabilidad + Operaciones + Benchmarking**

| Categoria | KPIs y Funcionalidades |
|-----------|------------------------|
| Financiero | Facturacion mensual, Margen operativo, Coste por consulta, Revenue por veterinario |
| Servicio | NPS global, Tiempo de espera medio, Reclamaciones/mes, Tasa de ocupacion |
| Operaciones | Hospitalizados activos, Stock critico (alertas IoT), Eficiencia de quirofanos |
| Benchmarking | Posicion en red federada (percentil), Comparativa anonima vs competencia |
| Supply Chain | Ahorro federado acumulado, Pedidos automaticos pendientes |

**Visualizaciones:**
- Dashboard financiero con graficos de tendencia
- Heatmap de ocupacion por gabinete/hora
- Panel de alertas predictivas AI
- Comparativas con benchmark de la red

---

### 4. Panel Cientifico de Datos (Researcher)
**Enfoque: Datasets + Algoritmos + Impacto cientifico**

| Categoria | KPIs y Funcionalidades |
|-----------|------------------------|
| Marketplace | Datasets disponibles, Algoritmos licenciados, Ingresos por datos anonimizados |
| Federated Learning | Modelos en entrenamiento, Nodos participantes, Precision de algoritmos |
| Epidemiologia | Mapa de incidencias One Health, Alertas zoonosis, Clusters geograficos |
| Impacto | Papers publicados con datos de la red, Citas academicas, Contribuciones al ecosistema |

**Visualizaciones:**
- Mapa geografico de nodos de investigacion
- Progress bars de modelos en entrenamiento
- Graficos de distribucion de datasets por categoria
- Timeline de hitos cientificos

---

## Arquitectura Tecnica Propuesta

### Nuevos Archivos a Crear

```text
src/
├── pages/
│   └── demo/
│       ├── TutorDemoPanel.tsx        # Panel Tutor de Mascotas
│       ├── VetDemoPanel.tsx          # Panel Medico Veterinario
│       ├── ClinicDemoPanel.tsx       # Panel Director Clinica
│       └── ResearchDemoPanel.tsx     # Panel Cientifico de Datos
│
├── data/
│   └── demoKpis/
│       ├── tutorMockData.ts          # Datos sinteticos tutor
│       ├── vetMockData.ts            # Datos sinteticos veterinario
│       ├── clinicMockData.ts         # Datos sinteticos director
│       └── researchMockData.ts       # Datos sinteticos investigador
│
└── components/
    └── demo/
        ├── KpiCard.tsx               # Tarjeta de KPI reutilizable
        ├── OccupancyHeatmap.tsx      # Heatmap de ocupacion
        ├── TrendChart.tsx            # Grafico de tendencias (recharts)
        └── AlertsPanel.tsx           # Panel de alertas AI
```

### Rutas a Registrar en App.tsx

```typescript
// Demo Panels por Tipologia
<Route path="/demo/tutor" element={<TutorDemoPanel />} />
<Route path="/demo/vet" element={<VetDemoPanel />} />
<Route path="/demo/clinic" element={<ClinicDemoPanel />} />
<Route path="/demo/research" element={<ResearchDemoPanel />} />
```

### Pagina de Seleccion de Perfil

Crear una landing `/demo` que permita elegir el tipo de panel:

```text
+------------------------------------------------------------------+
|                                                                  |
|           Selecciona tu Perfil para ver la Demo                  |
|                                                                  |
|  +---------------+  +---------------+  +---------------+         |
|  |    Tutor      |  |  Veterinario  |  |   Director    |         |
|  |  de Mascotas  |  |    Clinico    |  |   Clinica     |         |
|  |    [icon]     |  |    [icon]     |  |    [icon]     |         |
|  +---------------+  +---------------+  +---------------+         |
|                                                                  |
|                     +---------------+                            |
|                     |  Cientifico   |                            |
|                     |   de Datos    |                            |
|                     |    [icon]     |                            |
|                     +---------------+                            |
|                                                                  |
+------------------------------------------------------------------+
```

---

## Detalle por Panel

### Panel Tutor - Componentes Principales

1. **Header Personal**
   - Avatar del tutor
   - Numero de mascotas registradas
   - Selector de mascota activa

2. **Seccion "Mis Mascotas"**
   - Cards con foto, nombre, especie, peso
   - Proxima cita/vacuna con countdown
   - Score de bienestar (1-10)

3. **Seccion "Mi Economia"**
   - Gasto acumulado este ano (PieChart por categoria)
   - Ahorro por compras federadas
   - Beneficios de fidelidad disponibles

4. **Seccion "Privacidad"**
   - Lista de clinicas con acceso (semaforo verde/amarillo)
   - Historial de consultas de datos
   - Boton "Revocar acceso"

---

### Panel Veterinario - Componentes Principales

1. **Barra de Estado Diario**
   - Consultas hoy: X/Y
   - Proxima cita en: 15 min
   - Hospitalizados a cargo: N

2. **Seccion "Mi Rendimiento"**
   - Tiempo medio por consulta (LineChart 30d)
   - Tasa de diagnostico confirmado
   - Comparativa con media de la clinica

3. **Seccion "Hospitalizacion"**
   - Grid de pacientes criticos con temporizadores
   - Alertas de medicacion inminente

4. **Seccion "Copiloto AI"**
   - Ultimas 3 sugerencias del asistente
   - Precision historica del AI
   - Casos complejos pendientes de revision

---

### Panel Director - Componentes Principales

1. **Vista Ejecutiva (Toggle: Servicio/Medica/Financiera)**
   - Grid 4 KPIs principales con sparklines
   - Alerta predictiva AI destacada

2. **Seccion "Excelencia Operativa"**
   - Heatmap de ocupacion semanal (gabinetes x horas)
   - Tiempos de espera en tiempo real
   - Bottlenecks detectados

3. **Seccion "Finanzas"**
   - Revenue MTD vs objetivo
   - Margen operativo
   - Coste por consulta

4. **Seccion "Benchmarking Federado"**
   - Posicion percentil en la red
   - Areas de mejora detectadas
   - Comparativa anonima (BarChart)

5. **Seccion "Supply Chain"**
   - Ahorro acumulado por compras federadas
   - Alertas de stock critico
   - Pedidos automaticos pendientes de aprobacion

---

### Panel Cientifico - Componentes Principales

1. **Dashboard de Datasets**
   - Datasets publicados por mi clinica
   - Ingresos por monetizacion de datos
   - Datasets adquiridos

2. **Seccion "Federated Learning"**
   - Modelos en entrenamiento (Progress bars)
   - Precision actual vs objetivo
   - Nodos participando en cada modelo

3. **Seccion "Epidemiologia One Health"**
   - Mapa de calor geografico (incidencias)
   - Alertas de zoonosis activas
   - Tendencias epidemiologicas

4. **Seccion "Impacto Cientifico"**
   - Publicaciones basadas en datos de la red
   - Algoritmos desplegados en produccion
   - Contribucion al ecosistema (tokens/creditos)

---

## Flujo de Navegacion

```text
/portal/kpi
     |
     v
[Boton: Ver Demo del Panel]
     |
     v
/demo (Selector de Perfil)
     |
     +---> /demo/tutor     (Panel Tutor)
     |
     +---> /demo/vet       (Panel Veterinario)
     |
     +---> /demo/clinic    (Panel Director)
     |
     +---> /demo/research  (Panel Cientifico)
```

---

## Tecnologias a Utilizar

| Tecnologia | Uso |
|------------|-----|
| `recharts` | LineChart, AreaChart, BarChart, PieChart |
| `lucide-react` | Iconografia consistente |
| `framer-motion` | Animaciones de entrada (opcional) |
| Componentes UI existentes | Card, Badge, Button, Progress, Tabs |
| Tailwind CSS | Estilos responsivos |

---

## Datos Sinteticos por Panel

Cada archivo de mock data incluira:

**tutorMockData.ts:**
- Lista de mascotas con historial de peso
- Calendario de proximas vacunas
- Historial de gastos por categoria
- Conexiones de privacidad activas

**vetMockData.ts:**
- Agenda del dia con consultas
- Hospitalizados a cargo
- Metricas de rendimiento personal
- Sugerencias AI pendientes

**clinicMockData.ts:**
- KPIs financieros mensuales
- Ocupacion por gabinete/hora
- Benchmarks federados anonimos
- Alertas de stock y supply chain

**researchMockData.ts:**
- Catalogo de datasets
- Modelos en entrenamiento
- Mapa epidemiologico
- Metricas de impacto cientifico

---

## Estimacion de Implementacion

| Componente | Lineas Estimadas |
|------------|------------------|
| Pagina selector `/demo` | ~150 |
| TutorDemoPanel.tsx | ~400 |
| VetDemoPanel.tsx | ~450 |
| ClinicDemoPanel.tsx | ~600 |
| ResearchDemoPanel.tsx | ~500 |
| Archivos mock data (4) | ~400 |
| Componentes reutilizables | ~300 |
| Modificaciones App.tsx/KpiDashboardPage | ~30 |
| **Total** | **~2,830 lineas** |

---

## Resumen de Archivos

| Archivo | Accion | Descripcion |
|---------|--------|-------------|
| `src/pages/demo/index.tsx` | CREAR | Selector de perfil para demos |
| `src/pages/demo/TutorDemoPanel.tsx` | CREAR | Panel Tutor de Mascotas |
| `src/pages/demo/VetDemoPanel.tsx` | CREAR | Panel Medico Veterinario |
| `src/pages/demo/ClinicDemoPanel.tsx` | CREAR | Panel Director de Clinica |
| `src/pages/demo/ResearchDemoPanel.tsx` | CREAR | Panel Cientifico de Datos |
| `src/data/demoKpis/*.ts` | CREAR | 4 archivos de datos sinteticos |
| `src/components/demo/*.tsx` | CREAR | Componentes reutilizables |
| `src/pages/KpiDashboardPage.tsx` | MODIFICAR | Conectar boton a /demo |
| `src/App.tsx` | MODIFICAR | Registrar nuevas rutas |

