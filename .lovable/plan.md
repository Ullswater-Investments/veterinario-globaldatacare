
# Plan: Nueva Página de Aviso Legal Completa

## Objetivo
Crear una página de Aviso Legal profesional y legalmente completa para ACCURO TECHNOLOGY / GLOBAL DATA CARE, corrigiendo los errores actuales y añadiendo todas las secciones necesarias según LSSI-CE y RGPD.

## Cambios Propuestos

### 1. Actualizar `src/pages/LegalNotice.tsx`

Reescribir completamente la página con las siguientes secciones:

**Cabecera**
- Título: "Aviso Legal y Política de Privacidad"
- Subtítulo: Referencia a ACCURO TECHNOLOGY, S.L.
- Fecha de última actualización

**Sección 1: Información del Titular**
```
ACCURO TECHNOLOGY, S.L.
CIF: B87617981
Domicilio: C/ Colquide, 6 – Portal 2, 1ª planta, Edificio Prisma de Las Rozas – Madrid
Teléfono: (+34) 91 710 48 40
Email: ivan.becerro@accuro.es
```

**Sección 2: Objeto y Ámbito de Aplicación**
- Descripción de la plataforma Global Data Care
- Naturaleza demostrativa/comercial del entorno
- Aclaración sobre datos ficticios/sintéticos

**Sección 3: Condiciones de Uso**
- Uso aceptable del sitio
- Prohibiciones (uso fraudulento, ingeniería inversa, etc.)
- Requisitos de edad (mayores de 18 años para contratar)

**Sección 4: Propiedad Intelectual**
- Titularidad de contenidos, logos, código
- Prohibición de reproducción sin autorización
- Marcas registradas

**Sección 5: Protección de Datos Personales**
- Responsable del tratamiento: ACCURO TECHNOLOGY, S.L.
- Finalidades: gestión de contactos, tramitación Kit Espacio Datos
- Base legal: consentimiento, ejecución contractual, interés legítimo
- Destinatarios: RED.ES, HOKODO (para financiación)
- Derechos ARCO+POL: acceso, rectificación, supresión, oposición, portabilidad, limitación
- Plazo de conservación
- Cómo ejercer derechos (email DPO)

**Sección 6: Política de Cookies**
- Tipos de cookies utilizadas (técnicas, analíticas)
- Finalidad de cada tipo
- Cómo gestionar/eliminar cookies
- Enlace a configuración

**Sección 7: Exclusión de Responsabilidad**
- Disponibilidad del servicio
- Enlaces a terceros
- Decisiones basadas en contenido demo

**Sección 8: Ley Aplicable y Jurisdicción**
- Legislación española
- Juzgados y Tribunales de Madrid

**Sección 9: Modificaciones**
- Derecho a actualizar el aviso legal
- Fecha de última revisión

**Footer de página**
- Links a: Inicio, Condiciones Kit Espacio Datos, Inscripción
- Datos de empresa completos

## Diseño Visual

Mantener el estilo actual (card centrada, fondo claro) pero:
- Añadir navegación lateral para secciones (en desktop)
- Usar acordeones colapsables para secciones largas (opcional)
- Iconos sutiles para cada sección principal
- Tabla de contenidos clickable al inicio

## Estructura de Componentes

```
src/pages/LegalNotice.tsx (actualizar)
└── Secciones inline con IDs para anclas
```

## Archivos a Modificar

| Archivo | Acción |
|---------|--------|
| `src/pages/LegalNotice.tsx` | Reescribir contenido completo |

## Consideraciones Técnicas

- Mantener SEO: title, meta description, canonical URL
- Añadir anclas (IDs) a cada sección para navegación directa
- Responsive: funcionar bien en móvil
- Accesibilidad: estructura de headings correcta (h1, h2, h3)

## Datos a Incluir (Confirmados)

```
Empresa: ACCURO TECHNOLOGY, S.L.
CIF: B87617981
Dirección: C/ Colquide, 6 – Portal 2, 1ª planta, Edificio Prisma de Las Rozas – Madrid
Teléfono: (+34) 91 710 48 40
Email contacto: ivan.becerro@accuro.es
Email general: emilio.mulet@globaldatacare.es
Marca comercial: GLOBAL DATA CARE
```
