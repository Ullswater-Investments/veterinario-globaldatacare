

# Cambiar renovacion automatica de 1 ano a 2 anos

## Resumen
Actualizar todas las referencias contractuales de "12 meses" / "1 ano" a "24 meses" / "2 anos" en la duracion de la Fase 2 (prorroga automatica por concesion de subvencion).

## Archivos a modificar

### 1. `src/pages/CondicionesKitEspacioDatos.tsx`
- **Linea 337**: Cambiar "Renovacion automatica 1 ano" por "Renovacion automatica 2 anos"
- **Linea 53**: En la FAQ, cambiar "12 meses adicionales" por "24 meses adicionales"

### 2. `src/components/legal/ContractContent.tsx`
- **Linea 79**: Cambiar "DOCE (12) MESES" por "VEINTICUATRO (24) MESES" en la clausula de prorroga automatica de Fase 2

### 3. `src/pages/ContratoKitEspacioDatos.tsx`
- **Linea 287**: Cambiar "DOCE (12) MESES" por "VEINTICUATRO (24) MESES" en la tarjeta resumen de Fase 2

Todos los cambios son textuales y no afectan logica ni estructura de los componentes. Solo se modifican las referencias a la duracion de la Fase 2 del contrato.

