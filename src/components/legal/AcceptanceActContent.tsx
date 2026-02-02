import { ScrollArea } from '@/components/ui/scroll-area';

interface AcceptanceActContentProps {
  clinicName?: string;
  contactName?: string;
}

const AcceptanceActContent = ({ 
  clinicName = '[NOMBRE DE LA CLÍNICA]', 
  contactName = '[NOMBRE DEL REPRESENTANTE]' 
}: AcceptanceActContentProps) => {
  const currentDate = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <ScrollArea className="h-[300px] w-full rounded-md border bg-muted/30 p-4">
      <div className="prose prose-sm max-w-none text-foreground/90 space-y-4">
        <div className="text-center border-b pb-4 mb-4">
          <h2 className="text-lg font-bold uppercase tracking-wide">
            ACTA DE ENTREGA Y CONFORMIDAD
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            (Documento Digital de Aceptación)
          </p>
        </div>

        <div className="bg-muted rounded-md p-3 text-sm">
          <p><strong>REFERENCIA DEL CONTRATO:</strong> [Se generará automáticamente]</p>
          <p><strong>FECHA DE ACTIVACIÓN:</strong> {currentDate}</p>
        </div>

        <section className="space-y-2">
          <p className="text-sm leading-relaxed">
            <strong>D./Dña:</strong> {contactName}
          </p>
          <p className="text-sm leading-relaxed">
            <strong>En representación de:</strong> {clinicName} <em>(EL CLIENTE)</em>
          </p>
        </section>

        <section className="space-y-2 mt-4">
          <p className="text-sm font-medium text-center bg-primary/10 rounded-md py-2">
            Por medio de la presente aceptación digital, CERTIFICO Y DECLARO:
          </p>
        </section>

        <section className="space-y-4 mt-4">
          <div className="border-l-2 border-green-500 pl-3">
            <h5 className="font-bold text-green-700">1. RECEPCIÓN EFECTIVA DEL SERVICIO</h5>
            <p className="text-sm leading-relaxed">
              Que he recibido correctamente las credenciales de acceso (usuario y contraseña / claves API) 
              al Espacio de Datos Federado de Salud Animal y que la plataforma se encuentra operativa 
              y accesible para mi organización desde este momento.
            </p>
          </div>

          <div className="border-l-2 border-blue-500 pl-3">
            <h5 className="font-bold text-blue-700">2. INICIO DE LA CONSULTORÍA "KIT ESPACIO DE DATOS"</h5>
            <p className="text-sm leading-relaxed">
              Que reconozco que VetSpace Technology S.L. ha puesto a mi disposición los recursos de 
              consultoría técnica y administrativa necesarios para el inicio de la tramitación de la 
              ayuda "Kit Espacio de Datos", dándose por iniciado y entregado el servicio inicial de asesoramiento.
            </p>
          </div>

          <div className="border-l-2 border-purple-500 pl-3">
            <h5 className="font-bold text-purple-700">3. CONFORMIDAD Y AUSENCIA DE INCIDENCIAS</h5>
            <p className="text-sm leading-relaxed">
              Que he verificado el funcionamiento inicial del servicio y manifiesto mi plena conformidad 
              con el mismo, no existiendo a fecha de hoy incidencias técnicas impeditivas que justifiquen 
              la no aceptación del servicio.
            </p>
          </div>

          <div className="border-l-2 border-amber-500 pl-3 bg-amber-50 rounded-r-md p-3">
            <h5 className="font-bold text-amber-700">4. ACTIVACIÓN DE LA FINANCIACIÓN (HOKODO)</h5>
            <p className="text-sm leading-relaxed text-amber-800">
              En virtud de esta entrega y conformidad, <strong>AUTORIZO IRREVOCABLEMENTE</strong> la 
              activación del plan de financiación acordado con la entidad HOKODO (o sus partners financieros) 
              para el pago de la FASE 1 del contrato (Suscripción Semestral + Gestión de Ayuda).
            </p>
            <p className="text-sm leading-relaxed mt-2 font-medium text-amber-900">
              Reconozco que la obligación de pago de las cuotas acordadas es firme y exigible desde este acto.
            </p>
            <p className="text-sm leading-relaxed mt-2 text-amber-700">
              Entiendo que cualquier futura incidencia de soporte técnico o garantía deberá gestionarse 
              directamente con VetSpace Technology S.L. bajo los términos del Acuerdo de Nivel de Servicio (SLA), 
              <strong> sin que dichas incidencias me faculten para detener, cancelar o reclamar los pagos 
              ya comprometidos ante la entidad financiera</strong>.
            </p>
          </div>

          <div className="border-l-2 border-gray-500 pl-3">
            <h5 className="font-bold text-gray-700">5. VALIDEZ DE LA FIRMA</h5>
            <p className="text-sm leading-relaxed">
              Acepto que la validación digital de este documento (mediante checkbox de aceptación, 
              firma biométrica o código OTP) tiene la misma validez jurídica que la firma manuscrita 
              a efectos de reconocimiento de deuda y aceptación de servicio.
            </p>
          </div>
        </section>

        <div className="border-t pt-4 mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            La aceptación de este documento activa irrevocablemente los servicios contratados 
            y las obligaciones de pago asociadas.
          </p>
        </div>
      </div>
    </ScrollArea>
  );
};

export default AcceptanceActContent;
