
# Plan: Añadir Tarjetas de Perfil KPI en KpiDashboardPage

## Objetivo

Añadir las 4 tarjetas de perfil de usuario (Tutor de Mascotas, Médico Veterinario, Director de Clínica, Científico de Datos) en la sección seleccionada de `KpiDashboardPage.tsx`, replicando exactamente el diseño mostrado en las imágenes de referencia.

## Ubicación

Las tarjetas se añadirán en la sección "Una Visión 360° alimentada por 3 fuentes" (línea 113), justo **debajo** de las 3 tarjetas existentes de flujo de datos.

## Diseño de las Tarjetas

Cada tarjeta incluirá:
- Barra de color superior con gradiente según el perfil
- Icono en caja con gradiente de color
- Título principal (ej: "Tutor de Mascotas")
- Subtítulo en color (ej: "Patient/Owner" en verde)
- Descripción del panel
- Tags/badges con las funcionalidades
- Enlace "Ver Demo →" en verde

## Layout

- **Desktop**: 4 tarjetas en una fila (`grid-cols-4`)
- **Tablet**: 2 tarjetas por fila (`md:grid-cols-2`)
- **Móvil**: 1 tarjeta por fila (`grid-cols-1`)

## Datos de las Tarjetas

```text
1. Tutor de Mascotas (Patient/Owner)
   - Gradiente: azul → cian
   - Icono: PawPrint
   - Tags: Salud de mascotas, Economía familiar, Privacidad de datos, Tokens de monetización

2. Médico Veterinario (Doctor/Clinician)
   - Gradiente: esmeralda → teal
   - Icono: Stethoscope
   - Tags: Productividad diaria, Calidad clínica, Hospitalización, Copiloto AI

3. Director de Clínica (Manager/CEO)
   - Gradiente: índigo → púrpura
   - Icono: Building2
   - Tags: Finanzas, Excelencia operativa, Benchmarking, Supply Chain

4. Científico de Datos (Researcher)
   - Gradiente: ámbar → naranja
   - Icono: FlaskConical
   - Tags: Marketplace datos, Federated Learning, Epidemiología, Impacto científico
```

## Cambios Técnicos

### Archivo: `src/pages/KpiDashboardPage.tsx`

1. **Añadir imports** para los iconos adicionales:
   - `PawPrint`, `Building2`, `FlaskConical` de lucide-react
   - `Card`, `CardContent` de los componentes UI

2. **Añadir array de datos** con los 4 perfiles (reutilizando la estructura de `demo/index.tsx`)

3. **Añadir nueva subsección** después de las 3 tarjetas de "flujo de datos" (después de la línea 156):
   - Título: "Explora los Paneles por Perfil"
   - Grid de 4 tarjetas con el diseño exacto de las imágenes

## Estructura Visual Final

```text
┌─────────────────────────────────────────────────────────────────┐
│  Una Visión 360° alimentada por 3 fuentes                       │
│                                                                 │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐                  │
│  │Voz Tutor │    │Flujo Op. │    │Result.Cl.│                  │
│  └──────────┘    └──────────┘    └──────────┘                  │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  Explora los Paneles por Perfil                                 │
│                                                                 │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐               │
│  │ Tutor  │  │  Vet   │  │Director│  │Científ.│               │
│  │Mascotas│  │  Vet.  │  │Clínica │  │ Datos  │               │
│  └────────┘  └────────┘  └────────┘  └────────┘               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Resumen de Cambios

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/pages/KpiDashboardPage.tsx` | MODIFICAR | Añadir imports, array de perfiles, y sección de tarjetas |

## Código a Añadir

### Nuevos Imports (línea 3-18)
- `PawPrint`
- `Building2`
- `FlaskConical`
- `Card`, `CardContent` de `@/components/ui/card`
- `Link` ya existe

### Array de Perfiles (después de línea 22)
Definir `profileCards` con los 4 perfiles y sus datos

### Nueva Sección (después de línea 156, dentro de la sección existente)
- Separador visual
- Título "Explora los Paneles por Perfil"
- Grid responsivo con las 4 tarjetas
- Cada tarjeta con:
  - Barra de color superior
  - Icono con gradiente
  - Título y subtítulo
  - Descripción
  - Tags de funcionalidades
  - Enlace "Ver Demo →"
