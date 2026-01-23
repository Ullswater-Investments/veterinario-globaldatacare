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
  PawPrint,
  Bot,
  Syringe,
  Video,
  FlaskConical,
  Package,
  Map,
  CreditCard,
  Wallet,
  BedDouble,
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
    { title: 'Cockpit Veterinario', url: '/clinical', icon: PawPrint },
    { title: 'Asistente AI', url: '/ai-assistant', icon: Bot },
    { title: 'e-Receta Vet', url: '/e-prescription', icon: Syringe },
    { title: 'Teleconsulta Vet', url: '/triage', icon: Video },
    { title: 'Hospitalización', url: '/hospitalization', icon: BedDouble },
  ],
  lab_tech: [
    { title: 'Laboratorio Clínico', url: '/lab-hub', icon: FlaskConical },
    { title: 'Inventario IoT', url: '/inventory', icon: Package },
  ],
  researcher: [
    { title: 'Investigación One Health', url: '/research', icon: FlaskConical },
    { title: 'Mapa Epidemiológico', url: '/epidemiology', icon: Map },
  ],
  insurance_admin: [
    { title: 'Gestión de Claims', url: '/claims', icon: CreditCard },
  ],
  patient: [
    { title: 'Wallet del Tutor', url: '/wallet', icon: Wallet },
  ],
  auditor: [
    { title: 'Cockpit Veterinario', url: '/clinical', icon: PawPrint, domain: 'DOMINIO CLÍNICO' },
    { title: 'Asistente AI', url: '/ai-assistant', icon: Bot },
    { title: 'e-Receta Vet', url: '/e-prescription', icon: Syringe },
    { title: 'Teleconsulta Vet', url: '/triage', icon: Video },
    { title: 'Hospitalización', url: '/hospitalization', icon: BedDouble },
    { title: 'Laboratorio Clínico', url: '/lab-hub', icon: FlaskConical, domain: 'DOMINIO LABORATORIO' },
    { title: 'Inventario IoT', url: '/inventory', icon: Package },
    { title: 'Investigación One Health', url: '/research', icon: FlaskConical, domain: 'DOMINIO INVESTIGACIÓN' },
    { title: 'Mapa Epidemiológico', url: '/epidemiology', icon: Map },
    { title: 'Gestión de Claims', url: '/claims', icon: CreditCard, domain: 'DOMINIO SEGUROS' },
    { title: 'Wallet del Tutor', url: '/wallet', icon: Wallet, domain: 'DOMINIO TUTOR' },
  ],
};

const roleLabels = {
  doctor: 'Veterinario',
  lab_tech: 'Laboratorio',
  researcher: 'Investigador One Health',
  insurance_admin: 'Aseguradora',
  patient: 'Tutor de Mascota',
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
                          className={({ isActive }) =>
                            isActive
                              ? "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm bg-primary/10 text-primary border-l-2 border-primary"
                              : "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted/50 transition-colors"
                          }
                        >
                          <item.icon className="h-4 w-4" />
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
