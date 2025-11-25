# Configuración del Usuario Demo Auditor

Este documento explica cómo configurar el usuario de demostración "Auditor del Ecosistema" para presentaciones de OralSpace-X.

## 1. Crear el Usuario Demo

El usuario demo ya está configurado en el código con las siguientes credenciales:
- **Email**: `demo@oralspace-x.eu`
- **Contraseña**: `demo123`

### Paso 1: Registrar el usuario
1. Ve a la página `/auth`
2. Haz clic en la pestaña "Registrarse"
3. Completa el formulario con:
   - Nombre completo: "Auditor Global (Sandbox)"
   - Email: demo@oralspace-x.eu
   - Contraseña: demo123

### Paso 2: Asignar el rol de auditor
Después de registrar el usuario, ejecuta el siguiente SQL en el editor SQL de tu backend:

```sql
-- Primero, obtén el user_id del usuario demo
SELECT id, email FROM auth.users WHERE email = 'demo@oralspace-x.eu';

-- Luego, asigna el rol 'auditor' (reemplaza USER_ID_AQUI con el id obtenido)
INSERT INTO public.user_roles (user_id, role)
VALUES ('USER_ID_AQUI', 'auditor')
ON CONFLICT (user_id, role) DO NOTHING;
```

**Nota**: También puedes asignar todos los roles si deseas tener acceso completo:

```sql
-- Asignar todos los roles al usuario demo
INSERT INTO public.user_roles (user_id, role)
VALUES 
  ('USER_ID_AQUI', 'doctor'),
  ('USER_ID_AQUI', 'lab_tech'),
  ('USER_ID_AQUI', 'researcher'),
  ('USER_ID_AQUI', 'insurance_admin'),
  ('USER_ID_AQUI', 'patient'),
  ('USER_ID_AQUI', 'auditor')
ON CONFLICT (user_id, role) DO NOTHING;
```

## 2. Acceso Rápido al Modo Auditor

En la pantalla de login, encontrarás un botón especial:

**"Acceder a Entorno Sandbox (Demo)"**

Este botón:
- Te autentica automáticamente como el usuario auditor
- Te redirige directamente al `/auditor-dashboard`
- No requiere ingresar credenciales manualmente

## 3. Características del Modo Auditor

### Vista Unificada
Cuando inicias sesión como auditor, tienes acceso a:
- ✅ Todas las vistas del sistema (Clinical, Lab, Research, Claims, Wallet)
- ✅ Dashboard especial con métricas globales
- ✅ Sidebar organizada por dominios

### Banner de Seguridad
Se muestra un banner naranja persistente en la parte inferior:
> "MODO AUDITORÍA: Visualizando Datos Sintéticos. No se exponen datos reales de pacientes (GDPR Safe)."

Este banner asegura que en capturas de pantalla quede claro que son datos sintéticos.

### Métricas del Dashboard
El `/auditor-dashboard` muestra:
- Total de pacientes federados
- Total de transacciones FHIR
- Total de pasaportes digitales emitidos (DPP)
- Total de smart claims procesados
- Accesos rápidos a todas las vistas principales

## 4. Políticas de Seguridad

El rol de auditor tiene:
- ✅ Permisos de **solo lectura** en todas las tablas
- ✅ Acceso limitado a datos sintéticos del sandbox
- ✅ RLS (Row Level Security) habilitado con políticas específicas
- ❌ No puede modificar, insertar o eliminar datos

## 5. Uso Recomendado

### Para Presentaciones
1. Haz clic en "Acceder a Entorno Sandbox (Demo)"
2. Navega libremente por todas las vistas del sistema
3. El banner de datos sintéticos siempre estará visible
4. Cambia de vista desde la sidebar sin hacer logout/login

### Para Desarrollo
- Usa el usuario auditor para probar todas las funcionalidades
- Verifica que las RLS policies funcionen correctamente
- Prueba la navegación entre diferentes roles (si asignaste múltiples roles)

## 6. Compliance y Privacidad

El modo auditor cumple con:
- ✅ GDPR Safe: Solo datos sintéticos
- ✅ Gaia-X compliant: Entorno aislado
- ✅ Transparente: Banner visible en todo momento
- ✅ Auditable: Logs de acceso disponibles

---

## Troubleshooting

### Problema: No puedo hacer login como demo
**Solución**: Asegúrate de haber registrado el usuario primero en `/auth`.

### Problema: No veo el rol "Auditor" en el selector
**Solución**: Verifica que ejecutaste el SQL para asignar el rol 'auditor' al usuario.

### Problema: Recibo errores de permisos
**Solución**: Las políticas RLS fueron creadas automáticamente con la migración. Si persiste, verifica que las políticas existan en tu backend.

---

## Próximos Pasos

Una vez configurado el usuario demo auditor:
1. Prueba el acceso rápido desde `/auth`
2. Verifica que veas todas las secciones en la sidebar
3. Explora el `/auditor-dashboard`
4. Confirma que el banner de datos sintéticos se muestra

¡Listo para tus presentaciones! 🎉
