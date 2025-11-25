-- =====================================================
-- SCRIPT RÁPIDO: Asignar TODOS los roles al usuario actual
-- Ejecuta esto después de hacer login en /auth
-- =====================================================

-- Este script asigna los 5 roles al usuario que está actualmente logueado
-- Útil para desarrollo: podrás cambiar entre roles en el header

INSERT INTO public.user_roles (user_id, role) VALUES
((SELECT auth.uid()), 'doctor'),
((SELECT auth.uid()), 'lab_tech'),
((SELECT auth.uid()), 'researcher'),
((SELECT auth.uid()), 'insurance_admin'),
((SELECT auth.uid()), 'patient')
ON CONFLICT (user_id, role) DO NOTHING;

-- Verificar que se asignaron correctamente
SELECT role FROM public.user_roles WHERE user_id = auth.uid();
