import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Stethoscope, AlertTriangle, Clock } from 'lucide-react';
import { Tables } from '@/integrations/supabase/types';

interface TimelineEventProps {
  encounter: Tables<'clinical_encounters'>;
}

export function TimelineEvent({ encounter }: TimelineEventProps) {
  const isHospital = encounter.data_source === 'Hospital';
  const riskLevel = encounter.risk_level;

  const sourceConfig = isHospital
    ? { icon: Building2, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' }
    : { icon: Stethoscope, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' };

  const riskConfig = {
    high: { variant: 'destructive' as const, label: 'Riesgo Alto' },
    medium: { variant: 'secondary' as const, label: 'Riesgo Medio' },
    normal: { variant: 'outline' as const, label: 'Normal' },
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
            <span>{encounter.data_source}</span>
          </CardTitle>
          {risk && (
            <div className="flex items-center gap-2">
              {riskLevel === 'high' && <AlertTriangle className="h-4 w-4 text-red-600" />}
              <Badge variant={risk.variant}>{risk.label}</Badge>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{new Date(encounter.encounter_date).toLocaleString('es-ES')}</span>
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
        {fhir?.conclusion && (
          <p className="text-sm text-muted-foreground">{fhir.conclusion}</p>
        )}
      </CardContent>
    </Card>
  );
}
