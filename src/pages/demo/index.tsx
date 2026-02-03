import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  PawPrint, 
  Stethoscope, 
  Building2, 
  FlaskConical,
  ArrowLeft,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";

interface ProfileOption {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  gradient: string;
  features: string[];
}

const profiles: ProfileOption[] = [
  {
    id: "tutor",
    title: "Tutor de Mascotas",
    subtitle: "Patient/Owner",
    description: "Panel enfocado en el bienestar de tus mascotas, control de gastos y privacidad de datos",
    icon: <PawPrint className="w-10 h-10" />,
    path: "/demo/tutor",
    gradient: "from-blue-500 to-cyan-400",
    features: ["Salud de mascotas", "Economía familiar", "Privacidad de datos", "Tokens de monetización"],
  },
  {
    id: "vet",
    title: "Médico Veterinario",
    subtitle: "Doctor/Clinician",
    description: "Panel de eficiencia clínica con calidad diagnóstica, hospitalizados y copiloto AI",
    icon: <Stethoscope className="w-10 h-10" />,
    path: "/demo/vet",
    gradient: "from-emerald-500 to-teal-400",
    features: ["Productividad diaria", "Calidad clínica", "Hospitalización", "Copiloto AI"],
  },
  {
    id: "clinic",
    title: "Director de Clínica",
    subtitle: "Manager/CEO",
    description: "Centro de mando con rentabilidad, operaciones y benchmarking federado",
    icon: <Building2 className="w-10 h-10" />,
    path: "/demo/clinic",
    gradient: "from-indigo-500 to-purple-400",
    features: ["Finanzas", "Excelencia operativa", "Benchmarking", "Supply Chain"],
  },
  {
    id: "research",
    title: "Científico de Datos",
    subtitle: "Researcher",
    description: "Dashboard de datasets, federated learning e impacto científico One Health",
    icon: <FlaskConical className="w-10 h-10" />,
    path: "/demo/research",
    gradient: "from-amber-500 to-orange-400",
    features: ["Marketplace datos", "Federated Learning", "Epidemiología", "Impacto científico"],
  },
];

const DemoSelector: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 pt-4">
        <NavigationControls />
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Demo Interactivo de Paneles KPI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Selecciona tu Perfil
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Cada tipología de usuario tiene un panel de control optimizado 
              para sus necesidades específicas. Explora las demos interactivas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Cards */}
      <section className="py-16 md:py-20 -mt-16 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={profile.path} className="block group">
                  <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card">
                    <div className={`h-2 bg-gradient-to-r ${profile.gradient}`} />
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${profile.gradient} text-white shadow-lg`}>
                          {profile.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {profile.title}
                          </h3>
                          <p className="text-sm text-muted-foreground font-medium">
                            {profile.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {profile.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {profile.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-border">
                        <span className="text-sm font-semibold text-primary group-hover:underline">
                          Ver Demo →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Back link */}
          <div className="text-center mt-12">
            <Link
              to="/portal/kpi"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Portal KPI
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default DemoSelector;
