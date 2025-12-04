import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Stethoscope, 
  Factory, 
  Shield, 
  TrendingUp, 
  Package,
  BarChart3,
  ArrowRight,
  Network,
  Database,
  Lock,
  Users
} from 'lucide-react';
import { InteroperabilitySection } from '@/components/home/InteroperabilitySection';
import { FinalCTA } from '@/components/home/FinalCTA';

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [stats, setStats] = useState({ patients: 0, encounters: 0, labOrders: 0 });

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
      icon: Stethoscope,
      title: 'CLINICAS',
      description: 'Gestión clínica, Diagnóstico AI e Interoperabilidad Hospitalaria.',
      color: 'text-blue-600',
      link: '/portal/doctor'
    },
    {
      icon: Factory,
      title: 'Lab Tech (Industria)',
      description: 'Trazabilidad, Pasaportes Digitales (DPP) y Gestión IoT.',
      color: 'text-purple-600',
      link: '/portal/lab'
    },
    {
      icon: Shield,
      title: 'PACIENTE (Wallet)',
      description: 'Soberanía de datos, Consentimiento y Visualización 3D.',
      color: 'text-green-600',
      link: '/portal/patient'
    },
    {
      icon: TrendingUp,
      title: 'Prof. Data (Investigación)',
      description: 'Aprendizaje Federado y análisis epidemiológico sin exponer privacidad.',
      color: 'text-orange-600',
      link: '/portal/research'
    },
    {
      icon: Package,
      title: 'Central de Compras (Clínicas)',
      description: 'Planificación y seguimiento de compras de material médico-dental conectado a sistemas clínicos y proveedores homologados.',
      color: 'text-cyan-600',
      link: '/portal/procurement'
    },
    {
      icon: BarChart3,
      title: 'KPI Clínicas',
      description: 'Indicadores clave para valorar los esfuerzos de las clínicas hacia la excelencia médica y de servicio.',
      color: 'text-blue-600',
      link: '/dashboard'
    }
  ];

  const features = [
    {
      icon: Network,
      title: 'Interoperabilidad',
      subtitle: 'HL7 FHIR',
      description: 'Hablamos el idioma universal de la salud.'
    },
    {
      icon: Lock,
      title: 'Soberanía',
      subtitle: 'IDS / Gaia-X',
      description: 'Tus datos nunca salen de tu nodo sin contrato.'
    },
    {
      icon: Database,
      title: 'Trazabilidad',
      subtitle: 'Blockchain',
      description: 'Seguridad inmutable para implantes y prótesis.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="container mx-auto px-4 pt-20 pb-32">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              OralSpace-X: El Primer Espacio de Datos Federado para Salud Dental en Europa
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Conectando Clínicas, Laboratorios, Pacientes y Aseguradoras bajo estándares Gaia-X, FHIR y Soberanía Digital.
            </p>

            {/* Live Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <Card className="border-blue-200 bg-white/80 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stats.patients}+</div>
                  <div className="text-sm text-slate-600 flex items-center justify-center gap-2">
                    <Users className="h-4 w-4" />
                    Pacientes Federados
                  </div>
                </CardContent>
              </Card>
              <Card className="border-purple-200 bg-white/80 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stats.labOrders}+</div>
                  <div className="text-sm text-slate-600 flex items-center justify-center gap-2">
                    <Factory className="h-4 w-4" />
                    Pasaportes Digitales
                  </div>
                </CardContent>
              </Card>
              <Card className="border-cyan-200 bg-white/80 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">{stats.encounters}+</div>
                  <div className="text-sm text-slate-600 flex items-center justify-center gap-2">
                    <Network className="h-4 w-4" />
                    Intercambios FHIR
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Portals Section - Bento Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Un Ecosistema, Cinco Perspectivas</h2>
            <p className="text-lg text-slate-600">Cada actor tiene su propio portal especializado</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portals.map((portal, index) => {
              const Icon = portal.icon;
              return (
                <Link to={portal.link} key={index}>
                  <Card 
                    className="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer border-slate-200 h-full"
                  >
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

      <InteroperabilitySection />

      {/* Trust Architecture Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Arquitectura de Confianza</h2>
            <p className="text-lg text-slate-600">Tecnologías que garantizan seguridad y soberanía</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-2">{feature.subtitle}</p>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => navigate('/tech')}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Explorar Arquitectura Técnica
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              ACCURO TECHNOLOGY
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/consulting/technical-proposal" className="text-slate-400 hover:text-white transition">Whitepaper Técnico & Consultoría</Link>
              <Link to="/business/models" className="text-slate-400 hover:text-white transition">Documento Casos de Negocio</Link>
              <Link to="/presentation" className="text-slate-400 hover:text-white transition">Propuesta de Negocio</Link>
              <a href="#" className="text-slate-400 hover:text-white transition">GitHub del Proyecto</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Aviso Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
