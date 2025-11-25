import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

// Route mapping configuration
const ROUTE_LABELS: Record<string, string> = {
  'clinical': 'Cockpit Clínico',
  'lab-hub': 'Hub de Laboratorio',
  'research': 'Investigación y Federated Learning',
  'epidemiology': 'Mapa Epidemiológico',
  'claims': 'Gestión de Smart Claims',
  'wallet': 'Mi Wallet de Salud',
  'ai-assistant': 'Asistente IA Diagnóstico',
  'eprescription': 'e-Receta Europea',
  'triage': 'Teledentistry Triage',
  'inventory': 'Inventario IoT',
  'auditor-dashboard': 'Dashboard de Auditoría',
  'patient': 'Paciente',
  'patients': 'Pacientes',
  'history': 'Historial',
  'orders': 'Órdenes',
  'order': 'Orden',
};

interface EntityName {
  id: string;
  name: string;
}

export function Breadcrumbs() {
  const location = useLocation();
  const [entityNames, setEntityNames] = useState<Record<string, string>>({});

  // Parse path segments
  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '');

  // Detect UUIDs in the path and fetch their friendly names
  useEffect(() => {
    const fetchEntityNames = async () => {
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      const names: Record<string, string> = {};

      for (const segment of pathSegments) {
        if (uuidRegex.test(segment)) {
          // Try to fetch from patients first
          const { data: patient } = await supabase
            .from('patients')
            .select('id, full_name')
            .eq('id', segment)
            .single();

          if (patient) {
            names[segment] = patient.full_name;
            continue;
          }

          // Try lab_orders
          const { data: order } = await supabase
            .from('lab_orders')
            .select('id')
            .eq('id', segment)
            .single();

          if (order) {
            names[segment] = `Orden ${segment.slice(0, 8)}`;
            continue;
          }

          // Fallback to generic label
          names[segment] = `ID ${segment.slice(0, 8)}`;
        }
      }

      setEntityNames(names);
    };

    fetchEntityNames();
  }, [location.pathname]);

  // Build breadcrumb items
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    const isLast = index === pathSegments.length - 1;

    // Get label: entity name, route label, or segment itself
    const label = entityNames[segment] || ROUTE_LABELS[segment] || segment;

    return {
      label,
      path,
      isLast,
    };
  });

  // Don't show breadcrumbs on root or auth pages
  if (pathSegments.length === 0 || pathSegments[0] === 'auth') {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground px-6 py-3 border-b bg-background">
      <Link
        to="/"
        className="flex items-center hover:text-primary transition-colors"
        aria-label="Inicio"
      >
        <Home className="h-4 w-4" />
      </Link>

      {breadcrumbItems.map((item, index) => (
        <div key={item.path} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
          
          {item.isLast ? (
            <span className="font-medium text-foreground">
              {item.label}
            </span>
          ) : (
            <Link
              to={item.path}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
