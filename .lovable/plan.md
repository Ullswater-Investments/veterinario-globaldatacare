

## Plan: Actualizar Emails de Contacto a emilio.mulet@globaldatacare.es

### Objetivo
Cambiar todos los emails de contacto de `ivan.becerro@accuro.es` a `emilio.mulet@globaldatacare.es` en todas las páginas relacionadas con Global Data Care.

---

### Archivos a Modificar

| Archivo | Ocurrencias | Cambio |
|---------|-------------|--------|
| `src/pages/PropuestaKitEspacioDatos.tsx` | 3 | Actualizar emails y texto del botón |
| `src/pages/presentation/MobilePresentation.tsx` | 1 | Actualizar email de contacto |
| `src/pages/consulting/TechnicalProposal.tsx` | 1 | Actualizar email de contacto |
| `docs/propuesta-kit-espacio-datos/PropuestaKitEspacioDatos.tsx` | 3 | Actualizar emails |

---

### Detalle de Cambios

#### 1. `src/pages/PropuestaKitEspacioDatos.tsx`
- Botón "Solicitar Pack Integral": `mailto:emilio.mulet@globaldatacare.es`
- Botón "Solicitar Kit Espacio de Datos": `mailto:emilio.mulet@globaldatacare.es`
- Botón de contacto: cambiar texto de "Contactar con ACCURO" a "Contactar con Global Data Care"

#### 2. `src/pages/presentation/MobilePresentation.tsx`
- Diapositiva final de contacto: mostrar `emilio.mulet@globaldatacare.es`

#### 3. `src/pages/consulting/TechnicalProposal.tsx`
- Link de contacto técnico: `emilio.mulet@globaldatacare.es`

#### 4. `docs/propuesta-kit-espacio-datos/PropuestaKitEspacioDatos.tsx`
- Todos los botones de solicitud y contacto

---

### Resumen

| Métrica | Valor |
|---------|-------|
| **Archivos** | 4 |
| **Ocurrencias totales** | 9 |
| **Email antiguo** | `ivan.becerro@accuro.es` |
| **Email nuevo** | `emilio.mulet@globaldatacare.es` |

