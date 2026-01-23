import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { PawPrint, AlertTriangle, Loader2, Dog } from 'lucide-react';
import { PatientSearchBar } from '@/components/clinical/PatientSearchBar';
import { PatientCard } from '@/components/clinical/PatientCard';
import { TimelineEvent } from '@/components/clinical/TimelineEvent';
import { EmptyState } from '@/components/EmptyState';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { useRoleProtection } from '@/hooks/useRoleProtection';
import { Tables } from '@/integrations/supabase/types';

export default function ClinicalCockpit() {
  // Proteger ruta: solo veterinarios pueden acceder
  const { hasAccess, loading: roleLoading } = useRoleProtection(['doctor']);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'name' | 'microchip' | 'guardian'>('name');
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  // Búsqueda de pacientes (mascotas)
  const { data: patients, isLoading: searchLoading } = useQuery({
    queryKey: ['patients', searchQuery, searchType],
    queryFn: async () => {
      if (!searchQuery) return [];
      
      // Búsqueda según el tipo seleccionado
      if (searchType === 'guardian') {
        // Para buscar por tutor, primero obtenemos los IDs de los perfiles
        const { data: profiles } = await supabase
          .from('profiles')
          .select('id')
          .ilike('full_name', `%${searchQuery}%`);
        
        if (!profiles || profiles.length === 0) {
          return [];
        }
        
        const guardianIds = profiles.map(p => p.id);
        const { data, error } = await (supabase
          .from('patients')
          .select('*') as any)
          .in('guardian_id', guardianIds)
          .limit(10);
        
        if (error) throw error;
        return data as Tables<'patients'>[];
      }
      
      // Búsqueda por nombre o microchip
      let filterColumn = 'full_name';
      if (searchType === 'microchip') {
        filterColumn = 'microchip_id';
      }
      
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .or(searchType === 'name' 
          ? `full_name.ilike.%${searchQuery}%,did.ilike.%${searchQuery}%`
          : `microchip_id.ilike.%${searchQuery}%`)
        .limit(10);

      if (error) throw error;
      return data as Tables<'patients'>[];
    },
    enabled: searchQuery.length > 0,
  });

  // Obtener peso más reciente y anterior para cada paciente
  const patientIds = patients?.map(p => p.id) || [];
  const { data: weightData } = useQuery({
    queryKey: ['weights', patientIds],
    queryFn: async () => {
      if (patientIds.length === 0) return {};
      
      const weights: Record<string, { latest: number | null; previous: number | null }> = {};
      
      for (const patientId of patientIds) {
        const { data } = await supabase
          .from('weight_history')
          .select('weight_kg')
          .eq('patient_id', patientId)
          .order('recorded_at', { ascending: false })
          .limit(2);
        
        if (data && data.length > 0) {
          weights[patientId] = {
            latest: Number(data[0].weight_kg),
            previous: data.length > 1 ? Number(data[1].weight_kg) : null
          };
        }
      }
      
      return weights;
    },
    enabled: patientIds.length > 0,
  });

  // Obtener nombre del tutor para cada paciente
  const guardianIds = patients?.map(p => (p as any).guardian_id).filter(Boolean) || [];
  const { data: guardianData } = useQuery({
    queryKey: ['guardians', guardianIds],
    queryFn: async () => {
      if (guardianIds.length === 0) return {};
      
      const { data } = await supabase
        .from('profiles')
        .select('id, full_name')
        .in('id', guardianIds);
      
      const guardians: Record<string, string> = {};
      data?.forEach(g => {
        guardians[g.id] = g.full_name;
      });
      
      return guardians;
    },
    enabled: guardianIds.length > 0,
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

  const handleSearch = (query: string, type: 'name' | 'microchip' | 'guardian') => {
    setSearchQuery(query);
    setSearchType(type);
    setSelectedPatientId(null);
  };

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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Cockpit Veterinario</h1>
        <p className="text-muted-foreground mt-1">Buscador federado de pacientes animales</p>
      </div>

      {/* Buscador */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PawPrint className="h-5 w-5 text-primary" />
            Búsqueda Federada de Pacientes
          </CardTitle>
          <CardDescription>
            Busca mascotas por nombre, microchip o nombre del tutor
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <PatientSearchBar onSearch={handleSearch} loading={searchLoading} />

          {searchLoading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {patients && patients.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {patients.length} mascota{patients.length > 1 ? 's' : ''} encontrada{patients.length > 1 ? 's' : ''}
              </p>
              <div className="grid gap-3">
                {patients.map((patient) => {
                  const weights = weightData?.[patient.id];
                  const guardianId = (patient as any).guardian_id;
                  const guardianName = guardianId ? guardianData?.[guardianId] : null;
                  
                  return (
                    <button
                      key={patient.id}
                      onClick={() => setSelectedPatientId(patient.id)}
                      className={`text-left transition-all ${
                        selectedPatientId === patient.id 
                          ? 'ring-2 ring-primary ring-offset-2 rounded-lg' 
                          : 'hover:opacity-80'
                      }`}
                    >
                      <PatientCard 
                        patient={patient} 
                        latestWeight={weights?.latest}
                        previousWeight={weights?.previous}
                        guardianName={guardianName}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {searchQuery && !searchLoading && patients?.length === 0 && (
            <EmptyState
              icon={Dog}
              title="No se encontraron mascotas"
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
              <span>Historial Clínico - {selectedPatient.full_name}</span>
              {hasHighRiskEncounters && (
                <Alert className="w-auto py-2 px-4" variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="ml-2">
                    Paciente con alertas activas
                  </AlertDescription>
                </Alert>
              )}
            </CardTitle>
            <CardDescription>
              Historial veterinario unificado (Clínica Vet + Hospital de Referencia)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {timelineLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : encounters && encounters.length > 0 ? (
              <ErrorBoundary fallbackMessage="Error visualizando datos veterinarios">
                <div className="space-y-4">
                  {encounters.map((encounter) => (
                    <TimelineEvent key={encounter.id} encounter={encounter} />
                  ))}
                </div>
              </ErrorBoundary>
            ) : (
              <EmptyState
                icon={PawPrint}
                title="Sin registros clínicos"
                description="No hay encuentros veterinarios registrados para esta mascota"
              />
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
