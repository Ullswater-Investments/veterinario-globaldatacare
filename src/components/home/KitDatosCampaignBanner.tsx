import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Euro, Zap, CheckCircle2, PawPrint, FileText, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import logoGobiernoRedEs from '@/assets/logo-gobierno-red-es.png';
import logoKitEspacioDatos from '@/assets/logo-kit-espacio-datos.jpg';
export const KitDatosCampaignBanner = () => {
  return <section className="py-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header with badges */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/20">
                <Euro className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                AYUDAS KIT ESPACIO DE DATOS
              </h2>
            </div>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {/* Deadline badge */}
              <motion.div animate={{
              scale: [1, 1.03, 1]
            }} transition={{
              repeat: Infinity,
              duration: 1.5
            }}>
                <Badge className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-amber-500 hover:bg-amber-600 text-white">Inscripción hasta 20 de Marzo del 2026<Clock className="h-4 w-4" />
                  Inscripción hasta 24 Feb
                </Badge>
              </motion.div>
              {/* Limited spots badge */}
              <motion.div animate={{
              scale: [1, 1.05, 1]
            }} transition={{
              repeat: Infinity,
              duration: 2
            }}>
                <Badge variant="destructive" className="flex items-center gap-1.5 px-3 py-1.5 text-sm">
                  <Zap className="h-4 w-4" />
                  PLAZAS LIMITADAS
                </Badge>
              </motion.div>
            </div>
          </div>

          {/* Main message */}
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-6">
            Digitaliza tu clínica veterinaria con hasta <span className="font-bold text-primary">30.000 €</span> de Subvención a fondo perdido de RED.ES
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2 text-sm md:text-base">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="text-foreground">Tramitación incluida en la cuota mensual</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="text-foreground">Subvención 85-90%</span>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="text-foreground">Sin letra pequeña</span>
            </div>
          </div>

          {/* Hero CTA Button - Máximo impacto */}
          <div className="flex justify-center mb-6">
            <Link to="/condiciones-kit-espacio-datos" className="w-full sm:w-auto">
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="relative overflow-hidden rounded-full">
                <Button size="lg" className="relative w-full sm:w-auto text-lg md:text-xl font-bold px-8 md:px-12 py-7 md:py-8 
                             bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 
                             hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600
                             text-white rounded-full shadow-2xl 
                             shadow-emerald-500/30 hover:shadow-emerald-500/50
                             transition-all duration-300 group">
                  {/* Shimmer effect overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                   -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full" />
                  
                  {/* Content */}
                  <Euro className="mr-3 h-6 w-6" />
                  <span>SOLICITA LAS AYUDAS KIT ESPACIO DE DATOS</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inscripcion-kit-espacio-datos">
              <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg">
                <PawPrint className="mr-2 h-5 w-5" />
                Solicitar Inscripción por 190€ al mes
              </Button>
            </Link>
            <Link to="/condiciones-kit-espacio-datos">
              <Button size="lg" variant="outline" className="text-base px-6 py-6 border-primary text-primary hover:bg-primary/5">
                <FileText className="mr-2 h-5 w-5" />
                Ver Condiciones
              </Button>
            </Link>
          </div>

          {/* Logo institucional */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="https://www.acelerapyme.gob.es/kit-espacios-de-datos" target="_blank" rel="noopener noreferrer">
              <img src={logoKitEspacioDatos} alt="Kit Espacios de Datos" className="h-14 md:h-16 object-contain hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://www.red.es/es/iniciativas/proyectos/kit-espacios-de-datos" target="_blank" rel="noopener noreferrer">
              <img src={logoGobiernoRedEs} alt="Gobierno de España - Ministerio para la Transformación Digital - Red.es" className="h-10 md:h-12 object-contain hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};