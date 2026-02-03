

# Plan: Nueva Pagina de Adhesion para Compras Federadas

## Resumen Ejecutivo

Crear una nueva pagina especializada `/portal/procurement/adhesion` que explique en profundidad la relacion entre el Espacio de Datos Federado de Salud Animal y el sistema de compras coordinadas, incluyendo el formulario completo de adhesion con contrato vinculante.

---

## Contexto del Boton "Ver Central Predictiva"

El boton actual enlaza a `/portal/supply` (SupplyChainPage) que es una demo tecnica del sistema de compras predictivas. Sin embargo, el concepto de "Central Predictiva" es mucho mas amplio e implica:

1. **Adhesion al Espacio de Datos** - Requisito previo para acceder a la central
2. **Integracion ERP/CRM** - Conexion de la clinica al ecosistema
3. **Compras Coordinadas** - Beneficio de la agregacion de demanda
4. **IA Federada** - Algoritmos predictivos sin compartir datos sensibles

---

## Estructura de la Nueva Pagina

### Archivo: `src/pages/portals/ProcurementAdhesion.tsx`

**Seccion 1: HERO - Central de Compras Federada**
- Titulo: "Adhierete a la Central de Compras de VetSpace-X"
- Subtitulo: "Compras predictivas, ahorro colectivo, soberania individual"
- Badge con enlace al PDF de Espacios de Datos Elegibles

**Seccion 2: EL CONCEPTO - Compras sin Ceder Datos**
Explicacion visual de como funciona la agregacion de demanda:
- Tu clinica mantiene sus datos en su infraestructura
- Solo comparte metricas de consumo agregadas (no historiales clinicos)
- La red negocia precios de mayorista
- Los proveedores entregan directamente a cada clinica

**Seccion 3: PILARES DE LAS COMPRAS FEDERADAS**

| Pilar | Descripcion | Beneficio |
|-------|-------------|-----------|
| **Conexion ERP/CRM** | Tu software de gestion se sincroniza con la red | Automatizacion de pedidos basada en agenda |
| **IA Predictiva Federada** | Algoritmos que analizan tu consumo sin ver tus datos | Nunca te falta ni te sobra stock |
| **Agregacion de Demanda** | Tu pedido se suma al de cientos de clinicas | Precios de mayorista para clinica pequena |
| **Soberania del Dato** | Los datos clinicos nunca salen de tu infraestructura | Cumplimiento RGPD garantizado |

**Seccion 4: BENEFICIOS ECONOMICOS**
- Ahorro medio del 22% en vacunas y biologicos
- Reduccion de stock inmovilizado
- Eliminacion de roturas de stock
- Acceso a financiacion Kit Espacio de Datos (hasta 30.000 EUR)

**Seccion 5: COMO FUNCIONA LA INTEGRACION**
Diagrama de flujo:

```text
Tu Clinica (ERP/CRM)
     |
     | (API segura)
     v
Nodo Local VetSpace-X
     |
     | (solo metricas agregadas)
     v
Hub Central de Compras
     |
     | (lotes agrupados)
     v
Proveedores Homologados
     |
     | (entrega directa)
     v
Tu Clinica
```

**Seccion 6: FORMULARIO COMPLETO DE ADHESION**
Reutilizando la estructura existente de `AdhesionEspacioDatos.tsx`:

- **Paso 1**: Datos de la Clinica (nombre, CIF, direccion, etc.)
- **Paso 2**: Datos del Responsable (nombre, cargo, contacto)
- **Paso 3**: Confirmacion con Contrato
  - Seleccion de modulos (con "Abastecimiento Inteligente" preseleccionado)
  - CONTRATO DE ADHESION (componente ContractContent con scroll-to-accept)
  - ACTA DE CONFORMIDAD (componente AcceptanceActContent)
  - Consentimientos legales

---

## Cambios en ProcurementPortal.tsx

### Linea 46-52: Nuevo Boton Principal

**Antes:**
```tsx
<Button
  size="lg"
  onClick={() => navigate('/portal/supply')}
  className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6 h-auto"
>
  Ver Central Predictiva
</Button>
```

**Despues:**
```tsx
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Button
    size="lg"
    onClick={() => navigate('/portal/procurement/adhesion')}
    className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6 h-auto"
  >
    Unirse a la Central de Compras
  </Button>
  <Button
    size="lg"
    variant="outline"
    onClick={() => navigate('/portal/supply')}
    className="text-lg px-8 py-6 h-auto border-emerald-600 text-emerald-600 hover:bg-emerald-50"
  >
    Ver Demo Predictiva
  </Button>
</div>
```

---

## Archivos a Crear/Modificar

| Archivo | Accion | Descripcion |
|---------|--------|-------------|
| `src/pages/portals/ProcurementAdhesion.tsx` | CREAR | Nueva pagina especializada en adhesion a compras |
| `src/pages/portals/ProcurementPortal.tsx` | MODIFICAR | Actualizar boton principal para enlazar a la nueva pagina |
| `src/App.tsx` | MODIFICAR | Anadir ruta `/portal/procurement/adhesion` |

---

## Detalles Tecnicos

### Base de Datos
Reutilizamos la tabla `kit_inscriptions` existente:
- El campo `interested_modules` incluira "procurement" preseleccionado
- Todos los campos de contrato y acta ya existen
- Sin migraciones necesarias

### Componentes Reutilizados
- `ContractContent.tsx` - Contrato de adhesion
- `AcceptanceActContent.tsx` - Acta de entrega
- Logica de formulario de `AdhesionEspacioDatos.tsx`
- `NavigationControls.tsx` y `GlobalFooter.tsx`

### Validacion con Zod
Misma estructura que la pagina de adhesion general.

---

## Flujo del Usuario desde ProcurementPortal

```text
ProcurementPortal ("/portal/procurement")
        |
        +--[Unirse a Central]--> ProcurementAdhesion ("/portal/procurement/adhesion")
        |                              |
        |                              +-- Explicacion detallada
        |                              +-- Formulario 3 pasos
        |                              +-- Contrato vinculante
        |                              |
        |                              v
        |                        Pantalla Exito
        |
        +--[Ver Demo Predictiva]--> SupplyChainPage ("/portal/supply")
```

---

## Contenido Clave

### Por que Adherirse a las Compras Federadas?

1. **Ahorro Real**: Precios de mayorista al agrupar pedidos con cientos de clinicas. Ahorro medio del 22% en vacunas y biologicos.

2. **Cero Roturas de Stock**: La IA predictiva analiza tu agenda y garantiza que el material llegue antes de que lo necesites.

3. **Autonomia Completa**: Tu decides que productos compras. La red solo optimiza precio y logistica.

4. **Datos Protegidos**: Tus historiales clinicos nunca salen de tu clinica. Solo se comparten metricas agregadas de consumo.

5. **Integracion sin Fricciones**: Compatible con los principales ERPs veterinarios del mercado.

6. **Financiacion Incluida**: Acceso al Kit Espacio de Datos con ayudas de hasta 30.000 EUR.

---

## SEO y Metadatos

```text
title: Adhesion a la Central de Compras Federada | GLOBAL DATA CARE
description: Unete a la central de compras predictivas para clinicas veterinarias. Ahorra hasta un 22% manteniendo la soberania de tus datos clinicos.
canonical: /portal/procurement/adhesion
```

---

## Estimacion de Complejidad

- Nueva pagina con ~800-1000 lineas (reutilizando logica de formulario)
- Modificacion menor en ProcurementPortal (cambio de boton)
- Una nueva ruta en App.tsx
- Sin migraciones de base de datos

