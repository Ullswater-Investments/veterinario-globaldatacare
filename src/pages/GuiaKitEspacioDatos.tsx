import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Euro,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  FileText,
  PawPrint,
  Shield,
  Building2,
  Smartphone,
  Network,
  BrainCircuit,
  ShoppingCart,
  BarChart4,
  ArrowLeft,
  ExternalLink,
  Heart,
  Stethoscope,
  Globe,
  Lock,
  Handshake,
  CircleCheck,
  FileCheck,
  Send,
} from 'lucide-react';
import { motion } from 'framer-motion';

const GuiaKitEspacioDatos = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const servicios = [
    {
      icon: Stethoscope,
      title: 'Gestión Clínica Digital (FHIR)',
      description: 'Dashboard 360° veterinario con conexión al PMS existente. Historiales clínicos interoperables con estándar HL7 FHIR.',
      color: 'bg-blue-500/10 text-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Wallet del Tutor',
      description: 'App móvil para tutores con historial de mascota, citas, documentos y comunicación directa con la clínica.',
      color: 'bg-purple-500/10 text-purple-600'
    },
    {
      icon: Shield,
      title: 'Pasaporte Digital (DPP)',
      description: 'Trazabilidad de vacunas, microchips y medicamentos. Cumplimiento normativo europeo de productos digitales.',
      color: 'bg-green-500/10 text-green-600'
    },
    {
      icon: BrainCircuit,
      title: 'Investigación One Health',
      description: 'IA Federada para análisis de datos sin comprometer la privacidad. Marketplace de datos veterinarios anonimizados.',
      color: 'bg-amber-500/10 text-amber-600'
    },
    {
      icon: ShoppingCart,
      title: 'Central de Compras',
      description: 'Pedidos predictivos con descuentos de red. Optimización de inventario y acceso a proveedores certificados.',
      color: 'bg-pink-500/10 text-pink-600'
    },
    {
      icon: BarChart4,
      title: 'Dashboard KPIs',
      description: 'Inteligencia operativa con benchmarking sectorial. Métricas de rendimiento y análisis comparativo.',
      color: 'bg-cyan-500/10 text-cyan-600'
    },
  ];

  const beneficiosAyuda = [
    { icon: Euro, text: 'Cobertura del 100% de costes de implantación tecnológica' },
    { icon: FileText, text: 'Tramitación administrativa completamente incluida' },
    { icon: Users, text: 'Soporte técnico especializado durante todo el proceso' },
    { icon: Clock, text: 'Acceso inmediato a la plataforma desde la firma' },
    { icon: Shield, text: 'Sin riesgo: solo pagas la entrada fraccionada' },
    { icon: Handshake, text: 'Representación voluntaria ante RED.ES' },
  ];

  const pasosProceso = [
    {
      num: 1,
      title: 'Adhesión',
      description: 'Firmas el contrato de adhesión y el Acta de Conformidad. Se activa tu acceso a la plataforma.',
      icon: FileCheck,
      color: 'bg-blue-500'
    },
    {
      num: 2,
      title: 'Solicitud',
      description: 'VetSpace presenta la solicitud como tu Representante Voluntario ante RED.ES.',
      icon: Send,
      color: 'bg-amber-500'
    },
    {
      num: 3,
      title: 'Concesión',
      description: 'RED.ES evalúa y comunica la resolución. Si se aprueba, se activa la Fase 2 automáticamente.',
      icon: CircleCheck,
      color: 'bg-green-500'
    },
    {
      num: 4,
      title: 'Justificación',
      description: 'VetSpace gestiona toda la documentación de justificación ante el organismo público.',
      icon: FileText,
      color: 'bg-purple-500'
    },
  ];

  const faqItems = [
    {
      question: '¿Qué es el Kit Espacio de Datos?',
      answer: 'Es un programa de ayudas del Gobierno de España, financiado con fondos europeos Next Generation EU y gestionado por RED.ES. Su objetivo es fomentar la soberanía del dato en PYMEs españolas a través de subvenciones a fondo perdido de hasta 30.000€.'
    },
    {
      question: '¿Quién puede solicitar la ayuda?',
      answer: 'Pueden solicitarla PYMEs y autónomos del sector veterinario en España que cumplan los requisitos de la convocatoria de RED.ES. VetSpace verifica tu elegibilidad durante el proceso de adhesión.'
    },
    {
      question: '¿Cuánto cuesta realmente?',
      answer: 'El coste inicial es de 1.140€ + IVA (190€/mes × 6 meses), fraccionado con Hokodo. Si consigues la subvención, el resto (hasta 30.000€) lo paga directamente RED.ES. Si no la consigues, tu compromiso termina en 6 meses.'
    },
    {
      question: '¿Qué pasa si no me conceden la subvención?',
      answer: 'Si la subvención es denegada, el contrato finaliza al término de la Fase 1 (6 meses). No hay prórroga automática ni obligaciones adicionales. Solo habrás pagado los 1.140€ + IVA de la fase inicial, con acceso completo a la plataforma durante ese periodo.'
    },
    {
      question: '¿Cuál es el plazo para solicitar?',
      answer: 'La convocatoria actual tiene como fecha límite de inscripción el 24 de febrero. Después de esta fecha, no se podrán procesar nuevas adhesiones para esta convocatoria.'
    },
    {
      question: '¿Qué diferencia hay entre Pack Esencial y Pack Integral?',
      answer: 'El Pack Esencial contempla una subvención de hasta 15.000€ y el Pack Integral hasta 30.000€. La diferencia está en el alcance de los módulos implementados y el nivel de servicios incluidos.'
    },
    {
      question: '¿Cómo se gestiona la tramitación?',
      answer: 'VetSpace actúa como tu Representante Voluntario ante RED.ES, encargándose de toda la tramitación administrativa: preparación de memoria técnica, presentación de solicitud y justificación del proyecto.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/condiciones-kit-espacio-datos" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Volver a Condiciones</span>
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
                ⚠️ Convocatoria abierta hasta el 24 de Febrero
              </Badge>
            </motion.div>
            
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm border-primary/30">
              <Euro className="mr-2 h-4 w-4" />
              Programa Kit Espacio de Datos · Fondos Next Generation EU
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Guía Completa del<br />Espacio de Datos de Salud Animal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre cómo digitalizar tu clínica veterinaria con subvenciones de hasta 30.000€ a fondo perdido
            </p>
          </motion.div>
        </div>
      </section>

      {/* ¿Qué es el Kit Espacio de Datos? */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Euro className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">¿Qué es el Kit Espacio de Datos?</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  El <strong className="text-foreground">Kit Espacio de Datos</strong> es un programa de ayudas del 
                  <strong className="text-foreground"> Gobierno de España</strong>, financiado con fondos europeos 
                  <strong className="text-foreground"> Next Generation EU</strong> y gestionado por 
                  <strong className="text-foreground"> RED.ES</strong>.
                </p>
                <p className="text-lg leading-relaxed">
                  Su objetivo es impulsar la <strong className="text-foreground">soberanía del dato</strong> en las 
                  PYMEs españolas, proporcionando subvenciones a fondo perdido de entre 
                  <strong className="text-primary"> 15.000€ y 30.000€</strong> para implementar soluciones tecnológicas 
                  que permitan gestionar, compartir y monetizar los datos de manera segura y conforme a la normativa europea.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Card className="text-center border-2 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="font-semibold text-foreground">Gobierno de España</p>
                    <p className="text-sm text-muted-foreground">Programa oficial de ayudas</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-2 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <Globe className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <p className="font-semibold text-foreground">Next Generation EU</p>
                    <p className="text-sm text-muted-foreground">Fondos europeos de recuperación</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-2 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <Network className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <p className="font-semibold text-foreground">RED.ES</p>
                    <p className="text-sm text-muted-foreground">Organismo gestor de la convocatoria</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ¿Qué es el Espacio de Datos de Salud Animal? */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-green-500/10">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">¿Qué es el Espacio de Datos de Salud Animal?</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                <p className="text-lg leading-relaxed">
                  El <strong className="text-foreground">Espacio de Datos de Salud Animal</strong> es una 
                  <strong className="text-foreground"> infraestructura tecnológica federada</strong> diseñada 
                  específicamente para clínicas veterinarias. Permite que cada clínica mantenga la 
                  <strong className="text-foreground"> soberanía sobre sus datos</strong> mientras participa 
                  en un ecosistema colaborativo bajo el paradigma <strong className="text-foreground">One Health</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-green-500/30 bg-green-50/50 dark:bg-green-950/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-green-500/10">
                        <Lock className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Soberanía del Dato</h3>
                        <p className="text-sm text-muted-foreground">
                          Tus datos permanecen bajo tu control. Tú decides qué compartir, con quién y en qué condiciones.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Network className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Interoperabilidad FHIR</h3>
                        <p className="text-sm text-muted-foreground">
                          Estándar HL7 FHIR adaptado a veterinaria para intercambio de historiales clínicos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-500/30 bg-purple-50/50 dark:bg-purple-950/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-purple-500/10">
                        <Shield className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Conectores EDC</h3>
                        <p className="text-sm text-muted-foreground">
                          Eclipse Dataspace Components para intercambio seguro y trazable de información.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-amber-500/10">
                        <BrainCircuit className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">One Health</h3>
                        <p className="text-sm text-muted-foreground">
                          Colaboración entre salud animal, humana y ambiental para mejor investigación.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios Incluidos */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Servicios Incluidos en el Espacio de Datos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              6 módulos principales que transformarán la gestión de tu clínica veterinaria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {servicios.map((servicio, index) => (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-3">
                    <div className={`p-3 rounded-lg w-fit ${servicio.color}`}>
                      <servicio.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{servicio.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{servicio.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios de la Ayuda */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Beneficios de la Ayuda Kit Espacio de Datos</h2>
              <p className="text-muted-foreground">
                Todo lo que incluye el programa de subvención
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {beneficiosAyuda.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg border"
                >
                  <div className="p-2 rounded-full bg-green-500/10 shrink-0">
                    <beneficio.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-foreground">{beneficio.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cuánto puedo conseguir? */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Cuánto Puedo Conseguir?</h2>
            <p className="text-muted-foreground">
              Importes de subvención según el pack elegido
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="border-2 hover:border-primary/50 transition-colors h-full">
                <CardHeader className="text-center pb-4">
                  <Badge className="w-fit mx-auto mb-2">Pack Esencial</Badge>
                  <CardTitle className="text-4xl font-bold text-primary">15.000€</CardTitle>
                  <CardDescription>Subvención máxima a fondo perdido</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Módulos esenciales de gestión</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Wallet del tutor básico</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Tramitación administrativa</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Pago anticipado</p>
                    <p className="text-2xl font-bold">760€ <span className="text-sm font-normal text-muted-foreground">+ IVA</span></p>
                    <p className="text-xs text-muted-foreground">(126€/mes × 6 meses)</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="border-2 border-primary/50 bg-primary/5 h-full relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary">Recomendado</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <Badge variant="outline" className="w-fit mx-auto mb-2 border-primary text-primary">Pack Integral</Badge>
                  <CardTitle className="text-4xl font-bold text-primary">30.000€</CardTitle>
                  <CardDescription>Subvención máxima a fondo perdido</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Todos los módulos del ecosistema</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Wallet del tutor completo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Pasaporte digital (DPP)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Investigación One Health</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Dashboard KPIs avanzado</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Pago anticipado</p>
                    <p className="text-2xl font-bold">1.140€ <span className="text-sm font-normal text-muted-foreground">+ IVA</span></p>
                    <p className="text-xs text-muted-foreground">(190€/mes × 6 meses)</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona el proceso? */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Cómo Funciona el Proceso?</h2>
            <p className="text-muted-foreground">
              4 pasos simples para conseguir tu subvención
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {pasosProceso.map((paso, index) => (
                <motion.div
                  key={paso.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <Card className="h-full text-center">
                    <CardContent className="pt-6">
                      <div className={`mx-auto w-12 h-12 rounded-full ${paso.color} flex items-center justify-center mb-4`}>
                        <paso.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-xs font-medium text-muted-foreground mb-1">PASO {paso.num}</div>
                      <h3 className="font-semibold text-foreground mb-2">{paso.title}</h3>
                      <p className="text-sm text-muted-foreground">{paso.description}</p>
                    </CardContent>
                  </Card>
                  {index < pasosProceso.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
              <p className="text-muted-foreground">
                Resolvemos tus dudas sobre el programa
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-t from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para transformar tu clínica?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Accede a hasta 30.000€ de subvención a fondo perdido para digitalizar tu práctica veterinaria
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/inscripcion-kit-espacio-datos">
                <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg">
                  <PawPrint className="mr-2 h-5 w-5" />
                  Solicitar Inscripción por 190€/mes
                </Button>
              </Link>
              <Link to="/condiciones-kit-espacio-datos">
                <Button size="lg" variant="outline" className="text-base px-6 py-6 border-primary text-primary hover:bg-primary/5">
                  <FileText className="mr-2 h-5 w-5" />
                  Ver Condiciones Detalladas
                </Button>
              </Link>
            </div>
            <a 
              href="https://red.es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              Más información en RED.ES
            </a>
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

export default GuiaKitEspacioDatos;
