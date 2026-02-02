

## Plan: Página Completa de Contrato Legal con Sistema de Aceptacion Digital

### Objetivo
Crear una nueva pagina dedicada `/contrato-kit-espacio-datos` que muestre el contrato completo en formato de pagina legible, con mecanismo de tracking de lectura (scroll completo obligatorio + checkbox) y almacenamiento en base de datos de la constancia de lectura/aceptacion.

---

### Arquitectura de la Solucion

```text
+------------------------------------------+
|     /contrato-kit-espacio-datos         |
|                                          |
|  +------------------------------------+  |
|  |  HEADER: Aviso Legal + Referencia  |  |
|  +------------------------------------+  |
|                                          |
|  +------------------------------------+  |
|  |  CONTRATO PRINCIPAL (7 Clausulas)  |  |
|  |  - Reunidos                        |  |
|  |  - Exponen                         |  |
|  |  - Clausula 1: Objeto              |  |
|  |  - Clausula 2: Duracion            |  |
|  |  - Clausula 3: Precio              |  |
|  |  - Clausula 4: Financiacion        |  |
|  |  - Clausula 5: Acta Conformidad    |  |
|  |  - Clausula 6: Mandato             |  |
|  |  - Clausula 7: Disputas            |  |
|  +------------------------------------+  |
|                                          |
|  +------------------------------------+  |
|  |  ACTA DE ENTREGA Y CONFORMIDAD     |  |
|  |  (5 puntos de certificacion)       |  |
|  +------------------------------------+  |
|                                          |
|  +------------------------------------+  |
|  |  ANEXO: Condiciones Generales      |  |
|  |  - Proteccion de Datos             |  |
|  |  - Jurisdiccion                    |  |
|  |  - Comunicaciones                  |  |
|  +------------------------------------+  |
|                                          |
|  +------------------------------------+  |
|  |  SECCION DE ACEPTACION             |  |
|  |  [ ] He leido el contrato          |  |
|  |  [ ] He leido el acta              |  |
|  |  [BOTON: Continuar a Inscripcion]  |  |
|  +------------------------------------+  |
|                                          |
+------------------------------------------+
```

---

### Archivos a Crear/Modificar

| Archivo | Accion | Descripcion |
|---------|--------|-------------|
| `src/pages/ContratoKitEspacioDatos.tsx` | **CREAR** | Nueva pagina completa con el contrato expandido y sistema de aceptacion |
| `src/components/legal/FullContractContent.tsx` | **CREAR** | Componente con el contrato completo (todas las clausulas expandidas) |
| `src/components/legal/GeneralConditionsContent.tsx` | **CREAR** | Anexo con condiciones generales (LOPD, jurisdiccion, etc.) |
| `src/App.tsx` | **MODIFICAR** | Añadir ruta `/contrato-kit-espacio-datos` |
| `src/pages/CondicionesKitEspacioDatos.tsx` | **MODIFICAR** | Actualizar enlace del boton "Ver Contrato Completo y Condiciones" |

---

### Contenido Legal del Contrato Expandido

El nuevo componente `FullContractContent.tsx` incluira TODAS las clausulas completas proporcionadas:

#### Estructura del Contrato:

| Seccion | Contenido |
|---------|-----------|
| **Encabezado** | Ciudad, Fecha, Titulo oficial del contrato |
| **Partes** | EL PRESTADOR (GLOBAL DATA CARE) y EL CLIENTE |
| **Exposicion** | 2 puntos sobre el Espacio de Datos y las ayudas |
| **Clausula 1** | Objeto del contrato (Licencia SaaS + Consultoria) |
| **Clausula 2** | Duracion en 2 Fases (6 meses + 12 meses condicional) |
| **Clausula 3** | Precios (1.140 EUR Fase 1 + importe subvencion Fase 2) |
| **Clausula 4** | Financiacion HOKODO (6 cuotas 190 EUR/mes) |
| **Clausula 5** | Acta de Conformidad y Activacion |
| **Clausula 6** | Mandato de Representacion + Penalizacion |
| **Clausula 7** | Disputas Comerciales (separacion deuda-servicio) |
| **Clausula 8** | Proteccion de Datos (RGPD) |
| **Clausula 9** | Propiedad Intelectual |
| **Clausula 10** | Jurisdiccion y Ley Aplicable |
| **Clausula 11** | Comunicaciones y Notificaciones |
| **Clausula 12** | Firma Digital y Validez Juridica |

#### Estructura del Acta de Entrega (5 puntos):

1. Recepcion Efectiva del Servicio
2. Inicio de la Consultoria Kit Espacio de Datos
3. Conformidad y Ausencia de Incidencias
4. Activacion de la Financiacion HOKODO (irrevocable)
5. Validez de la Firma Digital

---

### Funcionalidades de Tracking Legal

La pagina implementara los siguientes mecanismos para garantizar constancia legal:

| Funcionalidad | Implementacion |
|---------------|----------------|
| **Scroll Tracking** | Detector de scroll que solo habilita el checkbox cuando el usuario ha llegado al final del documento |
| **Timestamp** | Captura de fecha/hora exacta del momento de aceptacion |
| **LocalStorage** | Guardado temporal del estado de lectura antes de enviar |
| **Boton Condicionado** | El boton "Continuar a Inscripcion" solo se activa si AMBOS checkboxes estan marcados |

---

### Flujo de Usuario

```text
1. Usuario hace clic en "Ver Contrato Completo y Condiciones"
   |
   v
2. Navega a /contrato-kit-espacio-datos
   |
   v
3. Ve el contrato completo (lectura obligatoria)
   |
   v
4. Hace scroll hasta el final (se habilitan checkboxes)
   |
   v
5. Marca "He leido el Contrato de Adhesion"
   |
   v
6. Marca "He leido el Acta de Entrega"
   |
   v
7. Se habilita boton "Continuar a Inscripcion"
   |
   v
8. Navega a /inscripcion-kit-espacio-datos con parametros
   (contrato_leido=true&acta_leida=true&timestamp=...)
```

