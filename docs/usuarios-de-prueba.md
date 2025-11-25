# Usuarios de Prueba - OralSpace-X

## Paso 1: Crear Cuentas Manualmente

Regístrate en `/auth` con estos emails de prueba:

1. **Dr. Dent (Odontólogo)**
   - Email: `doctor@oralspacex.demo`
   - Password: `Demo123456`

2. **Lab Tech (Técnico de Laboratorio)**
   - Email: `labtech@oralspacex.demo`
   - Password: `Demo123456`

3. **Prof. Data (Investigador)**
   - Email: `researcher@oralspacex.demo`
   - Password: `Demo123456`

4. **SurePay Admin (Aseguradora)**
   - Email: `insurance@oralspacex.demo`
   - Password: `Demo123456`

5. **Ana Patient (Paciente)**
   - Email: `patient@oralspacex.demo`
   - Password: `Demo123456`

## Paso 2: Obtener los User IDs

Después de crear las cuentas, ejecuta este SQL para ver los IDs:

```sql
SELECT id, email FROM auth.users ORDER BY created_at DESC LIMIT 5;
```

Anota los IDs de cada usuario.

## Paso 3: Asignar Roles

Ejecuta este SQL reemplazando los UUIDs con los IDs reales:

```sql
-- REEMPLAZA estos UUIDs con los IDs reales de tus usuarios

-- Asignar rol de Doctor
INSERT INTO public.user_roles (user_id, role) 
VALUES ('UUID-DEL-DOCTOR-AQUI', 'doctor')
ON CONFLICT (user_id, role) DO NOTHING;

-- Asignar rol de Lab Tech
INSERT INTO public.user_roles (user_id, role) 
VALUES ('UUID-DEL-LABTECH-AQUI', 'lab_tech')
ON CONFLICT (user_id, role) DO NOTHING;

-- Asignar rol de Investigador
INSERT INTO public.user_roles (user_id, role) 
VALUES ('UUID-DEL-RESEARCHER-AQUI', 'researcher')
ON CONFLICT (user_id, role) DO NOTHING;

-- Asignar rol de Aseguradora
INSERT INTO public.user_roles (user_id, role) 
VALUES ('UUID-DEL-INSURANCE-AQUI', 'insurance_admin')
ON CONFLICT (user_id, role) DO NOTHING;

-- Asignar rol de Paciente
INSERT INTO public.user_roles (user_id, role) 
VALUES ('UUID-DEL-PATIENT-AQUI', 'patient')
ON CONFLICT (user_id, role) DO NOTHING;
```

## Paso 4: Verificar

Cierra sesión y vuelve a iniciar sesión con cada cuenta. El selector de roles en el header debería mostrar el rol correspondiente.

## Opción Rápida: Asignar Roles a Tu Usuario Actual

Si quieres probar todos los roles con tu cuenta actual, ejecuta:

```sql
-- Obtén tu user_id actual
SELECT auth.uid();

-- Asigna todos los roles a tu usuario (solo para desarrollo)
INSERT INTO public.user_roles (user_id, role) VALUES
((SELECT auth.uid()), 'doctor'),
((SELECT auth.uid()), 'lab_tech'),
((SELECT auth.uid()), 'researcher'),
((SELECT auth.uid()), 'insurance_admin'),
((SELECT auth.uid()), 'patient')
ON CONFLICT (user_id, role) DO NOTHING;
```

Luego recarga la página y podrás cambiar entre roles en el header.
