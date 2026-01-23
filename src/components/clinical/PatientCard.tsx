import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dog, Cat, Bird, Rabbit, Shield, Phone, TrendingDown, TrendingUp, Minus } from 'lucide-react';
import { ConsentSemaphore } from './ConsentSemaphore';
import { Tables } from '@/integrations/supabase/types';
import { Badge } from '@/components/ui/badge';

interface PatientCardProps {
  patient: Tables<'patients'>;
  latestWeight?: number | null;
  previousWeight?: number | null;
  guardianName?: string | null;
  guardianPhone?: string | null;
}

// Icono según especie
function SpeciesIcon({ species, className }: { species?: string | null; className?: string }) {
  const iconClass = className || 'h-6 w-6';
  
  switch (species?.toLowerCase()) {
    case 'canine':
    case 'dog':
    case 'perro':
      return <Dog className={`${iconClass} text-primary`} />;
    case 'feline':
    case 'cat':
    case 'gato':
      return <Cat className={`${iconClass} text-accent`} />;
    case 'bird':
    case 'ave':
      return <Bird className={`${iconClass} text-amber-500`} />;
    case 'rabbit':
    case 'conejo':
    case 'exotic':
    case 'exótico':
      return <Rabbit className={`${iconClass} text-purple-500`} />;
    default:
      return <Dog className={`${iconClass} text-muted-foreground`} />;
  }
}

// Indicador de variación de peso
function WeightVariation({ current, previous }: { current?: number | null; previous?: number | null }) {
  if (!current || !previous) return null;
  
  const diff = current - previous;
  const percentChange = ((diff / previous) * 100).toFixed(1);
  
  if (Math.abs(diff) < 0.1) {
    return (
      <span className="flex items-center gap-1 text-xs text-muted-foreground">
        <Minus className="h-3 w-3" />
        <span>Estable</span>
      </span>
    );
  }
  
  const isGain = diff > 0;
  const isSignificant = Math.abs(parseFloat(percentChange)) > 10;
  
  return (
    <span className={`flex items-center gap-1 text-xs ${isSignificant ? 'text-destructive font-medium' : isGain ? 'text-amber-600' : 'text-emerald-600'}`}>
      {isGain ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
      <span>{isGain ? '+' : ''}{diff.toFixed(1)} kg ({percentChange}%)</span>
    </span>
  );
}

// Formatear sexo y esterilización
function formatSexStatus(sex?: string | null, isNeutered?: boolean | null): string {
  if (!sex) return '';
  
  const sexLabel = sex === 'male' ? '♂ Macho' : sex === 'female' ? '♀ Hembra' : sex;
  const neuteredLabel = isNeutered ? (sex === 'female' ? 'Esterilizada' : 'Castrado') : 'Entero/a';
  
  return `${sexLabel} • ${neuteredLabel}`;
}

export function PatientCard({ 
  patient, 
  latestWeight, 
  previousWeight,
  guardianName,
  guardianPhone 
}: PatientCardProps) {
  const species = (patient as any).species;
  const breed = (patient as any).breed;
  const sex = (patient as any).sex;
  const isNeutered = (patient as any).is_neutered;
  const microchipId = (patient as any).microchip_id;

  return (
    <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10">
              <SpeciesIcon species={species} className="h-6 w-6" />
            </div>
            <div>
              <span className="text-lg font-bold">{patient.full_name}</span>
              {breed && (
                <p className="text-sm font-normal text-muted-foreground">{breed}</p>
              )}
              {sex && (
                <p className="text-xs text-muted-foreground">
                  {formatSexStatus(sex, isNeutered)}
                </p>
              )}
            </div>
          </div>
          <ConsentSemaphore walletStatus={patient.wallet_status} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Peso actual con variación */}
        {latestWeight && (
          <div className="flex items-center justify-between p-2 bg-primary/5 rounded-lg">
            <div>
              <span className="text-sm text-muted-foreground">Peso actual</span>
              <p className="text-xl font-bold text-primary">{latestWeight} kg</p>
            </div>
            <WeightVariation current={latestWeight} previous={previousWeight} />
          </div>
        )}

        {/* Microchip */}
        {microchipId && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span className="font-mono text-xs">{microchipId}</span>
            <Badge variant="outline" className="text-xs">Microchip</Badge>
          </div>
        )}

        {/* DID */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span className="font-mono text-xs truncate max-w-[200px]">{patient.did}</span>
        </div>

        {/* Tutor */}
        {guardianName && (
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="text-sm">
              <span className="text-muted-foreground">Tutor: </span>
              <span className="font-medium">{guardianName}</span>
            </div>
            {guardianPhone && (
              <a 
                href={`tel:${guardianPhone}`} 
                className="flex items-center gap-1 text-xs text-primary hover:underline"
              >
                <Phone className="h-3 w-3" />
                {guardianPhone}
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
