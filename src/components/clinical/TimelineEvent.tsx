import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Stethoscope, AlertTriangle, Clock, Scale } from 'lucide-react';
import { Tables } from '@/integrations/supabase/types';
import { formatDateTime } from '@/lib/format';

interface TimelineEventProps {
  encounter: Tables<'clinical_encounters'>;
  weightAtVisit?: number | null;
}

export function TimelineEvent({ encounter, weightAtVisit }: TimelineEventProps) {
  const isHospital = encounter.data_source === 'Hospital' || encounter.data_source === 'Hospital de Referencia';
  const riskLevel = encounter.risk_level;

  const sourceConfig = isHospital
    ? { icon: Building2, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', label: 'Hospital de Referencia' }
    : { icon: Stethoscope, color: 'text-primary', bg: 'bg-primary/5', border: 'border-primary/20', label: 'Clínica Veterinaria' };

  const riskConfig = {
    high: { variant: 'destructive' as const, label: 'Urgente' },
    medium: { variant: 'secondary' as const, label: 'Observación' },
    normal: { variant: 'outline' as const, label: 'Rutina' },
  };

  const SourceIcon = sourceConfig.icon;
  const risk = riskLevel ? riskConfig[riskLevel as keyof typeof riskConfig] : null;

  const fhir = encounter.fhir_bundle as any;

  return (
    <Card className={`${sourceConfig.bg} ${sourceConfig.border} border-l-4`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <SourceIcon className={`h-5 w-5 ${sourceConfig.color}`} />
            <span>{encounter.data_source || sourceConfig.label}</span>
          </CardTitle>
          <div className="flex items-center gap-2">
            {risk && (
              <>
                {riskLevel === 'high' && <AlertTriangle className="h-4 w-4 text-red-600" />}
                <Badge variant={risk.variant}>{risk.label}</Badge>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {formatDateTime(encounter.encounter_date)}
          </span>
          {weightAtVisit && (
            <span className="flex items-center gap-1 font-medium text-primary">
              <Scale className="h-3 w-3" />
              {weightAtVisit} kg
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {fhir?.resourceType && (
          <div className="text-xs font-medium text-muted-foreground">
            Tipo: {fhir.resourceType}
          </div>
        )}
        {fhir?.summary && (
          <div className="text-sm font-medium">{fhir.summary}</div>
        )}
        {fhir?.note && (
          <p className="text-sm text-muted-foreground">{fhir.note}</p>
        )}
        {fhir?.code?.text && (
          <div className="text-sm">
            <span className="font-medium">Diagnóstico: </span>
            {fhir.code.text}
          </div>
        )}
        {fhir?.treatment && (
          <div className="text-sm">
            <span className="font-medium">Tratamiento: </span>
            {fhir.treatment}
          </div>
        )}
        {fhir?.conclusion && (
          <p className="text-sm text-muted-foreground">{fhir.conclusion}</p>
        )}
      </CardContent>
    </Card>
  );
}
