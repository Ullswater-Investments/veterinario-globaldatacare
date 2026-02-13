
# Conectar ProjectAssistant a la Edge Function platform-chat

## Resumen
Reescribir `src/components/ProjectAssistant.tsx` para reemplazar la logica hardcoded de if/else por llamadas reales a la edge function `platform-chat` con streaming SSE, reutilizando el mismo patron de `PlatformChatbot.tsx`.

## Cambios en un unico archivo

### `src/components/ProjectAssistant.tsx`

**Se elimina:**
- Funcion `getResponse()` completa (lineas 7-39) con todas las reglas if/else
- Logica sincrona de `handleSend()` que generaba respuestas instantaneas

**Se anade:**
- Import de `ReactMarkdown`, `Loader2`, `toast` (de sonner)
- Constante `CHAT_URL` apuntando a la edge function `platform-chat`
- Estado `isLoading` para controlar el indicador de carga
- Funcion asincrona `send()` con:
  - POST a la edge function con historial de mensajes
  - Lectura de stream SSE con `ReadableStream.getReader()` + `TextDecoder`
  - Parseo linea a linea (`data: {json}`) extrayendo `choices[0].delta.content`
  - Actualizacion progresiva del ultimo mensaje asistente (patron `upsertAssistant`)
  - Flush final del buffer
  - Manejo de errores 429 (rate limit), 402 (creditos) y genericos con `toast.error()`
- Renderizado de mensajes asistente con `ReactMarkdown` (soporte negrita, enlaces, listas)
- Indicador visual "Pensando..." con `Loader2` animado mientras llega la respuesta

**Se mantiene intacto:**
- Boton flotante con icono `Sparkles` en esquina inferior izquierda
- Panel desplegable con header `bg-accent`, boton cerrar con `X`
- Estilos de burbujas: usuario (`bg-accent`) y asistente (`bg-secondary/50`)
- Estado `isOpen` para abrir/cerrar
- Posicion `fixed z-50 bottom-24 left-4`
- Mensaje de bienvenida (actualizado para reflejar que ahora es IA real)

**Se actualiza:**
- Mensaje de bienvenida: de "asistente offline" a "asistente IA de VetSpace"
- Input deshabilitado durante carga (`disabled={isLoading}`)
- Boton enviar deshabilitado durante carga

## Sin nuevas dependencias
`react-markdown`, `sonner` y `lucide-react` ya estan instalados.

## Sin cambios en otros archivos
La edge function `platform-chat` ya existe y funciona. No se necesitan cambios en `App.tsx` ni en ningun otro archivo.
