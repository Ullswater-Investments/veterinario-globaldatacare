import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import {
  ArrowLeft,
  ArrowRight,
  ScrollText,
  FileText,
  Shield,
  Clock,
  AlertTriangle,
  CheckCircle2,
  PawPrint,
  Building2,
  Euro,
  Lock,
  Banknote,
  FileCheck,
  Users,
  Scale,
  Mail,
  Fingerprint,
  Key,
  CreditCard,
} from 'lucide-react';
import { motion } from 'framer-motion';

const ContratoKitEspacioDatos = () => {
  const navigate = useNavigate();
  
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const [contractAccepted, setContractAccepted] = useState(false);
  const [actAccepted, setActAccepted] = useState(false);
  const [acceptanceTimestamp, setAcceptanceTimestamp] = useState<string | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const currentDate = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Detectar scroll al final del documento
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Margen de 300px para considerar que ha llegado al final
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 300;
      
      if (isAtBottom && !hasScrolledToEnd) {
        setHasScrolledToEnd(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledToEnd]);

  // Guardar timestamp cuando ambos checkboxes están marcados
  useEffect(() => {
    if (contractAccepted && actAccepted && !acceptanceTimestamp) {
      const timestamp = new Date().toISOString();
      setAcceptanceTimestamp(timestamp);
      
      // Guardar en localStorage como respaldo
      localStorage.setItem('contract_acceptance', JSON.stringify({
        contractAccepted: true,
        actAccepted: true,
        timestamp,
      }));
    }
  }, [contractAccepted, actAccepted, acceptanceTimestamp]);

  const handleContinue = () => {
    if (contractAccepted && actAccepted && acceptanceTimestamp) {
      navigate(`/inscripcion-kit-espacio-datos?contrato_leido=true&acta_leida=true&timestamp=${encodeURIComponent(acceptanceTimestamp)}`);
    }
  };

  const canCheckBoxes = hasScrolledToEnd;
  const canContinue = contractAccepted && actAccepted;

  return (
    <div className="min-h-screen bg-background">
      {/* Header fijo */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/condiciones-kit-espacio-datos" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Volver a Condiciones</span>
          </Link>
          <Badge variant="outline" className="hidden sm:flex">
            <Clock className="h-3 w-3 mr-1" />
            Kit Espacio de Datos 2025
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/30">
              <ScrollText className="mr-2 h-4 w-4" />
              Documento Legal Vinculante
            </Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Contrato de Adhesión Completo
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lee detenidamente todas las cláusulas antes de aceptar. Este documento tiene validez contractual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Indicador de progreso de lectura */}
      {!hasScrolledToEnd && (
        <div className="sticky top-16 z-40 bg-amber-500/10 border-b border-amber-500/30">
          <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-3 text-sm">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <span className="text-amber-700 dark:text-amber-400">
              Desplázate hasta el final del documento para poder aceptar las condiciones
            </span>
          </div>
        </div>
      )}

      {/* Contenido del Contrato */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Aviso Legal Inicial */}
          <Card className="border-2 border-primary/30 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Aviso Legal</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Este documento constituye un <strong className="text-foreground">contrato vinculante</strong> entre las partes. 
                Al aceptar las condiciones mediante los checkboxes inferiores, estás formalizando un acuerdo legal con GLOBAL DATA CARE.
              </p>
              <p>
                Te recomendamos que revises el contenido con tu asesoría jurídica si tienes dudas sobre alguna cláusula.
              </p>
            </CardContent>
          </Card>

          {/* ======================= */}
          {/* SECCIÓN 1: CONTRATO PRINCIPAL */}
          {/* ======================= */}
          <motion.section {...fadeInUp} transition={{ delay: 0.1 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Sección 1: Contrato Principal</h2>
                <p className="text-sm text-muted-foreground">12 cláusulas legales</p>
              </div>
            </div>
            
            <Card className="border">
              <CardContent className="pt-6 space-y-8">
                {/* Encabezado del Contrato */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                    Contrato de Adhesión al Espacio de Datos Federado
                  </h3>
                  <h4 className="text-lg text-muted-foreground">
                    y Gestión de Ayudas "Kit Espacio de Datos"
                  </h4>
                  <div className="flex flex-wrap justify-center gap-3 pt-4">
                    <Badge variant="outline" className="px-3 py-1">
                      <Building2 className="h-3 w-3 mr-1" />
                      Madrid
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {currentDate}
                    </Badge>
                  </div>
                </div>

                <Separator />

                {/* REUNIDOS */}
                <section className="space-y-4">
                  <h5 className="text-lg font-bold text-primary uppercase tracking-wide">Reunidos</h5>
                  
                  <Card className="border-primary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-primary" />
                        DE UNA PARTE: EL PRESTADOR
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p><strong>GLOBAL DATA CARE</strong>, con NIF [B-XXXXXXXX], con domicilio social en [Dirección], Madrid, debidamente representada por D./Dña. [Nombre del Representante] en calidad de [Cargo].</p>
                    </CardContent>
                  </Card>

                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        DE OTRA PARTE: EL CLIENTE
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p><strong>[NOMBRE DE LA CLÍNICA VETERINARIA]</strong>, con NIF [CIF], debidamente representada por su representante legal, en adelante "EL CLIENTE".</p>
                    </CardContent>
                  </Card>
                </section>

                <Separator />

                {/* EXPONEN */}
                <section className="space-y-4">
                  <h5 className="text-lg font-bold text-primary uppercase tracking-wide">Exponen</h5>
                  
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div className="flex gap-3">
                      <span className="font-bold text-primary shrink-0">I.</span>
                      <p>Que EL PRESTADOR gestiona el <strong>Espacio de Datos Federado de Salud Animal</strong>, una infraestructura tecnológica interoperable que permite a las clínicas veterinarias participar en un ecosistema de intercambio de datos clínicos, conforme a los estándares FHIR y los principios de soberanía del dato europeos.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="font-bold text-primary shrink-0">II.</span>
                      <p>Que EL CLIENTE está interesado en adherirse a dicho espacio de datos y en solicitar las ayudas públicas del programa <strong>"Kit Espacio de Datos"</strong>, financiado por el Gobierno de España con fondos europeos Next Generation EU y gestionado por RED.ES, con un importe máximo subvencionable de hasta 30.000 euros.</p>
                    </div>
                  </div>

                  <p className="text-sm font-medium pt-2">Ambas partes, reconociéndose capacidad legal suficiente, <strong>ACUERDAN</strong> las siguientes:</p>
                </section>

                <Separator />

                {/* CLÁUSULAS */}
                <section className="space-y-6">
                  <h5 className="text-lg font-bold text-primary uppercase tracking-wide">Cláusulas</h5>

                  {/* Cláusula 1 */}
                  <Card>
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
                        OBJETO DEL CONTRATO
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm leading-relaxed space-y-3">
                      <p>El presente contrato tiene por objeto:</p>
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        <li><strong>La Licencia de Uso y Adhesión</strong> del CLIENTE a la plataforma del Espacio de Datos Federado de Salud Animal, incluyendo el acceso a todos los módulos operativos.</li>
                        <li><strong>El servicio de Consultoría Técnica y Administrativa</strong> para la tramitación, solicitud y justificación de la ayuda "Kit Espacio de Datos" ante RED.ES y organismos competentes.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Cláusula 2 */}
                  <Card>
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
                        DURACIÓN Y CONDICIONALIDAD
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm leading-relaxed space-y-4">
                      <p>El contrato se estructura en <strong>dos fases vinculantes</strong>:</p>
                      
                      <Card className="border-2 border-amber-500/50 bg-amber-500/5">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-amber-500 hover:bg-amber-600">FASE 1</Badge>
                            <Lock className="h-4 w-4 text-amber-600" />
                            <span className="font-semibold text-amber-700 dark:text-amber-400">INICIAL E IRREVOCABLE</span>
                          </div>
                        </CardHeader>
                        <CardContent className="text-sm space-y-2">
                          <p>Tendrá una duración improrrogable de <strong>SEIS (6) MESES</strong> desde la firma del presente contrato.</p>
                          <div className="flex items-start gap-2 p-3 bg-amber-500/10 rounded-lg">
                            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                            <p className="text-amber-800 dark:text-amber-300"><strong>NOTA:</strong> Esta fase es IRREVOCABLE y no admite cancelación anticipada.</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-green-500/50 bg-green-500/5">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-500 hover:bg-green-600">FASE 2</Badge>
                            <span className="font-semibold text-green-700 dark:text-green-400">PRÓRROGA AUTOMÁTICA CONDICIONADA</span>
                          </div>
                        </CardHeader>
                        <CardContent className="text-sm space-y-2">
                          <p>Si EL CLIENTE resulte <strong>BENEFICIARIO</strong> de la ayuda, el contrato se <strong>PRORROGARÁ AUTOMÁTICAMENTE</strong> por DOCE (12) MESES adicionales.</p>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>

                  {/* Cláusula 3 */}
                  <Card>
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
                        PRECIO Y CONDICIONES ECONÓMICAS
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm leading-relaxed space-y-4">
                      <div className="flex items-start gap-3">
                        <Euro className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">3.1. Precio de la FASE 1:</p>
                          <p>El precio total de la Fase 1 se fija en <strong>1.140 € + IVA</strong>.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Banknote className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">3.2. Precio de la FASE 2:</p>
                          <p>En caso de activarse, será equivalente al <strong>importe concedido en la subvención</strong> (entre 15.000€ y 30.000€).</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Cláusula 4 */}
                  <Card>
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</span>
                        FORMA DE PAGO Y FINANCIACIÓN
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm leading-relaxed space-y-4">
                      <p><strong>4.1. Financiación Externa:</strong> EL CLIENTE acepta que EL PRESTADOR utiliza la entidad financiera <strong>HOKODO</strong> para la gestión del cobro.</p>
                      <p><strong>4.2. Mandato de Pago Fase 1:</strong> PAGO APLAZADO en <strong>6 cuotas mensuales de 190€ + IVA</strong>.</p>
                      <p className="font-medium text-destructive">EL CLIENTE reconoce que la deuda es <strong>cierta, líquida y exigible</strong> desde la firma.</p>
                      <p><strong>4.3. Pago Fase 2:</strong> En caso de concesión, EL CLIENTE autoriza la facturación con los fondos de la subvención.</p>
                    </CardContent>
                  </Card>

                  {/* Cláusula 5 */}
                  <Card>
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">5</span>
                        ACTA DE CONFORMIDAD Y ACTIVACIÓN
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm leading-relaxed">
                      <div className="flex items-start gap-3">
                        <FileCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p>A la firma del contrato, EL CLIENTE firmará un <strong>ACTA DE CONFORMIDAD Y ENTREGA</strong> que certifica la puesta a disposición del servicio, <strong>renunciando a retener pagos por motivos de "no entrega"</strong>.</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Cláusula 6 */}
                  <Card>
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">6</span>
                        OBLIGACIONES DEL CLIENTE (MANDATO)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm leading-relaxed space-y-3">
                      <p>EL CLIENTE autoriza a EL PRESTADOR como <strong>Representante Voluntario</strong> ante RED.ES, obligándose a facilitar documentación en <strong>5 días hábiles</strong>.</p>
                      <Card className="border-amber-500/50 bg-amber-500/5">
                        <CardContent className="py-3">
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                            <p className="text-amber-800 dark:text-amber-300"><strong>Penalización:</strong> Si la ayuda se deniega por falta de colaboración del CLIENTE, deberá abonar el importe íntegro más una penalización del 15%.</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>

                  {/* Cláusula 7 */}
                  <Card>
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">7</span>
                        DISPUTAS COMERCIALES
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm leading-relaxed">
                      <p>Las reclamaciones técnicas no facultan a EL CLIENTE para <strong>detener el flujo de pagos a HOKODO</strong>, al tratarse de financiación independiente.</p>
                    </CardContent>
                  </Card>

                  {/* Cláusula 8 */}
                  <Card>
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">8</span>
                        PROTECCIÓN DE DATOS
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm leading-relaxed">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p>Tratamiento conforme al <strong>RGPD (UE) 2016/679</strong> y <strong>LOPD-GDD</strong>. EL PRESTADOR actúa como Encargado del Tratamiento.</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Cláusula 9 */}
                  <Card>
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">9</span>
                        PROPIEDAD INTELECTUAL
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm leading-relaxed">
                      <p>La plataforma y marca "VetSpace" pertenecen a EL PRESTADOR. EL CLIENTE obtiene una <strong>licencia de uso no exclusiva y revocable</strong>. Los datos clínicos siguen siendo propiedad del CLIENTE.</p>
                    </CardContent>
                  </Card>

                  {/* Cláusula 10 */}
                  <Card>
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">10</span>
                        JURISDICCIÓN Y LEY APLICABLE
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm leading-relaxed">
                      <div className="flex items-start gap-3">
                        <Scale className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p>Legislación española. Ambas partes se someten a los <strong>Juzgados y Tribunales de Madrid</strong>.</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Cláusula 11 */}
                  <Card>
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">11</span>
                        COMUNICACIONES Y NOTIFICACIONES
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm leading-relaxed">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p>Notificaciones por <strong>correo electrónico</strong> a las direcciones facilitadas en el formulario de inscripción.</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Cláusula 12 */}
                  <Card>
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="text-base flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">12</span>
                        FIRMA DIGITAL Y VALIDEZ JURÍDICA
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm leading-relaxed">
                      <div className="flex items-start gap-3">
                        <Fingerprint className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p>Conforme al <strong>Reglamento eIDAS (UE) 910/2014</strong> y <strong>Ley 6/2020</strong>, la firma electrónica tiene la misma validez que la firma manuscrita.</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </CardContent>
            </Card>
          </motion.section>

          <Separator className="my-12" />

          {/* ======================= */}
          {/* SECCIÓN 2: ACTA DE ENTREGA */}
          {/* ======================= */}
          <motion.section {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-green-500/10">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Sección 2: Acta de Entrega y Conformidad</h2>
                <p className="text-sm text-muted-foreground">5 puntos de certificación</p>
              </div>
            </div>
            
            <Card className="border">
              <CardContent className="pt-6 space-y-6">
                {/* Encabezado del Acta */}
                <div className="text-center space-y-4 bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-primary">
                    Acta de Entrega y Conformidad
                  </h3>
                  <p className="text-sm text-muted-foreground">(Documento de Activación Digital)</p>
                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <Badge variant="outline" className="px-3 py-1">Referencia: KED-2025-XXXXX</Badge>
                    <Badge variant="outline" className="px-3 py-1">Fecha: {currentDate}</Badge>
                  </div>
                </div>

                <p className="text-sm font-medium text-center py-2">
                  Por medio de la presente aceptación digital, <strong>CERTIFICO Y DECLARO</strong>:
                </p>

                {/* Puntos de certificación */}
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-primary">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">1</span>
                        <Key className="h-4 w-4 text-primary" />
                        RECEPCIÓN EFECTIVA DEL SERVICIO
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm pl-12">
                      Que he recibido las credenciales de acceso y la plataforma está operativa.
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">2</span>
                        <Users className="h-4 w-4 text-primary" />
                        INICIO DE LA CONSULTORÍA
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm pl-12">
                      Que reconozco que GLOBAL DATA CARE ha puesto a mi disposición los recursos de consultoría.
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">3</span>
                        <FileCheck className="h-4 w-4 text-primary" />
                        CONFORMIDAD Y AUSENCIA DE INCIDENCIAS
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm pl-12">
                      Que manifiesto mi plena conformidad, sin incidencias técnicas impeditivas.
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-amber-500 bg-amber-500/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">4</span>
                        <CreditCard className="h-4 w-4 text-amber-600" />
                        ACTIVACIÓN DE LA FINANCIACIÓN (HOKODO)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm pl-12 text-amber-800 dark:text-amber-300">
                      <strong>AUTORIZO IRREVOCABLEMENTE</strong> la activación de la financiación. La obligación de pago de las cuotas (190€/mes × 6) es <strong>firme y exigible</strong>. Entiendo que las incidencias técnicas no me facultan para detener los pagos.
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-primary">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">5</span>
                        <Fingerprint className="h-4 w-4 text-primary" />
                        VALIDEZ DE LA FIRMA DIGITAL
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm pl-12">
                      La validación digital tiene la misma validez jurídica que la firma manuscrita (eIDAS UE 910/2014).
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <Separator className="my-12" />

          {/* ======================= */}
          {/* SECCIÓN DE ACEPTACIÓN */}
          {/* ======================= */}
          <motion.section {...fadeInUp} transition={{ delay: 0.3 }}>
            <Card className={`border-2 ${canContinue ? 'border-green-500' : 'border-muted'} transition-colors`}>
              <CardHeader className="bg-muted/30">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Sección de Aceptación Digital
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                
                {/* Estado de lectura */}
                {!canCheckBoxes && (
                  <div className="flex items-center gap-3 p-4 bg-amber-500/10 rounded-lg border border-amber-500/30">
                    <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      Para poder aceptar las condiciones, primero debes leer el documento completo. 
                      <strong> Desplázate hasta el final de la página.</strong>
                    </p>
                  </div>
                )}

                {canCheckBoxes && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                    <p className="text-sm text-green-800 dark:text-green-300">
                      Has llegado al final del documento. Ahora puedes marcar las casillas de aceptación.
                    </p>
                  </div>
                )}

                {/* Checkboxes de aceptación */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="contract-acceptance"
                      checked={contractAccepted}
                      onCheckedChange={(checked) => setContractAccepted(checked === true)}
                      disabled={!canCheckBoxes}
                      className="mt-1"
                    />
                    <label 
                      htmlFor="contract-acceptance" 
                      className={`text-sm leading-relaxed ${!canCheckBoxes ? 'text-muted-foreground/50' : 'cursor-pointer'}`}
                    >
                      <strong>He leído y comprendido el CONTRATO DE ADHESIÓN AL ESPACIO DE DATOS FEDERADO</strong> 
                      {' '}(Sección 1: 12 cláusulas), incluyendo las condiciones de duración, precios, financiación con HOKODO, 
                      mandato de representación y protección de datos.
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="act-acceptance"
                      checked={actAccepted}
                      onCheckedChange={(checked) => setActAccepted(checked === true)}
                      disabled={!canCheckBoxes}
                      className="mt-1"
                    />
                    <label 
                      htmlFor="act-acceptance" 
                      className={`text-sm leading-relaxed ${!canCheckBoxes ? 'text-muted-foreground/50' : 'cursor-pointer'}`}
                    >
                      <strong>He leído y comprendido el ACTA DE ENTREGA Y CONFORMIDAD</strong> 
                      {' '}(Sección 2: 5 puntos de certificación), incluyendo la activación irrevocable de la financiación 
                      y la validez jurídica de la firma digital.
                    </label>
                  </div>
                </div>

                {/* Timestamp de aceptación */}
                {acceptanceTimestamp && (
                  <div className="text-xs text-muted-foreground text-center p-2 bg-muted/30 rounded">
                    Aceptación registrada: {new Date(acceptanceTimestamp).toLocaleString('es-ES')}
                  </div>
                )}

                {/* Botón de continuar */}
                <div className="flex flex-col items-center gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto text-base px-8 py-6"
                    disabled={!canContinue}
                    onClick={handleContinue}
                  >
                    <PawPrint className="mr-2 h-5 w-5" />
                    Continuar a Inscripción
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center max-w-md">
                    Al hacer clic en "Continuar a Inscripción", confirmas que has leído y aceptas 
                    ambos documentos. Esta aceptación tiene valor contractual vinculante conforme 
                    al Reglamento eIDAS (UE) 910/2014.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-muted/50 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GLOBAL DATA CARE — Todos los derechos reservados</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <Link to="/legal" className="hover:text-foreground transition-colors">Aviso Legal</Link>
            <span>·</span>
            <Link to="/condiciones-kit-espacio-datos" className="hover:text-foreground transition-colors">Condiciones</Link>
            <span>·</span>
            <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContratoKitEspacioDatos;
