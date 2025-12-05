import { DocsLayout } from '@/layouts/DocsLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, Database, Key, Cloud, CheckCircle, 
  GitBranch, Zap, Lock, ArrowRight, Calendar,
  Cpu, Layers, Network, Code2, Rocket, TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TechnicalProposal() {
  const functionalModules = [
    {
      id: "clinics",
      title: "CLÍNICAS · Soluciones Cloud Federadas",
      route: "/solutions/clinics",
      concept: "El \"Hub de Servicios\" para la red de clínicas.",
      icon: Cloud,
      bullets: [
        "Conector universal con el PMS local sin migrar datos (modelo zero-trust).",
        "Catálogo de Servicios como Servicio (SaaS) – algoritmos de diagnóstico, almacenamiento y facturación por uso.",
        "Gestión híbrida ERP + CRM coordinada sobre un mismo espacio de datos.",
        "La clínica mantiene la propiedad del dato y gana capacidad de gran corporación."
      ]
    },
    {
      id: "dpp",
      title: "PASAPORTE DE PRODUCTO · Industria",
      route: "/solutions/product-passport",
      concept: "La \"Anatomía de la Verdad\" para cada implante o prótesis.",
      icon: Shield,
      bullets: [
        "Gemelo digital del dispositivo con lote, fabricante, materiales y parámetros críticos.",
        "Cumplimiento automático MDR: certificados, ISO y marcado CE accesibles en un clic.",
        "Alertas sanitarias federadas: localiza a todas las clínicas y pacientes afectados por un lote.",
        "Convierte la trazabilidad regulatoria en argumento de confianza de cara al paciente."
      ]
    },
    {
      id: "wallet",
      title: "PACIENTE · Wallet / Super-App",
      route: "/portal/patient",
      concept: "Gestión 360° de la vida dental: pasado, presente y futuro.",
      icon: Key,
      bullets: [
        "Historial clínico y financiero con facturas pagables desde la app.",
        "Panel de tratamiento activo con medicación, alertas de toma y chatbot de dudas rápidas.",
        "Agenda y catálogo de tratamientos (marketplace) para reservar servicios y comparar opciones.",
        "Visor 3D de la boca y panel de soberanía de datos con interruptores de acceso por entidad."
      ]
    },
    {
      id: "research",
      title: "PROF. DATA · Investigación",
      route: "/portal/research",
      concept: "El \"Nasdaq de los Datos Clínicos\" para IA y estudios multicéntricos.",
      icon: Database,
      bullets: [
        "Marketplace donde los doctores monetizan datasets clínicos anonimizados.",
        "Vista previa con datos sintéticos que reproducen la estructura estadística sin exponer pacientes.",
        "Catálogo de algoritmos listos para licenciar (por ejemplo, detectores de caries pediátrica).",
        "Convierte el dato clínico en un activo financiero gobernado por reglas de uso claras."
      ]
    },
    {
      id: "supply",
      title: "CENTRAL DE COMPRAS · Clínicas",
      route: "/portal/supply",
      concept: "Abastecimiento predictivo y compras federadas.",
      icon: Zap,
      bullets: [
        "Lectura automática de la agenda para estimar consumo de materiales (ej. número de implantes).",
        "Comparación con stock actual y generación de pedidos automáticos cuando se detectan déficits.",
        "Agrupación de la demanda con cientos de clínicas para negociar precios de mayorista.",
        "Dashboard de ahorro continuo que cuantifica el impacto económico de la compra federada."
      ]
    },
    {
      id: "kpi",
      title: "KPI CLÍNICAS · Inteligencia Operativa",
      route: "/portal/kpi",
      concept: "Cockpit que une rentabilidad, experiencia de paciente y excelencia médica.",
      icon: TrendingUp,
      bullets: [
        "Fusión de voz del paciente, sensores de operación y resultados clínicos en un mismo panel.",
        "Alertas predictivas de IA (ej. detectar picos de espera y proponer refuerzos de personal).",
        "Benchmarking anónimo frente al conjunto de la red federada.",
        "Ayuda a pasar de gestión por intuición a decisiones basadas en datos accionables."
      ]
    }
  ];

  return (
    <DocsLayout>
      {/* Hero */}
      <div className="mb-12 pb-8 border-b border-slate-200">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          ACCURO TECHNOLOGY · Global Data Care Technical Whitepaper
        </h1>
        <p className="text-xl text-slate-600">
          Arquitectura técnica del Espacio de Datos Federado para salud bucodental en Europa
        </p>
        <div className="flex gap-3 mt-6">
          <Badge variant="secondary" className="text-sm">GDPR Compliant</Badge>
          <Badge variant="secondary" className="text-sm">EU Data Act Ready</Badge>
          <Badge variant="secondary" className="text-sm">MDR Certified</Badge>
        </div>
      </div>

      {/* 2. Mapa Funcional Global Data Care */}
      <section id="functional-map" className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
            <Network className="h-5 w-5 text-emerald-600" />
          </div>
          Global Data Care: Mapa Funcional de la Plataforma
        </h2>

        <p className="text-slate-700 mb-8 max-w-3xl">
          Todas las tarjetas del ecosistema ACCURO TECHNOLOGY representan ahora aplicaciones especializadas
          conectadas por un mismo <strong>Espacio de Datos Federado</strong>. Cada módulo resuelve un problema
          complejo para un actor distinto, pero comparte estándares, gobierno del dato y trazabilidad extremo a extremo.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {functionalModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <Card key={mod.id} className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base mb-1">{mod.title}</CardTitle>
                      <CardDescription className="text-xs mb-2">{mod.concept}</CardDescription>
                      <Badge variant="outline" className="text-[10px] font-mono">
                        {mod.route}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                    {mod.bullets.map((bullet: string) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-emerald-200 bg-emerald-50/60">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-emerald-600" />
              Resumen Arquitectónico Circular
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 mb-2">
              El valor aparece cuando las piezas se encadenan en un mismo recorrido operativo:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
              <li>Lo que compra la <strong>Central de Compras</strong> se registra en el <strong>Pasaporte de Producto</strong>.</li>
              <li>Ese producto trazable se implanta en la <strong>Clínica</strong> y queda visible en la <strong>Wallet del Paciente</strong>.</li>
              <li>Los resultados clínicos anónimos alimentan a <strong>Prof. Data</strong> para entrenar nueva IA.</li>
              <li>Los KPIs agregados de todas las clínicas vuelven al cockpit de <strong>KPI Clínicas</strong> para mejorar la operación.</li>
            </ul>
            <p className="text-sm text-slate-700 mt-3">
              Esta es la esencia de <strong>Global Data Care</strong>: un bucle continuo donde cada evento clínico, logístico
              o financiero genera inteligencia accionable sin perder la soberanía de los datos locales.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 3. Tech Stack */}
      <section id="tech-stack" className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
            <Layers className="h-5 w-5 text-purple-600" />
          </div>
          Tech Stack & Security Posture
        </h2>

        <p className="text-slate-700 mb-8">
          Transparencia total para el equipo de TI del cliente. Cada componente es auditable y puede ser desplegado 
          on-premise o en cloud soberano europeo.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            {
              title: 'Data Sovereignty',
              tech: 'Eclipse Dataspace Components (EDC)',
              icon: Database,
              color: 'blue'
            },
            {
              title: 'Identity & Access',
              tech: 'Hyperledger Indy / Keycloak (SSI & OIDC)',
              icon: Key,
              color: 'green'
            },
            {
              title: 'Clinical Interoperability',
              tech: 'HAPI FHIR Server (R4)',
              icon: Code2,
              color: 'red'
            },
            {
              title: 'Infrastructure',
              tech: 'Kubernetes & Docker (Cloud Agnostic)',
              icon: Cloud,
              color: 'purple'
            }
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className={`h-10 w-10 rounded-lg bg-${item.color}-100 flex items-center justify-center shrink-0`}>
                    <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                  </div>
                  <div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription className="mt-1 font-mono text-xs">
                      {item.tech}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="border-orange-200 bg-orange-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-orange-600" />
              Compliance by Design
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-slate-900 mb-1">GDPR</p>
                <p className="text-slate-600">Right to erasure, data portability, consent management</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-1">EU Data Act</p>
                <p className="text-slate-600">Data access rights, switching clauses</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-1">MDR</p>
                <p className="text-slate-600">Medical Device Regulation for digital passports</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 4. Methodology */}
      <section id="methodology" className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center">
            <GitBranch className="h-5 w-5 text-indigo-600" />
          </div>
          Project Management Methodology
        </h2>

        <p className="text-slate-700 mb-8">
          Trabajamos con <strong>Sprints quincenales</strong>, CI/CD pipelines automatizados y equipos mixtos 
          (Squads) Cliente-Consultora. Transparencia total vía Jira/GitHub.
        </p>

        <div className="space-y-4">
          {[
            {
              phase: 'Discovery & Blueprint',
              weeks: 'Week 1-4',
              description: 'Análisis de AS-IS y definición de TO-BE. Mapeo de casos de uso prioritarios de los 60+ disponibles.',
              deliverables: ['Architecture Decision Records (ADR)', 'Data Flow Diagrams', 'Security Audit Report']
            },
            {
              phase: 'MVP Development',
              weeks: 'Week 5-12',
              description: 'Despliegue del "Landing Zone" y adaptación de conectores EDC. Integración con PMS existente.',
              deliverables: ['Working MVP', 'API Documentation', 'Integration Tests']
            },
            {
              phase: 'Pilot Validation',
              weeks: 'Week 13-16',
              description: 'Pruebas con datos sintéticos (Stress Testing) y User Acceptance Testing (UAT) con usuarios reales.',
              deliverables: ['UAT Report', 'Performance Benchmarks', 'Training Materials']
            },
            {
              phase: 'Rollout & Scaling',
              weeks: 'Week 17+',
              description: 'Despliegue progresivo en nodos federados. Monitoreo 24/7 y optimización continua.',
              deliverables: ['Production Deployment', 'Monitoring Dashboards', 'SLA Reports']
            }
          ].map((item, index) => (
            <Card key={item.phase} className="relative overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-indigo-${600 - index * 100}`} />
              <CardHeader className="pl-6">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{item.phase}</CardTitle>
                    <CardDescription className="mt-1">{item.weeks}</CardDescription>
                  </div>
                  <Badge variant="outline" className="shrink-0">Phase {index + 1}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pl-6">
                <p className="text-sm text-slate-700 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.deliverables.map((deliverable) => (
                    <Badge key={deliverable} variant="secondary" className="text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {deliverable}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. Innovation Roadmap */}
      <section id="roadmap" className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-pink-100 flex items-center justify-center">
            <Rocket className="h-5 w-5 text-pink-600" />
          </div>
          Innovation Roadmap: R&D as a Service
        </h2>

        <p className="text-slate-700 mb-8">
          No solo resolvemos el problema de hoy. Somos su socio tecnológico para los próximos 5 años.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'Zero-Knowledge Proofs (ZKP)',
              description: 'Verificar edad, seguro o historial médico sin revelar la identidad del paciente. Privacidad matemática.',
              icon: Lock,
              status: 'Q2 2025'
            },
            {
              title: 'Post-Quantum Cryptography',
              description: 'Preparando la encriptación para la era cuántica. Protección a largo plazo de datos médicos.',
              icon: Cpu,
              status: 'Q4 2025'
            },
            {
              title: 'IoMT (Internet of Medical Things)',
              description: 'Ingesta masiva de datos de cepillos inteligentes, escáneres intraorales y wearables en tiempo real.',
              icon: Zap,
              status: 'Q1 2026'
            },
            {
              title: 'Genomic Data Spaces',
              description: 'Integración de marcadores genéticos (microbioma oral) para odontología de precisión y medicina preventiva.',
              icon: Database,
              status: 'Q3 2026'
            }
          ].map((item) => (
            <Card key={item.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-pink-100 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <Badge variant="outline" className="mt-2 text-xs">{item.status}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6">
          <p className="text-sm text-slate-700">
            <strong>Co-Innovation Program:</strong> ¿Su clínica tiene un caso de uso único? 
            Lo construimos juntos bajo un modelo de co-desarrollo con propiedad intelectual compartida.
          </p>
        </div>
      </section>

      {/* 6. Engagement Models */}
      <section id="engagement" className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center">
            <Calendar className="h-5 w-5 text-teal-600" />
          </div>
          Request for Comments & Engagement
        </h2>

        <p className="text-slate-700 mb-8">
          Estamos abiertos a co-crear. No vendemos software en caja; construimos ecosistemas a medida.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            {
              title: 'Backend-as-a-Service',
              description: 'Despliegue completo y gestionado. Usted se enfoca en UX, nosotros en la infraestructura.',
              price: 'Desde €5K/mes'
            },
            {
              title: 'Co-Development',
              description: 'Squad mixto (50/50). Su equipo aprende mientras construimos juntos.',
              price: 'Custom pricing'
            },
            {
              title: 'White-Label Fork',
              description: 'Licencia completa del código fuente. Su marca, su infraestructura.',
              price: 'One-time €150K'
            }
          ].map((model) => (
            <Card key={model.title} className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">{model.title}</CardTitle>
                <CardDescription className="text-xs mt-2">{model.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-4">{model.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Dental Network?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Comience con una Architectural Review gratuita de 2 horas con nuestro equipo técnico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="h-4 w-4 mr-2" />
              Agendar Arquitectural Review
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Lock className="h-4 w-4 mr-2" />
              Solicitar Acceso al Repositorio (NDA)
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <Link to="/business/models">
              <Button size="lg" variant="outline" className="bg-transparent border-green-400 text-green-400 hover:bg-green-400/10">
                <TrendingUp className="h-4 w-4 mr-2" />
                Ver Estudio de Viabilidad: 25 Modelos de Negocio
              </Button>
            </Link>
          <p className="text-sm text-slate-400 mt-3">
            Descubre cómo GLOBAL DATA CARE genera valor económico en 6 verticales de mercado
          </p>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-600">
        <p>
          <strong>ACCURO TECHNOLOGY · Global Data Care Technical Whitepaper</strong> v1.0 • Last Updated: Diciembre 2025
        </p>
        <p className="mt-2">
          For technical inquiries: <a href="mailto:ivan.becerro@accuro.es" className="text-blue-600 hover:underline">ivan.becerro@accuro.es</a>
        </p>
      </div>
    </DocsLayout>
  );
}
