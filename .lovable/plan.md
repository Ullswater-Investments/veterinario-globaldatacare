

# Plan: Presentacion Scroll Continuo del Espacio de Datos de Salud Animal

## Objetivo

Crear una pagina de presentacion en formato de scroll continuo (single-page) siguiendo exactamente el estilo de https://comercio.kitespaciodedatos.net/ pero adaptada al **Espacio de Datos Federados de Salud Animal**.

## Formato de Referencia

El sitio de referencia tiene estas caracteristicas:
- Pagina unica con scroll vertical
- Secciones alternando fondos (blanco, gris, azul/naranja para CTAs)
- Cada seccion tiene: etiqueta de categoria, titulo, subtitulo, contenido
- Metricas destacadas con numeros grandes
- Cards con iconos para beneficios y features
- Capturas de pantalla de la plataforma
- Diagramas de arquitectura y flujos

## Estructura de la Presentacion

La presentacion seguira este orden con capturas de pantalla reales:

### Seccion 1: Hero
- Titulo: "Espacio de Datos Federado de Salud Animal"
- Subtitulo: "Conectando Clinicas, Laboratorios, Industria e Investigacion"
- Diagrama de actores: Clinicas → Espacio de Datos → Investigacion

### Seccion 2: El Problema Actual
- Fragmentacion de datos veterinarios
- Metricas: 85% clinicas aisladas, 0% interoperabilidad, duplicacion de pruebas
- Captura: Imagen de "servidores aislados"

### Seccion 3: La Vision - Red Federada
- Explicacion del modelo federado
- Captura: Imagen de "red federada activa"
- Diagrama de flujo de datos

### Seccion 4: Panel del Tutor de Mascotas
- Screenshot: `/demo/tutor` (TutorDemoPanel)
- Explicacion de funcionalidades: Wallet, economia, privacidad, tokens

### Seccion 5: Cockpit Veterinario
- Screenshot: `/portal/doctor` (DoctorPortal)
- Explicacion: Historial federado, diagnostico IA, trayectoria de salud

### Seccion 6: Panel Director de Clinica
- Screenshot: `/demo/clinic` (ClinicDemoPanel)
- Explicacion: KPIs, finanzas, benchmarking, excelencia operativa

### Seccion 7: Marketplace de Investigacion
- Screenshot: `/portal/research` (ResearchDataMarketplace)
- Explicacion: Datasets, algoritmos federados, epidemiologia

### Seccion 8: Central de Compras Predictiva
- Screenshot: `/portal/supply` (SupplyChainPage)
- Explicacion: Compras federadas, prediccion IA, ahorro colectivo

### Seccion 9: Pasaporte Digital de Producto
- Screenshot: `/solutions/product-passport` (ProductPassportPage)
- Explicacion: DPP, trazabilidad, QR, blockchain

### Seccion 10: Dashboard KPIs
- Screenshot: `/portal/kpi` (KpiDashboardPage)
- Explicacion: Metricas en tiempo real, benchmarking sectorial

### Seccion 11: Fundamentos Tecnologicos
- Arquitectura Gaia-X / IDS
- Componentes: Identity, ODRL, Blockchain, RLS
- Referencia a `/tech/*` pages

### Seccion 12: Kit Espacio de Datos
- Programa Red.es, financiacion europea
- Subvencion 15-30K EUR
- Referencia a `/propuesta-kit-espacio-datos`

### Seccion 13: Perfiles de Business Partners
- 8 tipos de partners con beneficios
- Clinicas, Labs, Pharma, Aseguradoras, Investigacion, IoT, Centrales Compra, Inversores

### Seccion 14: Metricas de Impacto
- ROI cuantificable
- Reduccion de costes, mejora de outcomes

### Seccion 15: CTA Final
- "Unete al Espacio de Datos de Salud Animal"
- Boton de contacto

## Archivos a Crear

| Archivo | Descripcion |
|---------|-------------|
| `src/pages/dossier/PlatformShowcase.tsx` | Pagina principal de scroll continuo con todas las secciones |

## Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/App.tsx` | Agregar ruta `/showcase` |

## Componentes Reutilizables

Cada seccion usara componentes consistentes:
- `SectionLabel`: Etiqueta de categoria (ej: "FUNDAMENTOS TECNOLOGICOS")
- `SectionTitle`: Titulo grande
- `SectionSubtitle`: Subtitulo explicativo
- `MetricCard`: Numero grande + descripcion
- `FeatureCard`: Icono + titulo + descripcion
- `ScreenshotFrame`: Marco para capturas de pantalla con sombra

## Capturas de Pantalla

Las capturas se implementaran de dos formas posibles:
1. **Iframes embebidos** (interactivos pero pesados)
2. **Imagenes estaticas** (ligeras, requieren captura manual)

Recomendacion: Usar componentes que rendericen versiones simplificadas de cada pantalla inline, similar a "mini-previews".

## Rutas de Pantallas a Mostrar

| Pantalla | Ruta | Componente |
|----------|------|------------|
| Panel Tutor | `/demo/tutor` | TutorDemoPanel |
| Cockpit Vet | `/portal/doctor` | DoctorPortal |
| Panel Clinica | `/demo/clinic` | ClinicDemoPanel |
| Marketplace Research | `/portal/research` | ResearchDataMarketplace |
| Central Compras | `/portal/supply` | SupplyChainPage |
| Pasaporte Digital | `/solutions/product-passport` | ProductPassportPage |
| Dashboard KPIs | `/portal/kpi` | KpiDashboardPage |
| Wallet Paciente | `/portal/patient` | PatientWalletPage |

## Estimacion

| Componente | Lineas Estimadas |
|------------|------------------|
| PlatformShowcase.tsx | ~1200-1500 lineas |
| Modificaciones App.tsx | ~5 lineas |

## Resultado Final

Una pagina accesible en `/showcase` que:
- Presenta toda la plataforma en formato scroll continuo
- Incluye capturas/previews de cada pantalla principal
- Explica la propuesta de valor del Espacio de Datos
- Sirve como herramienta comercial para Business Partners
- Sigue exactamente el formato de comercio.kitespaciodedatos.net

