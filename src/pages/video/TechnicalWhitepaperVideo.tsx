import { useState, useEffect, useCallback } from 'react';
import { 
  Shield, Database, Key, Cloud, CheckCircle, 
  GitBranch, Zap, Lock, Calendar, Copy, Check,
  Cpu, Layers, Network, Code2, Rocket, TrendingUp,
  ChevronLeft, ChevronRight, X, Eye, EyeOff, FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Definición de las 9 escenas
const scenes = [
  {
    id: 'HERO',
    title: 'Intro',
    fileName: 'IMG_01_HERO.png',
    script: 'Bienvenidos al Whitepaper Técnico de ACCURO TECHNOLOGY. Hoy presentamos la arquitectura del Espacio de Datos Federado para la salud bucodental en Europa. Una solución lista para el GDPR, la Data Act y la certificación MDR.'
  },
  {
    id: 'MAPA_GRID',
    title: 'Ecosistema',
    fileName: 'IMG_02_MAPA_GRID.png',
    script: 'Global Data Care no es una simple app, es un ecosistema interconectado. Hemos transformado cada necesidad del sector en un módulo especializado, unidos por un mismo gobierno del dato y trazabilidad total.'
  },
  {
    id: 'MODULO_CLINICA',
    title: 'Clínicas',
    fileName: 'IMG_03_MODULO_CLINICA.png',
    script: 'Para las clínicas, actuamos como un conector universal "Zero-Trust". Integramos el ERP y CRM sin migrar datos sensibles, permitiendo a la clínica mantener la propiedad de su información mientras gana capacidades de gran corporación.'
  },
  {
    id: 'MODULO_PACIENTE',
    title: 'Paciente',
    fileName: 'IMG_04_MODULO_PACIENTE.png',
    script: 'El paciente recibe una Wallet o Super-App. Desde aquí gestiona su historial clínico, pagos y tratamientos. Es una gestión 360 grados que le devuelve la soberanía de sus datos dentales.'
  },
  {
    id: 'CIRCULAR',
    title: 'El Bucle',
    fileName: 'IMG_05_CIRCULAR.png',
    script: 'La magia ocurre en la economía circular del dato. Una compra en la central alimenta el pasaporte del producto, que se implanta en la clínica y se refleja en la app del paciente. Todo genera inteligencia accionable en tiempo real.'
  },
  {
    id: 'TECH_STACK',
    title: 'Tecnología',
    fileName: 'IMG_06_TECH_STACK.png',
    script: 'Nuestra arquitectura es transparente y soberana. Usamos componentes Eclipse para el espacio de datos, Hyperledger para la identidad y servidores FHIR para la interoperabilidad clínica. Seguridad y cumplimiento normativo por diseño.'
  },
  {
    id: 'METODOLOGIA',
    title: 'Roadmap',
    fileName: 'IMG_07_METODOLOGIA.png',
    script: 'No improvisamos. Trabajamos con una metodología ágil estructurada en cuatro fases claras: desde el descubrimiento y blueprint inicial, pasando por el MVP, hasta el despliegue y escalado en producción.'
  },
  {
    id: 'INNOVACION',
    title: 'Futuro',
    fileName: 'IMG_08_INNOVACION.png',
    script: 'Y miramos al futuro. Nuestro roadmap de innovación incluye pruebas de conocimiento cero para privacidad absoluta, criptografía post-cuántica y la integración de genómica en espacios de datos.'
  },
  {
    id: 'CTA',
    title: 'Cierre',
    fileName: 'IMG_09_CTA.png',
    script: 'Estamos listos para co-crear. Ya sea mediante modelos SaaS, co-desarrollo o licencias White-Label. Agende hoy su revisión arquitectónica con nuestro equipo y transforme su red dental.'
  }
];

// Datos de los módulos funcionales
const functionalModules = [
  {
    id: "clinics",
    title: "CLÍNICAS · Soluciones Cloud Federadas",
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

// Tech stack data
const techStack = [
  { title: 'Data Sovereignty', tech: 'Eclipse Dataspace Components (EDC)', icon: Database, color: 'blue' },
  { title: 'Identity & Access', tech: 'Hyperledger Indy / Keycloak (SSI & OIDC)', icon: Key, color: 'green' },
  { title: 'Clinical Interoperability', tech: 'HAPI FHIR Server (R4)', icon: Code2, color: 'red' },
  { title: 'Infrastructure', tech: 'Kubernetes & Docker (Cloud Agnostic)', icon: Cloud, color: 'purple' }
];

// Methodology phases
const methodologyPhases = [
  { phase: 'Discovery & Blueprint', weeks: 'Week 1-4', description: 'Análisis de AS-IS y definición de TO-BE. Mapeo de casos de uso prioritarios.', deliverables: ['Architecture Decision Records', 'Data Flow Diagrams', 'Security Audit'] },
  { phase: 'MVP Development', weeks: 'Week 5-12', description: 'Despliegue del "Landing Zone" y adaptación de conectores EDC.', deliverables: ['Working MVP', 'API Documentation', 'Integration Tests'] },
  { phase: 'Pilot Validation', weeks: 'Week 13-16', description: 'Pruebas con datos sintéticos y User Acceptance Testing.', deliverables: ['UAT Report', 'Performance Benchmarks', 'Training Materials'] },
  { phase: 'Rollout & Scaling', weeks: 'Week 17+', description: 'Despliegue progresivo en nodos federados. Monitoreo 24/7.', deliverables: ['Production Deployment', 'Monitoring Dashboards', 'SLA Reports'] }
];

// Innovation items
const innovationItems = [
  { title: 'Zero-Knowledge Proofs (ZKP)', description: 'Verificar edad, seguro o historial sin revelar identidad. Privacidad matemática.', icon: Lock, status: 'Q2 2025' },
  { title: 'Post-Quantum Cryptography', description: 'Preparando la encriptación para la era cuántica. Protección a largo plazo.', icon: Cpu, status: 'Q4 2025' },
  { title: 'IoMT (Internet of Medical Things)', description: 'Ingesta masiva de datos de cepillos inteligentes y wearables en tiempo real.', icon: Zap, status: 'Q1 2026' },
  { title: 'Genomic Data Spaces', description: 'Integración de marcadores genéticos para odontología de precisión.', icon: Database, status: 'Q3 2026' }
];

// Engagement models
const engagementModels = [
  { title: 'Backend-as-a-Service', description: 'Despliegue completo y gestionado. Usted se enfoca en UX.', price: 'Desde €5K/mes' },
  { title: 'Co-Development', description: 'Squad mixto (50/50). Su equipo aprende mientras construimos.', price: 'Custom pricing' },
  { title: 'White-Label Fork', description: 'Licencia completa del código fuente. Su marca, su infraestructura.', price: 'One-time €150K' }
];

export default function TechnicalWhitepaperVideo() {
  const navigate = useNavigate();
  const [currentScene, setCurrentScene] = useState(0);
  const [screenshotMode, setScreenshotMode] = useState(false);
  const [showScript, setShowScript] = useState(false);
  const [copied, setCopied] = useState(false);

  const totalScenes = scenes.length;
  const scene = scenes[currentScene];

  const nextScene = useCallback(() => {
    if (currentScene < totalScenes - 1) {
      setCurrentScene(prev => prev + 1);
    }
  }, [currentScene, totalScenes]);

  const prevScene = useCallback(() => {
    if (currentScene > 0) {
      setCurrentScene(prev => prev - 1);
    }
  }, [currentScene]);

  const copyAllScripts = () => {
    const allScripts = scenes.map((s, i) => 
      `### Escena ${String(i + 1).padStart(2, '0')} - ${s.title.toUpperCase()}\n${s.script}`
    ).join('\n\n');
    navigator.clipboard.writeText(allScripts);
    setCopied(true);
    toast.success('Guion completo copiado al portapapeles');
    setTimeout(() => setCopied(false), 2000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextScene();
      if (e.key === 'ArrowLeft') prevScene();
      if (e.key === 'Escape') navigate('/');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextScene, prevScene, navigate]);

  // Render scene content based on current scene
  const renderSceneContent = () => {
    switch (scene.id) {
      case 'HERO':
        return (
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-16">
            <h1 className="text-6xl font-bold mb-6 text-center">ACCURO TECHNOLOGY</h1>
            <h2 className="text-3xl text-blue-200 mb-4 text-center">Global Data Care Technical Whitepaper</h2>
            <p className="text-xl text-slate-300 mb-10 text-center max-w-3xl">
              Arquitectura técnica del Espacio de Datos Federado para salud bucodental en Europa
            </p>
            <div className="flex gap-4">
              <Badge className="text-lg px-6 py-2 bg-green-600 hover:bg-green-700">GDPR Compliant</Badge>
              <Badge className="text-lg px-6 py-2 bg-blue-600 hover:bg-blue-700">EU Data Act Ready</Badge>
              <Badge className="text-lg px-6 py-2 bg-purple-600 hover:bg-purple-700">MDR Certified</Badge>
            </div>
          </div>
        );

      case 'MAPA_GRID':
        return (
          <div className="h-full bg-slate-50 p-12 overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-14 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Network className="h-7 w-7 text-emerald-600" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Global Data Care: Mapa Funcional</h2>
            </div>
            <div className="grid grid-cols-3 gap-5">
              {functionalModules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <Card key={mod.id} className="h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-3">
                        <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base leading-tight">{mod.title}</CardTitle>
                          <CardDescription className="text-xs mt-1">{mod.concept}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-600">
                        {mod.bullets.slice(0, 2).map((bullet) => (
                          <li key={bullet} className="line-clamp-1">{bullet}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 'MODULO_CLINICA':
        return (
          <div className="h-full bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-16">
            <Card className="w-full max-w-3xl shadow-2xl">
              <CardHeader>
                <div className="flex items-start gap-5">
                  <div className="h-20 w-20 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Cloud className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2">CLÍNICAS · Soluciones Cloud Federadas</CardTitle>
                    <CardDescription className="text-lg">El "Hub de Servicios" para la red de clínicas.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-lg text-slate-700">
                  {functionalModules[0].bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        );

      case 'MODULO_PACIENTE':
        return (
          <div className="h-full bg-gradient-to-br from-emerald-50 to-slate-100 flex items-center justify-center p-16">
            <Card className="w-full max-w-3xl shadow-2xl">
              <CardHeader>
                <div className="flex items-start gap-5">
                  <div className="h-20 w-20 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Key className="h-10 w-10 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2">PACIENTE · Wallet / Super-App</CardTitle>
                    <CardDescription className="text-lg">Gestión 360° de la vida dental: pasado, presente y futuro.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-lg text-slate-700">
                  {functionalModules[2].bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        );

      case 'CIRCULAR':
        return (
          <div className="h-full bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center p-16">
            <Card className="w-full max-w-4xl bg-white/95 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-4">
                  <GitBranch className="h-10 w-10 text-emerald-600" />
                  Resumen Arquitectónico Circular
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-slate-700 mb-6">
                  El valor aparece cuando las piezas se encadenan en un mismo recorrido operativo:
                </p>
                <ul className="space-y-4 text-lg text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-2xl">→</span>
                    <span>Lo que compra la <strong>Central de Compras</strong> se registra en el <strong>Pasaporte de Producto</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-2xl">→</span>
                    <span>Ese producto trazable se implanta en la <strong>Clínica</strong> y queda visible en la <strong>Wallet del Paciente</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-2xl">→</span>
                    <span>Los resultados clínicos anónimos alimentan a <strong>Prof. Data</strong> para entrenar nueva IA.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold text-2xl">→</span>
                    <span>Los KPIs agregados de todas las clínicas vuelven al cockpit de <strong>KPI Clínicas</strong>.</span>
                  </li>
                </ul>
                <p className="text-xl text-slate-700 mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  Esta es la esencia de <strong>Global Data Care</strong>: un bucle continuo donde cada evento genera inteligencia accionable sin perder la soberanía de los datos locales.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case 'TECH_STACK':
        return (
          <div className="h-full bg-slate-100 p-12 overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-14 rounded-xl bg-purple-100 flex items-center justify-center">
                <Layers className="h-7 w-7 text-purple-600" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Tech Stack & Security Posture</h2>
            </div>
            <div className="grid grid-cols-2 gap-5 mb-6">
              {techStack.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                        <item.icon className="h-7 w-7 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="mt-2 font-mono text-sm">{item.tech}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <Card className="border-orange-300 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Lock className="h-6 w-6 text-orange-600" />
                  Compliance by Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6 text-base">
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
          </div>
        );

      case 'METODOLOGIA':
        return (
          <div className="h-full bg-slate-50 p-12 overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-14 rounded-xl bg-indigo-100 flex items-center justify-center">
                <GitBranch className="h-7 w-7 text-indigo-600" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Project Management Methodology</h2>
            </div>
            <div className="space-y-4">
              {methodologyPhases.map((item, index) => (
                <Card key={item.phase} className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-indigo-600" style={{ opacity: 1 - index * 0.2 }} />
                  <CardHeader className="pl-8 py-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{item.phase}</CardTitle>
                        <CardDescription className="mt-1 text-base">{item.weeks}</CardDescription>
                      </div>
                      <Badge variant="outline" className="shrink-0 text-base px-4">Phase {index + 1}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-8 pt-0 pb-4">
                    <p className="text-base text-slate-700 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.deliverables.map((deliverable) => (
                        <Badge key={deliverable} variant="secondary" className="text-sm">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'INNOVACION':
        return (
          <div className="h-full bg-gradient-to-br from-pink-50 to-purple-50 p-12 overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-14 rounded-xl bg-pink-100 flex items-center justify-center">
                <Rocket className="h-7 w-7 text-pink-600" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Innovation Roadmap: R&D as a Service</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {innovationItems.map((item) => (
                <Card key={item.title} className="shadow-lg">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-xl bg-pink-100 flex items-center justify-center shrink-0">
                        <item.icon className="h-8 w-8 text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <Badge variant="outline" className="mt-2 text-base">{item.status}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'CTA':
        return (
          <div className="h-full bg-slate-900 p-12 overflow-hidden flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-14 w-14 rounded-xl bg-teal-900 flex items-center justify-center">
                <Calendar className="h-7 w-7 text-teal-400" />
              </div>
              <h2 className="text-4xl font-bold text-white">Engagement Models</h2>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {engagementModels.map((model) => (
                <Card key={model.title} className="text-center bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{model.title}</CardTitle>
                    <CardDescription className="text-sm mt-2 text-slate-400">{model.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-blue-400">{model.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex-1 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-10 flex flex-col items-center justify-center">
              <h3 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Dental Network?</h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl text-center">
                Comience con una Architectural Review gratuita de 2 horas con nuestro equipo técnico.
              </p>
              <div className="flex gap-6">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Arquitectural Review
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  <Lock className="h-5 w-5 mr-2" />
                  Solicitar Acceso al Repositorio
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col">
      {/* Controls - Hidden in screenshot mode */}
      {!screenshotMode && (
        <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between">
          {/* Left controls */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/')}
              className="bg-black/50 border-white/30 text-white hover:bg-black/70"
            >
              <X className="h-4 w-4 mr-2" />
              Cerrar
            </Button>
            <Badge className="bg-slate-800 text-white text-sm px-3 py-1">
              {scene.fileName}
            </Badge>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowScript(!showScript)}
              className="bg-black/50 border-white/30 text-white hover:bg-black/70"
            >
              {showScript ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
              {showScript ? 'Ocultar Guion' : 'Ver Guion'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={copyAllScripts}
              className="bg-black/50 border-white/30 text-white hover:bg-black/70"
            >
              {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
              Copiar Todo
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setScreenshotMode(true)}
              className="bg-emerald-600 border-emerald-500 text-white hover:bg-emerald-700"
            >
              <FileText className="h-4 w-4 mr-2" />
              Modo Screenshot
            </Button>
          </div>
        </div>
      )}

      {/* Screenshot mode exit button */}
      {screenshotMode && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setScreenshotMode(false)}
          className="absolute top-4 right-4 z-50 bg-red-600 border-red-500 text-white hover:bg-red-700"
        >
          <X className="h-4 w-4 mr-2" />
          Salir Modo Screenshot
        </Button>
      )}

      {/* Main content area - 16:9 aspect ratio */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div 
          className="w-full bg-white rounded-lg overflow-hidden shadow-2xl"
          style={{ 
            maxWidth: '1920px',
            aspectRatio: '16/9'
          }}
        >
          {renderSceneContent()}
        </div>
      </div>

      {/* Script overlay */}
      {showScript && !screenshotMode && (
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 max-w-3xl w-full mx-4 bg-black/90 rounded-xl p-6 border border-white/20">
          <p className="text-white text-lg leading-relaxed">{scene.script}</p>
        </div>
      )}

      {/* Navigation - Hidden in screenshot mode */}
      {!screenshotMode && (
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-6">
          {/* Progress bar */}
          <div className="flex items-center gap-2">
            {scenes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentScene(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentScene 
                    ? 'w-8 bg-blue-500' 
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={prevScene}
              disabled={currentScene === 0}
              className="bg-black/50 border-white/30 text-white hover:bg-black/70 disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Anterior
            </Button>
            <span className="text-white font-mono text-lg">
              {currentScene + 1} / {totalScenes}
            </span>
            <Button
              variant="outline"
              onClick={nextScene}
              disabled={currentScene === totalScenes - 1}
              className="bg-black/50 border-white/30 text-white hover:bg-black/70 disabled:opacity-30"
            >
              Siguiente
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Help text */}
      {!screenshotMode && (
        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/50 text-xs">
          Usa las flechas ← → del teclado para navegar • ESC para cerrar
        </p>
      )}
    </div>
  );
}
