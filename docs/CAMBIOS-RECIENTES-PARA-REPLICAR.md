# Cambios recientes del portal Global Data Care — Guía para replicar en portal de Salud Bucodental

> Este documento resume los últimos cambios realizados en el portal de salud animal para que Lovable pueda aplicar los mismos cambios en un portal gemelo de salud bucodental.

---

## 1. Renovación automática de Fase 2: de 1 año a 2 años
- **Archivos afectados:** Condiciones, Contrato y componente legal `ContractContent`.
- **Cambio:** Todas las referencias a "12 meses" / "1 año" / "DOCE (12) MESES" en la prórroga automática de Fase 2 se cambiaron a "24 meses" / "2 años" / "VEINTICUATRO (24) MESES".
- **Ubicaciones:** FAQ de condiciones, tarjeta resumen de Fase 2, cláusula contractual de prórroga.

## 2. Identidad del prestador de servicios: ACCURO TECHNOLOGY, S.L.
- **Cambio:** Se eliminaron todas las referencias a "VetSpace Technology S.L." y se reemplazaron por **ACCURO TECHNOLOGY, S.L.** (CIF B87617981, C/ Colquide, 6 – Portal 2, 1ª planta, Edificio Prisma de Las Rozas – Madrid).
- **Afecta a:** Contrato de adhesión, Acta de conformidad, footer global, aviso legal y cualquier documento legal.

## 3. Footer global con información legal completa
- **Cambio:** El footer de toda la aplicación incluye los datos legales completos de ACCURO TECHNOLOGY, S.L.: CIF, dirección, teléfono (+34 91 710 48 40), email (ivan.becerro@accuro.es).
- **Incluye:** Enlaces a Inicio, Aviso Legal, y enlace al PDF de "Espacios de Datos Homologados" (página 22).

## 4. Acceso de administrador discreto en el footer
- **Cambio:** Se añadió un enlace "Acceso Admin" en el footer que despliega un formulario de login. Solo el usuario `emilio.emulet@accuro.es` puede autenticarse.
- **Comportamiento:** Una vez autenticado, el footer muestra el estado de sesión y permite cerrar sesión. No redirige a otra página.

## 5. Restricción del formulario de inscripción al superadministrador
- **Cambio:** El formulario de inscripción (`/inscripcion-kit-espacio-datos`) solo permite enviar y navegar entre pasos al usuario `emilio.emulet@accuro.es`.
- **Extra:** El administrador puede saltar la validación de campos obligatorios para revisar todos los pasos sin completar datos.

## 6. Notificaciones por email en cada inscripción
- **Cambio:** Se creó una Edge Function (`send-inscription-email`) que envía un email automático a `emilio.emulet@accuro.es` cada vez que se completa una inscripción.
- **Tecnología:** Usa la API de Resend. Requiere el secret `RESEND_API_KEY`.
- **Contenido del email:** Referencia, datos de la clínica (nombre, CIF, email) y datos del responsable (nombre, email, teléfono).

## 7. Base de datos de inscripciones (`kit_inscriptions`)
- **Cambio:** Se creó la tabla `kit_inscriptions` en la base de datos con campos para: datos de la clínica (nombre, CIF, dirección, ciudad, provincia, CP, email, teléfono), datos del contacto (nombre, email, teléfono, cargo), aceptaciones legales (contrato, acta de conformidad, privacidad, términos, comunicaciones), información técnica (software actual, registros digitales, web, módulos de interés, número de empleados/veterinarios), tracking UTM, y estado de la inscripción.

## 8. Contrato de adhesión completo (`ContractContent.tsx`)
- **Cambio:** Componente con el texto completo del contrato incluyendo: Reunidos, Exponen, 7 Cláusulas (Objeto, Duración con Fase 1 y Fase 2, Precio, Forma de Pago con Hokodo, Acta de Conformidad, Obligaciones/Mandato, Disputas Comerciales).
- **Diseño:** Usa `ScrollArea`, badges de colores por fase (ámbar para Fase 1, verde para Fase 2, azul para precios), bordes laterales en las cláusulas.

## 9. Acta de conformidad y entrega (`AcceptanceActContent.tsx`)
- **Cambio:** Componente con el acta de conformidad digital que incluye 5 secciones: Recepción del servicio, Inicio de consultoría, Conformidad, Activación de financiación Hokodo, y Validez de firma digital.
- **Genera fecha automática** en formato español.

