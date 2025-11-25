import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useRole } from '@/contexts/RoleContext';
import { AppHeader } from './AppHeader';
import { AppSidebar } from './AppSidebar';
import { Breadcrumbs } from './Breadcrumbs';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Loader2, Shield } from 'lucide-react';

export function AppLayout() {
  const { user, loading } = useAuth();
  const { currentRole } = useRole();
  const navigate = useNavigate();
  const isAuditor = currentRole === 'auditor';

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <AppHeader />
          <Breadcrumbs />
          <main className="flex-1 bg-slate-50 p-6 overflow-auto pb-20">
            <Outlet />
          </main>
          
          {/* Banner de Auditoría */}
          {isAuditor && (
            <div className="fixed bottom-0 left-0 right-0 bg-orange-600 text-white py-2 px-4 text-center text-sm font-medium shadow-lg z-50">
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-4 w-4" />
                <span>
                  MODO AUDITORÍA: Visualizando Datos Sintéticos. No se exponen datos reales de pacientes (GDPR Safe).
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </SidebarProvider>
  );
}
