import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DossierLayout, sections } from '@/layouts/DossierLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { partnerProfiles } from '@/data/dossier/partnerProfiles';
import { valuePropositions, getValuePropositionByPartnerId } from '@/data/dossier/valuePropositions';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Shield,
  Database,
  Lock,
  Globe,
  CheckCircle2,
  ExternalLink,
  TrendingUp,
  Users,
  Briefcase,
  Monitor,
  Target,
  Zap,
  BarChart3,
  Network,
  FileCheck,
  Calendar,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

// Import existing assets
import servidoresAislados from '@/assets/servidores-aislados.png';
import redFederadaActiva from '@/assets/red-federada-activa.png';

const platformScreenshots = [
  { id: 'doctor', name: 'Portal Veterinario', path: '/portal/doctor', description: 'Gestión clínica integrada' },
  { id: 'patient', name: 'Wallet del Tutor', path: '/portal/patient', description: 'Historial y consentimientos' },
  { id: 'research', name: 'Research Marketplace', path: '/portal/research', description: 'Datasets federados' },
  { id: 'supply', name: 'Central de Compras', path: '/portal/supply', description: 'Supply chain optimizado' },
  { id: 'kpi', name: 'Dashboard KPIs', path: '/portal/kpi', description: 'Métricas en tiempo real' },
  { id: 'passport', name: 'Pasaporte Digital', path: '/solutions/product-passport', description: 'Trazabilidad completa' },
];

const roadmapPhases = [
  { phase: 'Fase 1', period: 'Q1-Q2 2025', title: 'MVP & Early Adopters', items: ['Core platform', '50 clínicas piloto', '5 laboratorios'] },
  { phase: 'Fase 2', period: 'Q3-Q4 2025', title: 'Expansion Nacional', items: ['500 clínicas', 'Pharma partners', 'Research marketplace'] },
  { phase: 'Fase 3', period: '2026', title: 'Consolidación', items: ['2,000 clínicas', 'Insurance integration', 'IoT ecosystem'] },
  { phase: 'Fase 4', period: '2027+', title: 'Expansion EU', items: ['Portugal & Francia', 'EU Data Spaces', 'Series B'] },
];

