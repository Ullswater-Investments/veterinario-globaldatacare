

# Plan de Rebranding: "Global Data Care - Veterinario"

## Resumen

Se aplicara el nuevo nombre comercial **"Global Data Care - Veterinario"** en todos los archivos identificados, **excepto** los siguientes que el usuario ha indicado que NO deben modificarse:

- **11 archivos con document.title SEO** (MobilePresentation, StrategicPresentation, ProductPassportPage, etc.)
- **GlobalFooter.tsx** (copyright y descripcion del proyecto)

---

## Archivos a Modificar

### 1. index.html (Titulo del navegador y meta tags)

| Elemento | Antes | Despues |
|----------|-------|---------|
| `<title>` | "VETERINARIOS Espacio de Datos" | "Global Data Care - Veterinario" |
| `og:title` | "VETERINARIOS Espacio de Datos" | "Global Data Care - Veterinario" |
| `twitter:title` | "VETERINARIOS Espacio de Datos" | "Global Data Care - Veterinario" |

---

### 2. src/components/AppHeader.tsx (Header principal de la app)

| Linea | Antes | Despues |
|-------|-------|---------|
| 46 | `VetSpace-X` | `Global Data Care` |
| 47 | `Plataforma de Salud Animal Federada` | `Espacio de Datos Federado de Salud Animal` |

---

### 3. src/pages/Dashboard.tsx (Dashboard principal)

| Linea | Antes | Despues |
|-------|-------|---------|
| 50 | `VetSpace-X - Plataforma de Salud Animal Federada` | `Global Data Care - Veterinario` |
| 190 | `VetSpace-X Labs (Beta)` | `GDC Labs (Beta)` |
| 205 | `¿Listo para implementar VetSpace-X en su red?` | `¿Listo para implementar Global Data Care en su red?` |

---

### 4. src/pages/tech/TechIndex.tsx (Indice de tecnologia)

| Linea | Antes | Despues |
|-------|-------|---------|
| 66 | `Arquitectura de Confianza VetSpace-X` | `Arquitectura de Confianza Global Data Care` |

---

### 5. src/pages/tech/Interoperability.tsx (Pagina de interoperabilidad)

| Linea | Antes | Despues |
|-------|-------|---------|
| 113 | `Cómo VetSpace-X traduce la medicina...` | `Cómo Global Data Care traduce la medicina...` |

---

### 6. src/pages/business/BusinessModels.tsx (Modelos de negocio)

| Linea | Antes | Despues |
|-------|-------|---------|
| 100 | `Ecosistema de Valor VETSPACE-X` | `Ecosistema de Valor GLOBAL DATA CARE` |

---

### 7. src/pages/consulting/TechnicalProposal.tsx (Whitepaper tecnico)

| Linea | Antes | Despues |
|-------|-------|---------|
| 99 | `ACCURO TECHNOLOGY · VetSpace-X Technical Whitepaper` | `ACCURO TECHNOLOGY · Global Data Care Technical Whitepaper` |

---

### 8. src/pages/portals/ProcurementPortal.tsx (Portal de compras)

| Linea | Antes | Despues |
|-------|-------|---------|
| 33 | `Central de Compras VetSpace-X` | `Central de Compras Global Data Care` |
| 37 | `espacio de datos VetSpace-X` | `espacio de datos Global Data Care` |

---

### 9. src/pages/portals/ProcurementAdhesion.tsx (Adhesion a compras)

| Linea | Antes | Despues |
|-------|-------|---------|
| 276 | `VetSpace-X` (logo header) | `Global Data Care` |
| 304 | `Central de Compras VetSpace-X` | `Central de Compras Global Data Care` |
| 372 | `Nodo Local VetSpace-X` | `Nodo Local Global Data Care` |
| 444 | `sincroniza con VetSpace-X` | `sincroniza con Global Data Care` |
| 1198 | `novedades y ofertas de VetSpace-X` | `novedades y ofertas de Global Data Care` |

