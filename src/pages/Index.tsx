import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PawPrint, FlaskConical, Heart, TrendingUp, Package, BarChart3, ArrowRight, Network, Database, Lock, Cpu, Dog, Cat, ExternalLink, Stethoscope, Building2 } from 'lucide-react';
import { InteroperabilitySection } from '@/components/home/InteroperabilitySection';
import { FinalCTA } from '@/components/home/FinalCTA';
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import { KitDatosCampaignBanner } from '@/components/home/KitDatosCampaignBanner';
import logosKitDigital from '@/assets/logos-kit-digital.jpg';

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [stats, setStats] = useState({
    patients: 0,
    encounters: 0,
    labOrders: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [patientsRes, encountersRes, labOrdersRes] = await Promise.all([
        supabase.from('patients').select('*', { count: 'exact', head: true }),
        supabase.from('clinical_encounters').select('*', { count: 'exact', head: true }),
        supabase.from('lab_orders').select('*', { count: 'exact', head: true })
      ]);
      setStats({
        patients: patientsRes.count || 0,
        encounters: encountersRes.count || 0,
        labOrders: labOrdersRes.count || 0
      });
    };
    fetchStats();
  }, []);

  const handleCTA = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  const portals = [
    {
      icon: PawPrint,
      title: 'GESTIÓN VETERINARIA',
      description: 'Historia clínica unificada, Diagnóstico por Imagen con IA (Rayos X/Ecografía) e Interoperabilidad con Hospitales de Referencia.',
      color: 'text-primary',
      link: '/solutions/clinics'
    },
    {
      icon: Cpu,
      title: 'PASAPORTE DIGITAL (DPP)',
      description: 'Trazabilidad completa de vacunas, microchips, medicación y alimentación. Verificación de origen y recomendaciones del fabricante.',
      color: 'text-purple-600',
      link: '/solutions/product-passport'
    },
    {
      icon: Heart,
      title: 'TUTOR / PET PARENT (Wallet)',
      description: 'Soberanía de los datos de tu mascota. Consentimiento informado digital, calendario de vacunación y visualización de pruebas 3D.',
      color: 'text-accent',
      link: '/portal/patient'
    },
    {
      icon: TrendingUp,
      title: 'INVESTIGACIÓN "ONE HEALTH"',
      description: 'Aprendizaje Federado para estudios epidemiológicos y genéticos sin exponer la privacidad de los tutores ni datos comerciales.',
      color: 'text-amber-600',
      link: '/portal/research'
    },
    {
      icon: Package,
      title: 'ABASTECIMIENTO INTELIGENTE',
      description: 'Planificación automatizada de fármacos, nutrición clínica y material quirúrgico conectado a proveedores homologados.',
      color: 'text-cyan-600',
      link: '/portal/procurement'
    },
    {
      icon: BarChart3,
      title: 'EXCELENCIA VETERINARIA',
      description: 'Indicadores clave (KPIs) para medir la eficiencia del centro, la fidelización de los tutores y la calidad asistencial médica.',
      color: 'text-primary',
      link: '/portal/kpi'
    }
  ];

  const features = [
    {
      icon: Network,
      title: 'Interoperabilidad',
      subtitle: 'HL7 FHIR (Vet Extension)',
      description: 'Hablamos el idioma universal de la salud multiespecie.'
    },
    {
      icon: Lock,
      title: 'Soberanía',
      subtitle: 'IDS / Gaia-X',
      description: 'Los datos clínicos de los animales nunca salen de tu nodo sin contrato.'
    },
    {
      icon: Database,
      title: 'Trazabilidad',
      subtitle: 'Blockchain',
      description: 'Seguridad inmutable para pedigrís, registros de vacunación y cadena de suministro.'
    }
  ];

  const profileCards = [
    {
      title: "Tutor de Mascotas",
      subtitle: "Patient/Owner",
      subtitleColor: "text-emerald-500",
      description: "Panel centrado en la experiencia del tutor: salud de mascotas, economía familiar y control de datos personales.",
      icon: PawPrint,
      gradient: "from-blue-500 to-cyan-400",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-400",
      tags: ["Salud de mascotas", "Economía familiar", "Privacidad de datos", "Tokens de monetización"],
      path: "/demo/tutor",
    },
    {
      title: "Médico Veterinario",
      subtitle: "Doctor/Clinician",
      subtitleColor: "text-emerald-500",
      description: "Herramientas clínicas para el día a día: productividad, calidad asistencial y soporte de IA.",
      icon: Stethoscope,
      gradient: "from-emerald-500 to-teal-400",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-400",
      tags: ["Productividad diaria", "Calidad clínica", "Hospitalización", "Copiloto AI"],
      path: "/demo/vet",
    },
    {
      title: "Director de Clínica",
      subtitle: "Manager/CEO",
      subtitleColor: "text-indigo-500",
      description: "Visión ejecutiva: finanzas, operaciones, benchmarking y cadena de suministro.",
      icon: Building2,
      gradient: "from-indigo-500 to-purple-500",
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-500",
      tags: ["Finanzas", "Excelencia operativa", "Benchmarking", "Supply Chain"],
      path: "/demo/clinic",
    },
    {
      title: "Científico de Datos",
      subtitle: "Researcher",
      subtitleColor: "text-amber-500",
      description: "Acceso a datos federados, marketplace de datasets y herramientas de investigación.",
      icon: FlaskConical,
      gradient: "from-amber-500 to-orange-400",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-400",
      tags: ["Marketplace datos", "Federated Learning", "Epidemiología", "Impacto científico"],
      path: "/demo/research",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="container mx-auto px-4 pt-20 pb-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="flex justify-center gap-4 mb-6">
              <Dog className="h-12 w-12 text-primary" />
              <Cat className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              El primer Espacio de Datos Federado de Salud Animal en Europa
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Conectando Clínicas Veterinarias, Laboratorios, Tutores de Mascotas y Aseguradoras bajo estándares Gaia-X, FHIR y Soberanía Digital.
            </p>
            <div className="flex justify-center">
              <img 
                src={logosKitDigital} 
                alt="Logos institucionales: Gobierno de España, Red.es, Kit Digital, Plan de Recuperación, Unión Europea" 
                className="max-w-full md:max-w-2xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kit Espacio de Datos Campaign Banner */}
      <KitDatosCampaignBanner />

      {/* Mid CTA Section */}
      <section className="-mt-2 pt-0 pb-14 bg-white">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="/documents/Espacios_de_Datos_Elegibles_KTED.pdf#page=22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 hover:bg-primary/20 transition-colors cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            Ver Espacios de Datos Elegibles
          </a>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-0 tracking-tight leading-tight">
            El Futuro de la Medicina Veterinaria <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent">
              No es solo Digital, es Federado.
            </span>
          </h2>
        </div>
      </section>

      {/* Portals Section - Bento Grid */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portals.map((portal, index) => {
              const Icon = portal.icon;
              return (
                <Link to={portal.link} key={index}>
                  <Card className="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer border-border h-full">
                    <CardHeader>
                      <Icon className={`h-12 w-12 mb-4 ${portal.color}`} />
                      <CardTitle className="text-xl">{portal.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{portal.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Profile Cards Section */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Explora los Paneles por Perfil
            </h2>
            <p className="text-slate-500 mt-2">
              Cada stakeholder tiene su propio dashboard optimizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {profileCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <Card
                  key={card.title}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Barra de color superior */}
                  <div className={`h-2 bg-gradient-to-r ${card.gradient}`} />
                  
                  <CardContent className="p-6">
                    {/* Icono con gradiente */}
                    <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Título y subtítulo */}
                    <h4 className="font-bold text-lg text-slate-900 mb-1">
                      {card.title}
                    </h4>
                    <p className={`text-sm font-medium ${card.subtitleColor} mb-3`}>
                      {card.subtitle}
                    </p>

                    {/* Descripción */}
                    <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Enlace */}
                    <Link
                      to={card.path}
                      className="inline-flex items-center gap-1 text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors"
                    >
                      Ver Demo
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Architecture Section */}
      <section className="py-14 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Arquitectura de Confianza</h2>
            <p className="text-lg text-muted-foreground">Tecnologías que garantizan seguridad y bienestar animal</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{feature.subtitle}</p>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => navigate('/tech')} variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Explorar Arquitectura Técnica
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default Landing;