## 10. Páginas de adhesión al espacio de datos
- **Cambio:** Se crearon dos páginas de adhesión:
  - `/solutions/adhesion` — Adhesión general al Espacio de Datos de Salud Animal con formulario de 3 pasos (datos clínica, responsable, aceptación legal).
  - `/portal/procurement/adhesion` — Adhesión a central de compras federada con enfoque en compra coordinada, IA predictiva y soberanía de datos.

## 11. Página de condiciones del Kit Espacio de Datos
- **Cambio:** Página completa en `/condiciones-kit-espacio-datos` con FAQ expandibles, resumen visual de las dos fases del contrato (tarjetas con badges), detalles de precios (1.140€ + IVA fase 1, 6 cuotas de 190€), y sección de documentos requeridos.

## 12. Página de contrato del Kit Espacio de Datos
- **Cambio:** Página en `/contrato-kit-espacio-datos` con vista del contrato completo embebido, tarjetas resumen de Fase 1 y Fase 2, información sobre el proceso de firma y timeline del proceso.

## 13. Sistema de roles y autenticación
- **Cambio:** Sistema de roles implementado con tabla `user_roles` y enum `app_role` (doctor, lab_tech, patient, researcher, insurance_admin, auditor).
- **Contextos:** `AuthContext` para autenticación y `RoleContext` para gestión de roles.
- **Protección de rutas:** Hook `useRoleProtection` para proteger rutas según rol.

## 14. Banner de modo auditoría
- **Cambio:** Cuando el usuario tiene rol `auditor`, aparece un banner fijo en la parte inferior: "MODO AUDITORÍA: Visualizando Datos Sintéticos. No se exponen datos reales de pacientes (GDPR Safe)."
- **Diseño:** Fondo naranja, icono Shield, texto blanco, z-index 50.

## 15. Layout de aplicación autenticada (`AppLayout.tsx`)
- **Cambio:** Layout con sidebar, header, breadcrumbs y área de contenido principal. Redirige a `/auth` si no hay usuario. Muestra spinner de carga mientras verifica autenticación.

## 16. Formulario de inscripción multi-paso (`KitEspacioDatosInscripcion.tsx`)
- **Cambio:** Formulario de inscripción con múltiples pasos: datos de la clínica, datos del contacto, información técnica, selección de módulos, y aceptación legal (contrato + acta de conformidad).
- **Al enviar:** Inserta en la base de datos y dispara el email de notificación.

## 17. Integración con Hokodo (BNPL)
- **Cambio:** Referencias a la financiación BNPL (Buy Now Pay Later) a través de Hokodo en el contrato y acta de conformidad. Fase 1 se paga en 6 cuotas de 190€ + IVA. La financiación es independiente de posibles disputas de servicio.

## 18. Campaña Kit Espacio de Datos (banner)
- **Cambio:** Componente `KitDatosCampaignBanner` para promocionar el programa en la página principal con CTA hacia la inscripción.

## 19. Guía del Kit Espacio de Datos
- **Cambio:** Página `/guia-kit-espacio-datos` con información detallada sobre el programa, requisitos, proceso de solicitud y beneficios.

## 20. Propuesta técnica y presentaciones
- **Cambio:** Múltiples páginas de presentación (investor pitch deck, mobile presentation, platform showcase, business partners) con datos mock para demos. Incluye componentes reutilizables para KPIs, gráficos de tendencia y heatmaps de ocupación.

---

## Notas para la adaptación al portal de Salud Bucodental

Al replicar estos cambios, ten en cuenta:
- Reemplazar "salud animal" / "veterinario" por "salud bucodental" / "odontología/dental".
- Reemplazar "clínica veterinaria" por "clínica dental".
- Adaptar los módulos de interés (radiología dental, ortodoncia, periodoncia, etc.).
- Mantener la misma estructura legal y de prestador (ACCURO TECHNOLOGY, S.L.).
- Los precios, fases y condiciones contractuales son los mismos.
- El email de notificación sigue siendo `emilio.emulet@accuro.es`.
- La tabla de inscripciones puede llamarse `kit_inscriptions_dental` o similar.
- Adaptar los campos técnicos del formulario (software de gestión dental, número de dentistas, etc.).
