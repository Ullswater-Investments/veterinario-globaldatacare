

# Plan: Restringir avance del formulario de inscripcion solo al super administrador

## Objetivo

Modificar el formulario de inscripcion en `/inscripcion-kit-espacio-datos` para que solo el usuario con email `emilio.emulet@accuro.es` pueda avanzar entre los pasos del formulario (botones "Siguiente" y enviar).

## Cambios

### 1. Modificar `src/pages/KitEspacioDatosInscripcion.tsx`

- Importar `useAuth` desde `@/contexts/AuthContext`
- Definir una constante `SUPER_ADMIN_EMAIL = 'emilio.emulet@accuro.es'`
- Crear una variable `isSuperAdmin` que compare el email del usuario autenticado con la constante
- Modificar la funcion `nextStep` para que solo avance si `isSuperAdmin` es `true`, mostrando un toast de "Acceso denegado" en caso contrario
- Modificar el boton de envio final (paso 3) para que tambien este restringido al super administrador
- Deshabilitar visualmente los botones "Siguiente" y "Enviar" si no es super admin, mostrando un mensaje informativo

## Detalles Tecnicos

| Archivo | Cambio |
|---------|--------|
| `src/pages/KitEspacioDatosInscripcion.tsx` | Agregar import de `useAuth`, constante de email admin, logica de verificacion en `nextStep` y en el submit, deshabilitar botones visualmente |

### Logica de verificacion

```text
const { user } = useAuth();
const SUPER_ADMIN_EMAIL = 'emilio.emulet@accuro.es';
const isSuperAdmin = user?.email === SUPER_ADMIN_EMAIL;
```

- En `nextStep`: si no es super admin, mostrar toast y no avanzar
- En boton "Enviar Solicitud": deshabilitado si no es super admin
- Mensaje visual debajo de los botones indicando que se requiere acceso de administrador

## Resultado

- Solo tu (con el email `emilio.emulet@accuro.es` y sesion iniciada) podras navegar por los 3 pasos y enviar el formulario
- Cualquier otro usuario vera los botones deshabilitados con un mensaje explicativo

