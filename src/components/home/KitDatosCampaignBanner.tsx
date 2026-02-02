import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Euro, Zap, CheckCircle2, PawPrint, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export const KitDatosCampaignBanner = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header with badge */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/20">
                <Euro className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                AYUDAS KIT ESPACIO DE DATOS
              </h2>
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Badge variant="destructive" className="flex items-center gap-1.5 px-3 py-1.5 text-sm">
                <Zap className="h-4 w-4" />
                PLAZAS LIMITADAS
              </Badge>
            </motion.div>
          </div>

          {/* Main message */}
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-6">
            Digitaliza tu clínica veterinaria con hasta <span className="font-bold text-primary">30.000 €</span> de Subvención a fondo perdido de RED.ES
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2 text-sm md:text-base">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="text-foreground">Tramitación 100% gratuita</span>
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

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inscripcion-kit-espacio-datos">
              <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg">
                <PawPrint className="mr-2 h-5 w-5" />
                Solicitar Inscripción por 190€ al mes
              </Button>
            </Link>
            <Link to="/propuesta-kit-espacio-datos">
              <Button size="lg" variant="outline" className="text-base px-6 py-6 border-primary text-primary hover:bg-primary/5">
                <FileText className="mr-2 h-5 w-5" />
                Ver Condiciones
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
