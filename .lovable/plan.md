

## Plan: Nueva Página Explicativa "Guía Kit Espacio de Datos"

### Objetivo
Crear una nueva página informativa detallada que explique en profundidad los servicios del Espacio de Datos de Salud Animal, los beneficios de las ayudas Kit Espacio de Datos, y el funcionamiento del programa de subvenciones europeas. Esta página se enlazará desde el botón "Ver Propuesta Completa" en la página de condiciones.

---

### Nueva Página: `/guia-kit-espacio-datos`

**Ruta:** `/guia-kit-espacio-datos`  
**Archivo:** `src/pages/GuiaKitEspacioDatos.tsx`

#### Estructura de Contenido

| Sección | Contenido |
|---------|-----------|
| **Hero** | Titulo principal + badge de convocatoria abierta + plazo limite 24 Feb |
| **1. ¿Qué es el Kit Espacio de Datos?** | Explicacion del programa del Gobierno de Espana financiado con fondos Next Generation EU |
| **2. ¿Qué es el Espacio de Datos de Salud Animal?** | Descripcion de la infraestructura tecnologica federada para clinicas veterinarias |
| **3. Servicios Incluidos** | Grid de 8-10 servicios con iconos (FHIR, DPP, Wallet, One Health, KPIs, etc.) |
| **4. Beneficios de la Ayuda** | Cards comparativas: Sin Ayuda vs Con Ayuda |
| **5. ¿Cuánto puedo conseguir?** | Visualizacion de la subvencion (15.000-30.000 euros) |
| **6. ¿Cómo funciona el proceso?** | Timeline de 4 pasos (Adhesion, Solicitud, Concesion, Justificacion) |
| **7. Preguntas Frecuentes** | Accordion con FAQs sobre elegibilidad, plazos y requisitos |
| **8. CTA Final** | Botones para inscripcion y ver condiciones |

---

### Secciones Detalladas

#### 1. ¿Qué es el Kit Espacio de Datos?
- Programa del Gobierno de Espana
- Financiado por fondos europeos Next Generation EU
- Objetivo: fomentar la soberania del dato en PYMEs
- Subvencion a fondo perdido (no es un credito)
- Gestionado por RED.ES

#### 2. ¿Qué es el Espacio de Datos de Salud Animal?
- Infraestructura tecnologica federada
- Interoperabilidad veterinaria con estandar FHIR
- Conectores EDC (Eclipse Dataspace Components)
- Privacidad y soberania del dato
- Red colaborativa One Health

#### 3. Servicios Incluidos (Grid de 6 modulos principales)
| Modulo | Descripcion |
|--------|-------------|
| Gestion Clinica Digital (FHIR) | Dashboard 360° veterinario con conexion al PMS existente |
| Wallet del Tutor | App movil con historial de mascota, citas y documentos |
| Pasaporte Digital (DPP) | Trazabilidad de vacunas, microchips y medicamentos |
| Investigacion One Health | IA Federada y Marketplace de datos veterinarios |
| Central de Compras | Pedidos predictivos con descuentos de red |
| Dashboard KPIs | Inteligencia operativa con benchmarking |

#### 4. Beneficios de la Ayuda
- Cobertura del 100% de costes de implantacion
- Tramitacion administrativa 100% incluida
- Soporte tecnico durante todo el proceso
- Acceso inmediato a la plataforma
- Sin riesgo de impago (solo pagas la entrada)

#### 5. Importes de Subvencion
- Pack Esencial: hasta 15.000 euros
- Pack Integral: hasta 30.000 euros
- Pago anticipado minimo: desde 1.140 euros (fraccionado)

---

### Archivos a Crear/Modificar

| Archivo | Accion | Descripcion |
|---------|--------|-------------|
| `src/pages/GuiaKitEspacioDatos.tsx` | **CREAR** | Nueva pagina explicativa completa |
| `src/App.tsx` | **MODIFICAR** | Añadir ruta `/guia-kit-espacio-datos` |
| `src/pages/CondicionesKitEspacioDatos.tsx` | **MODIFICAR** | Cambiar enlace del boton "Ver Propuesta Completa" a la nueva pagina |

---

### Detalles Tecnicos

#### Componentes UI a utilizar (ya existentes):
- `Card`, `CardHeader`, `CardContent`, `CardTitle`, `CardDescription`
- `Badge`
- `Button`
- `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`
- `Separator`
- `motion.div` (Framer Motion para animaciones)

#### Iconos Lucide a utilizar:
- `Euro`, `Clock`, `Shield`, `Users`, `FileText`, `CheckCircle2`
- `Building2`, `Smartphone`, `Network`, `BrainCircuit`
- `ShoppingCart`, `BarChart4`, `PawPrint`, `ArrowRight`

---

### Flujo de Navegacion Actualizado

```
/condiciones-kit-espacio-datos
    |
    +-- [Solicitar Inscripcion] --> /inscripcion-kit-espacio-datos
    |
    +-- [Ver Propuesta Completa] --> /guia-kit-espacio-datos (NUEVA)
    |
    +-- [Ver Contrato Completo] --> /inscripcion-kit-espacio-datos
```

---

### Estimacion de Implementacion

La nueva pagina tendra aproximadamente 400-500 lineas de codigo, siguiendo el estilo visual de las paginas existentes (`CondicionesKitEspacioDatos.tsx` y `PropuestaKitEspacioDatos.tsx`).

