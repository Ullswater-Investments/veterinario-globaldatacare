import { useRole, AppRole } from '@/contexts/RoleContext';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { PawPrint, LogOut, User } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const roleOptions: Record<AppRole, string> = {
  doctor: 'Dr. Vet (Veterinario)',
  lab_tech: 'Lab Tech (Laboratorio Clínico)',
  patient: 'María García (Tutora)',
  researcher: 'Prof. One Health (Investigador)',
  insurance_admin: 'PetSure Admin (Aseguradora)',
  auditor: 'Auditor del Ecosistema (Demo)',
};

export function AppHeader() {
  const { currentRole, setCurrentRole, userRoles } = useRole();
  const { user, signOut } = useAuth();

  const handleRoleChange = (value: string) => {
    setCurrentRole(value as AppRole);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary rounded-lg">
          <PawPrint className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">Global Data Care</h1>
          <p className="text-xs text-muted-foreground">Espacio de Datos Federado de Salud Animal</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {userRoles.length > 0 && (
          <Select value={currentRole || undefined} onValueChange={handleRoleChange}>
            <SelectTrigger className="w-[220px] bg-white">
              <SelectValue placeholder="Seleccionar rol" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              {userRoles.map((role) => (
                <SelectItem key={role} value={role}>
                  {roleOptions[role]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary/10 text-primary text-xs">
              {user?.email ? getInitials(user.email) : <User className="h-4 w-4" />}
            </AvatarFallback>
          </Avatar>
          <Button
            variant="ghost"
            size="icon"
            onClick={signOut}
            title="Cerrar sesión"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
