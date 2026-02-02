

## Plan: Crear Página "Condiciones del Kit Espacio de Datos" con Gráficos Explicativos

### Objetivo
Crear una nueva página `/condiciones-kit-espacio-datos` que presente de forma visual y clara las condiciones contractuales extraídas del Contrato de Adhesión, utilizando gráficos, iconos, tarjetas y diagramas explicativos para facilitar la comprensión.

---

## Parte 1: Condiciones Clave a Visualizar

Basándome en el análisis del Contrato de Adhesión (`ContractContent.tsx`), estas son las condiciones principales que se presentarán:

| Condición | Cláusula | Importancia Visual |
|-----------|----------|-------------------|
| **Estructura de 2 Fases** | Cláusula 2 | Timeline/Diagrama de flujo |
| **Fase 1: 6 meses irrevocable** | Cláusula 2.1 | Card destacada (amber) |
| **Fase 2: Prórroga automática** | Cláusula 2.2 | Card destacada (green) |
| **Precio Fase 1: 1.140€ (190€/mes x 6)** | Cláusula 3.1 | Calculadora visual |
| **Precio Fase 2: Importe de la subvención** | Cláusula 3.2 | Diagrama de flujo de fondos |
| **Financiación Hokodo** | Cláusula 4 | Infografía de pago |
| **Acta de Conformidad** | Cláusula 5 | Paso a paso visual |
| **Mandato de Representación** | Cláusula 6 | Iconografía proceso |
| **Separación pagos vs. incidencias** | Cláusula 7 | Diagrama de 2 columnas |

---

## Parte 2: Estructura de la Página

