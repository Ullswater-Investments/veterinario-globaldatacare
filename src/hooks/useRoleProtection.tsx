import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole, AppRole } from '@/contexts/RoleContext';
import { useToast } from '@/hooks/use-toast';

/**
 * Hook para proteger rutas según el rol del usuario
 * Redirige automáticamente si el usuario no tiene el rol requerido
 */
export function useRoleProtection(allowedRoles: AppRole[]) {
  const { currentRole, loading } = useRole();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (loading) return;

    if (!currentRole) {
      toast({
        title: 'Sin rol asignado',
        description: 'Por favor, selecciona un rol para continuar',
        variant: 'destructive',
      });
      navigate('/');
      return;
    }

    if (!allowedRoles.includes(currentRole)) {
      toast({
        title: 'Acceso denegado',
        description: `Esta sección requiere rol: ${allowedRoles.join(', ')}`,
        variant: 'destructive',
      });
      navigate('/');
    }
  }, [currentRole, loading, allowedRoles, navigate, toast]);

  return { hasAccess: currentRole && allowedRoles.includes(currentRole), loading };
}