---

### Detalles Tecnicos

#### Componentes UI a utilizar:
- `Card`, `CardHeader`, `CardContent`
- `Badge` (para fechas y referencias)
- `Checkbox`
- `Button`
- `Separator`
- `ScrollArea` (para secciones internas)
- `motion.div` (animaciones de entrada)

#### Iconos Lucide:
- `ScrollText`, `FileText`, `Shield`, `Scale`, `Clock`
- `CheckCircle2`, `AlertTriangle`, `Building2`, `PawPrint`

#### Logica de Scroll Tracking:
```typescript
// Hook personalizado para detectar lectura completa
const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);

const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  const target = e.currentTarget;
  const isAtBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 50;
  if (isAtBottom) setHasScrolledToEnd(true);
};
```

---

### Estructura Visual de la Pagina

```text
+----------------------------------------------------------+
|  [LOGO]  VetSpace-X          Kit Espacio de Datos 2025   |
+----------------------------------------------------------+

          CONTRATO DE ADHESION AL ESPACIO DE DATOS
             Y GESTION DE AYUDAS KIT ESPACIO DE DATOS

  +------------------------------------------------------+
  |  Fecha: [Auto]  |  Ciudad: [Ciudad]  |  Ref: [Auto]  |
  +------------------------------------------------------+

  PARTES CONTRATANTES
  -------------------
  DE UNA PARTE: GLOBAL DATA CARE (EL PRESTADOR)
  DE OTRA PARTE: [Nombre Clinica] (EL CLIENTE)

  EXPONEN
  -------
  I. Que EL PRESTADOR gestiona...
  II. Que EL CLIENTE esta interesado...

  CLAUSULAS
  ---------
  
  +--------------------------------------------------+
  | CLAUSULA 1. OBJETO DEL CONTRATO                  |
  | [Contenido completo]                             |
  +--------------------------------------------------+
  
  +--------------------------------------------------+
  | CLAUSULA 2. DURACION Y CONDICIONALIDAD           |
  | [Box FASE 1] + [Box FASE 2]                      |
  +--------------------------------------------------+
  
  ... (resto de clausulas) ...

  ACTA DE ENTREGA Y CONFORMIDAD
  -----------------------------
  
  +--------------------------------------------------+
  | 1. RECEPCION EFECTIVA DEL SERVICIO               |
  | 2. INICIO DE LA CONSULTORIA                      |
  | 3. CONFORMIDAD Y AUSENCIA DE INCIDENCIAS         |
  | 4. ACTIVACION DE LA FINANCIACION                 |
  | 5. VALIDEZ DE LA FIRMA                           |
  +--------------------------------------------------+

  ANEXO: CONDICIONES GENERALES
  ----------------------------
  
  [Proteccion de Datos, Jurisdiccion, etc.]

  +--------------------------------------------------+
  |  SECCION DE ACEPTACION                           |
  |                                                  |
  |  [ ] He leido y comprendido el CONTRATO DE       |
  |      ADHESION AL ESPACIO DE DATOS FEDERADO       |
  |                                                  |
  |  [ ] He leido y comprendido el ACTA DE ENTREGA   |
  |      Y CONFORMIDAD                               |
  |                                                  |
  |  [====== CONTINUAR A INSCRIPCION ======]         |
  |  (boton deshabilitado hasta marcar ambos)        |
  +--------------------------------------------------+

  Aviso: La aceptacion de este documento tiene valor
  contractual vinculante.

+----------------------------------------------------------+
```

---

### Beneficios de Esta Implementacion

1. **Constancia Legal**: El usuario DEBE hacer scroll y marcar checkboxes antes de poder continuar
2. **Trazabilidad**: Los parametros URL permiten verificar que paso por la pagina de contrato
3. **Separacion de Documentos**: Contrato + Acta + Anexo claramente diferenciados
4. **UX Profesional**: Diseño limpio, legal pero accesible
5. **Mobile-Ready**: Funciona correctamente en dispositivos moviles

---

### Texto Legal Adicional a Incluir

El nuevo contrato expandido incluira estas clausulas adicionales (no presentes en el actual):

**CLAUSULA 8 - PROTECCION DE DATOS:**
```
El tratamiento de datos personales se realizara conforme al
Reglamento (UE) 2016/679 (RGPD) y la LOPD-GDD. EL PRESTADOR
actua como Encargado del Tratamiento respecto a los datos
clinicos veterinarios...
```

**CLAUSULA 9 - PROPIEDAD INTELECTUAL:**
```
La titularidad de la plataforma, el software y la marca
"VetSpace" corresponde integramente a EL PRESTADOR. EL CLIENTE
adquiere unicamente una licencia de uso no exclusiva...
```

**CLAUSULA 10 - JURISDICCION:**
```
Para la resolucion de cualquier controversia, ambas partes
se someten expresamente a los Juzgados y Tribunales de
la ciudad de Madrid, con renuncia a cualquier otro fuero...
```

**CLAUSULA 11 - COMUNICACIONES:**
```
Todas las notificaciones entre las partes se realizaran
por escrito mediante correo electronico a las direcciones
facilitadas en este contrato...
```

**CLAUSULA 12 - FIRMA DIGITAL:**
```
De conformidad con el Reglamento eIDAS (UE) 910/2014 y la
Ley 6/2020 reguladora de servicios de confianza, ambas
partes reconocen la validez juridica de la firma electronica...
```

