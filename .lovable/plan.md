

# Plan: Botón Impactante "SOLICITA LAS AYUDAS KIT ESPACIO DE DATOS"

## Objetivo

Crear un botón hero prominente y llamativo con el texto **"SOLICITA LAS AYUDAS KIT ESPACIO DE DATOS"** que enlace a la página de condiciones (`/condiciones-kit-espacio-datos`), diseñado para maximizar conversiones.

---

## Diseño Propuesto

### Características del Nuevo Botón

| Aspecto | Implementación |
|---------|----------------|
| **Posición** | Centrado, encima de los botones actuales (máxima visibilidad) |
| **Tamaño** | Extra grande (xl), ancho completo en móvil |
| **Colores** | Gradiente animado verde-esmeralda a azul-cyan (colores de éxito/confianza) |
| **Animación** | Pulso sutil con `framer-motion` + brillo deslizante (shimmer effect) |
| **Iconos** | Euro (€) a la izquierda + flecha animada a la derecha |
| **Sombra** | Sombra grande con glow del color primario |
| **Borde** | Borde redondeado completo (pill shape) |

### Mockup Visual (Estructura)

```
┌─────────────────────────────────────────────────────────────┐
│  €  SOLICITA LAS AYUDAS KIT ESPACIO DE DATOS          →    │
│     ~~~~~~~~~~~~~ shimmer effect ~~~~~~~~~~~~~              │
└─────────────────────────────────────────────────────────────┘
        ↑ Gradiente animado + sombra con glow
```

---

## Cambios en el Archivo

### src/components/home/KitDatosCampaignBanner.tsx

**Nuevos imports:**
- `ArrowRight` de lucide-react (para flecha animada)

**Nuevo bloque de código** (insertar antes de la sección `{/* CTA buttons */}`):

```tsx
{/* Hero CTA Button - Máximo impacto */}
<div className="flex justify-center mb-6">
  <Link to="/condiciones-kit-espacio-datos" className="w-full sm:w-auto">
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden"
    >
      <Button 
        size="lg" 
        className="relative w-full sm:w-auto text-lg md:text-xl font-bold px-8 md:px-12 py-7 md:py-8 
                   bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 
                   hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600
                   text-white rounded-full shadow-2xl 
                   shadow-emerald-500/30 hover:shadow-emerald-500/50
                   transition-all duration-300 group"
      >
        {/* Shimmer effect overlay */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                         -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Content */}
        <Euro className="mr-3 h-6 w-6" />
        <span>SOLICITA LAS AYUDAS KIT ESPACIO DE DATOS</span>
        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  </Link>
</div>
```

---

## Estructura Final del Banner

```
┌─────────────────────────────────────────────────────────────┐
│  [€] AYUDAS KIT ESPACIO DE DATOS    [Fecha] [Plazas]       │
│                                                             │
│  Digitaliza tu clínica con hasta 30.000€ de subvención     │
│                                                             │
│  ✓ Tramitación incluida  ✓ 85-90%  ✓ Sin letra pequeña    │
│                                                             │
│  ╔═══════════════════════════════════════════════════════╗ │
│  ║  € SOLICITA LAS AYUDAS KIT ESPACIO DE DATOS  →        ║ │  ← NUEVO
│  ╚═══════════════════════════════════════════════════════╝ │
│                                                             │
│  [Solicitar Inscripción 190€/mes]  [Ver Condiciones]       │  ← Existentes
│                                                             │
│  [Logo Kit Datos]  [Logo Gobierno]                         │
└─────────────────────────────────────────────────────────────┘
```

---

## Sección Técnica

### Clases Tailwind Utilizadas

| Clase | Propósito |
|-------|-----------|
| `bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500` | Gradiente horizontal verde-cyan |
| `rounded-full` | Bordes completamente redondeados (pill) |
| `shadow-2xl shadow-emerald-500/30` | Sombra grande con glow verde |
| `group-hover:translate-x-full` | Efecto shimmer al hacer hover |
| `group-hover:translate-x-1` | Flecha que se mueve al hacer hover |

### Animaciones Framer Motion

| Propiedad | Valor | Efecto |
|-----------|-------|--------|
| `whileHover` | `scale: 1.02` | Ligero aumento al pasar el cursor |
| `whileTap` | `scale: 0.98` | Ligera reducción al hacer clic |

### Responsividad

| Breakpoint | Comportamiento |
|------------|----------------|
| Móvil (`< sm`) | Botón ancho completo, texto más pequeño |
| Tablet/Desktop (`≥ sm`) | Botón ancho automático, texto grande |

---

## Resumen de Cambios

| Archivo | Tipo de Cambio |
|---------|----------------|
| `src/components/home/KitDatosCampaignBanner.tsx` | Añadir import `ArrowRight` + nuevo bloque de botón hero |

**Total: 1 archivo, ~25 líneas nuevas**

