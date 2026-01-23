import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BedDouble, 
  Dog, 
  Cat, 
  AlertTriangle, 
  Clock, 
  Pill, 
  Plus,
  Loader2,
  CheckCircle,
  AlertCircle,
  Activity
} from 'lucide-react';
import { useRoleProtection } from '@/hooks/useRoleProtection';
import { EmptyState } from '@/components/EmptyState';
import { formatDistanceToNow, isPast, differenceInMinutes } from 'date-fns';
import { es } from 'date-fns/locale';

// Icono según especie
function SpeciesIcon({ species }: { species?: string | null }) {
  switch (species?.toLowerCase()) {
    case 'canine':
    case 'dog':
    case 'perro':
      return <Dog className="h-5 w-5" />;
    case 'feline':
    case 'cat':
    case 'gato':
      return <Cat className="h-5 w-5" />;
    default:
      return <Dog className="h-5 w-5" />;
  }
}

// Configuración de estados de criticidad
const statusConfig = {
  stable: { 
    label: 'Estable', 
    color: 'bg-emerald-500', 
    textColor: 'text-emerald-700',
    bgLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    icon: CheckCircle 
  },
  observation: { 
    label: 'Observación', 
    color: 'bg-amber-500', 
    textColor: 'text-amber-700',
    bgLight: 'bg-amber-50',
    borderColor: 'border-amber-200',
    icon: AlertCircle 
  },
  critical: { 
    label: 'Crítico', 
    color: 'bg-red-500', 
    textColor: 'text-red-700',
    bgLight: 'bg-red-50',
    borderColor: 'border-red-200',
    icon: AlertTriangle 
  },
};

// Componente de temporizador de medicación
function MedicationTimer({ nextTime }: { nextTime: string | null }) {
  const [, setTick] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 60000); // Actualizar cada minuto
    return () => clearInterval(interval);
  }, []);

  if (!nextTime) {
    return <span className="text-muted-foreground text-sm">Sin programar</span>;
  }

  const nextDate = new Date(nextTime);
  const isOverdue = isPast(nextDate);
  const minutesUntil = differenceInMinutes(nextDate, new Date());
  const isUrgent = !isOverdue && minutesUntil <= 30;

  if (isOverdue) {
    return (
      <div className="flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <span className="text-red-600 font-bold text-sm">¡AHORA!</span>
      </div>
    );
  }

  if (isUrgent) {
    return (
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
        </span>
        <span className="text-amber-600 font-medium text-sm">
          En {minutesUntil} min
        </span>
      </div>
    );
  }

  return (
    <span className="text-muted-foreground text-sm">
      {formatDistanceToNow(nextDate, { addSuffix: true, locale: es })}
    </span>
  );
}

// Tarjeta de paciente hospitalizado
interface HospitalizationCardProps {
  hospitalization: any;
  patient: any;
}

function HospitalizationCard({ hospitalization, patient }: HospitalizationCardProps) {
  const status = statusConfig[hospitalization.current_status as keyof typeof statusConfig] || statusConfig.stable;
  const StatusIcon = status.icon;

  return (
    <Card className={`${status.bgLight} ${status.borderColor} border-l-4 hover:shadow-md transition-shadow`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Semáforo de estado */}
            <div className={`p-2 rounded-full ${status.color} text-white`}>
              <StatusIcon className="h-4 w-4" />
            </div>
            
            {/* Info del paciente */}
            <div className="flex items-center gap-2">
              <SpeciesIcon species={patient?.species} />
              <div>
                <h3 className="font-bold">{patient?.full_name || 'Paciente'}</h3>
                <p className="text-xs text-muted-foreground">
                  {patient?.breed || 'Sin raza especificada'}
                </p>
              </div>
            </div>
          </div>

          {/* Badge de box/jaula */}
          <Badge variant="outline" className="font-mono">
            Box {hospitalization.cage_number}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {/* Estado y tiempo de ingreso */}
        <div className="flex items-center justify-between text-sm">
          <Badge className={`${status.color} text-white`}>
            {status.label}
          </Badge>
          <span className="text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Ingreso: {formatDistanceToNow(new Date(hospitalization.admission_date), { addSuffix: true, locale: es })}
          </span>
        </div>

        {/* Próxima medicación */}
        <div className="flex items-center justify-between p-2 bg-white/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Pill className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Próxima medicación:</span>
          </div>
          <MedicationTimer nextTime={hospitalization.next_medication_time} />
        </div>

        {/* Notas de tratamiento */}
        {hospitalization.treatment_notes && (
          <div className="text-sm text-muted-foreground bg-white/50 p-2 rounded-lg">
            <span className="font-medium">Notas: </span>
            {hospitalization.treatment_notes}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Hospitalization() {
  const { hasAccess, loading: roleLoading } = useRoleProtection(['doctor', 'lab_tech', 'auditor']);

  // Obtener hospitalizaciones activas (sin fecha de alta)
  const { data: hospitalizations, isLoading } = useQuery({
    queryKey: ['active-hospitalizations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('hospitalizations')
        .select('*')
        .is('discharge_date', null)
        .order('current_status', { ascending: false }) // Críticos primero
        .order('next_medication_time', { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  // Obtener info de pacientes hospitalizados
  const patientIds = hospitalizations?.map(h => h.patient_id) || [];
  const { data: patients } = useQuery({
    queryKey: ['hospitalized-patients', patientIds],
    queryFn: async () => {
      if (patientIds.length === 0) return {};

      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .in('id', patientIds);

      if (error) throw error;

      const patientsMap: Record<string, any> = {};
      data?.forEach(p => {
        patientsMap[p.id] = p;
      });
      return patientsMap;
    },
    enabled: patientIds.length > 0,
  });

  // Contadores por estado
  const statusCounts = {
    critical: hospitalizations?.filter(h => h.current_status === 'critical').length || 0,
    observation: hospitalizations?.filter(h => h.current_status === 'observation').length || 0,
    stable: hospitalizations?.filter(h => h.current_status === 'stable').length || 0,
  };

  if (roleLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!hasAccess) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Hospitalización</h1>
          <p className="text-muted-foreground mt-1">Monitoreo de pacientes ingresados en tiempo real</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nuevo Ingreso
        </Button>
      </div>

      {/* Resumen de estados */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Ingresados</p>
                <p className="text-3xl font-bold">{hospitalizations?.length || 0}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <BedDouble className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Críticos</p>
                <p className="text-3xl font-bold text-red-600">{statusCounts.critical}</p>
              </div>
              <div className="p-3 bg-red-50 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">En Observación</p>
                <p className="text-3xl font-bold text-amber-600">{statusCounts.observation}</p>
              </div>
              <div className="p-3 bg-amber-50 rounded-full">
                <Activity className="h-6 w-6 text-amber-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Estables</p>
                <p className="text-3xl font-bold text-emerald-600">{statusCounts.stable}</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-full">
                <CheckCircle className="h-6 w-6 text-emerald-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de pacientes hospitalizados */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BedDouble className="h-5 w-5 text-primary" />
            Pacientes Ingresados
          </CardTitle>
          <CardDescription>
            Vista en tiempo real de todos los pacientes hospitalizados
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : hospitalizations && hospitalizations.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {hospitalizations.map((hosp) => (
                <HospitalizationCard 
                  key={hosp.id} 
                  hospitalization={hosp} 
                  patient={patients?.[hosp.patient_id]}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={BedDouble}
              title="Sin pacientes hospitalizados"
              description="No hay mascotas ingresadas actualmente"
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
