

# Plan: Abrir PDF en la Página de GLOBAL DATA CARE

## Objetivo
Modificar el enlace al PDF de Espacios de Datos Elegibles para que se abra directamente en la **Página 22**, donde aparece la entrada de **GLOBAL-DATACARE** (ACCURO TECHNOLOGY, S.L.).

## Contexto
En el PDF del catálogo oficial del CRED, la entrada de GLOBAL DATA CARE aparece en la **Página 22**:

```
GLOBAL-DATACARE
Sector: SALUD
Empresa: ACCURO TECHNOLOGY, S.L.
CIF: B87617981
URL: https://www.accuro.es/global-datacare
Email: ivan.becerro@accuro.es
```

## Solución Técnica

Los navegadores modernos soportan el fragmento `#page=N` en URLs de PDF para abrir directamente en una página específica.

**Ejemplo:**
```
/documents/archivo.pdf#page=22
```

## Cambios Propuestos

### Archivo: `src/pages/Index.tsx`

**Línea 150 - Antes:**
```tsx
href="/documents/Espacios_de_Datos_Elegibles_KTED.pdf"
```

**Línea 150 - Después:**
```tsx
href="/documents/Espacios_de_Datos_Elegibles_KTED.pdf#page=22"
```

### Archivo: `src/components/ui/GlobalFooter.tsx`

También actualizar el enlace del footer para mantener consistencia:

**Antes:**
```tsx
href="/documents/Espacios_de_Datos_Elegibles_KTED.pdf"
```

**Después:**
```tsx
href="/documents/Espacios_de_Datos_Elegibles_KTED.pdf#page=22"
```

## Resumen de Archivos a Modificar

| Archivo | Línea | Cambio |
|---------|-------|--------|
| `src/pages/Index.tsx` | 150 | Añadir `#page=22` al href |
| `src/components/ui/GlobalFooter.tsx` | ~65 | Añadir `#page=22` al href |

## Compatibilidad

El fragmento `#page=N` es soportado por:
- Chrome, Firefox, Edge (visor PDF integrado)
- Safari (visor PDF integrado)
- Adobe Acrobat Reader
- La mayoría de visores PDF modernos

## Resultado Esperado

Cuando el usuario hace clic en "Ver Espacios de Datos Elegibles", el PDF se abrirá mostrando directamente la página donde aparece **GLOBAL-DATACARE** con los datos de ACCURO TECHNOLOGY, S.L.

