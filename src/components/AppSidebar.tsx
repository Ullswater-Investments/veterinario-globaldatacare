import { NavLink } from 'react-router-dom';
import { useRole, AppRole } from '@/contexts/RoleContext';
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
  LucideIcon,
} from 'lucide-react';

type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  domain?: string;
};

const navigationConfig: Record<AppRole, NavItem[]> = {
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
  auditor: [
    { title: 'Cockpit Clínico', url: '/clinical', icon: Stethoscope, domain: 'DOMINIO CLÍNICO' },
    { title: 'Asistente AI', url: '/ai-assistant', icon: Bot },
    { title: 'e-Receta', url: '/e-prescription', icon: Pill },
    { title: 'Teledentistría', url: '/triage', icon: Video },
    { title: 'Hub de Manufactura', url: '/lab-hub', icon: Factory, domain: 'DOMINIO LABORATORIO' },
    { title: 'Inventario IoT', url: '/inventory', icon: Package },
    { title: 'Mercado de Datos', url: '/research', icon: FlaskConical, domain: 'DOMINIO INVESTIGACIÓN' },
    { title: 'Mapa Epidemiológico', url: '/epidemiology', icon: Map },
    { title: 'Gestión de Claims', url: '/claims', icon: CreditCard, domain: 'DOMINIO SEGUROS' },
    { title: 'Mi Wallet', url: '/wallet', icon: Wallet, domain: 'DOMINIO PACIENTE' },
  ],
};

const roleLabels = {
  doctor: 'Doctor',
  lab_tech: 'Laboratorio',
  researcher: 'Investigador',
  insurance_admin: 'Aseguradora',
  patient: 'Paciente',
  auditor: 'Auditor del Ecosistema',
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
              {items.map((item, index) => {
                const showDomainLabel = currentRole === 'auditor' && 'domain' in item;
                return (
                  <div key={item.title}>
                    {showDomainLabel && !isCollapsed && (
                      <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">
                        {item.domain}
                      </div>
                    )}
                    <SidebarMenuItem>
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
                  </div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
