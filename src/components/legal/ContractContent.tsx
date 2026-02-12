import { ScrollArea } from '@/components/ui/scroll-area';

interface ContractContentProps {
  clinicName?: string;
}

const ContractContent = ({ clinicName = '[NOMBRE DE LA CLÍNICA]' }: ContractContentProps) => {
  return (
    <ScrollArea className="h-[350px] w-full rounded-md border bg-muted/30 p-4">
      <div className="prose prose-sm max-w-none text-foreground/90 space-y-4">
        <div className="text-center border-b pb-4 mb-4">
          <h2 className="text-lg font-bold uppercase tracking-wide">
            CONTRATO DE ADHESIÓN AL ESPACIO DE DATOS FEDERADO
          </h2>
          <h3 className="text-md font-semibold text-muted-foreground">
            Y GESTIÓN DE AYUDAS "KIT ESPACIO DE DATOS"
          </h3>
        </div>

        <section className="space-y-3">
          <h4 className="font-bold text-primary">REUNIDOS</h4>
          <p className="text-sm leading-relaxed">
            <strong>DE UNA PARTE:</strong> ACCURO TECHNOLOGY, S.L., con CIF B87617981, con domicilio social en C/ Colquide, 6 – Portal 2, 1ª planta, Edificio Prisma de Las Rozas – Madrid, contacto: emilio.emulet@accuro.es, tel. 601 398 868, 
            en adelante <em>"EL PRESTADOR"</em>.
          </p>
          <p className="text-sm leading-relaxed">
            <strong>DE OTRA PARTE:</strong> {clinicName}, 
            en adelante <em>"EL CLIENTE"</em>.
          </p>
        </section>

        <section className="space-y-3">
          <h4 className="font-bold text-primary">EXPONEN</h4>
          <p className="text-sm leading-relaxed">
            I. Que EL PRESTADOR gestiona el Espacio de Datos Federado de Salud Animal, 
            una infraestructura tecnológica para la interoperabilidad de datos clínicos veterinarios.
          </p>
          <p className="text-sm leading-relaxed">
            II. Que EL CLIENTE está interesado en adherirse a dicho espacio y en solicitar 
            las ayudas públicas del programa "Kit Espacio de Datos".
          </p>
        </section>

        <section className="space-y-3">
          <h4 className="font-bold text-primary">ACUERDAN las siguientes CLÁUSULAS</h4>
        </section>

        <section className="space-y-3 border-l-2 border-primary/30 pl-3">
          <h5 className="font-bold">CLÁUSULA 1. OBJETO DEL CONTRATO</h5>
          <p className="text-sm leading-relaxed">
            El presente contrato tiene por objeto:
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 ml-2">
            <li>La Licencia de Uso y Adhesión del CLIENTE a la plataforma del Espacio de Datos Federado.</li>
            <li>El servicio de Consultoría Técnica y Administrativa para la tramitación, solicitud y justificación de la ayuda "Kit Espacio de Datos" (importe aprox. 15.000 € - 30.000 €).</li>
          </ul>
        </section>

        <section className="space-y-3 border-l-2 border-primary/30 pl-3">
          <h5 className="font-bold">CLÁUSULA 2. DURACIÓN Y CONDICIONALIDAD</h5>
          <p className="text-sm leading-relaxed">
            El contrato se estructura en dos fases vinculantes:
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-md p-3 my-2">
            <p className="text-sm font-semibold text-amber-800">FASE 1 (INICIAL E IRREVOCABLE):</p>
            <p className="text-sm text-amber-700">
              Tendrá una duración improrrogable de <strong>SEIS (6) MESES</strong> desde la firma del presente. 
              Durante este periodo, EL CLIENTE recibe el acceso a la plataforma y el servicio de gestión de la subvención.
            </p>
            <p className="text-xs text-amber-600 mt-2 italic">
              Nota: Dado que los recursos técnicos y de consultoría se ponen a disposición desde el día 1, 
              esta fase es IRREVOCABLE y no admite cancelación anticipada por parte del CLIENTE.
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-md p-3 my-2">
            <p className="text-sm font-semibold text-green-800">FASE 2 (PRÓRROGA AUTOMÁTICA CONDICIONADA):</p>
            <p className="text-sm text-green-700">
              En el supuesto de que EL CLIENTE resulte BENEFICIARIO de la ayuda "Kit Espacio de Datos", 
              el contrato se <strong>PRORROGARÁ AUTOMÁTICAMENTE</strong> por un periodo adicional de DOCE (12) MESES.
            </p>
            <p className="text-xs text-green-600 mt-2">
              EL CLIENTE acepta irrevocablemente esta prórroga en caso de concesión de la ayuda, 
              comprometiéndose a destinar los fondos recibidos al pago de esta segunda fase.
            </p>
          </div>
        </section>

        <section className="space-y-3 border-l-2 border-primary/30 pl-3">
          <h5 className="font-bold">CLÁUSULA 3. PRECIO Y CONDICIONES ECONÓMICAS</h5>
          <div className="bg-blue-50 border border-blue-200 rounded-md p-3 my-2">
            <p className="text-sm font-semibold text-blue-800">3.1. Precio de la FASE 1:</p>
            <p className="text-sm text-blue-700">
              El precio total de la Fase 1 se fija en <strong>1.140 € + IVA</strong>. 
              Este importe se devenga en el momento de la firma.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-md p-3 my-2">
            <p className="text-sm font-semibold text-blue-800">3.2. Precio de la FASE 2:</p>
            <p className="text-sm text-blue-700">
              En caso de activarse la Fase 2 (por concesión de la ayuda), el precio de los servicios 
              para dicho periodo será equivalente al importe concedido en la subvención.
            </p>
          </div>
        </section>

        <section className="space-y-3 border-l-2 border-primary/30 pl-3">
          <h5 className="font-bold">CLÁUSULA 4. FORMA DE PAGO Y FINANCIACIÓN</h5>
          <p className="text-sm leading-relaxed">
            <strong>4.1. Financiación Externa:</strong> EL CLIENTE reconoce y acepta que EL PRESTADOR 
            utiliza los servicios de la entidad financiera <strong>HOKODO</strong> (y sus partners asociados) 
            para la gestión del cobro y financiación de los servicios.
          </p>
          <p className="text-sm leading-relaxed">
            <strong>4.2. Mandato de Pago Fase 1:</strong> Para el pago de los 1.140 € de la Fase 1, 
            EL CLIENTE opta por la modalidad de PAGO APLAZADO ofrecida a través de la plataforma HOKODO, 
            en <strong>6 cuotas mensuales de 190 € + IVA</strong>.
          </p>
          <p className="text-sm leading-relaxed">
            EL CLIENTE acepta expresamente los Términos y Condiciones de HOKODO al momento de la firma/activación digital.
          </p>
          <p className="text-sm leading-relaxed font-medium text-destructive">
            EL CLIENTE reconoce que la deuda derivada de esta Fase 1 es cierta, líquida y exigible 
            desde la firma del presente contrato y la correspondiente Acta de Conformidad del Servicio.
          </p>
          <p className="text-sm leading-relaxed">
            <strong>4.3. Pago Fase 2:</strong> En caso de concesión de la ayuda, EL CLIENTE autoriza a EL PRESTADOR 
            a emitir la facturación correspondiente a la Fase 2 a través de la plataforma HOKODO (u otro medio acordado), 
            comprometiéndose a validar la operación financiera necesaria para cubrir dicho periodo con los fondos de la subvención.
          </p>
        </section>

        <section className="space-y-3 border-l-2 border-primary/30 pl-3">
          <h5 className="font-bold">CLÁUSULA 5. ACTA DE CONFORMIDAD Y ACTIVACIÓN</h5>
          <p className="text-sm leading-relaxed">
            A la firma del presente contrato y tras la facilitación de las credenciales de acceso al Espacio de Datos, 
            EL CLIENTE firmará (digitalmente) un <strong>ACTA DE CONFORMIDAD Y ENTREGA</strong>. Esta acta certifica que 
            el servicio ha sido puesto a disposición y que el software es operativo, sirviendo como prueba de entrega 
            a efectos financieros y renunciando EL CLIENTE a retener pagos por motivos de "no entrega".
          </p>
        </section>

        <section className="space-y-3 border-l-2 border-primary/30 pl-3">
          <h5 className="font-bold">CLÁUSULA 6. OBLIGACIONES DEL CLIENTE (MANDATO)</h5>
          <p className="text-sm leading-relaxed">
            EL CLIENTE autoriza expresamente a EL PRESTADOR a actuar como <strong>Representante Voluntario</strong> 
            para la presentación de la solicitud de la ayuda "Kit Espacio de Datos" ante el organismo competente. 
            EL CLIENTE se obliga a facilitar toda la documentación necesaria (poderes, certificados, firma electrónica) 
            en un plazo máximo de 5 días hábiles desde su requerimiento.
          </p>
          <p className="text-sm leading-relaxed bg-red-50 border border-red-200 rounded-md p-2 text-red-700">
            <strong>Penalización:</strong> Si la ayuda se deniega por falta de colaboración documental imputable al CLIENTE, 
            este deberá abonar el importe íntegro de la Fase 1 (si no lo hubiera hecho) y una penalización 
            por los servicios de consultoría realizados.
          </p>
        </section>

        <section className="space-y-3 border-l-2 border-primary/30 pl-3">
          <h5 className="font-bold">CLÁUSULA 7. DISPUTAS COMERCIALES</h5>
          <p className="text-sm leading-relaxed">
            Cualquier reclamación sobre niveles de servicio (SLA) o incidencias técnicas deberá notificarse 
            por escrito a EL PRESTADOR para su subsanación, <strong>sin que dicha reclamación faculte a EL CLIENTE 
            para detener el flujo de pagos comprometido</strong> con la entidad financiera HOKODO, 
            al tratarse de una financiación independiente.
          </p>
        </section>

        <div className="border-t pt-4 mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Este documento tiene carácter contractual vinculante.
          </p>
        </div>
      </div>
    </ScrollArea>
  );
};

export default ContractContent;
