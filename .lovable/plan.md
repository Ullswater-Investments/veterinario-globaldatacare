
# Corregir datos del Kit Espacio de Datos en el SYSTEM_PROMPT

## Cambio unico

### `supabase/functions/platform-chat/index.ts` (lineas 55-60)

Reemplazar la seccion actual del Kit Espacio de Datos:

```
- Cuota: 190 EUR/mes — subvencionable hasta 100% via KTED
- Opcion A: Adhesion directa al espacio de datos veterinario
- Opcion B: Adhesion con migracion de datos desde sistema actual
- Subvencion: Hasta 25.000 EUR para pymes de 10-49 empleados
- Mas informacion: enlaces
```

Por el texto corregido:

```
- Cuota de adhesion y suscripcion: 190 EUR/mes (IVA no incluido)
- Subvencion: Hasta 30.000 EUR por entidad adherida (programa KTED de Red.es)
- Plazo de inscripcion: Hasta el 20 de Marzo de 2026
- Fase 1: 6 meses de implementacion
- Fase 2: 24 meses de renovacion automatica
- Garantia: 90% de exito en obtencion de la subvencion
- Mas informacion: enlaces (se mantienen)
```

## Datos corregidos

| Campo | Antes | Despues |
|-------|-------|---------|
| Cuota | 190 EUR/mes subvencionable 100% | 190 EUR/mes (IVA no incluido) |
| Opciones A/B | Existian | Eliminadas |
| Subvencion | 25.000 EUR para pymes 10-49 | 30.000 EUR por entidad adherida |
| Fase 1 | No mencionada | 6 meses |
| Fase 2 | No mencionada | 24 meses renovacion automatica |
| Garantia | No mencionada | 90% exito |

La edge function se redesplegara automaticamente tras el cambio.
