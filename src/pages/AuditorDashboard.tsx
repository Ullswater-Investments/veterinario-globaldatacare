import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Shield, Users, FileText, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function AuditorDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    patients: 0,
    encounters: 0,
    labOrders: 0,
    claims: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [
        { count: patientsCount },
        { count: encountersCount },
        { count: labOrdersCount },
        { count: claimsCount },
      ] = await Promise.all([
        supabase.from('patients').select('*', { count: 'exact', head: true }),
        supabase.from('clinical_encounters').select('*', { count: 'exact', head: true }),
        supabase.from('lab_orders').select('*', { count: 'exact', head: true }),
        supabase.from('smart_claims').select('*', { count: 'exact', head: true }),
      ]);

      setStats({
        patients: patientsCount || 0,
        encounters: encountersCount || 0,
        labOrders: labOrdersCount || 0,
        claims: claimsCount || 0,
      });
    };

    fetchStats();
  }, []);

  const quickAccess = [
    { title: 'Cockpit Clínico', url: '/clinical', description: 'Historial clínico unificado' },
    { title: 'Hub de Manufactura', url: '/lab-hub', description: 'Órdenes de laboratorio' },
    { title: 'Mercado de Datos', url: '/research', description: 'Federated Learning' },
    { title: 'Gestión de Claims', url: '/claims', description: 'Smart Contracts' },
    { title: 'Mi Wallet', url: '/wallet', description: 'Identidad descentralizada' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <Shield className="h-8 w-8 text-blue-600" />
          Panel de Auditoría del Ecosistema
        </h1>
        <p className="text-slate-500 mt-1">
          Vista completa del sistema OralSpace-X con datos sintéticos (Sandbox)
        </p>
      </div>

      {/* Métricas Globales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pacientes Federados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-3xl font-bold">{stats.patients}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Transacciones FHIR
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-green-600" />
              <span className="text-3xl font-bold">{stats.encounters}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pasaportes Digitales (DPP)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-purple-600" />
              <span className="text-3xl font-bold">{stats.labOrders}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Smart Claims Procesados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-orange-600" />
              <span className="text-3xl font-bold">{stats.claims}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Accesos Directos */}
      <Card>
        <CardHeader>
          <CardTitle>Accesos Rápidos a Módulos</CardTitle>
          <CardDescription>
            Navega por todas las vistas del ecosistema de salud digital
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {quickAccess.map((item) => (
              <Button
                key={item.url}
                variant="outline"
                className="h-auto py-4 flex flex-col items-start gap-1"
                onClick={() => navigate(item.url)}
              >
                <span className="font-semibold">{item.title}</span>
                <span className="text-xs text-muted-foreground">{item.description}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Información de Compliance */}
      <Card className="border-blue-200 bg-blue-50/50">
        <CardHeader>
          <CardTitle className="text-blue-900">Información de Compliance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-blue-800">
          <p>✓ Todos los datos visualizados son sintéticos (generados artificialmente)</p>
          <p>✓ No se exponen datos reales de pacientes (GDPR Safe)</p>
          <p>✓ Entorno aislado para pruebas de interoperabilidad Gaia-X</p>
          <p>✓ Modo auditoría activado con permisos de solo lectura</p>
        </CardContent>
      </Card>
    </div>
  );
}
