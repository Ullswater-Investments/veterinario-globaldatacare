

# Implementacion del Asistente IA para el Portal Veterinario (VetSpace)

## Resumen
Implementar un asistente IA conversacional con streaming en la seccion "Arquitectura de Confianza" de la landing page, siguiendo la guia proporcionada. Se crearan 3 componentes nuevos, 1 edge function y se modificaran 2 archivos existentes.

## Componentes a crear

### 1. Edge Function: `supabase/functions/platform-chat/index.ts`
- Servidor Deno con CORS headers
- `BASE_URL` = `https://wonder-bloom-flow.lovable.app`
- `SYSTEM_PROMPT` extenso adaptado al sector veterinario con:
  - Identidad: VetSpace / Global Vet Care / ACCURO TECHNOLOGY, S.L.
  - 6 modulos: Gestion Veterinaria, Pasaporte Digital (DPP), Tutor/Pet Parent Wallet, Investigacion One Health, Abastecimiento Inteligente, Excelencia Veterinaria (KPIs)
  - URLs de portales: `/portal/doctor`, `/portal/lab`, `/portal/patient`, `/portal/research`, `/portal/insurance`, `/portal/procurement`
  - URLs de demos: `/demo/tutor`, `/demo/vet`, `/demo/clinic`, `/demo/research`
  - Arquitectura tecnica: FHIR Vet Extension, Gaia-X, blockchain, SSI, DPP, IoT
  - Kit Espacio de Datos: modelo 190 euros/mes, opciones A y B
  - Instrucciones de comportamiento: responder en espanol, incluir enlaces markdown, maximo 300 palabras
- Llamada a Lovable AI Gateway con `google/gemini-3-flash-preview` y streaming
- Manejo de errores 429, 402, 500
- Reenvio del stream SSE al frontend

### 2. Componente: `src/components/home/PlatformChatbot.tsx`
- Tipo de mensajes: `{ role: 'user' | 'assistant'; content: string }`
- URL del chat: `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/platform-chat`
- Mensaje de bienvenida adaptado a veterinaria
- Funcion `send()` con streaming SSE (parseo linea a linea, flush final)
- Renderizado con `react-markdown` (enlaces con target="_blank")
- 4 preguntas iniciales (`INITIAL_SUGGESTIONS`) sobre el portal veterinario
- 3 sets de 4 preguntas de seguimiento (`FOLLOWUP_SUGGESTIONS`) con rotacion
- UI: header con gradiente, ScrollArea 320px, burbujas diferenciadas, indicador "Pensando...", input con Enter

### 3. Componente: `src/components/ProjectAssistant.tsx`
- Boton flotante en esquina inferior derecha con icono Sparkles
- Panel expandible de 480px
- Respuestas basadas en reglas (sin API, sin IA) por keywords:
  - precio/negocio/kit/subvencion -> info sobre modelo de negocio
  - paciente/wallet/tutor -> info sobre portal del tutor
  - pasaporte/dpp/vacuna -> info sobre trazabilidad
  - clinica/veterinario/centro -> info sobre gestion clinica
  - investigacion/research/one health -> info sobre investigacion federada
  - compras/supply/stock -> info sobre abastecimiento
  - kpi/dashboard/indicadores -> info sobre metricas
  - Respuesta generica por defecto

## Archivos a modificar

### 4. `src/pages/Index.tsx`
- Importar `PlatformChatbot`
- Insertar el chatbot dentro de la seccion "Arquitectura de Confianza" (linea ~337), despues del boton "Explorar Arquitectura Tecnica" y antes del cierre de la seccion
- Envolver en un div con titulo "Pregunta a nuestro asistente IA..."

### 5. `supabase/config.toml`
- Anadir configuracion de la nueva edge function:
```
[functions.platform-chat]
verify_jwt = false
```

### 6. `src/App.tsx`
- Importar `ProjectAssistant`
- Renderizar como componente global junto a `WhatsAppButton`

## Dependencias
- Instalar `react-markdown` (no existe actualmente en el proyecto)

## Secretos
- `LOVABLE_API_KEY` ya esta configurado automaticamente -- no requiere accion

## Seccion tecnica detallada

### Streaming SSE (PlatformChatbot)
La funcion `send()` implementa:
1. POST al endpoint con historial de mensajes
2. Lectura con `ReadableStream.getReader()` + `TextDecoder`
3. Parseo linea a linea buscando `data: {json}`
4. Extraccion de `choices[0].delta.content`
5. Actualizacion progresiva del ultimo mensaje asistente (no crear uno nuevo por token)
6. Flush del buffer final para tokens que lleguen sin newline

### Posicion del FloatingChat existente
El proyecto ya tiene un `FloatingChat` en `src/components/ui/FloatingChat.tsx`. El nuevo `ProjectAssistant` se posicionara en la esquina inferior izquierda para no solaparse con el FloatingChat ni el WhatsAppButton que estan a la derecha.

