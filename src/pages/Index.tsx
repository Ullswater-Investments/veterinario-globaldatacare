import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Stethoscope, 
  Factory, 
  Shield, 
  TrendingUp, 
  FileCheck,
  ArrowRight,
  Network,
  Database,
  Lock,
  Users
} from 'lucide-react';

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
      title: 'Dr. Dent (Clínica)',
      description: 'Gestión clínica, Diagnóstico AI e Interoperabilidad Hospitalaria.',
      color: 'text-blue-600'
    },
    {
      icon: Factory,
      title: 'Lab Tech (Industria)',
      description: 'Trazabilidad, Pasaportes Digitales (DPP) y Gestión IoT.',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Ana Patient (Wallet)',
      description: 'Soberanía de datos, Consentimiento y Visualización 3D.',
      color: 'text-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Prof. Data (Investigación)',
      description: 'Aprendizaje Federado y análisis epidemiológico sin exponer privacidad.',
      color: 'text-orange-600'
    },
    {
      icon: FileCheck,
      title: 'SurePay (Seguros)',
      description: 'Smart Contracts y automatización de reclamaciones.',
      color: 'text-cyan-600'
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

            {/* CTA */}
            <Button 
              size="lg" 
              onClick={handleCTA}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto"
            >
              {user ? 'Ir a mi Dashboard' : 'Acceder al Ecosistema (Modo Demo)'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
                <Card 
                  key={index}
                  className="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer border-slate-200"
                >
                  <CardHeader>
                    <Icon className={`h-12 w-12 mb-4 ${portal.color}`} />
                    <CardTitle className="text-xl">{portal.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{portal.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Architecture Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Arquitectura de Confianza</h2>
            <p className="text-lg text-slate-600">Tecnologías que garantizan seguridad y soberanía</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-400">
              © 2025 OralSpace-X. Powered by Eclipse Dataspace Components, HL7 FHIR, SNODENT & Blockchain.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition">Documentación Técnica</a>
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
