

# Plan: Nueva Pagina de Adhesion al Espacio de Datos de Salud Animal

## Resumen Ejecutivo

Crear una nueva pagina dedicada (`/adhesion-espacio-datos`) que explique de forma completa las ventajas de adherirse al Espacio de Datos Federado de Salud Animal de GLOBAL DATA CARE, incluyendo un formulario completo de adhesion con el contrato vinculante.

---

## Estructura de la Nueva Pagina

### Seccion 1: HERO - Valor del Espacio de Datos Federado
- Titulo principal: "Adhesion al Espacio de Datos de Salud Animal"
- Subtitulo: "Conecta tu clinica veterinaria al primer ecosistema federado de datos en Espana"
- Badge con enlace al PDF de Espacios de Datos Elegibles (pagina 22)

### Seccion 2: QUE ES UN ESPACIO DE DATOS FEDERADO
Explicacion clara y visual de los conceptos clave:
- Definicion de "Espacio de Datos Federado"
- Diferencia entre datos centralizados vs. federados
- Beneficios de la soberania del dato (tus datos nunca salen de tu clinica)
- Diagrama visual del modelo federado

### Seccion 3: PILARES DEL ESPACIO DE DATOS (Ventajas)
Cuatro pilares conectados con la infraestructura federada:

| Pilar | Descripcion | Beneficio |
|-------|-------------|-----------|
| **ERP + CRM Federado** | Gestion clinica que se sincroniza con las mejores practicas de la red | Estandarizacion sin perder autonomia |
| **Compras Coordinadas** | Negociacion colectiva automatica con proveedores homologados | Ahorro de costes y reposicion predictiva |
| **IA Federada** | Algoritmos de diagnostico que viajan a tus datos, no al reves | Acceso a IA de primer nivel sin mover datos |
| **Interoperabilidad (FHIR)** | Historiales clinicos estandarizados y compartibles | Derivaciones sin fricciones |

### Seccion 4: COMO FUNCIONA LA RED
Diagrama de arquitectura mostrando:
- Tu clinica (nodo local)
- Hub Central (orquestador)
- Proveedores externos (IA, ERP, suministros)
- Flujo de datos (los datos no se mueven, solo los algoritmos)

### Seccion 5: BENEFICIOS ECONOMICOS
- Financiacion de hasta 30.000 EUR via Kit Espacio de Datos
- Modelo de pago fraccionado (190 EUR/mes x 6 meses)
- Enlace al PDF de Espacios de Datos Homologados

### Seccion 6: FORMULARIO COMPLETO DE ADHESION
Reutilizando la estructura del `KitEspacioDatosInscripcion.tsx`:

**Paso 1 - Datos de la Clinica:**
- Nombre, CIF, direccion completa
- Telefono, email
- Provincia, codigo postal

**Paso 2 - Datos del Responsable:**
- Nombre y apellidos
- Cargo (Director, Gerente, Veterinario, Otro)
- Telefono y email personal

**Paso 3 - Confirmacion y Contrato:**
- Informacion adicional (veterinarios, empleados, software actual)
- Modulos de interes
- **CONTRATO DE ADHESION** (componente ContractContent con scroll-to-accept)
- **ACTA DE CONFORMIDAD** (componente AcceptanceActContent)
- Consentimientos legales (privacidad, terminos, comunicaciones)

---

## Archivos a Crear/Modificar

| Archivo | Accion | Descripcion |
|---------|--------|-------------|
| `src/pages/solutions/AdhesionEspacioDatos.tsx` | CREAR | Nueva pagina completa con ventajas + formulario |
| `src/pages/solutions/ClinicsPage.tsx` | MODIFICAR | Enlazar boton "Conectar mi Clinica" a la nueva pagina |
| `src/App.tsx` | MODIFICAR | Anadir ruta `/solutions/adhesion` |

---

## Detalles Tecnicos

### Base de Datos
Reutilizaremos la tabla `kit_inscriptions` existente que ya contiene todos los campos necesarios:
- Datos de clinica y contacto
- Aceptacion de contrato y acta de conformidad
- Timestamp de aceptacion legal
- Modulos de interes
- UTM tracking

### Componentes Reutilizados
- `ContractContent.tsx` - Contrato de adhesion completo
- `AcceptanceActContent.tsx` - Acta de entrega y conformidad
- Componentes de formulario existentes (Form, Input, Select, Checkbox, etc.)
- `GlobalFooter.tsx` y `NavigationControls.tsx`

### Validacion con Zod
Misma estructura de validacion que KitEspacioDatosInscripcion:

```text
clinic_name: min 2 chars, max 200
cif: regex B12345678 o 12345678B
address: min 5, max 300
postal_code: 5 digitos
email: formato email
contact_*: validaciones similares
contract_accepted: boolean (required true)
acceptance_act_accepted: boolean (required true)
privacy_accepted: boolean (required true)
```

### Flujo del Usuario

```text
ClinicsPage
    |
    v (click "Conectar mi Clinica")
    |
AdhesionEspacioDatos
    |
    +-- Seccion explicativa (ventajas)
    |
    +-- Formulario 3 pasos
    |       |
    |       +-- Paso 1: Datos Clinica
    |       +-- Paso 2: Datos Responsable  
    |       +-- Paso 3: Contrato + Envio
    |
    v
Pantalla de Exito
    |
    v (referencia generada)
Contacto en 48h
```

---

## Contenido Clave para Secciones Explicativas

### Por que Adherirse a un Espacio de Datos Federado?

1. **Soberania del Dato**: Tus datos clinicos permanecen en tu infraestructura. Solo compartes lo que decides, cuando lo decides.

2. **Inteligencia Colectiva**: Accede a algoritmos de IA entrenados con datos de toda la red, sin exponer tus registros individuales.

3. **Interoperabilidad Real**: Historiales clinicos en formato FHIR que cualquier clinica de la red puede interpretar para derivaciones o segundas opiniones.

4. **Economia de Escala**: Compras coordinadas que reducen costes sin perder independencia. Negociacion colectiva con proveedores de equipamiento, farmacia y consumibles.

5. **Cumplimiento Normativo**: Arquitectura preparada para RGPD y Data Governance Act europeo. Auditorias y trazabilidad incluidas.

6. **Financiacion Publica**: Acceso a ayudas del Kit Espacio de Datos (hasta 30.000 EUR) con tramitacion incluida.

---

## SEO y Metadatos

```text
title: Adhesion al Espacio de Datos de Salud Animal | GLOBAL DATA CARE
description: Conecta tu clinica veterinaria al primer espacio de datos federado de Espana. ERP, IA y compras coordinadas manteniendo la soberania de tus datos.
canonical: /solutions/adhesion
```

---

## Estimacion de Complejidad

- Pagina nueva con ~600-800 lineas de codigo
- Reutilizacion alta de componentes existentes
- Misma logica de base de datos
- Sin migraciones necesarias (tabla kit_inscriptions ya existe)