```text
/condiciones-kit-espacio-datos

┌─────────────────────────────────────────────────────────────────────────────┐
│  HEADER: Navegación + Logo                                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  HERO: "Condiciones Transparentes del Kit Espacio de Datos"                 │
│  Subtítulo: "Todo lo que necesitas saber antes de inscribirte"              │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  SECCIÓN 1: RESUMEN EJECUTIVO (Tarjetas de 3 columnas)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                       │
│  │ 💰 190€/mes  │  │ ⏱️ 6 meses   │  │ 🎯 30.000€   │                       │
│  │ Cuota fija   │  │ Fase inicial │  │ Subvención   │                       │
│  └──────────────┘  └──────────────┘  └──────────────┘                       │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  SECCIÓN 2: ESTRUCTURA DE FASES (Timeline Interactivo)                      │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                                                                     │    │
│  │   FASE 1 (Irrevocable)          FASE 2 (Condicional)               │    │
│  │   ┌─────────────────┐          ┌─────────────────┐                  │    │
│  │   │ 6 MESES         │────────▶│ 12 MESES        │                  │    │
│  │   │ 1.140€ total    │          │ = Subvención    │                  │    │
│  │   │ (190€ x 6)      │          │ (15.000-30.000€)│                  │    │
│  │   └─────────────────┘          └─────────────────┘                  │    │
│  │                                                                     │    │
│  │   ⚠️ Sin cancelación           ✅ Solo si aprobada                  │    │
│  │      anticipada                   la subvención                     │    │
│  │                                                                     │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  SECCIÓN 3: DESGLOSE ECONÓMICO (Infografía de Flujo)                        │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────┐          │
│  │  TU INVERSIÓN          →    RETORNO POTENCIAL                 │          │
│  │  ┌─────────────┐            ┌─────────────┐                   │          │
│  │  │ 1.140€      │            │ 30.000€     │                   │          │
│  │  │ + IVA       │            │ Subvención  │                   │          │
│  │  └─────────────┘            └─────────────┘                   │          │
│  │                                                               │          │
│  │  ROI: 26x sobre tu inversión inicial                          │          │
│  └───────────────────────────────────────────────────────────────┘          │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  SECCIÓN 4: PROCESO DE PAGO (Cards con Hokodo)                              │
│                                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ Mes 1       │  │ Mes 2       │  │ Mes 3       │  │ ...Mes 6    │         │
│  │ 190€+IVA    │  │ 190€+IVA    │  │ 190€+IVA    │  │ 190€+IVA    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                                              │
│  📌 Financiación gestionada por Hokodo (entidad financiera externa)         │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  SECCIÓN 5: QUÉ INCLUYE TU CUOTA (Grid de servicios)                        │
│                                                                              │
│  ✅ Acceso al Espacio de Datos Federado                                     │
│  ✅ Consultoría técnica y administrativa                                    │
│  ✅ Tramitación completa de la subvención                                   │
│  ✅ Redacción de memoria técnica                                            │
│  ✅ Presentación ante RED.ES                                                │
│  ✅ Justificación del proyecto                                              │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  SECCIÓN 6: CONDICIONES IMPORTANTES (Acordeón/FAQ)                          │
│                                                                              │
│  ▼ ¿Puedo cancelar durante los 6 primeros meses?                            │
│    No. La Fase 1 es irrevocable porque los recursos se ponen               │
│    a disposición desde el día 1.                                            │
│                                                                              │
│  ▼ ¿Qué pasa si me conceden la subvención?                                  │
│    El contrato se prorroga automáticamente 12 meses adicionales.           │
│                                                                              │
│  ▼ ¿Qué es el Acta de Conformidad?                                          │
│    Es el documento que certifica la entrega del servicio y activa          │
│    las obligaciones de pago.                                                │
│                                                                              │
│  ▼ ¿Quién tramita la subvención?                                            │
│    VetSpace Technology S.L. actúa como tu representante voluntario.        │
│                                                                              │
│  ▼ ¿Qué pasa si tengo una incidencia técnica?                               │
│    Las incidencias se gestionan por SLA, pero no afectan los pagos         │
│    comprometidos con la entidad financiera.                                 │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  SECCIÓN 7: AVISO LEGAL                                                      │
│  Card con texto explicativo sobre la naturaleza vinculante del contrato    │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  CTA FINAL                                                                   │
│  [📝 Solicitar Inscripción por 190€/mes]  [📄 Descargar Contrato PDF]       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Parte 3: Componentes Visuales Específicos

### 3.1 Timeline de Fases (Diagrama Horizontal)

```text
      ┌───────────────────────────┐         ┌───────────────────────────┐
      │      FASE 1               │         │      FASE 2               │
      │   ┌─────────────────┐     │         │   ┌─────────────────┐     │
      │   │   6 MESES       │     │─────────│   │  12 MESES       │     │
      │   │  IRREVOCABLE    │     │         │   │  AUTOMÁTICA     │     │
      │   └─────────────────┘     │         │   └─────────────────┘     │
      │                           │         │                           │
      │   💰 190€/mes x 6         │         │   💰 = Subvención         │
      │   = 1.140€ + IVA          │         │   (15.000-30.000€)        │
      │                           │         │                           │
      │   🔒 Sin cancelación      │         │   ✅ Solo si aprobada     │
      └───────────────────────────┘         └───────────────────────────┘
                   │                                    │
                   ▼                                    ▼
           Acceso inmediato                    Continuidad del
           a la plataforma                     ecosistema completo
```

### 3.2 Calculadora Visual de ROI

```text
  ┌─────────────────────────────────────────────────────────────────┐
  │                                                                 │
  │   TU INVERSIÓN                 VALOR TECNOLÓGICO                │
  │   ┌──────────────┐             ┌──────────────┐                 │
  │   │              │             │              │                 │
  │   │   1.140€     │     →       │  30.000€     │                 │
  │   │   + IVA      │             │  Subvención  │                 │
  │   │              │             │  RED.ES      │                 │
  │   └──────────────┘             └──────────────┘                 │
  │                                                                 │
  │   ════════════════════════════════════════════                  │
  │   ROI = 26x sobre tu inversión inicial                          │
  │   Financiación: 85-90% cubierta por fondos europeos             │
  │                                                                 │
  └─────────────────────────────────────────────────────────────────┘
