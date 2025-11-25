import { DocsLayout } from '@/layouts/DocsLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, Database, Key, Cloud, CheckCircle, 
  GitBranch, Zap, Lock, ArrowRight, Calendar,
  Cpu, Layers, Network, Code2, Rocket
} from 'lucide-react';

export default function TechnicalProposal() {
  return (
    <DocsLayout>
      {/* Hero */}
      <div className="mb-12 pb-8 border-b border-slate-200">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          OralSpace-X: Technical Architecture & Consulting Services
        </h1>
        <p className="text-xl text-slate-600">
          Building Composable Data Ecosystems for Healthcare Innovation
        </p>
        <div className="flex gap-3 mt-6">
          <Badge variant="secondary" className="text-sm">GDPR Compliant</Badge>
          <Badge variant="secondary" className="text-sm">EU Data Act Ready</Badge>
          <Badge variant="secondary" className="text-sm">MDR Certified</Badge>
        </div>
      </div>

      {/* 1. Executive Summary */}
      <section id="summary" className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <Shield className="h-5 w-5 text-blue-600" />
          </div>
          From Silos to Ecosystems
        </h2>

        <div className="prose prose-slate mb-8">
          <p className="text-lg text-slate-700 leading-relaxed">
            OralSpace-X no es un SaaS cerrado. Es una <strong>Arquitectura de Datos Composable</strong> que 
            transforma clínicas dentales aisladas en ecosistemas interoperables. Ofrecemos a grandes redes 
            dentales la posibilidad de <code>fork</code> o integrar nuestro núcleo para construir su propia 
            infraestructura soberana, reduciendo el Time-to-Market de <strong>24 a 6 meses</strong>.
          </p>
        </div>

        {/* Before/After Diagram */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-red-600">❌</span> Before: Data Silos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['PMS (Practice Management)', 'Lab System', 'Insurance Portal', 'Image Storage'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-red-700 mt-4 font-medium">
                Isolated • Manual Exports • No Real-Time Sync
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-green-600">✅</span> After: Connected Mesh
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <Network className="h-16 w-16 text-green-600 mx-auto mb-3" />
                <p className="text-sm font-medium text-slate-900">OralSpace-X Hub</p>
                <p className="text-xs text-slate-600 mt-2">Federated • API-First • FHIR Native</p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {['Real-time', 'Encrypted', 'Auditable', 'Scalable'].map((feature) => (
                  <div key={feature} className="flex items-center gap-1 text-xs text-green-700">
                    <CheckCircle className="h-3 w-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
          <p className="text-sm text-slate-700 italic">
            <strong>Positioning Statement:</strong> OralSpace-X actúa como un <strong>acelerador tecnológico</strong>. 
            No reemplazamos sistemas existentes; los conectamos bajo un estándar europeo de datos de salud.
          </p>
        </div>
      </section>

      {/* 2. Tech Stack */}
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

      {/* 3. Methodology */}
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

      {/* 4. Innovation Roadmap */}
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

      {/* 5. Engagement Models */}
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
        </div>
      </section>

      {/* Footer Note */}
      <div className="mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-600">
        <p>
          <strong>OralSpace-X Technical Whitepaper</strong> v1.0 • Last Updated: November 2024
        </p>
        <p className="mt-2">
          For technical inquiries: <a href="mailto:tech@oralspace-x.eu" className="text-blue-600 hover:underline">tech@oralspace-x.eu</a>
        </p>
      </div>
    </DocsLayout>
  );
}
