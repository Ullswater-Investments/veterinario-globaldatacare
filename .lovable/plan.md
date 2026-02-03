

# Plan: Convertir Badge en Enlace al PDF de Espacios de Datos Elegibles

## Objetivo
Convertir el elemento badge "Únete a la primera red europea de Datos Veterinarios" en un enlace clickeable que abra el PDF oficial del Catálogo de Espacios de Datos Elegibles del Gobierno de España.

## Cambios Propuestos

### Modificar `src/pages/Index.tsx` (línea 149-151)

**Antes:**
```tsx
<div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
  Únete a la primera red europea de Datos Veterinarios
</div>
```

**Después:**
```tsx
<a 
  href="/documents/Espacios_de_Datos_Elegibles_KTED.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 hover:bg-primary/20 transition-colors cursor-pointer"
>
  <ExternalLink className="w-4 h-4" />
  Ver Espacios de Datos Elegibles
</a>
```

### Importar icono

Añadir `ExternalLink` a los imports de `lucide-react` en la línea 4.

## Resultado Final

El badge se convertirá en un enlace interactivo que:
- Muestra el texto "Ver Espacios de Datos Elegibles"
- Incluye un icono de enlace externo
- Abre el PDF en una nueva pestaña
- Tiene efecto hover para indicar que es clickeable

## Archivos a Modificar

| Archivo | Acción |
|---------|--------|
| `src/pages/Index.tsx` | Convertir `<div>` a `<a>`, añadir import ExternalLink |

