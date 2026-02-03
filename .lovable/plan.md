
# Plan: Actualizar Footer con Enlace a Espacios de Datos Homologados

## Objetivo
Reemplazar los enlaces "Condiciones Kit" y "Propuesta Kit" del GlobalFooter por un único enlace al PDF oficial del Catálogo de Espacios de Datos Elegibles del Gobierno de España.

## Cambios Propuestos

### 1. Copiar el PDF al proyecto
- Copiar el archivo PDF a la carpeta `public/documents/` para que sea accesible públicamente
- Nombre del archivo: `Espacios_de_Datos_Elegibles_KTED.pdf`

### 2. Modificar `src/components/ui/GlobalFooter.tsx`

**Antes (líneas 63-78):**
```
· Condiciones Kit
· Propuesta Kit
```

**Después:**
```
· Espacios de Datos Homologados
```

El nuevo enlace:
- Abrirá el PDF en una nueva pestaña (`target="_blank"`)
- Usará un icono apropiado (ExternalLink o FileText)
- Incluirá `rel="noopener noreferrer"` por seguridad

### 3. Estructura Final de Enlaces del Footer

| Enlace | Destino | Tipo |
|--------|---------|------|
| Inicio | `/` | Link interno |
| Aviso Legal | `/legal` | Link interno |
| Espacios de Datos Homologados | `/documents/Espacios_de_Datos_Elegibles_KTED.pdf` | Enlace externo (nueva pestaña) |

## Archivos a Modificar

| Archivo | Acción |
|---------|--------|
| `public/documents/Espacios_de_Datos_Elegibles_KTED.pdf` | Crear carpeta y copiar PDF |
| `src/components/ui/GlobalFooter.tsx` | Eliminar enlaces Condiciones/Propuesta, añadir nuevo enlace al PDF |

## Detalles Técnicos

```tsx
// Nuevo enlace en el footer
<a 
  href="/documents/Espacios_de_Datos_Elegibles_KTED.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1.5 hover:text-white transition-colors"
>
  <ExternalLink className="w-4 h-4" />
  Espacios de Datos Homologados
</a>
```

## Beneficios

1. Proporciona acceso directo al catálogo oficial del Gobierno de España
2. Simplifica la navegación del footer
3. Añade credibilidad institucional al enlazar documentación oficial del CRED
