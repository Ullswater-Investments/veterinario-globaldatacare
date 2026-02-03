

# Plan: Quitar Fondo Blanco del Botón "Ver Catálogo Oficial RED.ES"

## Problema

El botón "Ver Catálogo Oficial RED.ES" tiene un fondo blanco que dificulta la lectura. Esto ocurre porque el variant `outline` del componente Button incluye `bg-background` (fondo blanco) que no se está sobrescribiendo correctamente con las clases añadidas.

## Solución

Añadir `bg-transparent` a las clases del botón para sobrescribir el `bg-background` del variant.

## Cambio Propuesto

### Archivo: `src/pages/solutions/AdhesionEspacioDatos.tsx`

**Línea 332 - Antes:**
```tsx
<Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
```

**Línea 332 - Después:**
```tsx
<Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10">
```

## Resultado Esperado

El botón tendrá fondo transparente, permitiendo que el texto blanco "Ver Catálogo Oficial RED.ES" se lea claramente sobre el fondo oscuro de la sección hero.

