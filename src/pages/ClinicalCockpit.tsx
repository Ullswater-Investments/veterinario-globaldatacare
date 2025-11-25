import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Stethoscope, AlertTriangle, Loader2, Users } from 'lucide-react';
import { PatientSearchBar } from '@/components/clinical/PatientSearchBar';
import { PatientCard } from '@/components/clinical/PatientCard';
import { TimelineEvent } from '@/components/clinical/TimelineEvent';
import { EmptyState } from '@/components/EmptyState';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { useRoleProtection } from '@/hooks/useRoleProtection';
import { Tables } from '@/integrations/supabase/types';

export default function ClinicalCockpit() {
  // Proteger ruta: solo doctores pueden acceder
  const { hasAccess, loading: roleLoading } = useRoleProtection(['doctor']);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  if (roleLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!hasAccess) {
    return null; // El hook ya redirige
  }

  // Búsqueda de pacientes
  const { data: patients, isLoading: searchLoading } = useQuery({
    queryKey: ['patients', searchQuery],
    queryFn: async () => {
      if (!searchQuery) return [];
      
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .or(`full_name.ilike.%${searchQuery}%,did.ilike.%${searchQuery}%`)
        .limit(10);

      if (error) throw error;
      return data as Tables<'patients'>[];
    },
    enabled: searchQuery.length > 0,
  });

  // Timeline del paciente seleccionado
  const { data: encounters, isLoading: timelineLoading } = useQuery({
    queryKey: ['encounters', selectedPatientId],
    queryFn: async () => {
      if (!selectedPatientId) return [];

      const { data, error } = await supabase
        .from('clinical_encounters')
        .select('*')
        .eq('patient_id', selectedPatientId)
        .order('encounter_date', { ascending: false });

      if (error) throw error;
      return data as Tables<'clinical_encounters'>[];
    },
    enabled: !!selectedPatientId,
  });

  const selectedPatient = patients?.find(p => p.id === selectedPatientId);
  const hasHighRiskEncounters = encounters?.some(e => e.risk_level === 'high');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Cockpit Clínico</h1>
        <p className="text-slate-500 mt-1">Buscador federado de datos de pacientes</p>
      </div>

      {/* Buscador */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-primary" />
            Búsqueda Federada de Pacientes
          </CardTitle>
          <CardDescription>
            Busca pacientes por nombre o identificador descentralizado (DID)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <PatientSearchBar onSearch={setSearchQuery} loading={searchLoading} />

          {searchLoading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {patients && patients.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {patients.length} paciente{patients.length > 1 ? 's' : ''} encontrado{patients.length > 1 ? 's' : ''}
              </p>
              <div className="grid gap-3">
                {patients.map((patient) => (
                  <button
                    key={patient.id}
                    onClick={() => setSelectedPatientId(patient.id)}
                    className="text-left hover:opacity-80 transition-opacity"
                  >
                    <PatientCard patient={patient} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchQuery && !searchLoading && patients?.length === 0 && (
            <EmptyState
              icon={Users}
              title="No se encontraron pacientes"
              description={`No hay resultados para "${searchQuery}"`}
            />
          )}
        </CardContent>
      </Card>

      {/* Timeline Unificado */}
      {selectedPatient && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Timeline Clínico - {selectedPatient.full_name}</span>
              {hasHighRiskEncounters && (
                <Alert className="w-auto py-2 px-4" variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="ml-2">
                    Paciente con factores de riesgo
                  </AlertDescription>
                </Alert>
              )}
            </CardTitle>
            <CardDescription>
              Historia clínica unificada de fuentes federadas (Hospital + Clínica Dental)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {timelineLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : encounters && encounters.length > 0 ? (
              <ErrorBoundary fallbackMessage="Error visualizando datos médicos">
                <div className="space-y-4">
                  {encounters.map((encounter) => (
                    <TimelineEvent key={encounter.id} encounter={encounter} />
                  ))}
                </div>
              </ErrorBoundary>
            ) : (
              <EmptyState
                icon={Stethoscope}
                title="Sin registros clínicos"
                description="No hay encuentros clínicos registrados para este paciente"
              />
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
