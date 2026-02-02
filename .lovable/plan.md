

## Plan: Actualizar Textos del Banner Kit Espacio de Datos

### Cambios Requeridos

Se modificará el componente `KitDatosCampaignBanner.tsx` con las siguientes actualizaciones de texto:

| Elemento | Texto Actual | Texto Nuevo |
|----------|-------------|-------------|
| Título | "AYUDAS KIT ESPACIO DE DATOS 2025" | "AYUDAS KIT ESPACIO DE DATOS" |
| Mensaje principal | "Digitaliza tu clínica veterinaria con hasta **25.000€** de subvención europea" | "Digitaliza tu clínica veterinaria con hasta **30.000 €** de Subvención a fondo perdido de RED.ES" |
| Botón CTA | "SOLICITAR INSCRIPCIÓN GRATUITA" | "Solicitar Inscripción por 190€ al mes" |

---

### Archivo a Modificar

**`src/components/home/KitDatosCampaignBanner.tsx`**

Cambios específicos:
- **Línea 19**: Eliminar "2025" del título
- **Línea 35**: Cambiar importe a 30.000 € y añadir "a fondo perdido de RED.ES"
- **Línea 59**: Cambiar texto del botón principal

---

### Resultado Visual Esperado

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│  € AYUDAS KIT ESPACIO DE DATOS                          ⚡ PLAZAS LIMITADAS │
│                                                                             │
│  Digitaliza tu clínica veterinaria con hasta 30.000 € de Subvención        │
│  a fondo perdido de RED.ES                                                 │
│                                                                             │
│  ✓ Tramitación 100% gratuita    ✓ Subvención 85-90%    ✓ Sin letra pequeña │
│                                                                             │
│     [ 🐾 Solicitar Inscripción por 190€ al mes ]   [ Ver Condiciones ]      │
└─────────────────────────────────────────────────────────────────────────────┘
```

