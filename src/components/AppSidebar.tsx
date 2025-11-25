import { NavLink } from 'react-router-dom';
import { useRole } from '@/contexts/RoleContext';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Stethoscope,
  Bot,
  Pill,
  Video,
  Factory,
  Package,
  FlaskConical,
  Map,
  CreditCard,
  Wallet,
} from 'lucide-react';

const navigationConfig = {
  doctor: [
    { title: 'Cockpit Clínico', url: '/clinical', icon: Stethoscope },
    { title: 'Asistente AI', url: '/ai-assistant', icon: Bot },
    { title: 'e-Receta', url: '/e-prescription', icon: Pill },
    { title: 'Teledentistría', url: '/triage', icon: Video },
  ],
  lab_tech: [
    { title: 'Hub de Manufactura', url: '/lab-hub', icon: Factory },
    { title: 'Inventario IoT', url: '/inventory', icon: Package },
  ],
  researcher: [
    { title: 'Mercado de Datos', url: '/research', icon: FlaskConical },
    { title: 'Mapa Epidemiológico', url: '/epidemiology', icon: Map },
  ],
  insurance_admin: [
    { title: 'Gestión de Claims', url: '/claims', icon: CreditCard },
  ],
  patient: [
    { title: 'Mi Wallet', url: '/wallet', icon: Wallet },
  ],
};

const roleLabels = {
  doctor: 'Doctor',
  lab_tech: 'Laboratorio',
  researcher: 'Investigador',
  insurance_admin: 'Aseguradora',
  patient: 'Paciente',
};

export function AppSidebar() {
  const { state } = useSidebar();
  const { currentRole } = useRole();

  const items = currentRole ? navigationConfig[currentRole] : [];
  const isCollapsed = state === 'collapsed';

  return (
    <Sidebar className={isCollapsed ? 'w-14' : 'w-60'}>
      <SidebarTrigger className="m-2 self-end" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {currentRole && roleLabels[currentRole]}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="hover:bg-muted/50"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