export default function BusinessPartnersDossier() {
  const [activeSection, setActiveSection] = useState('cover');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <DossierLayout activeSection={activeSection} onSectionChange={scrollToSection}>
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-24">

        {/* SECTION: Cover */}
        <section
          id="cover"
          ref={(el) => { sectionRefs.current['cover'] = el; }}
          className="min-h-[80vh] flex flex-col justify-center"
        >
          <div className="text-center space-y-8">
            <Badge variant="outline" className="text-sm px-4 py-1">
              Documento Confidencial — Q1 2025
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Dossier de<br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Business Partners
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Espacio de Datos Federados de Salud Animal
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Soberanía de Datos
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                <Database className="h-4 w-4 mr-2" />
                Arquitectura Federada
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
                <Lock className="h-4 w-4 mr-2" />
                Privacy by Design
              </Badge>
              <Badge className="bg-amber-100 text-amber-800 px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                GAIA-X Compliant
              </Badge>
            </div>

            <div className="pt-12">
              <Button size="lg" onClick={() => scrollToSection('executive')} className="bg-emerald-600 hover:bg-emerald-700">
                Explorar Dossier
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION: Executive Summary */}
        <section
          id="executive"
          ref={(el) => { sectionRefs.current['executive'] = el; }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Sección 1</Badge>
              <h2 className="text-3xl font-bold text-foreground">Resumen Ejecutivo</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-emerald-500">
                <CardHeader>
                  <Target className="h-8 w-8 text-emerald-600 mb-2" />
                  <CardTitle>Visión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Crear el primer espacio de datos federado de salud animal en Europa, 
                    donde clínicas, laboratorios e investigadores colaboren preservando 
                    la soberanía de sus datos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <Briefcase className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle>Oportunidad</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    €4.5B de mercado veterinario español fragmentado en silos de datos. 
                    Regulación favorable con el Kit Espacio de Datos para financiar 
                    la infraestructura.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <Users className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle>Propuesta</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Buscamos Business Partners estratégicos para construir juntos 
                    el ecosistema: clínicas, labs, pharma, aseguradoras, 
                    investigación e inversores.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <p className="text-4xl font-bold text-emerald-700">6,200+</p>
                    <p className="text-sm text-muted-foreground">Clínicas en España</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-emerald-700">€4.5B</p>
                    <p className="text-sm text-muted-foreground">Mercado Total</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-emerald-700">12%</p>
                    <p className="text-sm text-muted-foreground">Crecimiento Anual</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-emerald-700">29M</p>
                    <p className="text-sm text-muted-foreground">Mascotas Registradas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION: Problem */}
        <section
          id="problem"
          ref={(el) => { sectionRefs.current['problem'] = el; }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Sección 2</Badge>
              <h2 className="text-3xl font-bold text-foreground">El Problema: Datos Fragmentados</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  El sector veterinario español opera en <strong>silos de datos desconectados</strong>. 
                  Cada clínica, laboratorio y proveedor mantiene sus propios sistemas sin interoperabilidad.
                </p>

                <ul className="space-y-4">
                  {[
                    'Historiales clínicos atrapados en software legacy',
                    'Resultados de laboratorio por email o PDF',
                    'Sin trazabilidad real de medicamentos',
                    'Investigación limitada por falta de datos',
                    'Tutores sin acceso a su propia información'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-600 text-sm font-bold">✕</span>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <img 
                  src={servidoresAislados} 
                  alt="Servidores aislados - el problema actual"
                  className="rounded-xl shadow-lg border"
                />
                <div className="absolute -bottom-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium">Estado Actual: Fragmentación</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Solution */}
        <section
          id="solution"
          ref={(el) => { sectionRefs.current['solution'] = el; }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Sección 3</Badge>
              <h2 className="text-3xl font-bold text-foreground">La Solución: Arquitectura Federada</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative order-2 md:order-1">
                <img 
                  src={redFederadaActiva} 
                  alt="Red federada activa - la solución"
                  className="rounded-xl shadow-lg border"
                />
                <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium">Nuevo Modelo: Federación</p>
                </div>
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <p className="text-lg text-muted-foreground">
                  Nuestra arquitectura federada permite que <strong>los datos permanezcan donde están</strong>, 
                  mientras habilitamos colaboración e inteligencia compartida.
                </p>

                <ul className="space-y-4">
                  {[
                    'Datos permanecen en origen (soberanía)',
                    'Interoperabilidad vía estándares FHIR',
                    'Consentimiento granular del tutor',
                    'Federated Learning sin mover datos',
                    'Trazabilidad completa con DPP'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="outline">GAIA-X</Badge>
                  <Badge variant="outline">FHIR R4</Badge>
                  <Badge variant="outline">GDPR</Badge>
                  <Badge variant="outline">W3C DID</Badge>
                  <Badge variant="outline">EPCIS 2.0</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Platform */}
        <section
          id="platform"
          ref={(el) => { sectionRefs.current['platform'] = el; }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Sección 4</Badge>
              <h2 className="text-3xl font-bold text-foreground">Plataforma en Acción</h2>
              <p className="text-muted-foreground mt-2">
                Explora los portales especializados para cada stakeholder del ecosistema
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformScreenshots.map((screenshot) => (
                <Card key={screenshot.id} className="group hover:shadow-lg transition-all overflow-hidden">
                  <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <Monitor className="h-16 w-16 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground">{screenshot.name}</h3>
                    <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                    <Link to={screenshot.path} className="inline-flex items-center text-sm text-emerald-600 mt-2 hover:underline">
                      Ver demo <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: Partner Profiles */}
        <section
          id="partners"
          ref={(el) => { sectionRefs.current['partners'] = el; }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Sección 5</Badge>
              <h2 className="text-3xl font-bold text-foreground">Perfiles de Business Partners</h2>
              <p className="text-muted-foreground mt-2">
                Buscamos socios estratégicos en 8 categorías clave
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerProfiles.map((partner) => {
                const Icon = partner.icon;
                return (
                  <Card key={partner.id} className="overflow-hidden hover:shadow-lg transition-all">
                    <div className={cn("h-2 bg-gradient-to-r", partner.gradient)} />
                    <CardContent className="p-5">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                        "bg-gradient-to-br", partner.bgGradient
                      )}>
                        <Icon className="h-6 w-6 text-slate-700" />
                      </div>
                      <h3 className="font-semibold text-foreground">{partner.shortName}</h3>
                      <p className="text-xs text-muted-foreground mt-1 mb-3">{partner.role}</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-xs">{partner.targetCount}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION: Value Propositions */}
        <section
          id="value"
          ref={(el) => { sectionRefs.current['value'] = el; }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Sección 6</Badge>
              <h2 className="text-3xl font-bold text-foreground">Propuesta de Valor por Partner</h2>
            </div>

            <div className="space-y-8">
              {partnerProfiles.slice(0, 4).map((partner) => {
                const vp = getValuePropositionByPartnerId(partner.id);
                const Icon = partner.icon;
                if (!vp) return null;

                return (
                  <Card key={partner.id} className="overflow-hidden">
                    <div className={cn("h-1 bg-gradient-to-r", partner.gradient)} />
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center",
                          "bg-gradient-to-br", partner.bgGradient
                        )}>
                          <Icon className="h-6 w-6 text-slate-700" />
                        </div>
                        <div>
                          <CardTitle>{partner.name}</CardTitle>
                          <CardDescription>{vp.headline}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            Pain Points
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {vp.painPoints.slice(0, 3).map((p, i) => (
                              <li key={i}>• {p}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Soluciones
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {vp.solutions.slice(0, 3).map((s, i) => (
                              <li key={i}>• {s}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            Métricas Clave
                          </h4>
                          <div className="space-y-3">
                            {vp.metrics.map((m, i) => (
                              <div key={i}>
                                <p className="text-2xl font-bold text-foreground">{m.value}</p>
                                <p className="text-xs text-muted-foreground">{m.label}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION: Business Models */}
        <section
          id="business"
          ref={(el) => { sectionRefs.current['business'] = el; }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Sección 7</Badge>
              <h2 className="text-3xl font-bold text-foreground">Modelos de Negocio</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: 'SaaS', desc: 'Suscripción mensual por acceso a la plataforma', revenue: '€49-299/mes' },
                { icon: BarChart3, title: 'Data Licensing', desc: 'Venta de datasets anonimizados para investigación', revenue: 'Revenue share 30%' },
                { icon: Network, title: 'Transaction Fees', desc: 'Comisión por operaciones en el marketplace', revenue: '2-5% por tx' },
                { icon: FileCheck, title: 'Compliance', desc: 'Servicios de certificación y auditoría', revenue: 'Por proyecto' },
              ].map((model, i) => (
                <Card key={i} className="text-center">
                  <CardContent className="p-6">
                    <model.icon className="h-10 w-10 mx-auto mb-4 text-emerald-600" />
                    <h3 className="font-semibold text-foreground mb-2">{model.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{model.desc}</p>
                    <Badge variant="outline">{model.revenue}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Revenue Share para Partners</h3>
                    <p className="text-slate-300">
                      Los Business Partners participan en los ingresos generados por sus datos 
                      y servicios en el ecosistema.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-3xl font-bold">70%</p>
                      <p className="text-sm text-slate-300">Para el proveedor de datos</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-3xl font-bold">30%</p>
                      <p className="text-sm text-slate-300">Operación de plataforma</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION: Technology */}
        <section
          id="technology"
          ref={(el) => { sectionRefs.current['technology'] = el; }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Sección 8</Badge>
              <h2 className="text-3xl font-bold text-foreground">Stack Tecnológico</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { category: 'Interoperabilidad', items: ['FHIR R4', 'HL7 v2', 'LOINC', 'SNOMED-CT'] },
                { category: 'Identidad', items: ['W3C DID', 'Verifiable Credentials', 'OAuth 2.0', 'SIOP-v2'] },
                { category: 'Trazabilidad', items: ['EPCIS 2.0', 'GS1 Digital Link', 'DPP', 'Blockchain anchoring'] },
                { category: 'Data Spaces', items: ['GAIA-X', 'IDSA Connector', 'Eclipse Dataspace', 'Trusted data exchange'] },
                { category: 'AI/ML', items: ['Federated Learning', 'Differential Privacy', 'Synthetic Data', 'LLM Agents'] },
                { category: 'Cloud', items: ['Supabase', 'Edge Functions', 'PostgreSQL', 'Real-time sync'] },
              ].map((stack, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{stack.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item, j) => (
                        <Badge key={j} variant="secondary" className="text-xs">{item}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/tech">
                <Button variant="outline" size="lg">
                  Ver Documentación Técnica Completa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION: Funding */}
        <section
          id="funding"
          ref={(el) => { sectionRefs.current['funding'] = el; }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Sección 9</Badge>
              <h2 className="text-3xl font-bold text-foreground">Financiación: Kit Espacio de Datos</h2>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Badge className="bg-blue-600">Programa Oficial</Badge>
                    <h3 className="text-2xl font-bold text-foreground">
                      Subvención hasta €120,000
                    </h3>
                    <p className="text-muted-foreground">
                      El Kit Espacio de Datos, financiado por los Fondos Next Generation EU, 
                      subvenciona la adopción de infraestructuras de espacios de datos para PYMEs.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Sin coste de implementación para clínicas elegibles',
                        'Formación y onboarding incluidos',
                        'Soporte técnico durante 12 meses',
                        'Cumplimiento normativo garantizado'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-blue-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                      <p className="text-5xl font-bold text-blue-600">€0</p>
                      <p className="text-muted-foreground mt-2">Coste para clínicas elegibles</p>
                      <Link to="/propuesta-kit-espacio-datos" className="inline-block mt-4">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Ver Propuesta Completa
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION: Roadmap */}
        <section
          id="roadmap"
          ref={(el) => { sectionRefs.current['roadmap'] = el; }}
          className="scroll-mt-20"
        >
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Sección 10</Badge>
              <h2 className="text-3xl font-bold text-foreground">Roadmap de Implementación</h2>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />
              
              <div className="space-y-8">
                {roadmapPhases.map((phase, i) => (
                  <div key={i} className="relative flex gap-6">
                    <div className="hidden md:flex flex-col items-center">
                      <div className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center text-white font-bold z-10",
                        i === 0 ? "bg-emerald-500" : "bg-slate-300"
                      )}>
                        {phase.phase.split(' ')[1]}
                      </div>
                    </div>
                    <Card className={cn("flex-1", i === 0 && "border-emerald-300 bg-emerald-50/50")}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <Badge variant={i === 0 ? "default" : "secondary"} className="mb-2">
                              {phase.phase}
                            </Badge>
                            <CardTitle>{phase.title}</CardTitle>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{phase.period}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="flex flex-wrap gap-2">
                          {phase.items.map((item, j) => (
                            <Badge key={j} variant="outline">{item}</Badge>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CTA */}
        <section
          id="cta"
          ref={(el) => { sectionRefs.current['cta'] = el; }}
          className="scroll-mt-20"
        >
          <Card className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para ser Business Partner?
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Únete al primer espacio de datos federado de salud animal en Europa. 
                Juntos podemos transformar el sector veterinario.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-emerald-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Agendar Llamada
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Propuesta
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-left bg-white/10 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-emerald-100 text-sm">partners@oralspace-x.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-emerald-100 text-sm">+34 900 123 456</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1" />
                  <div>
                    <p className="font-medium">Oficinas</p>
                    <p className="text-emerald-100 text-sm">Madrid, Barcelona, Valencia</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Link to="/dossier/slides">
              <Button variant="outline" size="lg">
                Ver versión Presentación (Slides)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </DossierLayout>
  );
}
