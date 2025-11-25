import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ConsentSemaphoreProps {
  walletStatus: any;
}

export function ConsentSemaphore({ walletStatus }: ConsentSemaphoreProps) {
  const consents = walletStatus?.consents || [];
  const dataAccess = walletStatus?.data_access || 'unknown';

  const getStatus = () => {
    if (dataAccess === 'full' && consents.length > 0) {
      return { color: 'success', icon: CheckCircle, text: 'Acceso Completo', variant: 'default' as const };
    }
    if (dataAccess === 'limited' || consents.length > 0) {
      return { color: 'warning', icon: AlertCircle, text: 'Acceso Limitado', variant: 'secondary' as const };
    }
    return { color: 'destructive', icon: XCircle, text: 'Sin Consentimiento', variant: 'destructive' as const };
  };

  const status = getStatus();
  const Icon = status.icon;

  return (
    <div className="flex items-center gap-2">
      <Icon className={`h-5 w-5 ${
        status.color === 'success' ? 'text-green-500' :
        status.color === 'warning' ? 'text-yellow-500' :
        'text-red-500'
      }`} />
      <Badge variant={status.variant}>{status.text}</Badge>
      {consents.length > 0 && (
        <span className="text-xs text-muted-foreground">
          ({consents.length} fuente{consents.length > 1 ? 's' : ''})
        </span>
      )}
    </div>
  );
}
