

# Plan: Corregir Visibilidad del Boton "Ver Demo Predictiva"

## Problema Detectado

El boton "Ver Demo Predictiva" en `src/pages/portals/ProcurementAdhesion.tsx` (linea 330) tiene un fondo blanco no deseado que afecta la legibilidad del texto.

## Causa

El componente `Button` con `variant="outline"` aplica estilos por defecto que pueden incluir un fondo blanco. Aunque se han anadido clases personalizadas (`border-white/20 text-white hover:bg-white/10`), falta especificar explicitamente `bg-transparent` para anular el fondo por defecto.

## Solucion

Anadir la clase `bg-transparent` al boton para eliminar cualquier fondo blanco heredado del variant outline.

## Cambio Propuesto

**Archivo:** `src/pages/portals/ProcurementAdhesion.tsx`  
**Linea:** 330

**Antes:**
```tsx
<Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
```

**Despues:**
```tsx
<Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10">
```

## Resultado Esperado

El boton "Ver Demo Predictiva" tendra un fondo completamente transparente, permitiendo que el texto blanco sea claramente visible sobre el fondo oscuro de la seccion hero.

