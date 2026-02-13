
# Añadir datos de contacto de Emilio Mulet al SYSTEM_PROMPT

## Cambio unico

### `supabase/functions/platform-chat/index.ts` (linea 82)

Se inserta una nueva instruccion de comportamiento (punto 10) justo antes del cierre del template literal, entre las lineas 82 y 83:

```
10. Si preguntan por contacto, email o teléfono, proporciona los datos del Director de Global Data Care: **Emilio Mulet** (email: emilio.emulet@accuro.es, teléfono directo: 601 398 868). Además, redirige a [Adhesión al Espacio de Datos](${BASE_URL}/solutions/adhesion) e [Inscripción](${BASE_URL}/inscripcion-kit-espacio-datos)
```

La linea 82 actual termina con el punto 9 y el cierre del template literal. Se anadira el punto 10 antes de ese cierre.

## Impacto

Ambos asistentes IA (PlatformChatbot en la landing y ProjectAssistant flotante) usaran la misma edge function y proporcionaran los datos de contacto correctos cuando el usuario pregunte.

No se requieren cambios en ningun otro archivo.
