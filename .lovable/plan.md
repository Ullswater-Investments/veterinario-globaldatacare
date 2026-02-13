
# Implementacion del boton "Asistente IA" en todo el portal

## Resumen
Anadir un boton "Asistente IA" en la navegacion superior de todas las paginas, que al pulsarlo navegue a la landing page y haga scroll automatico hasta el chatbot PlatformChatbot. Se modificaran 5 archivos.

## Cambios a realizar

### 1. `src/components/ui/NavigationControls.tsx`
- Importar `MessageCircle` de lucide-react
- Anadir un tercer boton con `asChild` + `<a href="/#asistente-ia">` para que el navegador gestione el hash y el scroll
- Esto cubre automaticamente todas las paginas que usan este componente (Dashboard, Wallet, Research, etc.)

### 2. `src/pages/Index.tsx` (linea 340)
- Anadir `id="asistente-ia"` al div contenedor del chatbot (el `<div className="mt-16">` que envuelve el titulo y PlatformChatbot)

### 3. `src/components/ScrollToTop.tsx`
- Extraer `hash` de `useLocation()`
- Si hay hash, buscar el elemento con `document.getElementById` y hacer `scrollIntoView({ behavior: "smooth" })` con un `setTimeout` de 100ms
- Si no hay hash, mantener el comportamiento actual (scroll al inicio)

### 4. `src/pages/tech/TechIndex.tsx` (linea ~48-57)
- Importar `MessageCircle`
- Anadir boton `<Button asChild variant="ghost"><a href="/#asistente-ia">...</a></Button>` junto al boton "Volver al Inicio"

### 5. `src/pages/portals/InsurancePortal.tsx` (linea ~48-57)
- Importar `MessageCircle`
- Anadir boton con estilo tema oscuro (`text-white hover:bg-slate-700`) junto al boton "Volver al Inicio"

### 6. `src/pages/CondicionesKitEspacioDatos.tsx` (linea ~72-84)
- Importar `MessageCircle`
- Anadir enlace `<a href="/#asistente-ia">` en el header sticky, entre el enlace "Volver al inicio" y el boton "Solicitar Inscripcion"

### Pagina omitida
- `StrategicPresentation.tsx`: presentacion a pantalla completa con boton circular de cierre, diseno incompatible con boton de texto.

## Seccion tecnica

### Por que `asChild` + `<a>` en vez de `navigate()`
React Router `navigate('/#asistente-ia')` no gestiona el scroll al hash de forma nativa. Un enlace `<a href="/#asistente-ia">` si lo hace, y combinado con el fix de ScrollToTop garantiza scroll suave al elemento.

### Orden de ejecucion
1. ScrollToTop (fix del hash) - necesario para que el scroll funcione
2. Index.tsx (ancla id) - necesario como destino
3. NavigationControls (boton centralizado) - cubre la mayoria de paginas
4. Paginas con nav personalizada - TechIndex, InsurancePortal, CondicionesKitEspacioDatos
