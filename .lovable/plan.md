

## Plan: Añadir enlaces a Contrato y Condiciones al botón CTA

### Objetivo
Modificar la sección CTA final de la página de Condiciones para añadir un tercer botón que enlace al contrato completo, manteniendo el enlace a la propuesta y añadiendo acceso directo a los documentos legales.

---

### Cambios Propuestos

#### Archivo: `src/pages/CondicionesKitEspacioDatos.tsx`

**Cambio en la sección CTA (líneas 450-462)**

Transformar la sección de 2 botones en una sección de 3 botones:

| Botón Actual | Acción |
|--------------|--------|
| Solicitar Inscripción por 190€/mes | Mantener igual → `/inscripcion-kit-espacio-datos` |
| Ver Propuesta Completa | Mantener igual → `/propuesta-kit-espacio-datos` |
| **NUEVO: Ver Contrato Completo** | **Añadir** → `/inscripcion-kit-espacio-datos#contrato` (ancla al contrato en el formulario de inscripción) |

**Estructura visual propuesta:**

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│       ¿Listo para digitalizar tu clínica?                                  │
│       Accede a hasta 30.000€ de subvención...                              │
│                                                                             │
│  ┌─────────────────────────┐  ┌─────────────────────────┐                  │
│  │ 🐾 Solicitar Inscripción │  │ 📄 Ver Propuesta       │                  │
│  │    por 190€/mes          │  │    Completa            │                  │
│  └─────────────────────────┘  └─────────────────────────┘                  │
│                                                                             │
│                    ┌─────────────────────────┐                             │
│                    │ 📜 Ver Contrato Completo │                             │
│                    └─────────────────────────┘                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Implementación Técnica

El nuevo botón enlazará directamente a la sección del contrato que ya existe en la página de inscripción (`/inscripcion-kit-espacio-datos`), donde el componente `ContractContent` muestra el contrato completo.

**Opción alternativa**: Si se prefiere que el contrato se abra en una vista independiente, se puede crear una nueva página `/contrato-kit-espacio-datos` que muestre solo el `ContractContent` en pantalla completa.

**Iconografía:**
- Nuevo botón usará el icono `ScrollText` de Lucide React (ya importado en el archivo)

---

### Código a Modificar

Líneas 450-462 del archivo `src/pages/CondicionesKitEspacioDatos.tsx`:

**Antes:**
```tsx
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  <Link to="/inscripcion-kit-espacio-datos">
    <Button ...>Solicitar Inscripción por 190€/mes</Button>
  </Link>
  <Link to="/propuesta-kit-espacio-datos">
    <Button ...>Ver Propuesta Completa</Button>
  </Link>
</div>
```

**Después:**
```tsx
<div className="flex flex-col items-center justify-center gap-4">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <Link to="/inscripcion-kit-espacio-datos">
      <Button ...>Solicitar Inscripción por 190€/mes</Button>
    </Link>
    <Link to="/propuesta-kit-espacio-datos">
      <Button ...>Ver Propuesta Completa</Button>
    </Link>
  </div>
  <Link to="/inscripcion-kit-espacio-datos">
    <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
      <ScrollText className="mr-2 h-4 w-4" />
      Ver Contrato Completo y Condiciones
    </Button>
  </Link>
</div>
```

---

### Resumen de Cambios

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/pages/CondicionesKitEspacioDatos.tsx` | **MODIFICAR** | Añadir tercer botón "Ver Contrato Completo y Condiciones" enlazando a la página de inscripción donde está el contrato |

