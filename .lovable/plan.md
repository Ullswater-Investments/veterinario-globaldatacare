

## Plan: Añadir Explicación de Criterios de Subvención (15.000€ vs 30.000€)

### Objetivo
Modificar la tarjeta de pricing para explicar claramente que el importe de subvención depende del nivel de madurez de la clínica en gestión de datos de salud animal, y que durante la consultoría se asesora sobre qué importe solicitar.

---

### Cambios en `src/pages/GuiaKitEspacioDatos.tsx`

#### Ubicación
Sección "¿Cuánto Puedo Conseguir?" (líneas 420-480)

#### Cambios Propuestos

1. **Actualizar subtítulo de la sección** (línea 425-427):
   - De: "Importe de subvención según tu clínica"
   - A: "El importe depende del nivel de madurez en gestión de datos de salud animal"

2. **Añadir bloque explicativo después de la descripción del CardHeader** (después de línea 442):
   - Nuevo componente con dos apartados que expliquen los criterios

3. **Estructura del nuevo bloque explicativo**:

```text
┌─────────────────────────────────────────────────────────────┐
│              [Kit Espacio de Datos]                         │
│           15.000€ — 30.000€                                 │
│     Subvención a fondo perdido según criterios RED.ES      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Hasta 15.000€                                      │    │
│  │  Para clínicas que inician su transformación       │    │
│  │  digital en gestión de datos de salud animal       │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Hasta 30.000€                                      │    │
│  │  Para entidades con experiencia demostrable        │    │
│  │  en gestión de datos de salud animal               │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  [i] Durante la consultoría evaluamos tu situación         │
│      y recomendamos el importe más adecuado                │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│  ✓ Todos los módulos del ecosistema                        │
│  ✓ Wallet del tutor completo                               │
│  ...                                                       │
└─────────────────────────────────────────────────────────────┘
```

---

### Contenido del Bloque Explicativo

| Importe | Perfil de Clínica |
|---------|-------------------|
| **Hasta 15.000€** | Clínicas que inician su transformación digital en gestión de datos de salud animal |
| **Hasta 30.000€** | Entidades con experiencia demostrable en gestión de datos de salud animal |

**Nota adicional:**
> Durante nuestra consultoría inicial, evaluamos el nivel de madurez de tu clínica y te recomendamos el importe de subvención más adecuado para tu caso.

---

### Implementación Técnica

Añadir después del `CardDescription` (línea 442) y antes de los servicios incluidos (línea 444):

```tsx
{/* Explicación de criterios de subvención */}
<div className="mt-4 space-y-3">
  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
    <div className="flex items-start gap-2">
      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
        Hasta 15.000€
      </Badge>
    </div>
    <p className="text-sm text-green-700 mt-2">
      Para clínicas que inician su transformación digital 
      en gestión de datos de salud animal.
    </p>
  </div>
  
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
    <div className="flex items-start gap-2">
      <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
        Hasta 30.000€
      </Badge>
    </div>
    <p className="text-sm text-blue-700 mt-2">
      Para entidades con experiencia demostrable 
      en gestión de datos de salud animal.
    </p>
  </div>
  
  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
    <Info className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
    <p className="text-xs text-amber-700">
      Durante nuestra consultoría inicial, evaluamos tu nivel de madurez 
      y te recomendamos el importe más adecuado para tu clínica.
    </p>
  </div>
</div>

<Separator className="my-4" />
```

---

### Archivo a Modificar

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/pages/GuiaKitEspacioDatos.tsx` | **MODIFICAR** | Añadir bloque explicativo con criterios 15k/30k y nota sobre consultoría |

---

### Importaciones Adicionales

Añadir el icono `Info` de Lucide si no está ya importado:
```tsx
import { ..., Info } from 'lucide-react';
```

