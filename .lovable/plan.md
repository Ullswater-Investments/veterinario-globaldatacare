

# Plan: Eliminar el Asistente IA del Proyecto

## Objetivo

Eliminar completamente el componente `ProjectAssistant` (el chatbot flotante azul con el icono de Sparkles) de la aplicación.

---

## Cambios Necesarios

### 1. Modificar src/App.tsx

| Línea | Acción | Detalle |
|-------|--------|---------|
| 74 | **ELIMINAR** | `import ProjectAssistant from "@/components/ProjectAssistant";` |
| 113 | **ELIMINAR** | `<ProjectAssistant />` |

### 2. Eliminar src/components/ProjectAssistant.tsx

| Archivo | Acción |
|---------|--------|
| `src/components/ProjectAssistant.tsx` | **ELIMINAR** archivo completo (168 líneas) |

---

## Resultado

Después de estos cambios:
- El botón flotante azul "Asistente IA Proyecto" desaparecerá
- El botón verde de WhatsApp permanecerá visible (es un componente separado)
- Se reducirá el bundle de la aplicación (~2KB menos)

---

## Resumen de Cambios

| Archivo | Tipo | Líneas Afectadas |
|---------|------|------------------|
| `src/App.tsx` | MODIFICAR | -2 líneas (import + render) |
| `src/components/ProjectAssistant.tsx` | ELIMINAR | -168 líneas |

**Total: 2 archivos, -170 líneas**

