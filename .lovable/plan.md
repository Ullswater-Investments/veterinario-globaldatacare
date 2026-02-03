

# Plan: Añadir Tarjetas de Perfil en la Página Principal

## Objetivo

Incluir las 4 tarjetas de perfil de stakeholder (Tutor de Mascotas, Médico Veterinario, Director de Clínica, Científico de Datos) en la página `Index.tsx`, replicando exactamente el diseño que ya existe en `KpiDashboardPage.tsx`.

## Ubicación

Las tarjetas se insertarán **entre** la sección de portales (línea 189) y la sección "Arquitectura de Confianza" (línea 192).

```text
┌─────────────────────────────────────────────────────────────┐
│  Sección Portales (6 tarjetas existentes)                   │
│  [GESTIÓN VETERINARIA] [PASAPORTE DIGITAL] [TUTOR/WALLET]  │
│  [INVESTIGACIÓN]       [ABASTECIMIENTO]    [EXCELENCIA]    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  ★ NUEVA SECCIÓN: Explora los Paneles por Perfil ★         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │  Tutor   │ │   Vet    │ │ Director │ │Científico│       │
│  │ Mascotas │ │   Vet.   │ │ Clínica  │ │  Datos   │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  Arquitectura de Confianza                                  │
│  [Interoperabilidad] [Soberanía] [Trazabilidad]            │
└─────────────────────────────────────────────────────────────┘
```

## Diseño de las Tarjetas (Idéntico a la referencia)

Cada tarjeta incluirá:
- **Barra de color superior** con gradiente según el perfil
- **Icono** en caja con gradiente de color
- **Título** principal (ej: "Tutor de Mascotas")
- **Subtítulo** en color (ej: "Patient/Owner" en verde esmeralda)
- **Descripción** del panel
- **Tags/badges** con las funcionalidades
- **Enlace** "Ver Demo →" en verde

## Datos de las Tarjetas

| Perfil | Subtítulo | Gradiente | Icono | Ruta | Tags |
|--------|-----------|-----------|-------|------|------|
| Tutor de Mascotas | Patient/Owner | azul→cian | PawPrint | /demo/tutor | Salud de mascotas, Economía familiar, Privacidad de datos, Tokens de monetización |
| Médico Veterinario | Doctor/Clinician | esmeralda→teal | Stethoscope | /demo/vet | Productividad diaria, Calidad clínica, Hospitalización, Copiloto AI |
| Director de Clínica | Manager/CEO | índigo→púrpura | Building2 | /demo/clinic | Finanzas, Excelencia operativa, Benchmarking, Supply Chain |
| Científico de Datos | Researcher | ámbar→naranja | FlaskConical | /demo/research | Marketplace datos, Federated Learning, Epidemiología, Impacto científico |

## Cambios Técnicos

### Archivo: `src/pages/Index.tsx`

1. **Añadir imports** (línea 7):
   - `Stethoscope`, `Building2` de `lucide-react`
   - Nota: `PawPrint`, `FlaskConical`, `ArrowRight` ya están importados

2. **Añadir array de datos** `profileCards` (después de línea 111, antes del return):
   - Reutilizar exactamente la misma estructura que en `KpiDashboardPage.tsx`

3. **Añadir nueva sección** (entre líneas 189 y 191):
   - Título: "Explora los Paneles por Perfil"
   - Subtítulo: "Cada stakeholder tiene su propio dashboard optimizado"
   - Grid responsivo de 4 tarjetas (1 col móvil, 2 col tablet, 4 col desktop)

## Estructura de la Nueva Sección

```tsx
{/* Profile Cards Section */}
<section className="py-14 bg-slate-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900">
        Explora los Paneles por Perfil
      </h2>
      <p className="text-slate-500 mt-2">
        Cada stakeholder tiene su propio dashboard optimizado
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {profileCards.map((card) => (
        <Card key={card.title} className="...">
          {/* Barra de color, icono, título, subtítulo, descripción, tags, enlace */}
        </Card>
      ))}
    </div>
  </div>
</section>
```

## Resumen de Cambios

| Archivo | Línea | Acción | Descripción |
|---------|-------|--------|-------------|
| `src/pages/Index.tsx` | 7 | MODIFICAR | Añadir imports `Stethoscope`, `Building2` |
| `src/pages/Index.tsx` | ~112 | AÑADIR | Definir array `profileCards` |
| `src/pages/Index.tsx` | 189-191 | AÑADIR | Nueva sección con las 4 tarjetas de perfil |

## Resultado Esperado

La página principal mostrará una nueva sección visualmente atractiva con las 4 tarjetas de perfil, cada una enlazando a su respectiva demo (`/demo/tutor`, `/demo/vet`, `/demo/clinic`, `/demo/research`), justo encima de la sección "Arquitectura de Confianza".

