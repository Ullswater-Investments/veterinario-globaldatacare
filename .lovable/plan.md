

# Plan: Botón Flotante de WhatsApp para Soporte

## Objetivo

Implementar un botón flotante de WhatsApp siempre visible en la esquina inferior derecha para soporte tecnico directo, con mensaje dinamico segun el estado de autenticacion del usuario.

---

## Estrategia de UI/UX

### Ubicacion y Comportamiento

| Aspecto | Implementacion |
|---------|----------------|
| **Posicion** | Esquina inferior derecha, fijo (`fixed bottom-6 right-6`) |
| **Visibilidad** | Siempre visible en todas las paginas |
| **Z-index** | Alto (z-50) para estar por encima de otros elementos |
| **Responsivo** | Ajuste de posicion en moviles para no tapar elementos del footer |

### Diseno Visual

| Elemento | Especificacion |
|----------|----------------|
| **Forma** | Circulo de 56px (h-14 w-14) |
| **Color** | Verde WhatsApp (#25D366) |
| **Icono** | Icono de WhatsApp de lucide-react |
| **Sombra** | Sombra grande con glow verde |
| **Hover** | Escala 1.1 + tooltip "¿Necesitas ayuda?" |

### Mensaje Dinamico

| Estado del Usuario | Mensaje Pre-escrito |
|--------------------|---------------------|
| **No logueado** | "Hola! Soy usuario de Global Data Care y necesito ayuda." |
| **Logueado** | "Hola, soy [email del usuario], necesito ayuda con mi cuenta en Global Data Care." |

---

## Arquitectura de Componentes

```text
src/
└── components/
    └── ui/
        └── WhatsAppButton.tsx  ← NUEVO COMPONENTE
```

### Integracion en App.tsx

El boton se montara globalmente dentro del `AuthProvider` para tener acceso al contexto de autenticacion:

```text
App.tsx
├── AuthProvider
│   ├── RoleProvider
│   │   ├── WhatsAppButton  ← AÑADIR AQUI (acceso a useAuth)
│   │   ├── BusinessProposalModal
│   │   ├── ProjectAssistant
│   │   └── Routes...
```

---

## Implementacion Tecnica

### Nuevo Archivo: src/components/ui/WhatsAppButton.tsx

**Caracteristicas:**
- Importar `useAuth` para detectar si el usuario esta logueado
- Construir URL de WhatsApp dinamicamente con mensaje personalizado
- Usar `MessageCircle` de lucide-react (o un SVG de WhatsApp)
- Tooltip con Radix UI (ya instalado en el proyecto)
- Animacion hover con Tailwind

**Codigo propuesto:**

```tsx
import { useAuth } from '@/contexts/AuthContext';
import { MessageCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const WHATSAPP_NUMBER = '34601398868';

const WhatsAppButton = () => {
  const { user } = useAuth();
  
  const getMessage = () => {
    if (user?.email) {
      return `Hola, soy ${user.email}, necesito ayuda con mi cuenta en Global Data Care.`;
    }
    return 'Hola! Soy usuario de Global Data Care y necesito ayuda.';
  };
  
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getMessage())}`;
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center 
                     rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 
                     transition-all duration-300 hover:scale-110 hover:shadow-xl 
                     hover:shadow-[#25D366]/50 active:scale-95
                     sm:bottom-6 sm:right-6"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </TooltipTrigger>
      <TooltipContent side="left" className="bg-slate-900 text-white">
        <p>¿Necesitas ayuda?</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default WhatsAppButton;
```

### Modificacion: src/App.tsx

Añadir import y renderizado del componente:

```tsx
// Nuevo import
import WhatsAppButton from '@/components/ui/WhatsAppButton';

// Dentro del JSX, justo despues de ProjectAssistant
<WhatsAppButton />
```

---

## Consideraciones de Responsividad

| Breakpoint | Comportamiento |
|------------|----------------|
| **Movil (< sm)** | `bottom-20 right-4` para no tapar footer/navegacion |
| **Tablet/Desktop (>= sm)** | `bottom-6 right-6` posicion estandar |

**Nota:** El componente `FloatingChat.tsx` existente ya tiene logica para evitar superposicion. Si ambos botones coexisten, habra que ajustar posiciones.

---

## Flujo de Usuario

```text
Usuario visita cualquier pagina
         │
         ▼
   Ve boton verde WhatsApp (esquina inferior derecha)
         │
         ▼
   Pasa el cursor → Aparece tooltip "¿Necesitas ayuda?"
         │
         ▼
   Hace clic → Abre WhatsApp Web/App
         │
         ▼
   Mensaje pre-escrito (personalizado si esta logueado)
```

---

## Resumen de Cambios

| Archivo | Accion | Lineas Estimadas |
|---------|--------|------------------|
| `src/components/ui/WhatsAppButton.tsx` | **CREAR** | ~45 lineas |
| `src/App.tsx` | **MODIFICAR** | +2 lineas (import + render) |

**Total: 2 archivos, ~47 lineas nuevas**

---

## Seccion Tecnica Detallada

### Clases Tailwind Utilizadas

| Clase | Proposito |
|-------|-----------|
| `fixed bottom-6 right-6` | Posicion fija en esquina inferior derecha |
| `z-50` | Asegura que este por encima de otros elementos |
| `bg-[#25D366]` | Color oficial de WhatsApp |
| `shadow-lg shadow-[#25D366]/40` | Sombra con glow verde |
| `hover:scale-110` | Efecto de agrandamiento al hover |
| `active:scale-95` | Efecto de clic (feedback tactil) |

### URL de WhatsApp

```text
Base: https://wa.me/34601398868
Parametro: ?text=<mensaje_codificado>
```

El mensaje se codifica con `encodeURIComponent()` para manejar caracteres especiales y espacios.

### Accesibilidad

- `aria-label="Contactar por WhatsApp"` para lectores de pantalla
- `rel="noopener noreferrer"` para seguridad en enlaces externos
- Tooltip visible para usuarios que no reconozcan el icono

