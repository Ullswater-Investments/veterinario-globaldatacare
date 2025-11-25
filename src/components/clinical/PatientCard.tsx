import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Calendar, Shield } from 'lucide-react';
import { ConsentSemaphore } from './ConsentSemaphore';
import { Tables } from '@/integrations/supabase/types';

interface PatientCardProps {
  patient: Tables<'patients'>;
}

export function PatientCard({ patient }: PatientCardProps) {
  return (
    <Card className="border-l-4 border-l-primary">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            <span>{patient.full_name}</span>
          </div>
          <ConsentSemaphore walletStatus={patient.wallet_status} />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span className="font-mono text-xs">{patient.did}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Registro: {new Date(patient.created_at).toLocaleDateString('es-ES')}</span>
        </div>
      </CardContent>
    </Card>
  );
}
