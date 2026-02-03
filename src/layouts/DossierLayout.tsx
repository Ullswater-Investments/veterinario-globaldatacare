import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  FileText,
  Target,
  AlertTriangle,
  Lightbulb,
  Monitor,
  Users,
  Gift,
  DollarSign,
  Cpu,
  Euro,
  Calendar,
  Phone,
  Menu,
  X,
  Presentation,
  Home,
  ChevronRight
} from 'lucide-react';

interface DossierLayoutProps {
  children: React.ReactNode;
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const sections = [
  { id: 'cover', label: 'Portada', icon: FileText },
  { id: 'executive', label: 'Resumen Ejecutivo', icon: Target },
  { id: 'problem', label: 'El Problema', icon: AlertTriangle },
  { id: 'solution', label: 'La Solución', icon: Lightbulb },
  { id: 'platform', label: 'Plataforma en Acción', icon: Monitor },
  { id: 'partners', label: 'Perfiles de Partners', icon: Users },
  { id: 'value', label: 'Propuesta de Valor', icon: Gift },
  { id: 'business', label: 'Modelos de Negocio', icon: DollarSign },
  { id: 'technology', label: 'Tecnología', icon: Cpu },
  { id: 'funding', label: 'Financiación', icon: Euro },
  { id: 'roadmap', label: 'Roadmap', icon: Calendar },
  { id: 'cta', label: 'Siguiente Paso', icon: Phone },
];

export function DossierLayout({ children, activeSection, onSectionChange }: DossierLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isSlides = location.pathname.includes('/slides');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <span className="font-semibold text-slate-900">Dossier Business Partners</span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <Link to={isSlides ? '/dossier' : '/dossier/slides'}>
              <Button variant="outline" size="sm">
                <Presentation className="h-4 w-4 mr-1" />
                {isSlides ? 'Portal' : 'Slides'}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-40 h-screen w-72 bg-white border-r border-slate-200 transition-transform duration-300",
        "lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-slate-900 text-sm">Dossier</h1>
                <p className="text-xs text-slate-500">Business Partners</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 py-4">
            <nav className="px-3 space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      onSectionChange?.(section.id);
                      setSidebarOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all",
                      "hover:bg-slate-50",
                      isActive 
                        ? "bg-emerald-50 text-emerald-700 font-medium" 
                        : "text-slate-600"
                    )}
                  >
                    <Icon className={cn(
                      "h-4 w-4",
                      isActive ? "text-emerald-600" : "text-slate-400"
                    )} />
                    <span>{section.label}</span>
                    {isActive && (
                      <ChevronRight className="h-4 w-4 ml-auto text-emerald-600" />
                    )}
                  </button>
                );
              })}
            </nav>
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 border-t border-slate-100 space-y-2">
            <Link to="/" className="block">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Volver a Plataforma
              </Button>
            </Link>
            <Link to={isSlides ? '/dossier' : '/dossier/slides'} className="block">
              <Button variant="outline" className="w-full justify-start" size="sm">
                <Presentation className="h-4 w-4 mr-2" />
                {isSlides ? 'Ver como Portal' : 'Ver como Slides'}
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className={cn(
        "lg:ml-72 min-h-screen",
        "pt-14 lg:pt-0" // Account for mobile header
      )}>
        {children}
      </main>
    </div>
  );
}

export { sections };
