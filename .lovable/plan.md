
# Plan: Footer Global Unificado con Datos de Empresa y Aviso Legal

## Objetivo
Actualizar el componente `GlobalFooter` para incluir todos los datos de empresa de ACCURO TECHNOLOGY, S.L., enlace a Aviso Legal, y asegurar que todas las páginas de la aplicación lo utilicen de forma consistente.

## Situación Actual

| Página | Footer Actual | Datos Empresa | Link Aviso Legal |
|--------|---------------|---------------|------------------|
| `GlobalFooter.tsx` | Componente base | Solo nombre | No |
| `Index.tsx` | GlobalFooter + footer extra | No | Sí (footer extra) |
| `CondicionesKitEspacioDatos.tsx` | Footer propio | Sí | Sí |
| `GuiaKitEspacioDatos.tsx` | Footer propio | No | Sí |
| `ContratoKitEspacioDatos.tsx` | Footer propio | No | Sí |
| `LegalNotice.tsx` | Footer propio | Sí | N/A (es la página) |
| `PropuestaKitEspacioDatos.tsx` | CTA Footer | Solo nombre | No |
| Otras páginas (portales, wallet, etc.) | GlobalFooter | Solo nombre | No |

## Cambios Propuestos

### 1. Actualizar `src/components/ui/GlobalFooter.tsx`

Reemplazar el footer actual con uno completo que incluya:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│   © 2026 GLOBAL DATA CARE — Todos los derechos reservados                   │
│                                                                              │
│   ACCURO TECHNOLOGY, S.L. · CIF: B87617981                                  │
│   C/ Colquide, 6 – Portal 2, 1ª planta, Edificio Prisma de Las Rozas – Madrid│
│   Tel: (+34) 91 710 48 40 · ivan.becerro@accuro.es                          │
│                                                                              │
│   [Aviso Legal] · [Condiciones Kit] · [Propuesta Kit] · [Inicio]  [↑ Subir] │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2. Eliminar Footers Duplicados

Las páginas que tienen footer propio pasarán a usar `GlobalFooter`:

| Archivo | Acción |
|---------|--------|
| `GuiaKitEspacioDatos.tsx` | Eliminar footer inline, importar GlobalFooter |
| `ContratoKitEspacioDatos.tsx` | Eliminar footer inline, importar GlobalFooter |
| `CondicionesKitEspacioDatos.tsx` | Eliminar footer inline, importar GlobalFooter |
| `LegalNotice.tsx` | Eliminar footer inline, importar GlobalFooter |
| `PropuestaKitEspacioDatos.tsx` | Mantener CTA section, añadir GlobalFooter al final |
| `Index.tsx` | Eliminar el footer secundario (mantener solo GlobalFooter) |

### 3. Verificar Páginas Existentes con GlobalFooter

Estas páginas ya usan GlobalFooter y se beneficiarán automáticamente:
- `DoctorPortal.tsx`
- `ResearchPortal.tsx`
- `ProcurementPortal.tsx`
- `LabPortal.tsx`
- `InsurancePortal.tsx`
- `Wallet.tsx`
- `PatientWalletPage.tsx`
- `SupplyChainPage.tsx`
- `ResearchDataMarketplace.tsx`
- `KpiDashboardPage.tsx`
- `ProductPassportPage.tsx`
- `KitEspacioDatosInscripcion.tsx`

## Estructura del Nuevo GlobalFooter

```text
GlobalFooter
├── Sección Superior
│   ├── Copyright GLOBAL DATA CARE
│   └── Datos completos ACCURO TECHNOLOGY, S.L.
├── Sección de Enlaces
│   ├── Link a /legal (Aviso Legal)
│   ├── Link a /condiciones-kit-espacio-datos
│   ├── Link a /propuesta-kit-espacio-datos
│   └── Link a / (Inicio)
└── Botón Subir
    └── Scroll to top
```

## Archivos a Modificar

| Archivo | Líneas Afectadas | Acción |
|---------|------------------|--------|
| `src/components/ui/GlobalFooter.tsx` | Todo | Reescribir con datos empresa y enlaces |
| `src/pages/GuiaKitEspacioDatos.tsx` | ~614-624 | Eliminar footer, añadir GlobalFooter |
| `src/pages/ContratoKitEspacioDatos.tsx` | ~701-713 | Eliminar footer, añadir GlobalFooter |
| `src/pages/CondicionesKitEspacioDatos.tsx` | ~576-591 | Eliminar footer, añadir GlobalFooter |
| `src/pages/LegalNotice.tsx` | ~433-465 | Eliminar footer, añadir GlobalFooter |
| `src/pages/PropuestaKitEspacioDatos.tsx` | Al final | Añadir GlobalFooter tras CTA section |
| `src/pages/Index.tsx` | ~221-237 | Eliminar footer inline duplicado |

## Datos de Empresa a Incluir

```
Empresa: ACCURO TECHNOLOGY, S.L.
CIF: B87617981
Dirección: C/ Colquide, 6 – Portal 2, 1ª planta, Edificio Prisma de Las Rozas – Madrid
Teléfono: (+34) 91 710 48 40
Email: ivan.becerro@accuro.es
Marca comercial: GLOBAL DATA CARE
```

## Beneficios

1. **Consistencia**: Todas las páginas mostrarán la misma información legal
2. **Mantenibilidad**: Un solo lugar para actualizar datos de empresa
3. **Cumplimiento LSSI-CE**: Información del titular visible en todo el sitio
4. **UX mejorada**: Navegación coherente entre páginas legales y principales
