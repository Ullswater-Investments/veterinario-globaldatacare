

# Personalizar mensaje de WhatsApp para Emilio Mulet

## Cambio unico

### `src/components/ui/WhatsAppButton.tsx`

Actualizar los mensajes pre-escritos en la funcion `getMessage()` para dirigirse a Emilio Mulet:

- **Con sesion activa**: "Hola Emilio, soy [email], contacto desde Global Data Care y necesito ayuda."
- **Sin sesion**: "Hola Emilio! Contacto desde Global Data Care y necesito ayuda."

Tambien actualizar el tooltip para que diga "Contactar con Emilio" en lugar de "¿Necesitas ayuda?".

## Detalle tecnico

El numero de WhatsApp (`34601398868`) ya es correcto y no se modifica. Solo se cambian los textos del mensaje y el tooltip en el componente `WhatsAppButton.tsx`.