---

### 10. src/pages/solutions/AdhesionEspacioDatos.tsx (Adhesion espacio de datos)

| Linea | Antes | Despues |
|-------|-------|---------|
| 274 | `VetSpace-X` (logo header) | `Global Data Care` |

---

### 11. src/pages/KitEspacioDatosInscripcion.tsx (Inscripcion Kit)

| Linea | Antes | Despues |
|-------|-------|---------|
| 247 | `VetSpace-X` (logo header) | `Global Data Care` |

---

### 12. src/pages/PropuestaKitEspacioDatos.tsx (Propuesta Kit)

| Linea | Antes | Despues |
|-------|-------|---------|
| 85 | `ACCURO | VetSpace-X` | `ACCURO | Global Data Care` |
| 125 | `Global Data Care Veterinario para la red VetSpace-X` | `Global Data Care - Veterinario` |

---

### 13. src/pages/CondicionesKitEspacioDatos.tsx (Condiciones Kit)

| Linea | Antes | Despues |
|-------|-------|---------|
| 59 | `VetSpace Technology S.L.` | `Global Data Care` |
| 68 | Menciones adicionales | `Global Data Care` |

---

## Archivos en export/presentations/ (Carpeta exportable)

Tambien se actualizaran las referencias en los archivos copiados:

### export/presentations/README.md
- Actualizar nombre del proyecto a "Global Data Care - Veterinario"

### export/presentations/pages/InvestorPitchDeck.tsx
- Revisar y actualizar menciones de VetSpace-X

### export/presentations/pages/BusinessPartnersSlides.tsx
- Revisar y actualizar menciones de VetSpace-X

### export/presentations/pages/PlatformShowcase.tsx
- Revisar y actualizar menciones de VetSpace-X

---

## Reglas de Reemplazo Aplicadas

| Contexto | Texto Nuevo |
|----------|-------------|
| Titulo principal / Logo | **Global Data Care** |
| Subtitulo / Eslogan | "Espacio de Datos Federado de Salud Animal" |
| Referencias Labs | **GDC Labs** |
| Navegador / Meta tags | "Global Data Care - Veterinario" |
| Referencias cortas en texto | **Global Data Care** |

---

## Resumen de Cambios

| Categoria | Archivos | Estimacion de cambios |
|-----------|----------|----------------------|
| index.html (meta tags) | 1 | 4 cambios |
| AppHeader.tsx | 1 | 2 cambios |
| Dashboard.tsx | 1 | 3 cambios |
| Paginas /tech/ | 2 | 2 cambios |
| Paginas /business/ | 1 | 1 cambio |
| Paginas /consulting/ | 1 | 1 cambio |
| Paginas /portals/ | 2 | 7 cambios |
| Paginas /solutions/ | 1 | 1 cambio |
| Paginas Kit Espacio Datos | 3 | 5 cambios |
| Carpeta export/presentations/ | 4 | ~10 cambios |
| **TOTAL** | **17 archivos** | **~36 cambios** |

---

## Archivos NO Modificados (por indicacion del usuario)

- src/pages/presentation/MobilePresentation.tsx (document.title)
- src/pages/StrategicPresentation.tsx (document.title)
- src/pages/solutions/ProductPassportPage.tsx (document.title)
- src/pages/SupplyChainPage.tsx (document.title)
- src/pages/Wallet.tsx (document.title)
- src/pages/ResearchDataMarketplace.tsx (document.title)
- src/pages/LegalNotice.tsx (document.title)
- src/pages/KpiDashboardPage.tsx (document.title)
- src/pages/solutions/ClinicsPage.tsx (document.title)
- src/pages/portals/ProcurementAdhesion.tsx (solo document.title, resto si se modifica)
- src/pages/solutions/AdhesionEspacioDatos.tsx (solo document.title, resto si se modifica)
- src/components/ui/GlobalFooter.tsx (copyright completo)

