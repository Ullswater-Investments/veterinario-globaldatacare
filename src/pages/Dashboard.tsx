import { useRole } from '@/contexts/RoleContext';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PawPrint, FlaskConical, CreditCard, Wallet, Activity, Shield, Cpu, Brain, FileText, Wifi, Beaker, Dog, Cat, Heart } from 'lucide-react';

const roleGreetings = {
  doctor: {
    title: '¡Bienvenido, Veterinario!',
    description: 'Accede a tu cockpit clínico y herramientas de diagnóstico animal',
    icon: PawPrint,
  },
  lab_tech: {
    title: '¡Bienvenido al Laboratorio!',
    description: 'Gestiona análisis clínicos e inventario farmacéutico',
    icon: FlaskConical,
  },
  researcher: {
    title: '¡Bienvenido, Investigador!',
    description: 'Explora datasets federados One Health y estudios epidemiológicos',
    icon: FlaskConical,
  },
  insurance_admin: {
    title: '¡Bienvenido, Administrador!',
    description: 'Gestiona reclamaciones y detección de fraude',
    icon: CreditCard,
  },
  patient: {
    title: '¡Bienvenido, Tutor!',
    description: 'Gestiona los datos de salud de tus mascotas',
    icon: Heart,
  },
  auditor: {
    title: 'Panel de Auditoría',
    description: 'Vista completa del ecosistema veterinario con datos sintéticos',
    icon: PawPrint,
  },
};

export default function Dashboard() {
  const { currentRole } = useRole();

  const greeting = currentRole ? roleGreetings[currentRole] : null;
  const Icon = greeting?.icon;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Global Data Care - Veterinario</p>
      </div>

      {greeting && Icon && (
        <Card className="bg-gradient-to-br from-primary/5 to-white border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-3 bg-primary rounded-lg">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              {greeting.title}
            </CardTitle>
            <CardDescription className="text-base">
              {greeting.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Usa la barra lateral para navegar entre las diferentes secciones de la plataforma.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/tech/fhir" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-primary cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">Interoperabilidad FHIR</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Datos clínicos multiespecie unificados de múltiples fuentes
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/tech/identity" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-accent cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <CardTitle className="text-base">Identidad Descentralizada</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Wallets con control total del tutor (DID)
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/tech/dpp" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-amber-400 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Cpu className="h-5 w-5 text-amber-600" />
                </div>
                <CardTitle className="text-base">Pasaporte Digital (DPP)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Trazabilidad blockchain para microchips, vacunas y pedigrís
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/tech/federated" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-purple-400 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Brain className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-base">Federated Learning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Investigación One Health sin comprometer privacidad
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/tech/contracts" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-cyan-400 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <FileText className="h-5 w-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Smart Contracts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Automatización de pagos y detección de fraude
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/tech/iot" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-teal-400 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <Wifi className="h-5 w-5 text-teal-600" />
                </div>
                <CardTitle className="text-base">IoT Integrado</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Monitoreo en tiempo real de equipos y stock farmacéutico
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/tech/labs" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-purple-400 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Beaker className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-base">GDC Labs (Beta)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Casos de uso experimentales del futuro de la plataforma
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Consulting CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-foreground to-primary/90 rounded-xl p-8 text-primary-foreground">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-3">¿Listo para implementar Global Data Care en su red?</h2>
          <p className="text-primary-foreground/70 mb-6">
            Explore nuestra propuesta técnica completa con arquitectura, metodología de entrega y modelos de colaboración.
          </p>
          <Link to="/consulting/technical-proposal">
            <Button size="lg" className="bg-white text-foreground hover:bg-white/90">
              <FileText className="h-5 w-5 mr-2" />
              Ver Technical Whitepaper
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
