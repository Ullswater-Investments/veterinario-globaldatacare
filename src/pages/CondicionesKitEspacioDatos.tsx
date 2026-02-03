import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import {
  Euro,
  Clock,
  Target,
  ArrowRight,
  CheckCircle2,
  Lock,
  FileCheck,
  Users,
  Headphones,
  FileText,
  PawPrint,
  AlertTriangle,
  Shield,
  Building2,
  Banknote,
  Calendar,
  ArrowLeft,
  ScrollText,
  Info,
} from 'lucide-react';
import { motion } from 'framer-motion';
import logoGobiernoRedEs from '@/assets/logo-gobierno-red-es.png';

const CondicionesKitEspacioDatos = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const serviciosIncluidos = [
    { icon: Shield, text: 'Acceso al Espacio de Datos Federado de Salud Animal' },
    { icon: Users, text: 'Consultoría técnica y administrativa completa' },
    { icon: FileText, text: 'Tramitación de la ayuda "Kit Espacio de Datos"' },
    { icon: FileCheck, text: 'Redacción de memoria técnica para RED.ES' },
    { icon: Building2, text: 'Presentación de solicitud ante el organismo competente' },
    { icon: CheckCircle2, text: 'Justificación completa del proyecto subvencionado' },
    { icon: Headphones, text: 'Soporte durante todo el proceso de concesión' },
  ];

  const faqItems = [
    {
      question: '¿Puedo cancelar durante los 6 primeros meses?',
      answer: 'No. La Fase 1 es irrevocable dado que los recursos técnicos y de consultoría se ponen a disposición desde el día 1 de la firma. Esta condición garantiza la viabilidad del servicio de tramitación.'
    },
    {
      question: '¿Qué pasa si me conceden la subvención?',
      answer: 'El contrato se prorroga automáticamente por 12 meses adicionales (Fase 2). El precio de esta fase será equivalente al importe de la subvención concedida (entre 15.000€ y 30.000€), que será abonado directamente por el organismo público.'
    },
    {
      question: '¿Qué es el Acta de Conformidad?',
      answer: 'Es un documento digital que certifica la recepción efectiva del servicio (credenciales de acceso, inicio de consultoría). Su firma activa irrevocablemente las obligaciones de pago ante la entidad financiera Hokodo.'
    },
    {
      question: '¿Quién tramita la subvención?',
      answer: 'VetSpace Technology S.L. actúa como tu Representante Voluntario ante RED.ES y organismos públicos. Debes facilitar la documentación necesaria en un plazo máximo de 5 días hábiles cuando se te solicite.'
    },
    {
      question: '¿Y si hay incidencias técnicas?',
      answer: 'Las reclamaciones técnicas se gestionan por canales de soporte con SLA definido, pero no afectan el flujo de pagos comprometido con la entidad financiera. Pagos e incidencias técnicas son vías separadas.'
    },
    {
      question: '¿Qué pasa si no me conceden la subvención?',
      answer: 'Si la subvención es denegada, el contrato finaliza al término de la Fase 1 (6 meses). No hay prórroga automática ni obligaciones adicionales. Solo habrás pagado los 1.140€ + IVA de la fase inicial.'
    },
    {
      question: '¿Cómo funciona la financiación con Hokodo?',
      answer: 'Hokodo es una entidad financiera externa que gestiona el fraccionamiento del pago. Ellos abonan el importe total a VetSpace y tú pagas las cuotas mensuales a Hokodo. El Acta de Conformidad activa esta financiación.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Volver al inicio</span>
          </Link>
          <Link to="/inscripcion-kit-espacio-datos">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <PawPrint className="mr-2 h-4 w-4" />
              Solicitar Inscripción
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            {/* Deadline Badge */}
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mb-4"
            >
              <Badge className="px-4 py-2 text-sm bg-amber-500 hover:bg-amber-600 text-white">
                <Clock className="mr-2 h-4 w-4" />
                ⚠️ Plazo de Inscripción hasta el 24 de Febrero
              </Badge>
            </motion.div>
            
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/30">
              <Euro className="mr-2 h-4 w-4" />
              Programa Kit Espacio de Datos
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Condiciones Transparentes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Todo lo que necesitas saber antes de inscribirte. Sin letra pequeña.
            </p>
            <img 
              src={logoGobiernoRedEs} 
              alt="Gobierno de España - Ministerio para la Transformación Digital - Red.es" 
              className="mx-auto h-10 md:h-12 object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Cuadro de Pricing con Criterios */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <motion.div {...fadeInUp}>
              <Card className="border-2 border-primary/50 bg-primary/5">
                <CardHeader className="text-center pb-4">
                  <Badge className="w-fit mx-auto mb-2 bg-primary hover:bg-primary/90">
                    Kit Espacio de Datos
                  </Badge>
                  <CardTitle className="text-4xl md:text-5xl font-bold text-primary">
                    15.000€ — 30.000€
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    Subvención a fondo perdido según criterios RED.ES
                  </p>
                  
                  {/* Explicación de criterios de subvención */}
                  <div className="mt-4 space-y-3 text-left">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                        Hasta 15.000€
                      </Badge>
                      <p className="text-sm text-green-700 mt-2">
                        Para clínicas que inician su transformación digital en gestión de datos de salud animal.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
                        Hasta 30.000€
                      </Badge>
                      <p className="text-sm text-blue-700 mt-2">
                        Para entidades con experiencia demostrable en gestión de datos de salud animal.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <Info className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                      <p className="text-xs text-amber-700">
                        Durante nuestra consultoría inicial, evaluamos tu nivel de madurez y te recomendamos el importe más adecuado para tu clínica.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Todos los módulos del ecosistema</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Wallet del tutor completo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Pasaporte digital (DPP)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Investigación One Health</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Dashboard KPIs avanzado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Tramitación administrativa 100% incluida</span>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="text-center pt-2">
                    <p className="text-sm text-muted-foreground mb-1">Pago anticipado</p>
                    <p className="text-2xl font-bold text-foreground">
                      1.140€ <span className="text-base font-normal text-muted-foreground">+ IVA</span>
                    </p>
                    <p className="text-sm text-muted-foreground">(190€/mes × 6 meses)</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resumen Ejecutivo - 3 Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="text-center border-2 hover:border-primary/50 transition-colors h-full">
                <CardHeader className="pb-2">
                  <div className="mx-auto p-3 rounded-full bg-primary/10 w-fit mb-2">
                    <Euro className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">190€/mes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Cuota fija + IVA</p>
                  <p className="text-xs text-muted-foreground mt-1">Durante 6 meses iniciales</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="text-center border-2 hover:border-amber-500/50 transition-colors h-full">
                <CardHeader className="pb-2">
                  <div className="mx-auto p-3 rounded-full bg-amber-500/10 w-fit mb-2">
                    <Clock className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-amber-600">6 meses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Fase inicial</p>
                  <p className="text-xs text-muted-foreground mt-1">Compromiso irrevocable</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="text-center border-2 hover:border-green-500/50 transition-colors h-full">
                <CardHeader className="pb-2">
                  <div className="mx-auto p-3 rounded-full bg-green-500/10 w-fit mb-2">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-green-600">30.000€</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Subvención máxima</p>
                  <p className="text-xs text-muted-foreground mt-1">A fondo perdido de RED.ES</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline de Fases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Estructura de Fases</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-stretch">
              {/* Fase 1 */}
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="border-2 border-amber-500/50 bg-amber-50/50 dark:bg-amber-950/20 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-amber-500 hover:bg-amber-600">FASE 1</Badge>
                      <Lock className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle className="text-2xl">6 Meses Irrevocable</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                      <Euro className="h-6 w-6 text-amber-600 shrink-0" />
                      <div>
                        <p className="font-semibold">190€/mes × 6 = 1.140€ + IVA</p>
                        <p className="text-sm text-muted-foreground">Financiación fraccionada con Hokodo</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                        <span>Sin posibilidad de cancelación anticipada</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Acceso inmediato a la plataforma</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Consultoría de tramitación incluida</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Conector */}
              <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
                <ArrowRight className="h-8 w-8 text-primary" />
              </div>

              {/* Fase 2 */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="border-2 border-green-500/50 bg-green-50/50 dark:bg-green-950/20 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-green-500 hover:bg-green-600">FASE 2 (Condicional)</Badge>
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Renovación automática 1 año</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Solo si se consigue la subvención</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                      <Banknote className="h-6 w-6 text-green-600 shrink-0" />
                      <div>
                        <p className="font-semibold">= Importe de la Subvención</p>
                        <p className="text-sm text-muted-foreground">Entre 15.000€ y 30.000€</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Solo si se aprueba la subvención</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Prórroga automática del contrato</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>Continuidad del ecosistema completo</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Indicador visual de conexión en móvil */}
            <div className="flex justify-center my-4 lg:hidden">
              <ArrowRight className="h-8 w-8 text-primary rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora ROI */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Retorno de tu Inversión</h2>
          
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/30 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Tu inversión */}
                <div className="p-6 bg-muted/30 text-center">
                  <p className="text-sm text-muted-foreground mb-2">TU INVERSIÓN</p>
                  <p className="text-4xl font-bold text-foreground">1.140€</p>
                  <p className="text-sm text-muted-foreground">+ IVA</p>
                </div>
                
                {/* Flecha */}
                <div className="flex items-center justify-center p-4 bg-primary/5">
                  <div className="flex flex-col items-center">
                    <ArrowRight className="h-8 w-8 text-primary hidden md:block" />
                    <ArrowRight className="h-8 w-8 text-primary rotate-90 md:hidden" />
                    <span className="text-xs text-primary font-medium mt-1">ROI 26x</span>
                  </div>
                </div>
                
                {/* Retorno */}
                <div className="p-6 bg-green-50 dark:bg-green-950/30 text-center">
                  <p className="text-sm text-muted-foreground mb-2">SUBVENCIÓN</p>
                  <p className="text-4xl font-bold text-green-600">30.000€</p>
                  <p className="text-sm text-muted-foreground">A fondo perdido</p>
                </div>
              </div>
              
              <div className="p-4 bg-primary/5 text-center border-t">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Financiación cubierta al 85-90%</strong> por fondos europeos Next Generation EU
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Grid de Cuotas Mensuales */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Proceso de Pago</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            6 cuotas mensuales financiadas a través de Hokodo
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[1, 2, 3, 4, 5, 6].map((mes) => (
                <motion.div
                  key={mes}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: mes * 0.1 }}
                >
                  <Card className="text-center hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Mes {mes}</span>
                      </div>
                      <p className="text-lg font-bold text-primary">190€</p>
                      <p className="text-xs text-muted-foreground">+ IVA</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-background rounded-lg border text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Banknote className="h-4 w-4" />
                <span>Financiación gestionada por <strong className="text-foreground">Hokodo</strong> (entidad financiera externa)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Incluidos */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Qué Incluye Tu Cuota</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Servicios completos de consultoría y acceso a la plataforma
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviciosIncluidos.map((servicio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
                >
                  <div className="p-2 rounded-full bg-primary/10 shrink-0">
                    <servicio.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{servicio.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Acordeón */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Preguntas Frecuentes</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Condiciones importantes que debes conocer
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Aviso Legal */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-amber-500/50 bg-amber-50/30 dark:bg-amber-950/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <CardTitle className="text-lg text-amber-700 dark:text-amber-500">Aviso Legal Importante</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Este documento tiene carácter contractual vinculante.</strong> Al aceptar las condiciones en el formulario de inscripción, estás formalizando un acuerdo legal con VetSpace Technology S.L.
                </p>
                <p>
                  Te recomendamos que revises el contrato completo con tu asesoría jurídica antes de la firma si tienes dudas sobre alguna cláusula.
                </p>
                <p>
                  La aceptación digital mediante checkbox y envío del formulario tiene la misma validez legal que la firma manuscrita, conforme al Reglamento eIDAS (UE) 910/2014.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-t from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para digitalizar tu clínica?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Accede a hasta 30.000€ de subvención para transformar tu práctica veterinaria
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/inscripcion-kit-espacio-datos">
                <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg">
                  <PawPrint className="mr-2 h-5 w-5" />
                  Solicitar Inscripción por 190€/mes
                </Button>
              </Link>
              <Link to="/guia-kit-espacio-datos">
                <Button size="lg" variant="outline" className="text-base px-6 py-6 border-primary text-primary hover:bg-primary/5">
                  <FileText className="mr-2 h-5 w-5" />
                  Ver Propuesta Completa
                </Button>
              </Link>
            </div>
            <Link to="/contrato-kit-espacio-datos">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ScrollText className="mr-2 h-4 w-4" />
                Ver Contrato Completo y Condiciones
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="py-8 bg-muted/50 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GLOBAL DATA CARE — Todos los derechos reservados</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <Link to="/legal" className="hover:text-foreground transition-colors">Aviso Legal</Link>
            <span>·</span>
            <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CondicionesKitEspacioDatos;
