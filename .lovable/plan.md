

## Plan: Unificar las Dos Tarjetas de Pack en Una Sola

### Objetivo
Consolidar los dos cuadros actuales (Pack Esencial 15.000€ y Pack Integral 30.000€) en una única tarjeta que muestre:
- Un único pack (no hay dos opciones separadas)
- Cuotas de **190€/mes durante 6 meses** (total 1.140€ + IVA)
- Rango de subvención: **desde 15.000€ hasta 30.000€**

---

### Cambios en `src/pages/GuiaKitEspacioDatos.tsx`

#### Situación Actual (líneas 430-500)
- Grid de 2 columnas con 2 tarjetas separadas
- Pack Esencial: 15.000€ con 760€ (126€/mes × 6)
- Pack Integral: 30.000€ con 1.140€ (190€/mes × 6)

#### Nueva Estructura (1 tarjeta única centrada)

| Elemento | Contenido Nuevo |
|----------|-----------------|
| **Título sección** | "¿Cuánto Puedo Conseguir?" (sin cambios) |
| **Subtítulo** | "Importe de subvención según tu clínica" |
| **Badge** | "Kit Espacio de Datos" |
| **Importe subvención** | "15.000€ - 30.000€" (rango) |
| **Descripción** | "Subvención a fondo perdido según criterios RED.ES" |
| **Lista servicios** | Todos los módulos del ecosistema |
| **Separador** | --- |
| **Pago anticipado** | "1.140€ + IVA" |
| **Desglose cuotas** | "(190€/mes × 6 meses)" |

---

### Diseño Visual del Nuevo Cuadro

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              [Kit Espacio de Datos]                         │
│                                                             │
│           15.000€ — 30.000€                                 │
│     Subvención a fondo perdido según criterios RED.ES      │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  ✓ Todos los módulos del ecosistema                        │
│  ✓ Wallet del tutor completo                               │
│  ✓ Pasaporte digital (DPP)                                 │
│  ✓ Investigación One Health                                │
│  ✓ Dashboard KPIs avanzado                                 │
│  ✓ Tramitación administrativa 100% incluida                │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│                    Pago anticipado                          │
│                    1.140€ + IVA                             │
│                 (190€/mes × 6 meses)                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### Cambios Técnicos

**Líneas a modificar:** 420-503

1. **Grid layout**: Cambiar de `grid-cols-2` a un único contenedor centrado con `max-w-xl mx-auto`
2. **Eliminar** la primera tarjeta (Pack Esencial)
3. **Modificar** la segunda tarjeta:
   - Quitar badge "Recomendado" y "Pack Integral"
   - Nuevo badge: "Kit Espacio de Datos"
   - Cambiar título de "30.000€" a "15.000€ — 30.000€"
   - Actualizar descripción del rango
   - Añadir el servicio de "Tramitación administrativa 100% incluida"
   - Mantener el pago de 1.140€ (190€ × 6 meses)

---

### Código Resultante (Resumen)

```tsx
<div className="max-w-xl mx-auto">
  <motion.div {...fadeInUp}>
    <Card className="border-2 border-primary/50 bg-primary/5">
      <CardHeader className="text-center pb-4">
        <Badge className="w-fit mx-auto mb-2 bg-primary">
          Kit Espacio de Datos
        </Badge>
        <CardTitle className="text-4xl font-bold text-primary">
          15.000€ — 30.000€
        </CardTitle>
        <CardDescription>
          Subvención a fondo perdido según criterios RED.ES
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Lista de 6 servicios incluidos */}
        <Separator className="my-4" />
        <div className="text-center">
          <p>Pago anticipado</p>
          <p className="text-2xl font-bold">
            1.140€ <span>+ IVA</span>
          </p>
          <p>(190€/mes × 6 meses)</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
</div>
```

---

### Archivo a Modificar

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/pages/GuiaKitEspacioDatos.tsx` | **MODIFICAR** | Unificar las 2 tarjetas de pricing en 1 sola con el rango 15k-30k y cuotas de 190€/mes |

