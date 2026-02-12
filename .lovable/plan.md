

# Plan: Boton de Login Super Admin en el Footer

## Que se hara

Anadir una seccion discreta en el footer global con un formulario de login rapido (email + contrasena) para que puedas autenticarte como super administrador sin salir de la pagina actual. Una vez autenticado, se mostrara tu email y un boton de cerrar sesion en su lugar.

## Comportamiento

- Por defecto se muestra un pequeno boton/enlace "Acceso Admin" en la zona inferior del footer
- Al hacer clic, se despliega un mini formulario inline con campos de email y contrasena
- Al autenticarse correctamente, el formulario se reemplaza por el email del usuario y un boton "Cerrar sesion"
- Si ya hay una sesion activa, se muestra directamente el estado autenticado
- La autenticacion usa el sistema existente de Supabase Auth (signInWithPassword)

## Cambios tecnicos

### Archivo: `src/components/ui/GlobalFooter.tsx`

1. Importar `useState` de React, `supabase` client, `useAuth` del AuthContext, componentes `Input`, `Button`, iconos `Lock`, `LogOut`
2. Anadir estado local `showLogin` (toggle del formulario), `email`, `password`, `loading`
3. Usar `useAuth()` para obtener `user` y `signOut`
4. Anadir seccion antes del divider inferior:
   - Si el usuario NO esta autenticado: boton "Acceso Admin" que muestra/oculta un formulario con email + contrasena + boton "Entrar"
   - Si el usuario esta autenticado: mostrar email del usuario + boton "Cerrar sesion"
5. El formulario llama a `supabase.auth.signInWithPassword` y muestra errores con un toast
6. Estilo discreto acorde al footer oscuro (inputs con fondo slate-900, texto claro)

No se crean tablas ni se modifican otros archivos. Se reutiliza la autenticacion existente.