```

### 3.3 Grid de Cuotas Mensuales

Seis cards horizontales mostrando cada cuota de 190€/mes con indicadores de estado (pagado/pendiente).

---

## Parte 4: Archivos a Crear/Modificar

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/pages/CondicionesKitEspacioDatos.tsx` | **CREAR** | Página completa con todas las secciones visuales |
| `src/App.tsx` | **MODIFICAR** | Añadir ruta `/condiciones-kit-espacio-datos` |
| `src/components/home/KitDatosCampaignBanner.tsx` | **MODIFICAR** | Cambiar enlace "Ver Condiciones" a la nueva página |

---

## Parte 5: Tecnologías y Componentes UI

| Elemento | Implementación |
|----------|----------------|
| Hero Section | Gradient background + título centrado |
| Cards de resumen | Grid 3 columnas con shadcn/ui Card |
| Timeline de fases | Flex horizontal con conectores CSS |
| Calculadora ROI | Card con iconos y números grandes |
| Grid de cuotas | Grid 6 columnas (responsive) |
| FAQ/Acordeón | `@radix-ui/react-accordion` (ya instalado) |
| Iconos | Lucide React (ya instalado) |
| Animaciones | Framer Motion (ya instalado) |

---

## Parte 6: Contenido de Secciones Principales

### Sección 1: Resumen Ejecutivo (3 Cards)

| Card | Título | Valor | Descripción |
|------|--------|-------|-------------|
| 1 | Cuota Mensual | 190€ + IVA | Durante 6 meses iniciales |
| 2 | Fase Inicial | 6 meses | Compromiso irrevocable |
| 3 | Subvención | Hasta 30.000€ | A fondo perdido de RED.ES |

### Sección 5: Qué Incluye Tu Cuota

- Acceso al Espacio de Datos Federado de Salud Animal
- Consultoría técnica y administrativa completa
- Tramitación de la ayuda "Kit Espacio de Datos"
- Redacción de memoria técnica para RED.ES
- Presentación de solicitud ante el organismo competente
- Justificación completa del proyecto subvencionado
- Soporte durante todo el proceso de concesión

### Sección 6: FAQ con Condiciones Importantes

**Q: ¿Puedo cancelar durante los 6 primeros meses?**
A: No. La Fase 1 es irrevocable dado que los recursos técnicos y de consultoría se ponen a disposición desde el día 1 de la firma.

**Q: ¿Qué pasa si me conceden la subvención?**
A: El contrato se prorroga automáticamente por 12 meses adicionales. El precio de esta Fase 2 será equivalente al importe de la subvención concedida.

**Q: ¿Qué es el Acta de Conformidad?**
A: Es un documento digital que certifica la recepción del servicio y activa irrevocablemente las obligaciones de pago ante la entidad financiera.

**Q: ¿Quién tramita la subvención?**
A: VetSpace Technology S.L. actúa como tu Representante Voluntario ante RED.ES. Debes facilitar la documentación necesaria en 5 días hábiles.

**Q: ¿Y si hay incidencias técnicas?**
A: Las reclamaciones técnicas se gestionan por canales de soporte (SLA), pero no afectan el flujo de pagos comprometido con Hokodo.

---

## Parte 7: Sección de Aviso Legal

Card destacada con borde rojo/ámbar que incluya:

- "Este documento tiene carácter contractual vinculante"
- "Debe ser revisado por asesoría jurídica antes de su firma"
- "La aceptación digital tiene la misma validez que la firma manuscrita"

---

## Resumen de Implementación

La nueva página presentará de forma visual y comprensible:

1. **Estructura económica clara**: 190€/mes x 6 = 1.140€ + IVA
2. **Diagrama de 2 fases**: Timeline con Fase 1 irrevocable y Fase 2 condicional
3. **ROI visual**: Inversión de 1.140€ vs. retorno potencial de 30.000€
4. **Grid de cuotas**: Visualización de los 6 pagos mensuales
5. **Servicios incluidos**: Lista de lo que cubre la cuota
6. **FAQ legal**: Preguntas frecuentes sobre condiciones importantes
7. **Avisos legales**: Información sobre la naturaleza vinculante del contrato
8. **CTAs claros**: Botones para inscribirse o ver el contrato completo

